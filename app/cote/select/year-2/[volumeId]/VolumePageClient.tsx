"use client"

import { volumes, shortStories } from "@/data/year2";
import { getSpineIndex, chapterMappings } from "@/lib/chapter-mappings";
import { ArrowLeft, BookOpen, Calendar, Users, Search, ArrowUpDown, Download, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useState, useEffect } from "react";
import { MarqueeText } from "@/components/MarqueeText";

import { useAuth } from "@/context/AuthContext";
import { UserMenu } from "@/components/auth/UserMenu";
import { AuthModal } from "@/components/auth/AuthModal";
import { ProfileModal } from "@/components/auth/ProfileModal";
import { SupportAuthorCard } from "@/components/ui/SupportAuthorCard";



export function VolumePageClient({ volumeId }: { volumeId: string }) {

    const volume = volumes.find((v) => v.id === volumeId) || shortStories.find((v) => v.id === volumeId);

    if (!volume) {
        notFound();
    }

    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [hasStarted, setHasStarted] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [savedChapterIndex, setSavedChapterIndex] = useState<number>(0);
    const [savedScrollPercentage, setSavedScrollPercentage] = useState<number>(0);
    const [readChapters, setReadChapters] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const readKey = "cote-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                setReadChapters(JSON.parse(readData));
            } catch (e) {
                console.error(e);
            }
        }

        const volId = volume.id;
        const savedMeta = localStorage.getItem(`cote-progress-meta-${volId}`);
        const savedProgress = localStorage.getItem(`cote-progress-${volId}`);
        let spineIndex = 0;
        let scrollPct = 0;
        if (savedMeta) {
            try {
                const meta = JSON.parse(savedMeta);
                spineIndex = meta.chapterIndex || 0;
                scrollPct = meta.scrollPercentage || 0;
            } catch (e) {}
        } else if (savedProgress) {
            spineIndex = parseInt(savedProgress) || 0;
        }

        if (spineIndex > 0) {
            const mapping = chapterMappings[volume.id];
            const logicalIndex = mapping ? mapping.indexOf(spineIndex) : -1;
            setHasStarted(true);
            setSavedChapterIndex(logicalIndex >= 0 ? logicalIndex : 0);
            setSavedScrollPercentage(scrollPct);
        } else {
            setHasStarted(false);
            setSavedChapterIndex(0);
            setSavedScrollPercentage(0);
        }
    }, [volume]);

    const handleResetVolume = () => {
        const volId = volume.id;
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
        const readKey = "cote-read-chapters";
        const readData = localStorage.getItem(readKey);
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                const targetKey = `${volId}-${getSpineIndex(volume.id, chapIndex)}`;
                delete readMap[targetKey];
                localStorage.setItem(readKey, JSON.stringify(readMap));
                setReadChapters({ ...readMap });
            } catch (e) {
                console.error(e);
            }
        }
    };


    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);

    const isSideStory = volume.volumeNumber === 'SS' || volume.id.startsWith('ss-');

    const getChapterDisplay = (chapter: string, index: number) => {

        if (isSideStory) {
            return { type: 'SS', number: (index + 1).toString(), full: chapter };
        }
        if (chapter === "Illustrations") {
            return { type: 'ILL', number: '', full: chapter };
        }
        if (chapter.toLowerCase() === "afterword") {
            return { type: 'AFT', number: '', full: chapter };
        }

        const isSpecial = volume.id === 'y2v0' || volume.volumeNumber === 'V0' || volume.volumeNumber === '0';

        if (isSpecial) {
            const match = chapter.match(/^(?:Chapter\s+(\d+)|(Prologue)|(Epilogue))/i);
            if (match) {
                if (match[1]) return { type: 'CH', number: match[1], full: `Chapter ${match[1]} : ${chapter.replace(/^Chapter\s+\d+[:\s]*/i, '')}` };
                if (match[2]) return { type: 'PRO', number: '', full: chapter.replace(/^Prologue[:\s]*/i, 'Prologue - ') };
                if (match[3]) return { type: 'EPI', number: '', full: chapter.replace(/^Epilogue[:\s]*/i, 'Epilogue - ') };
            }
            return { type: 'CH', number: (index + 1).toString(), full: `Chapter ${index + 1} : ${chapter}` };
        } else {

            let cleanTitle = chapter;
            let typeLabel = '';

            const match = chapter.match(/^(?:Chapter\s+(\d+)|(Prologue)|(Epilogue))/i);

            if (match) {
                if (match[1]) {
                    cleanTitle = chapter.replace(/^Chapter\s+\d+[:\s]*/i, '');
                } else if (match[2]) {
                    cleanTitle = chapter.replace(/^Prologue[:\s]*/i, '');
                    typeLabel = 'Prologue';
                } else if (match[3]) {
                    cleanTitle = chapter.replace(/^Epilogue[:\s]*/i, '');
                    typeLabel = 'Epilogue';
                }
            }

            const displayNum = (index + 1).toString();
            let fullTitle = `Chapter ${displayNum} : ${cleanTitle}`;
            if (typeLabel) {
                fullTitle = `Chapter ${displayNum} - ${typeLabel} : ${cleanTitle}`;
            }

            return {
                type: 'CH',
                number: displayNum,
                full: fullTitle
            };
        }
    };

    const filteredChapters = volume.chapters.filter((chapter, index) => {
        const { number, full } = getChapterDisplay(chapter, index);
        const query = searchQuery.toLowerCase();


        if (/^\d+$/.test(query)) {
            return number === query || (number && number.includes(query)) || full.toLowerCase().startsWith(`chapter ${query}`);
        }

        return (
            chapter.toLowerCase().includes(query) ||
            full.toLowerCase().includes(query) ||
            (number && number.includes(query))
        );
    });

    const sortedChapters = [...filteredChapters].sort((a, b) => {
        const indexA = volume.chapters.indexOf(a);
        const indexB = volume.chapters.indexOf(b);

        if (sortOrder === "asc") {
            return indexA - indexB;
        } else {
            return indexB - indexA;
        }
    });

    const handleDownloadEpub = () => {
        if (!volume?.epubSource) return;
        let filename = "Classroom_of_the_Elite.epub";
        if (volume.volumeNumber) {
            const parts = volume.volumeNumber.split(':');
            if (parts.length === 2) {
                const yearStr = parts[0].replace('Y', 'Year_');
                const volStr = parts[1].replace('V', 'Volume_');
                filename = `Classroom_of_the_Elite_${yearStr}_${volStr}.epub`;
            } else {
                filename = `Classroom_of_the_Elite_${volume.volumeNumber.replace(/[:]/g, '_')}.epub`;
            }
        }
        filename = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');

        const link = document.createElement('a');
        link.href = volume.epubSource;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(false);
    };

    const handleDownloadCover = () => {
        if (!volume?.coverImage) return;
        const link = document.createElement('a');
        link.href = volume.coverImage;
        link.download = `Cover_${volume.volumeNumber?.replace(':', '_') || volume.id}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(false);
    };

    const getContinueChapterIndex = () => {
        let idx = savedChapterIndex;
        if (hasStarted && savedScrollPercentage < 85) {
            return idx;
        }
        while (idx < volume.chapters.length && readChapters[`${volume.id}-${getSpineIndex(volume.id, idx)}`]) {
            idx++;
        }
        if (idx >= volume.chapters.length) {
            return volume.chapters.length - 1;
        }
        return idx;
    };

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-blue-900/50">

            <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-950/20 via-black to-black pointer-events-none" />

            <nav className="relative z-50 p-6 flex items-center justify-between">
                <Link href={isSideStory ? "/cote/select/year-2?contentType=shortStories" : "/cote/select/year-2"}>
                    <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5 gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Year 2
                    </Button>
                </Link>

                <UserMenu
                    onSignIn={() => setAuthModalOpen(true)}
                    onProfile={() => setProfileModalOpen(true)}
                />
            </nav>

            <main className="relative z-10 container mx-auto px-4 lg:px-8 pb-20 pt-4">

                <div className="lg:hidden mb-6 space-y-2">
                    <h1 className="text-3xl font-bold font-serif tracking-tight text-white/90">
                        Classroom of the Elite: {volume.title}
                    </h1>
                    <h2 className="text-xl text-gray-400 font-light">{volume.title}</h2>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {volume.characters.map((char) => (
                            <div key={char} className="px-3 py-1 rounded-full bg-blue-950/30 border border-blue-900/30 text-blue-200 text-xs flex items-center gap-2">
                                <Users className="w-3 h-3" />
                                {char}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6 lg:sticky lg:top-8"
                    >
                        <div className="relative aspect-[2/3] w-full max-w-[300px] lg:max-w-none mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-white/10 group">
                            <img
                                src={volume.coverImage}
                                alt={volume.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ transform: "translateZ(0)" }}
                                width={600}
                                height={900}
                                sizes="(max-width: 1024px) 100vw, 400px"
                                fetchPriority="high"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {volume.id === 'v0' && (
                                <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm px-3 py-1 text-center text-[10px] font-bold text-white uppercase tracking-widest shadow-[0_0_10px_rgba(37,99,235,0.5)] rounded-sm z-10 border border-blue-400/30">
                                    Fan Translation
                                </div>
                            )}

                            <div className="absolute top-3 right-3 z-30 opacity-100">
                                <div className="relative">
                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setDownloadMenuOpen(!downloadMenuOpen);
                                        }}
                                    >
                                        <Download className="h-5 w-5" />
                                    </Button>

                                    {downloadMenuOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-2 gap-1 text-gray-200 ring-1 ring-black/50">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDownloadCover(); }}
                                                className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                            >
                                                <ImageIcon className="h-4 w-4 text-blue-400" />
                                                <span className="flex-1">Save Cover</span>
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDownloadEpub(); }}
                                                className="flex items-center gap-3 w-full px-3 py-3 text-xs font-medium text-left hover:bg-white/10 rounded-lg transition-all active:scale-95"
                                            >
                                                <Download className="h-4 w-4 text-green-400" />
                                                <span className="flex-1">Download EPUB</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <a href={`/cote/read/${volume.id}/${getSpineIndex(volume.id, hasStarted ? getContinueChapterIndex() : 0)}`} className="w-full">
                            <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02] rounded-full">
                                <BookOpen className="mr-2 w-5 h-5" />
                                {hasStarted ? "Continue Reading" : "Start Reading"}
                            </Button>
                        </a>
                        {hasStarted && (
                            <Button
                                variant="outline"
                                onClick={() => {
                                    if (confirm(`Are you sure you want to reset all reading progress for Classroom of the Elite: ${volume.title}?`)) {
                                        handleResetVolume();
                                    }
                                }}
                                className="w-full h-10 bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide transition-all cursor-pointer rounded-full border-none"
                            >
                                Reset Volume Progress
                            </Button>
                        )}
                        {hasStarted && (
                            <div className="w-full bg-red-950/10 border border-red-900/20 rounded-xl p-3 text-center animate-fadeIn">
                                <div className="text-[10px] text-red-400 font-bold tracking-wider uppercase mb-1">Last Read</div>
                                <div className="text-xs text-zinc-200 font-medium truncate mb-1.5">
                                    {volume.chapters[savedChapterIndex] ? getChapterDisplay(volume.chapters[savedChapterIndex], savedChapterIndex).full : `Chapter ${savedChapterIndex + 1}`}
                                </div>
                                <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden">
                                    <div 
                                        className="bg-red-500 h-full rounded-full" 
                                        style={{ 
                                            width: `${Math.min(100, Math.max(0, ((savedChapterIndex + 1) / volume.chapters.length) * 100))}%` 
                                        }} 
                                    />
                                </div>
                            </div>
                        )}


                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                <div className="text-xs text-gray-500 mb-1 flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" /> JP Release
                                </div>
                                <div className="text-sm font-medium">{volume.releaseDateJP}</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                <div className="text-xs text-gray-500 mb-1 flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" /> EN Release
                                </div>
                                <div className="text-sm font-medium">{volume.releaseDateEN}</div>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >

                        <div className="hidden lg:block space-y-4 border-b border-white/10 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-white/90">
                                Classroom of the Elite: {volume.title}
                            </h1>
                            <h2 className="text-2xl text-gray-400 font-light">{volume.title}</h2>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {volume.characters.map((char) => (
                                    <div key={char} className="px-3 py-1 rounded-full bg-blue-950/30 border border-blue-900/30 text-blue-200 text-sm flex items-center gap-2">
                                        <Users className="w-3 h-3" />
                                        {char}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <SupportAuthorCard 
                            novelSlug="cote" 
                            volumeId={volumeId} 
                            volumeTitle={volume.title} 
                            className="mb-4"
                        />

                        {/* Chapter List */}
                        <div>
                            {isSideStory && (
                                <h3 className="text-xl font-medium text-white/80 mb-4 px-1">
                                    List of side stories
                                </h3>
                            )}
                            <div className="mb-6 flex gap-4">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Search className="w-4 h-4 text-gray-500" />
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder={isSideStory ? "Search side stories..." : "Search chapters..."}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 hover:bg-white/10 focus:bg-white/10 transition-colors h-11"
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                                    className="h-11 px-4 bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                                >
                                    <ArrowUpDown className="w-4 h-4 mr-2" />
                                    {sortOrder === "asc" ? "Ascending" : "Descending"}
                                </Button>
                            </div>

                            <div className="grid gap-2">
                                {sortedChapters.length > 0 ? (
                                    sortedChapters.map((chapter) => {
                                        const originalIndex = volume.chapters.indexOf(chapter);
                                        const { type, number, full } = getChapterDisplay(chapter, originalIndex);


                                        const linkIndex = originalIndex + 1;

                                        const isCurrent = hasStarted && originalIndex === savedChapterIndex;

                                        return (
                                            <motion.div
                                                key={chapter}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + (originalIndex * 0.03) }}
                                            >
                                                <div className={`group flex items-center justify-between p-3 md:p-4 rounded-xl border transition-all duration-200 gap-3 ${isCurrent ? 'bg-blue-900/10 border-blue-900/30' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'} ${readChapters[`${volume.id}-${getSpineIndex(volume.id, originalIndex)}`] && !isCurrent ? 'opacity-55 hover:opacity-100 transition-opacity' : ''}`}>
                                                    <Link href={`/cote/read/${volume.id}/${getSpineIndex(volume.id, originalIndex)}`} className="flex items-start gap-3 flex-1">
                                                        <span className={`shrink-0 text-[10px] md:text-xs font-mono px-1.5 py-0.5 md:px-2 md:py-1 rounded mt-0.5 ${type === 'CH' ? (isCurrent ? 'text-blue-200 bg-blue-950/40' : 'text-gray-600 bg-black/40') : (type === 'SS' ? 'text-blue-500 bg-blue-950/50' : 'text-blue-500 bg-blue-950/30')}`}>
                                                            {type === 'SS' ? `SS ${number}` : `${type} ${number}`.trim()}
                                                        </span>
                                                        <span className={`text-sm md:text-base transition-colors font-medium leading-tight md:leading-normal ${isCurrent ? 'text-blue-200' : 'text-gray-300 group-hover:text-white'}`}>
                                                            {isSideStory && full.includes(" : ") ? (() => {
                                                                const [narrator, title] = full.split(" : ");
                                                                return (
                                                                    <span className="flex flex-col md:block">
                                                                        <span className="font-bold text-blue-400">{narrator} <span className="text-gray-500 font-normal">:</span> </span>
                                                                        <span className="text-gray-300">{title}</span>
                                                                    </span>
                                                                );
                                                            })() : full}
                                                            {isCurrent && <span className="ml-2 text-xs text-blue-400 font-normal animate-pulse">(Current)</span>}
                                                        </span>
                                                    </Link>
                                                    <div className="flex items-center gap-3 shrink-0">
                                                        {readChapters[`${volume.id}-${getSpineIndex(volume.id, originalIndex)}`] && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1">
                                                                    ✓ Read
                                                                </span>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();
                                                                        if (confirm(`Reset reading progress for ${chapter}?`)) {
                                                                            handleResetChapter(originalIndex);
                                                                        }
                                                                    }}
                                                                    className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1 hover:bg-red-700 transition-all duration-200 active:scale-95 cursor-pointer border-none"
                                                                >
                                                                    Reset
                                                                </button>
                                                            </div>
                                                        )}
                                                        <Link href={`/cote/read/${volume.id}/${getSpineIndex(volume.id, originalIndex)}`}>
                                                            <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-white rotate-180 transition-colors mt-0.5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })
                                ) : (
                                    <div className="text-center text-gray-500 py-10">
                                        No {isSideStory ? "side stories" : "chapters"} found matching "{searchQuery}"
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
                    <a href={`/cote/read/${volume.id}/${getSpineIndex(volume.id, getContinueChapterIndex())}`} className="pointer-events-auto">
                        <Button className="h-14 px-5 md:px-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/20 hover:scale-105 transition-all duration-300 group max-w-[calc(100vw-9.5rem)] md:max-w-md">
                            <BookOpen className="mr-2 w-5 h-5 text-blue-400 group-hover:text-blue-300 shrink-0" />
                            <span className="flex flex-col items-start leading-none gap-1 min-w-0 flex-1">
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Continue Reading</span>
                                <MarqueeText 
                                    text={volume.chapters[getContinueChapterIndex()] ? getChapterDisplay(volume.chapters[getContinueChapterIndex()], getContinueChapterIndex()).full : `Chapter ${getContinueChapterIndex() + 1}`}
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
