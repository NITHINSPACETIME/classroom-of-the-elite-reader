"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

import { TbateVolumeData } from "@/data/tbate";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface TbateSelectClientProps {
  volumes: TbateVolumeData[];
  sideStories: TbateVolumeData[];
}

const tbateBackgrounds = [
  "/assets/images/tbate/v1/volume-1-v3.jpg",
  "/assets/images/tbate/v7/volume-7-cover-final-1.jpg",
  "/assets/images/tbate/v8/tbate_volume-8_cover.jpg",
  "/assets/images/tbate/v9/edited-background-1.png",
  "/assets/images/tbate/v10/cover00440.jpeg",
  "/assets/images/tbate/v12/cover.jpeg"
];

export default function TbateSelectClient({ volumes, sideStories }: TbateSelectClientProps) {
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }>>({});
  const [activeTab, setActiveTab] = useState<"main" | "side">("main");
  
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("global-view-mode") as "detailed" | "compact" | null;
      setTimeout(() => {
        if (saved === "detailed" || saved === "compact") {
          setViewMode(saved);
        } else if (window.innerWidth >= 768) {
          setViewMode("detailed");
        } else {
          setViewMode("compact");
        }
      }, 0);
    }

    const progress: Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }> = {};
    const allVols = [...volumes, ...sideStories];
    allVols.forEach(vol => {
      const savedMeta = localStorage.getItem(`tbate-progress-meta-${vol.id}`);
      if (savedMeta) {
        try {
          progress[vol.id] = JSON.parse(savedMeta);
        } catch {}
      } else {
        const savedCfi = localStorage.getItem(`tbate-progress-${vol.id}`);
        if (savedCfi) {
          progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading", chapterIndex: parseInt(savedCfi) || 1 };
        }
      }
    });

    setTimeout(() => {
      setProgressMap(progress);
    }, 0);

    const handleViewModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"detailed" | "compact">;
      if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
        setViewMode(customEvent.detail);
      }
    };
    window.addEventListener('change-view-mode', handleViewModeChange);
    return () => {
      window.removeEventListener('change-view-mode', handleViewModeChange);
    };
  }, [volumes, sideStories]);

  const handleResetVolume = (volId: string) => {
    localStorage.removeItem(`tbate-progress-meta-${volId}`);
    localStorage.removeItem(`tbate-progress-${volId}`);
    
    const readKey = "tbate-read-chapters";
    const readData = localStorage.getItem(readKey);
    if (readData) {
      try {
        const readMap = JSON.parse(readData);
        const prefix = `${volId}-`;
        Object.keys(readMap).forEach(key => {
          if (key.startsWith(prefix)) {
            delete readMap[key];
          }
        });
        localStorage.setItem(readKey, JSON.stringify(readMap));
      } catch {}
    }
    setProgressMap(prev => {
      const copy = { ...prev };
      delete copy[volId];
      return copy;
    });
  };

  const handleGlobalViewModeToggle = () => {
    const nextMode = viewMode === "detailed" ? "compact" : "detailed";
    setViewMode(nextMode);
    localStorage.setItem("global-view-mode", nextMode);
    window.dispatchEvent(new CustomEvent('change-view-mode', { detail: nextMode }));
  };

  const displayedVolumes = useMemo(() => {
    const list = activeTab === "main" ? volumes : sideStories;
    return list.filter(v => 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      v.volumeNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.synopsis.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [volumes, sideStories, activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#070503] text-[#fffbeb] flex flex-col relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[#070503]/55 z-0 pointer-events-none" />
      <BackgroundSlideshow images={tbateBackgrounds} imageOpacity={0.8} />

      <header className="sticky top-0 left-0 w-full z-50 p-6 bg-[#070503]/80 backdrop-blur-md flex items-center justify-between border-b border-amber-950/25">
        <div className="flex items-center">
          <Link href="/tbate">
            <Button variant="ghost" size="icon" className="text-amber-300 hover:text-white hover:bg-amber-950/40 rounded-full transition-all cursor-pointer">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div className="ml-4 flex items-center gap-2">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-extralight tracking-[0.15em] uppercase text-zinc-100 truncate max-w-[200px] sm:max-w-none">
              The Beginning After the End
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <UserMenu onSignIn={() => setAuthModalOpen(true)} onProfile={() => setProfileModalOpen(true)} />
        </div>
      </header>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 relative">
        {/* Top bar controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 select-none">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold font-serif bg-gradient-to-r from-amber-300 via-yellow-250 to-amber-500 bg-clip-text text-transparent tracking-wide">
              Volume Select
            </h1>
            <p className="text-xs text-zinc-550 font-mono tracking-wider uppercase">
              The Beginning After The End
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-zinc-950/60 border border-zinc-800/80 rounded-full text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>

            {/* Tabs selector */}
            <div className="flex rounded-full bg-zinc-950/60 border border-zinc-800/80 p-0.5">
              <button
                onClick={() => setActiveTab("main")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === "main" ? "bg-amber-600/30 border border-amber-500/30 text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Volumes
              </button>
              <button
                onClick={() => setActiveTab("side")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === "side" ? "bg-amber-600/30 border border-amber-500/30 text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Specials
              </button>
            </div>

            {/* Layout Toggle */}
            <Button
              onClick={handleGlobalViewModeToggle}
              variant="outline"
              size="icon"
              className="rounded-full border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/60 hover:text-white cursor-pointer"
              title={viewMode === "detailed" ? "Switch to Compact View" : "Switch to Detailed View"}
            >
              {viewMode === "detailed" ? <LayoutGrid className="w-4 h-4" /> : <List className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Volume List Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${viewMode}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 ${
              viewMode === "detailed"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
            }`}
          >
            {displayedVolumes.map((vol) => {
              const progress = progressMap[vol.id];
              const isStarted = !!progress;

              if (viewMode === "detailed") {
                return (
                  <div
                    key={vol.id}
                    className="relative border border-zinc-800/80 bg-zinc-950/40 hover:border-amber-500/25 rounded-2xl p-4 flex gap-5 hover:bg-zinc-950/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.06)] transition-all duration-300 group"
                  >
                    <Link href={`/tbate/select/${vol.id}`} className="block shrink-0 relative aspect-[2/3] w-[110px] sm:w-[130px] rounded-xl overflow-hidden shadow-2xl border border-zinc-900">
                      <Image
                        src={vol.coverImage}
                        alt={vol.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="130px"
                      />
                    </Link>
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                            {activeTab === "side" ? "Special Volume 8.5" : `Volume ${vol.volumeNumber}`}
                          </span>
                          <div className="flex items-center gap-2">
                            {isStarted && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleResetVolume(vol.id);
                                }}
                                className="text-[9px] font-semibold text-red-400/70 hover:text-red-400 transition-colors uppercase tracking-wider bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 px-2.5 py-0.5 rounded-full cursor-pointer select-none"
                              >
                                Reset
                              </button>
                            )}
                          </div>
                        </div>

                        <Link href={`/tbate/select/${vol.id}`} className="hover:text-amber-300 transition-colors">
                          <h2 className="text-lg font-serif font-bold text-white leading-snug">
                            {vol.title}
                          </h2>
                        </Link>

                        <p className="text-xs text-zinc-400/80 line-clamp-3 leading-relaxed font-light font-sans max-w-xl">
                          {vol.synopsis}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-4">
                        {/* Progress Bar */}
                        {isStarted && (
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                              <span className="truncate max-w-[200px] text-amber-400/80">
                                {progress.chapterTitle}
                              </span>
                              <span>{Math.round(progress.percentage * 100)}% completed</span>
                            </div>
                            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                              <div
                                  className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full"
                                  style={{ width: `${Math.round(progress.percentage * 100)}%` }}
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2.5 select-none">
                          <Link href={`/tbate/read/${vol.id}/${isStarted ? (progress.chapterIndex || 1) : 1}`}>
                            <Button size="sm" className="rounded-full bg-amber-700/20 border border-amber-500/35 hover:bg-amber-600/40 hover:border-amber-500/60 text-white font-semibold text-[10px] tracking-wider uppercase px-4 cursor-pointer">
                              {isStarted ? "Continue" : "Start"}
                            </Button>
                          </Link>
                          <Link href={`/tbate/select/${vol.id}`}>
                            <Button size="sm" variant="ghost" className="rounded-full text-zinc-400 hover:text-white text-[10px] tracking-wider uppercase px-3 cursor-pointer">
                              Chapters
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Compact view
              return (
                <div key={vol.id} className="relative group flex flex-col gap-2">
                  <Link href={`/tbate/select/${vol.id}`} className="block relative aspect-[2/3] w-full rounded-xl overflow-hidden shadow-xl border border-zinc-900 hover-scale duration-300">
                    <Image
                      src={vol.coverImage}
                      alt={vol.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 150px, 200px"
                    />
                    
                    {/* Progress indicator overlays */}
                    {isStarted && (
                      <>
                        <div className="absolute top-2 left-2 bg-amber-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-amber-500/30 text-[9px] font-mono font-bold text-amber-300 z-20 pointer-events-none">
                          RESUME
                        </div>
                        <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                          <span className="text-[9px] font-mono font-bold text-amber-400">
                            {Math.round(progress.percentage * 100)}%
                          </span>
                          <svg className="absolute w-8 h-8 transform -rotate-90 text-amber-500" viewBox="0 0 36 36">
                            <path
                              className="text-zinc-800"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-amber-400 transition-all duration-300"
                              strokeDasharray={`${Math.round(progress.percentage * 100)}, 100`}
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                        </div>
                      </>
                    )}
                  </Link>

                  <div className="flex flex-col px-1 select-none">
                    <span className="text-[8px] font-mono font-bold text-amber-400 tracking-widest uppercase">
                      {activeTab === "side" ? "Special Vol. 8.5" : `Vol. ${vol.volumeNumber}`}
                    </span>
                    <Link href={`/tbate/select/${vol.id}`} className="hover:text-amber-300 transition-colors">
                      <h4 className="text-xs font-serif font-bold text-white truncate leading-tight mt-0.5">
                        {vol.title}
                      </h4>
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  );
}
