import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { rezeroVolumes } from "@/data/rezero";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const params: { volumeId: string; chapterIndex: string }[] = [];

  for (const volume of rezeroVolumes) {
    // If the volume is complete (not in progress), generate static routes for all its chapters
    if (!volume.inProgress) {
      for (let i = 1; i <= volume.chapters.length; i++) {
        params.push({ volumeId: volume.id, chapterIndex: String(i) });
      }
    }
    
    // Fallback: If the volume has customChapters, add those keys
    if (volume.customChapters) {
      Object.keys(volume.customChapters).forEach((idx) => {
        const idxStr = String(idx);
        if (!params.some((p) => p.volumeId === volume.id && p.chapterIndex === idxStr)) {
          params.push({ volumeId: volume.id, chapterIndex: idxStr });
        }
      });
    }
  }

  // If there are no volumes yet, return a dummy volume/chapter to satisfy Next.js static export constraints
  if (params.length === 0) {
    return [{ volumeId: "dummy", chapterIndex: "1" }];
  }

  return params;
}

export default async function RezeroReadPage({
  params,
}: {
  params: Promise<{ volumeId: string; chapterIndex: string }>;
}) {
  const { volumeId, chapterIndex } = await params;
  const index = parseInt(chapterIndex);

  if (isNaN(index)) notFound();

  const volume = rezeroVolumes.find((v) => v.id === volumeId);
  if (!volume) notFound();

  // 1. Try to read from scraped cache first
  let contentBody = "";
  let isHtml = false;
  const cachePath = path.join(process.cwd(), "data", "rezero-cache", `${volumeId}-${index}.json`);

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

  // 2. Fallback to hardcoded customChapters if cache reading failed or didn't exist
  if (!contentBody && volume.customChapters && volume.customChapters[index]) {
    contentBody = volume.customChapters[index];
    isHtml = contentBody.includes("<p>") || contentBody.includes("<div>") || contentBody.includes("<img");
  }

  // 3. Fallback to beautiful grimoire error card if content is still missing
  if (!contentBody) {
    const externalUrl = volume.chapterUrls && volume.chapterUrls[index - 1] 
      ? volume.chapterUrls[index - 1] 
      : "https://witchculttranslation.com/table-of-content/";
      
    contentBody = `
<div class="border border-violet-950/80 bg-[#0e0a16] p-8 text-center rounded shadow-[0_0_30px_rgba(139,92,246,0.1)] max-w-xl mx-auto my-12">
  <div class="text-violet-400 text-4xl mb-4 select-none">📖</div>
  <h3 class="text-xl font-semibold text-white mb-2 font-serif">Witch's Archive Fallback</h3>
  <p class="text-gray-400 text-sm mb-6 leading-relaxed">
    The translation for this chapter could not be located in our offline archives. You can read it directly at Witch Cult Translations.
  </p>
  <a href="${externalUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-900 hover:bg-violet-850 text-white font-medium rounded transition-all select-none hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
    Open Translation Site ↗
  </a>
</div>
    `.trim();
    isHtml = true;
  }

  const chapterTitle = volume.chapters[index - 1] || `Chapter ${index}`;

  const formattedContent = isHtml
    ? contentBody
    : contentBody
        .split("\n")
        .filter((line: string) => line.trim())
        .map((line: string) => `<p class="mb-6 leading-relaxed text-gray-200/90 text-lg selection:bg-violet-900/60 selection:text-white">${line}</p>`)
        .join("");

  const htmlContent = `<div class="theme-rezero font-serif select-text relative w-full"><h1>${chapterTitle}</h1>\n${formattedContent}</div>`;

  const totalChapters = volume.chapters ? volume.chapters.length : 0;

  return (
    <div className="theme-rezero min-h-screen bg-[#05030a] text-white">
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
          href: `/rezero/read/${volumeId}/${i + 1}`,
          index: i + 1,
        }))}
        volumeTitle={volume.title}
        epubSource={undefined}
        detailsLink="/rezero/select"
        returnLink="/rezero/select"
        currentSpineIndex={index}
        nextVolumeLink={undefined}
        nextVolumeTitle={undefined}
      />
    </div>
  );
}
