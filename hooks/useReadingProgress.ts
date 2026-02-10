"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/context/AuthContext'

interface ReadingProgress {
    volumeId: string
    chapterIndex: number
    scrollPercentage: number
    lastRead: string
}

export function useReadingProgress(volumeId: string, chapterIndex: number) {
    const { user } = useAuth()
    const [progress, setProgress] = useState<ReadingProgress | null>(null)
    const [loading, setLoading] = useState(true)
    const lastSavedRef = useRef<{ chapter: number; scroll: number }>({ chapter: 0, scroll: 0 })
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Load progress on mount
    useEffect(() => {
        async function loadProgress() {
            if (!user) {
                setLoading(false)
                return
            }

            try {
                const { data } = await supabase
                    .from('reading_progress')
                    .select('*')
                    .eq('user_id', user.id)
                    .eq('volume_id', volumeId)
                    .maybeSingle()

                if (data) {
                    setProgress({
                        volumeId: data.volume_id,
                        chapterIndex: data.chapter_index,
                        scrollPercentage: data.scroll_percentage || 0,
                        lastRead: data.last_read
                    })
                    lastSavedRef.current = {
                        chapter: data.chapter_index,
                        scroll: data.scroll_percentage || 0
                    }
                }
            } catch (error) {
                console.error('Error loading reading progress:', error)
            } finally {
                setLoading(false)
            }
        }

        loadProgress()
    }, [user, volumeId])

    // Save progress function 
    const saveProgress = useCallback(async (newChapterIndex: number, scrollPercentage: number = 0) => {
        if (!user) return


        const hasChapterChanged = newChapterIndex !== lastSavedRef.current.chapter
        const hasScrollChanged = Math.abs(scrollPercentage - lastSavedRef.current.scroll) > 1

        if (!hasChapterChanged && !hasScrollChanged) return

        try {
            const progressData = {
                user_id: user.id,
                volume_id: volumeId,
                chapter_index: newChapterIndex,
                scroll_percentage: Math.round(scrollPercentage),
                last_read: new Date().toISOString(),
                percentage: Math.round((newChapterIndex / 50) * 100)
            }


            const { error: upsertError } = await supabase
                .from('reading_progress')
                .upsert(progressData, { onConflict: 'user_id,volume_id' })

            if (upsertError) {
                console.error("Failed to save progress:", upsertError)
            }

            lastSavedRef.current = { chapter: newChapterIndex, scroll: scrollPercentage }

            setProgress({
                volumeId,
                chapterIndex: newChapterIndex,
                scrollPercentage,
                lastRead: new Date().toISOString()
            })
        } catch (error) {
            console.error('Error saving reading progress:', error)
        }
    }, [user, volumeId])


    const saveOnChapterChange = useCallback((newChapterIndex: number) => {
        saveProgress(newChapterIndex, 0)
    }, [saveProgress])

    // Save scroll position 
    const saveScrollPosition = useCallback((scrollPercentage: number) => {
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current)
        }

        saveTimeoutRef.current = setTimeout(() => {
            saveProgress(chapterIndex, scrollPercentage)
        }, 3000)
    }, [saveProgress, chapterIndex])


    useEffect(() => {
        const handleBeforeUnload = () => {
            if (user) {

                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const currentScroll = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

                const data = JSON.stringify({
                    user_id: user.id,
                    volume_id: volumeId,
                    chapter_index: chapterIndex,
                    scroll_percentage: Math.round(currentScroll),
                    last_read: new Date().toISOString()
                })
                navigator.sendBeacon('/api/save-progress', data)
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current)
            }
        }
    }, [user, volumeId, chapterIndex])




    return {
        progress,
        loading,
        saveProgress,
        saveOnChapterChange,
        saveScrollPosition
    }
}
