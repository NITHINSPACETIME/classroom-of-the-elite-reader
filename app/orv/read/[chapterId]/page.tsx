import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { orvVolumes } from "@/data/orv";

interface OrvChapter {
  id: string;
  index: number;
  title: string;
}

export async function generateStaticParams() {
  const summaryPath = path.join(process.cwd(), 'public', 'assets', 'orv', 'summary.json');
  if (!fs.existsSync(summaryPath)) return [];
  const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
  
  const sortedCont = (summary.contChapters as OrvChapter[] | undefined)
    ? [...(summary.contChapters as OrvChapter[])].sort((a, b) => a.index - b.index)
    : [];

  const allIds = [
    ...(summary.mainChapters as OrvChapter[]).map((c) => c.id),
    ...sortedCont.map((c) => c.id),
    ...(summary.sideChapters as OrvChapter[]).map((c) => c.id)
  ];
  
  return allIds.map((id) => ({
    chapterId: String(id)
  }));
}

function getOrvVolumeId(id: string) {
  if (id.startsWith('side-')) return 'orv-side';
  const num = parseInt(id);
  if (isNaN(num)) return 'orv-cont';
  if (num <= 99) return 'orv-part1';
  if (num <= 284) return 'orv-part2';
  if (num <= 372) return 'orv-part3';
  if (num <= 486) return 'orv-part4';
  if (num <= 551) return 'orv-part5';
  return 'orv-cont';
}

export default async function OrvReadPage({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;

  // 1. Load summary to parse navigation
  const summaryPath = path.join(process.cwd(), 'public', 'assets', 'orv', 'summary.json');
  if (!fs.existsSync(summaryPath)) notFound();
  const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));

  const sortedCont = (summary.contChapters as OrvChapter[] | undefined)
    ? [...(summary.contChapters as OrvChapter[])].sort((a, b) => a.index - b.index)
    : [];

  const allChapters = [
    ...(summary.mainChapters as OrvChapter[]),
    ...sortedCont,
    ...(summary.sideChapters as OrvChapter[])
  ];

  const currentIndex = allChapters.findIndex((c) => c.id === chapterId);
  if (currentIndex === -1) notFound();

  // 2. Load chapter payload file
  const chapterFilePath = path.join(
    process.cwd(),
    'public',
    'assets',
    'orv',
    'chapters',
    `${chapterId}.json`
  );

  if (!fs.existsSync(chapterFilePath)) notFound();
  const chapterData = JSON.parse(fs.readFileSync(chapterFilePath, 'utf-8'));

  const volumeId = getOrvVolumeId(chapterId);
  const volume = orvVolumes.find((v) => v.id === volumeId);

  // Filter TOC to only include chapters belonging to this volume
  const volumeChapters = allChapters.filter((c) => getOrvVolumeId(c.id) === volumeId);
  const toc = volumeChapters.map((c) => ({
    label: c.title,
    href: String(c.id),
    index: c.index
  }));

  // Map prev and next chapters
  const prevCh = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextCh = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  const prevChapterProps = prevCh
    ? {
        volumeId: getOrvVolumeId(prevCh.id),
        chapter: String(prevCh.id),
        title: prevCh.title
      }
    : undefined;

  const nextChapterProps = nextCh
    ? {
        volumeId: getOrvVolumeId(nextCh.id),
        chapter: String(nextCh.id),
        title: nextCh.title
      }
    : undefined;

  const htmlContent = `<div class="theme-orv select-text w-full"><h1>${chapterData.title}</h1>\n${chapterData.contentHtml}</div>`;

  return (
    <HtmlReader
      content={htmlContent}
      title={chapterData.title}
      volumeId={volumeId}
      chapterIndex={currentIndex + 1}
      prevChapter={prevChapterProps}
      nextChapter={nextChapterProps}
      toc={toc}
      volumeTitle={volume?.title || "Omniscient Reader's Viewpoint"}
      epubSource={undefined}
      detailsLink="/orv/select"
      returnLink="/orv/select"
      currentSpineIndex={currentIndex + 1}
    />
  );
}
