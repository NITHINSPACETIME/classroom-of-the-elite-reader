"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-lg space-y-6">
                <h1 className="text-[150px] font-bold font-serif leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 opacity-90 select-none drop-shadow-2xl">
                    404
                </h1>

                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">Page Not Found</h2>
                    <p className="text-gray-400">
                        It seems you've wandered into a restricted area of the school.
                        <br />
                        There is nothing to see here (nevermind).
                    </p>
                </div>


                <div className="relative w-48 h-48 md:w-64 md:h-64 my-4">

                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-900/20 to-transparent border border-white/5 flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                        <img
                            src="/assets/ayanokoji_chibi_404.png"
                            alt="Ayanokoji Chibi"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link href="/select">
                        <Button variant="default" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transition-all duration-300">
                            <Home className="mr-2 w-4 h-4" /> Return to Library
                        </Button>
                    </Link>
                    <Link href="#" onClick={() => window.history.back()}>
                        <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
