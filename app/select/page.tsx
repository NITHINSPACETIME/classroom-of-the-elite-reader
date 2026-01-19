"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SiteHeader } from "@/components/ui/SiteHeader";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";

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

export default function SelectPage() {
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
                    renderItem={(item, isActive) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className={`group relative cursor-pointer flex-shrink-0 transition-all duration-500 rounded-xl ${isActive ? 'scale-105 z-10 brightness-110 shadow-2xl shadow-primary/20' : 'scale-90 opacity-60 brightness-75 hover:opacity-100 hover:scale-95'} w-[75vw] md:w-[280px]`}
                        >
                            <Link href={item.id === "year-1" ? "/select/year-1" : item.id === "year-2" ? "/select/year-2" : item.id === "year-3" ? "/select/year-3" : "/reader"} className="block w-full h-full">
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
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                />
            </div>
        </div>
    );
}
