"use client";

import React from "react";
import { ShoppingBag, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SupportAuthorCardProps {
    novelSlug: string;
    volumeId: string;
    volumeTitle?: string;
    theme?: string;
    className?: string;
}

const SERIES_METADATA: Record<string, {
    searchName: string;
    publisherName?: string;
    publisherUrl?: string;
    accentClass: string;
    bgHoverClass: string;
}> = {
    "cote": {
        searchName: "Classroom of the Elite",
        publisherName: "Seven Seas",
        publisherUrl: "https://sevenseasentertainment.com/series/classroom-of-the-elite-light-novel/",
        accentClass: "text-red-500 dark:text-red-400 border-red-500/20 hover:border-red-500/60 focus:ring-red-500/30",
        bgHoverClass: "hover:bg-red-500/5 dark:hover:bg-red-500/10"
    },
    "tensura": {
        searchName: "That Time I Got Reincarnated as a Slime",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/that-time-i-got-reincarnated-as-a-slime-light-novel",
        accentClass: "text-cyan-500 dark:text-cyan-400 border-cyan-500/20 hover:border-cyan-500/60 focus:ring-cyan-500/30",
        bgHoverClass: "hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10"
    },
    "rezero": {
        searchName: "Re:Zero -Starting Life in Another World-",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/re-zero",
        accentClass: "text-violet-500 dark:text-violet-400 border-violet-500/20 hover:border-violet-500/60 focus:ring-violet-500/30",
        bgHoverClass: "hover:bg-violet-500/5 dark:hover:bg-violet-500/10"
    },
    "apothecary-diaries": {
        searchName: "The Apothecary Diaries",
        publisherName: "J-Novel Club",
        publisherUrl: "https://j-novel.club/series/the-apothecary-diaries",
        accentClass: "text-pink-500 dark:text-pink-400 border-pink-500/20 hover:border-pink-500/60 focus:ring-pink-500/30",
        bgHoverClass: "hover:bg-pink-500/5 dark:hover:bg-pink-500/10"
    },
    "bunny-girl": {
        searchName: "Rascal Does Not Dream",
        publisherName: "Yen Press",
        publisherUrl: "https://yenpress.com/series/rascal-does-not-dream-light-novel",
        accentClass: "text-fuchsia-500 dark:text-fuchsia-400 border-fuchsia-500/20 hover:border-fuchsia-500/60 focus:ring-fuchsia-500/30",
        bgHoverClass: "hover:bg-fuchsia-500/5 dark:hover:bg-fuchsia-500/10"
    },
    "mushoku-tensei": {
        searchName: "Mushoku Tensei: Jobless Reincarnation",
        publisherName: "Seven Seas",
        publisherUrl: "https://sevenseasentertainment.com/series/mushoku-tensei-jobless-reincarnation-light-novel/",
        accentClass: "text-emerald-500 dark:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/60 focus:ring-emerald-500/30",
        bgHoverClass: "hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10"
    },
    "orv": {
        searchName: "Omniscient Reader's Viewpoint",
        publisherName: "Ize Press",
        publisherUrl: "https://yenpress.com/series/omniscient-reader-s-viewpoint-novel",
        accentClass: "text-sky-500 dark:text-sky-400 border-sky-500/20 hover:border-sky-500/60 focus:ring-sky-500/30",
        bgHoverClass: "hover:bg-sky-500/5 dark:hover:bg-sky-500/10"
    },
    "lotm": {
        searchName: "Lord of the Mysteries",
        publisherName: "Webnovel",
        publisherUrl: "https://www.webnovel.com/book/lord-of-the-mysteries_11022733006234505",
        accentClass: "text-amber-500 dark:text-amber-400 border-amber-500/20 hover:border-amber-500/60 focus:ring-amber-500/30",
        bgHoverClass: "hover:bg-amber-500/5 dark:hover:bg-amber-500/10"
    },
    "reverend-insanity": {
        searchName: "Reverend Insanity",
        publisherName: "Webnovel",
        publisherUrl: "https://www.webnovel.com/book/reverend-insanity_10475266806001005",
        accentClass: "text-red-500 dark:text-red-400 border-red-500/20 hover:border-red-500/60 focus:ring-red-500/30",
        bgHoverClass: "hover:bg-red-500/5 dark:hover:bg-red-500/10"
    }
};

const extractVolumeNumber = (volumeId: string): string => {
    const lowerId = volumeId.toLowerCase();
    
    // Check for short story format like ss-y1-v4.5 or ss-y2-v1 or ss-v1
    const ssMatch = lowerId.match(/ss-(?:y\d+)?-?v(\d+(?:\.\d+)?)/);
    if (ssMatch) {
        return ssMatch[1];
    }

    if (lowerId.startsWith("sp")) {
        const spMatch = lowerId.match(/sp(\d+(?:\.\d+)?)/);
        if (spMatch) return spMatch[1];
        return lowerId.substring(2);
    }
    if (lowerId.startsWith("ss")) {
        const ssSingleMatch = lowerId.match(/ss(\d+(?:\.\d+)?)/);
        if (ssSingleMatch) return ssSingleMatch[1];
        return lowerId.substring(2);
    }
    
    const match = lowerId.match(/(?:y\d+)?v(\d+(?:\.\d+)?)/);
    if (match) {
        return match[1];
    }
    
    const genericMatch = lowerId.match(/[a-z]+(\d+(?:\.\d+)?)/);
    if (genericMatch) {
        return genericMatch[1];
    }
    
    if (lowerId.includes("part")) {
        const partMatch = lowerId.match(/part\s*(\d+)/);
        if (partMatch) return partMatch[1];
    }
    
    return volumeId;
};

export function SupportAuthorCard({ novelSlug, volumeId, volumeTitle, theme = "dark", className }: SupportAuthorCardProps) {
    const meta = SERIES_METADATA[novelSlug] || {
        searchName: novelSlug,
        accentClass: "text-cyan-400 border-cyan-500/20 hover:border-cyan-500/60 focus:ring-cyan-500/30",
        bgHoverClass: "hover:bg-cyan-500/10"
    };
    
    const affiliateTag = "supportauthor-21";
    const volumeNumber = extractVolumeNumber(volumeId);
    
    let searchQuery = "";
    if (novelSlug === "cote") {
        if (volumeId.includes("y2") || (volumeTitle && volumeTitle.toLowerCase().includes("2nd year"))) {
            searchQuery = `Classroom of the Elite Year 2 Vol. ${volumeNumber}`;
        } else if (volumeId.includes("y3") || (volumeTitle && volumeTitle.toLowerCase().includes("3rd year"))) {
            searchQuery = `Classroom of the Elite Year 3 Vol. ${volumeNumber}`;
        } else {
            searchQuery = `Classroom of the Elite Vol. ${volumeNumber}`;
        }
    } else if (novelSlug === "mushoku-tensei") {
        if (volumeId.startsWith("mr") || (volumeTitle && volumeTitle.toLowerCase().includes("redundancy"))) {
            searchQuery = `Mushoku Tensei Redundancy Vol. ${volumeNumber}`;
        } else {
            searchQuery = `Mushoku Tensei: Jobless Reincarnation Vol. ${volumeNumber}`;
        }
    } else if (novelSlug === "lotm") {
        if (volumeId.startsWith("coi") || (volumeTitle && volumeTitle.toLowerCase().includes("inevitable"))) {
            searchQuery = `Circle of Inevitability Vol. ${volumeNumber}`;
        } else {
            searchQuery = `Lord of the Mysteries Vol. ${volumeNumber}`;
        }
    } else {
        searchQuery = `${meta.searchName} Vol. ${volumeNumber}`;
    }

    const escapedQuery = encodeURIComponent(searchQuery);
    
    let amazonUrl = `https://www.amazon.com/s?k=${escapedQuery}+paperback+light+novel&tag=${affiliateTag}`;
    let kindleUrl = `https://www.amazon.com/s?k=${escapedQuery}+kindle+light+novel&tag=${affiliateTag}`;
    
    if (novelSlug === "reverend-insanity") {
        amazonUrl = `https://www.amazon.com/s?k=Reverend+Insanity&tag=${affiliateTag}`;
        kindleUrl = `https://www.amazon.com/s?k=Reverend+Insanity+kindle&tag=${affiliateTag}`;
    }

    let publisherUrl = meta.publisherUrl;
    if (novelSlug === "lotm") {
        if (volumeId.startsWith("coi") || (volumeTitle && volumeTitle.toLowerCase().includes("inevitable"))) {
            publisherUrl = "https://www.webnovel.com/book/lord-of-mysteries-2-circle-of-inevitability_26042456406980505";
        } else {
            publisherUrl = "https://www.webnovel.com/book/lord-of-the-mysteries_11022733006234505";
        }
    }

    const isLightBackground = theme === "light" || theme === "sepia" || theme === "cupcake" || theme === "bumblebee" || theme === "emerald" || theme === "corporate" || theme === "retro" || theme === "garden" || theme === "pastel" || theme === "fantasy" || theme === "nord";
    
    return (
        <div className={cn(
            "w-full p-5 rounded-2xl border transition-all duration-300 shadow-sm print:hidden",
            isLightBackground 
                ? "bg-stone-550/5 border-stone-200 text-stone-800" 
                : "bg-zinc-950/20 border-zinc-900/60 text-zinc-300",
            className
        )}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex flex-col gap-1 text-left">
                    <h4 className={cn(
                        "text-sm font-serif font-bold tracking-wide flex items-center gap-1.5",
                        isLightBackground ? "text-stone-900" : "text-white"
                    )}>
                        <span>📖</span> Support the Original Creator
                    </h4>
                    <p className={cn(
                        "text-[11px] leading-relaxed font-light font-sans max-w-xl",
                        isLightBackground ? "text-stone-600" : "text-zinc-400"
                    )}>
                        {novelSlug === "reverend-insanity" 
                            ? "Note: Reverend Insanity is on indefinite suspension. Amazon listings are typically unofficial/fan prints. You can read/support on Webnovel or check the community Fandom Wiki."
                            : "If you enjoyed this volume, please consider purchasing an official copy. It directly supports the authors and publishers in bringing more stories to English readers!"
                        }
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 shrink-0 select-none">
                    {/* Amazon Paperback */}
                    <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2",
                            meta.accentClass,
                            meta.bgHoverClass,
                            isLightBackground ? "bg-white" : "bg-zinc-900/40"
                        )}
                        title="Search for physical paperback on Amazon"
                    >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Buy Physical</span>
                    </a>

                    {/* Kindle / Digital */}
                    <a
                        href={kindleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2",
                            meta.accentClass,
                            meta.bgHoverClass,
                            isLightBackground ? "bg-white" : "bg-zinc-900/40"
                        )}
                        title="Search for Kindle ebook on Amazon"
                    >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Kindle Ebook</span>
                    </a>

                    {/* Official Publisher */}
                    {publisherUrl && (
                        <a
                            href={publisherUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2",
                                meta.accentClass,
                                meta.bgHoverClass,
                                isLightBackground ? "bg-white" : "bg-zinc-900/40"
                            )}
                            title={`Visit official English publisher/platform (${meta.publisherName})`}
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Publisher</span>
                        </a>
                    )}

                    {novelSlug === "reverend-insanity" && (
                        <a
                            href="https://reverend-insanity.fandom.com/wiki/Reverend_Insanity_Wiki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2",
                                meta.accentClass,
                                meta.bgHoverClass,
                                isLightBackground ? "bg-white" : "bg-zinc-900/40"
                            )}
                            title="Visit the community Fandom Wiki"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Fandom Wiki</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
