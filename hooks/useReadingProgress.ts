"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { chapterMappings } from '@/lib/chapter-mappings'

interface ReadingProgress {
    volumeId: string
    chapterIndex: number
    scrollPercentage: number
    lastRead: string
    chapterId?: string
}

export function useReadingProgress(
    volumeId: string,
    chapterIndex: number,
    novelSlug?: string,
    totalChapters?: number,
    chapterTitle?: string,
    chapterId?: string
) {
    const [progress, setProgress] = useState<ReadingProgress | null>(null)
    const [loading, setLoading] = useState(true)
    const lastSavedRef = useRef<{ chapter: number; scroll: number }>({ chapter: 0, scroll: 0 })
    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Mark current chapter as read immediately on mount/load
    useEffect(() => {
        if (novelSlug && chapterIndex) {
            try {
                const readKey = `${novelSlug}-read-chapters`;
                const readData = localStorage.getItem(readKey);
                const readChapters = readData ? JSON.parse(readData) : {};
                const chapterKey = `${volumeId}-${chapterIndex}`;
                if (!readChapters[chapterKey]) {
                    readChapters[chapterKey] = true;
                    localStorage.setItem(readKey, JSON.stringify(readChapters));
                }
            } catch (e) {
                console.error('Error marking chapter as read on mount:', e);
            }
        }
    }, [novelSlug, volumeId, chapterIndex]);

    // Load progress on mount
    useEffect(() => {
        async function loadProgress() {
            // Try loading from localStorage first
            if (novelSlug) {
                try {
                    const localMetaStr = localStorage.getItem(`${novelSlug}-progress-meta-${volumeId}`);
                    const localProgressStr = localStorage.getItem(`${novelSlug}-progress-${volumeId}`);
                    
                    if (localMetaStr) {
                        const meta = JSON.parse(localMetaStr);
                        setProgress({
                            volumeId,
                            chapterIndex: meta.chapterIndex || 1,
                            scrollPercentage: meta.scrollPercentage || 0,
                            lastRead: meta.lastRead || new Date().toISOString(),
                            chapterId: meta.chapterId
                        });
                        lastSavedRef.current = {
                            chapter: meta.chapterIndex || 1,
                            scroll: meta.scrollPercentage || 0
                        };
                    } else if (localProgressStr) {
                        const chapterIndexVal = parseInt(localProgressStr) || 1;
                        setProgress({
                            volumeId,
                            chapterIndex: chapterIndexVal,
                            scrollPercentage: 0,
                            lastRead: new Date().toISOString()
                        });
                        lastSavedRef.current = {
                            chapter: chapterIndexVal,
                            scroll: 0
                        };
                    }
                } catch (e) {
                    console.error('Error loading local reading progress:', e);
                }
            }
            setLoading(false)
        }

        loadProgress()
    }, [volumeId, novelSlug])

    // Save progress function 
    const saveProgress = useCallback(async (newChapterIndex: number, scrollPercentage: number = 0) => {
        const hasChapterChanged = newChapterIndex !== lastSavedRef.current.chapter
        const hasScrollChanged = Math.abs(scrollPercentage - lastSavedRef.current.scroll) > 1

        if (!hasChapterChanged && !hasScrollChanged) return

        // 1. Save to localStorage for ALL novels
        if (novelSlug) {
            try {
                const total = totalChapters || 50;
                let logicalIdx = newChapterIndex;
                if (novelSlug === 'cote') {
                    const mapping = chapterMappings[volumeId];
                    const foundIdx = mapping ? mapping.indexOf(newChapterIndex) : -1;
                    logicalIdx = foundIdx >= 0 ? foundIdx + 1 : newChapterIndex;
                }
                const percentage = Math.min(1, Math.max(0, logicalIdx / total));
                const metaData = {
                    percentage,
                    chapterTitle: chapterTitle || `Chapter ${newChapterIndex}`,
                    chapterIndex: newChapterIndex,
                    chapterId: chapterId,
                    scrollPercentage: Math.round(scrollPercentage),
                    lastRead: new Date().toISOString()
                };
                localStorage.setItem(`${novelSlug}-progress-meta-${volumeId}`, JSON.stringify(metaData));
                localStorage.setItem(`${novelSlug}-progress-${volumeId}`, String(newChapterIndex));

                // Mark as read in localStorage
                const readKey = `${novelSlug}-read-chapters`;
                const readData = localStorage.getItem(readKey);
                const readChapters = readData ? JSON.parse(readData) : {};
                const chapterKey = `${volumeId}-${newChapterIndex}`;
                if (!readChapters[chapterKey]) {
                    readChapters[chapterKey] = true;
                    localStorage.setItem(readKey, JSON.stringify(readChapters));
                }
            } catch (e) {
                console.error('Error saving local progress:', e);
            }
        }

        // Update local state
        setProgress({
            volumeId,
            chapterIndex: newChapterIndex,
            scrollPercentage,
            lastRead: new Date().toISOString(),
            chapterId: chapterId
        })
        lastSavedRef.current = { chapter: newChapterIndex, scroll: scrollPercentage }
    }, [volumeId, novelSlug, totalChapters, chapterTitle, chapterId])

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
        return () => {
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current)
            }
        }
    }, [])

    // Save progress immediately on navigation/load if the chapter changed
    useEffect(() => {
        if (!loading && novelSlug && chapterIndex) {
            const currentSavedChapter = lastSavedRef.current.chapter;
            if (chapterIndex !== currentSavedChapter) {
                saveProgress(chapterIndex, 0);
            }
        }
    }, [loading, chapterIndex, novelSlug, saveProgress]);

    return {
        progress,
        loading,
        saveProgress,
        saveOnChapterChange,
        saveScrollPosition
    }
}
