"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'
import { getVolumeById } from '@/lib/all-volumes'
import { getSpineIndex } from '@/lib/chapter-mappings'

interface LastRead {
    volumeId: string
    chapterIndex: number
    title: string
    coverImage: string
    timestamp: string
}

export function GlobalContinueReading() {
    const { user } = useAuth()
    const pathname = usePathname()
    const [lastRead, setLastRead] = useState<LastRead | null>(null)
    const [isVisible, setIsVisible] = useState(true)

    const isHidden =
        pathname.startsWith('/read/') ||
        pathname.startsWith('/auth/') ||
        (pathname.startsWith('/select/year-') && pathname.split('/').length > 3) ||
        !user;

    useEffect(() => {
        if (!user || isHidden) return;

        async function fetchLastRead() {
            try {

                const { data, error } = await supabase
                    .from('reading_progress')
                    .select('*')
                    .eq('user_id', user!.id)
                    .order('last_read', { ascending: false })
                    .limit(5);

                if (error) {
                    console.error("Global fetch error:", error);
                }

                if (data && data.length > 0) {

                    const validEntry = data.find(entry => getVolumeById(entry.volume_id));

                    if (validEntry) {
                        const volume = getVolumeById(validEntry.volume_id)!;
                        setLastRead({
                            volumeId: validEntry.volume_id,
                            chapterIndex: validEntry.chapter_index,
                            title: volume.title,
                            coverImage: volume.coverImage,
                            timestamp: validEntry.last_read
                        });
                        setIsVisible(true);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch last read:", err);
            }
        }

        fetchLastRead();



    }, [user, pathname, isHidden]);

    if (isHidden || !lastRead || !isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
                >
                    <div className="relative group">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-2 -right-2 bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-600"
                        >
                            <X className="w-3 h-3" />
                        </button>

                        <Link href={`/read/${lastRead.volumeId}/${getSpineIndex(lastRead.volumeId, lastRead.chapterIndex)}`}>
                            <div className="flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-3 pr-6 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:scale-105 transition-all duration-200 cursor-pointer ring-1 ring-white/20">
                                {/* Small Cover Preview */}
                                <div className="h-10 w-8 rounded overflow-hidden shrink-0 border border-white/20">
                                    <img src={lastRead.coverImage} alt="Cover" className="h-full w-full object-cover" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Continue Reading</span>
                                    <span className="text-sm font-medium text-white max-w-[150px] truncate">
                                        {lastRead.title} - Ch {lastRead.chapterIndex + 1}
                                    </span>
                                </div>

                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center ml-2">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
