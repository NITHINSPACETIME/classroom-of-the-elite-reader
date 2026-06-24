/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, LayoutGrid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";

import { ReverendInsanityVolumeData } from "@/data/reverend-insanity";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface ReverendInsanitySelectClientProps {
  volumes: ReverendInsanityVolumeData[];
}

const backgroundImages = [
  "/assets/images/reverend-insanity/bg_1.jpg",
  "/assets/images/reverend-insanity/bg_2.jpg",
  "/assets/images/reverend-insanity/bg_3.jpg"
];

export default function ReverendInsanitySelectClient({ volumes }: ReverendInsanitySelectClientProps) {
  const searchParams = useSearchParams();
  const initialContentType = searchParams.get("contentType");
  const [contentType, setContentType] = useState<"arcs" | "chapters">(initialContentType === "chapters" ? "chapters" : "arcs");
  const [chaptersViewMode, setChaptersViewMode] = useState<"grid" | "detailed">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [chapterTab, setChapterTab] = useState("1-400");

  const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string; chapterIndex: number }>>({});
  const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Generate flat list of all chapters for the flat chapters selection view
  const allChapters = useMemo(() => {
    const list: { id: string; index: number; globalIndex: number; title: string; volId: string }[] = [];
    volumes.forEach((vol) => {
      vol.chapters.forEach((title, idx) => {
        const relativeIndex = idx + 1;
        const globalIndex = vol.startChapter + idx;
        list.push({
          id: `${vol.id}-${relativeIndex}`,
          index: relativeIndex,
          globalIndex: globalIndex,
          title: title,
          volId: vol.id,
        });
      });
    });
    return list;
  }, [volumes]);

  // Filtered chapters for chapter grid search and tab pagination
  const filteredChapters = useMemo(() => {
    let list = allChapters;

    // Filter by query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(ch => 
        ch.title.toLowerCase().includes(q) || 
        ch.globalIndex.toString().includes(q)
      );
      return list;
    }

    // Filter by Tab (if not searching)
    if (chapterTab === "1-400") {
      list = list.filter(ch => ch.globalIndex >= 1 && ch.globalIndex <= 400);
    } else if (chapterTab === "401-800") {
      list = list.filter(ch => ch.globalIndex >= 401 && ch.globalIndex <= 800);
    } else if (chapterTab === "801-1200") {
      list = list.filter(ch => ch.globalIndex >= 801 && ch.globalIndex <= 1200);
    } else if (chapterTab === "1201-1600") {
      list = list.filter(ch => ch.globalIndex >= 1201 && ch.globalIndex <= 1600);
    } else if (chapterTab === "1601-2000") {
      list = list.filter(ch => ch.globalIndex >= 1601 && ch.globalIndex <= 2000);
    } else if (chapterTab === "2001-2334") {
      list = list.filter(ch => ch.globalIndex >= 2001 && ch.globalIndex <= 2334);
    }

    return list;
  }, [allChapters, chapterTab, searchQuery]);

  useEffect(() => {
    const progress: Record<string, { percentage: number; chapterTitle: string; chapterIndex: number }> = {};
    volumes.forEach(vol => {
      const savedMeta = localStorage.getItem(`reverend-insanity-progress-meta-${vol.id}`);
      if (savedMeta) {
        try {
          progress[vol.id] = JSON.parse(savedMeta);
        } catch {}
      } else {
        const savedCfi = localStorage.getItem(`reverend-insanity-progress-${vol.id}`);
        if (savedCfi) {
          const index = parseInt(savedCfi) || 1;
          const total = vol.chapters.length || 1;
          progress[vol.id] = { 
            percentage: Math.min(1, index / total), 
            chapterTitle: vol.chapters[index - 1] || `Chapter ${index}`, 
            chapterIndex: index 
          };
        }
      }
    });
    setProgressMap(progress);

    const readData = localStorage.getItem("reverend-insanity-read-chapters");
    if (readData) {
      try {
        setReadChapters(JSON.parse(readData));
      } catch {}
    }
  }, [volumes]);

  const getVolumeProgress = useCallback((volId: string, volChaptersLength: number) => {
    if (volChaptersLength === 0) return 0;
    let readCount = 0;
    for (let i = 1; i <= volChaptersLength; i++) {
      if (readChapters[`${volId}-${i}`]) {
        readCount++;
      }
    }
    return Math.round((readCount / volChaptersLength) * 100);
  }, [readChapters]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("reverend-insanity-view-mode") as "detailed" | "compact" | null;
      if (saved === "detailed" || saved === "compact") {
        setViewMode(saved);
      } else if (window.innerWidth >= 768) {
        setViewMode("detailed");
      } else {
        setViewMode("compact");
      }
    }

    const handleViewModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"detailed" | "compact">;
      if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
        setViewMode(customEvent.detail);
        localStorage.setItem("reverend-insanity-view-mode", customEvent.detail);
      }
    };
    window.addEventListener('change-view-mode', handleViewModeChange);
    return () => {
      window.removeEventListener('change-view-mode', handleViewModeChange);
    };
  }, []);

  const handleResetVolume = (volId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    localStorage.removeItem(`reverend-insanity-progress-meta-${volId}`);
    localStorage.removeItem(`reverend-insanity-progress-${volId}`);
    
    const readKey = "reverend-insanity-read-chapters";
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
      } catch (err) {
        console.error(err);
      }
    }

    setProgressMap(prev => {
      const copy = { ...prev };
      delete copy[volId];
      return copy;
    });
  };

  const handleResetAll = () => {
    if (confirm("Are you sure you want to reset all reading progress for Reverend Insanity?")) {
      volumes.forEach(vol => {
        localStorage.removeItem(`reverend-insanity-progress-meta-${vol.id}`);
        localStorage.removeItem(`reverend-insanity-progress-${vol.id}`);
      });
      localStorage.removeItem("reverend-insanity-read-chapters");
      setProgressMap({});
      setReadChapters({});
    }
  };

  const sortedChapters = [...filteredChapters].sort((a, b) => a.globalIndex - b.globalIndex);

  return (
    <div className="min-h-screen w-full bg-[#020204] text-zinc-100 overflow-y-auto relative flex flex-col items-center select-none theme-reverend-insanity">
      {/* Background Slideshow */}
      <BackgroundSlideshow images={backgroundImages} imageOpacity={0.65} />

      {/* Dark overlay mask */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-0 pointer-events-none" />
      
      {/* Top Bar */}
      <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-[#020204]/90 to-transparent backdrop-blur-md flex items-center justify-between border-b border-red-950/20">
        <div className="flex items-center">
          <Link href="/reverend-insanity">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-red-500 hover:bg-red-950/20 rounded-full w-10 h-10 flex items-center justify-center transition-all cursor-pointer">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest hidden sm:block uppercase">Reverend Insanity</h1>
          <h1 className="ml-4 text-xl font-serif font-bold text-white tracking-widest sm:hidden uppercase">RI</h1>
          {Object.keys(progressMap).length > 0 && (
            <button
              onClick={handleResetAll}
              className="text-[10px] text-white bg-red-600 hover:bg-red-700 font-mono tracking-widest uppercase ml-4 px-3 py-1.5 rounded-full cursor-pointer transition-all active:scale-95 flex-shrink-0"
            >
              Reset All
            </button>
          )}
        </div>

        <UserMenu
          onSignIn={() => setAuthModalOpen(true)}
          onProfile={() => setProfileModalOpen(true)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 container mx-auto px-4 pb-20 max-w-5xl"
      >
        <div className="text-center mb-6 mt-6 select-none animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-white uppercase drop-shadow-lg">
            Choose Your <span className="text-red-500 font-normal">Volume</span>
          </h2>
        </div>

        {/* Content Toggle (Book Archives vs All Chapters Grid) */}
        <div className="flex justify-center mb-10 mt-6">
          <div className="relative bg-red-950/10 backdrop-blur-md p-1.5 rounded-full border border-red-950/25 flex items-center gap-1">
            <button
              onClick={() => setContentType("arcs")}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 cursor-pointer ${contentType === "arcs" ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {contentType === "arcs" && (
                <motion.div
                  layoutId="activeTabRi"
                  className="absolute inset-0 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Book Archives
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${contentType === "arcs" ? "bg-black/20 text-white font-mono" : "bg-white/10 text-zinc-500"}`}>
                  {volumes.length}
                </span>
              </span>
            </button>
            <button
              onClick={() => setContentType("chapters")}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 cursor-pointer ${contentType === "chapters" ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {contentType === "chapters" && (
                <motion.div
                  layoutId="activeTabRi"
                  className="absolute inset-0 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                All Chapters Grid
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {contentType === "arcs" ? (
            <motion.div
              key="arcs-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* Volumes Grid */}
              {viewMode === "detailed" ? (
                <div className="flex flex-col gap-10">
                  {volumes.map((vol, volIdx) => (
                    <div 
                      key={vol.id} 
                      className="relative w-full border border-red-950/40 rounded-3xl overflow-hidden bg-black/55 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_55px_rgba(220,38,38,0.03)] hover:border-red-600/25 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />

                      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 md:gap-12">
                        
                        {/* Left: Info */}
                        <div className="flex flex-col justify-between gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-mono text-xs text-red-500 tracking-widest uppercase font-semibold">Book {vol.volumeNumber}</span>
                              <span className="text-zinc-700">•</span>
                              <span className="text-xs text-zinc-400 font-mono">{vol.chapters.length} Chapters</span>
                            </div>
                            <Link href={`/reverend-insanity/select/${vol.id}`} className="group/title">
                              <h2 className="font-serif text-2xl font-bold text-zinc-100 tracking-wide group-hover/title:text-red-500 transition-colors">{vol.title}</h2>
                            </Link>
                            <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-sans font-light">{vol.synopsis}</p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center gap-4 bg-red-950/5 p-4 rounded-xl border border-red-950/20 w-fit">
                            <div className="text-xs">
                              <span className="text-zinc-550 block uppercase font-mono tracking-wider mb-0.5">Chronology</span>
                              <span className="font-semibold text-zinc-350">{vol.releaseDateJP}</span>
                            </div>
                            <div className="hidden sm:block w-[1px] h-6 bg-red-950/20" />
                            <div className="text-xs">
                              <span className="text-zinc-555 block uppercase font-mono tracking-wider mb-0.5">Chapters</span>
                              <span className="font-semibold text-zinc-355">{vol.chaptersRange}</span>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Link href={`/reverend-insanity/select/${vol.id}`}>
                              <Button className="bg-red-950/40 hover:bg-red-900/40 text-red-500 border border-red-900/30 font-mono font-bold text-xs tracking-wider cursor-pointer rounded-xl py-5 transition-all">
                                EXPAND CHAPTERS
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Right: Cover & CTA */}
                        <div className="flex flex-col items-center justify-center p-2 bg-transparent">
                          <Link href={`/reverend-insanity/select/${vol.id}`} className="hover-3d relative cursor-pointer w-full max-w-[145px] block">
                            <div className="relative w-full aspect-[2/3] shadow-2xl rounded-lg border border-red-950/30 overflow-hidden">
                              {/* Volume Number Badge */}
                              <div className="absolute top-2.5 left-2.5 bg-red-650/90 text-white font-serif font-black text-xs w-6 h-6 rounded-full flex items-center justify-center border border-red-500/40 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-20 select-none">
                                {vol.volumeNumber}
                              </div>
                              <Image
                                src={vol.coverImage}
                                alt={vol.title}
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                                sizes="145px"
                                priority={volIdx === 0}
                              />
                              
                              {progressMap[vol.id] && (() => {
                                const volProgress = getVolumeProgress(vol.id, vol.chapters.length);
                                return (
                                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm border border-red-950/30 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md">
                                    <span className="text-[9px] font-mono font-bold text-red-500">
                                      {volProgress}%
                                    </span>
                                    <svg className="absolute w-8 h-8 transform -rotate-90 text-red-600" viewBox="0 0 36 36">
                                      <path
                                        className="text-zinc-900"
                                        strokeWidth="3.5"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <path
                                        className="text-red-500 transition-all duration-300"
                                        strokeDasharray={`${volProgress}, 100`}
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                    </svg>
                                  </div>
                                );
                              })()}
                            </div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                          </Link>

                          <div className="w-full mt-4 flex flex-col gap-2">
                            {progressMap[vol.id] ? (
                              <Link href={`/reverend-insanity/read/${vol.id}/${progressMap[vol.id].chapterIndex}`} className="w-full">
                                <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs tracking-widest uppercase cursor-pointer rounded-xl py-6 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.45)] transition-all">
                                  CONTINUE READING
                                </Button>
                              </Link>
                            ) : (
                              <Link href={`/reverend-insanity/read/${vol.id}/1`} className="w-full">
                                <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs tracking-widest uppercase cursor-pointer rounded-xl py-6 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.45)] transition-all">
                                  BEGIN READING
                                </Button>
                              </Link>
                            )}
                            
                            {progressMap[vol.id] && (
                              <Button
                                variant="destructive"
                                onClick={(e) => handleResetVolume(vol.id, e)}
                                className="w-full bg-red-600 hover:bg-red-700 text-white border-none font-bold text-[10px] tracking-wider py-1.5 cursor-pointer rounded-xl transition-all shadow-md"
                              >
                                RESET PROGRESS
                              </Button>
                            )}
                          </div>
                        </div>
                    </div>
                  </div>
                ))
              }
                </div>
              ) : (
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {volumes.map((vol, volIdx) => {
                    const cleanTitle = vol.title.replace(/^Book\s+\d+:\s*/i, '');
                    return (
                      <Link
                        key={vol.id}
                        href={`/reverend-insanity/select/${vol.id}`}
                        className="flex flex-col gap-3 group cursor-pointer relative"
                      >
                        <div className="hover-3d relative cursor-pointer w-full">
                          <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-red-950/25 group-hover:border-red-600/30 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all duration-350 bg-zinc-900/40">
                            {/* Volume Number Badge */}
                            <div className="absolute top-2.5 left-2.5 bg-red-650/90 text-white font-serif font-black text-xs sm:text-sm w-7 h-7 rounded-full flex items-center justify-center border border-red-500/40 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-20 group-hover:scale-110 transition-all duration-300 select-none">
                              {vol.volumeNumber}
                            </div>
                            <Image
                              src={vol.coverImage}
                              alt={vol.title}
                              fill
                              className="object-cover transition-transform duration-500 scale-[1.01] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                              sizes="(max-width: 768px) 50vw, 180px"
                            />
                            {progressMap[vol.id] && (() => {
                              const volProgress = getVolumeProgress(vol.id, vol.chapters.length);
                              return (
                                <>
                                  <div className="absolute top-2.5 right-2.5 bg-red-950/80 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-red-500/30 text-[9px] font-mono font-bold text-red-400 z-20 pointer-events-none shadow-md">
                                    RESUME
                                  </div>
                                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-red-950/30 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                                    <span className="text-[9px] font-mono font-bold text-red-500">
                                      {volProgress}%
                                    </span>
                                    <svg className="absolute w-8 h-8 transform -rotate-90 text-red-600" viewBox="0 0 36 36">
                                      <path
                                        className="text-zinc-950"
                                        strokeWidth="3.5"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                      <path
                                        className="text-red-500 transition-all duration-300"
                                        strokeDasharray={`${volProgress}, 100`}
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      />
                                    </svg>
                                  </div>
                                </>
                              );
                            })()}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4 pointer-events-none">
                              <span className="bg-red-650/90 text-white text-[10px] font-bold font-mono tracking-widest px-3.5 py-1 rounded-full shadow-lg border border-red-500/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                EXPAND
                              </span>
                            </div>
                          </div>
                          {/* Empty hover zones */}
                          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                        <div className="text-center mt-1 px-1 flex flex-col gap-0.5">
                          <span className="text-[11px] sm:text-xs font-bold font-mono text-red-500 uppercase tracking-widest group-hover:text-red-400 transition-colors">Book {vol.volumeNumber}</span>
                          <span className="text-xs font-semibold text-zinc-300 group-hover:text-red-500 transition-colors block truncate w-full leading-snug">
                            {cleanTitle}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="chapters-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#020204]/60 border border-red-950/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl relative flex flex-col gap-6"
            >
              {/* Search Header */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-red-950/15 pb-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-zinc-100 tracking-widest flex items-center gap-2 uppercase">
                    <BookOpen className="text-red-500 w-6 h-6" />
                    chapters list
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">
                    Search chapters
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-black/40 p-1 rounded-xl border border-red-950/35 self-stretch sm:self-auto justify-center">
                    <button
                      onClick={() => setChaptersViewMode("grid")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        chaptersViewMode === "grid"
                          ? "bg-red-650/15 text-red-500 border border-red-500/25 shadow-[0_0_10px_rgba(220,38,38,0.15)]"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      Grid
                    </button>
                    <button
                      onClick={() => setChaptersViewMode("detailed")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        chaptersViewMode === "detailed"
                          ? "bg-red-650/15 text-red-500 border border-red-500/25 shadow-[0_0_10px_rgba(220,38,38,0.15)]"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                      Detailed
                    </button>
                  </div>

                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-550" />
                    <input
                      type="text"
                      placeholder="Search by chapter number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-xl border border-red-950/35 bg-black/40 text-sm pl-10 pr-4 py-2.5 outline-none focus:border-red-550 transition-all font-mono text-red-500 placeholder:text-zinc-650"
                    />
                  </div>
                </div>
              </div>

              {/* Range Tabs (Only if not searching) */}
              {!searchQuery.trim() && (
                <div className="flex flex-wrap gap-2 justify-center bg-black/30 p-1.5 rounded-xl border border-red-950/10">
                  {[
                    { id: "1-400", label: "Chapters 1-400" },
                    { id: "401-800", label: "Chapters 401-800" },
                    { id: "801-1200", label: "Chapters 801-1200" },
                    { id: "1201-1600", label: "Chapters 1201-1600" },
                    { id: "1601-2000", label: "Chapters 1601-2000" },
                    { id: "2001-2334", label: "Chapters 2001-2334" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setChapterTab(tab.id)}
                      className={`relative px-4 py-2 rounded-lg text-xs font-bold font-mono transition-colors duration-200 cursor-pointer ${chapterTab === tab.id ? "bg-red-650/15 text-red-500 border border-red-500/25" : "text-zinc-550 hover:text-zinc-350"}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Grid/List of Chapter Cards */}
              <div className={
                chaptersViewMode === "grid"
                  ? "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
              }>
                {sortedChapters.map((ch) => {
                  const isRead = readChapters[`${ch.volId}-${ch.index}`];
                  
                  if (chaptersViewMode === "grid") {
                    return (
                      <Link
                        key={ch.id}
                        href={`/reverend-insanity/read/${ch.volId}/${ch.index}`}
                        className="flex flex-col items-center justify-center p-3 transition-all text-center select-none active:scale-95 group shadow-sm rounded-lg border border-red-950/20 bg-black/40 hover:bg-red-950/10 hover:border-red-500/30"
                      >
                        <span className="font-mono text-sm font-bold text-zinc-300 group-hover:text-red-500 transition-colors">
                          {ch.globalIndex}
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={ch.id}
                      href={`/reverend-insanity/read/${ch.volId}/${ch.index}`}
                      className={`flex flex-col items-start p-4 transition-all text-left select-none active:scale-95 group shadow-md rounded-xl border border-red-950/20 bg-black/40 hover:bg-red-950/10 hover:border-red-500/30 ${isRead ? 'opacity-65 border-red-600/25 bg-red-950/5' : ''}`}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className="font-mono text-xs text-red-500 font-bold">#{ch.globalIndex}</span>
                        <span className="text-xs text-zinc-500 font-mono capitalize">Book {ch.volId.replace('ri', '')}</span>
                      </div>
                      <span className={`transition-colors text-sm font-medium mt-1 truncate w-full ${isRead ? 'text-zinc-550' : 'text-zinc-300 group-hover:text-red-500'}`}>
                        {ch.title}
                      </span>
                      {isRead && (
                        <span className="mt-2 text-[8px] font-mono text-emerald-500 font-bold border border-emerald-500/30 bg-emerald-950/25 px-1.5 py-0.5 rounded w-fit">
                          ✓ Read
                        </span>
                      )}
                    </Link>
                  );
                })}

                {sortedChapters.length === 0 && (
                  <div className="col-span-full py-12 text-center text-zinc-550 border border-dashed border-red-950/20 rounded-2xl font-mono text-sm">
                    No matching chapters found in the archives.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Global Auth Modals */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  );
}
