import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { mushokuTenseiVolumes, mushokuTenseiSideStories, mushokuTenseiRedundancy } from "@/data/mushoku-tensei";
import fs from "fs";
import path from "path";

const allMTVolumes = [...mushokuTenseiVolumes, ...mushokuTenseiRedundancy, ...mushokuTenseiSideStories];

export async function generateStaticParams() {
  const params: { volumeId: string; chapterIndex: string }[] = [];

  for (const volume of allMTVolumes) {
    if (!volume.inProgress) {
      for (let i = 1; i <= volume.chapters.length; i++) {
        params.push({ volumeId: volume.id, chapterIndex: String(i) });
      }
    }
  }

  if (params.length === 0) {
    return [{ volumeId: "dummy", chapterIndex: "1" }];
  }

  return params;
}

export default async function MushokuTenseiReadPage({
  params,
}: {
  params: Promise<{ volumeId: string; chapterIndex: string }>;
}) {
  const { volumeId, chapterIndex } = await params;
  const index = parseInt(chapterIndex);

  if (isNaN(index)) notFound();

  const volume = allMTVolumes.find((v) => v.id === volumeId);
  if (!volume) notFound();

  // 1. Try to read from EPUB cache first
  let contentBody = "";
  let isHtml = false;
  const cachePath = path.join(process.cwd(), "data", "mushoku-tensei-cache", `${volumeId}-${index}.json`);

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

  // 2. Fallback to grimoire error card if content is missing
  if (!contentBody) {
    contentBody = `
<div class="border border-emerald-950/80 bg-[#070b08] p-8 text-center rounded shadow-[0_0_30px_rgba(16,185,129,0.1)] max-w-xl mx-auto my-12">
  <div class="text-emerald-400 text-4xl mb-4 select-none">📖</div>
  <h3 class="text-xl font-semibold text-white mb-2 font-serif">Offline Archive Fallback</h3>
  <p class="text-gray-400 text-sm mb-6 leading-relaxed">
    The chapter cache for Volume ${volume.volumeNumber} Chapter ${index} could not be loaded. Please ensure the parsing pipeline completed successfully.
  </p>
  <a href="/mushoku-tensei/select" class="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-900 hover:bg-emerald-850 text-white font-medium rounded transition-all select-none hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
    Back to Volume Selector
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
        .map((line: string) => `<p class="mb-6 leading-relaxed text-gray-200/90 text-lg selection:bg-emerald-900/60 selection:text-white">${line}</p>`)
        .join("");

  const htmlContent = `<div class="theme-mushoku-tensei font-serif select-text relative w-full"><h1>${chapterTitle}</h1>\n${formattedContent}</div>`;

  const totalChapters = volume.chapters ? volume.chapters.length : 0;

  return (
    <div className="theme-mushoku-tensei min-h-screen bg-[#030403] text-white">
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
          href: `/mushoku-tensei/read/${volumeId}/${i + 1}`,
          index: i + 1,
        }))}
        volumeTitle={volume.title}
        epubSource={undefined}
        detailsLink="/mushoku-tensei/select"
        returnLink="/mushoku-tensei/select"
        currentSpineIndex={index}
        nextVolumeLink={undefined}
        nextVolumeTitle={undefined}
      />
    </div>
  );
}
