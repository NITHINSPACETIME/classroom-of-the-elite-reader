"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { List, ArrowLeft, LayoutGrid, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

import { BunnyGirlVolumeData, bunnyGirlSideStories } from "@/data/bunny-girl";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface BunnyGirlSelectClientProps {
  volumes: BunnyGirlVolumeData[];
}

const bunnyGirlBackgrounds = [
  "/assets/bunny-girl/bg/1027054.jpg",
  "/assets/bunny-girl/bg/1042594.png",
  "/assets/bunny-girl/bg/95009998.jpg",
  "/assets/bunny-girl/bg/994295.png",
  "/assets/bunny-girl/bg/hq720.jpg",
  "/assets/bunny-girl/bg/peakpx.jpg"
];

// Helper to format short labels for the grid view
const getCompactChapterLabel = (title: string, index: number) => {
  const lower = title.toLowerCase();
  if (lower.includes("illustration")) return "Illus";
  if (lower.includes("afterword")) return "Afterword";
  if (lower.includes("prologue")) return "Prologue";
  const match = title.match(/Chapter\s+(\d+)/i);
  if (match) return `Ch. ${match[1]}`;
  const matchLast = title.match(/Last\s+Chapter/i);
  if (matchLast) return "Last Ch.";
  // Fallback to number if too long
  if (title.length > 15) {
    return `Ch. ${index}`;
  }
  return title;
};

export default function BunnyGirlSelectClient({ volumes }: BunnyGirlSelectClientProps) {
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  const [selectedVolume, setSelectedVolume] = useState<BunnyGirlVolumeData | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string }>>({});
  const [activeTab, setActiveTab] = useState<"main" | "side">("main");
  
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  // Default chapters view mode to detailed (expanded list) as requested
  const [chaptersViewMode, setChaptersViewMode] = useState<"grid" | "detailed">("detailed");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setTimeout(() => {
        setViewMode("detailed");
      }, 0);
    }

    const progress: Record<string, { percentage: number; chapterTitle: string }> = {};
    const allVols = [...volumes, ...bunnyGirlSideStories];
    allVols.forEach(vol => {
      const savedMeta = localStorage.getItem(`bunny-girl-progress-meta-${vol.id}`);
      if (savedMeta) {
        try {
          progress[vol.id] = JSON.parse(savedMeta);
        } catch {}
      } else {
        const savedCfi = localStorage.getItem(`bunny-girl-progress-${vol.id}`);
        if (savedCfi) {
          progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading" };
        }
      }
    });
    setTimeout(() => {
      setProgressMap(progress);
    }, 0);
  }, [volumes]);

  useEffect(() => {
    if (selectedVolume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVolume]);

  const currentVolumesList = useMemo(() => {
    return activeTab === "main" ? volumes : bunnyGirlSideStories;
  }, [activeTab, volumes]);

  const filteredVolumes = useMemo(() => {
    if (!searchQuery) return currentVolumesList;
    const lowerQuery = searchQuery.toLowerCase();
    return currentVolumesList.filter(
      vol =>
        vol.title.toLowerCase().includes(lowerQuery) ||
        vol.synopsis.toLowerCase().includes(lowerQuery) ||
        vol.volumeNumber.toLowerCase().includes(lowerQuery) ||
        vol.chapters.some(ch => ch.toLowerCase().includes(lowerQuery))
    );
  }, [currentVolumesList, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#0a0714] text-[#ece2f9] overflow-y-auto relative flex flex-col items-center select-none">
      {/* Background Slideshow & Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
        {/* Subtle dark vignette overlay to ensure text contrast while keeping background visible */}
        <div className="absolute inset-0 bg-[#0a0714]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-[#0a0714]/40 to-transparent z-10" />
        <BackgroundSlideshow images={bunnyGirlBackgrounds} interval={8000} imageOpacity={0.85} />
      </div>

      {/* Futuristic soft Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

      {/* Top Header */}
      <header className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-[#0a0714]/90 to-transparent backdrop-blur-md flex items-center justify-between border-b border-purple-950/20">
        <div className="flex items-center">
          <Link href="/bunny-girl">
            <Button variant="ghost" size="icon" className="text-purple-300 hover:text-white hover:bg-purple-950/40 rounded-full transition-all">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="ml-4 text-sm sm:text-base md:text-lg lg:text-xl font-serif font-extralight tracking-[0.15em] uppercase text-zinc-100 truncate max-w-[200px] sm:max-w-none">
            Rascal Does Not Dream Of <span className="text-purple-300 font-normal">Bunny Girl Senpai</span>
          </h1>
        </div>

        <UserMenu
          onSignIn={() => setAuthModalOpen(true)}
          onProfile={() => setProfileModalOpen(true)}
        />
      </header>

      {/* Main Body */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 container mx-auto px-4 pb-24 max-w-5xl"
      >
        {/* Page Title & Search Bar */}
        <div className="flex flex-col items-center text-center mt-8 mb-12 gap-6">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-3xl font-serif font-extralight tracking-widest uppercase text-white">Light Novel Volumes</h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mt-2">
            <div className="relative bg-purple-950/20 backdrop-blur-md p-1.5 rounded-full border border-purple-900/30 flex items-center gap-1">
              <button
                onClick={() => setActiveTab("main")}
                className={`relative px-6 py-2 rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-colors duration-300 z-10 cursor-pointer ${
                  activeTab === "main" ? "text-white" : "text-purple-300/60 hover:text-purple-200"
                }`}
              >
                {activeTab === "main" && (
                  <motion.div
                    layoutId="bunnyGirlActiveTab"
                    className="absolute inset-0 bg-purple-900/60 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  Main Volumes
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === "main" ? "bg-white/20 text-white" : "bg-purple-950/40 text-purple-400"
                  }`}>
                    {volumes.length}
                  </span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab("side")}
                className={`relative px-6 py-2 rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-colors duration-300 z-10 cursor-pointer ${
                  activeTab === "side" ? "text-white" : "text-purple-300/60 hover:text-purple-200"
                }`}
              >
                {activeTab === "side" && (
                  <motion.div
                    layoutId="bunnyGirlActiveTab"
                    className="absolute inset-0 bg-purple-900/60 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  Side Stories
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === "side" ? "bg-white/20 text-white" : "bg-purple-950/40 text-purple-400"
                  }`}>
                    {bunnyGirlSideStories.length}
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-purple-400/60" />
            <input
              type="text"
              placeholder="Search volumes, synopses, chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-purple-900/30 bg-black/40 text-white placeholder:text-purple-300/40 text-sm pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.02)] focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
            />
          </div>
        </div>

        {/* View Mode: Compact (Grid of Covers) vs Detailed (List of Volume Panels) */}
        <AnimatePresence mode="wait">
          {viewMode === "detailed" ? (
            <motion.div
              key="detailed-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {filteredVolumes.map((vol) => (
                <div
                  key={vol.id}
                  className="bg-black/45 border border-purple-900/20 hover:border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                  
                  {/* Info and cover grid */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_250px] divide-y md:divide-y-0 md:divide-x divide-purple-950/20">
                    
                    {/* Left Pane - Metadata and chapters list */}
                    <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">Volume {vol.volumeNumber}</span>
                          {vol.tag && (
                            <span className="bg-purple-950/60 text-purple-300 border border-purple-900/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.05)]">
                              {vol.tag}
                            </span>
                          )}
                          <span className="text-zinc-650">•</span>
                          <span className="text-xs text-zinc-400 font-mono">Released {vol.releaseDateEN}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-zinc-100 tracking-wide">{vol.title}</h3>
                        <p className="text-sm text-zinc-300 leading-relaxed font-serif font-light">{vol.synopsis}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-purple-300 border-t border-purple-950/40 pt-4">
                        <div className="flex items-center gap-1.5 bg-purple-950/20 px-3 py-1 rounded-full border border-purple-900/30">
                          <span className="font-bold">JP Date:</span>
                          <span className="text-zinc-300">{vol.releaseDateJP}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-purple-950/20 px-3 py-1 rounded-full border border-purple-900/30">
                          <span className="font-bold">Total Chapters:</span>
                          <span className="text-zinc-300">{vol.chapters.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Pane - Cover Image Card & Navigation */}
                    <div className="flex flex-col items-center justify-center p-6 bg-purple-950/5">
                      <div
                        onClick={() => setSelectedVolume(vol)}
                        className="relative w-full max-w-[140px] aspect-[2/3] shadow-2xl rounded-lg border border-purple-950/40 overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-transform duration-300"
                      >
                        <Image
                          src={vol.coverImage}
                          alt={vol.title}
                          fill
                          className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                          sizes="140px"
                        />
                        {vol.inProgress && (
                          <div className="absolute inset-0 bg-black/80 flex items-center justify-center border-t border-purple-500/25">
                            <span className="text-purple-300 font-mono font-bold text-[10px] tracking-widest uppercase animate-pulse">In Progress</span>
                          </div>
                        )}
                        {progressMap[vol.id] && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-950/45 z-20">
                            <div
                              className="h-full bg-purple-400 shadow-[0_0_8px_#a855f7]"
                              style={{ width: `${Math.min(100, Math.max(0, progressMap[vol.id].percentage * 100))}%` }}
                            />
                          </div>
                        )}
                      </div>

                      <div className="w-full mt-5 flex flex-col gap-2">
                        <Button
                          onClick={() => setSelectedVolume(vol)}
                          className="w-full bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-800/30 font-serif font-bold text-xs tracking-wider cursor-pointer"
                        >
                          EXPAND CHAPTERS
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="compact-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {filteredVolumes.map((vol) => (
                <div
                  key={vol.id}
                  onClick={() => setSelectedVolume(vol)}
                  className="flex flex-col gap-2.5 group cursor-pointer relative"
                >
                  <div className="w-full aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-purple-900/20 relative z-10">
                    {vol.tag && (
                      <div className="absolute top-2.5 right-2.5 bg-purple-950/90 text-purple-300 border border-purple-500/30 text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-20 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                        {vol.tag}
                      </div>
                    )}
                    <Image
                      src={vol.coverImage}
                      alt={vol.title}
                      fill
                      className="object-cover transition-transform duration-350 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 50vw, 180px"
                    />
                    {vol.inProgress && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center p-2 z-20">
                        <span className="text-purple-400 font-mono font-bold text-[9px] tracking-widest uppercase animate-pulse">Coming Soon</span>
                      </div>
                    )}
                    {progressMap[vol.id] && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-purple-950/40 z-20">
                        <div
                          className="h-full bg-purple-400 shadow-[0_0_8px_#a855f7]"
                          style={{ width: `${Math.min(100, Math.max(0, progressMap[vol.id].percentage * 100))}%` }}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-3 pointer-events-none">
                      <span className="bg-purple-600/90 text-white text-[9px] font-bold font-mono tracking-widest px-2.5 py-0.5 rounded-full shadow-md">
                        EXPAND
                      </span>
                    </div>
                  </div>

                  <div className="text-center mt-1 px-1">
                    <div className="font-bold text-zinc-200 text-xs group-hover:text-purple-300 transition-colors truncate">
                      Volume {vol.volumeNumber}
                    </div>
                    <div className="text-[10px] text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">
                      {vol.title}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Volume Details Drawer / Overlay Modal */}
        <AnimatePresence>
          {selectedVolume && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-[#0c0817] border border-purple-900/40 rounded-[36px] shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-y-auto p-6 md:p-8 flex flex-col md:grid md:grid-cols-[200px_1fr] gap-6 text-[#ece2f9] select-text"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVolume(null)}
                  className="absolute top-4 right-4 text-purple-300 hover:text-white hover:bg-purple-950/30 rounded-full p-2 w-10 h-10 flex items-center justify-center z-50 text-xl font-bold cursor-pointer transition-all"
                >
                  ✕
                </button>

                {/* Header Section (Title & Subtitle) */}
                <div className="col-span-full flex flex-col gap-4">
                  <div className="pr-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-extralight text-white tracking-wide border-b border-purple-900/20 pb-2">
                      {selectedVolume.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-purple-400 mt-2 font-mono uppercase tracking-widest">
                      <span>Volume {selectedVolume.volumeNumber}</span>
                      <span className="text-purple-900/60">|</span>
                      <span>{selectedVolume.chapters.length} Chapters</span>
                    </div>
                  </div>
                </div>

                {/* Left Panel: Cover image and entry button */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-[170px] aspect-[2/3] shadow-2xl border border-purple-900/30 rounded-lg overflow-hidden">
                    <Image
                      src={selectedVolume.coverImage}
                      alt={selectedVolume.title}
                      fill
                      className="object-cover"
                      sizes="170px"
                    />
                  </div>
                  
                  <div className="w-full flex flex-col gap-2">
                    {selectedVolume.inProgress ? (
                      <Button disabled className="w-full bg-zinc-900 text-zinc-500 border border-zinc-800 font-bold uppercase tracking-wider text-xs py-3 cursor-not-allowed">
                        IN PROGRESS
                      </Button>
                    ) : (
                      <a href={`/bunny-girl/read/${selectedVolume.id}/1`} className="w-full">
                        <Button className="w-full bg-purple-750 hover:bg-purple-650 text-white font-bold font-serif py-3 tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                          BEGIN READING
                        </Button>
                      </a>
                    )}
                  </div>

                  {progressMap[selectedVolume.id] && (
                    <div className="w-full bg-purple-950/10 border border-purple-900/20 rounded-xl p-3 text-center">
                      <div className="text-[10px] text-purple-400 font-bold tracking-wider uppercase mb-1">Last Read Location</div>
                      <div className="text-xs text-zinc-200 font-medium truncate mb-1.5">{progressMap[selectedVolume.id].chapterTitle}</div>
                      <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: `${progressMap[selectedVolume.id].percentage * 100}%` }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Panel: Metadata & Chapters TOC list */}
                <div className="flex flex-col gap-5">
                  {/* Synopsis */}
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-purple-400 mb-1.5">Synopsis</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-serif bg-purple-950/10 border border-purple-950/30 p-4 rounded-xl">{selectedVolume.synopsis}</p>
                  </div>

                  {/* Key Dates */}
                  <div className="grid grid-cols-2 gap-4 text-xs bg-black/35 p-4 rounded-xl border border-purple-950/20">
                    <div>
                      <span className="text-purple-400/60 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">JP Release Date</span>
                      <span className="text-zinc-300 font-serif">{selectedVolume.releaseDateJP}</span>
                    </div>
                    <div>
                      <span className="text-purple-400/60 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">EN Release Date</span>
                      <span className="text-zinc-300 font-serif">{selectedVolume.releaseDateEN}</span>
                    </div>
                  </div>

                  {/* Chapters Section with Toggle */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-purple-900/20 pb-2">
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-purple-400">Chapters Index</h4>
                      
                      {/* Grid / List View Toggle for Chapters */}
                      <div className="flex bg-black/30 border border-purple-900/30 p-0.5 rounded-lg text-xs">
                        <button
                          onClick={() => setChaptersViewMode("grid")}
                          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${chaptersViewMode === "grid" ? "bg-purple-900/40 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                          title="Grid View"
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setChaptersViewMode("detailed")}
                          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${chaptersViewMode === "detailed" ? "bg-purple-900/40 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                          title="Detailed List View"
                        >
                          <List className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {chaptersViewMode === "grid" ? (
                        <motion.div
                          key="chapters-grid"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[350px] md:max-h-[220px] overflow-y-auto pr-1"
                        >
                          {selectedVolume.chapters.map((chap, i) => {
                            const label = getCompactChapterLabel(chap, i + 1);
                            return (
                              <a key={i} href={`/bunny-girl/read/${selectedVolume.id}/${i + 1}`}>
                                <div className="flex items-center justify-center p-3 text-center rounded-lg border border-purple-950/30 bg-black/35 hover:bg-purple-900/20 hover:border-purple-500/30 text-xs font-serif text-zinc-200 hover:text-purple-200 transition-all cursor-pointer truncate active:scale-95">
                                  {label}
                                </div>
                              </a>
                            );
                          })}
                        </motion.div>
                      ) : (
                        <motion.ul
                          key="chapters-list"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-sm text-zinc-400 space-y-1.5 max-h-[350px] md:max-h-[220px] overflow-y-auto pr-2 border-l border-purple-950 pl-3.5"
                        >
                          {selectedVolume.chapters.map((chap, i) => (
                            <li key={i} className="flex justify-between items-center py-1.5 border-b border-purple-950/20 last:border-b-0">
                              <span className="font-serif text-zinc-300 pr-4">{chap}</span>
                              <a href={`/bunny-girl/read/${selectedVolume.id}/${i + 1}`}>
                                <span className="text-[10px] text-purple-400 font-bold tracking-widest uppercase hover:underline cursor-pointer flex-shrink-0">Read →</span>
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Toggle Button (Volumes View Compact vs Detailed) */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button
          onClick={() => setViewMode(prev => prev === "detailed" ? "compact" : "detailed")}
          className="rounded-full w-14 h-14 bg-purple-750 hover:bg-purple-650 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={viewMode}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {viewMode === "detailed" ? <LayoutGrid className="w-6 h-6" /> : <List className="w-6 h-6" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  );
}
