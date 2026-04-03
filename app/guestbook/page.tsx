"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, BookOpen, Send, PenLine, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function GuestbookPage() {
    const [entries, setEntries] = useState<GuestbookEntry[]>([])
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState("")
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetchEntries()
    }, [])

    const fetchEntries = async () => {
        try {
            const res = await fetch('/api/guestbook')
            if (res.ok) {
                const data = await res.json()
                setEntries(data)
            }
        } catch {
            setError("Failed to load entries")
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.trim()) return

        setSubmitting(true)
        setError("")

        try {
            const res = await fetch('/api/guestbook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), message: message.trim() })
            })

            if (!res.ok) {
                const data = await res.json()
                setError(data.error || "Something went wrong")
                return
            }

            const entry = await res.json()
            setEntries(prev => [entry, ...prev])
            setMessage("")
            listRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
        } catch {
            setError("Failed to submit. Try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#050505] text-white relative flex flex-col items-center pt-24 md:pt-16 p-4 md:p-6 overflow-hidden">

            {/* Background — warm notebook feel */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_-10%,#3b1a00,transparent_50%)] opacity-20" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_100%,#1a0f00,transparent_50%)] opacity-20" />

            {/* Subtle ruled-line pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.15) 39px, rgba(255,255,255,0.15) 40px)',
                    backgroundSize: '100% 40px'
                }}
            />

            {/* Back button */}
            <div className="absolute top-6 left-6 z-20">
                <Link href="/">
                    <Button variant="ghost" className="text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Library
                    </Button>
                </Link>
            </div>

            <div className="z-10 w-full max-w-2xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-amber-500/80 drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
                        <h1 className="text-3xl md:text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200/70">
                            Guestbook
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-md mx-auto">
                        Leave your mark. Sign the book, share a thought, or just say hello.
                    </p>
                </motion.div>

                {/* Write form — notebook card style */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full mb-8"
                >
                    <div className="relative bg-[#0c0a08] border border-amber-900/20 rounded-2xl p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(180,120,40,0.04)]">

                        {/* Red margin line accent */}
                        <div className="absolute left-10 md:left-12 top-0 bottom-0 w-[1px] bg-red-900/20 rounded-full" />

                        <div className="flex items-center gap-2 mb-2 text-amber-600/60">
                            <PenLine className="w-4 h-4" />
                            <span className="text-xs uppercase tracking-widest font-medium">Sign the book</span>
                        </div>

                        <input
                            type="text"
                            placeholder="Your name (optional)"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            maxLength={30}
                            className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-700/40 focus:bg-white/[0.05] transition-all"
                        />

                        <textarea
                            placeholder="Write something..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            maxLength={500}
                            rows={3}
                            required
                            className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-700/40 focus:bg-white/[0.05] transition-all resize-none font-serif leading-relaxed"
                        />

                        <div className="flex items-center justify-between">
                            <span className="text-[11px] text-neutral-600">
                                {message.length}/500
                            </span>
                            <Button
                                type="submit"
                                disabled={submitting || !message.trim()}
                                className="bg-amber-700/80 hover:bg-amber-600/90 text-white rounded-lg px-5 py-2 text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(180,120,40,0.15)] hover:shadow-[0_0_30px_rgba(180,120,40,0.25)]"
                            >
                                {submitting ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <>
                                        <Send className="w-3.5 h-3.5 mr-2" />
                                        Sign
                                    </>
                                )}
                            </Button>
                        </div>

                        {error && (
                            <p className="text-xs text-red-400 mt-1">{error}</p>
                        )}
                    </div>
                </motion.form>

                {/* Entries */}
                <motion.div
                    ref={listRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full space-y-3 max-h-[60vh] overflow-y-auto pr-1"
                >
                    {loading ? (
                        <div className="flex items-center justify-center py-16">
                            <Loader2 className="w-6 h-6 animate-spin text-amber-600/60" />
                        </div>
                    ) : entries.length === 0 ? (
                        <div className="text-center py-16 text-neutral-600">
                            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
                            <p className="text-sm">No entries yet. Be the first to sign!</p>
                        </div>
                    ) : (
                        <AnimatePresence mode="popLayout">
                            {entries.map((entry, i) => (
                                <motion.div
                                    key={entry.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: i < 10 ? i * 0.04 : 0 }}
                                    className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-amber-800/20 rounded-xl px-5 py-4 transition-all duration-300"
                                >
                                    {/* Subtle left accent bar */}
                                    <div className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-amber-700/20 group-hover:bg-amber-600/40 transition-colors" />

                                    <div className="flex items-baseline justify-between mb-1.5">
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
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 mb-6"
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
