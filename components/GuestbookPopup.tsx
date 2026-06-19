"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Loader2, X } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface GuestbookEntry {
    id: number
    name: string
    message: string
    created_at: string
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

    const visible = pathname === '/' || pathname === '/select' || pathname === '/cote/select'

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

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!open && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={handleOpen}
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-zinc-950 border border-amber-400/40 shadow-[0_4px_24px_rgba(217,119,6,0.35)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-105 group cursor-pointer"
                        aria-label="Open Guestbook"
                    >
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-[-6deg] transition-transform text-zinc-950" />
                        {count > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white text-[9px] font-mono font-bold px-1.5 border border-red-500/40 shadow-[0_0_10px_rgba(220,38,38,0.6)]">
                                {count > 99 ? '99+' : count}
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
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
                        className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-md bg-[#0c0907] border-l border-amber-900/30 shadow-[-12px_0_50px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden select-text"
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
        </>
    )
}
