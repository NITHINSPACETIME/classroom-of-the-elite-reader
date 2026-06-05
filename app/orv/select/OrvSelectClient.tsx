"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { List, Download, ArrowLeft, LayoutGrid, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { OrvVolumeData } from "@/data/orv";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface OrvSelectClientProps {
  volumes: OrvVolumeData[];
  summary: {
    mainChapters: { index: number; title: string; id: string }[];
    contChapters: { index: number; title: string; id: string }[];
    sideChapters: { index: number; title: string; id: string }[];
  };
}

const categories = [
  {
    id: "main",
    title: "ORV Novel",
    image: "/assets/orv/covers/orv.webp"
  },
  {
    id: "cont",
    title: "ORV Sequel (CH 553+)",
    image: "/assets/orv/covers/cont.webp"
  },
  {
    id: "side",
    title: "ORV Short Stories",
    image: "/assets/orv/covers/side.webp"
  }
];

const backgroundImages = [
  "/assets/orv/8419281.png",
  "/assets/orv/8419302.png",
  "/assets/orv/8419309.jpg",
  "/assets/orv/9397294.jpg"
];

export default function OrvSelectClient({ volumes, summary }: OrvSelectClientProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  const searchParams = useSearchParams();
  const initialContentType = searchParams.get("contentType") as "arcs" | "chapters" | null;
  const [contentType, setContentType] = useState<"arcs" | "chapters">(initialContentType === "chapters" ? "chapters" : "arcs");

  const categoryParam = searchParams.get("category") as "main" | "cont" | "side" | null;
  const [activeCategory, setActiveCategory] = useState<"main" | "cont" | "side" | null>(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);
  const [selectedVolume, setSelectedVolume] = useState<OrvVolumeData | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string; chapterIndex: number }>>({});
  
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [chapterTab, setChapterTab] = useState<string>("1-200");
  const [chaptersViewMode, setChaptersViewMode] = useState<"grid" | "detailed">("grid");

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setViewMode("detailed");
    }

    const progress: Record<string, { percentage: number; chapterTitle: string; chapterIndex: number }> = {};
    // Reading progress tracking disabled for ORV
    setProgressMap(progress);
  }, [volumes]);

  // Sync range tab selection when category changes
  useEffect(() => {
    if (activeCategory === "main") {
      setChapterTab("1-200");
    } else if (activeCategory === "cont") {
      setChapterTab("sequel");
    } else if (activeCategory === "side") {
      setChapterTab("sides");
    }
  }, [activeCategory]);

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

  const handleDownloadCover = (vol: OrvVolumeData, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = vol.coverImage;
    link.download = `Cover_${vol.title.replace(/\s+/g, '_') || vol.id}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate complete list of chapters based on volume configurations
  const allChapters = useMemo(() => {
    const list: { id: string; num: number; title: string; volId: string; type: string }[] = [];
    
    if (!summary) return list;

    // Main Story
    summary.mainChapters?.forEach((ch) => {
      const num = parseInt(ch.id);
      list.push({
        id: ch.id,
        num: isNaN(num) ? ch.index : num,
        title: ch.title,
        volId: num <= 99 ? "orv-part1" : num <= 284 ? "orv-part2" : num <= 372 ? "orv-part3" : num <= 486 ? "orv-part4" : "orv-part5",
        type: "main"
      });
    });

    // Continuation
    const sortedCont = summary.contChapters 
      ? [...summary.contChapters].sort((a, b) => a.index - b.index)
      : [];

    sortedCont.forEach((ch) => {
      const num = parseInt(ch.id);
      list.push({
        id: ch.id,
        num: isNaN(num) ? ch.index : num,
        title: ch.title,
        volId: "orv-cont",
        type: "cont"
      });
    });

    // Side Stories (One-Shots)
    summary.sideChapters?.forEach((ch) => {
      const match = ch.id.match(/\d+/);
      const num = match ? parseInt(match[0]) : ch.index;
      list.push({
        id: ch.id,
        num: num,
        title: ch.title,
        volId: "orv-side",
        type: "side"
      });
    });

    return list;
  }, [summary]);

  // Filtered volumes based on selected category tab
  const visibleVolumes = useMemo(() => {
    if (!activeCategory) return [];
    return volumes.filter(v => v.type === activeCategory);
  }, [volumes, activeCategory]);

  // Filtered chapters for chapter grid search
  const filteredChapters = useMemo(() => {
    let list = allChapters;

    // Filter by active category first
    if (activeCategory) {
      list = list.filter(ch => ch.type === activeCategory);
    }

    // Filter by query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(ch => 
        ch.title.toLowerCase().includes(q) || 
        ch.id.toLowerCase().includes(q)
      );
      return list;
    }

    // Filter by Tab (if not searching)
    if (activeCategory === "main") {
      if (chapterTab === "1-200") {
        list = list.filter(ch => ch.num >= 1 && ch.num <= 200);
      } else if (chapterTab === "201-400") {
        list = list.filter(ch => ch.num >= 201 && ch.num <= 400);
      } else if (chapterTab === "401-551") {
        list = list.filter(ch => ch.num >= 401 && ch.num <= 551);
      }
    }

    return list;
  }, [allChapters, chapterTab, searchQuery, activeCategory]);

  const activeCategoryLabel = useMemo(() => {
    if (!activeCategory) return "";
    const cat = categories.find(c => c.id === activeCategory);
    return cat ? ` - ${cat.title}` : "";
  }, [activeCategory]);

  // 1. Render Category Selection view if activeCategory is null
  if (!activeCategory) {
    return (
      <div className="min-h-screen w-full bg-[#020204] text-zinc-100 overflow-y-auto relative flex flex-col justify-between theme-orv">
        {/* Dynamic Background Slideshow matching COTE and Re:Zero */}
        <BackgroundSlideshow images={backgroundImages} />

        {/* Top Header */}
        <div className="w-full z-50 p-6 flex items-center justify-between border-b border-cyan-950/20 backdrop-blur-sm bg-black/10">
          <Link href="/orv">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/20 rounded-full transition-all">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-xl font-cinzel font-bold text-white tracking-widest uppercase">Omniscient Reader&apos;s Viewpoint</h1>
          <UserMenu
            onSignIn={() => setAuthModalOpen(true)}
            onProfile={() => setProfileModalOpen(true)}
          />
        </div>

        {/* Grid Category cards */}
        <div className="z-30 flex-1 flex flex-col items-center justify-center container mx-auto px-4 max-w-5xl my-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 select-none"
          >
            <div className="flex justify-center items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-cyan-500/50" />
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-cyan-400/80 text-shadow-cyan font-semibold">Scenario Selection</span>
              <span className="w-6 h-[1px] bg-cyan-500/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-white uppercase drop-shadow-lg">
              Choose Your <span className="text-cyan-400 text-shadow-cyan font-normal">Scenario</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => router.push(`/orv/select?category=${cat.id}`)}
                className="group relative cursor-pointer flex-shrink-0 transition-all duration-500 rounded-2xl overflow-hidden w-full max-w-[280px]"
              >
                {/* Card Container */}
                <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-950/40 border border-white/10 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                  <div className="absolute inset-0">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="280px"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col items-center justify-end h-1/2 pointer-events-none">
                    <h3 className="font-serif text-2xl font-bold text-center tracking-wide mb-3 drop-shadow-md text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <div className="h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/3 opacity-30 group-hover:w-2/3 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#00f0ff]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom spacer / Footer */}
        <div className="w-full py-6 text-center text-xs text-zinc-650 z-10">
          © 2026 Novels Reader.
        </div>

        {/* Global Auth Modals */}
        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
      </div>
    );
  }

  // 2. Render normal volume listing if activeCategory is selected
  return (
    <div className="min-h-screen w-full bg-[#020204] text-zinc-100 overflow-y-auto relative flex flex-col items-center select-none theme-orv">
      {/* Dynamic Background Slideshow matching COTE and Re:Zero */}
      <BackgroundSlideshow images={backgroundImages} />

      {/* Dark overlay mask (slightly darker for list readability) */}
      <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />
      
      {/* Magical grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

      {/* Top Bar */}
      <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-[#020204]/90 to-transparent backdrop-blur-md flex items-center justify-between border-b border-cyan-950/20">
        <div className="flex items-center">
          <button 
            onClick={() => router.push('/orv/select')}
            className="text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/20 rounded-full w-10 h-10 flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-2xl font-cinzel font-bold text-white tracking-widest hidden sm:block uppercase">Omniscient Reader&apos;s Viewpoint{activeCategoryLabel}</h1>
          <h1 className="ml-4 text-xl font-cinzel font-bold text-white tracking-widest sm:hidden uppercase">ORV{activeCategoryLabel}</h1>
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
        {/* Content Toggle (Story Arcs vs Fast Chapter Grid Selection) */}
        <div className="flex justify-center mb-10 mt-6">
          <div className="relative bg-cyan-950/10 backdrop-blur-md p-1.5 rounded-full border border-cyan-950/25 flex items-center gap-1">
            <button
              onClick={() => setContentType("arcs")}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 cursor-pointer ${contentType === "arcs" ? "text-black" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {contentType === "arcs" && (
                <motion.div
                  layoutId="activeTabOrv"
                  className="absolute inset-0 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Story Parts
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${contentType === "arcs" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-500"}`}>
                  {visibleVolumes.length}
                </span>
              </span>
            </button>
            <button
              onClick={() => setContentType("chapters")}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 cursor-pointer ${contentType === "chapters" ? "text-black" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {contentType === "chapters" && (
                <motion.div
                  layoutId="activeTabOrv"
                  className="absolute inset-0 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"
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
              className="flex flex-col gap-12"
            >
              {visibleVolumes.map((vol, volIdx) => (
                <div key={vol.id} className="relative w-full border border-cyan-500/15 rounded-3xl overflow-hidden bg-black/45 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.05)] transition-all duration-350 hover:border-cyan-500/25">
                  {/* Glowing decorative indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                  <div className="relative z-10 mb-6 border-b border-cyan-950/15 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase text-shadow-cyan">PART {vol.volumeNumber}</span>
                      <span className="text-zinc-650">•</span>
                      <span className="text-xs text-zinc-400 font-mono">{vol.partName}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-zinc-100 tracking-wide mt-1">{vol.title}</h2>
                    <p className="text-sm text-zinc-400 mt-2 max-w-3xl leading-relaxed font-sans font-light">{vol.synopsis}</p>
                  </div>

                  {viewMode === "detailed" ? (
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.6fr_240px] gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-cyan-500/10">
                      {/* Synopsis / Info */}
                      <div className="p-5 flex flex-col justify-between gap-6 pl-0">
                        <div className="flex flex-col gap-5">
                          <div className="grid grid-cols-2 gap-4 bg-cyan-950/5 p-4 rounded-xl border border-cyan-500/5">
                            <div>
                              <span className="block text-[10px] text-zinc-550 font-mono uppercase tracking-wider mb-1">Chapters Included</span>
                              <span className="text-sm font-semibold text-zinc-200">{vol.chaptersRange}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-zinc-550 font-mono uppercase tracking-wider mb-1">Release Date</span>
                              <span className="text-sm font-semibold text-zinc-200">{vol.releaseDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs bg-cyan-950/10 py-2 px-3 rounded-lg border border-cyan-500/10 w-fit">
                            <span className="font-bold text-cyan-400 font-mono">Total Chapters:</span>
                            <span className="text-zinc-350 font-sans font-medium">{vol.endChapter - vol.startChapter + 1} Chapters</span>
                          </div>
                        </div>

                        <div className="w-full flex gap-3 mt-4">
                          <Button 
                            onClick={() => setSelectedVolume(vol)}
                            className="bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-400 border border-cyan-500/30 font-mono font-bold text-xs tracking-wider cursor-pointer"
                          >
                            EXPAND CHAPTERS
                          </Button>
                        </div>
                      </div>

                      {/* Cover Card (Right) */}
                      <div className="relative group flex flex-col items-center justify-center p-6 md:pl-8 bg-transparent">
                        <div 
                          className="relative w-full max-w-[150px] aspect-[2/3] shadow-2xl rounded-lg border border-cyan-950/20 overflow-hidden cursor-pointer transform group-hover:scale-[1.03] transition-transform duration-300"
                          onClick={() => setSelectedVolume(vol)}
                        >
                          <Image
                            src={vol.coverImage}
                            alt={vol.title}
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            sizes="150px"
                            priority={volIdx === 0}
                          />
                        </div>

                        <div className="w-full mt-4 flex flex-col gap-2">
                          {progressMap[vol.id] ? (
                            <Link href={`/orv/read/${progressMap[vol.id].chapterIndex}`} className="w-full">
                              <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-widest uppercase cursor-pointer rounded-xl py-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                                CONTINUE READING
                              </Button>
                            </Link>
                          ) : (
                            <Link href={`/orv/read/${vol.startChapter}`} className="w-full">
                              <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-widest uppercase cursor-pointer rounded-xl py-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                                BEGIN READING
                              </Button>
                            </Link>
                          )}
                          <Button
                            variant="ghost"
                            onClick={(e) => handleDownloadCover(vol, e)}
                            className="w-full text-zinc-500 hover:text-cyan-400 hover:bg-cyan-950/10 text-xs flex gap-1.5 items-center justify-center cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" /> Save Cover Art
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <div
                        onClick={() => setSelectedVolume(vol)}
                        className="flex flex-col gap-2 group cursor-pointer relative"
                      >
                        <div className="w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg border border-cyan-950/20 relative">
                          <Image
                            src={vol.coverImage}
                            alt={vol.title}
                            fill
                            className="object-cover transition-all duration-300 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 768px) 50vw, 150px"
                          />
                        </div>
                        <div className="text-center mt-1 px-1">
                          <div className="font-bold text-zinc-100 text-xs group-hover:text-cyan-400 transition-colors truncate">
                            Part {vol.volumeNumber}
                          </div>
                          <div className="text-[10px] text-zinc-500 truncate font-mono">
                            {vol.chaptersRange}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="chapters-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950/20 border border-cyan-950/15 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative flex flex-col gap-6"
            >
              {/* Search Header */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-cyan-950/15 pb-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-zinc-100 tracking-widest flex items-center gap-2">
                    <BookOpen className="text-cyan-400 w-6 h-6 text-shadow-cyan" />
                    chapters list
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">
                    Search chapters
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-black/40 p-1 rounded-xl border border-cyan-950/35 self-stretch sm:self-auto justify-center">
                    <button
                      onClick={() => setChaptersViewMode("grid")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        chaptersViewMode === "grid"
                          ? "bg-cyan-500/15 text-cyan-400 border border-cyan-400/25 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      Grid
                    </button>
                    <button
                      onClick={() => setChaptersViewMode("detailed")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        chaptersViewMode === "detailed"
                          ? "bg-cyan-500/15 text-cyan-400 border border-cyan-400/25 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                      Detailed
                    </button>
                  </div>

                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search by chapter number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-xl border border-cyan-950/35 bg-black/40 text-sm pl-10 pr-4 py-2.5 outline-none focus:border-cyan-400 transition-all font-mono text-cyan-400 placeholder:text-zinc-650"
                    />
                  </div>
                </div>
              </div>

              {/* Range Tabs (Only if not searching and main category is active) */}
              {!searchQuery.trim() && activeCategory === "main" && (
                <div className="flex flex-wrap gap-2 justify-center bg-black/30 p-1.5 rounded-xl border border-cyan-950/10">
                  {[
                    { id: "1-200", label: "Chapters 1-200" },
                    { id: "201-400", label: "Chapters 201-400" },
                    { id: "401-551", label: "Chapters 401-551" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setChapterTab(tab.id)}
                      className={`relative px-4 py-2 rounded-lg text-xs font-bold font-mono transition-colors duration-200 cursor-pointer ${chapterTab === tab.id ? "bg-cyan-500/15 text-cyan-400 border border-cyan-400/25" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Grid of Chapter Cards */}
              <div className={
                chaptersViewMode === "grid"
                  ? "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2.5 max-h-[60vh] overflow-y-auto pr-2"
                  : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-[60vh] overflow-y-auto pr-2"
              }>
                {filteredChapters.map((ch) => {
                  const isSide = ch.type === "side";
                  
                  if (chaptersViewMode === "grid") {
                    let displayLabel = ch.id;
                    if (isSide) {
                      displayLabel = ch.id.replace("side-", "S");
                    }
                    return (
                      <Link
                        key={ch.id}
                        href={`/orv/read/${ch.id}`}
                        className={`flex flex-col items-center justify-center p-3 transition-all text-center select-none active:scale-95 group shadow-sm rounded-lg border border-cyan-950/20 bg-black/40 hover:bg-cyan-950/10 hover:border-cyan-500/30`}
                      >
                        <span className="font-mono text-sm font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors">
                          {displayLabel}
                        </span>
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={ch.id}
                      href={`/orv/read/${ch.id}`}
                      className={`flex flex-col items-center justify-center p-4 transition-all text-center select-none active:scale-95 group shadow-md ${isSide ? "rounded-2xl border border-white/10 bg-zinc-950/30 hover:border-cyan-400/80 hover:bg-cyan-950/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]" : "rounded-xl border border-cyan-950/20 bg-black/40 hover:bg-cyan-950/10 hover:border-cyan-500/30"}`}
                    >
                      <span className={`text-zinc-300 group-hover:text-cyan-400 transition-colors ${isSide ? "font-sans text-xs md:text-sm font-medium tracking-wide" : "font-mono text-sm font-bold"}`}>
                        {ch.title}
                      </span>
                      {!isSide && (
                        <span className="text-[10px] text-zinc-650 mt-1 font-mono uppercase group-hover:text-cyan-500/50 transition-colors">
                          {ch.type === "cont" ? "Sequel" : "Main Story"}
                        </span>
                      )}
                    </Link>
                  );
                })}

                {filteredChapters.length === 0 && (
                  <div className="col-span-full py-12 text-center text-zinc-550 font-mono text-sm">
                    No matching chapters located in Star Stream indexes.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drawer Modal for Specific Volume Expansion */}
        <AnimatePresence>
          {selectedVolume && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-[#020204] border border-cyan-900/30 rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 flex flex-col md:grid md:grid-cols-[200px_1fr] gap-6 text-zinc-100 select-text"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVolume(null)}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-cyan-400 hover:bg-cyan-950/20 rounded-full w-10 h-10 flex items-center justify-center z-50 text-xl font-bold cursor-pointer font-mono"
                >
                  ✕
                </button>

                {/* Left: Cover Art Details */}
                <div className="flex flex-col items-center gap-4 border-b md:border-b-0 md:border-r border-cyan-950/15 pb-6 md:pb-0 md:pr-6">
                  <div className="relative w-full max-w-[155px] aspect-[2/3] shadow-2xl border border-cyan-950/20 rounded-lg overflow-hidden">
                    <Image
                      src={selectedVolume.coverImage}
                      alt={selectedVolume.title}
                      fill
                      className="object-cover"
                      sizes="155px"
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    {progressMap[selectedVolume.id] ? (
                      <Link href={`/orv/read/${progressMap[selectedVolume.id].chapterIndex}`} className="w-full">
                        <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold py-3 text-xs tracking-widest uppercase cursor-pointer">
                          CONTINUE
                        </Button>
                      </Link>
                    ) : (
                      <Link href={`/orv/read/${selectedVolume.startChapter}`} className="w-full">
                        <Button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold py-3 text-xs tracking-widest uppercase cursor-pointer">
                          START READ
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="outline"
                      onClick={(e) => handleDownloadCover(selectedVolume, e)}
                      className="w-full border-cyan-950/30 hover:bg-cyan-950/10 text-zinc-400 text-xs font-mono cursor-pointer"
                    >
                      Save Cover Art
                    </Button>
                  </div>
                </div>

                {/* Right: Chapters Index Scroll List */}
                <div className="flex flex-col overflow-hidden min-h-[300px]">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">{selectedVolume.title}</h3>
                    <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mt-1 block">{selectedVolume.partName}</span>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-1.5 pr-2 max-h-[45vh]">
                    {allChapters
                      .filter(ch => ch.volId === selectedVolume.id)
                      .map((ch) => {
                        const isSideStory = selectedVolume.id === "orv-side";
                        if (isSideStory) {
                          return (
                            <Link
                              key={ch.id}
                              href={`/orv/read/${ch.id}`}
                              className="flex items-center p-4 rounded-2xl border border-white/10 bg-zinc-950/30 hover:bg-cyan-950/10 hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 w-full group mb-2.5 last:mb-0"
                            >
                              <span className="text-sm md:text-base text-zinc-200 group-hover:text-cyan-400 transition-colors font-sans font-medium tracking-wide">
                                {ch.title}
                              </span>
                            </Link>
                          );
                        }
                        
                        return (
                          <Link
                            key={ch.id}
                            href={`/orv/read/${ch.id}`}
                            className="flex items-center justify-between p-3 rounded-lg border border-cyan-950/10 bg-black/30 hover:bg-cyan-950/10 hover:border-cyan-500/25 transition-all group"
                          >
                            <span className="text-sm text-zinc-300 group-hover:text-cyan-400 transition-colors font-medium">
                              {ch.title}
                            </span>
                            <span className="text-[10px] text-zinc-550 font-mono">READ →</span>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Auth Modals */}
        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
      </motion.div>
    </div>
  );
}
