"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Bitcoin, Check, Copy, Coffee, Gem, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function DonatePage() {
    return (
        <div className="min-h-screen w-full bg-[#050505] text-white relative flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 p-6 overflow-x-hidden">

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
                            Donate Using Crypto
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
                        Your donations go directly into keeping this site alive, fast, and ad-free.
                        <span className="block mt-2 text-neutral-500 text-sm">Every contribution helps me maintain servers and develop new features.</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mb-12">
                    <CryptoCard
                        name="Bitcoin"
                        symbol="BTC"
                        address="bc1qp44cn8uy8tgx0lwwm3lwkzvgjq4vhmtazvmxhm"
                        icon={Bitcoin}
                        colorClass="text-orange-500 group-hover:text-orange-400"
                        bgGradient="from-orange-500/10 to-orange-500/0"
                        delay={0.1}
                    />
                    <CryptoCard
                        name="Ethereum"
                        symbol="ETH"
                        address="0x5786680d9Db44E7f9eD7F912193900E40FA3866F"
                        icon={Gem}
                        colorClass="text-indigo-400 group-hover:text-indigo-300"
                        bgGradient="from-indigo-500/10 to-indigo-500/0"
                        delay={0.2}
                    />
                    <CryptoCard
                        name="Solana"
                        symbol="SOL"
                        address="CCDEcGh984WFPk51tY3mzCx1setaYmveheaa9gsPbzJ2"
                        icon={Zap}
                        colorClass="text-emerald-400 group-hover:text-emerald-300"
                        bgGradient="from-emerald-500/10 to-emerald-500/0"
                        delay={0.3}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
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

function CryptoCard({
    name,
    symbol,
    address,
    icon: Icon,
    colorClass,
    bgGradient,
    delay
}: {
    name: string,
    symbol: string,
    address: string,
    icon: any,
    colorClass: string,
    bgGradient: string,
    delay: number
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="relative group cursor-pointer"
            onClick={handleCopy}
        >
            <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                bgGradient
            )} />

            <div className="relative h-full bg-[#0a0a0a] border border-white/5 group-hover:border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">

                <div className={cn("p-4 rounded-full bg-white/5 mb-4 transition-colors", colorClass.replace('text-', 'bg-').replace('500', '500/10').replace('400', '400/10'))}>
                    <Icon className={cn("w-6 h-6 md:w-8 md:h-8 transition-colors", colorClass)} />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-1">{name}</h3>
                <span className="text-xs font-mono text-neutral-500 mb-4 md:mb-6 bg-white/5 px-2 py-1 rounded">{symbol}</span>

                <div className="w-full bg-black/50 rounded-lg p-3 border border-white/5 flex items-center justify-between gap-2 md:gap-3 group-hover:border-white/10 transition-colors">
                    <code className="text-[10px] md:text-xs text-neutral-400 font-mono break-all text-left line-clamp-1">
                        {address.slice(0, 10)}...{address.slice(-10)}
                    </code>
                    <div className="shrink-0 text-neutral-500">
                        {copied ? (
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                        ) : (
                            <Copy className="w-3 h-3 md:w-4 md:h-4 group-hover:text-white transition-colors" />
                        )}
                    </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={cn("text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded-full bg-white/5 backdrop-blur-sm", copied ? "text-green-500" : "text-neutral-500")}>
                        {copied ? "Copied!" : "Click to Copy"}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
