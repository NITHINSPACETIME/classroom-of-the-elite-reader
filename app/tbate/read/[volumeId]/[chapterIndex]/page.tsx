import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { tbateVolumes, tbateSideStories } from "@/data/tbate";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const params: { volumeId: string; chapterIndex: string }[] = [];

  const allVols = [...tbateVolumes, ...tbateSideStories];
  for (const volume of allVols) {
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

export default async function TbateReadPage({
  params,
}: {
  params: Promise<{ volumeId: string; chapterIndex: string }>;
}) {
  const { volumeId, chapterIndex } = await params;
  const index = parseInt(chapterIndex);

  if (isNaN(index)) notFound();

  const volume = tbateVolumes.find((v) => v.id === volumeId) || tbateSideStories.find((v) => v.id === volumeId);
  if (!volume) notFound();

  // Load from cache
  let contentBody = "";
  const cachePath = path.join(process.cwd(), "data", "tbate-cache", `${volumeId}-${index}.json`);

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
<div class="border border-amber-950/80 bg-[#0c0906] p-8 text-center rounded shadow-[0_0_30px_rgba(245,158,11,0.15)] max-w-xl mx-auto my-12">
  <div class="text-amber-400 text-4xl mb-4 select-none">✨</div>
  <h3 class="text-xl font-semibold text-white mb-2 font-serif">Scenario Missing</h3>
  <p class="text-amber-300/60 text-sm mb-6 leading-relaxed">
    This chapter is not available offline or could not be located in our caches.
  </p>
</div>
    `.trim();
  }

  const chapterTitle = volume.chapters[index - 1] || `Chapter ${index}`;
  const htmlContent = `<div class="theme-tbate select-text relative w-full">\n${contentBody}</div>`;
  const totalChapters = volume.chapters.length;

  let nextVolumeLink = undefined;
  let nextVolumeTitleVal = undefined;

  const volIndex = tbateVolumes.findIndex((v) => v.id === volumeId);
  if (volIndex !== -1) {
    if (volIndex < tbateVolumes.length - 1) {
      const nextVol = tbateVolumes[volIndex + 1];
      nextVolumeLink = `/tbate/read/${nextVol.id}/1`;
      nextVolumeTitleVal = nextVol.title;
    }
  } else {
    const ssIndex = tbateSideStories.findIndex((v) => v.id === volumeId);
    if (ssIndex !== -1 && ssIndex < tbateSideStories.length - 1) {
      const nextVol = tbateSideStories[ssIndex + 1];
      nextVolumeLink = `/tbate/read/${nextVol.id}/1`;
      nextVolumeTitleVal = nextVol.title;
    }
  }

  return (
    <div className="theme-tbate min-h-screen bg-[#070503] text-[#fffbeb]">
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
          href: `/tbate/read/${volumeId}/${i + 1}`,
          index: i + 1,
        }))}
        volumeTitle={volume.title}
        epubSource={undefined}
        detailsLink={`/tbate/select/${volumeId}`}
        returnLink={`/tbate/select/${volumeId}`}
        currentSpineIndex={index}
        nextVolumeLink={nextVolumeLink}
        nextVolumeTitle={nextVolumeTitleVal}
      />
    </div>
  );
}
