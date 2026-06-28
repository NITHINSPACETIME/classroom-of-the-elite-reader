"use client"

import { ComponentType } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Custom SVG Ko-fi Icon to match the official brand coffee mug with heart
function KofiIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Mug Outline */}
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            {/* Heart in Center */}
            <path
                d="M10 12s-1-1-2.5-1C6 11 5 12 5 13.5c0 1.5 2.5 3.5 5 4.5 2.5-1 5-3 5-4.5C15 12 14 11 12.5 11 11 11 10 12 10 12z"
                fill="currentColor"
                stroke="none"
            />
        </svg>
    )
}

export default function DonatePage() {
    return (
        <div className="min-h-screen w-full bg-[#050505] text-white relative flex flex-col items-center justify-start pt-24 pb-16 p-6 overflow-x-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_50%)] opacity-30" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_80%,#1e1b4b,transparent_40%)] opacity-30" />
            <div className="absolute inset-0 z-0 bg-[url('/assets/grid.svg')] opacity-[0.03]" />

            <div className="absolute top-6 left-6 z-20">
                <Link href="/">
                    <Button variant="ghost" className="text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Library
                    </Button>
                </Link>
            </div>

            <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <Coffee className="w-8 h-8 md:w-12 md:h-12 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                        <h1 className="text-3xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                            Support the Project
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
                        Your support goes directly into keeping this site alive, fast, and ad-free.
                        <span className="block mt-2 text-neutral-500 text-sm">Every contribution helps me maintain servers and develop new features.</span>
                    </p>
                </motion.div>

                {/* Donation Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
                    <DonationCard
                        name="Buy Me a Coffee"
                        description="Support the developer with a one-time coffee or become a member to help sustain server costs."
                        buttonText="☕ Buy me a coffee"
                        url="https://www.buymeacoffee.com/NITHINSPACETIME"
                        icon={Coffee}
                        iconColor="text-yellow-400 group-hover:text-yellow-300"
                        iconBg="bg-yellow-500/10"
                        bgGradient="from-yellow-500/10 to-yellow-500/0"
                        buttonBg="bg-[#FFDD00]"
                        buttonHoverBg="hover:bg-[#ffea30]"
                        buttonShadow="shadow-[0_4px_20px_rgba(255,221,0,0.2)] hover:shadow-[0_4px_30px_rgba(255,221,0,0.4)]"
                        delay={0.1}
                    />
                    <DonationCard
                        name="Support on Ko-fi"
                        description="Support directly with 0% platform fees. Safe, quick, and supports various local payment options."
                        buttonText="❤️ Support on Ko-fi"
                        url="https://ko-fi.com/nithinspacetime"
                        icon={KofiIcon}
                        iconColor="text-[#FF5E5B] group-hover:text-[#ff7471]"
                        iconBg="bg-[#FF5E5B]/10"
                        bgGradient="from-red-500/10 to-red-500/0"
                        buttonBg="bg-[#FF5E5B]"
                        buttonHoverBg="hover:bg-[#ff7471]"
                        buttonShadow="shadow-[0_4px_20px_rgba(255,94,91,0.2)] hover:shadow-[0_4px_30px_rgba(255,94,91,0.4)]"
                        delay={0.2}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <Link href="/">
                        <Button variant="ghost" className="group text-neutral-400 hover:text-white transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Library
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

function DonationCard({
    name,
    description,
    buttonText,
    url,
    icon: Icon,
    iconColor,
    iconBg,
    bgGradient,
    buttonBg,
    buttonHoverBg,
    buttonShadow,
    delay
}: {
    name: string,
    description: string,
    buttonText: string,
    url: string,
    icon: ComponentType<{ className?: string }>,
    iconColor: string,
    iconBg: string,
    bgGradient: string,
    buttonBg: string,
    buttonHoverBg: string,
    buttonShadow: string,
    delay: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="relative group w-full flex flex-col"
        >
            <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none",
                bgGradient
            )} />

            <div className="relative h-full flex-1 bg-[#0a0a0a] border border-white/5 group-hover:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className={cn("p-4 rounded-full mb-4 transition-colors", iconBg)}>
                    <Icon className={cn("w-6 h-6 md:w-8 md:h-8 transition-colors", iconColor)} />
                </div>

                <h3 className="text-xl font-bold mb-2 font-serif text-white">{name}</h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-1">
                    {description}
                </p>

                <a 
                    href={url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                        "w-full py-3 text-black font-extrabold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide z-10",
                        buttonBg,
                        buttonHoverBg,
                        buttonShadow,
                        "hover:scale-105 active:scale-95"
                    )}
                >
                    <span>{buttonText}</span>
                </a>
            </div>
        </motion.div>
    );
}
