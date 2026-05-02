"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Send, PenLine, Loader2, X } from "lucide-react"
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

    const visible = pathname === '/' || pathname === '/select'

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
                        className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-700/90 hover:bg-amber-600 text-white shadow-[0_4px_24px_rgba(180,120,40,0.4)] hover:shadow-[0_4px_32px_rgba(180,120,40,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label="Open Guestbook"
                    >
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-[-6deg] transition-transform" />
                        {count > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1 shadow-[0_2px_8px_rgba(239,68,68,0.5)]">
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
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
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
                        className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-md bg-[#0a0908] border-l border-amber-900/20 shadow-[-8px_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 shrink-0">
                            <div className="flex items-center gap-2.5">
                                <BookOpen className="w-5 h-5 text-amber-500/80" />
                                <h2 className="text-lg font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-100/70">
                                    Guestbook
                                </h2>
                                <span className="text-[10px] text-neutral-600 bg-white/5 px-1.5 py-0.5 rounded-full tabular-nums">
                                    {entries.length}
                                </span>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="p-2 rounded-lg hover:bg-white/5 text-neutral-500 hover:text-white transition-colors"
                                aria-label="Close Guestbook"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="px-5 py-4 border-b border-white/5 shrink-0">
                            <div className="flex items-center gap-2 mb-3 text-amber-600/60">
                                <PenLine className="w-3.5 h-3.5" />
                                <span className="text-[10px] uppercase tracking-widest font-medium">Sign the book</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Your name (optional)"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                maxLength={30}
                                className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-3.5 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-700/40 transition-all mb-2.5"
                            />

                            <div className="flex gap-2.5">
                                <textarea
                                    placeholder="Write something..."
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    maxLength={500}
                                    rows={2}
                                    required
                                    className="flex-1 bg-white/[0.03] border border-white/5 rounded-lg px-3.5 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-700/40 transition-all resize-none font-serif leading-relaxed"
                                />
                                <button
                                    type="submit"
                                    disabled={submitting || !message.trim()}
                                    className="self-end px-4 py-2 bg-amber-700/80 hover:bg-amber-600/90 text-white rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_16px_rgba(180,120,40,0.15)] hover:shadow-[0_0_24px_rgba(180,120,40,0.25)] shrink-0"
                                >
                                    {submitting ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Send className="w-4 h-4" />
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-1.5">
                                <span className="text-[10px] text-neutral-600">{message.length}/500</span>
                                {error && <span className="text-[10px] text-red-400">{error}</span>}
                            </div>
                        </form>

                        {/* Entries list */}
                        <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-3 space-y-2.5">
                            {loading ? (
                                <div className="flex items-center justify-center py-12">
                                    <Loader2 className="w-5 h-5 animate-spin text-amber-600/60" />
                                </div>
                            ) : entries.length === 0 ? (
                                <div className="text-center py-12 text-neutral-600">
                                    <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-30" />
                                    <p className="text-xs">No entries yet. Be the first!</p>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {entries.map((entry, i) => (
                                        <motion.div
                                            key={entry.id}
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.25, delay: i < 8 ? i * 0.03 : 0 }}
                                            className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-amber-800/20 rounded-xl px-4 py-3 transition-all duration-300"
                                        >
                                            <div className="absolute left-0 top-2.5 bottom-2.5 w-[2px] rounded-full bg-amber-700/20 group-hover:bg-amber-600/40 transition-colors" />

                                            <div className="flex items-baseline justify-between mb-1">
                                                <span className="text-sm font-semibold text-amber-200/80 font-serif">
                                                    {entry.name}
                                                </span>
                                                <span className="text-[10px] text-neutral-600 tabular-nums">
                                                    {timeAgo(entry.created_at)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-neutral-400 leading-relaxed font-serif whitespace-pre-wrap break-words">
                                                {entry.message}
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
