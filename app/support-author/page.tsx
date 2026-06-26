"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, BookOpen, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NovelSupportData {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    publisherName: string;
    publisherUrl: string;
    paperbackUrl?: string;
    kindleUrl?: string;
    isSuspended?: boolean;
    suspensionText?: string;
    colorTheme: string;
}

const SUPPORT_NOVELS: NovelSupportData[] = [
    {
        id: "cote",
        title: "Classroom of the Elite",
        author: "Syougo Kinugasa",
        coverImage: "/assets/y1v1.jpg",
        publisherName: "Seven Seas",
        publisherUrl: "https://sevenseasentertainment.com/series/classroom-of-the-elite-light-novel/",
        paperbackUrl: "https://www.amazon.com/s?k=Classroom+of+the+Elite+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Classroom+of+the+Elite+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-red-500/20 hover:border-red-500/50 shadow-red-950/10 text-red-400 hover:bg-red-500/5 focus:ring-red-500/30"
    },
    {
        id: "tensura",
        title: "That Time I Got Reincarnated as a Slime",
        author: "Fuse",
        coverImage: "/assets/images/tensura/v1/cover.jpg",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/that-time-i-got-reincarnated-as-a-slime-light-novel",
        paperbackUrl: "https://www.amazon.com/s?k=That+Time+I+Got+Reincarnated+as+a+Slime+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=That+Time+I+Got+Reincarnated+as+a+Slime+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-cyan-500/20 hover:border-cyan-500/50 shadow-cyan-950/10 text-cyan-400 hover:bg-cyan-500/5 focus:ring-cyan-500/30"
    },
    {
        id: "rezero",
        title: "Re:Zero -Starting Life in Another World-",
        author: "Tappei Nagatsuki",
        coverImage: "/assets/images/rezero/v1/cover.jpg",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/re-zero-starting-life-in-another-world",
        paperbackUrl: "https://www.amazon.com/s?k=Re%3AZero+-Starting+Life+in+Another+World-+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Re%3AZero+-Starting+Life+in+Another+World-+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-violet-500/20 hover:border-violet-500/50 shadow-violet-950/10 text-violet-400 hover:bg-violet-500/5 focus:ring-violet-500/30"
    },
    {
        id: "apothecary-diaries",
        title: "The Apothecary Diaries",
        author: "Natsu Hyuuga",
        coverImage: "/assets/images/apothecary-diaries/ad1/cover.jpg",
        publisherName: "J-Novel Club",
        publisherUrl: "https://j-novel.club/series/the-apothecary-diaries",
        paperbackUrl: "https://www.amazon.com/s?k=The+Apothecary+Diaries+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=The+Apothecary+Diaries+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-pink-500/20 hover:border-pink-500/50 shadow-pink-950/10 text-pink-400 hover:bg-pink-500/5 focus:ring-pink-500/30"
    },
    {
        id: "bunny-girl",
        title: "Rascal Does Not Dream",
        author: "Hajime Kamoshida",
        coverImage: "/assets/images/bunny-girl/v1/cover.jpg",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/rascal-does-not-dream-light-novel",
        paperbackUrl: "https://www.amazon.com/s?k=Rascal+Does+Not+Dream+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Rascal+Does+Not+Dream+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-fuchsia-500/20 hover:border-fuchsia-500/50 shadow-fuchsia-950/10 text-fuchsia-400 hover:bg-fuchsia-500/5 focus:ring-fuchsia-500/30"
    },
    {
        id: "mushoku-tensei",
        title: "Mushoku Tensei: Jobless Reincarnation",
        author: "Rifujin na Magonote",
        coverImage: "/assets/images/mushoku-tensei/v1/CoverDesign.jpg",
        publisherName: "Seven Seas",
        publisherUrl: "https://sevenseasentertainment.com/series/mushoku-tensei-jobless-reincarnation-light-novel/",
        paperbackUrl: "https://www.amazon.com/s?k=Mushoku+Tensei%3A+Jobless+Reincarnation+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Mushoku+Tensei%3A+Jobless+Reincarnation+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-950/10 text-emerald-400 hover:bg-emerald-500/5 focus:ring-emerald-500/30"
    },
    {
        id: "orv",
        title: "Omniscient Reader's Viewpoint",
        author: "sing N song",
        coverImage: "/assets/orv/covers/orv.webp",
        publisherName: "Ize Press",
        publisherUrl: "https://yenpress.com/series/omniscient-reader-s-viewpoint-novel",
        paperbackUrl: "https://www.amazon.com/s?k=Omniscient+Reader%27s+Viewpoint+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Omniscient+Reader%27s+Viewpoint+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-sky-500/20 hover:border-sky-500/50 shadow-sky-950/10 text-sky-400 hover:bg-sky-500/5 focus:ring-sky-500/30"
    },
    {
        id: "lotm",
        title: "Lord of the Mysteries",
        author: "Cuttlefish That Loves Diving",
        coverImage: "/assets/images/lotm/web-lotm-cover.jpg",
        publisherName: "Webnovel",
        publisherUrl: "https://www.webnovel.com/book/lord-of-the-mysteries_11022733006234505",
        paperbackUrl: "https://www.amazon.com/s?k=Lord+of+the+Mysteries+Vol.+1+paperback+light+novel&tag=supportauthor-21",
        kindleUrl: "https://www.amazon.com/s?k=Lord+of+the+Mysteries+Vol.+1+kindle+light+novel&tag=supportauthor-21",
        colorTheme: "border-amber-500/20 hover:border-amber-500/50 shadow-amber-950/10 text-amber-400 hover:bg-amber-500/5 focus:ring-amber-500/30"
    },
    {
        id: "reverend-insanity",
        title: "Reverend Insanity",
        author: "Gu Zhen Ren",
        coverImage: "/assets/images/reverend-insanity/cover.jpg",
        publisherName: "Webnovel",
        publisherUrl: "https://www.webnovel.com/book/reverend-insanity_7996858406002505",
        paperbackUrl: "https://www.amazon.com/Zhen-Ren-REVEREND-INSANITY-Book/dp/B0D6LRRKYG?dib=eyJ2IjoiMSJ9.xvgQ0uTOvKztTb83u0VCGnGTUhltLmm--uSAlGkOfYbxpIu1EsQvVWxQagzyzowoTHB8bMdUZF2q4HxXTp0obspYxIN7cd0Mrb8Z6FzlKtw.KLUsrIUfSbBW3HnBU0f5pAKXfvd4DBiyhltiWcloHuo&dib_tag=se&keywords=Reverend+Insanity&qid=1782505062&sr=8-5&tag=supportauthor-21",
        isSuspended: true,
        suspensionText: "Reverend Insanity is on indefinite suspension due to censorship. Official digital/print editions are unavailable. Paperback link points to an unofficial/fan print listing.",
        colorTheme: "border-red-500/20 hover:border-red-500/50 shadow-red-950/10 text-red-400 hover:bg-red-500/5 focus:ring-red-500/30"
    }
];

export default function SupportAuthorPage() {
    return (
        <div className="min-h-screen w-full bg-[#030206] text-white relative flex flex-col items-center justify-start pt-24 pb-16 px-4 md:px-8 overflow-x-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#311042,transparent_55%)] opacity-40 fixed pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_80%,#091e3a,transparent_45%)] opacity-35 fixed pointer-events-none" />
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/assets/grid.svg')] mix-blend-overlay fixed pointer-events-none" />

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-20">
                <Link href="/">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Library
                    </Button>
                </Link>
            </div>

            <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-pink-500/20 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]" />
                        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-400">
                            Support the Authors
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans px-4">
                        This site is created solely as a promotional showcase to introduce readers to these incredible light novels. 
                        If you enjoy these stories, please support the original creators and publishers by purchasing an official copy.
                    </p>
                </motion.div>

                {/* Novels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {SUPPORT_NOVELS.map((novel, index) => (
                        <motion.div
                            key={novel.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={cn(
                                "bg-zinc-950/40 backdrop-blur-md rounded-2xl border p-5 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                                novel.colorTheme.split(" ")[0],
                                novel.colorTheme.split(" ")[1]
                            )}
                        >
                            <div className="flex gap-4 items-start mb-5">
                                {/* Cover Image */}
                                <div className="w-[85px] aspect-[2/3] shrink-0 rounded-lg overflow-hidden border border-white/5 shadow-md relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        src={novel.coverImage} 
                                        alt={novel.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Details */}
                                <div className="text-left flex flex-col gap-1 min-w-0">
                                    <h3 className="font-serif font-bold text-base text-white tracking-wide truncate" title={novel.title}>
                                        {novel.title}
                                    </h3>
                                    <span className="text-xs text-zinc-500 font-sans tracking-wide truncate">
                                        By {novel.author}
                                    </span>
                                    <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase mt-2">
                                        Publisher: {novel.publisherName}
                                    </span>
                                </div>
                            </div>

                            {/* Info or Action Buttons */}
                            <div className="flex flex-col gap-2.5 mt-auto">
                                {novel.isSuspended && (
                                    <p className="text-[10px] leading-relaxed text-zinc-500 italic text-left bg-black/40 border border-white/5 p-3 rounded-xl">
                                        {novel.suspensionText}
                                    </p>
                                )}

                                <div className={cn(
                                    "grid gap-2",
                                    novel.paperbackUrl && novel.kindleUrl ? "grid-cols-2" : "grid-cols-1"
                                )}>
                                    {novel.paperbackUrl && (
                                        <a
                                            href={novel.paperbackUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl border bg-zinc-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                                                novel.colorTheme.split(" ")[3],
                                                novel.colorTheme.split(" ")[4]
                                            )}
                                        >
                                            <ShoppingBag className="w-3.5 h-3.5" />
                                            <span>Paperback</span>
                                        </a>
                                    )}
                                    {novel.kindleUrl && (
                                        <a
                                            href={novel.kindleUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl border bg-zinc-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                                                novel.colorTheme.split(" ")[3],
                                                novel.colorTheme.split(" ")[4]
                                            )}
                                        >
                                            <BookOpen className="w-3.5 h-3.5" />
                                            <span>Kindle</span>
                                        </a>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <a
                                        href={novel.publisherUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold rounded-xl border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                                            novel.isSuspended 
                                                ? "border-red-500/20 text-red-400 hover:bg-red-500/5" 
                                                : "border-white/10 text-white hover:bg-white/5"
                                        )}
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span>{novel.isSuspended ? "Visit Official Publisher" : "Visit Official Publisher"}</span>
                                    </a>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
