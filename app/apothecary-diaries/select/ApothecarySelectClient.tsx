"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { List, ArrowLeft, LayoutGrid, Search, Flower, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { ApothecaryDiariesVolumeData } from "@/data/apothecary-diaries";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface ApothecarySelectClientProps {
  volumes: ApothecaryDiariesVolumeData[];
}

const apothecaryBackgrounds = [
  "/assets/images/apothecary-diaries/wallpapers/bg_select.jpg",
  "/assets/images/apothecary-diaries/wallpapers/bg_cherry.jpg"
];

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function ApothecarySelectClient({ volumes }: ApothecarySelectClientProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("compact");
  const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }>>({});
  const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});
  
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [petalsActive, setPetalsActive] = useState(true);
  const [petals, setPetals] = useState<Petal[]>([]);

  // Initialize petals
  useEffect(() => {
    const generatedPetals: Petal[] = Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      size: Math.random() * 10 + 6,
      delay: Math.random() * 6,
      duration: Math.random() * 10 + 8,
      rotation: Math.random() * 360,
    }));
    setPetals(generatedPetals);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("global-view-mode") as "detailed" | "compact" | null;
      if (saved === "detailed" || saved === "compact") {
        setViewMode(saved);
      } else if (window.innerWidth >= 768) {
        setViewMode("detailed");
      } else {
        setViewMode("compact");
      }
    }

    const progress: Record<string, { percentage: number; chapterTitle: string; chapterIndex?: number }> = {};
    volumes.forEach(vol => {
      const savedMeta = localStorage.getItem(`apothecary-diaries-progress-meta-${vol.id}`);
      if (savedMeta) {
        try {
          progress[vol.id] = JSON.parse(savedMeta);
        } catch {}
      } else {
        const savedCfi = localStorage.getItem(`apothecary-diaries-progress-${vol.id}`);
        if (savedCfi) {
          progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading", chapterIndex: parseInt(savedCfi) || 1 };
        }
      }
    });
    const readData = localStorage.getItem("apothecary-diaries-read-chapters");
    if (readData) {
      try {
        setReadChapters(JSON.parse(readData));
      } catch {}
    }
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
  }, [volumes]);

  const handleResetVolume = (volId: string) => {
    localStorage.removeItem(`apothecary-diaries-progress-meta-${volId}`);
    localStorage.removeItem(`apothecary-diaries-progress-${volId}`);
    
    const readKey = "apothecary-diaries-read-chapters";
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
      } catch (e) {
        console.error(e);
      }
    }

    setProgressMap(prev => {
      const copy = { ...prev };
      delete copy[volId];
      return copy;
    });
  };

  const handleResetAll = () => {
    if (confirm("Are you sure you want to reset all reading progress for The Apothecary Diaries?")) {
      volumes.forEach(vol => {
        localStorage.removeItem(`apothecary-diaries-progress-meta-${vol.id}`);
        localStorage.removeItem(`apothecary-diaries-progress-${vol.id}`);
      });
      localStorage.removeItem("apothecary-diaries-read-chapters");
      setProgressMap({});
      setReadChapters({});
    }
  };

  const filteredVolumes = useMemo(() => {
    if (!searchQuery) return volumes;
    const lowerQuery = searchQuery.toLowerCase();
    return volumes.filter(
      vol =>
        vol.title.toLowerCase().includes(lowerQuery) ||
        vol.synopsis.toLowerCase().includes(lowerQuery) ||
        vol.volumeNumber.toLowerCase().includes(lowerQuery) ||
        vol.chapters.some(ch => ch.toLowerCase().includes(lowerQuery))
    );
  }, [volumes, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#0c0612] text-[#faeef5] overflow-y-auto relative flex flex-col items-center select-none">
      {/* Background Slideshow & Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
        <div className="absolute inset-0 bg-[#0c0612]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0612] via-[#0c0612]/40 to-transparent z-10" />
        <BackgroundSlideshow images={apothecaryBackgrounds} interval={9000} imageOpacity={0.8} />
      </div>

      {/* Cherry Blossom Petals Overlay */}
      <AnimatePresence>
        {petalsActive && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{ 
                  y: -50, 
                  x: `${petal.x}vw`, 
                  rotate: petal.rotation, 
                  opacity: 0 
                }}
                animate={{
                  y: "105vh",
                  x: [`${petal.x}vw`, `${petal.x + (Math.sin(petal.id) * 8)}vw`],
                  rotate: petal.rotation + 360,
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
                style={{
                  width: petal.size,
                  height: petal.size * 0.7,
                  background: "radial-gradient(circle, #fbcfe8 0%, #ec4899 70%, #db2777 100%)",
                  borderRadius: "50% 0% 50% 50%",
                  boxShadow: "0 0 6px rgba(236,72,153,0.3)"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <header className="sticky top-0 left-0 w-full z-50 p-6 bg-[#0c0612]/80 backdrop-blur-md flex items-center justify-between border-b border-pink-950/20">
        <div className="flex items-center">
          <Link href="/apothecary-diaries">
            <Button variant="ghost" size="icon" className="text-pink-300 hover:text-white hover:bg-pink-950/40 rounded-full transition-all cursor-pointer">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div className="ml-4 flex items-center gap-2">
            <Flower className="w-5 h-5 text-pink-400 animate-pulse" />
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-extralight tracking-[0.15em] uppercase text-zinc-100 truncate max-w-[200px] sm:max-w-none">
              The Apothecary <span className="text-pink-300 font-normal">Diaries</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setPetalsActive(!petalsActive)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-500/20 bg-zinc-950/60 text-xs font-serif text-pink-300 hover:text-pink-100 hover:border-pink-500/40 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            {petalsActive ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{petalsActive ? "Silence Petals" : "Show Petals"}</span>
          </button>
          
          <Button
            variant="destructive"
            onClick={handleResetAll}
            className="text-xs font-serif font-bold text-white bg-pink-700 hover:bg-pink-800 rounded-full px-4 h-9 border-none transition-all active:scale-95 shadow-md cursor-pointer"
          >
            Reset All
          </Button>
          <UserMenu
            onSignIn={() => setAuthModalOpen(true)}
            onProfile={() => setProfileModalOpen(true)}
          />
        </div>
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
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-2" />
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-pink-400/60" />
            <input
              type="text"
              placeholder="Search volumes, synopses, chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-pink-900/30 bg-black/40 text-white placeholder:text-pink-300/40 text-sm pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition-all shadow-[0_0_15px_rgba(236,72,153,0.02)] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
            />
          </div>
        </div>

        {/* View Mode: Compact (Grid) vs Detailed (List) */}
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
                  className="bg-black/50 border border-pink-900/20 hover:border-pink-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_250px] divide-y md:divide-y-0 md:divide-x divide-pink-950/20">
                    
                    {/* Left Pane - Info */}
                    <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest">Volume {vol.volumeNumber}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs text-zinc-400 font-mono">Released {vol.releaseDateEN}</span>
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-zinc-150 tracking-wide">{vol.title}</h3>
                        <p className="text-sm text-zinc-350 leading-relaxed font-sans font-light">{vol.synopsis}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-pink-300 border-t border-pink-950/40 pt-4">
                        <div className="flex items-center gap-1.5 bg-pink-950/20 px-3 py-1 rounded-full border border-pink-900/30">
                          <span className="font-bold">JP Date:</span>
                          <span className="text-zinc-300">{vol.releaseDateJP}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-pink-950/20 px-3 py-1 rounded-full border border-pink-900/30">
                          <span className="font-bold">Total Chapters:</span>
                          <span className="text-zinc-300">{vol.chapters.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Pane - Cover & Resume */}
                    <div className="flex flex-col items-center justify-center p-6 bg-pink-950/5">
                      <div
                        onClick={() => router.push(`/apothecary-diaries/select/${vol.id}`)}
                        className="hover-3d relative cursor-pointer w-full max-w-[140px]"
                      >
                        <div className="relative w-full aspect-[2/3] shadow-2xl rounded-lg border border-pink-950/40 overflow-hidden">
                          <Image
                            src={vol.coverImage}
                            alt={vol.title}
                            fill
                            className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                            sizes="140px"
                          />
                          {progressMap[vol.id] && (
                            <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                              <span className="text-[9px] font-mono font-bold text-pink-400">
                                {Math.round(progressMap[vol.id].percentage * 100)}%
                              </span>
                              <svg className="absolute w-8 h-8 transform -rotate-90 text-pink-500" viewBox="0 0 36 36">
                                <path
                                  className="text-zinc-800"
                                  strokeWidth="3.5"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  className="text-pink-500 transition-all duration-300"
                                  strokeDasharray={`${Math.round(progressMap[vol.id].percentage * 100)}, 100`}
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
                          onClick={() => router.push(`/apothecary-diaries/select/${vol.id}`)}
                          className="w-full bg-pink-900/40 hover:bg-pink-800/60 text-pink-200 border border-pink-850/30 font-serif font-bold text-xs tracking-wider cursor-pointer"
                        >
                          EXPAND CHAPTERS
                        </Button>
                        {progressMap[vol.id] && (
                          <Button
                            variant="destructive"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Reset progress for Volume ${vol.volumeNumber}?`)) {
                                handleResetVolume(vol.id);
                              }
                            }}
                            className="w-full bg-red-650 hover:bg-red-750 text-white border-none font-bold text-[10px] tracking-wider py-1.5 cursor-pointer rounded-xl transition-all shadow-md"
                          >
                            RESET PROGRESS
                          </Button>
                        )}
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
                  onClick={() => router.push(`/apothecary-diaries/select/${vol.id}`)}
                  className="flex flex-col gap-2.5 group cursor-pointer relative"
                >
                  <div className="hover-3d relative cursor-pointer w-full">
                    <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-pink-900/20">
                      <Image
                        src={vol.coverImage}
                        alt={vol.title}
                        fill
                        className="object-cover transition-transform duration-350 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 50vw, 180px"
                      />
                      {progressMap[vol.id] && (
                        <>
                          <div className="absolute top-2.5 left-2.5 bg-pink-950/90 backdrop-blur-sm px-2 py-0.5 rounded border border-pink-500/30 text-[9px] font-bold text-pink-300 z-20 pointer-events-none">
                            RESUME
                          </div>
                          <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                            <span className="text-[9px] font-mono font-bold text-pink-400">
                              {Math.round(progressMap[vol.id].percentage * 100)}%
                            </span>
                            <svg className="absolute w-8 h-8 transform -rotate-90 text-pink-500" viewBox="0 0 36 36">
                              <path
                                  className="text-zinc-800"
                                  strokeWidth="3.5"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                  className="text-pink-500 transition-all duration-300"
                                  strokeDasharray={`${Math.round(progressMap[vol.id].percentage * 100)}, 100`}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-3 pointer-events-none">
                        <span className="bg-pink-650/90 text-white text-[9px] font-bold font-mono tracking-widest px-2.5 py-0.5 rounded-full shadow-md">
                          EXPAND
                        </span>
                      </div>
                    </div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  </div>

                  <div className="text-center mt-1 px-1">
                    <div className="font-bold text-zinc-200 text-xs group-hover:text-pink-300 transition-colors truncate">
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
      </motion.div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </div>
  );
}
