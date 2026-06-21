"use client"

import { rezeroVolumes } from "@/data/rezero";
import { ArrowLeft, BookOpen, Calendar, Search, ArrowUpDown, Download, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { MarqueeText } from "@/components/MarqueeText";

import { useAuth } from "@/context/AuthContext";
import { UserMenu } from "@/components/auth/UserMenu";
import dynamic from "next/dynamic";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

export function VolumePageClient({ volumeId }: { volumeId: string }) {
    const volume = rezeroVolumes.find((v) => v.id === volumeId);

    if (!volume) {
        notFound();
    }

    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [hasStarted, setHasStarted] = useState(false);
    const [savedChapterIndex, setSavedChapterIndex] = useState<number>(0);
    const [savedScrollPercentage, setSavedScrollPercentage] = useState<number>(0);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const readKey = "rezero-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch (e) {
                console.error(e);
            }
        }

        const volId = volume.id;
        const savedMeta = localStorage.getItem(`rezero-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`rezero-progress-${volId}`);
        let chapIndex = 0;
        let scrollPct = 0;
        if (savedMeta) {
            try {
                const meta = JSON.parse(savedMeta);
                chapIndex = meta.chapterIndex || 0;
                scrollPct = meta.scrollPercentage || 0;
            } catch (e) {}
        } else if (savedProgress) {
            chapIndex = parseInt(savedProgress) || 0;
        }

        if (chapIndex > 0) {
            setHasStarted(true);
            setSavedChapterIndex(chapIndex - 1);
            setSavedScrollPercentage(scrollPct);
        } else {
            setHasStarted(false);
            setSavedChapterIndex(0);
            setSavedScrollPercentage(0);
        }
    }, [volume]);

    const getContinueChapterIndex = () => {
        let idx = savedChapterIndex;
        if (hasStarted && savedScrollPercentage < 85) {
            return idx + 1;
        }
        while (idx < volume.chapters.length && readChapters[`${volume.id}-${idx + 1}`]) {
            idx++;
        }
        if (idx >= volume.chapters.length) {
            return volume.chapters.length;
        }
        return idx + 1;
    };

    const handleResetVolume = () => {
        const volId = volume.id;
        localStorage.removeItem(`rezero-progress-meta-${volId}`);
        localStorage.removeItem(`rezero-progress-${volId}`);
        
        const readKey = "rezero-read-chapters";
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

        setHasStarted(false);
        setSavedChapterIndex(0);
    };

    const handleResetChapter = (chapIndex: number) => {
        const volId = volume.id;
        const readKey = "rezero-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                const targetKey = `${volId}-${chapIndex}`;
                delete readMap[targetKey];
                localStorage.setItem(readKey, JSON.stringify(readMap));
                setReadChapters({ ...readMap });
            } catch (e) {
                console.error(e);
            }
        }
    };

    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);

    const handleDownloadCover = () => {
        if (!volume?.coverImage) return;
        const link = document.createElement('a');
        link.href = volume.coverImage;
        link.download = `Cover_Volume_${volume.volumeNumber}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(false);
    };

    const filteredChapters = volume.chapters.filter((chapter, index) => {
        const query = searchQuery.toLowerCase();
        const displayNum = (index + 1).toString();
        return (
            chapter.toLowerCase().includes(query) ||
            displayNum.includes(query)
        );
    });

    const sortedChapters = [...filteredChapters].sort((a, b) => {
        const indexA = volume.chapters.indexOf(a);
        const indexB = volume.chapters.indexOf(b);
        return sortOrder === "asc" ? indexA - indexB : indexB - indexA;
    });

    return (
        <div className="min-h-screen w-full bg-[#05030a] text-zinc-100 overflow-y-auto relative flex flex-col select-none theme-rezero">
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-[#05030a]/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-[#05030a]/60 to-transparent z-10" />
                <BackgroundSlideshow
                    images={["/assets/rezero_bg_1.png", "/assets/rezero_bg_2.png", "/assets/rezero_bg_3.png"]}
                    interval={7000}
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            <nav className="relative z-50 p-6 flex items-center justify-between border-b border-violet-950/20 bg-gradient-to-b from-[#05030a]/90 to-transparent backdrop-blur-md">
                <Link href="/rezero/select">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-violet-950/30 rounded-full transition-all gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Archive
                    </Button>
                </Link>
                <h1 className="text-2xl font-serif font-bold text-white tracking-widest hidden sm:block">Witch's Archive</h1>
                <UserMenu
                    onSignIn={() => setAuthModalOpen(true)}
                    onProfile={() => setProfileModalOpen(true)}
                />
            </nav>

            <main className="relative z-10 container mx-auto px-4 lg:px-8 pb-20 pt-6 max-w-5xl flex-1">
                <div className="lg:hidden mb-6 space-y-2">
                    <h2 className="text-3xl font-bold font-serif tracking-tight text-white/90">
                        {volume.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-violet-400 font-mono uppercase tracking-wider">
                        <span>Volume {volume.volumeNumber}</span>
                        <span className="text-zinc-700">•</span>
                        <span>Arc: {volume.arcId.replace('arc-', 'Arc ')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6 lg:sticky lg:top-8"
                    >
                        <div className="relative aspect-[2/3] w-full max-w-[240px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-violet-900/30 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={volume.coverImage}
                                alt={volume.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="absolute top-3 right-3 z-30">
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 text-white border border-violet-900/40 backdrop-blur-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setDownloadMenuOpen(!downloadMenuOpen);
                                    }}
                                >
                                    <Download className="h-5 w-5" />
                                </Button>
                                {downloadMenuOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-950/95 backdrop-blur-md border border-violet-900/30 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-2 gap-1 text-gray-200">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDownloadCover(); }}
                                            className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-violet-950/20 rounded-lg transition-all active:scale-95 cursor-pointer"
                                        >
                                            <ImageIcon className="h-4 w-4 text-violet-400" />
                                            <span className="flex-1">Save Cover</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a href={`/rezero/read/${volume.id}/${hasStarted ? getContinueChapterIndex() : 1}`} className="w-full">
                                <Button className="w-full h-12 text-sm bg-violet-750 hover:bg-violet-650 text-white font-bold font-serif tracking-widest uppercase shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all rounded-full">
                                    {hasStarted ? "Continue Reading" : "Begin Reading"}
                                </Button>
                            </a>
                            {hasStarted && (
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        if (confirm(`Are you sure you want to reset all reading progress for Volume ${volume.volumeNumber}?`)) {
                                            handleResetVolume();
                                        }
                                    }}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white border-none text-xs rounded-full py-5 shadow-md transition-all"
                                >
                                    Reset Progress
                                </Button>
                            )}
                            {hasStarted && (
                                <div className="w-full bg-violet-950/10 border border-violet-900/20 rounded-xl p-3 text-center">
                                    <div className="text-[10px] text-violet-400 font-bold tracking-wider uppercase mb-1">Last Read</div>
                                    <div className="text-xs text-zinc-200 font-medium truncate mb-1.5">
                                        {volume.chapters[savedChapterIndex] || `Chapter ${savedChapterIndex + 1}`}
                                    </div>
                                    <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden">
                                        <div 
                                            className="bg-violet-500 h-full rounded-full" 
                                            style={{ 
                                                width: `${Math.min(100, Math.max(0, ((savedChapterIndex + 1) / volume.chapters.length) * 100))}%` 
                                            }} 
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs bg-black/35 p-3 rounded-xl border border-violet-950/20">
                            <div>
                                <span className="text-zinc-500 font-bold block mb-1">JP Release</span>
                                <span className="text-zinc-300 font-serif">{volume.releaseDateJP}</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 font-bold block mb-1">EN Release</span>
                                <span className="text-zinc-300 font-serif">{volume.releaseDateEN}</span>
                            </div>
                            <div className="border-t border-violet-950/20 pt-2 col-span-2">
                                <span className="text-zinc-500 font-bold block mb-1">ISBN JP</span>
                                <span className="text-zinc-400 font-mono">{volume.isbnJP}</span>
                            </div>
                            <div className="border-t border-violet-950/20 pt-2 col-span-2">
                                <span className="text-zinc-500 font-bold block mb-1">ISBN EN</span>
                                <span className="text-zinc-400 font-mono">{volume.isbnEN}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="hidden lg:block space-y-2 border-b border-violet-900/20 pb-6">
                            <h2 className="text-4xl font-bold font-serif tracking-tight text-white/90">
                                {volume.title}
                            </h2>
                            <div className="flex flex-wrap gap-2 text-xs text-violet-400 font-mono uppercase tracking-wider">
                                <span>Volume {volume.volumeNumber}</span>
                                <span className="text-zinc-700">•</span>
                                <span>Arc: {volume.arcId.replace('arc-', 'Arc ')}</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest text-violet-400 mb-1.5">Volume Synopsis</h4>
                            <p className="text-sm text-zinc-300 leading-relaxed font-serif bg-violet-950/10 border border-violet-950/30 p-4 rounded-xl">
                                {volume.synopsis}
                            </p>
                        </div>

                        <div>
                            <div className="mb-4 flex gap-4">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Search className="w-4 h-4 text-zinc-500" />
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Search chapters..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 bg-black/40 border-violet-950/30 focus:border-violet-650 text-white placeholder:text-zinc-500 h-11 rounded-full"
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                                    className="h-11 px-4 bg-black/40 border-violet-950/30 text-zinc-300 hover:text-white rounded-full"
                                >
                                    <ArrowUpDown className="w-4 h-4 mr-2" />
                                    {sortOrder === "asc" ? "Ascending" : "Descending"}
                                </Button>
                            </div>

                            <div className="grid gap-2">
                                {sortedChapters.length > 0 ? (
                                    sortedChapters.map((chapter) => {
                                        const originalIndex = volume.chapters.indexOf(chapter);
                                        const isRead = readChapters[`${volume.id}-${originalIndex + 1}`];
                                        const isCurrent = hasStarted && originalIndex === savedChapterIndex;

                                        return (
                                            <motion.div
                                                key={chapter}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + (originalIndex * 0.03) }}
                                            >
                                                <div className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 gap-3 ${
                                                    isCurrent 
                                                        ? 'bg-violet-950/20 border-violet-800/40 shadow-[0_0_15px_rgba(139,92,246,0.1)]' 
                                                        : 'bg-black/40 border-violet-950/20 hover:border-violet-650/40 hover:bg-violet-950/10'
                                                } ${isRead && !isCurrent ? 'opacity-60 hover:opacity-100' : ''}`}>
                                                    <Link href={`/rezero/read/${volume.id}/${originalIndex + 1}`} className="flex items-start gap-3 flex-1">
                                                        <span className={`shrink-0 text-xs font-mono px-2 py-1 rounded mt-0.5 ${
                                                            isCurrent ? 'text-violet-300 bg-violet-900/40' : 'text-zinc-500 bg-black/40'
                                                        }`}>
                                                            {originalIndex + 1}
                                                        </span>
                                                        <span className={`text-sm md:text-base transition-colors font-medium leading-tight font-serif ${
                                                            isCurrent ? 'text-violet-300' : 'text-zinc-300 group-hover:text-white'
                                                        }`}>
                                                            {chapter}
                                                            {isCurrent && <span className="ml-2 text-xs text-violet-400 font-normal animate-pulse">(Current)</span>}
                                                        </span>
                                                    </Link>
                                                    <div className="flex items-center gap-3 shrink-0">
                                                        {isRead && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1">
                                                                    ✓ Read
                                                                </span>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        if (confirm(`Reset reading progress for ${chapter}?`)) {
                                                                            handleResetChapter(originalIndex + 1);
                                                                        }
                                                                    }}
                                                                    className="text-[10px] bg-red-600 hover:bg-red-700 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 transition-all duration-200 active:scale-95 cursor-pointer"
                                                                >
                                                                    Reset
                                                                </button>
                                                            </div>
                                                        )}
                                                        <Link href={`/rezero/read/${volume.id}/${originalIndex + 1}`}>
                                                            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                ) : (
                                    <div className="text-center text-zinc-500 py-10 font-serif">
                                        No chapters found matching "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {hasStarted && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
                >
                    <a href={`/rezero/read/${volume.id}/${getContinueChapterIndex()}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md">
                            <BookOpen className="mr-2 w-5 h-5 text-violet-400 group-hover:text-violet-300 shrink-0" />
                            <span className="flex flex-col items-start leading-none gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Continue Reading</span>
                                <MarqueeText 
                                    text={volume.chapters[getContinueChapterIndex() - 1] || `Chapter ${getContinueChapterIndex()}`}
                                    className="text-sm text-left font-medium text-white"
                                />
                            </span>
                            <ArrowRight className="ml-4 w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Button>
                    </a>
                </motion.div>
            )}

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div>
    );
}
