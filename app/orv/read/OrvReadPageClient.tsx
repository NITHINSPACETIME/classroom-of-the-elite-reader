"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { orvVolumes } from "@/data/orv";

interface OrvChapter {
  id: string;
  index: number;
  title: string;
}

export default function OrvReadPageClient() {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("c") || "1";
  
  const [chapterData, setChapterData] = useState<{ title: string; contentHtml: string } | null>(null);
  const [summary, setSummary] = useState<{
    mainChapters: OrvChapter[];
    contChapters: OrvChapter[];
    sideChapters: OrvChapter[];
  } | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [prevChapterId, setPrevChapterId] = useState(chapterId);

  if (chapterId !== prevChapterId) {
    setPrevChapterId(chapterId);
    setLoading(true);
    setChapterData(null);
  }

  // Load summary
  useEffect(() => {
    fetch("/assets/orv/summary.json")
      .then((res) => res.json())
      .then((data) => setSummary(data))
      .catch((err) => console.error("Error loading summary:", err));
  }, []);

  // Load chapter data
  useEffect(() => {
    if (!chapterId) return;
    fetch(`/assets/orv/chapters/${chapterId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Chapter not found");
        return res.json();
      })
      .then((data) => {
        setChapterData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [chapterId]);

  const sortedCont = useMemo(() => {
    if (!summary || !summary.contChapters) return [];
    return [...summary.contChapters].sort((a, b) => a.index - b.index);
  }, [summary]);

  const allChapters = useMemo(() => {
    if (!summary) return [];
    return [
      ...(summary.mainChapters || []),
      ...sortedCont,
      ...(summary.sideChapters || [])
    ];
  }, [summary, sortedCont]);

  const currentIndex = useMemo(() => {
    return allChapters.findIndex((c) => c.id === chapterId);
  }, [allChapters, chapterId]);

  if (loading || !summary || !chapterData) {
    return (
      <div className="min-h-screen bg-[#020204] text-cyan-400 flex items-center justify-center font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-cyan-400"></div>
          <div>Loading Star Stream...</div>
        </div>
      </div>
    );
  }

  if (currentIndex === -1) {
    return (
      <div className="min-h-screen bg-[#020204] text-cyan-400 flex items-center justify-center font-mono">
        <div>Chapter Index Mismatch in Star Stream.</div>
      </div>
    );
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
