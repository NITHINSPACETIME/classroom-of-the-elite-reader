"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, LayoutGrid, List, Download, FileDown, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { volumes, VolumeData } from "@/data/year2";

export default function Year2SelectPage() {
    const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
    const [downloadMenuOpen, setDownloadMenuOpen] = useState<string | null>(null);

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

        if (window.innerWidth < 768) {
            setViewMode("compact");
        }
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
            <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm flex items-center">
                <Link href="/select">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest">Year 2 Arc</h1>
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
                            {volumes.map((vol) => (
                                <div
                                    key={vol.id}
                                    className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                                >
                                    {/* Header Row */}
                                    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr_1fr_300px] bg-gradient-to-r from-blue-900/40 to-black border-b border-white/10 divide-x divide-white/10 text-center">
                                        <div className="p-3 flex items-center justify-center font-bold text-lg md:text-xl text-white">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="p-3 flex items-center justify-center text-sm text-gray-400">
                                            {vol.releaseDateJP}
                                        </div>
                                        <div className="p-3 flex items-center justify-center text-sm text-gray-400 hidden md:flex">
                                            {vol.isbnJP}
                                        </div>
                                        <div className="p-3 flex items-center justify-center font-semibold text-emerald-400 hidden md:flex">
                                            {vol.title}
                                        </div>
                                    </div>

                                    {/* Content Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_300px] divide-y md:divide-y-0 md:divide-x divide-white/10">
                                        {/* Chapters */}
                                        <div className="p-4 md:col-span-1 bg-black/20">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">List of Chapters:</h4>
                                            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                                {vol.chapters.slice(0, 5).map((ch, idx) => (
                                                    <li key={idx} className="truncate">{ch}</li>
                                                ))}
                                                {vol.chapters.length > 5 && <li className="text-gray-600 italic">...and {vol.chapters.length - 5} more</li>}
                                            </ul>
                                        </div>

                                        {/* Characters (Middle) */}
                                        <div className="p-4 bg-gradient-to-b from-purple-900/10 to-transparent">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">Cover Characters:</h4>
                                            <ul className="text-sm text-purple-400 space-y-1 font-semibold">
                                                {vol.characters.map((char, idx) => (
                                                    <li key={idx}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Image and CTA (Right) */}
                                        <div className="relative group min-h-[400px] h-full w-full flex items-center justify-center p-4">
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <Link href={`/select/year-2/${vol.id}`} className="block relative z-10 w-full max-w-[240px]">
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
                                                    {/* Read Button */}
                                                    <Link href={`/select/year-2/${vol.id}`} className="w-full">
                                                        <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg font-bold tracking-wide">
                                                            VIEW DETAILS
                                                        </Button>
                                                    </Link>

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
                            {volumes.map((vol) => (

                                <Link href={`/select/year-2/${vol.id}`} key={vol.id} className="flex flex-col gap-2 group cursor-pointer relative">
                                    <div className="w-full aspect-[2/3] rounded-md overflow-hidden shadow-lg border border-white/10 relative z-0">
                                        {vol.coverImage ? (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={vol.coverImage}
                                                    alt={vol.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                                <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                            </div>
                                        )}

                                        {/* Optional Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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


                <motion.div
                    className="fixed bottom-8 right-8 z-50 pointer-events-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        onClick={() => setViewMode(prev => prev === "detailed" ? "compact" : "detailed")}
                        className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400/20 flex items-center justify-center transition-all duration-300"
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
                </motion.div>
            </motion.div>
        </div>
    );
}
