"use client"

import { mushokuTenseiVolumes, mushokuTenseiSideStories, mushokuTenseiRedundancy } from "@/data/mushoku-tensei";
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
import { SupportAuthorCard } from "@/components/ui/SupportAuthorCard";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

export function VolumePageClient({ volumeId }: { volumeId: string }) {
    const allVols = [...mushokuTenseiVolumes, ...mushokuTenseiSideStories, ...mushokuTenseiRedundancy];
    const volume = allVols.find((v) => v.id === volumeId);

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
        const readKey = "mushoku-tensei-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch (e) {
                console.error(e);
            }
        }

        const volId = volume.id;
        const savedMeta = localStorage.getItem(`mushoku-tensei-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`mushoku-tensei-progress-${volId}`);
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
        localStorage.removeItem(`mushoku-tensei-progress-meta-${volId}`);
        localStorage.removeItem(`mushoku-tensei-progress-${volId}`);
        
        const readKey = "mushoku-tensei-read-chapters";
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
        const readKey = "mushoku-tensei-read-chapters";
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

    const handleDownloadCover = () => {
        if (!volume?.coverImage) return;
        const link = document.createElement('a');
        link.href = volume.coverImage;
        link.download = `Cover_Volume_${volume.volumeNumber}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

    const getContinueReadingUrl = () => {
        return `/mushoku-tensei/read/${volume.id}/${hasStarted ? getContinueChapterIndex() : 1}`;
    };

    return (
        <div className="min-h-screen w-full bg-[#020503] text-zinc-100 overflow-y-auto relative flex flex-col select-none theme-mushoku">
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-[#020503]/85 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-[#020503]/60 to-transparent z-10" />
                <BackgroundSlideshow
                    images={[
                        "/assets/images/mushoku-tensei/backgrounds/bg1.jpeg",
                        "/assets/images/mushoku-tensei/backgrounds/bg2.jpeg",
                        "/assets/images/mushoku-tensei/backgrounds/bg3.jpg",
                        "/assets/images/mushoku-tensei/backgrounds/bg4.jpg"
                    ]}
                    interval={7500}
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            <nav className="relative z-50 p-6 flex items-center justify-between border-b border-emerald-950/20 bg-gradient-to-b from-[#020503]/90 to-transparent backdrop-blur-md">
                <Link href="/mushoku-tensei/select">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-emerald-950/30 rounded-full transition-all gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Select
                    </Button>
                </Link>
                <h1 className="text-2xl font-serif font-bold text-white tracking-widest hidden sm:block">Dragon God Archive</h1>
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
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-emerald-400 font-mono uppercase tracking-wider">
                        <span>Volume {volume.volumeNumber}</span>
                        {volume.tag && (
                            <>
                                <span className="text-zinc-700">•</span>
                                <span>{volume.tag}</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6 lg:sticky lg:top-8"
                    >
                        <div className="relative aspect-[2/3] w-full max-w-[240px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-900/30 group">
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
                            {volume.inProgress ? (
                                <Button disabled className="w-full bg-zinc-900 text-zinc-500 border border-zinc-800 font-bold uppercase tracking-wider text-xs py-6 cursor-not-allowed rounded-full">
                                    IN PROGRESS
                                </Button>
                            ) : (
                                <Link href={getContinueReadingUrl()} className="w-full">
                                    <Button className="w-full bg-emerald-750 hover:bg-emerald-600 text-white font-bold font-serif py-6 tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-full">
                                        {hasStarted ? "CONTINUE READING" : "BEGIN READING"}
                                    </Button>
                                </Link>
                            )}
                            
                            {hasStarted && (
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        if (confirm(`Reset progress for ${volume.title}?`)) {
                                            handleResetVolume();
                                        }
                                    }}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white border-none text-xs py-5 rounded-full transition-all cursor-pointer shadow-md"
                                >
                                    Reset Progress
                                </Button>
                            )}
                            
                            <Button
                                variant="outline"
                                onClick={handleDownloadCover}
                                className="w-full border-emerald-950/30 hover:bg-emerald-950/20 text-zinc-400 hover:text-white text-xs py-5 rounded-full transition-all gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Save Cover Art
                            </Button>

                            {/* Reading progress details */}
                            {hasStarted && (
                                <div className="w-full bg-emerald-950/10 border border-emerald-900/20 rounded-2xl p-4 text-center mt-2">
                                    <div className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase mb-1">Last Read</div>
                                    <div className="text-xs text-zinc-200 font-medium truncate mb-1.5">
                                        {volume.chapters[savedChapterIndex] || "Continue"}
                                    </div>
                                    <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden mt-2">
                                        <div 
                                            className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                                            style={{ width: `${Math.max(5, Math.round(((savedChapterIndex + 1) / volume.chapters.length) * 100))}%` }} 
                                        />
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
                        <div className="hidden lg:block space-y-2 border-b border-emerald-950/20 pb-4">
                            <h2 className="text-4xl font-extrabold font-serif tracking-tight text-white">
                                {volume.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-emerald-400 font-mono uppercase tracking-wider pt-1">
                                <span>Volume {volume.volumeNumber}</span>
                                {volume.tag && (
                                    <>
                                        <span className="text-zinc-800">•</span>
                                        <span>{volume.tag}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Volume Synopsis</h3>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans bg-emerald-950/5 border border-emerald-950/10 p-5 rounded-2xl">
                                {volume.synopsis}
                            </p>
                        </div>

                        {/* Key Dates / Details */}
                        {volume.isbnJP && (
                            <div className="grid grid-cols-2 gap-4 text-xs bg-black/35 p-3 rounded-xl border border-emerald-950/20">
                                <div>
                                    <span className="text-zinc-550 font-bold block mb-1">JP Publication Date</span>
                                    <span className="text-zinc-300 font-serif">{volume.releaseDateJP}</span>
                                </div>
                                <div>
                                    <span className="text-zinc-550 font-bold block mb-1">EN Publication Date</span>
                                    <span className="text-zinc-300 font-serif">{volume.releaseDateEN}</span>
                                </div>
                                <div className="border-t border-emerald-950/20 pt-2">
                                    <span className="text-zinc-550 font-bold block mb-1">ISBN JP Identifier</span>
                                    <span className="text-zinc-450 font-mono">{volume.isbnJP}</span>
                                </div>
                                <div className="border-t border-emerald-950/20 pt-2">
                                    <span className="text-zinc-550 font-bold block mb-1">ISBN EN Identifier</span>
                                    <span className="text-zinc-455 font-mono">{volume.isbnEN}</span>
                                </div>
                            </div>
                        )}

                        <SupportAuthorCard 
                            novelSlug="mushoku-tensei" 
                            volumeId={volumeId} 
                            volumeTitle={volume.title} 
                            className="my-2"
                        />

                        {/* Search & Chapters List */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-b border-emerald-950/10 pb-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 self-start sm:self-center">
                                    Chapters List ({sortedChapters.length})
                                </h3>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <div className="relative flex-1 sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                        <Input
                                            placeholder="Search chapters..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-9 bg-black/40 border-emerald-950/40 text-zinc-200 focus:border-emerald-500/50 rounded-full"
                                        />
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                        className="border-emerald-950/40 hover:bg-emerald-950/20 text-zinc-400 hover:text-white rounded-full"
                                    >
                                        <ArrowUpDown className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {sortedChapters.map((chap) => {
                                    const originalIndex = volume.chapters.indexOf(chap);
                                    const isRead = readChapters[`${volume.id}-${originalIndex + 1}`];

                                    return (
                                        <div
                                            key={originalIndex}
                                            className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-zinc-950/30 hover:bg-emerald-950/10 hover:border-emerald-500/30 transition-all duration-300 w-full group ${isRead ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}
                                        >
                                            <Link
                                                href={`/mushoku-tensei/read/${volume.id}/${originalIndex + 1}`}
                                                className={`text-sm text-zinc-355 group-hover:text-emerald-400 transition-colors font-medium flex-1`}
                                            >
                                                {chap}
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
                                                                if (confirm(`Reset read status for chapter "${chap}"?`)) {
                                                                    handleResetChapter(originalIndex + 1);
                                                                }
                                                            }}
                                                            className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 hover:bg-red-700 transition-all duration-200 active:scale-95 cursor-pointer"
                                                        >
                                                            Reset
                                                        </button>
                                                    </div>
                                                )}
                                                <Link 
                                                    href={`/mushoku-tensei/read/${volume.id}/${originalIndex + 1}`} 
                                                    className="text-[10px] text-emerald-400 font-bold hover:underline"
                                                >
                                                    READ →
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}

                                {sortedChapters.length === 0 && (
                                    <div className="text-center py-12 text-zinc-550 border border-dashed border-emerald-950/20 rounded-2xl">
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
                    <a href={`/mushoku-tensei/read/${volume.id}/${getContinueChapterIndex()}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md">
                            <BookOpen className="mr-2 w-5 h-5 text-emerald-400 group-hover:text-emerald-300 shrink-0" />
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
