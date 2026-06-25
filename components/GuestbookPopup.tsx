"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Loader2, X, LayoutGrid, Home, Grid, List, Plus, Maximize, Minimize, Share, PlusSquare, MessageCircle, Printer, FileDown, Bookmark } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface GuestbookEntry {
    id: number
    name: string
    message: string
    created_at: string
}

interface ThemeConfig {
    hoverBorderClass: string
    hoverShadowClass: string
    iconColorClass: string
    activeBgClass: string
    badgeBgClass: string
}

function getTheme(path: string): ThemeConfig {
    if (path.includes("/cote")) {
        return {
            hoverBorderClass: "hover:border-red-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]",
            iconColorClass: "text-red-400 group-hover:text-red-300",
            activeBgClass: "bg-red-950/80 text-red-400 border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.25)]",
            badgeBgClass: "bg-red-600 border border-red-500/30"
        }
    }
    if (path.includes("/rezero")) {
        return {
            hoverBorderClass: "hover:border-violet-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]",
            iconColorClass: "text-violet-400 group-hover:text-violet-300",
            activeBgClass: "bg-violet-950/80 text-violet-400 border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.25)]",
            badgeBgClass: "bg-violet-600 border border-violet-500/30"
        }
    }
    if (path.includes("/orv")) {
        return {
            hoverBorderClass: "hover:border-cyan-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]",
            iconColorClass: "text-cyan-400 group-hover:text-cyan-300",
            activeBgClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
            badgeBgClass: "bg-cyan-600 border border-cyan-500/30"
        }
    }
    if (path.includes("/bunny-girl")) {
        return {
            hoverBorderClass: "hover:border-purple-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]",
            iconColorClass: "text-purple-400 group-hover:text-purple-300",
            activeBgClass: "bg-purple-950/80 text-purple-400 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
            badgeBgClass: "bg-purple-600 border border-purple-500/30"
        }
    }
    if (path.includes("/apothecary-diaries")) {
        return {
            hoverBorderClass: "hover:border-pink-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]",
            iconColorClass: "text-pink-400 group-hover:text-pink-300",
            activeBgClass: "bg-[#2d0e20]/80 text-pink-400 border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.25)]",
            badgeBgClass: "bg-pink-600 border border-pink-500/30"
        }
    }
    if (path.includes("/mushoku-tensei")) {
        return {
            hoverBorderClass: "hover:border-emerald-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
            iconColorClass: "text-emerald-400 group-hover:text-emerald-300",
            activeBgClass: "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
            badgeBgClass: "bg-emerald-600 border border-emerald-500/30"
        }
    }
    if (path.includes("/reverend-insanity")) {
        return {
            hoverBorderClass: "hover:border-red-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(185,28,28,0.4)]",
            iconColorClass: "text-red-400 group-hover:text-red-300",
            activeBgClass: "bg-red-950/80 text-red-400 border border-red-500/40 shadow-[0_0_15px_rgba(185,28,28,0.25)]",
            badgeBgClass: "bg-red-600 border border-red-500/30"
        }
    }
    if (path.includes("/lotm")) {
        return {
            hoverBorderClass: "hover:border-indigo-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]",
            iconColorClass: "text-indigo-400 group-hover:text-indigo-300",
            activeBgClass: "bg-indigo-950/80 text-indigo-400 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]",
            badgeBgClass: "bg-indigo-600 border border-indigo-500/30"
        }
    }
    if (path.includes("/tensura")) {
        return {
            hoverBorderClass: "hover:border-cyan-500/50",
            hoverShadowClass: "hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]",
            iconColorClass: "text-cyan-400 group-hover:text-cyan-300",
            activeBgClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
            badgeBgClass: "bg-cyan-600 border border-cyan-500/30"
        }
    }
    return {
        hoverBorderClass: "hover:border-amber-500/50",
        hoverShadowClass: "hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]",
        iconColorClass: "text-amber-400 group-hover:text-amber-300",
        activeBgClass: "bg-amber-950/80 text-amber-400 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]",
        badgeBgClass: "bg-amber-600 border border-amber-500/30"
    }
}

function timeAgo(dateStr: string): string {
    const now = new Date()
    const date = new Date(dateStr)
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    if (seconds < 60) return 'just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    if (days < 30) return `${days}d ago`
    const months = Math.floor(days / 30)
    if (months < 12) return `${months}mo ago`
    return `${Math.floor(months / 12)}y ago`
}

const isThemeLight = (t: string) => {
    const lightThemes = [
        'light', 'sepia', 'cupcake', 'bumblebee', 'emerald', 'corporate', 
        'retro', 'cyberpunk', 'valentine', 'garden', 'lofi', 'pastel', 
        'fantasy', 'wireframe', 'cmyk', 'autumn', 'acid', 'lemonade', 
        'winter', 'nord'
    ];
    return lightThemes.includes(t);
};

export function GuestbookPopup() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [entries, setEntries] = useState<GuestbookEntry[]>([])
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [fetched, setFetched] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [count, setCount] = useState(0)
    const listRef = useRef<HTMLDivElement>(null)
    const [speedDialOpen, setSpeedDialOpen] = useState(false)
    const [readerTheme, setReaderTheme] = useState<string>("dark")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("cote-theme")
            if (saved) setReaderTheme(saved)
        }
        const handleThemeChange = (e: Event) => {
            const customEvent = e as CustomEvent<string>
            if (customEvent.detail) {
                setReaderTheme(customEvent.detail)
            }
        }
        window.addEventListener("reader-theme-changed", handleThemeChange)
        return () => window.removeEventListener("reader-theme-changed", handleThemeChange)
    }, [])

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("speed-dial-toggle", { detail: speedDialOpen }))
    }, [speedDialOpen])

    const [currentViewMode, setCurrentViewMode] = useState<"detailed" | "compact">("compact")
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [supported, setSupported] = useState(true)
    const [showToast, setShowToast] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        if (!pathname.includes("/read/")) return;
        
        const handleStateChange = (e: Event) => {
            const customEvent = e as CustomEvent<boolean>;
            setIsBookmarked(customEvent.detail);
        };
        
        window.addEventListener("reader-bookmark-state-changed", handleStateChange);
        window.dispatchEvent(new CustomEvent("reader-get-bookmark-state"));
        
        return () => {
            window.removeEventListener("reader-bookmark-state-changed", handleStateChange);
        };
    }, [pathname]);

    useEffect(() => {
        // Detect standard fullscreen support
        const hasFullscreenSupport = typeof document !== 'undefined' && 
            (document.fullscreenEnabled || 
             (document.documentElement as any).webkitRequestFullscreen || 
             (document.documentElement as any).msRequestFullscreen)
             
        if (!hasFullscreenSupport) {
            setSupported(false)
        }

        const handleFullscreenChange = () => {
            const isFull = !!document.fullscreenElement || 
                           !!(document as any).webkitFullscreenElement || 
                           !!(document as any).msFullscreenElement
            setIsFullscreen(isFull)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.addEventListener('mozfullscreenchange', handleFullscreenChange)
        document.addEventListener('MSFullscreenChange', handleFullscreenChange)

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
        }
    }, [])

    const toggleFullscreen = () => {
        if (supported) {
            if (!document.fullscreenElement) {
                const docEl = document.documentElement as any
                const requestFS = docEl.requestFullscreen || 
                                  docEl.webkitRequestFullscreen || 
                                  docEl.msRequestFullscreen
                if (requestFS) {
                    requestFS.call(docEl).catch((err: any) => {
                        console.error("Error attempting to enable fullscreen:", err)
                    })
                }
            } else {
                const exitFS = document.exitFullscreen || 
                               (document as any).webkitExitFullscreen || 
                               (document as any).msExitFullscreen
                if (exitFS) {
                    exitFS.call(document)
                }
            }
        } else {
            setShowToast(true)
        }
    }

    const triggerHapticFeedback = () => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            try {
                // 15ms light haptic tap feedback
                navigator.vibrate(15)
            } catch {
                // Ignore vibration restrictions or errors
            }
        }
    }

    useEffect(() => {
        async function fetchCount() {
            const { count } = await supabase
                .from('guestbook')
                .select('*', { count: 'exact', head: true })
            if (count !== null) setCount(count)
        }
        fetchCount()
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    useEffect(() => {
        let initialMode: "detailed" | "compact" = "detailed"
        if (typeof window !== "undefined") {
            const key = pathname.includes("/reverend-insanity") ? "reverend-insanity-view-mode" : "global-view-mode";
            const saved = localStorage.getItem(key) as "detailed" | "compact" | null
            if (saved === "detailed" || saved === "compact") {
                initialMode = saved
            } else if (window.innerWidth < 768) {
                initialMode = "compact"
            }
        }
        setCurrentViewMode(initialMode)
        setSpeedDialOpen(false)
    }, [pathname])

    useEffect(() => {
        const handleViewModeEvent = (e: Event) => {
            const customEvent = e as CustomEvent<"detailed" | "compact">
            if (customEvent.detail === "detailed" || customEvent.detail === "compact") {
                setCurrentViewMode(customEvent.detail)
            }
        }
        window.addEventListener("change-view-mode", handleViewModeEvent)
        return () => window.removeEventListener("change-view-mode", handleViewModeEvent)
    }, [])

    const toggleViewMode = (mode: "detailed" | "compact") => {
        if (typeof window !== "undefined") {
            const key = pathname.includes("/reverend-insanity") ? "reverend-insanity-view-mode" : "global-view-mode";
            localStorage.setItem(key, mode)
        }
        window.dispatchEvent(new CustomEvent("change-view-mode", { detail: mode }))
    }

    const visible = pathname === '/' || pathname.includes('/cote') || pathname.includes('/rezero') || pathname.includes('/orv') || pathname.includes('/bunny-girl') || pathname.includes('/mushoku-tensei') || pathname.includes('/lotm') || pathname.includes('/reverend-insanity') || pathname.includes('/apothecary-diaries') || pathname.includes('/tensura')

    const fetchEntries = async () => {
        if (fetched) return
        setLoading(true)
        try {
            const { data, error } = await supabase
                .from('guestbook')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(100)
            
            if (!error && data) {
                setEntries(data)
            }
        } catch {
            setError("Failed to load entries")
        } finally {
            setLoading(false)
            setFetched(true)
        }
    }

    const handleOpen = () => {
        setOpen(true)
        fetchEntries()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.trim()) return

        setSubmitting(true)
        setError("")

        try {
            const displayName = (name && name.trim().length > 0) ? name.trim().slice(0, 30) : 'Anonymous'
            
            const { data, error } = await supabase
                .from('guestbook')
                .insert({
                    name: displayName,
                    message: message.trim(),
                    created_at: new Date().toISOString()
                })
                .select()
                .single()

            if (error) {
                setError(error.message)
                return
            }

            if (data) {
                setEntries(prev => [data, ...prev])
                setCount(prev => prev + 1)
                setMessage("")
                setName("")
                listRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } catch {
            setError("Failed to submit. Try again.")
        } finally {
            setSubmitting(false)
        }
    }

    if (!visible) return null

    const theme = getTheme(pathname)
    const isReaderPage = pathname.includes("/read/")
    const isCote = pathname.includes("/cote")

    let homeLink = "/"
    let homeLabel = "Portal Home"

    if (pathname.includes("/read/")) {
        if (pathname.includes("/cote")) {
            const segments = pathname.split("/")
            const volumeId = segments[3] || ""
            if (volumeId.includes("y1") || volumeId.includes("year-1") || volumeId.includes("year1")) {
                homeLink = "/cote/select/year-1"
                homeLabel = "Year 1 Select"
            } else if (volumeId.includes("y2") || volumeId.includes("year-2") || volumeId.includes("year2")) {
                homeLink = "/cote/select/year-2"
                homeLabel = "Year 2 Select"
            } else if (volumeId.includes("y3") || volumeId.includes("year-3") || volumeId.includes("year3")) {
                homeLink = "/cote/select/year-3"
                homeLabel = "Year 3 Arc"
            } else {
                homeLink = "/cote/select"
                homeLabel = "COTE Select"
            }
        } else if (pathname.includes("/rezero")) {
            homeLink = "/rezero/select"
            homeLabel = "Re:Zero Select"
        } else if (pathname.includes("/orv")) {
            homeLink = "/orv/select"
            homeLabel = "ORV Select"
        } else if (pathname.includes("/bunny-girl")) {
            homeLink = "/bunny-girl/select"
            homeLabel = "Bunny Girl Select"
        } else if (pathname.includes("/apothecary-diaries")) {
            homeLink = "/apothecary-diaries/select"
            homeLabel = "Apothecary Select"
        } else if (pathname.includes("/mushoku-tensei")) {
            homeLink = "/mushoku-tensei/select"
            homeLabel = "Mushoku Select"
        } else if (pathname.includes("/lotm")) {
            homeLink = "/lotm/select"
            homeLabel = "LOTM Select"
        } else if (pathname.includes("/reverend-insanity")) {
            homeLink = "/reverend-insanity/select"
            homeLabel = "Reverend Insanity Select"
        } else if (pathname.includes("/tensura")) {
            homeLink = "/tensura/select"
            homeLabel = "Tensura Select"
        }
    } else if (pathname.includes("/select")) {
        homeLink = "/"
        homeLabel = "Portal Home"
    }

    const getSubButtonClass = (isActive: boolean = false) => {
        if (!isReaderPage) {
            return isActive 
                ? theme.activeBgClass 
                : `w-10 h-10 md:w-11 md:h-11 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative ${theme.hoverBorderClass}`
        }
        
        // Reader Page - Translucent styling
        if (isActive) {
            return `w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative ${theme.activeBgClass}`
        }
        
        const bgStyle = isThemeLight(readerTheme)
            ? "bg-white/60 hover:bg-white/85 text-zinc-750 border border-zinc-300"
            : "bg-black/60 hover:bg-black/85 text-zinc-300 border border-white/10"
            
        return `w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative ${theme.hoverBorderClass} ${bgStyle}`
    }

    const getSubIconClass = () => {
        if (isReaderPage && isThemeLight(readerTheme)) {
            return "w-4 h-4 md:w-5 md:h-5 text-zinc-600 group-hover/btn:text-black transition-colors"
        }
        return "w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover/btn:text-white transition-colors"
    }

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.02
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1
            }
        }
    }

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 350, damping: 22 }
        },
        closed: {
            opacity: 0,
            y: 15,
            scale: 0.85,
            transition: { duration: 0.15 }
        }
    }

    return (
        <>
            {/* Speed Dial Backdrop */}
            <AnimatePresence>
                {speedDialOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-[6px]"
                        onClick={() => setSpeedDialOpen(false)}
                    />
                )}
            </AnimatePresence>


            {/* Speed Dial Floating Menu Container */}
            <div className="fixed bottom-6 right-6 z-[80] w-12 h-12 md:w-14 md:h-14 pointer-events-auto">
                
                {/* Popout Sub-Buttons (positioned absolutely above the FAB) */}
                <AnimatePresence>
                    {speedDialOpen && !open && (
                        <motion.div
                            variants={containerVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute bottom-full right-[4px] md:right-[6px] flex flex-col items-end gap-3 mb-3"
                        >
                            {isReaderPage ? (
                                <>
                                    {/* 1. Discussion (Comments) Button */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            Discussions
                                        </span>
                                        <button
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent("reader-action-comments"))
                                                setSpeedDialOpen(false)
                                            }}
                                            className={getSubButtonClass(false)}
                                            aria-label="Open Discussions"
                                        >
                                            <MessageCircle className={getSubIconClass()} />
                                        </button>
                                    </motion.div>

                                    {/* 2. Print Button */}
                                    {isCote && (
                                        <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                            <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                                Print Chapter
                                            </span>
                                            <button
                                                onClick={() => {
                                                    window.dispatchEvent(new CustomEvent("reader-action-print"))
                                                    setSpeedDialOpen(false)
                                                }}
                                                className={getSubButtonClass(false)}
                                                aria-label="Print Chapter"
                                            >
                                                <Printer className={getSubIconClass()} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* 3. Download Button */}
                                    {isCote && (
                                        <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                            <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                                Download EPUB
                                            </span>
                                            <button
                                                onClick={() => {
                                                    window.dispatchEvent(new CustomEvent("reader-action-download"))
                                                    setSpeedDialOpen(false)
                                                }}
                                                className={getSubButtonClass(false)}
                                                aria-label="Download EPUB"
                                            >
                                                <FileDown className={getSubIconClass()} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* 4. Fullscreen Button */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                        </span>
                                        <button
                                            onClick={() => {
                                                toggleFullscreen()
                                                setSpeedDialOpen(false)
                                            }}
                                            className={getSubButtonClass(isFullscreen)}
                                            aria-label="Toggle Fullscreen"
                                        >
                                            {isFullscreen ? (
                                                <Minimize className="w-4 h-4 md:w-5 md:h-5 transition-colors" />
                                            ) : (
                                                <Maximize className={getSubIconClass()} />
                                            )}
                                        </button>
                                    </motion.div>

                                    {/* Bookmark Toggle Button */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            {isBookmarked ? "Remove Bookmark" : "Bookmark Chapter"}
                                        </span>
                                        <button
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent("reader-action-bookmark-toggle"));
                                                setSpeedDialOpen(false);
                                            }}
                                            className={getSubButtonClass(isBookmarked)}
                                            aria-label={isBookmarked ? "Remove Bookmark" : "Bookmark Chapter"}
                                        >
                                            <Bookmark className={`${getSubIconClass()} ${isBookmarked ? "fill-current" : ""}`} />
                                        </button>
                                    </motion.div>

                                    {/* 5. Portal Home / Novel Select Back Link */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            {homeLabel}
                                        </span>
                                        <a
                                            href={homeLink}
                                            onClick={() => {
                                                setTimeout(() => {
                                                    setSpeedDialOpen(false);
                                                }, 50);
                                            }}
                                            className={getSubButtonClass(false)}
                                            aria-label={homeLabel}
                                        >
                                            <Home className={getSubIconClass()} />
                                        </a>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    {/* 1. Guestbook Popup Trigger Button */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            Guestbook
                                            {count > 0 && (
                                                <span className="ml-1.5 bg-red-600 text-white text-[8px] font-mono px-1 rounded-full border border-red-500/20">
                                                    {count}
                                                </span>
                                            )}
                                        </span>
                                        <button
                                            onClick={() => {
                                                handleOpen()
                                                setSpeedDialOpen(false)
                                            }}
                                            className={`w-10 h-10 md:w-11 md:h-11 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative ${theme.hoverBorderClass}`}
                                            aria-label="Open Guestbook Panel"
                                        >
                                            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                                            {count > 0 && (
                                                <span className={`absolute -top-1 -right-1 min-w-4.5 h-4.5 flex items-center justify-center rounded-full ${theme.badgeBgClass} text-white text-[8px] font-mono font-bold px-1.5 shadow-[0_0_5px_rgba(220,38,38,0.5)]`}>
                                                    {count > 99 ? '99+' : count}
                                                </span>
                                            )}
                                        </button>
                                    </motion.div>

                                    {/* 2. Grid View Button (only shown on select pages, hidden on main COTE hub select page) */}
                                    {(pathname.includes("/select") && pathname !== "/cote/select") && (
                                        <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                            <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                                Grid View
                                            </span>
                                            <button
                                                onClick={() => {
                                                    toggleViewMode("compact")
                                                    setSpeedDialOpen(false)
                                                }}
                                                className={`w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                                                    currentViewMode === "compact"
                                                        ? theme.activeBgClass
                                                        : `bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-800 ${theme.hoverBorderClass}`
                                                }`}
                                                aria-label="Grid View"
                                            >
                                                <Grid className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${currentViewMode === "compact" ? "" : "text-zinc-400 group-hover/btn:text-white"}`} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* 3. Compact View Button (only shown on select pages, hidden on main COTE hub select page) */}
                                    {(pathname.includes("/select") && pathname !== "/cote/select") && (
                                        <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                            <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                                Compact View
                                            </span>
                                            <button
                                                onClick={() => {
                                                    toggleViewMode("detailed")
                                                    setSpeedDialOpen(false)
                                                }}
                                                className={`w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                                                    currentViewMode === "detailed"
                                                        ? theme.activeBgClass
                                                        : `bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-800 ${theme.hoverBorderClass}`
                                                }`}
                                                aria-label="Compact View"
                                            >
                                                <List className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${currentViewMode === "detailed" ? "" : "text-zinc-400 group-hover/btn:text-white"}`} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* 4. Fullscreen Toggle Button */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                        </span>
                                        <button
                                            onClick={() => {
                                                toggleFullscreen()
                                                setSpeedDialOpen(false)
                                            }}
                                            className={`w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                                                isFullscreen 
                                                    ? theme.activeBgClass 
                                                    : `bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:bg-zinc-800 ${theme.hoverBorderClass}`
                                            }`}
                                            aria-label="Toggle Fullscreen"
                                        >
                                            {isFullscreen ? (
                                                <Minimize className="w-4 h-4 md:w-5 md:h-5 transition-colors" />
                                            ) : (
                                                <Maximize className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                                            )}
                                        </button>
                                    </motion.div>

                                    {/* 5. Portal Home / Novel Select Back Link */}
                                    <motion.div variants={itemVariants} className="flex items-center justify-end relative group/btn">
                                        <span className="absolute right-full mr-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-zinc-950 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-800 pointer-events-none select-none shadow-xl whitespace-nowrap z-50">
                                            {homeLabel}
                                        </span>
                                        <a
                                            href={homeLink}
                                            onClick={() => {
                                                setTimeout(() => {
                                                    setSpeedDialOpen(false);
                                                }, 50);
                                            }}
                                            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center shadow-lg hover:shadow-white/5"
                                            aria-label={homeLabel}
                                        >
                                            <Home className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                                        </a>
                                    </motion.div>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main FAB Trigger Button */}
                <AnimatePresence>
                    {!open && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            onClick={() => {
                                triggerHapticFeedback()
                                if (pathname === "/") {
                                    handleOpen()
                                } else {
                                    setSpeedDialOpen(prev => !prev)
                                }
                            }}
                            className={`w-full h-full rounded-full transition-all duration-300 hover:scale-105 group cursor-pointer flex items-center justify-center shadow-2xl ${theme.hoverBorderClass} ${theme.hoverShadowClass} ${
                                isReaderPage
                                    ? (isThemeLight(readerTheme)
                                        ? "bg-white/50 border border-zinc-300 text-zinc-850 hover:bg-white/70"
                                        : "bg-black/50 border border-white/10 text-zinc-300 hover:bg-black/70")
                                    : "bg-zinc-950/90 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 backdrop-blur-md"
                            }`}
                            aria-label="Toggle Navigation Menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={speedDialOpen ? "open" : "closed"}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex items-center justify-center"
                                >
                                    {pathname === "/" ? (
                                        <BookOpen className={`w-5 h-5 md:w-6 md:h-6 group-hover:rotate-[-6deg] transition-transform ${theme.iconColorClass}`} />
                                    ) : speedDialOpen ? (
                                        <X className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${
                                            isReaderPage && isThemeLight(readerTheme)
                                                ? "text-zinc-700 group-hover:text-black"
                                                : "text-zinc-350 group-hover:text-white"
                                        }`} />
                                    ) : (
                                        <Plus className={`w-5 h-5 md:w-6 md:h-6 transition-transform ${theme.iconColorClass}`} />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                            {/* Signatures count badge, ONLY shown on landing page FAB */}
                            {pathname === "/" && count > 0 && (
                                <span className={`absolute -top-1 -right-1 min-w-5 h-5 flex items-center justify-center rounded-full ${theme.badgeBgClass} text-white text-[8px] font-mono font-bold px-1.5 shadow-[0_0_5px_rgba(220,38,38,0.5)] z-10`}>
                                    {count > 99 ? '99+' : count}
                                </span>
                            )}
                        </motion.button>

                    )}
                </AnimatePresence>
            </div>


            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-md bg-[#0c0907] border-l border-amber-900/30 shadow-[-12px_0_50px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden select-text"
                    >
                        {/* Glowing Background Light */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-amber-600/10 via-transparent to-transparent blur-[100px] pointer-events-none select-none z-0" />

                        {/* Header */}
                        <div className="relative z-10 flex flex-col px-6 pt-6 pb-4 border-b border-amber-900/20 shrink-0 bg-gradient-to-b from-black/40 to-transparent">
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-2xl font-serif font-bold text-zinc-100 tracking-wide uppercase">
                                        Guestbook
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1.5 rounded-xl hover:bg-white/5 text-zinc-500 hover:text-zinc-200 transition-all cursor-pointer hover:rotate-90 duration-300"
                                    aria-label="Close Guestbook"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-zinc-400/80 font-serif italic text-xs mt-1.5 leading-relaxed">
                                Leave a message to show you were here.
                            </p>
                            
                            <div className="flex justify-between items-center mt-3 pt-2 border-t border-double border-amber-900/20 text-[10px] font-mono tracking-widest text-zinc-400/60 uppercase">
                                <span>Signatures</span>
                                <span className="text-amber-500/80 font-semibold">{count} entries</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="relative z-10 px-6 py-5 border-b border-amber-900/20 shrink-0 bg-black/20">
                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Sign your name..."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        maxLength={30}
                                        className="w-full bg-transparent border-b border-zinc-700/60 focus:border-amber-500/80 py-2 text-sm text-zinc-200 placeholder:text-zinc-500/60 placeholder:italic focus:outline-none transition-all duration-300 font-serif"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Write your message..."
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        maxLength={500}
                                        rows={3}
                                        required
                                        className="w-full bg-transparent border-b border-zinc-700/60 focus:border-amber-500/80 py-2 text-sm text-zinc-200 placeholder:text-zinc-500/60 placeholder:italic focus:outline-none transition-all duration-300 resize-none font-serif leading-relaxed"
                                    />
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <span className="text-[10px] text-zinc-500 font-mono tracking-wide">
                                        {message.length} / 500 characters
                                    </span>
                                    
                                    <button
                                        type="submit"
                                        disabled={submitting || !message.trim()}
                                        className="px-6 py-2 bg-amber-950/40 border border-amber-600/50 hover:bg-amber-600/10 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-serif italic text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer rounded active:scale-[0.98]"
                                    >
                                        {submitting ? "Signing..." : "Sign Guestbook"}
                                    </button>
                                </div>
                                {error && (
                                    <div className="text-xs font-serif italic text-red-400 bg-red-950/10 border border-red-900/20 px-3 py-2 rounded mt-2">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </form>

                        {/* Entries list */}
                        <div ref={listRef} className="relative z-10 flex-1 overflow-y-auto px-6 py-4 space-y-2 scroll-smooth divide-y divide-amber-900/10">
                            {loading ? (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="w-5 h-5 animate-spin text-amber-500/50" />
                                </div>
                            ) : entries.length === 0 ? (
                                <div className="text-center py-20 text-zinc-500 font-serif italic">
                                    <p className="text-sm">No messages yet. Be the first to sign the guestbook.</p>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {entries.map((entry, i) => (
                                        <motion.div
                                            key={entry.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 0.35, delay: i < 8 ? i * 0.04 : 0 }}
                                            className="group py-5 first:pt-2 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-baseline gap-4 mb-2">
                                                <span className="font-serif text-sm font-bold text-amber-300/90 italic group-hover:text-amber-250 transition-colors">
                                                    {entry.name}
                                                </span>
                                                <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase tabular-nums">
                                                    {timeAgo(entry.created_at)}
                                                </span>
                                            </div>
                                            <p className="text-zinc-300 leading-relaxed font-serif text-sm pl-4 border-l border-zinc-850 group-hover:border-amber-500/40 group-hover:text-zinc-200 transition-all duration-300 whitespace-pre-wrap break-words">
                                                &ldquo;{entry.message}&rdquo;
                                            </p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* iOS / Safari "Add to Home Screen" PWA installation guide toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[95] p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 text-zinc-200 shadow-[0_10px_45px_rgba(0,0,0,0.8)] ring-1 ring-white/10 flex flex-col gap-3"
                    >
                        <div className="flex items-start justify-between">
                            <h4 className="text-sm font-semibold text-white font-serif tracking-wider uppercase">
                                Fullscreen on iOS / Safari
                            </h4>
                            <button 
                                onClick={() => setShowToast(false)}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                            iOS Safari does not support standard fullscreen. To enjoy a native, borderless fullscreen experience:
                        </p>
                        <div className="flex flex-col gap-2 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/40 text-xs">
                            <div className="flex items-center gap-3 text-zinc-300">
                                <Share className="w-4 h-4 text-amber-500 shrink-0" />
                                <span>1. Tap the <strong className="text-white">Share</strong> button in Safari.</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300">
                                <PlusSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>2. Scroll down and select <strong className="text-white">Add to Home Screen</strong>.</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowToast(false)}
                            className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-semibold text-white transition-all duration-200"
                        >
                            Got it
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
