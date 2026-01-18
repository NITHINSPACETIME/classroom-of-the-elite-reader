"use client"

import Link from "next/link";
import { motion } from "framer-motion";

interface YearToggleProps {
    currentYear: string;
    classId: string;
}

export function YearToggle({ currentYear, classId }: YearToggleProps) {
    const years = ["1", "2", "3"];

    return (
        <div className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-md rounded-full px-2 py-2 border border-white/10 shadow-xl overflow-hidden">
            {years.map((year) => {
                const isActive = currentYear === year;
                return (
                    <Link key={year} href={`/characters/${classId}/${year}`} className="relative">
                        {isActive && (
                            <motion.div
                                layoutId="year-active"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`
                            relative z-10 px-6 py-2 block text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300
                            ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}
                        `}>
                            Year {year}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
