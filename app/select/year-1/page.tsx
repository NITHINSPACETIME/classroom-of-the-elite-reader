"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Grid, List, BookOpen, Clock, Calendar, ChevronRight, Smartphone, Book, Download, Image as ImageIcon, FileDown, MoreVertical, ArrowLeft, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

import { volumes, VolumeData } from "@/data/year1";
import { UserMenu } from "@/components/auth/UserMenu";
import { AuthModal } from "@/components/auth/AuthModal";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { ProfileModal } from "@/components/auth/ProfileModal";

const accurateVolumes: VolumeData[] = [
    volumes[0],
    volumes[1],
    volumes[2],
    volumes[3],
    volumes[4],
    volumes[5],
    volumes[6],
    volumes[7],
    volumes[8],
    volumes[9],
    volumes[10],
    volumes[11],
    volumes[12],
    volumes[13],
];


export default function Year1SelectPage() {
    const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
    const [progressMap, setProgressMap] = useState<Record<string, { percentage: number; chapterTitle: string }>>({});
    const [downloadMenuOpen, setDownloadMenuOpen] = useState<string | null>(null);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);

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
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setViewMode("compact");
        }

        const progress: Record<string, any> = {};
        accurateVolumes.forEach(vol => {
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

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-y-auto relative flex flex-col items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <BackgroundSlideshow images={[
                    '/assets/y1v1.jpg',
                    '/assets/y1v2.jpg',
                    '/assets/y1v3.jpg',
                ]} interval={6000} />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            {/* Top Bar */}
            <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/select">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest hidden sm:block">Year 1 Arc</h1>
                    <h1 className="ml-4 text-xl font-serif font-bold text-white tracking-widest sm:hidden">Year 1</h1>
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
                            {accurateVolumes.map((vol, index) => (
                                <div
                                    key={vol.id}
                                    className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                                >
                                    {/* Header Row */}
                                    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr_1fr_300px] bg-gradient-to-r from-red-900/40 to-black border-b border-white/10 divide-x divide-white/10 text-center">
                                        <div className="p-3 flex items-center justify-center font-bold text-lg md:text-xl text-white">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="hidden md:flex p-3 flex-col justify-center text-xs md:text-sm text-gray-300">
                                            <div className="font-bold text-red-500 mb-1">Release Date</div>
                                            <div>JP: {vol.releaseDateJP}</div>
                                            <div>EN: {vol.releaseDateEN}</div>
                                        </div>
                                        <div className="hidden md:flex p-3 flex-col justify-center text-xs md:text-sm text-gray-300">
                                            <div className="font-bold text-red-500 mb-1">ISBN</div>
                                            <div>JP: {vol.isbnJP}</div>
                                            <div>EN: {vol.isbnEN}</div>
                                        </div>
                                        <div className="p-3 flex items-center justify-center font-bold text-red-400 font-serif text-sm md:text-lg">
                                            {vol.title}
                                        </div>
                                    </div>

                                    {/* Content Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_300px] divide-y md:divide-y-0 md:divide-x divide-white/10">
                                        {/* Chapters */}
                                        <div className="p-4 md:col-span-1 bg-black/20">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">List of Chapters:</h4>
                                            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                                {vol.chapters.map((chap, i) => (
                                                    <li key={i} className="leading-snug">{chap}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Characters (Middle) */}
                                        <div className="p-4 bg-gradient-to-b from-blue-900/10 to-transparent">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Cover Characters:</h4>
                                            <ul className="text-sm text-pink-400 space-y-1 font-semibold">
                                                {vol.characters.map((char, i) => (
                                                    <li key={i}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Image and CTA (Right) */}
                                        <div className="relative group min-h-[400px] h-full w-full flex items-center justify-center p-4">
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <Link href={`/select/year-1/${vol.id}`} className="block relative z-10 w-full max-w-[240px]">
                                                    {vol.coverImage ? (
                                                        <div className="relative w-full aspect-[2/3] shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-500 cursor-pointer">
                                                            <Image
                                                                src={vol.coverImage}
                                                                alt={vol.title}
                                                                fill
                                                                className="object-cover rounded-sm shadow-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                                sizes="(max-width: 768px) 100vw, 240px"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-full max-w-[240px] aspect-[2/3] bg-neutral-800 flex items-center justify-center border border-white/10 cursor-pointer">
                                                            <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                                        </div>
                                                    )}
                                                </Link>

                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-300 z-20 gap-3 px-4 text-center">
                                                    {/* READ Button */}
                                                    <Link href={`/select/year-1/${vol.id}`} className="w-full">
                                                        <Button variant="default" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg font-bold tracking-wide">
                                                            VIEW DETAILS
                                                        </Button>
                                                    </Link>

                                                    {/* Progress Info */}
                                                    {progressMap[vol.id] && (
                                                        <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 w-full text-center">
                                                            <div className="text-xs font-bold text-white mb-0.5 truncate">
                                                                {progressMap[vol.id].chapterTitle || "Chapter Unknown"}
                                                            </div>
                                                            <div className="text-[10px] text-gray-300">
                                                                {Math.round(progressMap[vol.id].percentage * 100)}% Complete
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Download Button (Detailed View) */}
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
                                                            <div className="absolute left-0 right-0 bottom-full mb-2 bg-zinc-900/95 border border-white/10 rounded-lg shadow-xl overflow-hidden backdrop-blur-md z-30">
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); handleDownloadCover(vol); }}
                                                                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left text-gray-200 hover:bg-white/10 transition-colors border-b border-white/5"
                                                                >
                                                                    <ImageIcon className="h-4 w-4 text-blue-400" />
                                                                    <span>Save Cover</span>
                                                                </button>
                                                                <button
                                                                    onClick={(e) => { e.stopPropagation(); handleDownloadEpub(vol); }}
                                                                    className="flex items-center gap-3 w-full px-4 py-3 text-sm text-left text-gray-200 hover:bg-white/10 transition-colors"
                                                                >
                                                                    <FileDown className="h-4 w-4 text-green-400" />
                                                                    <span>Download EPUB</span>
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
                            {accurateVolumes.map((vol) => (

                                <Link href={`/select/year-1/${vol.id}`} key={vol.id} className="flex flex-col gap-2 group cursor-pointer relative">
                                    <div className="w-full aspect-[2/3] rounded-md overflow-hidden shadow-lg border border-white/10 relative z-0">
                                        {vol.coverImage ? (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={vol.coverImage}
                                                    alt={vol.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
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

                                        {progressMap[vol.id] && (
                                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/50 backdrop-blur-sm z-20 pointer-events-none">
                                                <div
                                                    className="h-full bg-red-500 transition-all duration-300"
                                                    style={{ width: `${Math.min(100, Math.max(0, progressMap[vol.id].percentage * 100))}%` }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Chapter Count Badge */}
                                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 z-20 flex items-center gap-1 shadow-sm pointer-events-none">
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
                                                <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-2 gap-1 text-gray-200 ring-1 ring-black/50">
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleDownloadCover(vol);
                                                        }}
                                                        className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                    >
                                                        <ImageIcon className="h-4 w-4 text-blue-400" />
                                                        <span className="flex-1">Save Cover</span>
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleDownloadEpub(vol);
                                                        }}
                                                        className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                    >
                                                        <FileDown className="h-4 w-4 text-green-400" />
                                                        <span className="flex-1">Download EPUB</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="text-center px-1">
                                        <div className="font-bold text-white text-sm md:text-base group-hover:text-red-400 transition-colors truncate">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="text-xs text-gray-400 truncate">
                                            {vol.title}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    )
                    }
                </AnimatePresence >

                {/* Toggle Button */}
                < motion.div
                    className="fixed bottom-8 right-8 z-50 pointer-events-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        onClick={() => setViewMode(prev => prev === "detailed" ? "compact" : "detailed")}
                        className="rounded-full w-14 h-14 bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-400/20 flex items-center justify-center transition-all duration-300"
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
                </motion.div >
            </motion.div >

            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div >
    );
}

