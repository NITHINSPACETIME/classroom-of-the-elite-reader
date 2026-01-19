"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";

const classes = [
    { id: "A", name: "Class A", letter: "A", desc: "The Elite", color: "hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:border-red-500/50", bgGradient: "from-red-900/20 to-transparent", textGradient: "from-red-200 to-red-500", inProgress: true },
    { id: "B", name: "Class B", letter: "B", desc: "Unity", color: "hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:border-cyan-500/50", bgGradient: "from-cyan-900/20 to-transparent", textGradient: "from-cyan-200 to-cyan-500", inProgress: true },
    { id: "C", name: "Class C", letter: "C", desc: "Strategy", color: "hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] hover:border-purple-500/50", bgGradient: "from-purple-900/20 to-transparent", textGradient: "from-purple-200 to-purple-500" },
    { id: "D", name: "Class D", letter: "D", desc: "Defective", color: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-500/50", bgGradient: "from-blue-900/20 to-transparent", textGradient: "from-blue-200 to-blue-500" },
    { id: "Student Council", name: "Council", letter: "S", desc: "Apex", color: "hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:border-yellow-500/50", bgGradient: "from-yellow-900/20 to-transparent", textGradient: "from-yellow-200 to-yellow-500", inProgress: true },
];

export default function CharactersPage() {
    return (
        <div className="h-screen w-full bg-black text-white overflow-hidden relative flex flex-col items-center">


            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80 z-10" />
                <BackgroundSlideshow images={[
                    '/assets/year2.jpg',
                    '/assets/year1.jpg',
                ]} interval={10000} />
            </div>


            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] pointer-events-none fixed scale-150" />

            {/* Top Bar */}
            <SiteHeader showBack={true} backLink="/" />

            {/* Main Content */}
            <main className="container mx-auto px-4 z-10 flex flex-col items-center justify-center flex-1 h-full max-h-screen">

                <h2 className="text-4xl md:text-7xl font-bold text-center mb-8 md:mb-12 text-white font-serif tracking-tighter drop-shadow-2xl">
                    Select Class
                </h2>

                <HorizontalCarousel
                    scrollContainerClassName="px-[17.5vw] md:px-[30vw]"
                    items={classes}
                    keyExtractor={(cls) => cls.id}
                    renderItem={(cls, isActive) => (
                        <Link
                            href={cls.inProgress ? "#" : `/characters/${cls.id}`}
                            className={`block transition-all duration-500 rounded-sm transform ${isActive ? 'scale-105 z-10 brightness-110' : 'scale-90 opacity-60 brightness-75 hover:opacity-100 hover:scale-95'} w-[55vw] max-w-[280px] md:w-[240px] md:max-w-none ${cls.inProgress ? 'cursor-not-allowed' : ''}`}
                            onClick={(e) => cls.inProgress && e.preventDefault()}
                        >
                            <motion.div
                                layoutId={`card-${cls.id}`}
                                className={`group relative w-full aspect-[9/16] ${cls.inProgress ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                {/* Card Body */}
                                <div className={`
                                    relative h-full w-full rounded-sm overflow-hidden 
                                    bg-zinc-900/80 backdrop-blur-md 
                                    border transition-all duration-500
                                    ${isActive ? 'border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'border-white/5'}
                                    ${cls.color}
                                `}>

                                    {/* In Progress Overlay */}
                                    {cls.inProgress && (
                                        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                                            <div className="bg-black/80 px-4 py-2 border border-white/10 rounded-lg transform -rotate-12 shadow-2xl backdrop-blur-md">
                                                <span className="text-xs font-bold tracking-[0.2em] text-white/50 whitespace-nowrap">
                                                    IN PROGRESS
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className={`absolute inset-0 bg-gradient-to-b ${cls.bgGradient} transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />


                                    <div className={`absolute -bottom-10 -right-4 font-serif font-black text-[12rem] leading-none transition-colors duration-500 select-none ${isActive ? 'text-white/10' : 'text-white/5 group-hover:text-white/10'}`}>
                                        {cls.letter}
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center p-8 z-10">

                                        <div className={`mt-8 mb-auto transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}>
                                            <div className="h-1 w-1 rounded-full bg-white mb-1" />
                                            <div className="h-4 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
                                        </div>

                                        <div className="my-auto flex flex-col items-center">
                                            <h3 className={`text-3xl font-bold mb-2 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b ${cls.textGradient} bg-white transition-all duration-300 ${isActive ? 'opacity-100 scale-105' : 'opacity-80 group-hover:opacity-100'}`}>
                                                {cls.name}
                                            </h3>
                                            <p className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-colors ${isActive ? 'text-white/70' : 'text-white/40 group-hover:text-white/70'}`}>
                                                {cls.desc}
                                            </p>
                                        </div>

                                        <div className={`mt-auto w-full flex justify-between items-end transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-20 group-hover:opacity-60'}`}>
                                            <span className="text-[9px] font-mono">0{classes.indexOf(cls) + 1}</span>
                                            <div className="h-[1px] w-8 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )}
                />
            </main>
        </div>
    );
}
