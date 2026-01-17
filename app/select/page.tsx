"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SiteHeader } from "@/components/ui/SiteHeader";

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
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden overflow-y-auto relative flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 pb-12">

            <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                    src="/assets/bg-slide-2.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 blur-sm"
                />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/grid.svg')] mix-blend-overlay pointer-events-none fixed" />

            {/* Top Bar */}
            <SiteHeader showBack={true} backLink="/" />

            <div className="z-30 container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
                >
                    {selections.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group relative cursor-pointer w-full max-w-[280px]"
                        >
                            <Link href={item.id === "year-1" ? "/select/year-1" : item.id === "year-2" ? "/select/year-2" : item.id === "year-3" ? "/select/year-3" : "/reader"}>
                                {/* Card Container */}
                                <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                                    {item.image ? (
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                                    <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col items-center justify-end h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                                        <h3 className="font-serif text-2xl font-bold text-white tracking-wider mb-2 drop-shadow-md group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-primary/50 group-hover:w-24 transition-all duration-500" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
