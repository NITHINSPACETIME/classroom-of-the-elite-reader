import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { allVolumes as volumes } from './volumes';

export interface ChapterContent {
    title: string;
    content: string;
    prevChapter?: { volumeId: string, chapter: number, title?: string };
    nextChapter?: { volumeId: string, chapter: number, title?: string };
    toc?: { label: string, href: string, index: number }[];
    currentSpineIndex?: number;
}

export interface VolumeStructure {
    toc: { label: string, href: string, index: number }[];
    spineIndexToHref: string[];
    manifest: Record<string, string>;
    opfDir: string;
}


export function isStoryChapter(label: string): boolean {
    const lower = label.toLowerCase();


    if (lower.includes('classroom of the elite') && lower.trim().startsWith('chapter')) {
        return true;
    }

    const skip = [
        'table of contents', 'contents', 'copyright', 'title page', 'gallery',
        'illustration', 'credit', 'colophon', 'nav', 'toc', 'newsletter',
        'author', 'illustrator', 'classroom of the elite',
        'synopsis', 'front matter', 'color', 'insert', 'images', 'flyleaf',
        'bonus', 'advertisement', 'preview', 'acknowledgments', 'dedication'
    ];

    return !skip.some(s => new RegExp(`(?:^|[\\s,;:!?\\-"'(])${s}`, 'i').test(lower));
}


function shouldSkipRenaming(volumeId: string, volumeNumber: string): boolean {

    if (volumeNumber.includes('Volume 0') || volumeNumber === '0' || volumeNumber === 'V0') return true;
    if (volumeNumber.startsWith('Y3')) {
        const vNum = volumeNumber.split(':')[1]?.replace('V', '');
        if (['1', '2', '3'].includes(vNum)) return true;
    }
    return false;
}




export async function getEpubBuffer(source: string, volumeId: string): Promise<ArrayBuffer | null> {
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const CACHE_DIR = path.join(baseDir, '.cache', 'cote', 'downloads');

    if (source.startsWith('/books/')) {
        try {
            const publicPath = path.join(process.cwd(), 'public', source);
            if (fs.existsSync(publicPath)) {
                const buffer = fs.readFileSync(publicPath);
                return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
            } else {

            }
        } catch (e) {
        }
    }


    if (!process.env.VERCEL) {
        if (!fs.existsSync(CACHE_DIR)) {
            try {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
            } catch (e) { }
        }
        const cachedFile = path.join(CACHE_DIR, `${volumeId}.epub`);
        if (fs.existsSync(cachedFile)) {
            try {
                const buffer = fs.readFileSync(cachedFile);
                if (buffer.length > 0) {
                    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
                }
            } catch (e) { }
        }
    }

    let resultBuffer: ArrayBuffer | null = null;


    if (!resultBuffer && source.startsWith('http')) {
        try {
            const res = await fetch(source, { cache: 'force-cache' });
            if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`);
            resultBuffer = await res.arrayBuffer();
        } catch (e) {
            return null;
        }
    }

    if (!resultBuffer) {
        const githubRawBase = "https://raw.githubusercontent.com/NITHINSPACETIME/classroom-of-the-elite-reader/main";
        if (!source.startsWith('http')) {
            try {
                const cleanSource = source.startsWith('/') ? source.substring(1) : source;
                const pathInRepo = `public/${cleanSource}`;
                const url = `${githubRawBase}/${pathInRepo}`;
                const res = await fetch(url, { cache: 'force-cache' });
                if (res.ok) {
                    resultBuffer = await res.arrayBuffer();
                }
            } catch (e) { }
        }
    }

    if (resultBuffer && !process.env.VERCEL) {
        try {
            if (!fs.existsSync(CACHE_DIR)) {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
            }
            const cachedFile = path.join(CACHE_DIR, `${volumeId}.epub`);
            fs.writeFileSync(cachedFile, Buffer.from(resultBuffer));
        } catch (e) { }
    }

    return resultBuffer;
}


export async function getVolumeStructure(volumeId: string, zip?: JSZip): Promise<VolumeStructure | null> {
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const CACHE_DIR = path.join(baseDir, '.cache', 'cote', volumeId);
    const cacheFile = path.join(CACHE_DIR, 'structure.json');


    if (fs.existsSync(cacheFile)) {
        try {
            return JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
        } catch (e) {

        }
    }


    if (!zip) return null;

    try {

        const containerXml = await zip.file("META-INF/container.xml")?.async("string");
        if (!containerXml) throw new Error("META-INF/container.xml not found");

        const opfPathMatch = containerXml.match(/full-path="([^"]+)"/);
        if (!opfPathMatch) throw new Error("OPF path not found in container.xml");
        const opfPath = opfPathMatch[1];
        const opfDir = path.dirname(opfPath);

        const opfContent = await zip.file(opfPath)?.async("string");
        if (!opfContent) throw new Error(`OPF file not found: ${opfPath}`);


        const manifest: Record<string, string> = {};
        const itemRegex = /<item\s+([^>]+)>/g;
        let match;
        while ((match = itemRegex.exec(opfContent)) !== null) {
            const attrs = match[1];
            const idMatch = attrs.match(/id="([^"]+)"/);
            const hrefMatch = attrs.match(/href="([^"]+)"/);
            if (idMatch && hrefMatch) {
                manifest[idMatch[1]] = hrefMatch[1];
            }
        }

        const spineRefs: string[] = [];
        const spineRegex = /<itemref\s+[^>]*idref="([^"]+)"/g;
        while ((match = spineRegex.exec(opfContent)) !== null) {
            spineRefs.push(match[1]);
        }


        const spineIndexToHref: string[] = spineRefs.map(id => {
            const rel = manifest[id];
            return rel ? (opfDir === '.' ? rel : path.join(opfDir, rel).replace(/\\/g, '/')) : '';
        });


        const spineTagMatch = opfContent.match(/<spine\s+[^>]*toc="([^"]+)"/);
        let ncxId = spineTagMatch ? spineTagMatch[1] : null;

        if (!ncxId) {
            const ncxItemMatch = opfContent.match(/<item\s+[^>]*id="([^"]+)"\s+[^>]*media-type="application\/x-dtbncx\+xml"/);
            if (ncxItemMatch) ncxId = ncxItemMatch[1];
        }

        let toc: { label: string, href: string, index: number }[] = [];


        if (volumeId === 'y2v11') {
            const tocOverrides = [

                { label: "Illustrations", href: "index_split_000.html#illustrations", index: 1 },
                { label: "Prologue: Miki Yamamura’s Monologue", href: "index_split_000.html#prologue", index: 2 },
                { label: "Chapter 1: The Elusive Two-Party Interview", href: "index_split_001.html#chapter-1", index: 3 },
                { label: "Chapter 2: The Exchange Training Camp", href: "index_split_002.html#chapter-2", index: 4 },
                { label: "Chapter 3: Request from Horikita & Request from Ayanokōji", href: "index_split_002.html#chapter-3", index: 4 },
                { label: "Chapter 4: A Strange Discomfort", href: "index_split_003.html#chapter-4", index: 5 },
                { label: "Chapter 5: The One Who Watches, The One Being Watched", href: "index_split_004.html#chapter-5", index: 6 },
                { label: "Chapter 6: A Peaceful Resolution", href: "index_split_005.html#chapter-6", index: 7 },
                { label: "Chapter 7: A Settled Night", href: "index_split_006.html#chapter-7", index: 8 },
                { label: "Chapter 8: The Courage to Move Forward", href: "index_split_007.html#chapter-8", index: 9 },
                { label: "Epilogue: Who is the Challenger?", href: "index_split_007.html#epilogue", index: 9 },
                { label: "Postscript", href: "index_split_007.html#postscript", index: 9 }
            ];
            toc = tocOverrides.map(t => ({ ...t }));
        } else if (ncxId && manifest[ncxId]) {
            const ncxHref = manifest[ncxId];
            const ncxPath = opfDir === '.' ? ncxHref : path.join(opfDir, ncxHref);
            const ncxContent = await zip.file(ncxPath)?.async("string");
            if (ncxContent) {
                const navPointRegex = /<navLabel>\s*<text>([^<]+)<\/text>\s*<\/navLabel>\s*<content\s+src="([^"]+)"/g;
                let navMatch;
                while ((navMatch = navPointRegex.exec(ncxContent)) !== null) {
                    const label = navMatch[1];
                    const src = navMatch[2];


                    const ncxDir = path.dirname(ncxPath);
                    const absPath = path.join(ncxDir, src.split('#')[0]).replace(/\\/g, '/');


                    const index = spineIndexToHref.indexOf(absPath);
                    if (index !== -1) {

                        toc.push({ label, href: src, index: index + 1 });
                    }
                }
            }
        }


        const candidates = spineIndexToHref.map((href, idx) => ({ href, idx })).slice(-5);

        for (const { href, idx } of candidates) {
            const inToc = toc.some(t => t.index === idx + 1);
            if (!inToc) {
                const itemPath = href;
                const content = await zip.file(itemPath)?.async("string");
                if (content) {
                    const lowerContent = content.toLowerCase().substring(0, 2000);
                    let label = "";

                    if (lowerContent.includes('about the author') || lowerContent.includes('author:')) {
                        label = 'About the Author';
                    } else if (lowerContent.includes('postscript')) {
                        label = 'Postscript';
                    } else if (lowerContent.includes('short story') || lowerContent.includes('ss')) {
                        label = 'Short Story';
                    }

                    if (label) {
                        toc.push({ label, href, index: idx + 1 });
                    }
                }
            }
        }


        if (volumeId === 'y2v11') {
            const epilogueIndex = toc.findIndex(t => t.label.toLowerCase().includes('epilogue'));
            if (epilogueIndex !== -1) {

                const hasPostscript = toc.some(t => t.label.toLowerCase().includes('postscript'));
                if (!hasPostscript) {

                    const postscriptItem = {
                        label: "Postscript",
                        href: "index_split_007.html",
                        index: 39
                    };
                    toc.push(postscriptItem);
                }
            }
        }


        if (volumeId === 'y2v9') {
            const ch8Index = toc.findIndex(t => t.label.includes('Chapter 8: A Tinge of Anxiety') || t.label.includes('Epilogue: A Tinge of Anxiety'));
            if (ch8Index !== -1) {
                toc[ch8Index].label = 'Chapter 8 - Epilogue : A Tinge of Anxiety';
            }
        }


        if (volumeId === 'y2v9.5') {
            const index = toc.findIndex(t => t.label.includes('Chapter 7'));
            if (index !== -1) {
                toc[index].label = toc[index].label.replace('Chapter 7:', 'Chapter 7 - Epilogue :');
            }
        }

        if (volumeId === 'y2v10') {
            const index = toc.findIndex(t => t.label.includes('Chapter 9'));
            if (index !== -1) {
                toc[index].label = toc[index].label.replace('Chapter 9:', 'Chapter 9 - Epilogue :');
            }
        }


        if (volumeId === 'y2v12') {
            const index = toc.findIndex(t => t.label.includes('Chapter 10'));
            if (index !== -1) {
                toc[index].label = toc[index].label.replace('Chapter 10:', 'Chapter 10 - Epilogue :');
            }
        }

        const volume = volumes.find(v => v.id === volumeId);
        if (volume && !shouldSkipRenaming(volumeId, volume.volumeNumber)) {
            const storyChapters = toc.filter(t => isStoryChapter(t.label));

            if (storyChapters.length > 0) {

                const first = storyChapters[0];
                if (!first.label.toLowerCase().includes('prologue')) {
                    if (first.label.match(/^Chapter \d+/)) {
                        first.label = first.label.replace(/^Chapter (\d+)(:?)/, 'Chapter $1 - Prologue $2');
                    } else {
                        first.label = `Prologue: ${first.label}`;
                    }
                }


                if (storyChapters.length > 1) {
                    const last = storyChapters[storyChapters.length - 1];
                    if (!last.label.toLowerCase().includes('epilogue')) {
                        if (last.label.match(/^Chapter \d+/)) {
                            last.label = last.label.replace(/^Chapter (\d+)(:?)/, 'Chapter $1 - Epilogue $2');
                        } else {
                            last.label = `Epilogue: ${last.label}`;
                        }
                    }
                }
            }
        }


        toc = toc.filter(t => !t.label.toLowerCase().includes('newsletter') && !t.label.toLowerCase().includes('legacyemtls'));


        if (volumeId.startsWith('ss-')) {

            toc = toc.filter(t => {
                const filename = t.href.split('/').pop()?.toLowerCase() || '';


                if (volumeId === 'ss-y3-v1' && (filename === 'ss-1.xhtml' || filename.startsWith('ss-1-'))) {
                    return false;
                }

                return filename.startsWith('ss-');
            });


            if (volumeId === 'ss-y3-v1') {
                toc.sort((a, b) => {
                    const filenameA = a.href.split('/').pop()?.toLowerCase() || '';
                    const filenameB = b.href.split('/').pop()?.toLowerCase() || '';


                    if (filenameA.startsWith('ss-5')) return -1;
                    if (filenameB.startsWith('ss-5')) return 1;


                    return a.index - b.index;
                });


                toc = toc.map(t => {
                    if (t.label.includes('Guidebook Short Story: A Pillar of Support')) {
                        return { ...t, label: "Haruka Hasebe's Short Story: A Pillar of Support" };
                    }
                    return t;
                });
            }
        } else {

            toc = toc.filter(t => {
                const filename = t.href.split('/').pop()?.toLowerCase() || '';
                const label = t.label.toLowerCase();

                if (filename.startsWith('ss-')) return false;
                if (label.includes('short story')) return false;


                if (filename.includes('nav.xhtml') || filename.includes('nav.html')) return false;

                return true;
            });
        }

        const structure: VolumeStructure = {
            toc,
            spineIndexToHref,
            manifest,
            opfDir
        };


        try {
            if (!fs.existsSync(CACHE_DIR)) {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
            }
            fs.writeFileSync(cacheFile, JSON.stringify(structure));
        } catch (e) {

        }

        return structure;

    } catch (e) {
        console.error('getVolumeStructure error:', e);
        return null;
    }
}

export async function getChapterContent(volumeId: string, chapterIndex: number, isLogical: boolean = false): Promise<ChapterContent | null> {
    const volume = volumes.find(v => v.id === volumeId);
    if (!volume || !volume.epubSource) {

        return null;
    }


    let structure = await getVolumeStructure(volumeId);
    let zip: JSZip | null = null;


    if (!structure) {
        const epubBuffer = await getEpubBuffer(volume.epubSource, volumeId);
        if (!epubBuffer) return null;
        zip = await JSZip.loadAsync(epubBuffer);
        structure = await getVolumeStructure(volumeId, zip);
    }

    if (!structure) return null;

    const { toc, spineIndexToHref, manifest, opfDir } = structure;


    let rawIndex = chapterIndex - 1;

    if (isLogical) {
        const storyChapters = toc.filter(t => isStoryChapter(t.label));
        const mappingCandidates = storyChapters.filter(t => !t.label.match(/^Part \d+/i));

        const targetTocItem = mappingCandidates[chapterIndex - 1];

        if (targetTocItem) {
            rawIndex = targetTocItem.index - 1;
            chapterIndex = targetTocItem.index;
        } else {
            if (rawIndex < 0 || rawIndex >= spineIndexToHref.length) return null;
        }
    }








    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const CACHE_DIR = path.join(baseDir, '.cache', 'cote', volumeId);
    const cacheFile = path.join(CACHE_DIR, `${chapterIndex}.json`);

    if (fs.existsSync(cacheFile)) {
        try {
            const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));

            return cached;
        } catch (e) {

        }
    }


    if (rawIndex < 0 || rawIndex >= spineIndexToHref.length) {
        return null;
    }


    const currentTocItem = toc.slice().reverse().find(t => t.index <= chapterIndex);
    const bestTitle = currentTocItem ? currentTocItem.label : `Chapter ${chapterIndex}`;


    const startIndex = rawIndex;


    const sortedToc = toc.slice().sort((a, b) => a.index - b.index);
    const nextTocItem = sortedToc.find(t => t.index > chapterIndex);


    const endIndex = nextTocItem ? (nextTocItem.index - 1) : spineIndexToHref.length;

    if (!zip) {
        const epubBuffer = await getEpubBuffer(volume.epubSource, volumeId);
        if (!epubBuffer) return null;
        zip = await JSZip.loadAsync(epubBuffer);
    }

    let mergedHtml = '';

    for (let i = startIndex; i < endIndex; i++) {
        const absPath = spineIndexToHref[i];
        let chunkRaw = await zip.file(absPath)?.async("string");
        if (!chunkRaw) continue;

        const bodyMatch = chunkRaw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        let chunkHtml = bodyMatch ? bodyMatch[1] : chunkRaw;


        const imgRegex = /src="([^"]+)"/g;
        let imgMatch;
        const imagesToLoad: { original: string, fullPath: string }[] = [];

        while ((imgMatch = imgRegex.exec(chunkHtml)) !== null) {
            const imgSrc = imgMatch[1];
            if (!imgSrc.startsWith('http') && !imgSrc.startsWith('data:')) {
                const imgDir = path.dirname(absPath);
                const fullImgPath = path.join(imgDir, imgSrc);
                const normalizedImgPath = fullImgPath.replace(/\\/g, '/');
                imagesToLoad.push({ original: imgSrc, fullPath: normalizedImgPath });
            }
        }


        for (const img of imagesToLoad) {
            const publicUrl = `/images/books/${volumeId}/${img.fullPath}`;
            const encodedUrl = publicUrl.split('/').map(part => encodeURIComponent(part)).join('/').replace('//', '/');
            chunkHtml = chunkHtml.split(`src="${img.original}"`).join(`src="${encodedUrl}" loading="lazy" decoding="async"`);
        }


        const linkRegex = /href="([^"]+)"/g;
        let linkMatch;
        const linksToReplace: { original: string, newHref: string }[] = [];

        while ((linkMatch = linkRegex.exec(chunkHtml)) !== null) {
            const href = linkMatch[1];
            if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;

            const cleanHref = href.split('#')[0];
            const linkDir = path.dirname(absPath);
            const absLinkPath = (linkDir === '.' ? cleanHref : path.join(linkDir, cleanHref)).replace(/\\/g, '/');


            const linkIndex = spineIndexToHref.indexOf(absLinkPath);
            if (linkIndex !== -1) {
                linksToReplace.push({
                    original: href,
                    newHref: `/read/${volumeId}/${linkIndex + 1}`
                });
            }
        }

        linksToReplace.forEach(link => {
            chunkHtml = chunkHtml.split(`href="${link.original}"`).join(`href="${link.newHref}"`);
        });

        mergedHtml += chunkHtml;
    }

    let cleanHtml = mergedHtml;

    if (volumeId === 'y2v9' || volumeId === 'y2v9.5' || volumeId === 'y2v10' || volumeId === 'y2v12') {

        cleanHtml = cleanHtml.replace(/class="P_Chapter_Header"/g, 'class="P__STAR__STAR__STAR__page_break"');


        cleanHtml = cleanHtml.replace(/<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>\s*<span[^>]*>\s*<span[^>]*>\s*(?:&nbsp;|&#160;| )\s*<\/span>\s*<\/span>\s*<\/p>/gi, '');


        cleanHtml = cleanHtml.replace(/(<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>[\s\S]*?)<br\s*\/?>([\s\S]*?<\/p>)/gi, '$1 $2');
    }


    if (volumeId === 'y2v9' && cleanHtml.includes('A Tinge of Anxiety')) {

        const headerRegex = /<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>[\s\S]*?Chapter 8\s*:\s*<br\s*\/?>\s*A Tinge of Anxiety[\s\S]*?<\/p>/i;

        if (headerRegex.test(cleanHtml)) {

            cleanHtml = cleanHtml.replace(headerRegex,
                '<p class="P__STAR__STAR__STAR__page_break"><span><span style="font-weight: bold; font-size: 1.17em;">Chapter 8 - Epilogue<br/>A Tinge of Anxiety</span></span></p>'
            );
        } else {

            cleanHtml = cleanHtml.replace(/Chapter 8\s*:\s*/gi, '');
        }
    }


    if (volumeId === 'y2v9.5' && cleanHtml.includes('Changing Relationships')) {
        const headerRegex = /<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>[\s\S]*?Chapter 7\s*:\s*<br\s*\/?>\s*Changing Relationships[\s\S]*?<\/p>/i;
        if (headerRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(headerRegex,
                '<p class="P__STAR__STAR__STAR__page_break"><span><span style="font-weight: bold; font-size: 1.17em;">Chapter 7 - Epilogue<br/>Changing Relationships</span></span></p>'
            );
        }
    }


    if (volumeId === 'y2v10' && cleanHtml.includes('Harbinger of Awakening')) {
        const headerRegex = /<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>[\s\S]*?Chapter 9\s*:\s*<br\s*\/?>\s*Harbinger of Awakening[\s\S]*?<\/p>/i;
        if (headerRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(headerRegex,
                '<p class="P__STAR__STAR__STAR__page_break"><span><span style="font-weight: bold; font-size: 1.17em;">Chapter 9 - Epilogue<br/>Harbinger of Awakening</span></span></p>'
            );
        }
    }


    if (volumeId === 'y2v12' && cleanHtml.includes('The Truth Is')) {

        const headerRegex = /<p[^>]*class="P__STAR__STAR__STAR__page_break"[^>]*>[\s\S]*?Chapter 10\s*:\s*(?:<br\s*\/?>\s*)?The Truth Is[\s\S]*?<\/p>/i;
        if (headerRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(headerRegex,
                '<p class="P__STAR__STAR__STAR__page_break"><span><span style="font-weight: bold; font-size: 1.17em;">Chapter 10 - Epilogue<br/>The Truth Is...</span></span></p>'
            );
        }

    }

    if (volumeId === 'y2v11' && cleanHtml.includes('Chapter 7: A Settled Night') && cleanHtml.includes('Chapter 8: The Courage to Step Forward')) {
        const splitRegex = /(<h1[^>]*>[\s\S]*?Chapter 8[\s\S]*?<\/h1>)/i;
        const parts = cleanHtml.split(splitRegex);
        if (parts.length > 1) {
            cleanHtml = parts[0];
        }
    }



    cleanHtml = cleanHtml.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, '');


    if (cleanHtml.includes('Or visit us online') || cleanHtml.includes('gomanga.com/newsletter') || cleanHtml.includes('Seas books and brand-new licenses')) {
        const markers = [
            'Get the latest news about your favorite Seven Seas books',
            'Sign up for our newsletter!',
            'Or visit us online:',
            'gomanga.com/newsletter',
            'sevenseaslogo',
            'Thank you for reading!'
        ];

        let cutIndex = -1;
        for (const marker of markers) {
            const idx = cleanHtml.indexOf(marker);
            if (idx !== -1) {

                const pStart = cleanHtml.lastIndexOf('<p', idx);
                if (pStart !== -1) {
                    if (cutIndex === -1 || pStart < cutIndex) {
                        cutIndex = pStart;
                    }
                }
            }
        }

        if (cutIndex !== -1) {
            cleanHtml = cleanHtml.substring(0, cutIndex);
        }
    }


    if (volumeId === 'y2v11') {

        cleanHtml = cleanHtml.replace(/<p[^>]*>\s*RoyalMTLs\s*<\/p>/gi, '');

        cleanHtml = cleanHtml.replace(/<p[^>]*>\s*\d+\s*<\/p>/gi, '');

        cleanHtml = cleanHtml.replace(/<p[^>]*>\s*<\/p>/gi, '');
        cleanHtml = cleanHtml.replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/gi, '');


        cleanHtml = cleanHtml.replace(
            /<p class="calibre1">(\s*<img[^>]+>\s*)<\/p>/gi,
            '<p class="P_TEXTBODY_CENTERALIGN">$1</p>'
        );

        cleanHtml = cleanHtml.replace(
            /class="calibre1"/gi,
            'class="P_Prose_Formatting"'
        );


        cleanHtml = cleanHtml.replace(/class="calibre2"/gi, '');



        if (cleanHtml.includes("Prologue: Miki Yamamura")) {

            cleanHtml = '<div id="illustrations"></div>' + cleanHtml;
        }

        // Prologue
        if (cleanHtml.includes("Yamamura Miki's Monologue")) {
            cleanHtml = cleanHtml.replace(
                /<p class="P_Prose_Formatting">Yamamura Miki's Monologue\s*<\/p>/i,
                '<h1 id="prologue" class="chapter-title">Prologue: Miki Yamamura’s Monologue</h1>'
            );
        }


        const chapterRegexP = /<p class="P_Prose_Formatting">Chapter (\d+):\s*<\/p>\s*<p class="P_Prose_Formatting">(.*?)<\/p>/gi;
        cleanHtml = cleanHtml.replace(chapterRegexP, (match, num, title) => {
            return `<h1 id="chapter-${num}" class="chapter-title">Chapter ${num}: ${title.trim()}</h1>`;
        });


        const chapterRegexH = /<h2[^>]*>Chapter (\d+):\s*<\/h2>\s*<h3[^>]*>(.*?)<\/h3>/gi;
        cleanHtml = cleanHtml.replace(chapterRegexH, (match, num, title) => {
            return `<h1 id="chapter-${num}" class="chapter-title">Chapter ${num}: ${title.trim()}</h1>`;
        });


        if (cleanHtml.includes('Epilogue:')) {

            cleanHtml = cleanHtml.replace(
                /<p class="P_Prose_Formatting">Epilogue: <\/p>\s*<p class="P_Prose_Formatting">Who is the Challenger\?/i,
                '<h1 id="epilogue" class="chapter-title">Epilogue: Who is the Challenger?</h1>'
            );

        }


        const postscriptText = "Author’s Postscript";
        const psIndex = cleanHtml.indexOf(postscriptText);
        if (psIndex !== -1) {
            const pStart = cleanHtml.lastIndexOf('<p', psIndex);
            const pEnd = cleanHtml.indexOf('</p>', psIndex);
            if (pStart !== -1 && pEnd !== -1) {
                const originalP = cleanHtml.substring(pStart, pEnd + 4);
                const newHeader = '<h1 id="postscript" class="chapter-title">Author’s Postscript</h1>';
                cleanHtml = cleanHtml.replace(originalP, newHeader);
            }
        }


        const injectedCss = `
<style>
    body {
        color: #e5e5e5 !important;
        background-color: transparent !important;
    }
    .P_Prose_Formatting {
        font-family: serif; /* Match standard LN feel */
        font-size: 1.08em;
        text-align: justify;
        text-indent: 1.50em; /* Standard indent */
        line-height: 1.4;
        margin-top: 0.42em;
        margin-bottom: 0.42em;
        color: inherit; /* Essential: Inherit theme color (white in dark mode) */
    }
    .P_TEXTBODY_CENTERALIGN {
        font-size: 1.00em;
        text-align: center;
        text-indent: 0;
        margin-top: 1em;
        margin-bottom: 1em;
        display: block;
    }
    .chapter-title {
        font-family: serif;
        font-weight: bold;
        font-size: 1.8em;
        text-align: center;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        page-break-before: always;
        color: inherit;
    }
    a { color: inherit; text-decoration: none; }
    img { 
        max-width: 100%; 
        height: auto; 
        display: block; 
        margin: 0 auto;
    }
</style>
`;
        cleanHtml = cleanHtml + injectedCss;
    }




    const EXCLUDED_FROM_SHIFT = ['v0', 'y3v1', 'y3v2', 'y3v3'];

    if (!EXCLUDED_FROM_SHIFT.includes(volumeId)) {
        const imageBlockRegex = /^\s*<p[^>]*class="P_TEXTBODY_CENTERALIGN"[^>]*>\s*<span>\s*<img[^>]+>\s*<\/span>\s*<\/p>/i;

        if (imageBlockRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(imageBlockRegex, '');
        }


        if (endIndex < spineIndexToHref.length) {
            const nextAbsPath = spineIndexToHref[endIndex];
            const nextHtmlRaw = await zip!.file(nextAbsPath)?.async("string");
            if (nextHtmlRaw) {
                const nextBody = nextHtmlRaw.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || nextHtmlRaw;


                const nextMatch = nextBody.match(imageBlockRegex);
                if (nextMatch) {
                    let imgChunk = nextMatch[0];
                    const imgRegex = /src="([^"]+)"/g;
                    const imgMatch = imgRegex.exec(imgChunk);
                    if (imgMatch) {
                        const imgSrc = imgMatch[1];
                        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('data:')) {
                            const imgDir = path.dirname(nextAbsPath);
                            const fullImgPath = path.join(imgDir, imgSrc);
                            const normalizedImgPath = fullImgPath.replace(/\\/g, '/');
                            const publicUrl = `/images/books/${volumeId}/${normalizedImgPath}`;
                            const encodedUrl = publicUrl.split('/').map(part => encodeURIComponent(part)).join('/').replace('//', '/');
                            imgChunk = imgChunk.replace(`src="${imgSrc}"`, `src="${encodedUrl}" loading="lazy" decoding="async"`);
                        }
                    }
                    cleanHtml += imgChunk;
                }
            }
        }
    }

    if (bestTitle.toLowerCase().includes('epilogue') || bestTitle.toLowerCase().includes('prologue')) {
        const type = bestTitle.toLowerCase().includes('epilogue') ? 'Epilogue' : 'Prologue';

        const chapterTitleRegex = /(>|\s)(Chapter\s+\d+)(:|)(\s*<)/i;
        if (chapterTitleRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(chapterTitleRegex, `$1$2 - ${type}$3$4`);
        }
    }

    if (volumeId === 'ss-y3-v1') {
        cleanHtml = cleanHtml.replace(
            /Guidebook Short Story:\s*(<br\s*\/?>)?\s*A Pillar of Support/gi,
            "Haruka Hasebe's Short Story:<br>A Pillar of Support"
        );

        cleanHtml = cleanHtml.replace(
            /<h1([^>]*)>\s*<a[^>]*>([\s\S]*?)<\/a>\s*<\/h1>/gi,
            '<h1$1>$2</h1>'
        );

        cleanHtml = cleanHtml.replace(
            /<p[^>]*>[\s\S]*?Original translation provided by[\s\S]*?LegacyEMTLs[\s\S]*?<\/p>/gi,
            ''
        );
    }


    let prevChapterVal = undefined;
    let nextChapterVal = undefined;


    const ssY3V1CustomOrder = [49, 46, 47, 48, 50, 51, 52];

    if (volumeId === 'ss-y3-v1') {
        const currentOrderIndex = ssY3V1CustomOrder.indexOf(chapterIndex);
        if (currentOrderIndex !== -1) {
            if (currentOrderIndex > 0) {
                const prevSpineIndex = ssY3V1CustomOrder[currentOrderIndex - 1];
                const prevItem = toc.find(t => t.index === prevSpineIndex);
                prevChapterVal = {
                    volumeId,
                    chapter: prevSpineIndex,
                    title: prevItem?.label || `Chapter ${prevSpineIndex}`
                };
            }
            if (currentOrderIndex < ssY3V1CustomOrder.length - 1) {
                const nextSpineIndex = ssY3V1CustomOrder[currentOrderIndex + 1];
                const nextItem = toc.find(t => t.index === nextSpineIndex);
                nextChapterVal = {
                    volumeId,
                    chapter: nextSpineIndex,
                    title: nextItem?.label || `Chapter ${nextSpineIndex}`
                };
            }
        }
    } else if (isLogical) {
        const storyChapters = toc.filter(t => isStoryChapter(t.label));
        const currentStoryIndex = storyChapters.findIndex(t => t.index === chapterIndex);

        if (currentStoryIndex !== -1) {
            if (currentStoryIndex > 0) {
                const prevStory = storyChapters[currentStoryIndex - 1];
                prevChapterVal = {
                    volumeId,
                    chapter: prevStory.index,
                    title: prevStory.label
                };
            }
            if (currentStoryIndex < storyChapters.length - 1) {
                const nextStory = storyChapters[currentStoryIndex + 1];
                nextChapterVal = {
                    volumeId,
                    chapter: nextStory.index,
                    title: nextStory.label
                };
            }
        }

    } else {


        let pIndex = chapterIndex - 1;
        let prevChapterCandidate = undefined;
        while (pIndex > 0) {
            const tItem = toc.find(t => t.index === pIndex);
            if (tItem && isStoryChapter(tItem.label)) {
                prevChapterCandidate = {
                    volumeId,
                    chapter: pIndex,
                    title: tItem.label
                };
                break;
            }
            pIndex--;
        }
        prevChapterVal = prevChapterCandidate;


        let nIndex = chapterIndex + 1;
        let nextChapterCandidate = undefined;
        while (nIndex <= spineIndexToHref.length) {
            const tItem = toc.find(t => t.index === nIndex);
            if (tItem && isStoryChapter(tItem.label)) {
                nextChapterCandidate = {
                    volumeId,
                    chapter: nIndex,
                    title: tItem.label
                };
                break;
            }


            if (tItem) {
                nextChapterCandidate = {
                    volumeId,
                    chapter: nIndex,
                    title: tItem.label
                };
                break;
            }

            nIndex++;
        }
        nextChapterVal = nextChapterCandidate;
    }

    const result: ChapterContent = {
        title: bestTitle,
        content: cleanHtml,
        prevChapter: prevChapterVal,
        nextChapter: nextChapterVal,
        toc,
        currentSpineIndex: chapterIndex
    };


    try {
        if (!fs.existsSync(CACHE_DIR)) {
            fs.mkdirSync(CACHE_DIR, { recursive: true });
        }
        fs.writeFileSync(cacheFile, JSON.stringify(result));
    } catch (e) {

    }


    return result;
}
