"use client"

import { orvVolumes } from "@/data/orv";
import { ArrowLeft, BookOpen, Calendar, Search, ArrowUpDown, Download, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useMemo } from "react";
import { MarqueeText } from "@/components/MarqueeText";

import { useAuth } from "@/context/AuthContext";
import { UserMenu } from "@/components/auth/UserMenu";
import dynamic from "next/dynamic";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SupportAuthorCard } from "@/components/ui/SupportAuthorCard";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface VolumePageClientProps {
    volumeId: string;
    summary: {
        mainChapters: { id: string; title: string; index: number }[];
        contChapters: { id: string; title: string; index: number }[];
        sideChapters: { id: string; title: string; index: number }[];
    };
}

export function VolumePageClient({ volumeId, summary }: VolumePageClientProps) {
    const volume = orvVolumes.find((v) => v.id === volumeId);

    if (!volume) {
        notFound();
    }

    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [hasStarted, setHasStarted] = useState(false);
    const [savedChapterIndex, setSavedChapterIndex] = useState<number>(volume.startChapter);
    const [savedScrollPercentage, setSavedScrollPercentage] = useState<number>(0);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

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

    const volumeChapters = useMemo(() => {
        return allChapters.filter(ch => ch.volId === volume.id);
    }, [allChapters, volume.id]);

    useEffect(() => {
        const readKey = "orv-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch (e) {
                console.error(e);
            }
        }

        const volId = volume.id;
        const savedMeta = localStorage.getItem(`orv-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`orv-progress-${volId}`);
        let scrollPct = 0;
        
        if (savedMeta) {
            try {
                const meta = JSON.parse(savedMeta);
                setHasStarted(true);
                setSavedChapterIndex(meta.chapterId || meta.chapterIndex);
                scrollPct = meta.scrollPercentage || 0;
            } catch (e) {}
        } else if (savedProgress) {
            setHasStarted(true);
            setSavedChapterIndex(parseInt(savedProgress) || volume.startChapter);
        } else {
            setHasStarted(false);
            setSavedChapterIndex(volume.startChapter);
        }
        setSavedScrollPercentage(scrollPct);
    }, [volume]);

    const handleResetVolume = () => {
        const volId = volume.id;
        localStorage.removeItem(`orv-progress-meta-${volId}`);
        localStorage.removeItem(`orv-progress-${volId}`);
        
        const readKey = "orv-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                // For ORV, read status keys are structured as `${ch.volId}-${chapterIndex}`
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
        setSavedChapterIndex(volume.startChapter);
    };

    const handleResetChapter = (chapterIndex: number) => {
        const volId = volume.id;
        const readKey = "orv-read-chapters";
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

    const handleDownloadCover = () => {
        if (!volume?.coverImage) return;
        const link = document.createElement('a');
        link.href = volume.coverImage;
        link.download = `Cover_Volume_${volume.volumeNumber}.webp`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredChapters = volumeChapters.filter((ch) => {
        const query = searchQuery.toLowerCase();
        return (
            ch.title.toLowerCase().includes(query) ||
            ch.id.toLowerCase().includes(query)
        );
    });

    const sortedChapters = [...filteredChapters].sort((a, b) => {
        const indexA = volumeChapters.indexOf(a);
        const indexB = volumeChapters.indexOf(b);
        return sortOrder === "asc" ? indexA - indexB : indexB - indexA;
    });

    const progressPercentage = useMemo(() => {
        if (volumeChapters.length === 0) return 0;
        let readCount = 0;
        volumeChapters.forEach((ch) => {
            const chapterIndex = allChapters.findIndex(item => item.id === ch.id) + 1;
            if (readChapters[`${ch.volId}-${chapterIndex}`]) {
                readCount++;
            }
        });
        return Math.round((readCount / volumeChapters.length) * 100);
    }, [volumeChapters, readChapters, allChapters]);

    const continueChapterId = useMemo(() => {
        if (hasStarted) {
            let idx = allChapters.findIndex(item => item.id === String(savedChapterIndex));
            if (idx === -1) {
                idx = allChapters.findIndex(item => item.num === savedChapterIndex);
            }
            if (idx === -1) idx = 0;

            if (savedScrollPercentage < 85) {
                return allChapters[idx]?.id || String(savedChapterIndex);
            }

            while (idx < allChapters.length) {
                const ch = allChapters[idx];
                const globalIndex = idx + 1;
                if (ch.volId === volume.id && !readChapters[`${ch.volId}-${globalIndex}`]) {
                    return ch.id;
                }
                idx++;
            }
            
            const lastCh = volumeChapters[volumeChapters.length - 1];
            if (lastCh) return lastCh.id;

            return allChapters[savedChapterIndex - 1]?.id || String(savedChapterIndex);
        }
        return volumeChapters[0]?.id || String(volume.startChapter);
    }, [hasStarted, savedChapterIndex, allChapters, volumeChapters, volume.startChapter, volume.id, readChapters, savedScrollPercentage]);

    return (
        <div className="min-h-screen w-full bg-[#03060a] text-zinc-100 overflow-y-auto relative flex flex-col select-none theme-orv">
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-[#03060a]/85 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03060a] via-[#03060a]/60 to-transparent z-10" />
                <BackgroundSlideshow
                    images={["/assets/orv/8419309.jpg", "/assets/orv/9397294.jpg"]}
                    interval={8000}
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            <nav className="relative z-50 p-6 flex items-center justify-between border-b border-cyan-950/20 bg-gradient-to-b from-[#03060a]/90 to-transparent backdrop-blur-md">
                <Link href="/orv/select">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-cyan-950/30 rounded-full transition-all gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Select
                    </Button>
                </Link>
                <h1 className="text-2xl font-serif font-bold text-white tracking-widest hidden sm:block">Scenarios Archive</h1>
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
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
                        <span>Volume {volume.volumeNumber}</span>
                        <span className="text-zinc-700">•</span>
                        <span>{volume.partName}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6 lg:sticky lg:top-8"
                    >
                        <div className="relative aspect-[2/3] w-full max-w-[240px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] border border-cyan-900/30 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={volume.coverImage}
                                alt={volume.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex flex-col gap-3">
                            <Link href={`/orv/read?c=${continueChapterId}`} className="w-full">
                                <Button className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold font-serif py-6 tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)] rounded-full">
                                    {hasStarted ? "CONTINUE READING" : "BEGIN READING"}
                                </Button>
                            </Link>
                            
                            {hasStarted && (
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        if (confirm(`Reset progress for ${volume.title}?`)) {
                                            handleResetVolume();
                                        }
                                    }}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white border-none text-xs py-5 rounded-full transition-all shadow-md"
                                >
                                    Reset Progress
                                </Button>
                            )}
                            
                            <Button
                                variant="outline"
                                onClick={handleDownloadCover}
                                className="w-full border-cyan-950/30 hover:bg-cyan-950/20 text-zinc-400 hover:text-white text-xs py-5 rounded-full transition-all gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Save Cover Art
                            </Button>

                            {/* Circle/Arc Reading progress details */}
                            {progressPercentage > 0 && (
                                <div className="w-full bg-cyan-950/10 border border-cyan-900/20 rounded-2xl p-4 text-center mt-2">
                                    <div className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase mb-1">Volume Progress</div>
                                    <div className="text-lg font-bold text-zinc-100 font-mono">{progressPercentage}%</div>
                                    <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden mt-2">
                                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="hidden lg:block space-y-2 border-b border-cyan-950/20 pb-4">
                            <h2 className="text-4xl font-extrabold font-serif tracking-tight text-white">
                                {volume.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-cyan-400 font-mono uppercase tracking-wider pt-1">
                                <span>Volume {volume.volumeNumber}</span>
                                <span className="text-zinc-800">•</span>
                                <span>{volume.partName}</span>
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Volume Synopsis</h3>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans bg-cyan-950/5 border border-cyan-950/10 p-5 rounded-2xl">
                                {volume.synopsis}
                            </p>
                        </div>

                        {/* Key Dates / Details */}
                        <div className="grid grid-cols-2 gap-6 text-xs bg-black/25 p-4 rounded-2xl border border-cyan-950/20 max-w-md">
                            <div>
                                <span className="text-zinc-550 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">Chapters Range</span>
                                <span className="text-zinc-200 font-serif text-sm">{volume.chaptersRange}</span>
                            </div>
                            <div>
                                <span className="text-zinc-550 font-bold block mb-1 uppercase tracking-wider text-[9px] font-mono">Release Date</span>
                                <span className="text-zinc-200 font-serif text-sm">{volume.releaseDate}</span>
                            </div>
                        </div>

                        <SupportAuthorCard 
                            novelSlug="orv" 
                            volumeId={volumeId} 
                            volumeTitle={volume.title} 
                            className="my-2"
                        />

                        {/* Search & Chapters List */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-b border-cyan-950/10 pb-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 self-start sm:self-center">
                                    Chapters List ({sortedChapters.length})
                                </h3>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <div className="relative flex-1 sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                        <Input
                                            placeholder="Search chapters..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-9 bg-black/40 border-cyan-950/40 text-zinc-200 focus:border-cyan-500/50 rounded-full"
                                        />
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                        className="border-cyan-950/40 hover:bg-cyan-950/20 text-zinc-400 hover:text-white rounded-full"
                                    >
                                        <ArrowUpDown className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {sortedChapters.map((ch) => {
                                    const isSideStory = volume.id === "orv-side";
                                    const chapterIndex = allChapters.findIndex(item => item.id === ch.id) + 1;
                                    const isRead = readChapters[`${ch.volId}-${chapterIndex}`];

                                    return (
                                        <div
                                            key={ch.id}
                                            className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-zinc-950/30 hover:bg-cyan-950/10 hover:border-cyan-500/30 transition-all duration-300 w-full group ${isRead ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}
                                        >
                                            <Link
                                                href={`/orv/read?c=${ch.id}`}
                                                className={`text-sm text-zinc-300 group-hover:text-cyan-400 transition-colors font-medium flex-1`}
                                            >
                                                {ch.title}
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
                                                                if (confirm(`Reset reading progress for ${ch.title}?`)) {
                                                                    handleResetChapter(chapterIndex);
                                                                }
                                                            }}
                                                            className="text-[10px] bg-red-600 hover:bg-red-700 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 transition-all duration-200 active:scale-95 cursor-pointer"
                                                        >
                                                            Reset
                                                        </button>
                                                    </div>
                                                )}
                                                <Link href={`/orv/read?c=${ch.id}`} className="text-[10px] text-cyan-400 font-bold hover:underline">
                                                    READ →
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}

                                {sortedChapters.length === 0 && (
                                    <div className="text-center py-12 text-zinc-550 border border-dashed border-cyan-950/20 rounded-2xl">
                                        No chapters found matching &quot;{searchQuery}&quot;
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
                    <Link href={`/orv/read?c=${continueChapterId}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md">
                            <BookOpen className="mr-2 w-5 h-5 text-cyan-400 group-hover:text-cyan-300 shrink-0" />
                            <span className="flex flex-col items-start leading-none gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Continue Reading</span>
                                <MarqueeText 
                                    text={continueChapterId.startsWith('side-') 
                                        ? `Side Story ${continueChapterId.replace('side-', '')}` 
                                        : `Chapter ${continueChapterId}`}
                                    className="text-sm text-left font-medium text-white"
                                />
                            </span>
                            <ArrowRight className="ml-4 w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Button>
                    </Link>
                </motion.div>
            )}

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div>
    );
}
