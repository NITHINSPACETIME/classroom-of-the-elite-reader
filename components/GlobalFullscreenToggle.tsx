/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Maximize, Minimize, Share, PlusSquare, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function GlobalFullscreenToggle() {
    const pathname = usePathname()
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [supported, setSupported] = useState(true)
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        setMounted(true)
        
        // Detect standard fullscreen support
        const hasFullscreenSupport = typeof document !== 'undefined' && 
            (document.fullscreenEnabled || 
             (document.documentElement as any).webkitRequestFullscreen || 
             (document.documentElement as any).msRequestFullscreen)
             
        if (!hasFullscreenSupport) {
            setSupported(false)
        }

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
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

    // Hide on reader pages where reader header already has a custom fullscreen button, and login/auth paths
    const isHidden = pathname.includes('/read') || pathname.startsWith('/auth/')

    if (!mounted || isHidden) return null

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-6 z-50 print:hidden"
                >
                    <button
                        onClick={toggleFullscreen}
                        className="w-12 h-12 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
                        aria-label="Toggle Fullscreen"
                        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                        {isFullscreen ? (
                            <Minimize className="w-5 h-5" />
                        ) : (
                            <Maximize className="w-5 h-5" />
                        )}
                    </button>
                </motion.div>
            </AnimatePresence>

            {/* iOS / Safari "Add to Home Screen" PWA installation guide toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-24 left-6 right-6 md:left-6 md:right-auto md:w-96 z-50 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 text-zinc-200 shadow-[0_10px_45px_rgba(0,0,0,0.8)] ring-1 ring-white/10 flex flex-col gap-3"
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
