"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { chapterMappings } from '@/lib/chapter-mappings'

const getLogicalChapterNumber = (novelSlug: string, volumeId: string, chapterIndex: number): number => {
    if (novelSlug === 'cote') {
        const mapping = chapterMappings[volumeId];
        const logicalIndex = mapping ? mapping.indexOf(chapterIndex) : -1;
        return logicalIndex >= 0 ? logicalIndex + 1 : chapterIndex;
    }
    if (novelSlug === 'reverend-insanity') {
        const startChapters: Record<string, number> = {
            ri1: 1,
            ri2: 200,
            ri3: 406,
            ri4: 650,
            ri5: 1022,
            ri6: 1967
        };
        const start = startChapters[volumeId] || 1;
        return start + chapterIndex - 1;
    }
    return chapterIndex;
};

// Import all volumes data for universal mapping
import { volumes as y1v, shortStories as y1s } from "@/data/year1"
import { volumes as y2v, shortStories as y2s } from "@/data/year2"
import { volumes as y3v, shortStories as y3s } from "@/data/year3"
import { lotmVolumes, lotmSideStories, coiVolumes } from "@/data/lotm"
import { rezeroVolumes } from "@/data/rezero"
import { bunnyGirlVolumes, bunnyGirlSideStories } from "@/data/bunny-girl"
import { mushokuTenseiVolumes, mushokuTenseiSideStories, mushokuTenseiRedundancy } from "@/data/mushoku-tensei"
import { orvVolumes } from "@/data/orv"
import { reverendInsanityVolumes } from "@/data/reverend-insanity"
import { apothecaryDiariesVolumes } from "@/data/apothecary-diaries"

const novelVolumesMap: Record<string, { id: string; title: string; coverImage: string; chapters?: { title: string }[] | string[] }[]> = {
    cote: [...y1v, ...y1s, ...y2v, ...y2s, ...y3v, ...y3s],
    lotm: [...lotmVolumes, ...lotmSideStories, ...coiVolumes],
    rezero: rezeroVolumes,
    "bunny-girl": [...bunnyGirlVolumes, ...bunnyGirlSideStories],
    "mushoku-tensei": [...mushokuTenseiVolumes, ...mushokuTenseiSideStories, ...mushokuTenseiRedundancy],
    orv: orvVolumes,
    "reverend-insanity": reverendInsanityVolumes,
    "apothecary-diaries": apothecaryDiariesVolumes
};

interface LastRead {
    novelSlug: string
    volumeId: string
    chapterIndex: number
    title: string
    coverImage: string
    timestamp: string
    chapterId?: string
}

const themeStyles: Record<string, {
    text: string;
    bg: string;
    border: string;
    glow: string;
    badgeBg: string;
}> = {
    cote: {
        text: "text-red-500 dark:text-red-400",
        bg: "bg-red-950/40 backdrop-blur-xl",
        border: "border-red-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(239,68,68,0.25)]",
        badgeBg: "bg-red-500/15"
    },
    "reverend-insanity": {
        text: "text-red-500 dark:text-red-400",
        bg: "bg-red-950/50 backdrop-blur-2xl",
        border: "border-red-900/40",
        glow: "shadow-[0_8px_32px_0_rgba(185,28,28,0.35)]",
        badgeBg: "bg-red-950/30"
    },
    lotm: {
        text: "text-amber-500",
        bg: "bg-amber-950/40 backdrop-blur-xl",
        border: "border-amber-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(245,158,11,0.25)]",
        badgeBg: "bg-amber-500/15"
    },
    rezero: {
        text: "text-violet-500 dark:text-violet-400",
        bg: "bg-violet-950/40 backdrop-blur-xl",
        border: "border-violet-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(139,92,246,0.25)]",
        badgeBg: "bg-violet-500/15"
    },
    "bunny-girl": {
        text: "text-purple-400",
        bg: "bg-purple-950/40 backdrop-blur-xl",
        border: "border-purple-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(168,85,247,0.25)]",
        badgeBg: "bg-purple-500/15"
    },
    "mushoku-tensei": {
        text: "text-emerald-500 dark:text-emerald-400",
        bg: "bg-emerald-950/40 backdrop-blur-xl",
        border: "border-emerald-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(16,185,129,0.25)]",
        badgeBg: "bg-emerald-500/15"
    },
    orv: {
        text: "text-cyan-500 dark:text-cyan-400",
        bg: "bg-cyan-950/40 backdrop-blur-xl",
        border: "border-cyan-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(6,182,212,0.25)]",
        badgeBg: "bg-cyan-500/15"
    },
    "apothecary-diaries": {
        text: "text-pink-500 dark:text-pink-400",
        bg: "bg-pink-950/40 backdrop-blur-xl",
        border: "border-pink-500/25",
        glow: "shadow-[0_8px_32px_0_rgba(236,72,153,0.25)]",
        badgeBg: "bg-pink-500/15"
    },
};
export function GlobalContinueReading() {
    const pathname = usePathname()
    const [lastRead, setLastRead] = useState<LastRead | null>(null)
    const [isVisible, setIsVisible] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkModal = () => {
            const modal = document.querySelector('.fixed.inset-0.z-\\[100\\]');
            setIsModalOpen(!!modal);
        };
        checkModal();

        const observer = new MutationObserver(() => {
            checkModal();
        });

        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    const pathParts = pathname.split('/');
    const isVolumeDetailsPage =
        (pathname.startsWith('/cote/select/year-') && pathParts.length > 4) ||
        (pathname.startsWith('/rezero/select/') && pathParts.length > 3) ||
        (pathname.startsWith('/orv/select/') && pathParts.length > 3) ||
        (pathname.startsWith('/bunny-girl/select/') && pathParts.length > 3) ||
        (pathname.startsWith('/mushoku-tensei/select/') && pathParts.length > 3) ||
        (pathname.startsWith('/reverend-insanity/select/') && pathParts.length > 3) ||
        (pathname.startsWith('/apothecary-diaries/select/') && pathParts.length > 3);

    const isHidden =
        pathname === '/' ||
        pathname.startsWith('/read') ||
        pathname.startsWith('/cote/read') ||
        pathname.startsWith('/rezero/read') ||
        pathname.startsWith('/orv/read') ||
        pathname.startsWith('/bunny-girl/read') ||
        pathname.startsWith('/mushoku-tensei/read') ||
        pathname.startsWith('/lotm/read') ||
        pathname.startsWith('/reverend-insanity/read') ||
        pathname.startsWith('/apothecary-diaries/read') ||
        pathname.startsWith('/auth') ||
        isModalOpen ||
        isVolumeDetailsPage;

    useEffect(() => {
        if (isHidden || typeof window === 'undefined') return;

        function fetchLastReadLocal() {
            try {
                let latestReadItem: LastRead | null = null;
                let latestTime = 0;
                
                const parts = pathname.split("/");
                const currentNovelSlug = parts[1];
                const novelSlugs = ['cote', 'lotm', 'rezero', 'bunny-girl', 'mushoku-tensei', 'orv', 'reverend-insanity', 'apothecary-diaries'];
                
                // If browsing a specific novel select page, filter progress check to that novel
                const targetSlugs = novelSlugs.includes(currentNovelSlug) 
                    ? [currentNovelSlug] 
                    : novelSlugs;

                // Scan all keys in localStorage
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (!key) continue;

                    // Match keys like: `${novelSlug}-progress-meta-${volumeId}`
                    for (const slug of targetSlugs) {
                        const prefix = `${slug}-progress-meta-`;
                        if (key.startsWith(prefix)) {
                            const volumeId = key.substring(prefix.length);
                            const metaStr = localStorage.getItem(key);
                            if (metaStr) {
                                try {
                                    const meta = JSON.parse(metaStr);
                                    const timestamp = meta.lastRead || new Date(0).toISOString();
                                    const time = new Date(timestamp).getTime();
                                    if (time > latestTime) {
                                        const novelVolumes = novelVolumesMap[slug] || [];
                                        const volData = novelVolumes.find(v => v.id === volumeId);
                                        if (volData) {
                                            latestTime = time;
                                            
                                            // Handle progress offset calculation (>= 85% means next chapter)
                                            let targetChapterIndex = meta.chapterIndex || 1;
                                            let targetChapterId = meta.chapterId;
                                            const scrollPct = meta.scrollPercentage || 0;
                                            const totalChaps = volData.chapters?.length || 50;

                                            if (scrollPct >= 85 && targetChapterIndex < totalChaps) {
                                                targetChapterIndex += 1;
                                                targetChapterId = undefined; // Force fallback to index query
                                            }

                                            latestReadItem = {
                                                novelSlug: slug,
                                                volumeId,
                                                chapterIndex: targetChapterIndex,
                                                chapterId: targetChapterId,
                                                title: volData.title,
                                                coverImage: volData.coverImage,
                                                timestamp
                                            };
                                        }
                                    }
                                } catch (e) {
                                    console.error("Error parsing progress metadata:", e);
                                }
                            }
                        }
                    }
                }

                if (latestReadItem) {
                    setLastRead(latestReadItem);
                    setIsVisible(true);
                } else {
                    setLastRead(null);
                }
            } catch (err) {
                console.error("Failed to load local continue reading card:", err);
            }
        }

        fetchLastReadLocal();

        // Listen for local storage updates from other tabs
        window.addEventListener('storage', fetchLastReadLocal);
        return () => window.removeEventListener('storage', fetchLastReadLocal);

    }, [pathname, isHidden]);

    if (isHidden || !lastRead || !isVisible) return null;

    // Helper to generate correct read URL
    const getReadUrl = () => {
        const { novelSlug, volumeId, chapterIndex, chapterId } = lastRead;
        if (novelSlug === 'cote') {
            return `/cote/read/${volumeId}/${chapterIndex}`;
        }
        if (novelSlug === 'orv') {
            return `/orv/read?c=${chapterId || chapterIndex}`;
        }
        return `/${novelSlug}/read/${volumeId}/${chapterIndex}`;
    };

    const style = themeStyles[lastRead.novelSlug] || {
        text: "text-zinc-400",
        bg: "bg-zinc-950/90 backdrop-blur-xl",
        border: "border-zinc-800",
        glow: "shadow-[0_10px_35px_rgba(0,0,0,0.85)]",
        badgeBg: "bg-white/10"
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-[88px] right-6 md:bottom-6 md:right-24 z-50 flex flex-col items-end gap-2"
                >
                    <div className="relative group">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-2 -right-2 bg-black/80 text-white rounded-full p-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:bg-red-600 cursor-pointer shadow-md border border-white/10"
                        >
                            <X className="w-3 h-3" />
                        </button>

                        <Link href={getReadUrl()}>
                            <div className={`flex items-center gap-4 ${style.bg} border ${style.border} rounded-full p-2 pl-3 pr-6 ${style.glow} hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer ring-1 ring-white/10`}>
                                {/* Small Cover Preview */}
                                <div className="h-10 w-7 rounded overflow-hidden shrink-0 border border-white/5 bg-zinc-900 shadow-md">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={lastRead.coverImage} alt="Cover" className="h-full w-full object-cover" />
                                </div>

                                <div className="flex flex-col">
                                    <span className={`text-[9px] uppercase tracking-widest font-bold font-sans ${style.text}`}>Continue Reading</span>
                                    {(() => {
                                        const logicalCh = getLogicalChapterNumber(lastRead.novelSlug, lastRead.volumeId, lastRead.chapterIndex);
                                        const fullTitle = `${lastRead.title} - Ch ${logicalCh}`;
                                        const shouldMarquee = fullTitle.length > 25;
                                        
                                        if (shouldMarquee) {
                                            return (
                                                <div className="relative flex overflow-hidden whitespace-nowrap max-w-[160px] md:max-w-[240px] [mask-image:linear-gradient(to_right,transparent,white_8px,white_calc(100%-8px),transparent)] md:[mask-image:none] mt-0.5">
                                                    {/* Mobile viewport: Scrolling Marquee */}
                                                    <div className="flex md:hidden animate-marquee">
                                                        <span className="text-xs font-semibold text-zinc-100 pr-8 shrink-0 font-sans">
                                                            {fullTitle}
                                                        </span>
                                                        <span className="text-xs font-semibold text-zinc-100 pr-8 shrink-0 font-sans">
                                                            {fullTitle}
                                                        </span>
                                                    </div>
                                                    {/* Desktop viewport: Static truncated text */}
                                                    <span className="hidden md:inline text-xs font-semibold text-zinc-100 truncate font-sans">
                                                        {fullTitle}
                                                    </span>
                                                </div>
                                            );
                                        }
                                        
                                        return (
                                            <span className="text-xs font-semibold text-zinc-100 max-w-[160px] truncate leading-tight mt-0.5 font-sans">
                                                {fullTitle}
                                            </span>
                                        );
                                    })()}
                                </div>

                                <div className={`h-7 w-7 rounded-full flex items-center justify-center ml-1 transition-all duration-200 ${style.badgeBg} group-hover:scale-110`}>
                                    <ArrowRight className={`w-3.5 h-3.5 ${style.text}`} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
