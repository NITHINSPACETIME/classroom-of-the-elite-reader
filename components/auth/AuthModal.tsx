"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { X, Github, Eye, EyeOff } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [mounted, setMounted] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setMessage(null)

        try {
            if (isSignUp) {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            username: username
                        }
                    }
                })
                if (error) throw error

                if (data.session) {
                    await supabase.from('profiles').upsert({
                        id: data.session.user.id,
                        username: username,
                        updated_at: new Date().toISOString()
                    })
                    onClose()
                } else {
                    setMessage("Check your email for the confirmation link!")
                }
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                if (error) throw error
                onClose()
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleSocial = async (provider: 'google' | 'github') => {
        await supabase.auth.signInWithOAuth({
            provider,
        })
    }

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-sm bg-[#0a0a0b] border border-white/10 rounded-2xl shadow-2xl flex flex-col z-[110] overflow-hidden"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1.5 rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-colors z-10"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Header */}
                        <div className="pt-8 pb-6 px-6 text-center">
                            <h2 className="text-2xl font-semibold text-white">
                                {isSignUp ? "Create Account" : "Welcome back"}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                {isSignUp ? "Join the Classroom of the Elite" : "Sign in to continue reading"}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="px-6 pb-6 space-y-4">
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}
                            {message && (
                                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg text-sm">
                                    {message}
                                </div>
                            )}

                            {/* Social buttons first */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleSocial('google')}
                                    className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors"
                                >
                                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </button>
                                <button
                                    onClick={() => handleSocial('github')}
                                    className="flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-medium py-2.5 px-4 rounded-lg transition-colors border border-white/10"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/10" />
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-[#0a0a0b] px-3 text-xs text-gray-600 uppercase tracking-wide">or</span>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleAuth} className="space-y-3">
                                {isSignUp && (
                                    <div>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all"
                                            placeholder="Username"
                                        />
                                    </div>
                                )}
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-11 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 rounded-lg transition-colors mt-1"
                                >
                                    {loading ? "Please wait..." : isSignUp ? "Create account" : "Sign in"}
                                </Button>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02]">
                            <p className="text-sm text-center text-gray-500">
                                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                                <button
                                    onClick={() => {
                                        setIsSignUp(!isSignUp);
                                        setEmail("");
                                        setPassword("");
                                        setUsername("");
                                        setError(null);
                                        setMessage(null);
                                    }}
                                    className="text-white hover:text-gray-300 font-medium transition-colors"
                                >
                                    {isSignUp ? "Sign in" : "Sign up"}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}
