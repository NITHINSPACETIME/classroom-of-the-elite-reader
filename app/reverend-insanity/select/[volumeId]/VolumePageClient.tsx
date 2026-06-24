"use client"

import { reverendInsanityVolumes } from "@/data/reverend-insanity";
import { ArrowLeft, BookOpen, Search, ArrowUpDown, ArrowRight, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useMemo } from "react";
import { MarqueeText } from "@/components/MarqueeText";
import { UserMenu } from "@/components/auth/UserMenu";
import dynamic from "next/dynamic";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

const backgroundImages = [
    "/assets/images/reverend-insanity/bg_1.jpg",
    "/assets/images/reverend-insanity/bg_2.jpg",
    "/assets/images/reverend-insanity/bg_3.jpg"
];

interface VolumePageClientProps {
    volumeId: string;
}

export function VolumePageClient({ volumeId }: VolumePageClientProps) {
    const volume = reverendInsanityVolumes.find((v) => v.id === volumeId);

    if (!volume) {
        notFound();
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [hasStarted, setHasStarted] = useState(false);
    const [savedChapterIndex, setSavedChapterIndex] = useState<number>(1);
    const [savedScrollPercentage, setSavedScrollPercentage] = useState<number>(0);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});
    const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");

    const volumeChapters = useMemo(() => {
        return volume.chapters.map((title, idx) => {
            const chIndex = idx + 1; // relative to volume, 1-indexed
            return {
                id: `${volume.id}-${chIndex}`,
                index: chIndex,
                title: title,
                volId: volume.id,
            };
        });
    }, [volume]);

    useEffect(() => {
        const readKey = "reverend-insanity-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch (e) {
                console.error(e);
            }
        }

        const volId = volume.id;
        const savedMeta = localStorage.getItem(`reverend-insanity-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`reverend-insanity-progress-${volId}`);
        let scrollPct = 0;
        
        if (savedMeta) {
            try {
                const meta = JSON.parse(savedMeta);
                setHasStarted(true);
                setSavedChapterIndex(meta.chapterIndex || 1);
                scrollPct = meta.scrollPercentage || 0;
            } catch {
                // Ignore parsing errors
            }
        } else if (savedProgress) {
            setHasStarted(true);
            setSavedChapterIndex(parseInt(savedProgress) || 1);
        } else {
            setHasStarted(false);
            setSavedChapterIndex(1);
        }
        setSavedScrollPercentage(scrollPct);
    }, [volume]);

    const handleResetVolume = () => {
        const volId = volume.id;
        localStorage.removeItem(`reverend-insanity-progress-meta-${volId}`);
        localStorage.removeItem(`reverend-insanity-progress-${volId}`);
        
        const readKey = "reverend-insanity-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                const updated = Object.keys(readMap).reduce((acc, key) => {
                    if (!key.startsWith(`${volId}-`)) {
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
        setSavedChapterIndex(1);
        setSavedScrollPercentage(0);
    };

    const handleResetChapter = (chapterIndex: number) => {
        const volId = volume.id;
        const readKey = "reverend-insanity-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                const targetKey = `${volId}-${chapterIndex}`;
                delete readMap[targetKey];
                localStorage.setItem(readKey, JSON.stringify(readMap));
                setReadChapters({ ...readMap });
            } catch (e) {
                console.error(e);
            }
        }
    };

    const trackedChapters = useMemo(() => {
        return volumeChapters.filter((ch) => {
            const query = searchQuery.toLowerCase();
            const globalChNum = (volume.startChapter + ch.index - 1).toString();
            return (
                ch.title.toLowerCase().includes(query) ||
                ch.index.toString().includes(query) ||
                globalChNum.includes(query)
            );
        });
    }, [volumeChapters, searchQuery, volume.startChapter]);

    const sortedChapters = useMemo(() => {
        return [...trackedChapters].sort((a, b) => {
            return sortOrder === "asc" ? a.index - b.index : b.index - a.index;
        });
    }, [trackedChapters, sortOrder]);

    const progressPercentage = useMemo(() => {
        if (volumeChapters.length === 0) return 0;
        let readCount = 0;
        volumeChapters.forEach((ch) => {
            if (readChapters[`${volume.id}-${ch.index}`]) {
                readCount++;
            }
        });
        return Math.round((readCount / volumeChapters.length) * 100);
    }, [volumeChapters, readChapters, volume.id]);

    const continueChapterIndex = useMemo(() => {
        if (hasStarted) {
            if (savedScrollPercentage < 85) {
                return savedChapterIndex;
            }
            const nextIdx = savedChapterIndex + 1;
            return Math.min(volume.chapters.length, nextIdx);
        }
        return 1;
    }, [hasStarted, savedChapterIndex, savedScrollPercentage, volume.chapters.length]);

    return (
        <div className="min-h-screen w-full bg-[#020204] text-zinc-100 overflow-y-auto relative flex flex-col select-none theme-reverend-insanity">
            {/* Background Slideshow */}
            <BackgroundSlideshow
                images={backgroundImages}
                interval={8000}
                imageOpacity={0.65}
            />
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px] z-0 pointer-events-none" />
            
            <div className="absolute inset-0 opacity-[0.02] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            <nav className="relative z-50 p-6 flex items-center justify-between border-b border-red-950/20 bg-gradient-to-b from-[#020204]/95 to-transparent backdrop-blur-md">
                <Link href="/reverend-insanity/select">
                    <Button variant="ghost" className="text-zinc-400 hover:text-red-500 hover:bg-red-950/20 rounded-full transition-all gap-2 cursor-pointer">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Selection
                    </Button>
                </Link>
                <h1 className="text-2xl font-serif font-bold text-white tracking-widest hidden sm:block uppercase font-normal">Reverend Insanity</h1>
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
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-red-500 font-mono uppercase tracking-wider font-semibold">
                        <span>Book {volume.volumeNumber}</span>
                        <span className="text-zinc-700">•</span>
                        <span>{volume.chaptersRange}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
                    {/* Left Column: Cover & Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-6 lg:sticky lg:top-8"
                    >
                        {/* Gothic Border Container around Cover */}
                        <div className="relative aspect-[2/3] w-full max-w-[220px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.1)] border border-red-950/40 group p-2 bg-black/40">
                            {/* Decorative Gothic Corners */}
                            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-red-600/50 z-20 pointer-events-none" />
                            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-red-660/50 z-20 pointer-events-none" />
                            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-red-660/50 z-20 pointer-events-none" />
                            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-red-660/50 z-20 pointer-events-none" />
                            
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                {/* Volume Number Badge */}
                                <div className="absolute top-3 left-3 bg-red-650/90 text-white font-serif font-black text-sm w-8 h-8 rounded-full flex items-center justify-center border border-red-500/40 shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-20 group-hover:scale-110 transition-all duration-300 select-none">
                                    {volume.volumeNumber}
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={volume.coverImage}
                                    alt={volume.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-red-500/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex flex-col gap-3">
                            <Link href={`/reverend-insanity/read/${volume.id}/${continueChapterIndex}`} className="w-full">
                                <Button className="w-full bg-red-650 hover:bg-red-600 text-white font-bold font-mono py-6 tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] rounded-xl transition-all cursor-pointer">
                                    {hasStarted ? "CONTINUE READING" : "BEGIN READING"}
                                </Button>
                            </Link>
                            
                            {hasStarted && (
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        if (confirm(`Reset reading progress for Book ${volume.volumeNumber}?`)) {
                                            handleResetVolume();
                                        }
                                    }}
                                    className="w-full bg-red-950/20 hover:bg-red-950/40 text-red-500 border border-red-900/30 text-xs py-5 rounded-xl transition-all shadow-md cursor-pointer"
                                >
                                    Reset Volume Progress
                                </Button>
                            )}

                            {/* Reading progress details */}
                            {progressPercentage > 0 && (
                                <div className="w-full bg-red-950/10 border border-red-950/30 rounded-2xl p-4 text-center mt-2">
                                    <div className="text-[10px] text-red-500 font-bold tracking-wider uppercase mb-1 font-mono">Volume Progress</div>
                                    <div className="text-lg font-bold text-zinc-100 font-mono">{progressPercentage}%</div>
                                    <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden mt-2 border border-red-950/25">
                                        <div className="bg-red-600 h-full rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Title, Synopsis, and Chapters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="hidden lg:block space-y-2 border-b border-red-950/20 pb-4">
                            <h2 className="text-4xl font-bold font-serif tracking-tight text-white uppercase">
                                {volume.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-red-500 font-mono uppercase tracking-wider pt-1 font-semibold">
                                <span>Book {volume.volumeNumber}</span>
                                <span className="text-zinc-800">•</span>
                                <span>{volume.chaptersRange}</span>
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3 font-mono">Synopsis</h3>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans bg-red-950/5 border border-red-950/20 p-5 rounded-2xl">
                                {volume.synopsis}
                            </p>
                        </div>

                        {/* Stats Info */}
                        <div className="grid grid-cols-2 gap-6 text-xs bg-black/20 p-4 rounded-2xl border border-red-950/20 max-w-md font-sans">
                            <div>
                                <span className="text-zinc-500 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">Chapters Count</span>
                                <span className="text-zinc-200 text-sm">{volume.chapters.length} Chapters</span>
                            </div>
                            <div>
                                <span className="text-zinc-550 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">Translation Chronology</span>
                                <span className="text-zinc-200 text-sm">{volume.releaseDateJP}</span>
                            </div>
                        </div>

                        {/* Search & Chapters List */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-b border-red-950/20 pb-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 self-start sm:self-center font-mono">
                                    Chapters List ({sortedChapters.length})
                                </h3>
                                <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto items-center justify-end">
                                    <div className="relative w-full sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-550" />
                                        <Input
                                            placeholder="Search title or number..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-9 bg-black/40 border-red-950/40 text-zinc-200 focus:border-red-550/40 rounded-xl focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                            className="border-red-950/40 hover:bg-red-950/20 text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                                            title="Toggle sort order"
                                        >
                                            <ArrowUpDown className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setViewMode(viewMode === "detailed" ? "compact" : "detailed")}
                                            className="border-red-950/40 hover:bg-red-950/20 text-zinc-400 hover:text-white rounded-xl cursor-pointer"
                                            title={viewMode === "detailed" ? "Compact view" : "Detailed view"}
                                        >
                                            {viewMode === "detailed" ? <LayoutGrid className="w-4 h-4" /> : <List className="w-4 h-4" />}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {viewMode === "compact" ? (
                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {sortedChapters.map((ch) => {
                                        const globalIndex = volume.startChapter + ch.index - 1;
                                        return (
                                            <Link
                                                key={ch.id}
                                                href={`/reverend-insanity/read/${volume.id}/${ch.index}`}
                                                className="flex flex-col items-center justify-center p-3 transition-all text-center select-none active:scale-95 group shadow-sm rounded-lg border border-red-950/20 bg-black/40 hover:bg-red-950/10 hover:border-red-500/30"
                                            >
                                                <span className="font-mono text-sm font-bold text-zinc-300 group-hover:text-red-500 transition-colors">
                                                    {globalIndex}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                    {sortedChapters.length === 0 && (
                                        <div className="col-span-full text-center py-12 text-zinc-550 border border-dashed border-red-950/20 rounded-2xl font-mono text-sm">
                                            No chapters match &quot;{searchQuery}&quot;
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {sortedChapters.map((ch) => {
                                        const isRead = readChapters[`${ch.volId}-${ch.index}`];
                                        const globalIndex = volume.startChapter + ch.index - 1;

                                        return (
                                            <Link
                                                key={ch.id}
                                                href={`/reverend-insanity/read/${volume.id}/${ch.index}`}
                                                className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-zinc-950/25 hover:bg-red-950/10 hover:border-red-600/30 transition-all duration-300 w-full group cursor-pointer ${isRead ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}
                                            >
                                                <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
                                                    <span className="font-mono text-xs text-red-500 font-bold shrink-0">
                                                        #{globalIndex}
                                                    </span>
                                                    <span className="text-sm text-zinc-300 group-hover:text-red-500 transition-colors font-medium truncate">
                                                        {ch.title}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3 shrink-0">
                                                    {isRead && (
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1">
                                                                ✓ Read
                                                            </span>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    if (confirm(`Reset reading progress for Chapter ${globalIndex}?`)) {
                                                                        handleResetChapter(ch.index);
                                                                    }
                                                                }}
                                                                className="text-[10px] bg-red-600 hover:bg-red-700 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 transition-all duration-200 active:scale-95 cursor-pointer"
                                                            >
                                                                Reset
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}

                                    {sortedChapters.length === 0 && (
                                        <div className="text-center py-12 text-zinc-550 border border-dashed border-red-950/20 rounded-2xl font-mono text-sm">
                                            No chapters match &quot;{searchQuery}&quot;
                                        </div>
                                    )}
                                </div>
                            )}
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
                    <Link href={`/reverend-insanity/read/${volume.id}/${continueChapterIndex}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-red-950/30 backdrop-blur-xl border border-red-950/40 text-white font-medium shadow-[0_8px_32px_rgba(185,28,28,0.25)] hover:bg-red-950/55 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md cursor-pointer">
                            <BookOpen className="mr-2 w-5 h-5 text-red-500 group-hover:text-red-400 shrink-0" />
                            <span className="flex flex-col items-start leading-none gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-red-500 uppercase tracking-widest font-mono font-bold">Continue Reading</span>
                                <MarqueeText 
                                    text={volume.chapters[continueChapterIndex - 1] || `Chapter ${continueChapterIndex}`}
                                    className="text-xs text-left font-serif font-bold text-white truncate max-w-[180px]"
                                />
                            </span>
                            <ArrowRight className="ml-4 w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Button>
                    </Link>
                </motion.div>
            )}

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div>
    );
}
