"use client"

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, LayoutGrid, List, Download, FileDown, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

import { VolumeData } from "@/data/year2";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface Year2ClientProps {
    volumes: VolumeData[];
    shortStories: VolumeData[];
}

export default function Year2Client({ volumes, shortStories }: Year2ClientProps) {
    const searchParams = useSearchParams();
    const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
    const initialContentType = searchParams.get("contentType") as "volumes" | "shortStories" | null;
    const [contentType, setContentType] = useState<"volumes" | "shortStories">(initialContentType === "shortStories" ? "shortStories" : "volumes");

    useEffect(() => {
        const type = searchParams.get("contentType");
        if (type === "volumes" || type === "shortStories") {
            setContentType(type);
        }
    }, [searchParams]);

    const displayItems = contentType === "volumes" ? volumes : shortStories;
    const [downloadMenuOpen, setDownloadMenuOpen] = useState<string | null>(null);
    const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string }>>({});
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);

    const handleResetVolume = (volId: string) => {
        localStorage.removeItem(`cote-progress-meta-${volId}`);
        localStorage.removeItem(`cote-progress-${volId}`);
        
        const readKey = "cote-read-chapters";
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
            } catch (e) {
                console.error(e);
            }
        }

        import("@/lib/supabase").then(({ supabase }) => {
            supabase.auth.getUser().then(({ data: { user } }) => {
                if (user) {
                    supabase
                        .from('reading_progress')
                        .delete()
                        .eq('user_id', user.id)
                        .eq('volume_id', volId)
                        .then(({ error }) => {
                            if (error) console.error("Failed to delete progress from Supabase:", error);
                        });
                }
            });
        });

        setProgressMap(prev => {
            const copy = { ...prev };
            delete copy[volId];
            return copy;
        });
    };

    const handleDownloadEpub = (vol: any) => {
        if (!vol.epubSource) return;
        let filename = "Classroom_of_the_Elite.epub";
        if (vol.volumeNumber) {
            const parts = vol.volumeNumber.split(':');
            if (parts.length === 2) {
                const yearStr = parts[0].replace('Y', 'Year_');
                const volStr = parts[1].replace('V', 'Volume_');
                filename = `Classroom_of_the_Elite_${yearStr}_${volStr}.epub`;
            } else {
                filename = `Classroom_of_the_Elite_${vol.volumeNumber.replace(/[:]/g, '_')}.epub`;
            }
        } else if (vol.title) {
            filename = `Classroom_of_the_Elite_${vol.title.replace(/\s+/g, '_')}.epub`;
        }
        filename = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');

        const link = document.createElement('a');
        link.href = vol.epubSource;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(null);
    };

    const handleDownloadCover = (vol: any) => {
        const link = document.createElement('a');
        link.href = vol.coverImage;
        link.download = `Cover_${vol.volumeNumber?.replace(':', '_') || vol.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(null);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem("global-view-mode") as "detailed" | "compact" | null;
            if (saved === "detailed" || saved === "compact") {
                setViewMode(saved);
            } else if (window.innerWidth < 768) {
                setViewMode("compact");
            } else {
                setViewMode("detailed");
            }
        }

        const progress: Record<string, any> = {};
        [...volumes, ...shortStories].forEach(vol => {
            const savedMeta = localStorage.getItem(`cote-progress-meta-${vol.id}`);
            if (savedMeta) {
                try {
                    progress[vol.id] = JSON.parse(savedMeta);
                } catch (e) {
                }
            } else {
                const savedCfi = localStorage.getItem(`cote-progress-${vol.id}`);
                if (savedCfi) {
                    progress[vol.id] = { percentage: 0, chapterTitle: "Continue Reading" };
                }
            }
        });
        setProgressMap(progress);
    }, []);

    useEffect(() => {
        const handleViewModeChange = (e: Event) => {
            const customEvent = e as CustomEvent<"detailed" | "compact">;
            if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
                setViewMode(customEvent.detail);
            }
        };
        window.addEventListener("change-view-mode", handleViewModeChange);
        return () => window.removeEventListener("change-view-mode", handleViewModeChange);
    }, []);

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-y-auto relative flex flex-col items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <BackgroundSlideshow images={[
                    '/assets/y2v1.jpg',
                    '/assets/y2v2.jpg',
                    '/assets/y2v3.jpg',
                ]} interval={6000} />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            {/* Top Bar */}
            <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/cote/select">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest hidden sm:block">Year 2 Arc</h1>
                    <h1 className="ml-4 text-xl font-serif font-bold text-white tracking-widest sm:hidden">Year 2</h1>
                    {Object.keys(progressMap).length > 0 && (
                        <button
                            onClick={() => {
                                if (confirm("Are you sure you want to reset all progress for Year 2?")) {
                                    [...volumes, ...shortStories].forEach(vol => {
                                        localStorage.removeItem(`cote-progress-meta-${vol.id}`);
                                        localStorage.removeItem(`cote-progress-${vol.id}`);
                                    });
                                    const readKey = "cote-read-chapters";
                                    const readData = localStorage.getItem(readKey);
                                    if (readData) {
                                        try {
                                            const readMap = JSON.parse(readData);
                                            const volIds = [...volumes, ...shortStories].map(v => v.id);
                                            const updated = Object.keys(readMap).reduce((acc, key) => {
                                                const hasMatch = volIds.some(vid => key.startsWith(`${vid}-`));
                                                if (!hasMatch) {
                                                    acc[key] = readMap[key];
                                                }
                                                return acc;
                                            }, {} as Record<string, boolean>);
                                            localStorage.setItem(readKey, JSON.stringify(updated));
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }
                                    setProgressMap({});
                                    
                                    import("@/lib/supabase").then(({ supabase }) => {
                                        supabase.auth.getUser().then(({ data: { user } }) => {
                                            if (user) {
                                                const volIds = [...volumes, ...shortStories].map(v => v.id);
                                                supabase
                                                    .from('reading_progress')
                                                    .delete()
                                                    .eq('user_id', user.id)
                                                    .in('volume_id', volIds)
                                                    .then(({ error }) => {
                                                        if (error) console.error("Failed to delete progress from Supabase:", error);
                                                    });
                                            }
                                        });
                                    });
                                }
                            }}
                            className="text-[10px] text-white bg-red-600 hover:bg-red-700 font-mono tracking-widest uppercase ml-4 border-none px-3 py-1.5 rounded-full cursor-pointer transition-all active:scale-95 flex-shrink-0 shadow-md"
                        >
                            Reset All
                        </button>
                    )}
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
                className="z-10 container mx-auto px-4 pb-20 max-w-5xl"
            >
                {/* Content Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="relative bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex items-center gap-1">
                        <button
                            onClick={() => setContentType("volumes")}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${contentType === "volumes" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {contentType === "volumes" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-red-600 rounded-full shadow-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                Main Volumes
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${contentType === "volumes" ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"}`}>
                                    {volumes.length}
                                </span>
                            </span>
                        </button>
                        <button
                            onClick={() => setContentType("shortStories")}
                            className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${contentType === "shortStories" ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {contentType === "shortStories" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-red-600 rounded-full shadow-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                Short Stories
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${contentType === "shortStories" ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"}`}>
                                    {shortStories.length}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    {viewMode === "detailed" ? (
                        <motion.div
                            key="detailed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-10"
                        >
                            {displayItems.map((vol, index) => (
                                <div
                                    key={vol.id}
                                    className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                                >
                                    {/* Header Row */}
                                    <div className={`grid grid-cols-[60px_1fr] ${contentType === "shortStories" ? "md:grid-cols-[100px_1fr_300px]" : "md:grid-cols-[100px_1fr_1fr_300px]"} bg-gradient-to-r from-blue-900/40 to-black border-b border-white/10 divide-x divide-white/10 text-center`}>
                                        <div className="p-3 flex items-center justify-center font-bold text-lg md:text-xl text-white">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="p-3 flex items-center justify-center text-sm text-gray-400">
                                            {vol.releaseDateJP}
                                        </div>
                                        {contentType !== "shortStories" && (
                                            <div className="p-3 flex items-center justify-center text-sm text-gray-400 hidden md:flex">
                                                {vol.isbnJP}
                                            </div>
                                        )}
                                        <div className="p-3 flex items-center justify-center font-semibold text-emerald-400 hidden md:flex">
                                            {vol.title}
                                        </div>
                                    </div>

                                    {/* Content Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_300px] divide-y md:divide-y-0 md:divide-x divide-white/10">
                                        {/* Chapters */}
                                        <div className="p-4 md:col-span-1 bg-black/20">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">
                                                {contentType === "shortStories" ? "List of Side Stories:" : "List of Chapters:"}
                                            </h4>
                                            <ul className={`text-sm text-gray-400 space-y-1 list-disc ${contentType === "shortStories" ? "list-outside pl-4" : "list-inside"}`}>
                                                {vol.chapters.slice(0, 5).map((ch, idx) => {
                                                    if (contentType === "shortStories" && ch.includes(" : ")) {
                                                        const [narrator, title] = ch.split(" : ");
                                                        return (
                                                            <li key={idx} className="leading-snug">
                                                                <div className="flex items-start">
                                                                    <span className="shrink-0 font-bold text-blue-400">{narrator} <span className="text-gray-500 font-normal">:</span>&nbsp;</span>
                                                                    <span className="text-gray-300">{title}</span>
                                                                </div>
                                                            </li>
                                                        );
                                                    }
                                                    return <li key={idx} className="truncate">{ch}</li>;
                                                })}
                                                {vol.chapters.length > 5 && <li className="text-gray-600 italic">...and {vol.chapters.length - 5} more</li>}
                                            </ul>
                                        </div>

                                        {/* Characters (Middle) */}
                                        <div className="p-4 bg-gradient-to-b from-purple-900/10 to-transparent">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">
                                                {contentType === "shortStories" ? "Narrators:" : "Cover Characters:"}
                                            </h4>
                                            <ul className="text-sm text-purple-400 space-y-1 font-semibold">
                                                {vol.characters.map((char, idx) => (
                                                    <li key={idx}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Image and CTA (Right) */}
                                        <div className="relative group min-h-[400px] h-full w-full flex items-center justify-center p-4">
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <Link
                                                    prefetch={false}
                                                    href={vol.inProgress ? "#" : `/cote/select/year-2/${vol.id}`}
                                                    className={`block relative z-10 w-full max-w-[240px] ${vol.inProgress ? "cursor-not-allowed" : ""}`}
                                                    onClick={(e) => vol.inProgress && e.preventDefault()}
                                                >
                                                    {vol.coverImage ? (
                                                        <div className="hover-3d relative cursor-pointer w-full max-w-[240px]">
                                                            <div className="relative w-full aspect-[2/3] shadow-2xl overflow-hidden rounded-sm border border-white/10">
                                                                <Image
                                                                    src={vol.coverImage}
                                                                    alt={vol.title}
                                                                    fill
                                                                    priority={index < 3}
                                                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                                    sizes="(max-width: 768px) 300px, 240px"
                                                                />
                                                            </div>
                                                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                                        </div>
                                                    ) : (
                                                        <div className="w-full max-w-[240px] aspect-[2/3] bg-neutral-800 flex items-center justify-center border border-white/10 cursor-pointer">
                                                            <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                                        </div>
                                                    )}
                                                    {vol.inProgress && (
                                                        <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-t border-red-500/50 py-2 pointer-events-none">
                                                            <div className="text-red-400 font-black text-sm md:text-base text-center tracking-widest uppercase animate-pulse">
                                                                IN PROGRESS
                                                            </div>
                                                        </div>
                                                    )}
                                                </Link>

                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-300 z-20 gap-3 px-4 text-center">
                                                    {/* Read Button */}
                                                    {vol.inProgress ? (
                                                        <Button disabled className="w-full bg-neutral-800 text-neutral-400 border border-neutral-700 font-bold tracking-wide cursor-not-allowed opacity-80">
                                                            IN PROGRESS
                                                        </Button>
                                                    ) : (
                                                        <Link prefetch={false} href={`/cote/select/year-2/${vol.id}`} className="w-full">
                                                            <Button variant="default" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg font-bold tracking-wide">
                                                                VIEW DETAILS
                                                            </Button>
                                                        </Link>
                                                    )}

                                                    {/* Progress Info */}
                                                    {progressMap[vol.id] && (
                                                        <>
                                                            <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 w-full text-center">
                                                                <div className="text-xs font-bold text-white mb-0.5 truncate">
                                                                    {progressMap[vol.id].chapterTitle || "Chapter Unknown"}
                                                                </div>
                                                                <div className="text-[10px] text-gray-300">
                                                                    {Math.round(progressMap[vol.id].percentage * 100)}% Complete
                                                                </div>
                                                            </div>
                                                            <Button
                                                                variant="outline"
                                                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide transition-all duration-300 text-xs py-2 mt-2 cursor-pointer border-none rounded"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    if (confirm(`Reset progress for ${vol.title}?`)) {
                                                                        handleResetVolume(vol.id);
                                                                    }
                                                                }}
                                                            >
                                                                Reset Progress
                                                            </Button>
                                                        </>
                                                    )}

                                                    {/* Download Button */}
                                                    <div className="relative w-full">
                                                        <Button
                                                            variant="outline"
                                                            className="w-full border-white/20 bg-black/40 hover:bg-white/10 text-white backdrop-blur-sm gap-2 mt-2"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                setDownloadMenuOpen(downloadMenuOpen === `detailed-${vol.id}` ? null : `detailed-${vol.id}`);
                                                            }}
                                                        >
                                                            <Download className="h-4 w-4" />
                                                            <span className="text-xs font-medium">Download</span>
                                                        </Button>

                                                        {downloadMenuOpen === `detailed-${vol.id}` && (
                                                            <div className="absolute left-0 right-0 bottom-full mb-2 bg-zinc-900/95 border border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-md z-30 p-2 gap-1 flex flex-col ring-1 ring-black/50">
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); handleDownloadCover(vol); }}
                                                                    className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium text-left text-gray-200 hover:bg-white/10 rounded-lg transition-all active:scale-95 border-b border-transparent"
                                                                >
                                                                    <ImageIcon className="h-4 w-4 text-blue-400" />
                                                                    <span className="flex-1">Save Cover</span>
                                                                </button>
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); handleDownloadEpub(vol); }}
                                                                    className="flex items-center gap-3 w-full px-3 py-3 text-sm font-medium text-left text-gray-200 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                                >
                                                                    <FileDown className="h-4 w-4 text-green-400" />
                                                                    <span className="flex-1">Download EPUB</span>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="compact"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        >
                            {displayItems.map((vol, index) => (

                                <Link
                                    prefetch={false}
                                    href={vol.inProgress ? "#" : `/cote/select/year-2/${vol.id}`}
                                    key={vol.id}
                                    className={`flex flex-col gap-2 group relative ${vol.inProgress ? "cursor-not-allowed" : "cursor-pointer"}`}
                                    onClick={(e) => vol.inProgress && e.preventDefault()}
                                >
                                    <div className="hover-3d relative cursor-pointer w-full">
                                        <div className="w-full aspect-[2/3] rounded-md overflow-hidden shadow-lg border border-white/10 relative z-10">
                                            {vol.coverImage ? (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={vol.coverImage}
                                                        alt={vol.title}
                                                        fill
                                                        className="object-cover opacity-90 group-hover:opacity-100"
                                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                        priority={index < 6}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                                    <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                                                {progressMap[vol.id] && (
                                                    <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                                                        RESUME
                                                    </span>
                                                )}
                                            </div>
                                            {vol.inProgress && (
                                                <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-t border-red-500/50 py-1.5 pointer-events-none">
                                                    <div className="text-red-400 font-black text-xs text-center tracking-widest uppercase animate-pulse">
                                                        IN PROGRESS
                                                    </div>
                                                </div>
                                            )}
                                            {progressMap[vol.id] && (
                                                 <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm border border-white/10 w-9 h-9 rounded-full flex items-center justify-center z-20 shadow-md pointer-events-none">
                                                     <span className="text-[9px] font-mono font-bold" style={{ color: 'var(--primary-color, #ef4444)' }}>
                                                         {Math.round(progressMap[vol.id].percentage * 100)}%
                                                     </span>
                                                     <svg className="absolute w-8 h-8 transform -rotate-90 text-red-500" viewBox="0 0 36 36" style={{ color: 'var(--primary-color, #ef4444)' }}>
                                                         <path
                                                             className="text-zinc-800"
                                                             strokeWidth="3.5"
                                                             stroke="currentColor"
                                                             fill="none"
                                                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                         />
                                                         <path
                                                             className="text-primary transition-all duration-300"
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

                                    {/* Chapter Count Badge */}
                                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 z-10 flex items-center gap-1 shadow-sm pointer-events-none">
                                        <List className="w-3 h-3" />
                                        {vol.chapters.length}
                                    </div>


                                    <div className="absolute top-2 right-2 z-30 opacity-100 transition-opacity duration-200">
                                        <div className="relative">
                                            <Button
                                                size="icon"
                                                variant="secondary"
                                                className="h-8 w-8 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setDownloadMenuOpen(downloadMenuOpen === vol.id ? null : vol.id);
                                                }}
                                            >
                                                <Download className="h-4 w-4" />
                                            </Button>

                                            {downloadMenuOpen === vol.id && (
                                                <div className="absolute right-0 top-full mt-2 w-56 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-2 gap-1 text-gray-200 ring-1 ring-black/50">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleDownloadCover(vol); }}
                                                        className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                    >
                                                        <ImageIcon className="h-4 w-4 text-blue-400" />
                                                        <span className="flex-1">Save Cover Image</span>
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleDownloadEpub(vol); }}
                                                        className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                    >
                                                        <FileDown className="h-4 w-4 text-green-400" />
                                                        <span className="flex-1">Download EPUB</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="font-bold text-white text-sm md:text-base group-hover:text-blue-400 transition-colors">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="text-xs text-gray-400 truncate">
                                            {vol.title}
                                        </div>
                                    </div>
                                </Link>
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
