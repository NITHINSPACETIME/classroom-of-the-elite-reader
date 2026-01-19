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
        'contents', 'copyright', 'title page', 'gallery',
        'illustration', 'credit', 'colophon', 'nav', 'toc', 'newsletter',
        'author', 'illustrator', 'postscript', 'classroom of the elite',
        'synopsis'
    ];
    return !skip.some(s => lower.includes(s));
}


function shouldSkipRenaming(volumeId: string, volumeNumber: string): boolean {

    if (volumeNumber.includes('Volume 0') || volumeNumber === '0' || volumeNumber === 'V0') return true;
    if (volumeNumber.startsWith('Y3')) {
        const vNum = volumeNumber.split(':')[1]?.replace('V', '');
        if (['1', '2', '3'].includes(vNum)) return true;
    }
    return false;
}


const LOCAL_DIRS = [
    '/home/kamisama/Downloads/cote/year 1',
    '/home/kamisama/Downloads/cote/year 2',
    '/home/kamisama/Downloads/cote/year 3'
];

async function getEpubBuffer(source: string, volumeId: string): Promise<ArrayBuffer | null> {
    const baseDir = process.env.VERCEL ? '/tmp' : process.cwd();
    const CACHE_DIR = path.join(baseDir, '.cache', 'cote', 'downloads');
    if (!process.env.VERCEL) {
        if (!fs.existsSync(CACHE_DIR)) {
            try {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
            } catch (e) {
            }
        }
        const cachedFile = path.join(CACHE_DIR, `${volumeId}.epub`);
        if (fs.existsSync(cachedFile)) {
            try {
                const buffer = fs.readFileSync(cachedFile);
                if (buffer.length > 0) {

                    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
                }
            } catch (e) {

            }
        }
    }

    let searchNames = [path.basename(source)];

    const vol = volumes.find(v => v.id === volumeId);
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

    let resultBuffer: ArrayBuffer | null = null;

    if (source.startsWith('/books/')) {
        const publicFile = path.join(process.cwd(), 'public', source);
        if (fs.existsSync(publicFile)) {
            try {
                const buffer = fs.readFileSync(publicFile);

                resultBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
            } catch (e) {

            }
        }
    }

    if (!resultBuffer) {
        for (const dir of validDirs) {
            if (!fs.existsSync(dir)) continue;
            for (const name of searchNames) {
                const p = path.join(dir, name);
                if (fs.existsSync(p)) {

                    resultBuffer = fs.readFileSync(p).buffer as ArrayBuffer;
                    break;
                }
            }
            if (resultBuffer) break;
        }
    }

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
        const baseUrl = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : process.env.NEXT_PUBLIC_SITE_URL;

        if (baseUrl && !source.startsWith('http')) {
            try {
                const url = `${baseUrl}${source.startsWith('/') ? '' : '/'}${source}`;
                const res = await fetch(url, { cache: 'force-cache' });
                if (res.ok) {
                    resultBuffer = await res.arrayBuffer();
                } else {
                }
            } catch (e) {
            }
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
                } else {
                }
            } catch (e) {
            }
        }
    }

    if (!resultBuffer) {
        const publicPath = path.join(process.cwd(), 'public', source.replace(/^\//, ''));
        if (fs.existsSync(publicPath)) {
            const buffer = fs.readFileSync(publicPath);
            resultBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
        }
    }

    if (resultBuffer && !process.env.VERCEL) {
        try {
            if (!fs.existsSync(CACHE_DIR)) {
                fs.mkdirSync(CACHE_DIR, { recursive: true });
            }
            const cachedFile = path.join(CACHE_DIR, `${volumeId}.epub`);
            fs.writeFileSync(cachedFile, Buffer.from(resultBuffer));
        } catch (e) {
        }
    }
    if (resultBuffer) return resultBuffer;

    return null;
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
        if (ncxId && manifest[ncxId]) {
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

                    if (lowerContent.includes('newsletter') || href.toLowerCase().includes('newsletter')) {
                        label = 'Newsletter';
                    } else if (lowerContent.includes('about the author') || lowerContent.includes('author:')) {
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


        toc.sort((a, b) => a.index - b.index);


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

   
    const preGenPath = path.join(process.cwd(), 'public', 'content', volumeId, `${chapterIndex}.json`);

    if (!process.env.VERCEL && fs.existsSync(preGenPath)) {
        try {
            const cached = JSON.parse(fs.readFileSync(preGenPath, 'utf-8'));
            return cached;
        } catch (e) {
            
        }
    }

    if (process.env.VERCEL) {
        const baseUrl = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : (process.env.NEXT_PUBLIC_APP_URL || '');
        const contentUrl = `${baseUrl}/content/${volumeId}/${chapterIndex}.json`;

        try {
            const res = await fetch(contentUrl, { cache: 'force-cache' });
            if (res.ok) {
                const cached = await res.json();
                return cached;
            }
        } catch (e) {
            
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

    const absPath = spineIndexToHref[rawIndex];

    const currentTocItem = toc.slice().reverse().find(t => t.index <= chapterIndex);
    const bestTitle = currentTocItem ? currentTocItem.label : `Chapter ${chapterIndex}`;


    if (!zip) {
        const epubBuffer = await getEpubBuffer(volume.epubSource, volumeId);
        if (!epubBuffer) return null;
        zip = await JSZip.loadAsync(epubBuffer);
    }

    let chapterHtml = await zip.file(absPath)?.async("string");
    if (!chapterHtml) throw new Error(`Chapter file not found: ${absPath}`);


    const bodyMatch = chapterHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let cleanHtml = bodyMatch ? bodyMatch[1] : chapterHtml;


    const EXCLUDED_FROM_SHIFT = ['v0', 'y3v1', 'y3v2', 'y3v3'];

    if (!EXCLUDED_FROM_SHIFT.includes(volumeId)) {
        const imageBlockRegex = /^\s*<p[^>]*class="P_TEXTBODY_CENTERALIGN"[^>]*>\s*<span>\s*<img[^>]+>\s*<\/span>\s*<\/p>/i;


        if (imageBlockRegex.test(cleanHtml)) {
            cleanHtml = cleanHtml.replace(imageBlockRegex, '');
        }


        const nextRawIndex = rawIndex + 1;
        if (nextRawIndex < spineIndexToHref.length) {
            const nextAbsPath = spineIndexToHref[nextRawIndex];
            const nextHtmlRaw = await zip!.file(nextAbsPath)?.async("string");
            if (nextHtmlRaw) {
                const nextBody = nextHtmlRaw.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || nextHtmlRaw;
                const nextMatch = nextBody.match(imageBlockRegex);
                if (nextMatch) {
                    cleanHtml += nextMatch[0];
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


    const imgRegex = /src="([^"]+)"/g;
    let imgMatch;
    const imagesToLoad: { original: string, fullPath: string }[] = [];

    while ((imgMatch = imgRegex.exec(cleanHtml)) !== null) {
        const imgSrc = imgMatch[1];
        if (!imgSrc.startsWith('http') && !imgSrc.startsWith('data:')) {
            const imgDir = path.dirname(absPath);
            const fullImgPath = path.join(imgDir, imgSrc);

            const normalizedImgPath = fullImgPath.replace(/\\/g, '/');
            imagesToLoad.push({ original: imgSrc, fullPath: normalizedImgPath });
        }
    }

    await Promise.all(imagesToLoad.map(async (img) => {
        const imgFile = zip!.file(img.fullPath);
        if (imgFile) {
            const base64 = await imgFile.async('base64');
            const ext = path.extname(img.fullPath).toLowerCase();
            const mime = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.png' ? 'image/png' : 'image/webp';
            const dataUri = `data:${mime};base64,${base64}`;
            cleanHtml = cleanHtml.split(`src="${img.original}"`).join(`src="${dataUri}" loading="lazy" decoding="async"`);
        }
    }));


    const linkRegex = /href="([^"]+)"/g;
    let linkMatch;
    const linksToReplace: { original: string, newHref: string }[] = [];

    while ((linkMatch = linkRegex.exec(cleanHtml)) !== null) {
        const href = linkMatch[1];
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;

        const cleanHref = href.split('#')[0];
        const linkDir = path.dirname(absPath);
        const absLinkPath = (linkDir === '.' ? cleanHref : path.join(linkDir, cleanHref)).replace(/\\/g, '/');

        const index = spineIndexToHref.indexOf(absLinkPath);
        if (index !== -1) {
            linksToReplace.push({
                original: href,
                newHref: `/read/${volumeId}/${index + 1}`
            });
        }
    }

    linksToReplace.forEach(link => {
        cleanHtml = cleanHtml.split(`href="${link.original}"`).join(`href="${link.newHref}"`);
    });


    let prevChapterVal = undefined;
    let nextChapterVal = undefined;

    if (isLogical) {
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




            if (tItem) {
                prevChapterCandidate = {
                    volumeId,
                    chapter: pIndex,
                    title: tItem.label
                };
                break;
            }


            prevChapterCandidate = {
                volumeId,
                chapter: pIndex,
                title: `Chapter ${pIndex}`
            };
            break;
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

            nextChapterCandidate = {
                volumeId,
                chapter: nIndex,
                title: `Chapter ${nIndex}`
            };
            break;
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
