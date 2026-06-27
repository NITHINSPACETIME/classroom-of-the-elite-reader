"use client";

import { tbateVolumes, tbateSideStories } from "@/data/tbate";
import { ArrowLeft, BookOpen, Search, ArrowUpDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MarqueeText } from "@/components/MarqueeText";

import { useAuth } from "@/context/AuthContext";
import { UserMenu } from "@/components/auth/UserMenu";
import dynamic from "next/dynamic";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SupportAuthorCard } from "@/components/ui/SupportAuthorCard";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

export function VolumePageClient({ volumeId }: { volumeId: string }) {
    const allVols = [...tbateVolumes, ...tbateSideStories];
    const volume = allVols.find((v) => v.id === volumeId);

    if (!volume) {
        notFound();
    }

    useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [hasStarted, setHasStarted] = useState(false);
    const [savedChapterIndex, setSavedChapterIndex] = useState<number>(0);
    const [savedScrollPercentage, setSavedScrollPercentage] = useState<number>(0);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const readKey = "tbate-read-chapters";
        const readData = localStorage.getItem(readKey);
        const volId = volume.id;
        const savedMeta = localStorage.getItem(`tbate-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`tbate-progress-${volId}`);
        let chapIndex = 0;
        let scrollPct = 0;
        if (savedMeta) {
            try {
                const meta = JSON.parse(savedMeta);
                chapIndex = meta.chapterIndex || 0;
                scrollPct = meta.scrollPercentage || 0;
            } catch {}
        } else if (savedProgress) {
            chapIndex = parseInt(savedProgress) || 0;
        }

        setTimeout(() => {
            if (readData) {
                try {
                    setReadChapters(JSON.parse(readData));
                } catch (e) {
                    console.error(e);
                }
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
        }, 0);
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
                setReadChapters(readMap);
            } catch (e) {
                console.error(e);
            }
        }
        setHasStarted(false);
        setSavedChapterIndex(0);
        setSavedScrollPercentage(0);
    };

    const filteredChapters = volume.chapters
        .map((ch, idx) => ({ title: ch, originalIndex: idx }))
        .filter((ch) => ch.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const sortedChapters = sortOrder === "asc" 
        ? filteredChapters 
        : [...filteredChapters].reverse();

    const continueChapIdx = getContinueChapterIndex();

    return (
        <div className="min-h-screen bg-[#070503] text-[#fffbeb] flex flex-col relative overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 bg-[#070503]/55 z-0 pointer-events-none" />
            <BackgroundSlideshow images={[volume.coverImage]} imageOpacity={0.8} />

            <header className="sticky top-0 left-0 w-full z-50 p-6 bg-[#070503]/80 backdrop-blur-md flex items-center justify-between border-b border-amber-950/25">
                <div className="flex items-center">
                    <Link href="/tbate/select">
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

            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 relative flex flex-col md:flex-row gap-10 md:gap-16">
                {/* Left Column: Book Details / Cover */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-6 select-none shrink-0">
                    <Link href="/tbate/select" className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors text-xs font-semibold uppercase tracking-wider group mb-2">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Selection
                    </Link>

                    {/* Book Cover Container with Stacked Effect */}
                    <div className="relative w-[180px] sm:w-[220px] md:w-[260px] aspect-[2/3] group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-700 opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-700" />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={volume.coverImage}
                                alt={volume.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                            {volume.id === "v8.5" ? "Special Volume 8.5" : `Volume ${volume.volumeNumber}`}
                        </span>
                        <h2 className="text-2xl font-bold font-serif text-white tracking-wide leading-tight">
                            {volume.title}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-3 text-xs text-zinc-450 w-full border-t border-zinc-900 pt-5">
                        <div className="flex justify-between">
                          <span className="font-medium">Release Date:</span>
                          <span className="text-zinc-300 font-mono">{volume.releaseDateEN}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Total Chapters:</span>
                          <span className="text-zinc-300 font-mono">{volume.chapters.length}</span>
                        </div>
                    </div>

                    {/* CTA button */}
                    <div className="flex flex-col gap-3 w-full mt-4">
                        <Link href={`/tbate/read/${volume.id}/${continueChapIdx}`}>
                            <Button size="lg" className="w-full group rounded-xl bg-gradient-to-r from-amber-600 to-yellow-650 hover:from-amber-500 hover:to-yellow-505 text-white font-bold text-xs tracking-wider uppercase py-5 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all cursor-pointer border border-amber-400/25">
                                <span>{hasStarted ? "Continue Reading" : "Start Reading"}</span>
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        {hasStarted && (
                            <Button
                                onClick={handleResetVolume}
                                variant="outline"
                                className="w-full rounded-xl border-zinc-800 bg-zinc-950/20 hover:bg-red-950/20 hover:border-red-500/35 hover:text-red-400 text-zinc-500 text-[10px] tracking-widest uppercase font-bold py-5 cursor-pointer"
                            >
                                Reset Reading Progress
                            </Button>
                        )}

                        {/* Reading progress details */}
                        {hasStarted && (
                            <div className="w-full bg-amber-950/10 border border-amber-900/20 rounded-xl p-4 text-center mt-2">
                                <div className="flex justify-between items-center text-[10px] text-amber-400 font-bold tracking-wider uppercase mb-1 select-none">
                                    <span>Last Read</span>
                                    <span>{Math.round(((savedChapterIndex + 1) / volume.chapters.length) * 100)}%</span>
                                </div>
                                <div className="text-xs text-zinc-200 font-medium truncate mb-1.5">
                                    {volume.chapters[savedChapterIndex] || "Continue"}
                                </div>
                                <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden mt-2">
                                    <div 
                                        className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                                        style={{ width: `${Math.max(5, Math.round(((savedChapterIndex + 1) / volume.chapters.length) * 100))}%` }} 
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Synopsis & Chapters list */}
                <div className="flex-1 flex flex-col gap-8 min-w-0">
                    <div className="flex flex-col gap-3 bg-zinc-950/30 border border-zinc-900/60 p-5 rounded-2xl">
                        <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                            Synopsis
                        </h3>
                        <p className="text-sm text-zinc-450 font-sans leading-relaxed font-light">
                            {volume.synopsis}
                        </p>
                    </div>

                    <SupportAuthorCard 
                        novelSlug="tbate" 
                        volumeId={volumeId} 
                        volumeTitle={volume.title} 
                    />

                    <div className="flex flex-col gap-5">
                        {/* Chapters Header / Sort / Search */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4 select-none">
                            <h3 className="font-serif text-lg font-bold text-white tracking-wide flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-amber-400" />
                                Chapters
                            </h3>

                            <div className="flex items-center gap-3">
                                {/* Search */}
                                <div className="relative min-w-[160px]">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                                    <Input
                                        type="text"
                                        placeholder="Search chapter..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-8 bg-zinc-950/50 border-zinc-800 rounded-lg text-xs placeholder-zinc-500 h-8 focus-visible:ring-amber-500/40"
                                    />
                                </div>
                                
                                {/* Sort */}
                                <Button
                                    onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                                    variant="outline"
                                    size="icon"
                                    className="border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 hover:text-white w-8 h-8 rounded-lg cursor-pointer"
                                    title="Toggle Sort Order"
                                >
                                    <ArrowUpDown className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                        </div>

                        {/* Chapters list */}
                        <div className="flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-2 no-scrollbar">
                            {sortedChapters.map((ch) => {
                                const chapNum = ch.originalIndex + 1;
                                const isChapterRead = !!readChapters[`${volume.id}-${chapNum}`];
                                const isCurrent = hasStarted && savedChapterIndex === ch.originalIndex;

                                return (
                                    <Link
                                        key={ch.originalIndex}
                                        href={`/tbate/read/${volume.id}/${chapNum}`}
                                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-200 group ${
                                            isCurrent
                                                ? "bg-amber-950/20 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.04)]"
                                                : "bg-zinc-950/20 border-zinc-900/60 hover:bg-zinc-950/45 hover:border-amber-500/25"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span className="text-[10px] font-mono text-zinc-500 group-hover:text-amber-400/80 transition-colors w-6 text-right shrink-0 select-none">
                                                {chapNum.toString().padStart(2, "0")}
                                            </span>
                                            <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                                                {ch.title}
                                            </h4>
                                        </div>

                                        <div className="flex items-center gap-3 shrink-0 select-none">
                                            {isCurrent && (
                                                <span className="text-[9px] font-bold font-mono tracking-widest text-amber-400 bg-amber-950/50 border border-amber-800/45 px-2 py-0.5 rounded-full uppercase">
                                                    Current
                                                </span>
                                            )}
                                            {isChapterRead && (
                                                <span className="text-[9px] font-bold font-mono tracking-widest text-teal-400 bg-teal-950/40 border border-teal-800/40 px-2 py-0.5 rounded-full uppercase">
                                                    Read
                                                </span>
                                            )}
                                            <ArrowRight className="w-4 h-4 text-zinc-650 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </Link>
                                );
                            })}

                            {sortedChapters.length === 0 && (
                                <p className="text-sm text-zinc-500 text-center py-6 select-none font-light">
                                    No chapters found matching search query.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {hasStarted && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="fixed bottom-6 left-0 right-0 z-55 flex justify-center pointer-events-none"
                >
                    <a href={`/tbate/read/${volume.id}/${getContinueChapterIndex()}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-zinc-950/70 backdrop-blur-xl border border-amber-500/30 text-white font-medium shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:bg-zinc-900/80 hover:border-amber-500/50 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md">
                            <BookOpen className="mr-2 w-5 h-5 text-amber-400 group-hover:text-amber-350 shrink-0" />
                            <span className="flex flex-col items-start leading-none gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Continue Reading</span>
                                <MarqueeText 
                                    text={volume.chapters[getContinueChapterIndex() - 1] || `Chapter ${getContinueChapterIndex()}`}
                                    className="text-sm text-left font-medium text-white"
                                />
                            </span>
                            <ArrowRight className="ml-4 w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Button>
                    </a>
                </motion.div>
            )}

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div>
    );
}
