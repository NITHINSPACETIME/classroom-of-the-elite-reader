"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SiteHeader } from "@/components/ui/SiteHeader";

const classes = [
    { id: "A", name: "Class A", letter: "A", desc: "The Elite", color: "hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:border-red-500/50", bgGradient: "from-red-900/20 to-transparent", textGradient: "from-red-200 to-red-500" },
    { id: "B", name: "Class B", letter: "B", desc: "Unity", color: "hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:border-cyan-500/50", bgGradient: "from-cyan-900/20 to-transparent", textGradient: "from-cyan-200 to-cyan-500" },
    { id: "C", name: "Class C", letter: "C", desc: "Strategy", color: "hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] hover:border-purple-500/50", bgGradient: "from-purple-900/20 to-transparent", textGradient: "from-purple-200 to-purple-500" },
    { id: "D", name: "Class D", letter: "D", desc: "Defective", color: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-500/50", bgGradient: "from-blue-900/20 to-transparent", textGradient: "from-blue-200 to-blue-500" },
    { id: "Student Council", name: "Council", letter: "S", desc: "Apex", color: "hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:border-yellow-500/50", bgGradient: "from-yellow-900/20 to-transparent", textGradient: "from-yellow-200 to-yellow-500" },
];

export default function CharactersPage() {
    return (
        <div className="min-h-screen w-full bg-black text-white overflow-hidden relative flex flex-col items-center">

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80 z-10" />
                <BackgroundSlideshow images={[
                    '/assets/year2.jpg',
                    '/assets/year1.jpg',
                ]} interval={10000} />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] pointer-events-none fixed scale-150" />

            {/* Top Bar */}
            <SiteHeader showBack={true} backLink="/" />

            {/* Main Content */}
            <main className="container mx-auto px-4 z-10 pt-32 pb-20 max-w-7xl flex flex-col items-center justify-center flex-1 min-h-[90vh]">

                <h2 className="text-4xl md:text-7xl font-bold text-center mb-24 text-white font-serif tracking-tighter drop-shadow-2xl">
                    Select Class
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 w-full px-4 justify-items-center perspective-[1000px]">
                    {classes.map((cls, idx) => (
                        <Link href={`/characters/${cls.id}`} key={cls.id} className="w-full max-w-[240px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                                whileHover={{ scale: 1.05, y: -15, rotateX: 5 }}
                                className="group relative w-full aspect-[1/2] cursor-pointer"
                            >
                                {/* Card Body */}
                                <div className={`
                                    relative h-full w-full rounded-sm overflow-hidden 
                                    bg-zinc-900/80 backdrop-blur-md 
                                    border border-white/5 transition-all duration-500
                                    ${cls.color}
                                `}>

                                    {/* Gradient Shine */}
                                    <div className={`absolute inset-0 bg-gradient-to-b ${cls.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    {/* Giant Watermark Letter */}
                                    <div className="absolute -bottom-10 -right-4 font-serif font-black text-[12rem] leading-none text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                                        {cls.letter}
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center p-8 z-10">

                                        <div className="mt-8 mb-auto opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="h-1 w-1 rounded-full bg-white mb-1" />
                                            <div className="h-4 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
                                        </div>

                                        <div className="my-auto flex flex-col items-center">
                                            <h3 className={`text-3xl font-bold mb-2 font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-b ${cls.textGradient} bg-white opacity-80 group-hover:opacity-100 transition-all duration-300`}>
                                                {cls.name}
                                            </h3>
                                            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70 transition-colors">
                                                {cls.desc}
                                            </p>
                                        </div>

                                        <div className="mt-auto w-full flex justify-between items-end opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                                            <span className="text-[9px] font-mono">0{idx + 1}</span>
                                            <div className="h-[1px] w-8 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
