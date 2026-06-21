"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { SiteHeader } from "@/components/ui/SiteHeader";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";

import { volumes as y1Volumes } from "@/data/year1";
import { volumes as y2Volumes } from "@/data/year2";
import { volumes as y3Volumes } from "@/data/year3";

const selections = [
    {
        id: "year-1",
        title: "Year 1",
        image: "/assets/year1.jpg"
    },
    {
        id: "year-2",
        title: "Year 2",
        image: "/assets/year2.jpg"
    },
    {
        id: "year-3",
        title: "Year 3",
        image: "/assets/year3.jpg"
    }
];

export default function SelectPageClient() {
    const [progress, setProgress] = useState<Record<string, number>>({
        "year-1": 0,
        "year-2": 0,
        "year-3": 0
    });

    useEffect(() => {
        const readData = localStorage.getItem("cote-read-chapters");
        if (readData) {
            try {
                const readMap = JSON.parse(readData);
                
                const countRead = (vols: any[]) => {
                    let total = 0;
                    let read = 0;
                    vols.forEach(v => {
                        if (v.chapters && !v.inProgress) {
                            total += v.chapters.length;
                            v.chapters.forEach((_: any, idx: number) => {
                                if (readMap[`${v.id}-${idx + 1}`]) {
                                    read++;
                                }
                            });
                        }
                    });
                    return { total, read };
                };

                const y1 = countRead(y1Volumes);
                const y2 = countRead(y2Volumes);
                const y3 = countRead(y3Volumes);

                setProgress({
                    "year-1": y1.total > 0 ? Math.round((y1.read / y1.total) * 100) : 0,
                    "year-2": y2.total > 0 ? Math.round((y2.read / y2.total) * 100) : 0,
                    "year-3": y3.total > 0 ? Math.round((y3.read / y3.total) * 100) : 0
                });
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    return (
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden overflow-y-auto relative flex flex-col items-center justify-center pb-12">

            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <Image
                    src="/assets/bg-slide-2.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-40 blur-sm"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/grid.svg')] mix-blend-overlay pointer-events-none fixed" />

            {/* Top Bar */}
            <SiteHeader showBack={true} backLink="/" />

            <div className="z-30 container mx-auto px-4 max-w-5xl">
                <HorizontalCarousel
                    scrollContainerClassName="px-[12.5vw] md:px-[30vw]"
                    items={selections}
                    keyExtractor={(item) => item.id}
                    renderItem={(item, isActive, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`group relative cursor-pointer flex-shrink-0 transition-all duration-500 rounded-xl ${isActive ? 'scale-105 z-10 brightness-110 shadow-2xl shadow-primary/20' : 'scale-90 opacity-60 brightness-75 hover:opacity-100'} w-[75vw] md:w-[280px]`}
                        >
                            <Link prefetch={false} href={item.id === "year-1" ? "/cote/select/year-1" : item.id === "year-2" ? "/cote/select/year-2" : item.id === "year-3" ? "/cote/select/year-3" : "/cote/select"} className="block w-full h-full">
                                <div className="hover-3d relative cursor-pointer w-full">
                                    {/* Card Container */}
                                    <div className={`relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900/40 border backdrop-blur-md transition-all duration-500 ${isActive ? 'border-red-500/50 shadow-[0_0_50px_rgba(220,38,38,0.3)]' : 'border-white/10 group-hover:border-red-500/30 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]'}`}>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 opacity-60" />

                                        {item.image ? (
                                            <div className="absolute inset-0">
                                                <div className="absolute inset-0 w-full h-full">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}
                                                        sizes="(max-width: 768px) 75vw, (max-width: 1200px) 33vw, 33vw"
                                                        priority={index === 0}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-4xl font-bold bg-neutral-900/50">
                                                ?
                                            </div>
                                        )}

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col items-center justify-end h-1/2 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none">
                                            <h3 className={`font-serif text-3xl font-bold tracking-widest mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-500 ${isActive ? 'text-red-500 scale-105' : 'text-white group-hover:text-red-400'}`}>
                                                {item.title}
                                            </h3>
                                            <div className={`h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-500 ${isActive ? 'w-3/4 opacity-100 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'w-1/3 opacity-30 group-hover:w-1/2 group-hover:opacity-100'}`} />
                                            
                                            {progress[item.id] > 0 && (
                                                <div className="w-full mt-4 flex flex-col items-center gap-1.5 animate-fadeIn">
                                                    <div className="flex justify-between items-center w-full text-[10px] font-mono text-zinc-400 px-1">
                                                        <span>PROGRESS</span>
                                                        <span className="text-red-500 font-bold">{progress[item.id]}%</span>
                                                    </div>
                                                    <div className="w-full h-1 bg-zinc-950/80 rounded-full overflow-hidden border border-white/5">
                                                        <div 
                                                            className="h-full bg-red-600 rounded-full transition-all duration-500 shadow-[0_0_8px_#dc2626]" 
                                                            style={{ width: `${progress[item.id]}%` }} 
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                />
            </div>
        </div>
    );
}
