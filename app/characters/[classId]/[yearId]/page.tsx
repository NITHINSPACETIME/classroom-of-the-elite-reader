"use client"

import React, { use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "@/data/characters";
import { CharacterCard } from "@/components/characters/CharacterCard";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SiteHeader } from "@/components/ui/SiteHeader";

import { YearToggle } from "@/components/ui/YearToggle";

interface PageProps {
    params: Promise<{ classId: string; yearId: string }>;
}

export default function CharacterGridPage({ params }: PageProps) {
    const { classId, yearId } = use(params);
    const decodedClassId = decodeURIComponent(classId);
    const [activeTab, setActiveTab] = React.useState<"students" | "faculty">("students");
    const [displayCount, setDisplayCount] = React.useState(12);


    React.useEffect(() => {
        setDisplayCount(12);
    }, [activeTab, classId, yearId]);

    const filteredCharacters = characters.filter(char => {

        if (decodedClassId === "All") return true;

        let belongsToClass = false;
        if (char.classHistory && char.classHistory[yearId]) {
            belongsToClass = char.classHistory[yearId] === decodedClassId;
        } else {
            belongsToClass = char.currentClass === decodedClassId;
        }


        const isTeacherForClass = char.currentClass === "Teacher" && (
            char.tags?.includes(`Class ${decodedClassId}`) && char.tags?.includes(`Year ${yearId}`)
        );

        if (activeTab === "students") {
            return belongsToClass && char.currentClass !== "Teacher";
        } else {
            return isTeacherForClass;
        }
    });

    // Valid Sort Logic for Year 2 and Year 3
    const sortedCharacters = React.useMemo(() => {
        if (!filteredCharacters) return [];
        // User requested: characters with changed cover images should be in first
        if ((yearId === "2" || yearId === "3") && activeTab === "students") {
            return [...filteredCharacters].sort((a, b) => {
                let aHasImage = false;
                let bHasImage = false;

                if (yearId === "3") {
                    // Prioritize if they have a Year 3 image OR a Year 2 image (which acts as fallback)
                    aHasImage = !!a.images?.year3 || !!a.images?.year2;
                    bHasImage = !!b.images?.year3 || !!b.images?.year2;
                } else {
                    const yearKey = `year${yearId}` as keyof typeof a.images;
                    aHasImage = !!a.images?.[yearKey];
                    bHasImage = !!b.images?.[yearKey];
                }

                if (aHasImage && !bHasImage) return -1;
                if (!aHasImage && bHasImage) return 1;
                return 0; // Maintain integrity of original order (Importance)
            });
        }
        return filteredCharacters;
    }, [filteredCharacters, yearId, activeTab]);

    const isCouncil = decodedClassId === "Student Council";

    let headerTitle = `Class ${decodedClassId} (Year ${yearId})`;
    if (isCouncil) headerTitle = `Student Council (Year ${yearId})`;

    // Logic
    const visibleCharacters = activeTab === "students"
        ? sortedCharacters.slice(0, displayCount)
        : sortedCharacters;

    const hasMore = activeTab === "students" && sortedCharacters.length > displayCount;

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 12);
    };

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden relative flex flex-col items-center">

            {/* Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80 z-10" />
                <BackgroundSlideshow images={[
                    `/assets/year${yearId}.jpg`,
                    '/assets/year1.jpg',
                ]} interval={8000} />
            </div>

            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] pointer-events-none fixed scale-150" />

            {/* Top Bar */}
            <SiteHeader showBack={true} backLink={`/characters/${classId}`} title={headerTitle} />

            {/* Main Content */}
            <main className="container mx-auto px-4 z-10 pt-32 pb-20 max-w-7xl flex flex-col items-center justify-start min-h-[80vh]">

                <div className="w-full max-w-7xl px-4 mb-16 flex flex-col items-center justify-center">

                    <div className="mb-8">
                        <YearToggle currentYear={yearId} classId={classId} />
                    </div>

                    {!isCouncil && (
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex p-1 bg-zinc-900/80 border border-white/10 rounded-full backdrop-blur-xl relative shadow-2xl">

                                <motion.div
                                    className="absolute top-1 bottom-1 bg-white/10 rounded-full z-0 shadow-inner"
                                    layoutId="tab-indicator"
                                    initial={false}
                                    animate={{
                                        left: activeTab === "students" ? "4px" : "50%",
                                        width: "calc(50% - 4px)"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />

                                <button
                                    onClick={() => setActiveTab("students")}
                                    className={`relative z-10 px-8 py-3 text-xs font-bold font-mono uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${activeTab === "students" ? "text-white text-shadow-sm" : "text-white/40 hover:text-white/60"}`}
                                >
                                    Students
                                    <span className={`text-[9px] transition-opacity duration-300 ${activeTab === "students" ? "opacity-60" : "opacity-30"}`}>
                                        {activeTab === "students" ? sortedCharacters.length : ""}
                                    </span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("faculty")}
                                    className={`relative z-10 px-8 py-3 text-xs font-bold font-mono uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${activeTab === "faculty" ? "text-white text-shadow-sm" : "text-white/40 hover:text-white/60"}`}
                                >
                                    Faculty
                                    <span className={`text-[9px] transition-opacity duration-300 ${activeTab === "faculty" ? "opacity-60" : "opacity-30"}`}>
                                        {activeTab === "faculty" ? sortedCharacters.length : ""}
                                    </span>
                                </button>
                            </div>


                            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                    )}
                </div>


                <motion.div
                    layout
                    className="flex flex-wrap gap-6 w-full justify-center max-w-[1400px]"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {visibleCharacters.map((char, index) => (
                            <motion.div
                                key={char.id}
                                className="w-full max-w-[280px]"
                                layout
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                                }}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            >
                                <CharacterCard character={char} index={index} contextClass={decodedClassId} contextYear={yearId} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 mb-8"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="group relative px-8 py-4 bg-zinc-900/50 hover:bg-zinc-800/50 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-sm transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <span className="relative z-10 text-xs font-mono font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors flex items-center gap-3">
                                View More
                                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    </motion.div>
                )}

                {sortedCharacters.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm mt-10 p-10 w-full max-w-lg">
                        <p className="text-xl font-serif italic text-white/50">No records found.</p>
                        <p className="text-sm mt-2 opacity-30 tracking-widest uppercase">
                            {activeTab === "faculty" ? "Faculty data restricted" : "Database incomplete"}
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
