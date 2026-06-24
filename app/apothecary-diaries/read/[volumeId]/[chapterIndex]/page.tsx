import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { apothecaryDiariesVolumes } from "@/data/apothecary-diaries";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const params: { volumeId: string; chapterIndex: string }[] = [];

  for (const volume of apothecaryDiariesVolumes) {
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

export default async function ApothecaryDiariesReadPage({
  params,
}: {
  params: Promise<{ volumeId: string; chapterIndex: string }>;
}) {
  const { volumeId, chapterIndex } = await params;
  const index = parseInt(chapterIndex);

  if (isNaN(index)) notFound();

  const volume = apothecaryDiariesVolumes.find((v) => v.id === volumeId);
  if (!volume) notFound();

  // Load from cache
  let contentBody = "";
  const cachePath = path.join(process.cwd(), "data", "apothecary-diaries-cache", `${volumeId}-${index}.json`);

  if (fs.existsSync(cachePath)) {
    try {
      const fileData = fs.readFileSync(cachePath, "utf8");
      const parsed = JSON.parse(fileData);
      contentBody = parsed.content;
    } catch (e) {
      console.error(`Error reading cached chapter ${volumeId}-${index}:`, e);
    }
  }

  // Graceful fallback if file not found
  if (!contentBody) {
    contentBody = `
<div class="border border-pink-950/80 bg-[#120816] p-8 text-center rounded shadow-[0_0_30px_rgba(236,72,153,0.15)] max-w-xl mx-auto my-12">
  <div class="text-pink-400 text-4xl mb-4 select-none">🌸</div>
  <h3 class="text-xl font-semibold text-white mb-2 font-serif">Chapter Content Missing</h3>
  <p class="text-pink-300/60 text-sm mb-6 leading-relaxed">
    This chapter is not available offline or could not be located in our caches.
  </p>
</div>
    `.trim();
  }

  const chapterTitle = volume.chapters[index - 1] || `Chapter ${index}`;
  const htmlContent = `<div class="theme-apothecary-diaries select-text relative w-full">\n${contentBody}</div>`;
  const totalChapters = volume.chapters.length;

  let nextVolumeLink = undefined;
  let nextVolumeTitleVal = undefined;

  const volIndex = apothecaryDiariesVolumes.findIndex((v) => v.id === volumeId);
  if (volIndex !== -1 && volIndex < apothecaryDiariesVolumes.length - 1) {
    const nextVol = apothecaryDiariesVolumes[volIndex + 1];
    nextVolumeLink = `/apothecary-diaries/read/${nextVol.id}/1`;
    nextVolumeTitleVal = nextVol.title;
  }

  return (
    <div className="theme-apothecary-diaries min-h-screen bg-[#0c0612] text-[#faeef5]">
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
                title: volume.chapters[index] || `Chapter ${index + 1}`,
              }
            : undefined
        }
        toc={volume.chapters.map((ch, i) => ({
          label: ch,
          href: `/apothecary-diaries/read/${volumeId}/${i + 1}`,
          index: i + 1,
        }))}
        volumeTitle={volume.title}
        epubSource={undefined}
        detailsLink={`/apothecary-diaries/select/${volumeId}`}
        returnLink={`/apothecary-diaries/select/${volumeId}`}
        currentSpineIndex={index}
        nextVolumeLink={nextVolumeLink}
        nextVolumeTitle={nextVolumeTitleVal}
      />
    </div>
  );
}
