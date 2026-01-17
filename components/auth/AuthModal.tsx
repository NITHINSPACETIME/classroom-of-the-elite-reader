"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { X, Mail, Github } from "lucide-react"
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
                        className="absolute inset-0 bg-black/80"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-[#18181b] border border-[#2a2b36] rounded-xl shadow-2xl flex flex-col z-[110]"
                        style={{ maxHeight: 'calc(100vh - 40px)' }}
                    >

                        <div className="flex justify-between items-center p-6 border-b border-[#2a2b36] shrink-0">
                            <h2 className="text-xl font-bold text-white font-serif">
                                {isSignUp ? "Join the Classroom" : "Welcome Back"}
                            </h2>
                            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
                                <X className="h-5 w-5" />
                            </Button>
                        </div>


                        <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar">
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded text-sm">
                                    {error}
                                </div>
                            )}
                            {message && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-3 rounded text-sm">
                                    {message}
                                </div>
                            )}

                            <form onSubmit={handleAuth} className="space-y-4">
                                {isSignUp && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Username</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            className="w-full bg-[#0f0f13] border border-[#2a2b36] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#a855f7] transition-colors"
                                            placeholder="Ayanokoji"
                                        />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email (used for login)</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-[#0f0f13] border border-[#2a2b36] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#a855f7] transition-colors"
                                        placeholder="ayanokoji@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-[#0f0f13] border border-[#2a2b36] rounded-lg p-2.5 text-white focus:outline-none focus:border-[#a855f7] transition-colors"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold py-2.5 rounded-lg transition-colors"
                                >
                                    {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
                                </Button>
                            </form>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-[#2a2b36]" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-[#18181b] px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => handleSocial('google')}
                                    className="bg-[#0f0f13] border-[#2a2b36] hover:bg-[#2a2b36] text-white"
                                >
                                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Google
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => handleSocial('github')}
                                    className="bg-[#0f0f13] border-[#2a2b36] hover:bg-[#2a2b36] text-white"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    GitHub
                                </Button>
                            </div>
                        </div>


                        <div className="p-4 border-t border-[#2a2b36] text-center bg-[#0f0f13] shrink-0">
                            <p className="text-sm text-gray-500">
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
                                    className="text-[#a855f7] hover:underline font-medium"
                                >
                                    {isSignUp ? "Sign In" : "Sign Up"}
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
