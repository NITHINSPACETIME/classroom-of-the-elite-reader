"use client"

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, LayoutGrid, List, Download, FileDown, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

import { VolumeData } from "@/data/year3";
import { UserMenu } from "@/components/auth/UserMenu";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/auth/AuthModal").then(mod => mod.AuthModal), { ssr: false });
const ProfileModal = dynamic(() => import("@/components/auth/ProfileModal").then(mod => mod.ProfileModal), { ssr: false });

interface Year3ClientProps {
    volumes: VolumeData[];
    shortStories: VolumeData[];
}

export default function Year3Client({ volumes, shortStories }: Year3ClientProps) {
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
                <img
                    src="/assets/bg-slide-3.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50 blur-sm"
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none z-20" />

            {/* Top Bar */}
            <div className="sticky top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm flex items-center">
                <Link href="/select">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <h1 className="ml-4 text-2xl font-serif font-bold text-white tracking-widest">Year 3 Arc</h1>
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
                                    <div className={`grid grid-cols-[60px_1fr] ${contentType === "shortStories" ? "md:grid-cols-[100px_1fr_300px]" : "md:grid-cols-[100px_1fr_1fr_300px]"} bg-gradient-to-r from-emerald-900/40 to-black border-b border-white/10 divide-x divide-white/10 text-center`}>
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
                                                                    <span className="shrink-0 font-bold text-emerald-400">{narrator} <span className="text-gray-500 font-normal">:</span>&nbsp;</span>
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
                                        <div className="p-4 bg-gradient-to-b from-green-900/10 to-transparent">
                                            <h4 className="font-bold text-white mb-2 border-b border-white/10 pb-1">
                                                {contentType === "shortStories" ? "Narrators:" : "Cover Characters:"}
                                            </h4>
                                            <ul className="text-sm text-green-400 space-y-1 font-semibold">
                                                {vol.characters.map((char, idx) => (
                                                    <li key={idx}>{char}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Image and CTA (Right) */}
                                        <div className="relative group min-h-[400px] h-full w-full flex items-center justify-center p-4">
                                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                                <Link
                                                    href={vol.inProgress ? "#" : `/select/year-3/${vol.id}`}
                                                    className={`block relative z-10 w-full max-w-[240px] ${vol.inProgress ? "cursor-not-allowed" : ""}`}
                                                    onClick={(e) => vol.inProgress && e.preventDefault()}
                                                >
                                                    {vol.coverImage ? (
                                                        <div className="relative w-full aspect-[2/3] shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-500 cursor-pointer">
                                                            <Image
                                                                src={vol.coverImage}
                                                                alt={vol.title}
                                                                fill
                                                                className="object-cover rounded-sm shadow-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                                sizes="(max-width: 768px) 300px, 240px"
                                                                priority={index < 3}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-full max-w-[240px] aspect-[2/3] bg-neutral-800 flex items-center justify-center border border-white/10 cursor-pointer">
                                                            <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                                        </div>
                                                    )}
                                                    {vol.inProgress && (
                                                        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px] pointer-events-none rounded-sm">
                                                            <div className="text-white font-black text-xl md:text-3xl -rotate-12 border-4 border-emerald-500/80 text-emerald-500/80 p-2 md:p-4 rounded-lg tracking-wider uppercase shadow-2xl">
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
                                                        <Link href={`/select/year-3/${vol.id}`} className="w-full">
                                                            <Button variant="default" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg font-bold tracking-wide">
                                                                VIEW DETAILS
                                                            </Button>
                                                        </Link>
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
                                                                    <ImageIcon className="h-4 w-4 text-emerald-400" />
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


                            <div className="bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden p-8 flex items-center justify-center text-center opacity-60">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-full text-center">
                                        <h3 className="text-xl font-serif font-bold text-gray-500 mb-1">To Be Continued...</h3>
                                        <p className="text-sm text-gray-600">More Year 3 volumes will be added as they release.</p>
                                    </div>
                                </div>
                            </div>
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
                                    href={vol.inProgress ? "#" : `/select/year-3/${vol.id}`}
                                    key={vol.id}
                                    className={`flex flex-col gap-2 group relative ${vol.inProgress ? "cursor-not-allowed" : "cursor-pointer"}`}
                                    onClick={(e) => vol.inProgress && e.preventDefault()}
                                >
                                    <div className="w-full aspect-[2/3] rounded-md overflow-hidden shadow-lg border border-white/10 relative z-0">
                                        {vol.coverImage ? (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={vol.coverImage}
                                                    alt={vol.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                    priority={index < 6}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                                <span className="text-white/20 font-serif text-4xl font-bold">?</span>
                                            </div>
                                        )}

                                        {/* Chapter Count Badge */}
                                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 z-20 flex items-center gap-1 shadow-sm pointer-events-none">
                                            <List className="w-3 h-3" />
                                            {vol.chapters.length}
                                        </div>

                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        {vol.inProgress && (
                                            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px] pointer-events-none">
                                                <div className="text-white font-black text-lg -rotate-12 border-4 border-emerald-500/80 text-emerald-500/80 p-2 rounded-lg tracking-wider uppercase shadow-2xl scale-75 md:scale-100">
                                                    IN PROGRESS
                                                </div>
                                            </div>
                                        )}
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
                                                <div className="absolute right-0 top-full mt-2 w-40 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-2 gap-1 text-gray-200 ring-1 ring-black/50">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleDownloadCover(vol); }}
                                                        className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                                    >
                                                        <ImageIcon className="h-4 w-4 text-emerald-400" />
                                                        <span className="flex-1">Save Cover</span>
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
                                        <div className="font-bold text-white text-sm md:text-base group-hover:text-emerald-400 transition-colors">
                                            {vol.volumeNumber}
                                        </div>
                                        <div className="text-xs text-gray-400 truncate">
                                            {vol.title}
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/*  for Future Volumes */}
                            <div className="flex flex-col gap-2 opacity-50 select-none">
                                <div className="w-full aspect-[2/3] rounded-md border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5">
                                    <span className="text-white/30 font-serif text-4xl font-bold">...</span>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-gray-500 text-sm md:text-base">
                                        Coming Soon
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        More volumes yet to be released...
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>


           
            <div className="fixed bottom-8 right-8 z-[100]">
                <Button
                    onClick={() => setViewMode(prev => prev === "detailed" ? "compact" : "detailed")}
                    className="rounded-full w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
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
            </div>
        </div>
    );
}
