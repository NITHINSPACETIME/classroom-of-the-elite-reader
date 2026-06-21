"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, ArrowUpDown, BookOpen, LayoutGrid, List, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";

import { LotmVolumeData, lotmSideStories } from "@/data/lotm";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

const lotmBackgrounds = [
  "/assets/images/lotm/bg/1405686.jpg",
  "/assets/images/lotm/bg/c.jpg",
  "/assets/images/lotm/bg/d.jpg",
  "/assets/images/lotm/bg/web-bg.jpg",
  "/assets/images/lotm/bg/wp11646841-lord-of-mysteries-wallpapers.jpg"
];

interface ProgressInfo {
  percentage: number;
  chapterTitle: string;
  chapterIndex?: number;
  lastRead?: string;
  scrollPercentage?: number;
}

interface LotmSelectClientProps {
  volumes: LotmVolumeData[];
  coiVolumes?: LotmVolumeData[];
}

export default function LotmSelectClient({ volumes, coiVolumes = [] }: LotmSelectClientProps) {
  const [selectedBook, setSelectedBook] = useState<"none" | "book1" | "book2">("none");
  const [activeTab, setActiveTab] = useState<"chapters" | "gallery">("chapters");
  const [selectedVolFilter, setSelectedVolFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [synopsisExpanded, setSynopsisExpanded] = useState(false);
  const [volumeViewMode, setVolumeViewMode] = useState<"compact" | "detailed">("compact");

  const [progressMap, setProgressMap] = useState<Record<string, ProgressInfo>>({});
  const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const listContainerRef = useRef<HTMLDivElement>(null);

  const book1Progress = useMemo(() => {
    let totalChapters = 0;
    let readCount = 0;
    
    volumes.forEach(v => {
      if (v.chapters) {
        totalChapters += v.chapters.length;
        v.chapters.forEach((_, idx) => {
          if (readChapters[`${v.id}-${idx + 1}`]) {
            readCount++;
          }
        });
      }
    });
    lotmSideStories.forEach(v => {
      if (v.chapters) {
        totalChapters += v.chapters.length;
        v.chapters.forEach((_, idx) => {
          if (readChapters[`${v.id}-${idx + 1}`]) {
            readCount++;
          }
        });
      }
    });

    return {
      percentage: totalChapters > 0 ? Math.round((readCount / totalChapters) * 100) : 0,
      read: readCount,
      total: totalChapters
    };
  }, [volumes, readChapters]);

  const book2Progress = useMemo(() => {
    let totalChapters = 0;
    let readCount = 0;

    coiVolumes.forEach(v => {
      if (v.chapters) {
        totalChapters += v.chapters.length;
        v.chapters.forEach((_, idx) => {
          if (readChapters[`${v.id}-${idx + 1}`]) {
            readCount++;
          }
        });
      }
    });

    return {
      percentage: totalChapters > 0 ? Math.round((readCount / totalChapters) * 100) : 0,
      read: readCount,
      total: totalChapters
    };
  }, [coiVolumes, readChapters]);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <mark key={i} className="bg-amber-500/25 text-amber-300 px-0.5 rounded font-medium">{part}</mark>
            : part
        )}
      </>
    );
  };

  // Load progress and read history on mount
  useEffect(() => {
    const progress: Record<string, ProgressInfo> = {};
    const allVols = [...volumes, ...lotmSideStories, ...coiVolumes];
    allVols.forEach(vol => {
      const savedMeta = localStorage.getItem(`lotm-progress-meta-${vol.id}`);
      if (savedMeta) {
        try {
          progress[vol.id] = JSON.parse(savedMeta);
        } catch {}
      } else {
        const savedCfi = localStorage.getItem(`lotm-progress-${vol.id}`);
        if (savedCfi) {
          progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading", chapterIndex: parseInt(savedCfi) || 1 };
        }
      }
    });

    const timer = setTimeout(() => {
      setProgressMap(progress);

      const readData = localStorage.getItem("lotm-read-chapters");
      if (readData) {
        try {
          setReadChapters(JSON.parse(readData));
        } catch {}
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [volumes, coiVolumes]);
  // Sync view mode with global-view-mode from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const loadViewMode = () => {
      const saved = localStorage.getItem("global-view-mode") as "detailed" | "compact" | null;
      if (saved === "detailed" || saved === "compact") {
        setVolumeViewMode(saved);
      } else if (window.innerWidth >= 768) {
        setVolumeViewMode("detailed");
      } else {
        setVolumeViewMode("compact");
      }
    };
    loadViewMode();

    const handleViewModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"detailed" | "compact">;
      if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
        setVolumeViewMode(customEvent.detail);
      }
    };
    window.addEventListener("change-view-mode", handleViewModeChange);
    return () => {
      window.removeEventListener("change-view-mode", handleViewModeChange);
    };
  }, []);
  // Load selected book from URL or localStorage on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const book = params.get("book");
    const saved = localStorage.getItem("lotm-selected-book");

    const timer = setTimeout(() => {
      if (book === "1") {
        setSelectedBook("book1");
        setSelectedVolFilter("none");
      } else if (book === "2") {
        setSelectedBook("book2");
        setSelectedVolFilter("none");
      } else if (saved === "book1" || saved === "book2") {
        setSelectedBook(saved as "book1" | "book2");
        setSelectedVolFilter("none");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top of list on filter change
  useEffect(() => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = 0;
    }
  }, [selectedVolFilter, activeTab]);

  const handleSelectBook = (book: "book1" | "book2") => {
    setSelectedBook(book);
    localStorage.setItem("lotm-selected-book", book);
    const url = new URL(window.location.href);
    url.searchParams.set("book", book === "book1" ? "1" : "2");
    window.history.pushState({}, "", url.toString());
    setSelectedVolFilter("none");
    setActiveTab("chapters");
  };

  const handleBackToSelector = () => {
    setSelectedBook("none");
    localStorage.removeItem("lotm-selected-book");
    const url = new URL(window.location.href);
    url.searchParams.delete("book");
    window.history.pushState({}, "", url.toString());
  };

  const handleResetBook = (book: "book1" | "book2") => {
    const isBook1 = book === "book1";
    const bookVolIds = isBook1 
      ? [...volumes.map(v => v.id), "ss"] 
      : coiVolumes.map(v => v.id);

    bookVolIds.forEach(volId => {
      localStorage.removeItem(`lotm-progress-meta-${volId}`);
      localStorage.removeItem(`lotm-progress-${volId}`);
    });

    const readKey = "lotm-read-chapters";
    const readData = localStorage.getItem(readKey);
    if (readData) {
      try {
        const readMap = JSON.parse(readData);
        const updated = Object.keys(readMap).reduce((acc, key) => {
          const volId = key.split("-")[0];
          if (!bookVolIds.includes(volId)) {
            acc[key] = readMap[key];
          }
          return acc;
        }, {} as Record<string, boolean>);
        localStorage.setItem(readKey, JSON.stringify(updated));
        setReadChapters(updated);
      } catch {}
    }

    setProgressMap(prev => {
      const copy = { ...prev };
      bookVolIds.forEach(volId => {
        delete copy[volId];
      });
      return copy;
    });
  };

  const handleResetVolume = (volId: string) => {
    localStorage.removeItem(`lotm-progress-meta-${volId}`);
    localStorage.removeItem(`lotm-progress-${volId}`);
    
    const readKey = "lotm-read-chapters";
    const readData = localStorage.getItem(readKey);
    if (readData) {
      try {
        const readMap = JSON.parse(readData);
        const prefix = `${volId}-`;
        const updated = Object.keys(readMap).reduce((acc, key) => {
          if (!key.startsWith(prefix)) {
            acc[key] = readMap[key];
          }
          return acc;
        }, {} as Record<string, boolean>);
        localStorage.setItem(readKey, JSON.stringify(updated));
        setReadChapters(updated);
      } catch {}
    }

    setProgressMap(prev => {
      const copy = { ...prev };
      delete copy[volId];
      return copy;
    });
  };

  const handleResetChapter = (volId: string, chapIdx: number) => {
    const readKey = "lotm-read-chapters";
    const readData = localStorage.getItem(readKey);
    if (readData) {
      try {
        const readMap = JSON.parse(readData);
        const chapterKey = `${volId}-${chapIdx}`;
        delete readMap[chapterKey];
        localStorage.setItem(readKey, JSON.stringify(readMap));
        setReadChapters(readMap);
      } catch {}
    }
  };


  const getActiveVolumeContinueUrl = () => {
    if (!selectedVolFilter || selectedVolFilter === "none") return "";
    const prog = progressMap[selectedVolFilter];
    if (prog && prog.chapterIndex) {
      const scrollPercentage = prog.scrollPercentage || 0;
      if (scrollPercentage < 85) {
        return `/lotm/read/${selectedVolFilter}/${prog.chapterIndex}`;
      }
      const activeVolObj = [...volumes, ...lotmSideStories, ...coiVolumes].find(v => v.id === selectedVolFilter);
      const totalChaps = activeVolObj?.chapters?.length || 1;
      const nextIdx = prog.chapterIndex < totalChaps ? prog.chapterIndex + 1 : prog.chapterIndex;
      return `/lotm/read/${selectedVolFilter}/${nextIdx}`;
    }
    // Check readChapters
    const prefix = `${selectedVolFilter}-`;
    let maxReadIdx = 0;
    Object.keys(readChapters).forEach(key => {
      if (key.startsWith(prefix)) {
        const idx = parseInt(key.slice(prefix.length));
        if (!isNaN(idx) && idx > maxReadIdx) {
          maxReadIdx = idx;
        }
      }
    });
    if (maxReadIdx > 0) {
      const activeVolObj = [...volumes, ...lotmSideStories, ...coiVolumes].find(v => v.id === selectedVolFilter);
      const totalChaps = activeVolObj?.chapters?.length || 1;
      const nextIdx = maxReadIdx < totalChaps ? maxReadIdx + 1 : maxReadIdx;
      return `/lotm/read/${selectedVolFilter}/${nextIdx}`;
    }
    return `/lotm/read/${selectedVolFilter}/1`;
  };

  const hasProgressOnActiveVolume = useMemo(() => {
    if (!selectedVolFilter || selectedVolFilter === "none") return false;
    if (progressMap[selectedVolFilter]) return true;
    const prefix = `${selectedVolFilter}-`;
    return Object.keys(readChapters).some(key => key.startsWith(prefix));
  }, [selectedVolFilter, progressMap, readChapters]);

  const currentVolumes = useMemo(() => {
    return selectedBook === "book1" ? volumes : coiVolumes;
  }, [selectedBook, volumes, coiVolumes]);

  const currentSideStories = useMemo(() => {
    return selectedBook === "book1" ? lotmSideStories : [];
  }, [selectedBook]);

  // Book 1 continue reading progress
  const getContinueReadingBook1Url = () => {
    const book1VolIds = [...volumes.map(v => v.id), "ss"];
    let latestVolId = "v1";
    let latestChapterIndex = 1;
    let latestTime = 0;
    let latestScrollPct = 0;

    Object.entries(progressMap).forEach(([volId, prog]) => {
      if (book1VolIds.includes(volId)) {
        const time = prog.lastRead ? new Date(prog.lastRead).getTime() : 0;
        if (time > latestTime) {
          latestTime = time;
          latestVolId = volId;
          latestChapterIndex = prog.chapterIndex || 1;
          latestScrollPct = prog.scrollPercentage || 0;
        }
      }
    });

    if (latestScrollPct >= 85) {
      const activeVolObj = [...volumes, ...lotmSideStories].find(v => v.id === latestVolId);
      const totalChaps = activeVolObj?.chapters?.length || 1;
      if (latestChapterIndex < totalChaps) {
        latestChapterIndex += 1;
      }
    }
    return `/lotm/read/${latestVolId}/${latestChapterIndex}`;
  };

  const hasReadBook1 = useMemo(() => {
    const book1VolIds = [...volumes.map(v => v.id), "ss"];
    return Object.keys(progressMap).some(volId => book1VolIds.includes(volId));
  }, [progressMap, volumes]);

  const book1ProgressInfo = useMemo<ProgressInfo | null>(() => {
    const book1VolIds = [...volumes.map(v => v.id), "ss"];
    let latestProg: ProgressInfo | null = null;
    let latestTime = 0;

    Object.entries(progressMap).forEach(([volId, prog]) => {
      if (book1VolIds.includes(volId)) {
        const time = prog.lastRead ? new Date(prog.lastRead).getTime() : 0;
        if (time > latestTime) {
          latestTime = time;
          latestProg = prog;
        }
      }
    });
    return latestProg;
  }, [progressMap, volumes]);

  // Book 2 continue reading progress
  const getContinueReadingBook2Url = () => {
    const book2VolIds = coiVolumes.map(v => v.id);
    let latestVolId = "coi1";
    let latestChapterIndex = 1;
    let latestTime = 0;
    let latestScrollPct = 0;

    Object.entries(progressMap).forEach(([volId, prog]) => {
      if (book2VolIds.includes(volId)) {
        const time = prog.lastRead ? new Date(prog.lastRead).getTime() : 0;
        if (time > latestTime) {
          latestTime = time;
          latestVolId = volId;
          latestChapterIndex = prog.chapterIndex || 1;
          latestScrollPct = prog.scrollPercentage || 0;
        }
      }
    });

    if (latestScrollPct >= 85) {
      const activeVolObj = coiVolumes.find(v => v.id === latestVolId);
      const totalChaps = activeVolObj?.chapters?.length || 1;
      if (latestChapterIndex < totalChaps) {
        latestChapterIndex += 1;
      }
    }
    return `/lotm/read/${latestVolId}/${latestChapterIndex}`;
  };

  const hasReadBook2 = useMemo(() => {
    const book2VolIds = coiVolumes.map(v => v.id);
    return Object.keys(progressMap).some(volId => book2VolIds.includes(volId));
  }, [progressMap, coiVolumes]);

  const book2ProgressInfo = useMemo<ProgressInfo | null>(() => {
    const book2VolIds = coiVolumes.map(v => v.id);
    let latestProg: ProgressInfo | null = null;
    let latestTime = 0;

    Object.entries(progressMap).forEach(([volId, prog]) => {
      if (book2VolIds.includes(volId)) {
        const time = prog.lastRead ? new Date(prog.lastRead).getTime() : 0;
        if (time > latestTime) {
          latestTime = time;
          latestProg = prog;
        }
      }
    });
    return latestProg;
  }, [progressMap, coiVolumes]);

  // Compute active volume details for the left panel
  const activeVolume = useMemo(() => {
    if (selectedVolFilter === "all") {
      if (selectedBook === "book1") {
        return {
          title: "Lord of the Mysteries",
          author: "Cuttlefish That Loves Diving",
          coverImage: "/assets/images/lotm/v1/V01A_-_Front_Cover.jpg",
          synopsis: "Zhou Mingrui awakens as Klein Moretti, a history graduate in the city of Tingen, only to find himself entangled in a world of supernatural powers, secret rituals, and Lovecraftian horrors. Joining the Nighthawks, he takes his first steps as a 'Seer' and establishes the mysterious Tarot Club, assuming the identity of the deity 'The Fool'. Follow his journey as he uncovers ancient secrets and rises through the pathways of divinity.",
          volumeNumber: "All",
          releaseDate: "2018 - 2020",
          totalChapters: volumes.reduce((acc, v) => acc + (v.chapters ? v.chapters.length : 0), 0) + 
                         lotmSideStories.reduce((acc, v) => acc + (v.chapters ? v.chapters.length : 0), 0)
        };
      } else {
        return {
          title: "Circle of Inevitability",
          author: "Cuttlefish That Loves Diving",
          coverImage: "/assets/images/lotm/coi/cover.jpg",
          synopsis: "The official sequel to Lord of the Mysteries. Lumian Lee becomes entangled in a bizarre time loop in Cordu village. Escaping the catastrophe, he travels to Trier to uncover his sister Aurore's destiny and seek the slumbering Fool. Confronted by corruption, outer gods, and fate, he must rise through the pathways of inevitability.",
          volumeNumber: "All",
          releaseDate: "2023 - 2025",
          totalChapters: coiVolumes.reduce((acc, v) => acc + (v.chapters ? v.chapters.length : 0), 0)
        };
      }
    }
    const found = [...currentVolumes, ...currentSideStories].find(v => v.id === selectedVolFilter);
    if (found) {
      return {
        title: found.title,
        author: "Cuttlefish That Loves Diving",
        coverImage: found.coverImage,
        synopsis: found.synopsis,
        volumeNumber: found.volumeNumber,
        releaseDate: found.releaseDateEN,
        totalChapters: found.chapters.length
      };
    }
    return null;
  }, [selectedBook, selectedVolFilter, volumes, coiVolumes, currentVolumes, currentSideStories]);

  // Unified list of all chapters
  const allChapters = useMemo(() => {
    const list: Array<{
      title: string;
      index: number;
      volumeId: string;
      volumeNumber: string;
      volumeTitle: string;
      isSideStory: boolean;
    }> = [];

    currentVolumes.forEach(vol => {
      if (!vol.inProgress) {
        vol.chapters.forEach((chap, idx) => {
          list.push({
            title: chap,
            index: idx + 1,
            volumeId: vol.id,
            volumeNumber: vol.volumeNumber,
            volumeTitle: vol.title,
            isSideStory: false
          });
        });
      }
    });

    currentSideStories.forEach(vol => {
      if (!vol.inProgress) {
        vol.chapters.forEach((chap, idx) => {
          list.push({
            title: chap,
            index: idx + 1,
            volumeId: vol.id,
            volumeNumber: vol.volumeNumber,
            volumeTitle: vol.title,
            isSideStory: true
          });
        });
      }
    });

    return list;
  }, [currentVolumes, currentSideStories]);

  // Filtered and sorted chapters
  const filteredChapters = useMemo(() => {
    let result = allChapters;

    // Volume filter
    if (selectedVolFilter !== "all") {
      result = result.filter(ch => ch.volumeId === selectedVolFilter);
    }

    // Book 1 specific Tab filtering
    if (selectedBook === "book1") {
      if (activeTab === "chapters") {
        result = result.filter(ch => ch.title.toLowerCase() !== "illustrations" && !ch.isSideStory);
      } else {
        result = result.filter(ch => ch.title.toLowerCase() === "illustrations" || ch.isSideStory);
      }
    }

    // Search query
    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(ch => 
        ch.title.toLowerCase().includes(lower) || 
        ch.volumeTitle.toLowerCase().includes(lower) ||
        `chapter ${ch.index}`.includes(lower)
      );
    }

    // Sort order
    if (!sortAscending) {
      result = [...result].reverse();
    }

    return result;
  }, [allChapters, selectedVolFilter, selectedBook, activeTab, searchQuery, sortAscending]);

  const handleVolumeFilterChange = (val: string) => {
    setSelectedVolFilter(val);
    if (val === "ss") {
      setActiveTab("gallery");
    }
  };

  const getActiveBookContinueReadingUrl = () => {
    return selectedBook === "book1" ? getContinueReadingBook1Url() : getContinueReadingBook2Url();
  };

  const hasReadActiveBook = selectedBook === "book1" ? hasReadBook1 : hasReadBook2;

  // Render Book Selection Screen
  if (selectedBook === "none") {
    return (
      <div className="theme-lotm min-h-screen bg-[#020204] text-zinc-150 flex flex-col justify-between select-none relative overflow-hidden">
        {/* Background Slideshow & Gradients */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/30 to-transparent z-10" />
          <BackgroundSlideshow images={lotmBackgrounds} interval={8000} imageOpacity={0.75} />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

        {/* Top Header */}
        <div className="w-full z-50 px-6 py-4 flex items-center justify-between border-b border-amber-950/20 backdrop-blur-sm bg-black/10">
          <div className="flex items-center gap-3">
            <Link href="/lotm">
              <Button variant="ghost" size="icon" className="text-amber-500 hover:text-white rounded-full hover:bg-white/5 transition-all">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-3.5">
              <div className="relative w-8 h-8 md:w-9 md:h-9">
                <Image
                  src="/assets/images/lotm/logo.png"
                  alt="Lord of the Mysteries Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(196,127,10,0.35)]"
                  priority
                />
              </div>
              <h1 className="text-xl font-cinzel font-bold text-white tracking-widest uppercase">Lord of the Mysteries</h1>
            </div>
          </div>
          <UserMenu
            onSignIn={() => setAuthModalOpen(true)}
            onProfile={() => setProfileModalOpen(true)}
          />
        </div>

        {/* Book Selector */}
        <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 z-30 max-w-5xl mx-auto w-full">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 md:gap-12 lg:gap-20 justify-center items-center w-full mt-4"
          >
            
            {/* Book 1 Selector Cover */}
            <div className="flex flex-col items-center gap-5 w-60 md:w-80 mx-auto sm:mx-0 shrink-0">
              {/* Header Badge & Logo */}
              <div className="w-full h-[140px] flex flex-col justify-end items-center gap-2 mb-1 select-none">
                <div className="relative w-40 h-24">
                  <Image
                    src="/assets/images/lotm/LoM-logo.webp"
                    alt="Lord of Mysteries Logo"
                    fill
                    className="object-contain drop-shadow-[0_2px_12px_rgba(196,127,10,0.2)]"
                    priority
                  />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-4 h-[1px] bg-amber-500/35" />
                  <span className="font-cinzel text-xs font-bold text-amber-500 tracking-[0.15em] uppercase text-center">
                    Book 1 : Lord of Mysteries
                  </span>
                  <span className="w-4 h-[1px] bg-amber-500/35" />
                </div>
              </div>

              <div className="hover-3d relative cursor-pointer w-full aspect-[3/4] rounded-2xl overflow-hidden border border-amber-600/20 shadow-[0_20px_45px_rgba(0,0,0,0.85),_0_0_20px_rgba(196,127,10,0.15)] bg-zinc-950/20">
                {/* 1st child: Main card container (tilts in 3D) */}
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/images/lotm/web-lotm-cover.jpg"
                    alt="Lord of the Mysteries Cover"
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 240px, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* 8 empty divs for grid hover zones */}
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
              </div>

              {/* Progress & Actions Stacked Below Cover */}
              <div className="w-full flex flex-col gap-3">
                {book1Progress.read > 0 ? (
                  <div className="flex flex-col gap-1.5 w-full bg-zinc-950/45 border border-zinc-900/60 p-3 rounded-xl backdrop-blur-sm">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-400 uppercase tracking-widest">Progress</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-bold">{book1Progress.percentage}%</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm("Reset reading progress for Book 1?")) {
                               handleResetBook("book1");
                            }
                          }}
                          className="text-[9px] text-white bg-red-600 hover:bg-red-700 font-bold uppercase px-2 py-0.5 rounded cursor-pointer transition-all active:scale-95 flex-shrink-0"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full shadow-[0_0_6px_#f59e0b]" style={{ width: `${book1Progress.percentage}%` }} />
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 text-center">
                      Read {book1Progress.read} of {book1Progress.total} chapters
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[10px] font-mono tracking-wider uppercase text-zinc-550 py-2.5 bg-zinc-950/20 border border-zinc-900/60 rounded-xl">
                    Not started
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={() => handleSelectBook("book1")}
                    className="w-full bg-amber-950/15 hover:bg-amber-600/10 hover:text-white border border-amber-900/30 text-amber-400 font-cinzel font-bold text-xs py-5 rounded-full tracking-widest cursor-pointer transition-all duration-300 uppercase"
                  >
                    SELECT VOLUMES
                  </Button>
                  
                  {hasReadBook1 && (
                    <Link href={getContinueReadingBook1Url()} className="w-full">
                      <Button className="w-full bg-[#c47f0a] hover:bg-amber-500 text-zinc-950 font-cinzel font-bold text-xs py-5 rounded-full tracking-widest shadow-[0_0_15px_rgba(196,127,10,0.15)] hover:shadow-[0_0_25px_rgba(196,127,10,0.35)] transition-all duration-350 border border-amber-500/20 uppercase cursor-pointer">
                        RESUME CHAPTER {book1ProgressInfo?.chapterIndex || 1}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Book 2 Selector Cover */}
            <div className="flex flex-col items-center gap-5 w-60 md:w-80 mx-auto sm:mx-0 shrink-0">
              {/* Header Badge & Logo */}
              <div className="w-full h-[140px] flex flex-col justify-end items-center gap-2 mb-1 select-none">
                <div className="relative w-40 h-24">
                  <Image
                    src="/assets/images/lotm/CoI-logo.webp"
                    alt="Circle of Inevitability Logo"
                    fill
                    className="object-contain drop-shadow-[0_2px_12px_rgba(196,127,10,0.2)]"
                    priority
                  />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-4 h-[1px] bg-amber-500/35" />
                  <span className="font-cinzel text-xs font-bold text-amber-500 tracking-[0.15em] uppercase text-center">
                    Book 2 : Circle of Inevitability
                  </span>
                  <span className="w-4 h-[1px] bg-amber-500/35" />
                </div>
              </div>

              <div className="hover-3d relative cursor-pointer w-full aspect-[3/4] rounded-2xl overflow-hidden border border-amber-600/20 shadow-[0_20px_45px_rgba(0,0,0,0.85),_0_0_20px_rgba(196,127,10,0.15)] bg-zinc-950/20">
                {/* 1st child: Main card container (tilts in 3D) */}
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/images/lotm/web-coi-cover.jpg"
                    alt="Circle of Inevitability Cover"
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 240px, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* 8 empty divs for grid hover zones */}
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
              </div>

              {/* Progress & Actions Stacked Below Cover */}
              <div className="w-full flex flex-col gap-3">
                {book2Progress.read > 0 ? (
                  <div className="flex flex-col gap-1.5 w-full bg-zinc-950/45 border border-zinc-900/60 p-3 rounded-xl backdrop-blur-sm">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-400 uppercase tracking-widest">Progress</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-bold">{book2Progress.percentage}%</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm("Reset reading progress for Book 2?")) {
                               handleResetBook("book2");
                            }
                          }}
                          className="text-[9px] text-white bg-red-600 hover:bg-red-700 font-bold uppercase px-2 py-0.5 rounded cursor-pointer transition-all active:scale-95 flex-shrink-0"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full shadow-[0_0_6px_#f59e0b]" style={{ width: `${book2Progress.percentage}%` }} />
                    </div>
                    <div className="text-[9px] font-mono text-zinc-550 text-center">
                      Read {book2Progress.read} of {book2Progress.total} chapters
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[10px] font-mono tracking-wider uppercase text-zinc-550 py-2.5 bg-zinc-950/20 border border-zinc-900/60 rounded-xl">
                    Not started
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={() => handleSelectBook("book2")}
                    className="w-full bg-amber-950/15 hover:bg-amber-600/10 hover:text-white border border-amber-900/30 text-amber-400 font-cinzel font-bold text-xs py-5 rounded-full tracking-widest cursor-pointer transition-all duration-300 uppercase"
                  >
                    SELECT VOLUMES
                  </Button>
                  
                  {hasReadBook2 && (
                    <Link href={getContinueReadingBook2Url()} className="w-full">
                      <Button className="w-full bg-[#c47f0a] hover:bg-amber-500 text-zinc-950 font-cinzel font-bold text-xs py-5 rounded-full tracking-widest shadow-[0_0_15px_rgba(196,127,10,0.15)] hover:shadow-[0_0_25px_rgba(196,127,10,0.35)] transition-all duration-350 border border-amber-500/20 uppercase cursor-pointer">
                        RESUME CHAPTER {book2ProgressInfo?.chapterIndex || 1}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-[10px] sm:text-xs text-zinc-650 border-t border-white/5 bg-black/10 z-30">
          <Link href="/" className="hover:text-white transition-colors duration-300">
            ← Back to Novels Portal
          </Link>
        </footer>

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
      </div>
    );
  }

  // Render Volume Grid Screen
  if (selectedVolFilter === "none") {
    const bookVolumes = selectedBook === "book1" ? [...volumes, ...lotmSideStories] : coiVolumes;
    return (
      <div className="theme-lotm min-h-screen bg-[#020204] text-zinc-150 flex flex-col justify-between select-none relative overflow-hidden">
        {/* Background Slideshow & Gradients */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/30 to-transparent z-10" />
          <BackgroundSlideshow images={lotmBackgrounds} interval={8000} imageOpacity={0.75} />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

        {/* Top Header */}
        <div className="w-full z-50 p-6 flex items-center justify-between border-b border-amber-950/20 backdrop-blur-sm bg-black/10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBackToSelector}
            className="text-amber-500 hover:text-white rounded-full hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-cinzel font-bold text-white tracking-widest uppercase">
            {selectedBook === "book1" ? "Lord of the Mysteries" : "Circle of Inevitability"}
          </h1>
          <UserMenu
            onSignIn={() => setAuthModalOpen(true)}
            onProfile={() => setProfileModalOpen(true)}
          />
        </div>

        {/* Volume Grid */}
        <div className="flex-1 z-30 container mx-auto px-4 max-w-5xl py-12 overflow-y-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 select-none"
          >
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-amber-500/50" />
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-amber-500/80 text-shadow-amber font-semibold">Volume Selection</span>
              <span className="w-6 h-[1px] bg-amber-500/50" />
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-widest text-white uppercase drop-shadow-lg">
              Choose A <span className="text-amber-500 text-shadow-amber font-normal">Volume</span>
            </h2>
          </motion.div>

          {/* View Mode Toggle */}
          <div className="hidden md:flex justify-end items-center gap-2 mb-6">
            <button
              onClick={() => {
                setVolumeViewMode("compact");
                if (typeof window !== "undefined") {
                  localStorage.setItem("global-view-mode", "compact");
                  window.dispatchEvent(new CustomEvent("change-view-mode", { detail: "compact" }));
                }
              }}
              className={`p-2 rounded-full transition-all cursor-pointer ${volumeViewMode === "compact" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "text-zinc-500 hover:text-zinc-300 border border-transparent"}`}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setVolumeViewMode("detailed");
                if (typeof window !== "undefined") {
                  localStorage.setItem("global-view-mode", "detailed");
                  window.dispatchEvent(new CustomEvent("change-view-mode", { detail: "detailed" }));
                }
              }}
              className={`p-2 rounded-full transition-all cursor-pointer ${volumeViewMode === "detailed" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "text-zinc-500 hover:text-zinc-300 border border-transparent"}`}
              title="Detailed view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {volumeViewMode === "detailed" ? (
              <motion.div
                key="detailed-vol-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {bookVolumes.map((vol) => {
                  const prog = progressMap[vol.id];
                  const readCount = vol.chapters.filter((_, idx) => readChapters[`${vol.id}-${idx + 1}`]).length;
                  const calculatedPercent = vol.chapters.length > 0 ? Math.round((readCount / vol.chapters.length) * 100) : 0;
                  const volPercent = prog ? Math.max(calculatedPercent, Math.round((prog.percentage || 0) * 100)) : calculatedPercent;
                  const hasVolProgress = volPercent > 0 || !!prog;
                  return (
                    <div
                      key={vol.id}
                      className="bg-black/45 border border-amber-950/30 hover:border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 relative group/card hover:shadow-[0_20px_50px_rgba(196,127,10,0.06)]"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent group-hover/card:via-amber-400 transition-all duration-500" />

                      {/* Info and cover grid */}
                      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_250px] divide-y md:divide-y-0 md:divide-x divide-amber-950/20">

                        {/* Left Pane - Metadata */}
                        <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest">
                                {vol.id === "ss" ? "Side Stories" : `Volume ${vol.volumeNumber}`}
                              </span>
                              {vol.tag && (
                                <span className="bg-amber-950/60 text-amber-300 border border-amber-900/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                                  {vol.tag}
                                </span>
                              )}
                              <span className="text-zinc-650">•</span>
                              <span className="text-xs text-zinc-400 font-mono">Released {vol.releaseDateEN}</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-zinc-100 tracking-wide group-hover/card:text-amber-400 transition-colors duration-300">{vol.title}</h3>
                            <p className="text-sm text-zinc-300 leading-relaxed font-serif font-light">{vol.synopsis}</p>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-amber-300 border-t border-amber-955/20 pt-4">
                            <div className="flex items-center gap-1.5 bg-amber-950/20 px-3 py-1 rounded-full border border-amber-900/30">
                              <span className="font-bold">JP Date:</span>
                              <span className="text-zinc-300">{vol.releaseDateJP}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-amber-950/20 px-3 py-1 rounded-full border border-amber-900/30">
                              <span className="font-bold">Total Chapters:</span>
                              <span className="text-zinc-300">{vol.chapters.length}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Pane - Cover Image & Navigate */}
                        <div className="flex flex-col items-center justify-center p-6 bg-amber-950/5">
                          <div
                            onClick={() => !vol.inProgress && setSelectedVolFilter(vol.id)}
                            className="hover-3d relative cursor-pointer w-full max-w-[140px] group/cover"
                          >
                            <div className="relative w-full aspect-[2/3] shadow-2xl rounded-lg border border-amber-950/40 overflow-hidden group-hover/cover:border-amber-500/30 transition-all duration-300">
                              <Image
                                src={vol.coverImage}
                                alt={vol.title}
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                                sizes="140px"
                              />
                              {vol.inProgress && (
                                <div className="absolute inset-0 bg-black/80 flex items-center justify-center border-t border-amber-500/25">
                                  <span className="text-amber-300 font-mono font-bold text-[10px] tracking-widest uppercase animate-pulse">Coming Soon</span>
                                </div>
                              )}
                              {hasVolProgress && !vol.inProgress && (
                                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md">
                                  <span className="text-[9px] font-mono text-amber-500 font-bold">{volPercent}%</span>
                                  <svg className="absolute w-8 h-8 transform -rotate-90 text-amber-500" viewBox="0 0 36 36">
                                    <path
                                      className="text-zinc-800"
                                      strokeWidth="3.5"
                                      stroke="currentColor"
                                      fill="none"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                      className="text-amber-500 drop-shadow-[0_0_3px_#f59e0b]"
                                      strokeDasharray={`${volPercent}, 100`}
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      stroke="currentColor"
                                      fill="none"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                          </div>

                          <div className="w-full mt-5 flex flex-col gap-2">
                            <Button
                              onClick={() => !vol.inProgress && setSelectedVolFilter(vol.id)}
                              disabled={vol.inProgress}
                              className="w-full bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 border border-amber-800/30 font-serif font-bold text-xs tracking-wider cursor-pointer rounded-full"
                            >
                              EXPAND CHAPTERS
                            </Button>
                            {hasVolProgress && !vol.inProgress && (
                              <Button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (confirm(`Reset reading progress for ${vol.title}?`)) {
                                    handleResetVolume(vol.id);
                                  }
                                }}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-serif font-bold text-xs tracking-wider cursor-pointer rounded-full border-none"
                              >
                                RESET PROGRESS
                              </Button>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="compact-vol-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {bookVolumes.map((vol) => {
                  const prog = progressMap[vol.id];
                  const readCount = vol.chapters.filter((_, idx) => readChapters[`${vol.id}-${idx + 1}`]).length;
                  const calculatedPercent = vol.chapters.length > 0 ? Math.round((readCount / vol.chapters.length) * 100) : 0;
                  const volPercent = prog ? Math.max(calculatedPercent, Math.round((prog.percentage || 0) * 100)) : calculatedPercent;
                  const hasVolProgress = volPercent > 0 || !!prog;
                  return (
                    <div
                      key={vol.id}
                      onClick={() => !vol.inProgress && setSelectedVolFilter(vol.id)}
                      className="flex flex-col gap-2.5 group cursor-pointer relative"
                    >
                      <div className="hover-3d relative cursor-pointer w-full">
                        <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.85)] border border-white/5 group-hover:border-amber-500/30 transition-all duration-300">
                          {vol.tag && (
                            <div className="absolute top-2.5 right-2.5 bg-amber-950/90 text-amber-300 border border-amber-500/30 text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-20 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                              {vol.tag}
                            </div>
                          )}
                          <Image
                            src={vol.coverImage}
                            alt={vol.title}
                            fill
                            className="object-cover transition-transform duration-350 opacity-90 group-hover:opacity-100 group-hover:scale-102"
                            sizes="(max-width: 768px) 50vw, 180px"
                          />
                          {vol.inProgress && (
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center p-2 z-20">
                              <span className="text-amber-500 font-mono font-bold text-[9px] tracking-widest uppercase animate-pulse">Coming Soon</span>
                            </div>
                          )}
                          {hasVolProgress && !vol.inProgress && (
                            <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md">
                              <span className="text-[9px] font-mono text-amber-500 font-bold">{volPercent}%</span>
                              <svg className="absolute w-8 h-8 transform -rotate-90 text-amber-500" viewBox="0 0 36 36">
                                <path
                                  className="text-zinc-800"
                                  strokeWidth="3.5"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  className="text-amber-500 drop-shadow-[0_0_3px_#f59e0b]"
                                  strokeDasharray={`${volPercent}, 100`}
                                  strokeWidth="3.5"
                                  strokeLinecap="round"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-3 pointer-events-none">
                            <span className="bg-amber-600/90 text-white text-[9px] font-bold font-mono tracking-widest px-2.5 py-0.5 rounded-full shadow-md">
                              EXPAND
                            </span>
                          </div>
                        </div>
                        {/* 8 trigger zones */}
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                      </div>
                      <div className="flex flex-col gap-0.5 px-1 select-none">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500/80">
                          {vol.id === "ss" ? "Side Stories" : `Vol. ${vol.volumeNumber}`}
                        </div>
                        <div className="text-[11px] font-serif text-zinc-300 font-medium truncate group-hover:text-white transition-colors duration-200">
                          {vol.title}
                        </div>
                        <div className="text-[9px] font-mono text-zinc-550">
                          {vol.chapters ? `${vol.chapters.length} Chapters` : "TBD"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-[10px] sm:text-xs text-zinc-650 border-t border-white/5 bg-black/10 z-30">
          <button 
            onClick={handleBackToSelector} 
            className="hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            ← Back to Book Selection
          </button>
        </footer>

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
      </div>
    );
  }

  // Active book selector view (book1 or book2 state)
  return (
    <div className="theme-lotm min-h-screen md:h-screen w-full bg-[#020204] text-zinc-150 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden select-none">
      
      {/* Aside Book Details Panel (Left Column) */}
      <aside className="relative w-full md:w-[400px] bg-gradient-to-b from-[#0a0806] via-[#060504] to-[#020204] border-b md:border-b-0 md:border-r border-amber-800/10 p-6 md:p-8 flex flex-col shrink-0 justify-between md:h-full md:overflow-y-auto no-scrollbar">
        {/* Subtle ambient glow behind cover */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-amber-900/[0.06] to-transparent pointer-events-none" />
        
        <div className="relative flex flex-col items-center text-center z-10">
          {/* Header Portal Title (Mobile Only) */}
          <div className="w-full flex md:hidden items-center justify-between border-b border-amber-900/20 pb-4 mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedVolFilter("none")}
              className="text-amber-500 hover:text-white rounded-full p-2 h-auto"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-sm font-cinzel font-bold tracking-widest uppercase text-white">
              {selectedBook === "book1" ? "Lord of the Mysteries" : "Circle of Inevitability"}
            </h2>
            <UserMenu
              onSignIn={() => setAuthModalOpen(true)}
              onProfile={() => setProfileModalOpen(true)}
            />
          </div>

          <div className="relative w-48 aspect-[2/3] group/cover">
            {/* Ambient Glow behind the cover */}
            <div className="absolute -inset-1.5 bg-gradient-to-b from-amber-500/30 via-amber-650/15 to-transparent rounded-xl blur-md opacity-70 group-hover/cover:opacity-90 transition-opacity duration-500 pointer-events-none" />
            
            {/* 3D Hover Cover Container */}
            <div className="hover-3d w-full h-full">
              <div className="relative w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-amber-500/20 group-hover/cover:border-amber-400/40 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(196,127,10,0.15)] group-hover/cover:shadow-[0_0_30px_rgba(196,127,10,0.45)] transition-all duration-500">
                <Image
                  src={activeVolume?.coverImage || "/assets/images/lotm/v1/ff.jpg"}
                  alt={activeVolume?.title || "Lord of the Mysteries"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/cover:scale-102"
                  sizes="192px"
                  priority
                />
              </div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="mt-6 flex flex-col gap-1.5">
            <h3 className="font-serif text-2xl font-bold text-zinc-100 tracking-wide">
              {activeVolume?.title}
            </h3>
            <span className="text-[11px] text-amber-500/80 font-mono tracking-[0.2em] uppercase font-semibold">
              {activeVolume?.author}
            </span>
          </div>

          {/* Dynamic Statistics Badges */}
          <div className="mt-5 flex gap-3 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            <div className="flex items-center gap-1.5 bg-amber-950/25 px-3.5 py-1.5 rounded-full border border-amber-900/20">
              <BookOpen className="w-3 h-3 text-amber-500/70" />
              <span>Vol {activeVolume?.volumeNumber}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-950/25 px-3.5 py-1.5 rounded-full border border-amber-900/20">
              <span className="text-amber-500/70 font-bold">#</span>
              <span>{activeVolume?.totalChapters} Ch</span>
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="mt-6 mb-1 flex items-center gap-3 w-full">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
            <span className="text-[8px] text-amber-600/50 font-mono uppercase tracking-[0.3em]">Synopsis</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
          </div>

          {/* Synopsis */}
          <div className="mt-3 text-left w-full">
            <p className={`text-[13px] text-zinc-400 leading-relaxed font-serif ${!synopsisExpanded ? 'line-clamp-4 md:line-clamp-6' : ''}`}>
              {activeVolume?.synopsis}
            </p>
            <button 
              onClick={() => setSynopsisExpanded(!synopsisExpanded)}
              className="md:hidden mt-2 text-xs font-semibold text-amber-500 hover:text-amber-400 focus:outline-none cursor-pointer"
            >
              {synopsisExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>

        {/* Action Buttons at Bottom */}
        <div className="relative mt-8 md:mt-12 flex flex-col gap-3 w-full z-10">
          <Link href={getActiveVolumeContinueUrl()} className="w-full">
            <Button className="w-full bg-gradient-to-r from-[#c47f0a] to-amber-700 hover:from-amber-600 hover:to-amber-500 active:from-amber-700 active:to-amber-600 text-white font-serif font-bold py-5 uppercase tracking-widest text-xs rounded-full border border-amber-500/20 shadow-[0_0_20px_rgba(196,127,10,0.15)] hover:shadow-[0_0_30px_rgba(196,127,10,0.35)] transition-all duration-300 cursor-pointer">
              {hasProgressOnActiveVolume ? "Continue Reading" : "Begin Reading"}
            </Button>
          </Link>
          
          {progressMap[selectedVolFilter] && (
            <Button
              onClick={() => {
                if (confirm(`Reset reading progress for ${activeVolume?.title}?`)) {
                  handleResetVolume(selectedVolFilter);
                }
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-serif font-bold py-5 uppercase tracking-widest text-xs rounded-full transition-all cursor-pointer border-none"
            >
              Reset Volume Progress
            </Button>
          )}

          <Button 
            variant="outline" 
            onClick={() => setSelectedVolFilter("none")}
            className="w-full border-zinc-800/60 hover:border-amber-800/40 hover:text-white bg-zinc-950/20 hover:bg-amber-950/10 text-zinc-400 font-serif font-bold py-5 uppercase tracking-widest text-xs rounded-full transition-all cursor-pointer"
          >
            Back to Volumes
          </Button>
        </div>
      </aside>

      {/* Main Chapters Panel (Right Column) */}
      <main className="flex-1 flex flex-col h-full md:overflow-hidden">
        
        {/* Top Header Bar (Desktop Only) */}
        <div className="hidden md:flex items-center justify-between px-8 py-5 border-b border-zinc-800/60 bg-gradient-to-r from-[#020204] via-[#060504] to-[#020204]">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedVolFilter("none")}
              className="text-amber-500 hover:text-white rounded-full p-2 h-auto hover:bg-amber-950/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex flex-col">
              <h2 className="text-lg font-serif font-light tracking-widest uppercase text-white">
                {selectedBook === "book1" ? "Lord of the Mysteries" : "Circle of Inevitability"}
              </h2>
              <span className="text-[10px] font-mono text-amber-500/60 uppercase tracking-widest">
                {activeVolume?.volumeNumber === "All" ? "All Volumes" : `Volume ${activeVolume?.volumeNumber}: ${activeVolume?.title}`} · {activeVolume?.totalChapters} Chapters
              </span>
            </div>
          </div>
          <UserMenu
            onSignIn={() => setAuthModalOpen(true)}
            onProfile={() => setProfileModalOpen(true)}
          />
        </div>

        {/* Filters Controls Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 w-full px-6 md:px-8 py-4 border-b border-zinc-800/40 bg-black/20 backdrop-blur-sm z-10">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-amber-500/50" />
            <input
              type="text"
              placeholder="Search chapters by name or index..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-zinc-800/60 bg-zinc-950/50 text-white placeholder:text-zinc-600 text-sm pl-10 pr-4 py-2.5 outline-none focus:border-amber-600/40 focus:ring-1 focus:ring-amber-600/20 transition-all rounded-full"
            />
          </div>

          <div className="flex gap-2 shrink-0">
            {/* Sort Toggle Button */}
            <Button
              variant="outline"
              onClick={() => setSortAscending(!sortAscending)}
              className="border-zinc-800/60 hover:border-amber-700/40 bg-zinc-950/30 hover:bg-amber-950/15 text-zinc-400 hover:text-white p-2.5 h-10 w-10 flex items-center justify-center transition-all cursor-pointer rounded-full"
              title={sortAscending ? "Sorted Ascending" : "Sorted Descending"}
            >
              <ArrowUpDown className="w-4 h-4 text-amber-500/70" />
            </Button>

            {/* Volume Filter Dropdown */}
            <div className="relative h-10">
              <select
                value={selectedVolFilter}
                onChange={(e) => handleVolumeFilterChange(e.target.value)}
                className="h-full border border-zinc-800/60 bg-zinc-950/50 text-zinc-300 hover:text-white pl-4 pr-10 py-2 text-xs font-mono uppercase tracking-widest outline-none focus:border-amber-600/40 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2523c47f0a%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.6rem_auto] bg-[right_0.85rem_center] bg-no-repeat rounded-full"
              >
                <option value="all" className="bg-[#020204]">All Volumes</option>
                {currentVolumes.map((vol) => (
                  <option key={vol.id} value={vol.id} className="bg-[#020204]">
                    Vol {vol.volumeNumber}: {vol.title}
                  </option>
                ))}
                {currentSideStories.map((vol) => (
                  <option key={vol.id} value={vol.id} className="bg-[#020204]">
                    {vol.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tab Selector (Book 1 only) */}
        {selectedBook === "book1" && (
          <div className="flex border-b border-zinc-800/40 px-6 md:px-8 shrink-0 bg-black/10">
            <button
              onClick={() => setActiveTab("chapters")}
              className={`px-6 py-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all ${
                activeTab === "chapters"
                  ? "border-amber-500 text-white font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Chapters
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all ${
                activeTab === "gallery"
                  ? "border-amber-500 text-white font-bold"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Illustrations & Extras
            </button>
          </div>
        )}

        {/* Chapter List */}
        {filteredChapters.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center mx-6 md:mx-8 mt-4 rounded-xl border border-zinc-800/30 bg-zinc-950/20">
            <BookOpen className="w-10 h-10 text-zinc-700 mb-3" />
            <span className="text-zinc-500 text-sm font-serif">No chapters found matching your filters.</span>
            {selectedBook === "book1" && selectedVolFilter === "ss" && activeTab === "chapters" && (
              <Button
                onClick={() => setActiveTab("gallery")}
                className="mt-4 border border-amber-600/30 text-amber-500 hover:bg-amber-600/10 rounded-full bg-transparent font-mono text-[10px] uppercase tracking-wider cursor-pointer"
              >
                Switch to Illustrations & Extras
              </Button>
            )}
          </div>
        ) : (
          <div 
            ref={listContainerRef}
            className="flex-1 overflow-y-auto px-4 md:px-6 pt-3 pb-6 md:h-[calc(100vh-180px)] no-scrollbar"
          >
            <div className="space-y-[2px]">
              {filteredChapters.map((chap, idx) => {
                const isRead = readChapters[`${chap.volumeId}-${chap.index}`];
                const showChLabel = !chap.title.toLowerCase().includes("chapter") && !chap.title.toLowerCase().includes("prologue") && !chap.title.toLowerCase().includes("epilogue") && !chap.title.toLowerCase().includes("illustration") && !chap.title.includes("Side Story") && !chap.title.includes("Bonus");
                const isEven = idx % 2 === 0;

                return (
                  <div 
                    key={`${chap.volumeId}-${chap.index}`}
                    className="block group"
                  >
                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${isRead ? 'opacity-60 hover:opacity-100 transition-opacity' : ''} ${isEven ? 'bg-white/[0.01]' : 'bg-transparent'} hover:bg-amber-950/15 hover:shadow-[inset_0_0_0_1px_rgba(245,158,11,0.15)]`}>
                      <Link 
                        href={`/lotm/read/${chap.volumeId}/${chap.index}`}
                        className="flex items-center gap-2 min-w-0 flex-1"
                      >
                        {/* Slide-in arrow indicator */}
                        <div className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                        </div>

                        <span className={`font-mono text-[11px] font-bold w-8 shrink-0 transition-all duration-300 ${isRead ? 'text-zinc-700' : 'text-amber-500/70 group-hover:text-amber-400'}`}>
                          {showChLabel ? `${chap.index}` : ""}
                        </span>
                        
                        <div className="flex items-center gap-2 truncate">
                          <span className={`font-serif text-[13.5px] truncate transition-colors duration-300 ${isRead ? 'text-zinc-500' : 'text-zinc-300 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_3px_rgba(245,158,11,0.35)]'}`}>
                            {highlightText(chap.title, searchQuery)}
                          </span>
                        </div>
                      </Link>
                      
                      <div className="flex items-center gap-3 mt-1.5 sm:mt-0 pl-6 sm:pl-0 shrink-0">
                        {isRead && (
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1">
                              ✓ Read
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (confirm(`Mark "${chap.title}" as unread?`)) {
                                  handleResetChapter(chap.volumeId, chap.index);
                                }
                              }}
                              className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 hover:bg-red-700 transition-all duration-200 active:scale-95 cursor-pointer"
                              title="Mark as Unread"
                            >
                              Reset
                            </button>
                          </div>
                        )}
                        <span className="text-[9px] font-mono text-zinc-650 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                          Vol {chap.volumeNumber}
                        </span>
                        <span className="text-zinc-800">·</span>
                        <span className="text-[10px] font-serif text-zinc-600 italic truncate max-w-[120px] group-hover:text-zinc-400 transition-colors">
                          {chap.volumeTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  );
}
