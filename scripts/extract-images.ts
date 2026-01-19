
import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { allVolumes } from '../lib/volumes';

const PUBLIC_DIR = path.join(process.cwd(), 'public', 'images', 'books');


async function getEpubBuffer(source: string, volumeId: string): Promise<ArrayBuffer | null> {
    const LOCAL_DIRS = [
        '/home/kamisama/Downloads/cote/year 1',
        '/home/kamisama/Downloads/cote/year 2',
        '/home/kamisama/Downloads/cote/year 3'
    ];

   
    let searchNames = [path.basename(source)];
    const vol = allVolumes.find(v => v.id === volumeId);
    let validDirs = LOCAL_DIRS;

    if (vol) {
        if (vol.volumeNumber.startsWith('Y1:')) validDirs = [LOCAL_DIRS[0]];
        else if (vol.volumeNumber.startsWith('Y2:')) validDirs = [LOCAL_DIRS[1]];
        else if (vol.volumeNumber.startsWith('Y3:')) validDirs = [LOCAL_DIRS[2]];

        const parts = vol.volumeNumber.split(':');
        if (parts.length === 2) {
            const vNum = parts[1].replace('V', '');
            const padded = vNum.length === 1 && !vNum.includes('.') ? `0${vNum}` : vNum;
            searchNames.push(`Volume ${padded}.epub`);
            searchNames.push(`Volume ${vNum}.epub`);
            searchNames.push(`volume ${vNum}.epub`);
            searchNames.push(`${vol.volumeNumber.replace(':', '')}.epub`);
        }
    }

    for (const dir of validDirs) {
        if (!fs.existsSync(dir)) continue;
        for (const name of searchNames) {
            const p = path.join(dir, name);
            if (fs.existsSync(p)) {
                return fs.readFileSync(p).buffer as ArrayBuffer;
            }
        }
    }

    return null;
}

async function extractImages() {
    console.log('Starting image extraction...');

    for (const volume of allVolumes) {
        if (!volume.epubSource) continue;
        console.log(`Processing ${volume.id}...`);

        const epubBuffer = await getEpubBuffer(volume.epubSource, volume.id);
        if (!epubBuffer) {
            console.warn(`Could not find EPUB for ${volume.id}`);
            continue;
        }

        const zip = await JSZip.loadAsync(epubBuffer);
        const volumeDir = path.join(PUBLIC_DIR, volume.id);

        if (!fs.existsSync(volumeDir)) {
            fs.mkdirSync(volumeDir, { recursive: true });
        }

       
        const imageFiles = Object.keys(zip.files).filter(filename =>
            filename.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)
        );

        console.log(`Found ${imageFiles.length} images in ${volume.id}`);

        for (const filename of imageFiles) {
           

            const destPath = path.join(volumeDir, filename);
            const destDir = path.dirname(destPath);

            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            const fileData = await zip.file(filename)?.async('nodebuffer');
            if (fileData) {
                fs.writeFileSync(destPath, fileData);
            }
        }
    }

    console.log('Extraction complete!');
}

extractImages();
