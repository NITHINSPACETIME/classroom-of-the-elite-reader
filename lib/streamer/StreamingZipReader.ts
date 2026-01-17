import { open } from 'fs';


const getUShort = (view: DataView, offset: number) => view.getUint16(offset, true);
const getUInt = (view: DataView, offset: number) => view.getUint32(offset, true);

interface ZipEntry {
    filename: string;
    compressedSize: number;
    uncompressedSize: number;
    offset: number;
    compressionMethod: number;
    isFolder: boolean;
}

export class StreamingZipReader {
    private url: string;
    private entries: Map<string, ZipEntry> = new Map();
    private initialized = false;
    private fileSize = 0;

    constructor(url: string) {
        this.url = url;
    }


    async initialize() {
        if (this.initialized) return;


        const headRes = await fetch(this.url, { method: 'HEAD' });
        const lenStr = headRes.headers.get('content-length');
        if (!lenStr) throw new Error("Server does not support Content-Length or Range requests.");
        this.fileSize = parseInt(lenStr, 10);


        const readSize = Math.min(this.fileSize, 65536);
        const eocdStart = this.fileSize - readSize;

        const eocdBuffer = await this.fetchRange(eocdStart, this.fileSize - 1);
        const view = new DataView(eocdBuffer);


        let eocdOffset = -1;
        for (let i = view.byteLength - 22; i >= 0; i--) {
            if (view.getUint32(i, true) === 0x06054b50) {
                eocdOffset = i;
                break;
            }
        }

        if (eocdOffset === -1) throw new Error("Invalid ZIP: EOCD not found.");


        const cdCount = getUShort(view, eocdOffset + 8);
        const cdSize = getUInt(view, eocdOffset + 12);
        const cdOffset = getUInt(view, eocdOffset + 16);


        const cdBuffer = await this.fetchRange(cdOffset, cdOffset + cdSize - 1);
        this.parseCentralDirectory(cdBuffer, cdCount);

        this.initialized = true;
        if (eocdOffset === -1) throw new Error("Invalid ZIP: EOCD not found.");
    }

    private parseCentralDirectory(buffer: ArrayBuffer, expectedCount: number) {
        let offset = 0;
        const view = new DataView(buffer);
        let count = 0;

        while (offset < buffer.byteLength && count < expectedCount * 2) {
            const sig = view.getUint32(offset, true);
            if (sig !== 0x02014b50) break;

            const method = getUShort(view, offset + 10);
            const compSize = getUInt(view, offset + 20);
            const uncompSize = getUInt(view, offset + 24);
            const nameLen = getUShort(view, offset + 28);
            const extraLen = getUShort(view, offset + 30);
            const commentLen = getUShort(view, offset + 32);

            const localHeaderOffset = getUInt(view, offset + 42);

            const filenameBuffer = buffer.slice(offset + 46, offset + 46 + nameLen);
            const decoder = new TextDecoder();
            const filename = decoder.decode(filenameBuffer);

            this.entries.set(filename, {
                filename,
                compressedSize: compSize,
                uncompressedSize: uncompSize,
                offset: localHeaderOffset,
                compressionMethod: method,
                isFolder: filename.endsWith('/')
            });

            offset += 46 + nameLen + extraLen + commentLen;
            count++;
        }
    }

    async getFile(filename: string): Promise<Response> {
        let entry = this.entries.get(filename);

        if (!entry) {
            const decoded = decodeURIComponent(filename);
            entry = this.entries.get(decoded);
            if (!entry && filename.startsWith('/')) {
                entry = this.entries.get(filename.substring(1));
            }
        }

        if (!entry) {



            if (this.entries.size > 0 && Math.random() < 0.001) { }
            return new Response("Not Found", { status: 404 });
        }


        const headerStart = entry.offset;
        const headerHead = await this.fetchRange(headerStart, headerStart + 511);
        const view = new DataView(headerHead);

        if (view.getUint32(0, true) !== 0x04034b50) throw new Error("Invalid Local File Header signature");

        const nameLen = getUShort(view, 26);
        const extraLen = getUShort(view, 28);

        const dataStart = headerStart + 30 + nameLen + extraLen;
        const dataEnd = dataStart + entry.compressedSize - 1;


        const fileData = await this.fetchRange(dataStart, dataEnd);


        let resultData: ArrayBuffer = fileData;
        if (entry.compressionMethod === 8) {

            try {

                const ds = new DecompressionStream('deflate-raw');
                const writer = ds.writable.getWriter();
                writer.write(fileData);
                writer.close();
                const response = new Response(ds.readable);
                resultData = await response.arrayBuffer();
            } catch (e) {


            }
        }


        let mime = "application/octet-stream";
        if (filename.endsWith(".html") || filename.endsWith(".xhtml")) mime = "application/xhtml+xml";
        else if (filename.endsWith(".css")) mime = "text/css";
        else if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) mime = "image/jpeg";
        else if (filename.endsWith(".png")) mime = "image/png";
        else if (filename.endsWith(".xml") || filename.endsWith(".opf") || filename.endsWith(".ncx")) mime = "application/xml";

        return new Response(resultData, {
            status: 200,
            headers: { 'Content-Type': mime }
        });
    }

    private async fetchRange(start: number, end: number): Promise<ArrayBuffer> {
        const headers = new Headers();
        headers.append('Range', `bytes=${start}-${end}`);

        const res = await fetch(this.url, { headers });
        if (!res.ok && res.status !== 206) throw new Error(`Range fetch failed: ${res.status}`);
        return await res.arrayBuffer();
    }


    has(filename: string): boolean {

        const clean = filename.startsWith('/') ? filename.substring(1) : filename;
        return this.entries.has(clean) || this.entries.has(decodeURIComponent(clean));
    }
}
