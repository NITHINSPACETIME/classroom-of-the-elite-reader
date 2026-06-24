import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { reverendInsanityVolumes, reverendInsanitySideStories } from "@/data/reverend-insanity";
import fs from "fs";
import path from "path";

const allRiVolumes = [...reverendInsanityVolumes, ...reverendInsanitySideStories];

export async function generateStaticParams() {
  const params: { volumeId: string; chapterIndex: string }[] = [];

  for (const volume of allRiVolumes) {
    for (let i = 1; i <= volume.chapters.length; i++) {
      params.push({ volumeId: volume.id, chapterIndex: String(i) });
    }
  }

  if (params.length === 0) {
    return [{ volumeId: "dummy", chapterIndex: "1" }];
  }

  return params;
}

export default async function ReverendInsanityReadPage({
  params,
}: {
  params: Promise<{ volumeId: string; chapterIndex: string }>;
}) {
  const { volumeId, chapterIndex } = await params;
  const index = parseInt(chapterIndex);

  if (isNaN(index)) notFound();

  const volume = allRiVolumes.find((v) => v.id === volumeId);
  if (!volume) notFound();

  // 1. Try to read from EPUB cache first
  let contentBody = "";
  let isHtml = false;
  const cachePath = path.join(process.cwd(), "data", "reverend-insanity-cache", `${volumeId}-${index}.json`);

  if (fs.existsSync(cachePath)) {
    try {
      const fileData = fs.readFileSync(cachePath, "utf8");
      const parsed = JSON.parse(fileData);
      contentBody = parsed.content;
      isHtml = true;
    } catch (e) {
      console.error(`Error reading cached chapter ${volumeId}-${index}:`, e);
    }
  }

  // 2. Fallback error card if content is missing
  if (!contentBody) {
    contentBody = `
<div class="border border-red-950/80 bg-[#040408] p-8 text-center rounded shadow-[0_0_30px_rgba(220,38,38,0.1)] max-w-xl mx-auto my-12">
  <div class="text-red-500 text-4xl mb-4 select-none">👁️</div>
  <h3 class="text-xl font-semibold text-white mb-2 font-serif">Offline Archive Fallback</h3>
  <p class="text-gray-400 text-sm mb-6 leading-relaxed">
    The chapter cache for Volume ${volume.volumeNumber} Chapter ${index} could not be loaded. Please ensure the parsing pipeline completed successfully.
  </p>
  <a href="/reverend-insanity/select" class="inline-flex items-center gap-2 px-6 py-2.5 bg-red-900 hover:bg-red-850 text-white font-medium rounded transition-all select-none hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]">
    Back to Archives Selection
                  </a>
</div>
    `.trim();
    isHtml = true;
  }

  const chapterTitle = volume.chapters[index - 1] || `Chapter {index}`;

  const formattedContent = isHtml
    ? contentBody
    : contentBody
        .split("\n")
        .filter((line: string) => line.trim())
        .map((line: string) => `<p class="mb-6 leading-relaxed text-gray-200/90 text-lg selection:bg-red-950/80 selection:text-white">${line}</p>`)
        .join("");

  // 1. Remove duplicate chapter headers and titles from the start of the content
  let processedContent = formattedContent
    .replace(/^\s*<h[1-6][^>]*>\s*Chapter\s+\d+\s*<\/h[1-6]>\s*/i, "")
    .replace(/^\s*<p[^>]*>\s*(?:<strong>\s*)?Chapter\s+\d+\s*[-–—:]\s*.*?(?:\s*<\/strong>)?\s*<\/p>\s*/i, "");

  // 2. Identify TL Notes / Footnotes and wrap them in a special box at the end
  // We match standard "TL Note" label anywhere, or fallback to parenthesized footnotes like (1) or [1] in the last 20% of the text.
  let splitIndex: number | undefined = undefined;
  
  const tlNoteRegex = /<p[^>]*>\s*(?:<strong>\s*)?(?:(?:T\/?(?:L|N|W)(?:\s*(?:Notes?|Thoughts?)(?:\s*[:：])?|\s*[:：])|Translator(?:['’]s)?\s*Notes?|Translator(?:['’]s)?\s*Thoughts?|Author(?:['’]s)?\s*Notes?|TLNotes?)(?:\s*[:：])?|Notes?\s*[:：])/i;
  const tlNoteMatch = processedContent.match(tlNoteRegex);
  
  if (tlNoteMatch && tlNoteMatch.index !== undefined) {
    splitIndex = tlNoteMatch.index;
  } else {
    // Look for parenthesized footnotes starting with (1), [1], (1), [1] in the last 20% of the content length
    const startOffset = Math.floor(processedContent.length * 0.8);
    const subsetContent = processedContent.substring(startOffset);
    const fallbackFootnoteRegex = /<p[^>]*>\s*(?:<strong>\s*)?(?:\(\d+\)|\[\d+\])/i;
    const fallbackMatch = subsetContent.match(fallbackFootnoteRegex);
    if (fallbackMatch && fallbackMatch.index !== undefined) {
      splitIndex = startOffset + fallbackMatch.index;
    }
  }
  
  if (splitIndex !== undefined) {
    const beforeTl = processedContent.substring(0, splitIndex);
    const tlSection = processedContent.substring(splitIndex);
    
    // Clean up paragraph styles inside the TL notes so they wrap and format properly without prose defaults
    const cleanedTlSection = tlSection.replace(
      /<p\b[^>]*>/gi, 
      '<p class="mb-4 text-sm text-zinc-400 leading-relaxed selection:bg-red-950/80 selection:text-white">'
    );
    
    processedContent = beforeTl + `
<div class="my-8 p-6 pl-8 rounded-2xl border-l-4 border-l-red-500 border border-red-500/10 bg-red-950/5 shadow-[0_0_30px_rgba(220,38,38,0.02)] backdrop-blur-sm relative overflow-hidden group/tlbox">
  <div class="absolute top-3 right-4 text-[9px] font-mono text-red-500/40 uppercase tracking-widest font-bold select-none">Footnotes</div>
  <div class="tl-notes-content relative z-10 font-sans">
    ${cleanedTlSection}
  </div>
</div>
    `.trim();
  }

  const htmlContent = `<div class="theme-reverend-insanity select-text relative w-full">${processedContent}</div>`;

  const totalChapters = volume.chapters ? volume.chapters.length : 0;

  return (
    <div className="theme-reverend-insanity min-h-screen bg-[#020204] text-white">
      <HtmlReader
        content={htmlContent}
        title={chapterTitle}
        volumeId={volumeId}
        chapterIndex={index}
        prevChapter={
          index > 1
            ? {
                volumeId,
                chapter: index - 1,
                title: volume.chapters[index - 2] || `Chapter ${index - 1}`,
              }
            : undefined
        }
        nextChapter={
          index < totalChapters
            ? { 
                volumeId, 
                chapter: index + 1, 
                title: volume.chapters[index] || `Chapter ${index + 1}`
              }
            : undefined
        }
        toc={volume.chapters.map((ch, i) => ({
          label: ch,
          href: `/reverend-insanity/read/${volumeId}/${i + 1}`,
          index: i + 1,
        }))}
        volumeTitle={volume.title}
        epubSource={undefined}
        detailsLink="/reverend-insanity/select"
        returnLink="/reverend-insanity/select"
        currentSpineIndex={index}
        nextVolumeLink={undefined}
        nextVolumeTitle={undefined}
      />
    </div>
  );
}
