/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Settings, Home, Menu, Minimize, Maximize, X, Search, Download, Printer, FileDown, Plus, Minus, RotateCcw, MoreVertical, ArrowUp, ArrowDown, Heart, MessageCircle, Keyboard, Github, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomComments } from "@/components/comments/CustomComments"
import { UserMenu } from "@/components/auth/UserMenu"
import { AuthModal } from "@/components/auth/AuthModal"
import { ProfileModal } from "@/components/auth/ProfileModal"
import { ShortcutsModal } from "./ShortcutsModal"
import { useReadingProgress } from "@/hooks/useReadingProgress"
import AdBanner from "@/components/AdBanner"
import { MarqueeText } from "@/components/MarqueeText"
import { SupportAuthorCard } from "@/components/ui/SupportAuthorCard"

export type ReaderTheme = 'dark' | 'light' | 'sepia' | 'slatedark' | 'midnight' | 'forest' | 'oled' | 'espresso' | 'gray' | 'sunset' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' | 'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | 'winter' | 'dim' | 'nord';
export type ReaderFontFamily = 'serif' | 'sans' | 'merriweather' | 'roboto' | 'lora' | 'alegreya' | 'bookerly' | 'monospace' | 'ebgaramond' | 'crimsonpro' | 'georgia' | 'verdana' | 'arial' | 'timesnewroman' | 'helvetica' | 'tahoma' | 'systemui' | 'trebuchetms' | 'couriernew';


interface SmartLinkProps {
    href: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    title?: string;
    isOrv?: boolean;
}

const SmartLink = ({ href, className, onClick, children, title, isOrv }: SmartLinkProps) => {
    if (isOrv) {
        return (
            <Link href={href} className={className} onClick={onClick} title={title}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} className={className} onClick={onClick} title={title}>
            {children}
        </a>
    );
};

interface ReaderProps {
    content: string;
    title: string;
    volumeId: string;
    chapterIndex: number;
    prevChapter?: { volumeId: string, chapter: string | number, title?: string };
    nextChapter?: { volumeId: string, chapter: string | number, title?: string };
    toc?: { label: string, href: string, index: number }[];
    volumeTitle?: string;
    epubSource?: string;
    detailsLink?: string;
    returnLink?: string;
    currentSpineIndex?: number;
    nextVolumeLink?: string;
    nextVolumeTitle?: string;
    debugInfo?: string;
}

const Switch = ({ checked, onChange, lightTheme }: { checked: boolean, onChange: (checked: boolean) => void, lightTheme?: boolean }) => (
    <button
        type="button"
        onClick={() => onChange(!checked)}
        className={cn(
            "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
            checked ? "bg-[var(--primary-color)]" : (lightTheme ? "bg-gray-200" : "bg-zinc-800")
        )}
    >
        <span
            className={cn(
                "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                checked ? "translate-x-4" : "translate-x-0"
            )}
        />
    </button>
);

const defaultColors: Record<string, string> = {
    cote: "#ef4444",
    lotm: "#f59e0b",
    rezero: "#8b5cf6",
    "bunny-girl": "#d946ef",
    "mushoku-tensei": "#10b981",
    orv: "#06b6d4",
    "reverend-insanity": "#ef4444",
    "apothecary-diaries": "#ec4899",
    tensura: "#0ea5e9"
};

export function HtmlReader({ content, title, prevChapter, nextChapter, volumeId, chapterIndex, toc, volumeTitle, epubSource, detailsLink = "/select", returnLink, currentSpineIndex, nextVolumeLink, nextVolumeTitle, debugInfo }: ReaderProps) {
    const router = useRouter();

    const isThemeLight = (t: ReaderTheme) => {
        const lightThemes: ReaderTheme[] = [
            'light', 'sepia', 'cupcake', 'bumblebee', 'emerald', 'corporate', 
            'retro', 'cyberpunk', 'valentine', 'garden', 'lofi', 'pastel', 
            'fantasy', 'wireframe', 'cmyk', 'autumn', 'acid', 'lemonade', 
            'winter', 'nord'
        ];
        return lightThemes.includes(t);
    };

    const isRezero = detailsLink?.startsWith('/rezero');
    const isOrv = detailsLink?.startsWith('/orv');
    const isBunnyGirl = detailsLink?.startsWith('/bunny-girl');
    const isMushokuTensei = detailsLink?.startsWith('/mushoku-tensei');
    const isLotm = detailsLink?.startsWith('/lotm');
    const isReverendInsanity = detailsLink?.startsWith('/reverend-insanity') || volumeId.startsWith('ri');
    const isApothecaryDiaries = detailsLink?.startsWith('/apothecary-diaries') || volumeId.startsWith('ad');
    const isTensura = detailsLink?.startsWith('/tensura');
    const isCote = !isRezero && !isOrv && !isBunnyGirl && !isMushokuTensei && !isLotm && !isReverendInsanity && !isApothecaryDiaries && !isTensura;
    const baseReadPath = isOrv 
        ? `/orv/read` 
        : (isRezero 
            ? `/rezero/read` 
            : (isBunnyGirl 
                ? `/bunny-girl/read` 
                : (isMushokuTensei 
                    ? `/mushoku-tensei/read` 
                    : (isLotm 
                        ? `/lotm/read` 
                        : (isReverendInsanity
                            ? `/reverend-insanity/read`
                            : (isApothecaryDiaries
                                ? `/apothecary-diaries/read`
                                : (isTensura
                                    ? `/tensura/read`
                                    : `/cote/read`
                                  )
                              )
                          )
                      )
                  )
              )
          );

    const novelSlug = isOrv ? 'orv' : (isRezero ? 'rezero' : (isBunnyGirl ? 'bunny-girl' : (isMushokuTensei ? 'mushoku-tensei' : (isLotm ? 'lotm' : (isReverendInsanity ? 'reverend-insanity' : (isApothecaryDiaries ? 'apothecary-diaries' : (isTensura ? 'tensura' : 'cote')))))));

    const [theme, setTheme] = useState<ReaderTheme>('dark');
    const [fontSize, setFontSize] = useState(18);
    const [lineHeight, setLineHeight] = useState(1.8);
    const [fontFamily, setFontFamily] = useState<ReaderFontFamily>('alegreya');
    const [fontWeight, setFontWeight] = useState(400);

    // Custom Color State (Material 3 style)
    const [customAccentColor, setCustomAccentColor] = useState<string>("#ef4444");

    // Reading Mode & Margins States
    const [readingMode, setReadingMode] = useState<'vertical' | 'horizontal'>('vertical');
    const [margins, setMargins] = useState<'narrow' | 'normal' | 'wide'>('normal');

    // Bookmarks, Notes, and Highlights
    const [activeTab, setActiveTab] = useState<'toc' | 'bookmarks'>('toc');
    const [bookmarks, setBookmarks] = useState<any[]>([]);
    
    // Text Selection & Highlights Menu
    const [selectedText, setSelectedText] = useState("");
    const [selectionCoords, setSelectionCoords] = useState<{ x: number, y: number } | null>(null);
    const [showSelectionMenu, setShowSelectionMenu] = useState(false);
    const [noteText, setNoteText] = useState("");
    const [highlightColor, setHighlightColor] = useState("#fef08a");
    const [readerNotePopover, setReaderNotePopover] = useState<{ id: string, text: string, note?: string, x: number, y: number } | null>(null);

    // Reading Timer State
    const [readingTime, setReadingTime] = useState<number>(0);
    const [chapterElapsed, setChapterElapsed] = useState<number>(0);

    // Page turning 3D transitions & bottom reading progress percentage
    const [pageTurnClass, setPageTurnClass] = useState<'page-turn-next' | 'page-turn-prev' | ''>('');
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Seeded star ratings & likes
    const [chapterLiked, setChapterLiked] = useState(false);
    const [chapterRating, setChapterRating] = useState(0);

    const [solidBackground, setSolidBackground] = useState(true);
    const [textAlign, setTextAlign] = useState<'left' | 'justify' | 'center' | 'right'>('justify');
    const [indentParagraphs, setIndentParagraphs] = useState(false);
    const [autoHyphenation, setAutoHyphenation] = useState(false);
    const [settingsTab, setSettingsTab] = useState<'interface' | 'readability' | 'appearance'>('interface');

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [hasFullscreenSupport, setHasFullscreenSupport] = useState(true);
    const [starCount, setStarCount] = useState<number | null>(null);

    const [commentsOpen, setCommentsOpen] = useState(false);
    const [speedDialOpen, setSpeedDialOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
    const [isMobileSize, setIsMobileSize] = useState(false);
    const [showReadingTimePill, setShowReadingTimePill] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobileSize(window.innerWidth < 768);
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const downloadRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const settingsRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    const currentChapterId = (isOrv && toc && toc[chapterIndex - 1]) ? toc[chapterIndex - 1].href : undefined;

    const { progress, loading: progressLoading, saveScrollPosition } = useReadingProgress(
        volumeId, 
        chapterIndex,
        novelSlug,
        toc ? toc.length : 50,
        title,
        currentChapterId
    );
    const [restoredPosition, setRestoredPosition] = useState(false);

    // Horizontal pagination handlers
    const readerContentRef = useRef<HTMLDivElement>(null);

    const handlePageTurn = (dir: 'prev' | 'next') => {
        if (readerContentRef.current) {
            const container = readerContentRef.current;
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            
            const rootFontSize = typeof window !== 'undefined' 
                ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16 
                : 16;
            const columnGap = 3 * rootFontSize; // 3rem column-gap in pixels
            const step = clientWidth + columnGap;
            
            if (dir === 'next') {
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 16 - columnGap;
                if (isAtEnd) {
                    if (nextChapter) {
                        router.push(isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`);
                    } else if (nextVolumeLink) {
                        router.push(nextVolumeLink);
                    }
                    return;
                }
            } else if (dir === 'prev') {
                const isAtStart = scrollLeft <= 16;
                if (isAtStart) {
                    if (prevChapter) {
                        router.push(isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`);
                    }
                    return;
                }
            }

            setPageTurnClass(dir === 'next' ? 'page-turn-next' : 'page-turn-prev');

            const scrollAmount = dir === 'next' ? step : -step;
            const originalSnap = container.style.scrollSnapType;
            container.style.scrollSnapType = 'none';
            
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                container.style.scrollSnapType = originalSnap;
            }, 350);

            setTimeout(() => {
                setPageTurnClass('');
            }, 400);
        }
    };

    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (readingMode !== 'horizontal') return;
        const touch = e.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (readingMode !== 'horizontal' || !touchStartRef.current) return;
        const touch = e.changedTouches[0];
        const diffX = touch.clientX - touchStartRef.current.x;
        const diffY = touch.clientY - touchStartRef.current.y;
        
        // Threshold: horizontal swipe >= 60px, vertical distance <= 40px
        if (Math.abs(diffX) >= 60 && Math.abs(diffY) <= 40) {
            if (diffX < 0) {
                handlePageTurn('next');
            } else {
                handlePageTurn('prev');
            }
        }
        touchStartRef.current = null;
    };

    const scrollToHighlight = (id: string) => {
        const markEl = document.querySelector(`[data-highlight-id="${id}"]`) as HTMLElement;
        if (!markEl) return;

        // Apply temporary glow highlight classes
        markEl.classList.add('highlight-focused');
        setTimeout(() => {
            markEl.classList.remove('highlight-focused');
        }, 3000);

        if (readingMode === 'horizontal' && readerContentRef.current) {
            const container = readerContentRef.current;
            
            // Calculate relative offsetLeft of the mark element relative to the container
            let offsetLeft = 0;
            let curr: HTMLElement | null = markEl;
            while (curr && curr !== container) {
                offsetLeft += curr.offsetLeft;
                curr = curr.offsetParent as HTMLElement | null;
            }

            const colWidth = container.clientWidth;
            const colGap = 48; // 3rem column-gap is 48px
            const pageIndex = Math.floor(offsetLeft / (colWidth + colGap));
            const targetScrollLeft = pageIndex * (colWidth + colGap);

            const originalSnap = container.style.scrollSnapType;
            container.style.scrollSnapType = 'none';

            container.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });

            setTimeout(() => {
                container.style.scrollSnapType = originalSnap;
            }, 350);
        } else {
            markEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

 
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (readingMode !== 'horizontal' || !readerContentRef.current) return;
        const container = readerContentRef.current;
        setContainerWidth(container.clientWidth);

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, [readingMode]);

    useEffect(() => {
        if (!progressLoading && progress && !restoredPosition && progress.chapterIndex === chapterIndex) {
            if (readingMode === 'horizontal') {
                const container = readerContentRef.current;
                if (container && containerWidth > 0) {
                    const rootFontSize = typeof window !== 'undefined' 
                        ? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16 
                        : 16;
                    const columnGap = 3 * rootFontSize;
                    const maxScroll = container.scrollWidth - containerWidth;
                    if (maxScroll > 0) {
                        const targetScrollLeft = (progress.scrollPercentage / 100) * maxScroll;
                        const pageIndex = Math.round(targetScrollLeft / (containerWidth + columnGap));
                        container.scrollLeft = pageIndex * (containerWidth + columnGap);
                        if (progressBarRef.current) {
                            progressBarRef.current.style.width = `${progress.scrollPercentage}%`;
                        }
                        setRestoredPosition(true);
                    } else {
                        if (progressBarRef.current) {
                            progressBarRef.current.style.width = '0%';
                        }
                        setRestoredPosition(true);
                    }
                }
            } else {
                if (progress.scrollPercentage > 0) {
                    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollTop = (progress.scrollPercentage / 100) * scrollHeight;
                    setTimeout(() => {
                        window.scrollTo({
                            top: scrollTop,
                            behavior: 'smooth'
                        });
                        if (progressBarRef.current) {
                            progressBarRef.current.style.width = `${progress.scrollPercentage}%`;
                        }
                    }, 100);
                } else {
                    if (progressBarRef.current) {
                        progressBarRef.current.style.width = '0%';
                    }
                }
                setRestoredPosition(true);
            }
        }
    }, [progressLoading, progress, restoredPosition, chapterIndex, readingMode, containerWidth, readerContentRef]);

    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY;
            
            if (diff > 10) {
                setScrollDirection('down');
                lastScrollY = currentScrollY;
            } else if (diff < -2) {
                setScrollDirection('up');
                lastScrollY = currentScrollY;
            }

            // Save reading progress in scroll mode
            if (readingMode !== 'horizontal') {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                if (maxScroll > 0) {
                    const percentage = (currentScrollY / maxScroll) * 100;
                    const clampedPercentage = Math.min(100, Math.max(0, percentage));
                    if (progressBarRef.current) {
                        progressBarRef.current.style.width = `${clampedPercentage}%`;
                    }
                    saveScrollPosition(clampedPercentage);
                }
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [readingMode, saveScrollPosition]);

    // Save reading progress in page mode
    useEffect(() => {
        if (readingMode !== 'horizontal' || !readerContentRef.current || !restoredPosition) return;
        const container = readerContentRef.current;
        let ticking = false;

        const updatePageScroll = () => {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (maxScroll > 0) {
                const percentage = (scrollLeft / maxScroll) * 100;
                const clampedPercentage = Math.min(100, Math.max(0, percentage));
                if (progressBarRef.current) {
                    progressBarRef.current.style.width = `${clampedPercentage}%`;
                }
                saveScrollPosition(clampedPercentage);
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updatePageScroll);
                ticking = true;
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [readingMode, restoredPosition, saveScrollPosition]);

    useEffect(() => {
        const support = typeof document !== 'undefined' && 
            (document.fullscreenEnabled || 
             (document.documentElement as any).webkitRequestFullscreen || 
             (document.documentElement as any).msRequestFullscreen);
        setHasFullscreenSupport(!!support);

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = () => {
        if (hasFullscreenSupport) {
            if (!document.fullscreenElement) {
                const docEl = document.documentElement as any;
                const requestFS = docEl.requestFullscreen || 
                                  docEl.webkitRequestFullscreen || 
                                  docEl.msRequestFullscreen;
                if (requestFS) {
                    requestFS.call(docEl).then(() => {
                        setIsFullscreen(true);
                    }).catch(() => {
                        // Fallback to pseudo-fullscreen on failure
                        setIsFullscreen(true);
                    });
                } else {
                    setIsFullscreen(true);
                }
            } else {
                const exitFS = document.exitFullscreen || 
                               (document as any).webkitExitFullscreen || 
                               (document as any).msExitFullscreen;
                if (exitFS) {
                    exitFS.call(document);
                }
                setIsFullscreen(false);
            }
        } else {
            // Pseudo-fullscreen fallback for iOS / iPhone Safari
            setIsFullscreen(prev => !prev);
        }
        setMobileMenuOpen(false);
    };


    const [shortcutsOpen, setShortcutsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;


            const isHelpShortcut = (e.ctrlKey || e.metaKey) && e.key === '/';
            if ((e.ctrlKey || e.altKey || e.metaKey) && !isHelpShortcut) return;

            const key = e.key.toLowerCase();

            if (isHelpShortcut) {
                e.preventDefault();
                setShortcutsOpen(prev => !prev);
                return;
            }

            switch (key) {
                // Navigation
                case 'arrowleft':
                    if (readingMode === 'horizontal') {
                        e.preventDefault();
                        handlePageTurn('prev');
                    } else if (prevChapter) {
                        router.push(isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`);
                    }
                    break;
                case 'h':
                    if (prevChapter) router.push(isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`);
                    break;
                case 'arrowright':
                    if (readingMode === 'horizontal') {
                        e.preventDefault();
                        handlePageTurn('next');
                    } else if (nextChapter) {
                        router.push(isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`);
                    } else if (nextVolumeLink) {
                        router.push(nextVolumeLink);
                    }
                    break;
                case 'l':
                    if (nextChapter) {
                        router.push(isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`);
                    } else if (nextVolumeLink) {
                        router.push(nextVolumeLink);
                    }
                    break;

                // Interface Toggles
                case 'm':
                    setSidebarOpen(prev => !prev);
                    break;
                case 's':
                    setSettingsOpen(prev => !prev);
                    break;
                case 'c':
                    setCommentsOpen(true);
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case '/':
                    e.preventDefault();
                    if (!sidebarOpen) setSidebarOpen(true);
                    setTimeout(() => searchInputRef.current?.focus(), 100);
                    break;

                // Reading Settings
                case 't': {
                    const themes: (typeof theme)[] = ['dark', 'light', 'sepia', 'slatedark', 'midnight', 'forest', 'oled', 'espresso', 'gray'];
                    const currentIndex = themes.indexOf(theme);
                    const nextIndex = (currentIndex + 1) % themes.length;
                    setTheme(themes[nextIndex]);
                    break;
                }
                case '=':
                case '+':
                    setFontSize(prev => Math.min(32, prev + 1));
                    break;
                case '-':
                    setFontSize(prev => Math.max(12, prev - 1));
                    break;

                // System
                case 'escape':
                    setSidebarOpen(false);
                    setSettingsOpen(false);
                    setMobileMenuOpen(false);
                    setDownloadMenuOpen(false);
                    setShortcutsOpen(false);
                    setCommentsOpen(false);
                    setAuthModalOpen(false);
                    setProfileModalOpen(false);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [prevChapter, nextChapter, router, theme, sidebarOpen, settingsOpen, isFullscreen, readingMode]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
                setDownloadMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
            if (!isMobileSize && settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
                setSettingsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileSize]);

    const handlePrint = () => window.print();

    const handleDownload = () => {
        if (!epubSource) return;

        let filename = "Classroom_of_the_Elite.epub";

        if (volumeTitle) {
            filename = `Classroom_of_the_Elite_${volumeTitle.replace(/\s+/g, '_')}.epub`;
        }

        const link = document.createElement('a');
        link.href = epubSource;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadMenuOpen(false);
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handlePrintEvent = () => handlePrint();
        const handleDownloadEvent = () => handleDownload();
        const handleCommentsEvent = () => setCommentsOpen(true);

        window.addEventListener("reader-action-print", handlePrintEvent);
        window.addEventListener("reader-action-download", handleDownloadEvent);
        window.addEventListener("reader-action-comments", handleCommentsEvent);

        return () => {
            window.removeEventListener("reader-action-print", handlePrintEvent);
            window.removeEventListener("reader-action-download", handleDownloadEvent);
            window.removeEventListener("reader-action-comments", handleCommentsEvent);
        }
    }, [epubSource, volumeTitle]);

    useEffect(() => {
        const handleSpeedDialToggle = (e: Event) => {
            const customEvent = e as CustomEvent<boolean>;
            setSpeedDialOpen(customEvent.detail);
        };
        window.addEventListener("speed-dial-toggle", handleSpeedDialToggle);
        return () => window.removeEventListener("speed-dial-toggle", handleSpeedDialToggle);
    }, []);


    const handleContentClick = () => {
        setSettingsOpen(false);
    };

    const filteredToc = useMemo(() => {
        if (!toc) return [];

        const relevantItems = toc.filter(item => {
            const label = item.label?.toLowerCase() || "";
            return !label.startsWith("classroom of the elite");
        });

        if (!searchQuery) return relevantItems;
        const lower = searchQuery.toLowerCase();
        return relevantItems.filter(item => item.label && item.label.toLowerCase().includes(lower));
    }, [toc, searchQuery]);

    const themeMap = {
        dark: isOrv ? "bg-[#020204] text-[#e2e8f0]" : (isRezero ? "bg-[#05030a] text-[#f4f4f5]" : (isBunnyGirl ? "bg-[#0b0816] text-[#ece2f9]" : (isApothecaryDiaries ? "bg-[#0b0610] text-[#f9eaf3]" : "bg-[#14151b] text-[#b6bccc]"))),
        light: "bg-white text-gray-900",
        sepia: "bg-[#f4ecd8] text-[#5b4636]",
        slatedark: "bg-[#0d1117] text-[#c9d1d9]",
        midnight: "bg-[#0f172a] text-[#cbd5e1]",
        forest: "bg-[#1a2321] text-[#c1d1cb]",
        oled: "bg-black text-[#a3a3a3]",
        espresso: "bg-[#2b2523] text-[#d6c6c1]",
        gray: "bg-[#27272a] text-[#d4d4d8]"
    };

    const oklchThemeStyles: Record<string, { bg: string, text: string }> = {
        sunset: { bg: "oklch(22% 0.019 237.69)", text: "oklch(77.383% 0.043 245.096)" },
        light: { bg: "oklch(100% 0 0)", text: "oklch(21% 0.006 285.885)" },
        dark: { bg: "oklch(25.33% 0.016 252.42)", text: "oklch(97.807% 0.029 256.847)" },
        cupcake: { bg: "oklch(97.788% 0.004 56.375)", text: "oklch(23.574% 0.066 313.189)" },
        bumblebee: { bg: "oklch(100% 0 0)", text: "oklch(20% 0 0)" },
        emerald: { bg: "oklch(100% 0 0)", text: "oklch(35.519% 0.032 262.988)" },
        corporate: { bg: "oklch(100% 0 0)", text: "oklch(22.389% 0.031 278.072)" },
        synthwave: { bg: "oklch(15% 0.09 281.288)", text: "oklch(78% 0.115 274.713)" },
        retro: { bg: "oklch(91.637% 0.034 90.515)", text: "oklch(41% 0.112 45.904)" },
        cyberpunk: { bg: "oklch(94.51% 0.179 104.32)", text: "oklch(0% 0 0)" },
        valentine: { bg: "oklch(97% 0.014 343.198)", text: "oklch(52% 0.223 3.958)" },
        halloween: { bg: "oklch(21% 0.006 56.043)", text: "oklch(84.955% 0 0)" },
        garden: { bg: "oklch(92.951% 0.002 17.197)", text: "oklch(16.961% 0.001 17.32)" },
        forest: { bg: "oklch(20.84% 0.008 17.911)", text: "oklch(83.768% 0.001 17.911)" },
        aqua: { bg: "oklch(37% 0.146 265.522)", text: "oklch(90% 0.058 230.902)" },
        lofi: { bg: "oklch(100% 0 0)", text: "oklch(0% 0 0)" },
        pastel: { bg: "oklch(100% 0 0)", text: "oklch(20% 0 0)" },
        fantasy: { bg: "oklch(100% 0 0)", text: "oklch(27.807% 0.029 256.847)" },
        wireframe: { bg: "oklch(100% 0 0)", text: "oklch(20% 0 0)" },
        black: { bg: "oklch(0% 0 0)", text: "oklch(87.609% 0 0)" },
        luxury: { bg: "oklch(14.076% 0.004 285.822)", text: "oklch(75.687% 0.123 76.89)" },
        dracula: { bg: "oklch(28.822% 0.022 277.508)", text: "oklch(97.747% 0.007 106.545)" },
        cmyk: { bg: "oklch(100% 0 0)", text: "oklch(20% 0 0)" },
        autumn: { bg: "oklch(95.814% 0 0)", text: "oklch(19.162% 0 0)" },
        business: { bg: "oklch(24.353% 0 0)", text: "oklch(84.87% 0 0)" },
        acid: { bg: "oklch(98% 0 0)", text: "oklch(0% 0 0)" },
        lemonade: { bg: "oklch(98.71% 0.02 123.72)", text: "oklch(19.742% 0.004 123.72)" },
        night: { bg: "oklch(20.768% 0.039 265.754)", text: "oklch(84.153% 0.007 265.754)" },
        coffee: { bg: "oklch(24% 0.023 329.708)", text: "oklch(72.354% 0.092 79.129)" },
        winter: { bg: "oklch(100% 0 0)", text: "oklch(41.886% 0.053 255.824)" },
        dim: { bg: "oklch(30.857% 0.023 264.149)", text: "oklch(82.901% 0.031 222.959)" },
        nord: { bg: "oklch(95.127% 0.007 260.731)", text: "oklch(32.437% 0.022 264.182)" }
    };



    const [isInitialized, setIsInitialized] = useState(false);


    const resetSettings = () => {
        setTheme('dark');
        setFontSize(18);
        setLineHeight(1.8);
        setFontFamily('alegreya');
        setFontWeight(400);
        setSolidBackground(true);
        setTextAlign('justify');
        setIndentParagraphs(false);
        setAutoHyphenation(false);
        setShowReadingTimePill(false);
        localStorage.setItem(`${novelSlug}-show-reading-time`, 'false');
        
        // Reset new custom parameters
        const defaultAccent = defaultColors[novelSlug] || "#ef4444";
        setCustomAccentColor(defaultAccent);
        localStorage.removeItem(`${novelSlug}-custom-color`);
        window.dispatchEvent(new CustomEvent("accent-color-changed"));

        setReadingMode('vertical');
        localStorage.setItem(`${novelSlug}-readingMode`, 'vertical');

        setMargins('normal');
        localStorage.setItem(`${novelSlug}-margins`, 'normal');
    };


    useEffect(() => {
        const savedTheme = localStorage.getItem('cote-theme');
        const savedFontSize = localStorage.getItem('cote-fontSize');
        const savedLineHeight = localStorage.getItem('cote-lineHeight');
        const savedFontFamily = localStorage.getItem('cote-fontFamily');
        const savedFontWeight = localStorage.getItem('cote-fontWeight');

        const savedSolidBg = localStorage.getItem('cote-solidBackground');
        const savedTextAlign = localStorage.getItem('cote-textAlign');
        const savedIndent = localStorage.getItem('cote-indentParagraphs');
        const savedHyphen = localStorage.getItem('cote-autoHyphenation');

        // Load new custom parameters
        const savedAccent = localStorage.getItem(`${novelSlug}-custom-color`);
        const savedReadingMode = localStorage.getItem(`${novelSlug}-readingMode`);
        const savedMarginsVal = localStorage.getItem(`${novelSlug}-margins`);
        const savedBookmarksVal = localStorage.getItem(`${novelSlug}-bookmarks`);
        const savedReadingTimeVal = localStorage.getItem(`${novelSlug}-reading-time`);

        if (savedTheme) setTheme(savedTheme as ReaderTheme);
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
        if (savedLineHeight) setLineHeight(parseFloat(savedLineHeight));
        if (savedFontFamily) setFontFamily(savedFontFamily as ReaderFontFamily);
        if (savedFontWeight) setFontWeight(parseInt(savedFontWeight));

        if (savedSolidBg !== null) setSolidBackground(savedSolidBg === 'true');
        if (savedTextAlign) setTextAlign(savedTextAlign as any);
        if (savedIndent !== null) setIndentParagraphs(savedIndent === 'true');
        if (savedHyphen !== null) setAutoHyphenation(savedHyphen === 'true');

        if (savedAccent) setCustomAccentColor(savedAccent);
        else setCustomAccentColor(defaultColors[novelSlug] || "#ef4444");

        // Always use vertical mode (horizontal has been removed)
        setReadingMode('vertical');
        if (savedReadingMode && savedReadingMode !== 'vertical') {
            localStorage.setItem(`${novelSlug}-readingMode`, 'vertical');
        }
        if (savedMarginsVal) setMargins(savedMarginsVal as 'narrow' | 'normal' | 'wide');
        if (savedBookmarksVal) {
            try {
                setBookmarks(JSON.parse(savedBookmarksVal));
            } catch (e) {
                console.error(e);
            }
        }
        if (savedReadingTimeVal) setReadingTime(parseInt(savedReadingTimeVal));
        const savedShowReadingTime = localStorage.getItem(`${novelSlug}-show-reading-time`);
        if (savedShowReadingTime !== null) setShowReadingTimePill(savedShowReadingTime === 'true');

        setIsInitialized(true);
    }, [novelSlug]);


    const processedContent = useMemo(() => {
        let cleanContent = content;
        
        // Strip duplicate chapter header tags at the beginning, preserving wrapping divs
        cleanContent = cleanContent.replace(/^(?:\s*|<div[^>]*>){1,3}\s*<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/i, (match) => {
            return match.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/i, "");
        });
        cleanContent = cleanContent.replace(/^(?:\s*|<div[^>]*>){1,3}\s*<p\s+class="[^"]*(?:Chapter_Header|Header|title|heading)[^"]*"[^>]*>[\s\S]*?<\/p>/i, (match) => {
            return match.replace(/<p\s+class="[^"]*(?:Chapter_Header|Header|title|heading)[^"]*"[^>]*>[\s\S]*?<\/p>/i, "");
        });

        if (!isBunnyGirl) return cleanContent;
        // Format standalone section numbers (like 1, 2, 3...) to be large, italicized, and centered
        return cleanContent.replace(/<(p|h3|h2|h4)[^>]*>(?:\s*<[a-zA-Z]+[^>]*>)*\s*(\d+)\s*(?:<\/[a-zA-Z]+>\s*)*<\/\1>/g, (match, tagName, num) => {
            return `<p class="text-center text-4xl font-serif font-light italic text-purple-300/95 my-16 tracking-widest block w-full select-none">${num}</p>`;
        });
    }, [content, isBunnyGirl]);

    useEffect(() => {
        if (nextChapter && isOrv) {
            router.prefetch(`${baseReadPath}?c=${nextChapter.chapter}`);
        }
    }, [nextChapter, router, baseReadPath, isOrv]);


    useEffect(() => {
        if (!isInitialized) return;

        localStorage.setItem('cote-theme', theme);
        localStorage.setItem('cote-fontSize', fontSize.toString());
        localStorage.setItem('cote-lineHeight', lineHeight.toString());
        localStorage.setItem('cote-fontFamily', fontFamily);
        localStorage.setItem('cote-fontWeight', fontWeight.toString());

        localStorage.setItem('cote-solidBackground', solidBackground.toString());
        localStorage.setItem('cote-textAlign', textAlign);
        localStorage.setItem('cote-indentParagraphs', indentParagraphs.toString());
        localStorage.setItem('cote-autoHyphenation', autoHyphenation.toString());

        window.dispatchEvent(new CustomEvent("reader-theme-changed", { detail: theme }));
    }, [theme, fontSize, lineHeight, fontFamily, fontWeight, solidBackground, textAlign, indentParagraphs, autoHyphenation, isInitialized]);

    useEffect(() => {
        // Fetch star count from GitHub API on mount
        fetch("https://api.github.io/repos/NITHINSPACETIME/novels-reader")
            .then(res => res.json())
            .then(data => {
                if (data && typeof data.stargazers_count === "number") {
                    setStarCount(data.stargazers_count);
                } else {
                    setStarCount(59); // Fallback to current star count
                }
            })
            .catch(() => {
                setStarCount(59);
            });
    }, []);

    // Cumulative Reading Timer tick
    useEffect(() => {
        setChapterElapsed(0);
        const interval = setInterval(() => {
            setReadingTime(prev => {
                const next = prev + 1;
                localStorage.setItem(`${novelSlug}-reading-time`, String(next));
                return next;
            });
            setChapterElapsed(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [novelSlug, volumeId, chapterIndex]);

    const formatReadingTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        const pad = (num: number) => String(num).padStart(2, '0');
        if (h > 0) return `${h}h ${pad(m)}m ${pad(s)}s`;
        return `${m}m ${pad(s)}s`;
    };

    const wordCount = useMemo(() => {
        if (!content) return 0;
        const cleanText = content.replace(/<[^>]*>/g, ' ');
        const words = cleanText.trim().split(/\s+/).filter(Boolean);
        return words.length;
    }, [content]);

    const estimatedTotalSeconds = useMemo(() => {
        return Math.max(60, Math.ceil((wordCount / 200) * 60));
    }, [wordCount]);

    const remainingReadingTime = Math.max(0, estimatedTotalSeconds - chapterElapsed);

    // Deterministic rating / likes seed
    const seededLikes = useMemo(() => {
        const seed = volumeId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + chapterIndex * 13;
        return (seed % 120) + 35;
    }, [volumeId, chapterIndex]);

    const seededVotes = useMemo(() => {
        const seed = volumeId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + chapterIndex * 7;
        return (seed % 80) + 15;
    }, [volumeId, chapterIndex]);

    const seededStars = useMemo(() => {
        const seed = volumeId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + chapterIndex * 3;
        return parseFloat((4.2 + (seed % 9) * 0.1).toFixed(1));
    }, [volumeId, chapterIndex]);

    useEffect(() => {
        const liked = localStorage.getItem(`${novelSlug}-likes-${volumeId}-${chapterIndex}`) === 'true';
        const rating = parseInt(localStorage.getItem(`${novelSlug}-rating-${volumeId}-${chapterIndex}`) || '0');
        setChapterLiked(liked);
        setChapterRating(rating);
    }, [novelSlug, volumeId, chapterIndex]);

    const toggleLike = () => {
        const next = !chapterLiked;
        setChapterLiked(next);
        localStorage.setItem(`${novelSlug}-likes-${volumeId}-${chapterIndex}`, String(next));
    };

    const handleRate = (stars: number) => {
        setChapterRating(stars);
        localStorage.setItem(`${novelSlug}-rating-${volumeId}-${chapterIndex}`, String(stars));
    };

    // Custom accent color handle
    const handleColorChange = (newColor: string) => {
        setCustomAccentColor(newColor);
        localStorage.setItem(`${novelSlug}-custom-color`, newColor);
        window.dispatchEvent(new CustomEvent("accent-color-changed", { detail: newColor }));
    };

    // Bookmark / Highlights Managers
    const isBookmarked = bookmarks.some(b => b.type === 'bookmark' && b.volumeId === volumeId && b.chapterIndex === chapterIndex);

    const toggleBookmark = () => {
        if (isBookmarked) {
            const updated = bookmarks.filter(b => !(b.type === 'bookmark' && b.volumeId === volumeId && b.chapterIndex === chapterIndex));
            setBookmarks(updated);
            localStorage.setItem(`${novelSlug}-bookmarks`, JSON.stringify(updated));
        } else {
            const newBookmark = {
                id: `bm-${Date.now()}`,
                type: 'bookmark',
                volumeId,
                chapterIndex,
                chapterTitle: title,
                timestamp: new Date().toISOString()
            };
            const updated = [...bookmarks, newBookmark];
            setBookmarks(updated);
            localStorage.setItem(`${novelSlug}-bookmarks`, JSON.stringify(updated));
        }
    };

    useEffect(() => {
        const handleActionToggle = () => {
            toggleBookmark();
        };
        const handleGetState = () => {
            window.dispatchEvent(new CustomEvent("reader-bookmark-state-changed", { detail: isBookmarked }));
        };
        
        window.addEventListener("reader-action-bookmark-toggle", handleActionToggle);
        window.addEventListener("reader-get-bookmark-state", handleGetState);
        
        window.dispatchEvent(new CustomEvent("reader-bookmark-state-changed", { detail: isBookmarked }));
        
        return () => {
            window.removeEventListener("reader-action-bookmark-toggle", handleActionToggle);
            window.removeEventListener("reader-get-bookmark-state", handleGetState);
        };
    }, [isBookmarked]);

    const addHighlight = () => {
        if (!selectedText.trim()) return;
        const newHighlight = {
            id: `hl-${Date.now()}`,
            type: 'highlight',
            volumeId,
            chapterIndex,
            chapterTitle: title,
            text: selectedText,
            note: noteText,
            color: highlightColor,
            timestamp: new Date().toISOString()
        };
        const updated = [...bookmarks, newHighlight];
        setBookmarks(updated);
        localStorage.setItem(`${novelSlug}-bookmarks`, JSON.stringify(updated));
        
        // Reset selection popover
        setShowSelectionMenu(false);
        setSelectedText("");
        setSelectionCoords(null);
        setNoteText("");
        window.getSelection()?.removeAllRanges();
    };

    const deleteBookmark = (id: string) => {
        const updated = bookmarks.filter(b => b.id !== id);
        setBookmarks(updated);
        localStorage.setItem(`${novelSlug}-bookmarks`, JSON.stringify(updated));
    };



    // Text Selection Event Hooks
    useEffect(() => {
        let debounceTimer: NodeJS.Timeout;

        const handleSelection = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const sel = window.getSelection();
                if (!sel || sel.isCollapsed || !sel.toString().trim()) {
                    return;
                }
                const text = sel.toString();
                if (text.length > 500) return; // avoid huge highlights

                setSelectedText(text);

                try {
                    const range = sel.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    setSelectionCoords({
                        x: rect.left + window.scrollX + rect.width / 2,
                        y: rect.top + window.scrollY - 8
                    });
                    setShowSelectionMenu(true);
                } catch (e) {
                    console.error(e);
                }
            }, 150);
        };

        const handleDocTouchOrClick = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest('.selection-menu-popover') || target.closest('mark')) {
                return;
            }
            setShowSelectionMenu(false);
            setSelectedText("");
            setSelectionCoords(null);
            setNoteText("");
            setReaderNotePopover(null);
        };

        document.addEventListener("selectionchange", handleSelection);
        document.addEventListener("mousedown", handleDocTouchOrClick);
        document.addEventListener("touchstart", handleDocTouchOrClick, { passive: true });
        
        return () => {
            clearTimeout(debounceTimer);
            document.removeEventListener("selectionchange", handleSelection);
            document.removeEventListener("mousedown", handleDocTouchOrClick);
            document.removeEventListener("touchstart", handleDocTouchOrClick);
        };
    }, []);

    const getSplitTitle = (titleStr: string) => {
        if (!titleStr) return { line1: "", line2: "" };
        const match = titleStr.match(/^((?:Chapter|Side\s+Story|Special\s+Episode|Bonus\s+Chapter)\s+\d+)(:?)([\-\s]*)(.*)$/i);
        if (match) {
            const l1 = (match[1] + (match[2] || ":")).toUpperCase();
            const l2 = match[4].trim().toUpperCase();
            return { line1: l1, line2: l2 || l1 };
        }
        const ssMatch = titleStr.match(/^(Side\s+Story|Special\s+Episode|Bonus\s+Chapter)(:?)([\-\s]*)(.*)$/i);
        if (ssMatch) {
            const l1 = (ssMatch[1] + (ssMatch[2] || ":")).toUpperCase();
            const l2 = ssMatch[4].trim().toUpperCase();
            return { line1: l1, line2: l2 || l1 };
        }
        
        // Match generic titles split by a colon or dash (e.g. "Prologue: Clown", "Interlude - The Fool")
        const splitMatch = titleStr.match(/^([a-zA-Z0-9\s]+)([:\-\u2013\u2014])\s*(.+)$/);
        if (splitMatch) {
            const l1 = (splitMatch[1].trim() + (splitMatch[2] === ":" ? ":" : "")).toUpperCase();
            const l2 = splitMatch[3].trim().toUpperCase();
            return { line1: l1, line2: l2 };
        }
        
        return { line1: "", line2: titleStr.toUpperCase() };
    };

    const chapterHeader = useMemo(() => {
        const { line1, line2 } = getSplitTitle(title);
        const isLotmOrCoi = isLotm || volumeId.startsWith('coi') || volumeId.startsWith('lotm');
        const isRi = isReverendInsanity || volumeId.startsWith('ri');
        const isAd = volumeId.startsWith('ad');
        return (
            <div className="text-center mt-6 mb-12 font-serif select-none">
                {line1 && (
                    <div className={cn(
                        isAd 
                            ? "text-lg md:text-xl text-pink-500 font-serif mb-2 tracking-[0.15em] flex items-center justify-center gap-2 font-medium"
                            : "text-lg md:text-xl uppercase tracking-[0.18em] font-bold mb-3",
                        !isAd && (
                            isRi 
                                ? "text-red-500" 
                                : isLotmOrCoi 
                                    ? "text-amber-500" 
                                    : isTensura 
                                        ? "text-cyan-400" 
                                        : isCote 
                                            ? "text-red-500" 
                                            : "text-indigo-400"
                        )
                    )}>
                        {isAd ? (
                            <>
                                <span>🌸</span>
                                <span>{line1}</span>
                                <span>🌸</span>
                            </>
                        ) : line1}
                    </div>
                )}
                <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide max-w-2xl mx-auto leading-tight">
                    {line2}
                </h1>
                <div className={cn(
                    "w-20 h-[1.5px] mx-auto mt-8 mb-4",
                    isAd
                        ? "bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
                        : isRi
                            ? "bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
                            : isLotmOrCoi 
                                ? "bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" 
                                : isTensura
                                    ? "bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
                                    : isCote
                                        ? "bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
                                        : "bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
                )} />
            </div>
        );
    }, [title, isLotm, volumeId, isReverendInsanity, isTensura, isCote]);

    const chapterHeaderHtml = useMemo(() => {
        const { line1, line2 } = getSplitTitle(title);
        const isLotmOrCoi = isLotm || volumeId.startsWith('coi') || volumeId.startsWith('lotm');
        const isRi = isReverendInsanity || volumeId.startsWith('ri');
        const isAd = volumeId.startsWith('ad');
        
        const subtitleClass = isAd 
            ? 'text-lg md:text-xl text-pink-500 font-serif mb-2 tracking-[0.15em] flex items-center justify-center gap-2 font-medium' 
            : `text-lg md:text-xl uppercase tracking-[0.18em] font-bold mb-3 ${
                isRi 
                    ? 'text-red-500' 
                    : isLotmOrCoi 
                        ? 'text-amber-500' 
                        : isTensura 
                            ? 'text-cyan-400' 
                            : isCote 
                                ? 'text-red-500' 
                                : 'text-indigo-400'
            }`;
            
        const dividerClass = isAd 
            ? 'bg-gradient-to-r from-transparent via-pink-500/40 to-transparent' 
            : isRi 
                ? 'bg-gradient-to-r from-transparent via-red-600/40 to-transparent' 
                : isLotmOrCoi 
                    ? 'bg-gradient-to-r from-transparent via-amber-500/40 to-transparent' 
                    : isTensura
                        ? 'bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent'
                        : isCote
                            ? 'bg-gradient-to-r from-transparent via-red-500/40 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent';

        return `
            <div class="text-center mt-6 mb-12 font-serif select-none reader-chapter-header">
                ${line1 ? `
                    <div class="${subtitleClass}">
                        ${isAd ? `<span>🌸</span> <span>${line1}</span> <span>🌸</span>` : line1}
                    </div>
                ` : ''}
                <h1 class="text-2xl md:text-3xl font-bold uppercase tracking-wide max-w-2xl mx-auto leading-tight">
                    ${line2}
                </h1>
                <div class="w-20 h-[1.5px] mx-auto mt-8 mb-4 ${dividerClass}"></div>
            </div>
        `;
    }, [title, isLotm, volumeId, isReverendInsanity, isTensura, isCote]);



    const headerStyle = theme === 'light'
        ? "bg-white text-gray-900 border-gray-200"
        : theme === 'sepia' ? "bg-[#f4ecd8] text-[#5b4636] border-[#e8dcc8]"
            : theme === 'midnight' ? "bg-[#0f172a] text-[#e2e8f0] border-[#1e293b]"
                : theme === 'forest' ? "bg-[#1a2321] text-[#d0ddd7] border-[#2a3633]"
                    : theme === 'oled' ? "bg-black text-gray-300 border-gray-900"
                        : theme === 'espresso' ? "bg-[#2b2523] text-[#e0d0cb] border-[#3d322f]"
                            : theme === 'gray' ? "bg-[#27272a] text-[#e4e4e7] border-[#3f3f46]"
                                : "bg-[#0d1117] text-gray-200 border-[#21262d]";


    const handleContentClickInternal = (e: React.MouseEvent<HTMLDivElement>) => {
        handleContentClick();

        const target = e.target as HTMLElement;
        const mark = target.closest('mark');
        if (mark) {
            const highlightId = mark.getAttribute('data-highlight-id');
            if (highlightId) {
                const bm = bookmarks.find(b => b.id === highlightId);
                if (bm) {
                    const rect = mark.getBoundingClientRect();
                    setReaderNotePopover({
                        id: bm.id,
                        text: bm.text,
                        note: bm.note,
                        x: rect.left + window.scrollX + rect.width / 2,
                        y: rect.top + window.scrollY - 10
                    });
                    return;
                }
            }
        }

        setReaderNotePopover(null);

        const anchor = target.closest('a');

        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href && (
                href.startsWith('/read/') ||
                href.startsWith('/cote/read/') ||
                href.startsWith('/rezero/read/') ||
                href.startsWith('/bunny-girl/read/') ||
                href.startsWith('/mushoku-tensei/read/') ||
                href.startsWith('/lotm/read/') ||
                href.startsWith('/orv/read/')
            )) {
                e.preventDefault();
                router.push(href);
            }
        }
    };


    if (!isInitialized) {
        return <div className="min-h-screen bg-black" />;
    }

    const activeBorderClass = isOrv 
        ? "border-cyan-500 bg-cyan-500/10 text-white" 
        : (isRezero 
            ? "border-violet-500 bg-violet-500/10 text-white" 
            : (isBunnyGirl 
                ? "border-purple-400 bg-purple-500/10 text-white" 
                : (isMushokuTensei 
                    ? "border-emerald-500 bg-emerald-500/10 text-white" 
                    : (isLotm 
                        ? "border-indigo-500 bg-indigo-500/10 text-white" 
                        : (isApothecaryDiaries
                            ? "border-pink-500 bg-pink-500/10 text-white"
                            : "border-red-500 bg-red-500/10 text-white")))));

    const themeBgColors = {
        dark: isOrv ? "#020204" : (isRezero ? "#05030a" : (isBunnyGirl ? "#0b0816" : (isApothecaryDiaries ? "#0b0610" : "#14151b"))),
        light: "#ffffff",
        sepia: "#f4ecd8",
        slatedark: "#0d1117",
        midnight: "#0f172a",
        forest: "#1a2321",
        oled: "#000000",
        espresso: "#2b2523",
        gray: "#27272a"
    };

    const themeTextColors = {
        dark: isOrv ? "#e2e8f0" : (isRezero ? "#f4f4f5" : (isBunnyGirl ? "#ece2f9" : (isApothecaryDiaries ? "#f9eaf3" : "#b6bccc"))),
        light: "#111827",
        sepia: "#5b4636",
        slatedark: "#c9d1d9",
        midnight: "#cbd5e1",
        forest: "#c1d1cb",
        oled: "#a3a3a3",
        espresso: "#d6c6c1",
        gray: "#d4d4d8"
    };

    const getBgColor = (t: ReaderTheme) => {
        let baseBg = "#14151b";
        if (t in oklchThemeStyles) {
            baseBg = oklchThemeStyles[t].bg;
        } else if (t in themeBgColors) {
            baseBg = themeBgColors[t as keyof typeof themeBgColors];
        }
        
        if (!solidBackground) {
            if (baseBg.startsWith('oklch')) {
                return baseBg.replace(')', ' / 0.45)');
            } else if (baseBg.startsWith('#')) {
                return baseBg + '73';
            }
        }
        return baseBg;
    };

    const settingsPanelContent = (
        <>
            <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom: `1px solid ${isThemeLight(theme) ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}` }}>
                <h3 className={cn("font-bold text-xs uppercase tracking-wider", isThemeLight(theme) ? "text-gray-500" : "text-gray-400")}>Reader Settings</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => setSettingsOpen(false)}>
                    <X className="h-4 w-4" />
                </Button>
            </div>

            {/* Tab Bar */}
            <div className={cn("flex p-1 rounded-xl mb-5", isThemeLight(theme) ? "bg-gray-100" : "bg-white/5")}>
                {(['interface', 'readability', 'appearance'] as const).map(tab => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setSettingsTab(tab)}
                        className={cn(
                            "flex-1 text-[11px] py-2 rounded-lg transition-all font-semibold capitalize cursor-pointer",
                            settingsTab === tab
                                ? "bg-[var(--primary-color)] text-white shadow-sm"
                                : (isThemeLight(theme) ? "hover:bg-gray-200/60 text-gray-500" : "hover:bg-white/5 text-gray-400")
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="no-scrollbar">
                {/* INTERFACE TAB */}
                {settingsTab === 'interface' && (
                    <div className="space-y-5 animate-fadeIn">

                        {/* Margins */}
                        <div className="space-y-2">
                            <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Content Margins</label>
                            <div className={cn("flex p-1 rounded-xl border", isThemeLight(theme) ? "bg-gray-50 border-gray-200" : "bg-black/20 border-white/10")}>
                                {[{ id: 'narrow', label: 'Narrow' }, { id: 'normal', label: 'Normal' }, { id: 'wide', label: 'Wide' }].map(marginItem => (
                                    <button
                                        key={marginItem.id}
                                        type="button"
                                        onClick={() => {
                                            setMargins(marginItem.id as any);
                                            localStorage.setItem(`${novelSlug}-margins`, marginItem.id);
                                        }}
                                        className={cn(
                                            "text-xs py-2 rounded-lg transition-all font-medium flex-1 cursor-pointer",
                                            margins === marginItem.id
                                                ? "bg-[var(--primary-color)] text-white shadow-sm"
                                                : (isThemeLight(theme) ? "hover:bg-gray-200/55 text-gray-600" : "hover:bg-white/5 text-gray-400")
                                        )}
                                    >
                                        {marginItem.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Text Alignment */}
                        <div className="space-y-2">
                            <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Text Alignment</label>
                            <div className={cn("flex p-1 rounded-xl border", isThemeLight(theme) ? "bg-gray-50 border-gray-200" : "bg-black/20 border-white/10")}>
                                {[
                                    { id: 'left', label: 'Left' },
                                    { id: 'justify', label: 'Justify' },
                                    { id: 'center', label: 'Center' },
                                    { id: 'right', label: 'Right' }
                                ].map(align => (
                                    <button
                                        key={align.id}
                                        type="button"
                                        onClick={() => setTextAlign(align.id as any)}
                                        className={cn(
                                            "text-[11px] py-2 rounded-lg transition-all font-medium flex-1 cursor-pointer",
                                            textAlign === align.id
                                                ? "bg-[var(--primary-color)] text-white shadow-sm"
                                                : (isThemeLight(theme) ? "hover:bg-gray-200/55 text-gray-600" : "hover:bg-white/5 text-gray-400")
                                        )}
                                    >
                                        {align.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Toggle Options */}
                        <div className="space-y-3 pt-2" style={{ borderTop: `1px solid ${isThemeLight(theme) ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}` }}>
                            <div className="flex items-center justify-between">
                                <label className={cn("text-xs font-medium", isThemeLight(theme) ? "text-gray-700" : "text-gray-300")}>Solid Background</label>
                                <Switch checked={solidBackground} onChange={(v) => setSolidBackground(v)} lightTheme={isThemeLight(theme)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className={cn("text-xs font-medium", isThemeLight(theme) ? "text-gray-700" : "text-gray-300")}>Indent Paragraphs</label>
                                <Switch checked={indentParagraphs} onChange={(v) => setIndentParagraphs(v)} lightTheme={isThemeLight(theme)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className={cn("text-xs font-medium", isThemeLight(theme) ? "text-gray-700" : "text-gray-300")}>Auto-Hyphenation</label>
                                <Switch checked={autoHyphenation} onChange={(v) => setAutoHyphenation(v)} lightTheme={isThemeLight(theme)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className={cn("text-xs font-medium", isThemeLight(theme) ? "text-gray-700" : "text-gray-300")}>Show Reading Time</label>
                                <Switch 
                                    checked={showReadingTimePill} 
                                    onChange={(v) => {
                                        setShowReadingTimePill(v);
                                        localStorage.setItem(`${novelSlug}-show-reading-time`, String(v));
                                    }} 
                                    lightTheme={isThemeLight(theme)} 
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* READABILITY TAB */}
                {settingsTab === 'readability' && (
                    <div className="space-y-5 animate-fadeIn">
                        {/* Font Family */}
                        <div className="space-y-2">
                            <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Font Family</label>
                            <select
                                value={fontFamily}
                                onChange={(e) => setFontFamily(e.target.value as ReaderFontFamily)}
                                className={cn(
                                    "w-full rounded-xl border text-xs px-3 py-2.5 outline-none cursor-pointer focus:ring-1 focus:ring-[var(--primary-color)]",
                                    isThemeLight(theme) ? "bg-white border-gray-200 text-black" : "bg-black/25 border-white/10 text-white"
                                )}
                            >
                                {[
                                    { id: 'alegreya', name: 'Alegreya' },
                                    { id: 'serif', name: 'Playfair Serif' },
                                    { id: 'sans', name: 'Inter Sans' },
                                    { id: 'merriweather', name: 'Merriweather' },
                                    { id: 'roboto', name: 'Roboto' },
                                    { id: 'lora', name: 'Lora' },
                                    { id: 'bookerly', name: 'Bookerly' },
                                    { id: 'monospace', name: 'Monospace' },
                                    { id: 'ebgaramond', name: 'EB Garamond' },
                                    { id: 'crimsonpro', name: 'Crimson Pro' },
                                    { id: 'georgia', name: 'Georgia' },
                                    { id: 'verdana', name: 'Verdana' },
                                    { id: 'arial', name: 'Arial' },
                                    { id: 'timesnewroman', name: 'Times New Roman' },
                                    { id: 'helvetica', name: 'Helvetica' },
                                    { id: 'tahoma', name: 'Tahoma' },
                                    { id: 'systemui', name: 'System UI' },
                                    { id: 'trebuchetms', name: 'Trebuchet MS' },
                                    { id: 'couriernew', name: 'Courier New' }
                                ].map(fOpt => (
                                    <option key={fOpt.id} value={fOpt.id} className={isThemeLight(theme) ? "bg-white text-black" : "bg-zinc-900 text-white"}>
                                        {fOpt.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Font Size Slider */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Font Size</label>
                                <span className={cn("text-xs font-mono font-bold tabular-nums", isThemeLight(theme) ? "text-gray-800" : "text-gray-200")}>{fontSize}px</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setFontSize(prev => Math.max(12, prev - 1))}
                                    disabled={fontSize <= 12}
                                    className={cn(
                                        "p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed border flex items-center justify-center cursor-pointer",
                                        isThemeLight(theme) ? "border-gray-200 text-gray-700" : "border-zinc-700 text-gray-300"
                                    )}
                                    title="Decrease Font Size"
                                >
                                    <Minus className="w-3.5 h-3.5" />
                                </button>
                                <input
                                    type="range"
                                    min={12}
                                    max={32}
                                    step={1}
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                    className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer accent-[var(--primary-color)]"
                                    style={{
                                        background: `linear-gradient(to right, var(--primary-color) ${((fontSize - 12) / (32 - 12)) * 100}%, ${isThemeLight(theme) ? '#e5e7eb' : '#374151'} ${((fontSize - 12) / (32 - 12)) * 100}%)`
                                    }}
                                />
                                <button
                                    onClick={() => setFontSize(prev => Math.min(32, prev + 1))}
                                    disabled={fontSize >= 32}
                                    className={cn(
                                        "p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed border flex items-center justify-center cursor-pointer",
                                        isThemeLight(theme) ? "border-gray-200 text-gray-700" : "border-zinc-700 text-gray-300"
                                    )}
                                    title="Increase Font Size"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <div className={cn("flex justify-between text-[10px] tabular-nums px-7", isThemeLight(theme) ? "text-gray-400" : "text-gray-500")}>
                                <span>12px</span>
                                <span>32px</span>
                            </div>
                        </div>

                        {/* Line Height Slider */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Line Height</label>
                                <span className={cn("text-xs font-mono font-bold tabular-nums", isThemeLight(theme) ? "text-gray-800" : "text-gray-200")}>{lineHeight.toFixed(1)}</span>
                            </div>
                            <input
                                type="range"
                                min={1.0}
                                max={3.0}
                                step={0.1}
                                value={lineHeight}
                                onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[var(--primary-color)]"
                                style={{
                                    background: `linear-gradient(to right, var(--primary-color) ${((lineHeight - 1.0) / (3.0 - 1.0)) * 100}%, ${isThemeLight(theme) ? '#e5e7eb' : '#374151'} ${((lineHeight - 1.0) / (3.0 - 1.0)) * 100}%)`
                                }}
                            />
                            <div className={cn("flex justify-between text-[10px] tabular-nums", isThemeLight(theme) ? "text-gray-400" : "text-gray-500")}>
                                <span>1.0</span>
                                <span>3.0</span>
                            </div>
                        </div>

                        {/* Font Weight Slider */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Font Weight</label>
                                <span className={cn("text-xs font-mono font-bold tabular-nums", isThemeLight(theme) ? "text-gray-800" : "text-gray-200")}>{fontWeight}</span>
                            </div>
                            <input
                                type="range"
                                min={100}
                                max={900}
                                step={100}
                                value={fontWeight}
                                onChange={(e) => setFontWeight(parseInt(e.target.value))}
                                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[var(--primary-color)]"
                                style={{
                                    background: `linear-gradient(to right, var(--primary-color) ${((fontWeight - 100) / (900 - 100)) * 100}%, ${isThemeLight(theme) ? '#e5e7eb' : '#374151'} ${((fontWeight - 100) / (900 - 100)) * 100}%)`
                                }}
                            />
                            <div className={cn("flex justify-between text-[10px] tabular-nums", isThemeLight(theme) ? "text-gray-400" : "text-gray-500")}>
                                <span>Thin</span>
                                <span>Black</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* APPEARANCE TAB */}
                {settingsTab === 'appearance' && (
                    <div className="space-y-5 animate-fadeIn">
                        {/* Quick Theme */}
                        <div className="space-y-2">
                            <h4 className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Quick Theme</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { id: 'dark', name: 'Dark', bg: '#14151b' },
                                    { id: 'light', name: 'Light', bg: '#ffffff' },
                                    { id: 'slatedark', name: 'Tokyo', bg: '#0d1117' },
                                    { id: 'sepia', name: 'Sepia', bg: '#f4ecd8' },
                                    { id: 'midnight', name: 'Midnight', bg: '#0f172a' },
                                    { id: 'forest', name: 'Forest', bg: '#1a2321' },
                                    { id: 'oled', name: 'OLED', bg: '#000000' },
                                    { id: 'espresso', name: 'Espresso', bg: '#2b2523' },
                                    { id: 'gray', name: 'Gray', bg: '#27272a' },
                                ].map((tItem) => {
                                    const isActive = theme === tItem.id;
                                    return (
                                        <button
                                            key={tItem.id}
                                            type="button"
                                            onClick={() => setTheme(tItem.id as ReaderTheme)}
                                            className={cn(
                                                "flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all text-[10px] cursor-pointer",
                                                isActive
                                                    ? activeBorderClass
                                                    : (isThemeLight(theme) ? "border-gray-200 hover:bg-gray-50 text-gray-700" : "border-white/10 hover:bg-white/5 text-gray-400")
                                            )}
                                        >
                                            <div className="w-5 h-5 rounded-full border" style={{ backgroundColor: tItem.bg, borderColor: isThemeLight(theme) ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }} />
                                            {tItem.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* All Themes Dropdown */}
                        <div className="space-y-2">
                            <h4 className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>All Themes</h4>
                            <select
                                value={theme}
                                onChange={(e) => setTheme(e.target.value as ReaderTheme)}
                                className={cn(
                                    "w-full rounded-xl border text-xs px-3 py-2.5 outline-none cursor-pointer focus:ring-1 focus:ring-[var(--primary-color)]",
                                    isThemeLight(theme) ? "bg-white border-gray-200 text-black" : "bg-black/25 border-white/10 text-white"
                                )}
                            >
                                {[
                                    { id: 'dark', name: 'Dark' },
                                    { id: 'light', name: 'Light' },
                                    { id: 'sepia', name: 'Sepia' },
                                    { id: 'slatedark', name: 'Tokyo' },
                                    { id: 'midnight', name: 'Midnight' },
                                    { id: 'forest', name: 'Forest' },
                                    { id: 'oled', name: 'OLED' },
                                    { id: 'espresso', name: 'Espresso' },
                                    { id: 'gray', name: 'Gray' },
                                    { id: 'sunset', name: 'Sunset' },
                                    { id: 'cupcake', name: 'Cupcake' },
                                    { id: 'bumblebee', name: 'Bumblebee' },
                                    { id: 'emerald', name: 'Emerald' },
                                    { id: 'corporate', name: 'Corporate' },
                                    { id: 'synthwave', name: 'Synthwave' },
                                    { id: 'retro', name: 'Retro' },
                                    { id: 'cyberpunk', name: 'Cyberpunk' },
                                    { id: 'valentine', name: 'Valentine' },
                                    { id: 'halloween', name: 'Halloween' },
                                    { id: 'garden', name: 'Garden' },
                                    { id: 'aqua', name: 'Aqua' },
                                    { id: 'lofi', name: 'LoFi' },
                                    { id: 'pastel', name: 'Pastel' },
                                    { id: 'fantasy', name: 'Fantasy' },
                                    { id: 'wireframe', name: 'Wireframe' },
                                    { id: 'black', name: 'Black' },
                                    { id: 'luxury', name: 'Luxury' },
                                    { id: 'dracula', name: 'Dracula' },
                                    { id: 'cmyk', name: 'CMYK' },
                                    { id: 'autumn', name: 'Autumn' },
                                    { id: 'business', name: 'Business' },
                                    { id: 'acid', name: 'Acid' },
                                    { id: 'lemonade', name: 'Lemonade' },
                                    { id: 'night', name: 'Night' },
                                    { id: 'coffee', name: 'Coffee' },
                                    { id: 'winter', name: 'Winter' },
                                    { id: 'dim', name: 'Dim' },
                                    { id: 'nord', name: 'Nord' }
                                ].map(tOpt => (
                                    <option key={tOpt.id} value={tOpt.id} className={isThemeLight(theme) ? "bg-white text-black" : "bg-zinc-900 text-white"}>
                                        {tOpt.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Accent Color */}
                        <div className="space-y-2">
                            <label className={cn("text-xs font-semibold uppercase tracking-wide", isThemeLight(theme) ? "text-gray-600" : "text-gray-300")}>Accent Color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={customAccentColor}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCustomAccentColor(val);
                                        localStorage.setItem(`${novelSlug}-custom-color`, val);
                                        window.dispatchEvent(new CustomEvent("accent-color-changed"));
                                    }}
                                    className="w-9 h-9 rounded-lg border bg-transparent cursor-pointer"
                                />
                                <div className="flex gap-2 flex-wrap">
                                    {["#ef4444", "#f59e0b", "#8b5cf6", "#d946ef", "#10b981", "#06b6d4"].map(c => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => {
                                                setCustomAccentColor(c);
                                                localStorage.setItem(`${novelSlug}-custom-color`, c);
                                                window.dispatchEvent(new CustomEvent("accent-color-changed"));
                                            }}
                                            className={cn(
                                                "w-6 h-6 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform",
                                                customAccentColor === c ? "border-white shadow-lg scale-110" : "border-transparent"
                                            )}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 flex flex-col gap-2.5" style={{ borderTop: `1px solid ${isThemeLight(theme) ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}` }}>
                <div className="text-[10px] opacity-50 text-center font-mono uppercase tracking-widest">
                    Time Remaining: {formatReadingTime(remainingReadingTime)}
                </div>
                <button
                    onClick={resetSettings}
                    type="button"
                    className="w-full h-9 text-xs gap-2 flex items-center justify-center cursor-pointer rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow active:scale-95 transition-all"
                >
                    <RotateCcw className="h-3 w-3" /> Reset to Defaults
                </button>
            </div>
        </>
    );



    return (
        <div className={cn(
            isFullscreen && !hasFullscreenSupport 
                ? "fixed inset-0 z-50 overflow-y-auto flex flex-col transition-colors duration-300 print:bg-white print:text-black" 
                : "min-h-screen flex flex-col transition-colors duration-300 print:bg-white print:text-black", 
            theme in themeMap ? themeMap[theme as keyof typeof themeMap] : ""
        )}
            style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                fontFamily: fontFamily === 'serif' ? 'var(--font-playfair), ui-serif, Georgia, serif'
                    : fontFamily === 'sans' ? 'var(--font-inter), ui-sans-serif, system-ui, sans-serif'
                        : fontFamily === 'merriweather' ? 'var(--font-merriweather), serif'
                            : fontFamily === 'roboto' ? 'var(--font-roboto), sans-serif'
                                : fontFamily === 'lora' ? 'var(--font-lora), serif'
                                : fontFamily === 'alegreya' ? 'Alegreya, serif'
                                : fontFamily === 'bookerly' ? 'Bookerly, serif'
                                : fontFamily === 'monospace' ? 'monospace'
                                : fontFamily === 'ebgaramond' ? '"EB Garamond", serif'
                                : fontFamily === 'crimsonpro' ? '"Crimson Pro", serif'
                                : fontFamily === 'georgia' ? 'Georgia, serif'
                                : fontFamily === 'verdana' ? 'Verdana, sans-serif'
                                : fontFamily === 'arial' ? 'Arial, sans-serif'
                                : fontFamily === 'timesnewroman' ? '"Times New Roman", serif'
                                : fontFamily === 'helvetica' ? 'Helvetica, sans-serif'
                                : fontFamily === 'tahoma' ? 'Tahoma, sans-serif'
                                : fontFamily === 'systemui' ? 'system-ui, sans-serif'
                                : fontFamily === 'trebuchetms' ? '"Trebuchet MS", sans-serif'
                                : fontFamily === 'couriernew' ? '"Courier New", monospace'
                                : 'ui-sans-serif, system-ui, sans-serif',
                fontWeight: fontWeight,
                backgroundColor: getBgColor(theme),
                color: theme in oklchThemeStyles 
                    ? oklchThemeStyles[theme].text 
                    : (theme in themeTextColors ? themeTextColors[theme as keyof typeof themeTextColors] : '#cbd5e1'),
                ...(!solidBackground ? { backdropFilter: "blur(20px)" } : {}),
                "--reader-bg": getBgColor(theme)
            } as React.CSSProperties}>



            {/* Floating top pill navigation header */}
            {!(isFullscreen && !hasFullscreenSupport) && (
                <div 
                    className={cn(
                        "fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl flex items-center justify-between gap-2 px-4 py-2 rounded-full border shadow-xl transition-all duration-300 backdrop-blur-xl",
                        (scrollDirection === 'down' && (typeof window !== 'undefined' ? window.scrollY > 50 : false) && !isHeaderHovered) || sidebarOpen ? "-translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100 top-4",
                        theme === 'light' ? "bg-white/80 border-gray-200 text-gray-900" :
                        theme === 'sepia' ? "bg-[#f4ecd8]/80 border-[#eaddcf] text-[#5b4636]" :
                        theme === 'oled' ? "bg-black/80 border-zinc-900 text-zinc-350" :
                        theme === 'espresso' ? "bg-[#2b2523]/80 border-[#403632] text-[#d6c6c1]" :
                        theme === 'midnight' ? "bg-[#0f172a]/80 border-slate-800 text-slate-300" :
                        theme === 'forest' ? "bg-[#1a2321]/80 border-[#2a3633] text-[#c1d1cb]" :
                        theme === 'slatedark' ? "bg-[#0d1117]/80 border-gray-800 text-gray-300" :
                        theme === 'gray' ? "bg-[#27272a]/80 border-zinc-700 text-zinc-300" :
                        "bg-[#0d1117]/80 border-gray-800 text-gray-300"
                    )}
                    onMouseEnter={() => setIsHeaderHovered(true)}
                    onMouseLeave={() => setIsHeaderHovered(false)}
                >
                    {/* Left: Back Arrow and Sidebar Hamburger */}
                    <div className="flex items-center gap-1 shrink-0">
                        <SmartLink isOrv={isOrv} href={detailsLink} title="Back to Volume">
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-inherit hover:bg-white/10 active:scale-95 transition-all" aria-label="Back">
                                <ArrowLeft className="h-4.5 w-4.5" />
                            </Button>
                        </SmartLink>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setSidebarOpen(!sidebarOpen)} 
                            className="h-9 w-9 rounded-full text-inherit hover:bg-white/10 active:scale-95 transition-all" 
                            aria-label="Menu"
                        >
                            <Menu className="h-4.5 w-4.5" />
                        </Button>
                    </div>

                    {/* Center: Chapter Name */}
                    <div className="flex-1 min-w-0 text-center px-2 select-none">
                        <MarqueeText 
                            text={title}
                            className={cn(
                                "block font-semibold text-xs md:text-sm leading-tight text-center w-full",
                                isOrv && "font-cinzel tracking-widest text-cyan-400 uppercase text-[11px] md:text-xs"
                            )}
                        />
                        {volumeTitle && (
                            <MarqueeText 
                                text={volumeTitle}
                                className="block text-[9px] md:text-[10px] opacity-50 leading-none mt-0.5 text-center w-full"
                            />
                        )}
                    </div>

                    {/* Right: Settings, 3-dots, and User Profile Menu */}
                    <div className="flex items-center gap-1 shrink-0 relative">
                        <div className="" ref={settingsRef}>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-9 w-9 rounded-full text-inherit hover:bg-white/10 active:scale-95 transition-all" 
                                onClick={() => setSettingsOpen(!settingsOpen)}
                                title="Reader Settings"
                            >
                                <Settings className="h-4.5 w-4.5" />
                            </Button>

                            {settingsOpen && (
                                isMobileSize ? (
                                    typeof document !== 'undefined' ? createPortal(
                                        <>
                                            <div 
                                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn" 
                                                onClick={() => setSettingsOpen(false)} 
                                            />
                                            <div 
                                                className="fixed bottom-0 left-0 right-0 w-full p-6 rounded-t-3xl shadow-2xl border z-50 max-h-[85vh] overflow-y-auto transition-all duration-350 no-scrollbar"
                                                style={{
                                                    WebkitOverflowScrolling: 'touch',
                                                    backgroundColor: getBgColor(theme),
                                                    color: theme in oklchThemeStyles 
                                                        ? oklchThemeStyles[theme].text 
                                                        : (theme in themeTextColors ? themeTextColors[theme as keyof typeof themeTextColors] : '#cbd5e1'),
                                                    borderColor: isThemeLight(theme) ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
                                                    ...(!solidBackground ? { backdropFilter: "blur(20px)" } : {})
                                                }}
                                            >
                                                {settingsPanelContent}
                                            </div>
                                        </>,
                                        document.body
                                    ) : null
                                ) : (
                                    <div 
                                        className="absolute right-0 top-full mt-2 w-[460px] p-6 rounded-2xl shadow-2xl border z-50 max-h-[80vh] overflow-y-auto no-scrollbar"
                                        style={{
                                            backgroundColor: getBgColor(theme),
                                            color: theme in oklchThemeStyles 
                                                ? oklchThemeStyles[theme].text 
                                                : (theme in themeTextColors ? themeTextColors[theme as keyof typeof themeTextColors] : '#cbd5e1'),
                                            borderColor: isThemeLight(theme) ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
                                            ...(!solidBackground ? { backdropFilter: "blur(20px)" } : {})
                                        }}
                                    >
                                        {settingsPanelContent}
                                    </div>
                                )
                            )}
                        </div>

                        <div className="relative" ref={mobileMenuRef}>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-9 w-9 rounded-full text-inherit hover:bg-white/10 active:scale-95 transition-all" 
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                title="More Actions"
                            >
                                <MoreVertical className="h-4.5 w-4.5" />
                            </Button>
                            {mobileMenuOpen && (
                                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl shadow-2xl border bg-popover p-1.5 z-50 flex flex-col gap-1">
                                    <button 
                                        onClick={() => { toggleBookmark(); setMobileMenuOpen(false); }} 
                                        className={cn(
                                            "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors text-left cursor-pointer",
                                            isBookmarked && "text-[var(--primary-color)] font-semibold"
                                        )}
                                    >
                                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                                            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                                        </svg>
                                        {isBookmarked ? "Bookmarked" : "Bookmark"}
                                    </button>
                                    <button onClick={() => { toggleFullscreen(); setMobileMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                        {isFullscreen ? <Minimize className="h-4 w-4 shrink-0" /> : <Maximize className="h-4 w-4 shrink-0" />}
                                        {isFullscreen ? "Exit Full" : "Fullscreen"}
                                    </button>
                                    <button onClick={() => { setCommentsOpen(true); setMobileMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                        <MessageCircle className="h-4 w-4 shrink-0" /> Discuss
                                    </button>
                                    <button onClick={() => { setShortcutsOpen(true); setMobileMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                        <Keyboard className="h-4 w-4 shrink-0" /> Shortcuts
                                    </button>
                                    {isCote && (
                                        <>
                                            <div className="h-px bg-white/5 my-1" />
                                            <button onClick={() => { handlePrint(); setMobileMenuOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                                <Printer className="h-4 w-4 shrink-0" /> Print
                                            </button>
                                            <button onClick={() => { handleDownload(); setMobileMenuOpen(false); }} disabled={!epubSource} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors disabled:opacity-40 text-left">
                                                <FileDown className="h-4 w-4 shrink-0" /> Download
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        <UserMenu
                            onSignIn={() => setAuthModalOpen(true)}
                            onProfile={() => setProfileModalOpen(true)}
                        />


                    </div>
                </div>
            )}

            {shortcutsOpen && typeof document !== 'undefined' && createPortal(
                <ShortcutsModal
                    isOpen={shortcutsOpen}
                    onClose={() => setShortcutsOpen(false)}
                />,
                document.body
            )}



            <div className="flex flex-1 relative overflow-hidden">
                <aside className={cn(
                    "fixed inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 ease-in-out border-r shadow-2xl overflow-y-auto pt-16 pb-4 px-4 flex flex-col print:hidden will-change-transform transform-gpu",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full",
                    theme === 'light' ? "bg-gray-50 border-gray-200"
                        : theme === 'sepia' ? "bg-[#f4ecd8] border-[#eaddcf] text-[#5b4636]"
                            : theme === 'oled' ? "bg-black border-gray-900"
                                : theme === 'espresso' ? "bg-[#2b2523] border-[#403632]"
                                    : theme === 'midnight' ? "bg-[#0f172a] border-slate-800"
                                        : theme === 'forest' ? "bg-[#1a2321] border-[#2a3633]"
                                            : theme === 'slatedark' ? "bg-[#0d1117] border-gray-800"
                                                : theme === 'gray' ? "bg-[#27272a] border-zinc-700"
                                                    : "bg-[#0d1117] border-gray-800"
                )}
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        ...(theme !== 'dark' && theme !== 'light' && theme !== 'sepia' && theme !== 'slatedark' && theme !== 'midnight' && theme !== 'forest' && theme !== 'oled' && theme !== 'espresso' && theme !== 'gray' && oklchThemeStyles[theme] ? {
                            backgroundColor: oklchThemeStyles[theme].bg,
                            color: oklchThemeStyles[theme].text,
                            borderColor: isThemeLight(theme) ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'
                        } : {})
                    }}
                >
                    <div className="flex items-center justify-between mb-2 flex-shrink-0">
                        <h2 className="text-lg font-serif font-bold">Reader Menu</h2>
                        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="shrink-0">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex border-b border-white/10 mb-4 flex-shrink-0">
                        <button 
                            type="button"
                            onClick={() => setActiveTab('toc')}
                            className={cn(
                                "flex-1 pb-2 text-xs uppercase font-bold tracking-wider transition-colors border-b-2 cursor-pointer",
                                activeTab === 'toc' 
                                    ? "border-[var(--primary-color)] text-[var(--primary-color)] font-extrabold"
                                    : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            Chapters
                        </button>
                        <button 
                            type="button"
                            onClick={() => setActiveTab('bookmarks')}
                            className={cn(
                                "flex-1 pb-2 text-xs uppercase font-bold tracking-wider transition-colors border-b-2 cursor-pointer",
                                activeTab === 'bookmarks'
                                    ? "border-[var(--primary-color)] text-[var(--primary-color)] font-extrabold"
                                    : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            Bookmarks & Notes
                        </button>
                    </div>

                    {activeTab === 'toc' ? (
                        <>
                            <div className="mb-4 relative flex-shrink-0">
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search chapters... (Press '/')"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={cn(
                                            "w-full rounded-md border text-sm pl-8 pr-3 py-2 outline-none focus:ring-1 transition-all",
                                            isOrv ? "focus:ring-cyan-500" : isBunnyGirl ? "focus:ring-purple-400" : isRezero ? "focus:ring-violet-500" : isMushokuTensei ? "focus:ring-emerald-500" : isLotm ? "focus:ring-indigo-500" : isApothecaryDiaries ? "focus:ring-pink-500" : "focus:ring-red-500",
                                            isThemeLight(theme)
                                                ? "bg-white border-gray-300 text-black placeholder:text-gray-400"
                                                : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10"
                                        )}
                                    />
                                </div>
                            </div>
 
                            <nav className="flex-1 overflow-y-auto space-y-1 min-h-0">
                                {filteredToc?.map((item, i) => {
                                    return (
                                        <SmartLink
                                            isOrv={isOrv}
                                            key={i}
                                            href={isOrv ? `${baseReadPath}?c=${item.href}` : `${baseReadPath}/${volumeId}/${item.index}${item.href && item.href.includes('#') ? '#' + item.href.split('#')[1] : ''}`}
                                            onClick={() => setSidebarOpen(false)}
                                            className={cn(
                                                "block px-3 py-2 rounded-md text-sm transition-colors line-clamp-2",
                                                (currentSpineIndex ? item.index === currentSpineIndex : item.index === chapterIndex)
                                                    ? (isOrv 
                                                        ? "bg-cyan-500/10 text-cyan-400 font-medium animate-pulse" 
                                                        : isBunnyGirl 
                                                            ? "bg-purple-500/10 text-purple-300 font-medium animate-pulse" 
                                                            : isRezero 
                                                                ? "bg-violet-500/10 text-violet-400 font-medium animate-pulse" 
                                                                : isMushokuTensei 
                                                                    ? "bg-emerald-500/10 text-emerald-400 font-medium animate-pulse" 
                                                                    : isLotm 
                                                                        ? "bg-indigo-500/10 text-indigo-400 font-medium animate-pulse" 
                                                                        : isApothecaryDiaries
                                                                            ? "bg-pink-500/10 text-pink-400 font-medium animate-pulse"
                                                                            : "bg-red-500/10 text-red-500 font-medium animate-pulse")
                                                    : isThemeLight(theme) ? "hover:bg-gray-200/50" : "hover:bg-white/5 opacity-80 hover:opacity-100",

                                                volumeId === 'v0' && item.label.startsWith('Part ') && "pl-8 border-l-2 border-transparent hover:border-white/10 ml-2"
                                            )}
                                        >
                                            {item.label || `Chapter ${item.index}`}
                                        </SmartLink>
                                    );
                                })}

                                {(!toc || toc.length === 0) && (
                                    <p className="text-sm opacity-50 italic">Table of contents not available.</p>
                                )}

                                {toc && toc.length > 0 && filteredToc.length === 0 && (
                                    <p className="text-sm opacity-50 italic text-center py-4">No matching chapters found.</p>
                                )}
                            </nav>
                        </>
                    ) : (
                        <div className="flex-1 overflow-y-auto space-y-3 min-h-0 pr-1 no-scrollbar">
                            {bookmarks.length === 0 ? (
                                <p className="text-xs opacity-50 italic text-center py-8">No bookmarks, highlights, or notes yet.</p>
                            ) : (
                                bookmarks.map((bm) => {
                                    const isCurrentChapter = String(bm.volumeId) === String(volumeId) && Number(bm.chapterIndex) === Number(chapterIndex);
                                    return (
                                        <div 
                                            key={bm.id} 
                                            onMouseEnter={() => {
                                                if (bm.type === 'highlight' && isCurrentChapter) {
                                                    const mark = document.querySelector(`[data-highlight-id="${bm.id}"]`);
                                                    if (mark) mark.classList.add('highlight-hovered');
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (bm.type === 'highlight' && isCurrentChapter) {
                                                    const mark = document.querySelector(`[data-highlight-id="${bm.id}"]`);
                                                    if (mark) mark.classList.remove('highlight-hovered');
                                                }
                                            }}
                                            onClick={() => {
                                                if (isCurrentChapter) {
                                                    if (bm.type === 'highlight') {
                                                        scrollToHighlight(bm.id);
                                                    } else {
                                                        if (readingMode === 'horizontal' && readerContentRef.current) {
                                                            readerContentRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                                                        } else {
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }
                                                    }
                                                    setSidebarOpen(false);
                                                } else {
                                                    const targetUrl = isOrv 
                                                        ? `${baseReadPath}?c=${bm.chapterIndex}` 
                                                        : `${baseReadPath}/${bm.volumeId}/${bm.chapterIndex}`;
                                                    router.push(targetUrl);
                                                    setSidebarOpen(false);
                                                }
                                            }}
                                            className={cn(
                                                "p-3 rounded-lg border flex flex-col gap-2 transition-all cursor-pointer select-none",
                                                isThemeLight(theme) 
                                                    ? "bg-white border-gray-200 hover:border-gray-300"
                                                    : "bg-white/5 border-white/5 hover:border-white/10"
                                            )}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-[10px] font-semibold opacity-60 truncate">
                                                    {bm.chapterTitle}
                                                </span>
                                                <button 
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteBookmark(bm.id);
                                                    }}
                                                    className="opacity-50 hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-white/10 cursor-pointer"
                                                    title="Remove"
                                                >
                                                    <X className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                            {bm.type === 'highlight' && (
                                                <div className="border-l-2 pl-2 my-1 text-xs italic line-clamp-3 opacity-90 text-left" style={{ borderColor: bm.color || '#fef08a' }}>
                                                    &ldquo;{bm.text}&rdquo;
                                                </div>
                                            )}
                                            {bm.note && (
                                                <p className="text-[11px] font-sans opacity-85 font-medium bg-black/20 p-2 rounded text-left">
                                                    Note: {bm.note}
                                                </p>
                                            )}
                                            <div className="flex items-center justify-between mt-1 text-[9px] opacity-40 font-mono">
                                                <span>{new Date(bm.timestamp).toLocaleDateString()}</span>
                                                {isCurrentChapter ? (
                                                    <span className="text-[var(--primary-color)] font-semibold uppercase hover:underline tracking-wider cursor-pointer">
                                                        Focus
                                                    </span>
                                                ) : (
                                                    <Link 
                                                        href={isOrv ? `${baseReadPath}?c=${bm.chapterIndex}` : `${baseReadPath}/${bm.volumeId}/${bm.chapterIndex}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSidebarOpen(false);
                                                        }}
                                                        className="text-[var(--primary-color)] font-semibold uppercase hover:underline tracking-wider"
                                                    >
                                                        Jump
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    )}
                </aside>


                <main
                    className={cn(
                        "flex-1 relative print:overflow-visible print:h-auto print:block",
                        readingMode === 'horizontal' ? "overflow-hidden" : "overflow-y-auto scroll-smooth",
                        sidebarOpen && "md:ml-80 transition-[margin] duration-300 print:ml-0"
                    )}
                    style={{ WebkitOverflowScrolling: 'touch' }}
                    onClick={handleContentClickInternal}
                >
                    <div className={cn(
                        "mx-auto py-8 md:py-12 flex flex-col justify-between",
                        readingMode === 'horizontal' ? "h-full" : "min-h-full",
                        margins === 'narrow' ? "max-w-6xl px-4 md:px-6" : margins === 'wide' ? "max-w-2xl px-12 md:px-24" : "max-w-4xl px-6 md:px-12"
                    )}>
                        {debugInfo && (
                            <div className="bg-red-500 text-white p-4 mb-4 rounded font-mono text-xs whitespace-pre-wrap">
                                FLAGS: {debugInfo}
                            </div>
                        )}

                        {readingMode !== 'horizontal' && <AdBanner />}

                        <style dangerouslySetInnerHTML={{ __html: `
                            .reader-content p, 
                            .reader-content li,
                            .reader-content div {
                                color: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                                line-height: ${lineHeight} !important;
                                margin-bottom: 1.5em;
                            }
                            
                            .reader-content p {
                                text-align: ${textAlign} !important;
                                ${indentParagraphs ? `
                                    text-indent: 1.5em !important;
                                    margin-top: 0 !important;
                                    margin-bottom: 0.5em !important;
                                ` : ''}
                                ${autoHyphenation ? `
                                    hyphens: auto !important;
                                    -webkit-hyphens: auto !important;
                                ` : ''}
                            }
                            
                            .reader-content span,
                            .reader-content a {
                                color: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                            }
                            
                            .reader-content h1,
                            .reader-content h2,
                            .reader-content h3,
                            .reader-content h4,
                            .reader-content h5,
                            .reader-content h6 {
                                color: inherit !important;
                                font-family: inherit !important;
                            }
                            

                            .reader-content .P__STAR__STAR__STAR__page_break {
                                text-align: center !important;
                                margin-top: 2em !important;
                                margin-bottom: 2em !important;
                                border-bottom: none !important;
                            }
                            

                            .reader-content .P__STAR__STAR__STAR__page_break span,
                            .reader-content .P__STAR__STAR__STAR__page_break__And__Page_Break span,
                            .reader-content .P_TEXTBODY_CENTERALIGN,
                            .reader-content .P_TEXTBODY_CENTERALIGN span {
                                font-size: clamp(1.25em, 4vw, 2em) !important;
                                line-height: 1.2 !important;
                                display: block !important;
                                text-align: center !important;
                                width: 100% !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                margin-top: 1.5rem !important;
                                margin-bottom: 0.75rem !important;
                                font-weight: 700 !important;
                                padding-top: 0.5rem !important;
                                padding-bottom: 0px !important;
                            }
                            

                            .reader-content .P__STAR__STAR__STAR__page_break span span,
                            .reader-content .P__STAR__STAR__STAR__page_break__And__Page_Break span span,
                            .reader-content .P_TEXTBODY_CENTERALIGN span span {
                                font-size: 1em !important;
                            }
                            

                            .reader-content .calibre5,
                            .reader-content .sigilnotintoc,
                            .reader-content h2[title],
                            .reader-content h3.sigilnotintoc {
                                text-align: center !important;
                                width: 100% !important;
                                display: block !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                            }
                            
                            .reader-content .calibre5 {
                                font-size: clamp(1.5em, 5vw, 2em) !important;
                                font-weight: 700 !important;
                                margin-top: 2rem !important;
                            }
                            
                            .reader-content .sigilnotintoc {
                                font-size: 1.5em !important;
                                font-weight: 600 !important;
                                margin-bottom: 2rem !important;
                            }


                            .reader-content .P_TEXTBODY_CENTERALIGN_PAGEBREAK,
                            .reader-content .P_TEXTBODY_CENTERALIGN_PAGEBREAK span,
                            .reader-content .P_TEXTBODY_CENTERALIGN,
                            .reader-content .P_TEXTBODY_CENTERALIGN span {
                                text-align: center !important;
                                display: block !important;
                                width: 100% !important;
                                margin: 2rem auto !important;
                                font-size: clamp(1.2em, 4vw, 1.5em) !important;
                                font-weight: 700 !important;
                                return-property: center;
                            }


                            .reader-content {
                                content-visibility: auto;
                                contain-intrinsic-size: 1000px;
                            }



                            .reader-content .P__STAR__STAR__STAR__page_break,
                            .reader-content .P__STAR__STAR__STAR__page_break span {
                                text-align: center !important;
                                display: block !important;
                                width: 100% !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                font-size: clamp(1.4em, 5vw, 1.75em) !important;
                                font-weight: 700 !important;
                                line-height: 1.3 !important;
                            }


                            .reader-content img {
                                height: auto !important;
                                max-width: 100%;
                                object-fit: contain;
                                margin: 2rem auto;
                                display: block;
                                border-radius: 0.5rem;
                            }

                            /* Page-Turn Reading Mode */
                            .reader-content.page-mode {
                                column-width: var(--column-width, 100vw);
                                column-gap: 3rem;
                                height: 100%;
                                flex: 1 1 0%;
                                min-height: 0;
                                overflow-x: auto;
                                overflow-y: hidden;
                                display: block !important;
                                scroll-snap-type: x mandatory;
                            }
                            .reader-content.page-mode p,
                            .reader-content.page-mode li,
                            .reader-content.page-mode blockquote,
                            .reader-content.page-mode figure,
                            .reader-content.page-mode img,
                            .reader-content.page-mode hr,
                            .reader-content.page-mode .P_TEXTBODY_CENTERALIGN,
                            .reader-content.page-mode .P__STAR__STAR__STAR__page_break {
                                scroll-snap-align: start;
                                break-inside: avoid;
                                page-break-inside: avoid;
                            }
                            .reader-content.page-mode h1,
                            .reader-content.page-mode h2,
                            .reader-content.page-mode h3,
                            .reader-content.page-mode h4,
                            .reader-content.page-mode h5,
                            .reader-content.page-mode h6 {
                                scroll-snap-align: start;
                                break-inside: avoid;
                                break-after: avoid;
                                page-break-inside: avoid;
                                page-break-after: avoid;
                            }
                            .reader-content.page-mode img {
                                max-height: 55vh !important;
                                width: auto !important;
                            }
                            @media (min-width: 768px) {
                                .reader-content.page-mode img {
                                    max-height: 65vh !important;
                                }
                            }

                            /* Highlight styles for hover and focus */
                            mark.highlight-mark {
                                transition: all 0.2s ease-in-out;
                            }
                            mark.highlight-mark.highlight-hovered {
                                filter: saturate(1.8) brightness(1.1);
                                outline: 1px solid var(--primary-color, #ef4444);
                                outline-offset: 1px;
                            }
                            mark.highlight-mark.highlight-focused {
                                filter: saturate(2) brightness(1.25);
                                outline: 2.5px solid var(--primary-color, #ef4444);
                                outline-offset: 2px;
                            }

                            /* LOTM/COI centered dagger separators */
                            .theme-lotm .reader-content hr,
                            .reader-content[data-volume^="lotm"] hr,
                            .reader-content[data-volume^="coi"] hr {
                                border: none !important;
                                border-top: 1px solid var(--primary-border-alpha, rgba(255,255,255,0.15)) !important;
                                text-align: center !important;
                                height: 1px !important;
                                margin: 4rem 0 !important;
                                overflow: visible !important;
                            }
                            .theme-lotm .reader-content hr::after,
                            .reader-content[data-volume^="lotm"] hr::after,
                            .reader-content[data-volume^="coi"] hr::after {
                                content: "✟" !important;
                                display: inline-block !important;
                                position: relative !important;
                                top: -14px !important;
                                padding: 0 14px !important;
                                background-color: var(--reader-bg, #14151b) !important;
                                color: var(--primary-color) !important;
                                font-size: 1.25rem !important;
                            }
                             
                             .reader-content-perspective {
                                 perspective: 2000px;
                                 transform-style: preserve-3d;
                                 backface-visibility: hidden;
                             }
                             
                             .page-turn-next-effect {
                                 transform: rotateY(-8deg) translateX(-15px) scale(0.99);
                                 transform-origin: left center;
                                 opacity: 0.75;
                             }
                             
                             .page-turn-prev-effect {
                                 transform: rotateY(8deg) translateX(15px) scale(0.99);
                                 transform-origin: right center;
                                 opacity: 0.75;
                             }
                             
                             @keyframes pageShadowNext {
                                 0% { transform: scaleX(0); opacity: 0; }
                                 50% { transform: scaleX(1.2); opacity: 1; }
                                 100% { transform: scaleX(1); opacity: 0; }
                             }
                             
                             @keyframes pageShadowPrev {
                                 0% { transform: scaleX(0); opacity: 0; }
                                 50% { transform: scaleX(1.2); opacity: 1; }
                                 100% { transform: scaleX(1); opacity: 0; }
                             }
                             
                             .animate-page-shadow-next {
                                 animation: pageShadowNext 0.4s ease-out forwards;
                             }
                             
                             .animate-page-shadow-prev {
                                 animation: pageShadowPrev 0.4s ease-out forwards;
                             }
                        ` }} />

                        <style dangerouslySetInnerHTML={{ __html: `

                            .reader-content .P__STAR__STAR__STAR__page_break,
                            .reader-content .P__STAR__STAR__STAR__page_break span,
                            .reader-content .P_Chapter_Header,
                            .reader-content .P_Chapter_Header span {
                                text-align: center !important;
                                display: block !important;
                                width: 100% !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                font-size: clamp(1.4em, 5vw, 1.75em) !important;
                                font-weight: 700 !important;
                                line-height: 1.3 !important;
                            }



                            .reader-content[data-volume="v0"] .heading_1,
                            .reader-content[data-volume="v0"] h1,
                            .reader-content[data-volume^="y3"] .heading_1,
                            .reader-content[data-volume^="y3"] h1 {
                                text-align: center !important;
                                font-size: clamp(1.5em, 5vw, 1.75em) !important;
                                line-height: 1.3 !important;
                                margin-top: 2rem !important;
                                margin-bottom: 2rem !important;
                                font-weight: 700 !important;
                                font-family: var(--font-serif) !important;
                            }

                            .reader-content[data-volume="v0"] .heading_2,
                            .reader-content[data-volume="v0"] h2,
                            .reader-content[data-volume^="y3"] .heading_2,
                            .reader-content[data-volume^="y3"] h2 {
                                text-align: center !important;
                                text-transform: uppercase !important;
                                font-size: clamp(1.2em, 4vw, 1.5em) !important;
                                margin-top: 2rem !important;
                                margin-bottom: 1.5rem !important;
                            }

                            .reader-content[data-volume^="ss-"] h1 {
                                text-align: center !important;
                                font-weight: 700 !important;
                                display: block !important;
                                width: 100% !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                font-size: clamp(1.5em, 5vw, 2em) !important;
                                line-height: 1.3 !important;
                                margin-top: 2rem !important;
                                margin-bottom: 2rem !important;
                                font-family: var(--font-serif) !important;
                            }

                            /* Re:Zero Volume Big Titles */
                            .theme-rezero h1,
                            .reader-content[data-volume^="rezero"] h1,
                            .reader-content.theme-rezero h1 {
                                text-align: center !important;
                                font-size: clamp(2.2em, 7vw, 3em) !important;
                                line-height: 1.3 !important;
                                margin-top: 4rem !important;
                                margin-bottom: 4rem !important;
                                font-weight: 800 !important;
                                color: #ffffff !important;
                                font-family: var(--font-serif) !important;
                                text-shadow: 0 0 20px rgba(139, 92, 246, 0.4) !important;
                                border-bottom: 1px solid rgba(139, 92, 246, 0.2) !important;
                                padding-bottom: 1.5rem !important;
                            }

                            /* ORV Chapter Titles */
                            .theme-orv h1,
                            .reader-content[data-volume^="orv"] h1,
                            .reader-content.theme-orv h1 {
                                text-align: center !important;
                                font-size: clamp(2.0em, 6vw, 2.6em) !important;
                                line-height: 1.3 !important;
                                margin-top: 3rem !important;
                                margin-bottom: 3.5rem !important;
                                font-weight: 700 !important;
                                color: #ffffff !important;
                                font-family: var(--font-playfair), var(--font-lora), ui-serif, Georgia, serif !important;
                                text-shadow: 0 0 15px rgba(6, 182, 212, 0.3) !important;
                                border-bottom: 1px solid rgba(6, 182, 212, 0.15) !important;
                                padding-bottom: 1.5rem !important;
                            }

                            /* Bunny Girl Chapter Titles */
                            .theme-bunny-girl h1,
                            .reader-content[data-volume^="bunny-girl"] h1,
                            .reader-content.theme-bunny-girl h1 {
                                text-align: center !important;
                                font-size: clamp(2.2em, 7vw, 3em) !important;
                                line-height: 1.3 !important;
                                margin-top: 4rem !important;
                                margin-bottom: 4rem !important;
                                font-weight: 800 !important;
                                color: #ffffff !important;
                                font-family: var(--font-serif) !important;
                                text-shadow: 0 0 20px rgba(168, 85, 247, 0.4) !important;
                                border-bottom: 1px solid rgba(168, 85, 247, 0.2) !important;
                                padding-bottom: 1.5rem !important;
                            }

                            /* Apothecary Diaries Chapter Titles */
                            .theme-apothecary-diaries h1,
                            .reader-content[data-volume^="ad"] h1,
                            .reader-content.theme-apothecary-diaries h1 {
                                text-align: center !important;
                                font-size: clamp(2.0em, 6vw, 2.6em) !important;
                                line-height: 1.3 !important;
                                margin-top: 3.5rem !important;
                                margin-bottom: 3.5rem !important;
                                font-weight: 700 !important;
                                color: #ffffff !important;
                                font-family: var(--font-serif) !important;
                                text-shadow: 0 0 15px rgba(236, 72, 153, 0.45) !important;
                                border-bottom: 1px solid rgba(236, 72, 153, 0.2) !important;
                                padding-bottom: 1.5rem !important;
                            }

                            /* Tensura Chapter Titles */
                            .theme-tensura h1,
                            .reader-content.theme-tensura h1 {
                                text-align: center !important;
                                font-size: clamp(2.0em, 6vw, 2.6em) !important;
                                line-height: 1.3 !important;
                                margin-top: 3.5rem !important;
                                margin-bottom: 3.5rem !important;
                                font-weight: 700 !important;
                                color: #ffffff !important;
                                font-family: var(--font-serif) !important;
                                text-shadow: 0 0 15px rgba(34, 211, 238, 0.45) !important;
                                border-bottom: 1px solid rgba(34, 211, 238, 0.2) !important;
                                padding-bottom: 1.5rem !important;
                            }
                        ` }} />


                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                                "relative",
                                readingMode === 'horizontal' && "h-full flex flex-col flex-shrink-0"
                            )}
                        >

                             {readingMode !== 'horizontal' && chapterHeader}
                             <div className={cn(
                                 "relative w-full reader-content-perspective transition-all duration-300 ease-out origin-center",
                                 readingMode === 'horizontal' && "h-full flex-1 min-h-0",
                                 pageTurnClass === 'page-turn-next' && "page-turn-next-effect",
                                 pageTurnClass === 'page-turn-prev' && "page-turn-prev-effect"
                             )}>
                                 <ReaderContent 
                                    ref={readerContentRef}
                                    content={processedContent} 
                                    volumeId={volumeId} 
                                    isRezero={isRezero} 
                                    isBunnyGirl={isBunnyGirl} 
                                    bookmarks={bookmarks}
                                    chapterIndex={chapterIndex}
                                    readingMode={readingMode}
                                    chapterHeaderHtml={chapterHeaderHtml}
                                 />
                                 
                                 <div className="mt-12 mb-8 print:hidden max-w-3xl mx-auto">
                                     <SupportAuthorCard 
                                         novelSlug={novelSlug} 
                                         volumeId={volumeId} 
                                         volumeTitle={volumeTitle}
                                         theme={theme}
                                     />
                                 </div>
                                 {pageTurnClass && (
                                     <div className={cn(
                                         "absolute inset-y-0 w-16 pointer-events-none z-50 transition-all duration-400 ease-out",
                                         pageTurnClass === 'page-turn-next' 
                                             ? "right-0 bg-gradient-to-l from-black/25 via-black/5 to-transparent animate-page-shadow-next" 
                                             : "left-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent animate-page-shadow-prev"
                                     )} />
                                 )}
                             </div>
                        </motion.div>

                        {readingMode !== 'horizontal' && (
                            <>
                                {/* Seeded Star Rating & Likes Section */}
                                <div className={cn(
                                    "w-full px-4 py-6 my-8 border-y flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden",
                                    isThemeLight(theme) ? "border-gray-200 text-gray-700" : "border-white/10 text-gray-300"
                                )}>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            type="button"
                                            onClick={toggleLike}
                                            className={cn(
                                                "flex items-center justify-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 active:scale-95 cursor-pointer shadow-sm",
                                                chapterLiked 
                                                    ? "bg-primary text-primary-foreground border-transparent"
                                                    : (isThemeLight(theme) ? "bg-white hover:bg-gray-50 border-gray-200" : "bg-white/5 hover:bg-white/10 border-white/10")
                                            )}
                                        >
                                            <Heart className={cn("w-4 h-4 transition-transform", chapterLiked && "fill-current scale-110")} />
                                            <span className="text-xs font-semibold">
                                                {chapterLiked ? "Liked" : "Like"} ({seededLikes + (chapterLiked ? 1 : 0)})
                                            </span>
                                        </button>
                                    </div>

                                    <div className="flex flex-col sm:items-end gap-1">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => {
                                                const isFilled = chapterRating ? star <= chapterRating : star <= Math.round(seededStars);
                                                return (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => handleRate(star)}
                                                        className="cursor-pointer transition-transform hover:scale-125 p-0.5"
                                                        title={`Rate ${star} Stars`}
                                                    >
                                                        <svg 
                                                            className={cn("w-5 h-5", isFilled ? "text-[var(--primary-color)] fill-current" : "text-gray-400/40")} 
                                                            viewBox="0 0 20 20" 
                                                            fill="currentColor"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        <span className="text-[10px] font-mono opacity-60">
                                            {chapterRating ? `Your rating: ${chapterRating}/5` : `Rating: ${seededStars}/5 (${seededVotes} votes)`}
                                        </span>
                                    </div>
                                </div>

                                <AdBanner />
                            </>
                        )}
                    </div>


                    {readingMode !== 'horizontal' && (
                        <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 print:hidden">
                            {prevChapter ? (
                                <SmartLink isOrv={isOrv} href={isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`} className="flex-1">
                                    <div className={cn(
                                        "flex flex-col gap-1 p-4 rounded-xl border transition-all cursor-pointer group",
                                        isThemeLight(theme) 
                                            ? (isOrv ? "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-md" : isBunnyGirl ? "bg-white border-gray-200 hover:border-purple-300 hover:shadow-md" : isRezero ? "bg-white border-gray-200 hover:border-violet-300 hover:shadow-md" : isMushokuTensei ? "bg-white border-gray-200 hover:border-emerald-300 hover:shadow-md" : isLotm ? "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md" : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md")
                                            : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10" : isBunnyGirl ? "bg-[#100b1e] border-purple-950/40 hover:border-purple-500/50 hover:bg-purple-950/20" : isRezero ? "bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/10" : isMushokuTensei ? "bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10" : isLotm ? "bg-white/5 border-white/10 hover:border-indigo-500/50 hover:bg-white/10" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-white/10")
                                    )}>
                                        <div className={cn(
                                            "flex items-center gap-2 text-xs uppercase tracking-wider opacity-60 font-semibold group-hover:text-opacity-100",
                                            isOrv ? "text-cyan-400 group-hover:text-cyan-300" : isBunnyGirl ? "text-purple-400 group-hover:text-purple-300" : isRezero ? "text-violet-400 group-hover:text-violet-300" : isMushokuTensei ? "text-emerald-400 group-hover:text-emerald-300" : isLotm ? "text-indigo-400 group-hover:text-indigo-300" : "text-red-500 group-hover:text-red-400"
                                        )}>
                                            <ArrowLeft className="w-3 h-3" /> Previous Chapter
                                        </div>
                                        <div className="text-sm sm:text-base font-serif font-bold truncate">
                                            {prevChapter.title || `Chapter ${prevChapter.chapter}`}
                                        </div>
                                    </div>
                                </SmartLink>
                            ) : <div className="flex-1" />}



                            {nextChapter ? (
                                <SmartLink isOrv={isOrv} href={isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`} className="flex-1">
                                    <div className={cn(
                                        "flex flex-col gap-1 p-4 rounded-xl border transition-all cursor-pointer group text-left sm:text-right",
                                        isThemeLight(theme) 
                                            ? (isOrv ? "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-md" : isBunnyGirl ? "bg-white border-gray-200 hover:border-purple-300 hover:shadow-md" : isRezero ? "bg-white border-gray-200 hover:border-violet-300 hover:shadow-md" : isMushokuTensei ? "bg-white border-gray-200 hover:border-emerald-300 hover:shadow-md" : isLotm ? "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md" : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md")
                                            : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10" : isBunnyGirl ? "bg-[#100b1e] border-purple-950/40 hover:border-purple-500/50 hover:bg-purple-950/20" : isRezero ? "bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/10" : isMushokuTensei ? "bg-white/5 border-white/10 hover:border-emerald-500/50 hover:bg-white/10" : isLotm ? "bg-white/5 border-white/10 hover:border-indigo-500/50 hover:bg-white/10" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-white/10")
                                    )}>
                                        <div className={cn(
                                            "flex items-center justify-start sm:justify-end gap-2 text-xs uppercase tracking-wider opacity-60 font-semibold group-hover:text-opacity-100",
                                            isOrv ? "text-cyan-400 group-hover:text-cyan-300" : isBunnyGirl ? "text-purple-400 group-hover:text-purple-300" : isRezero ? "text-violet-400 group-hover:text-violet-300" : isMushokuTensei ? "text-emerald-400 group-hover:text-emerald-300" : isLotm ? "text-indigo-400 group-hover:text-indigo-300" : "text-red-500 group-hover:text-red-400"
                                        )}>
                                            Next Chapter <ArrowRight className="h-3 w-3" />
                                        </div>
                                        <div className="text-sm sm:text-base font-serif font-bold truncate">
                                            {nextChapter.title || `Chapter ${nextChapter.chapter}`}
                                        </div>
                                    </div>
                                </SmartLink>
                            ) : (
                                nextVolumeLink ? (
                                    <SmartLink isOrv={isOrv} href={nextVolumeLink} className="flex-1">
                                        <div className={cn(
                                            "flex flex-col items-center justify-center gap-1 p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.02] group relative overflow-hidden",
                                            isThemeLight(theme)
                                                ? (isOrv 
                                                    ? "bg-gradient-to-br from-cyan-50 to-white border-cyan-200 text-cyan-900 shadow-sm hover:shadow-md hover:border-cyan-300"
                                                    : isBunnyGirl
                                                        ? "bg-gradient-to-br from-purple-50 to-white border-purple-200 text-purple-900 shadow-sm hover:shadow-md hover:border-purple-300"
                                                        : isRezero
                                                            ? "bg-gradient-to-br from-violet-50 to-white border-violet-200 text-violet-900 shadow-sm hover:shadow-md hover:border-violet-300"
                                                            : isApothecaryDiaries
                                                                ? "bg-gradient-to-br from-pink-50 to-white border-pink-200 text-pink-900 shadow-sm hover:shadow-md hover:border-pink-300"
                                                                : "bg-gradient-to-br from-red-50 to-white border-red-200 text-red-900 shadow-sm hover:shadow-md hover:border-red-300"
                                                   )
                                                : (isOrv
                                                    ? "bg-gradient-to-br from-cyan-950/20 to-cyan-950/10 border-cyan-500/30 text-cyan-100 hover:border-cyan-500/50 hover:from-cyan-950/30 hover:to-cyan-950/20"
                                                    : isBunnyGirl
                                                        ? "bg-gradient-to-br from-[#1b102e]/30 to-[#1b102e]/10 border-purple-500/30 text-purple-100 hover:border-purple-500/50 hover:from-[#1b102e]/40 hover:to-[#1b102e]/20"
                                                        : isRezero
                                                            ? "bg-gradient-to-br from-violet-950/20 to-violet-950/10 border-violet-500/30 text-violet-100 hover:border-violet-500/50 hover:from-violet-950/30 hover:to-violet-950/20"
                                                            : isApothecaryDiaries
                                                                ? "bg-gradient-to-br from-[#2e1022]/30 to-[#2e1022]/10 border-pink-500/30 text-pink-100 hover:border-pink-500/50 hover:from-[#2e1022]/40 hover:to-[#2e1022]/20"
                                                                : "bg-gradient-to-br from-red-900/20 to-red-900/10 border-red-500/30 text-red-100 hover:border-red-500/50 hover:from-red-900/30 hover:to-red-900/20"
                                                   )
                                        )}>

                                            <div className={cn(
                                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                isOrv ? "bg-cyan-500/5" : isBunnyGirl ? "bg-purple-500/5" : isRezero ? "bg-violet-500/5" : isApothecaryDiaries ? "bg-pink-500/5" : "bg-red-500/5"
                                            )} />

                                            <div className="relative z-10 flex flex-col items-center gap-1">
                                                <span className="font-serif font-bold flex items-center gap-2 text-lg">
                                                    Start {nextVolumeTitle ? nextVolumeTitle : "Next Volume"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </span>
                                                <span className="text-xs opacity-70 uppercase tracking-widest font-semibold">Continue the Story</span>
                                            </div>
                                        </div>
                                    </SmartLink>
                                ) : (
                                    <SmartLink isOrv={isOrv} href={returnLink || detailsLink} className="flex-1">
                                        <div className={cn(
                                            "flex flex-col items-center justify-center gap-1 p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.02]",
                                            isThemeLight(theme) 
                                                ? (isOrv ? "bg-cyan-50 border-cyan-200 text-cyan-800" : isBunnyGirl ? "bg-purple-50 border-purple-200 text-purple-800" : isRezero ? "bg-violet-50 border-violet-200 text-violet-800" : isApothecaryDiaries ? "bg-pink-50 border-pink-200 text-pink-850" : "bg-red-50 border-red-200 text-red-800") 
                                                : (isOrv ? "bg-cyan-950/20 border-cyan-500/50 text-cyan-200" : isBunnyGirl ? "bg-[#1b102e] border-purple-500/30 text-purple-200" : isRezero ? "bg-violet-950/20 border-violet-500/30 text-violet-200" : isApothecaryDiaries ? "bg-[#2d1222] border-pink-500/30 text-pink-200" : "bg-red-900/20 border-red-500/50 text-red-200")
                                        )}>
                                            <span className="font-serif font-bold">Return to Library</span>
                                            <span className="text-xs opacity-70">
                                                {isOrv ? "Select Scenario" : (isRezero || isBunnyGirl || isApothecaryDiaries) ? "Select Volume" : "Select Year"}
                                            </span>
                                        </div>
                                    </SmartLink>
                                )
                            )}
                        </div>
                    )}


                    {readingMode !== 'horizontal' && (
                        <div className="mt-16 mb-8 flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground/70">
                                <div className="h-px w-8 bg-current opacity-30" />
                                <span>Support the Project</span>
                                <div className="h-px w-8 bg-current opacity-30" />
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                                <a
                                    href="https://github.com/NITHINSPACETIME"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "rounded-full gap-2 pl-4 pr-5 h-10 transition-all duration-300 group hover:scale-105 text-sm font-medium border flex items-center justify-center cursor-pointer select-none shadow-[0_0_15px_3px_rgba(0,0,0,0.85)] hover:shadow-[0_0_25px_8px_rgba(0,0,0,1)]",
                                        isThemeLight(theme)
                                            ? "bg-white border-gray-200 hover:border-gray-400 text-gray-700 hover:text-black"
                                            : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 text-gray-300 hover:text-white"
                                    )}
                                >
                                    <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    <span className="font-serif">Follow me</span>
                                </a>

                                <Link href="/donate">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "rounded-full gap-2 pl-4 pr-6 h-10 transition-all duration-300 group hover:scale-105 shadow-sm",
                                            isThemeLight(theme)
                                                ? (isOrv ? "bg-white border-cyan-100 hover:border-cyan-300 text-gray-600 hover:text-cyan-600" : "bg-white border-red-100 hover:border-red-300 text-gray-600 hover:text-red-600")
                                                : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400")
                                        )}
                                    >
                                        <Coffee className="w-4 h-4 transition-colors group-hover:fill-current" />
                                        <span className="font-serif">Buy me a coffee</span>
                                    </Button>
                                </Link>

                                <Link href="/support-author">
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "rounded-full gap-2 pl-4 pr-6 h-10 transition-all duration-300 group hover:scale-105 shadow-sm",
                                            isThemeLight(theme)
                                                ? "bg-white border-pink-100 hover:border-pink-300 text-pink-600 hover:text-pink-700 hover:bg-pink-50/20"
                                                : "bg-white/5 border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/10 text-pink-400 hover:text-pink-300"
                                        )}
                                    >
                                        <Heart className="w-4 h-4 fill-pink-500/10 group-hover:fill-pink-500/20 text-pink-500" />
                                        <span className="font-serif">Support Authors</span>
                                    </Button>
                                </Link>

                                <a
                                    href="https://github.com/NITHINSPACETIME/novels-reader"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "rounded-full gap-2 pl-4 pr-5 h-10 transition-all duration-300 group hover:scale-105 text-sm font-medium border flex items-center justify-center cursor-pointer select-none shadow-[0_0_15px_3px_rgba(0,0,0,0.85)] hover:shadow-[0_0_25px_8px_rgba(0,0,0,1)]",
                                        isThemeLight(theme)
                                            ? "bg-white border-gray-200 hover:border-gray-400 text-gray-700 hover:text-black"
                                            : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10 text-gray-300 hover:text-white"
                                    )}
                                >
                                    <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    <span className="font-serif">Star</span>
                                    {starCount !== null && (
                                        <span className="text-[11px] font-sans opacity-60 bg-white/10 px-1.5 py-0.5 rounded-full min-w-[20px] text-center ml-1">
                                            {starCount}
                                        </span>
                                    )}
                                </a>
                            </div>
                        </div>
                    )}
                </main>
            </div >


            < div className="fixed bottom-20 right-7 md:bottom-[92px] md:right-8 z-50 print:hidden flex flex-col gap-2" >
                <Button
                    size="icon"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={cn(
                        "h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                        isThemeLight(theme) ? "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200" : "bg-black/50 text-gray-300 hover:bg-black/70 border border-white/10",
                        scrollDirection === 'up' ? "flex" : "hidden sm:flex",
                        speedDialOpen && "opacity-0 pointer-events-none scale-75"
                    )}
                    title="Scroll to Top"
                >
                    <ArrowUp className="h-5 w-5" />
                </Button>
                <Button
                    size="icon"
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                    className={cn(
                        "h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                        isThemeLight(theme) ? "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200" : "bg-black/50 text-gray-300 hover:bg-black/70 border border-white/10",
                        scrollDirection === 'down' ? "flex" : "hidden sm:flex",
                        speedDialOpen && "opacity-0 pointer-events-none scale-75"
                    )}
                    title="Scroll to Bottom"
                >
                    <ArrowDown className="h-5 w-5" />
                </Button>
            </div >


            < CustomComments
                isOpen={commentsOpen}
                onClose={() => setCommentsOpen(false)
                }
                volumeId={volumeId}
                chapterTitle={title}
                onSignInRequest={() => setAuthModalOpen(true)}
            />
            {/* Pseudo Fullscreen exit floating button (iOS Safari) */}
            {isFullscreen && !hasFullscreenSupport && (
                <div className="fixed bottom-6 left-6 z-[60] print:hidden">
                    <Button
                        size="icon"
                        onClick={toggleFullscreen}
                        className={cn(
                            "h-12 w-12 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110",
                            isThemeLight(theme) ? "bg-white text-black hover:bg-gray-100 border border-gray-250" : "bg-black/80 text-white hover:bg-black border border-white/10"
                        )}
                        title="Exit Fullscreen"
                    >
                        <Minimize className="h-5 w-5" />
                    </Button>
                </div>
            )}

            {showReadingTimePill && (
                <div 
                    className={cn(
                        "fixed bottom-6 z-40 print:hidden px-3.5 py-2 rounded-full text-xs font-mono border shadow-lg backdrop-blur-md transition-all duration-300 select-none flex items-center gap-1.5",
                        isFullscreen && !hasFullscreenSupport ? "left-20" : "left-6",
                        isThemeLight(theme) 
                            ? "bg-white/80 border-gray-200 text-gray-700 shadow-gray-200/50" 
                            : "bg-black/75 border-white/10 text-gray-300 shadow-black/40"
                    )}
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{formatReadingTime(remainingReadingTime)}</span>
                </div>
            )}

            < AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            < ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />

            {/* Custom Highlight Note Popover */}
            {readerNotePopover && (
                <div 
                    className="absolute z-[100] selection-menu-popover flex flex-col gap-2.5 p-3 rounded-xl shadow-2xl border w-64 animate-fadeIn"
                    style={{ 
                        left: `${readerNotePopover.x}px`, 
                        top: `${readerNotePopover.y}px`,
                        transform: 'translate(-50%, -100%)',
                        backgroundColor: getBgColor(theme),
                        color: theme in oklchThemeStyles 
                            ? oklchThemeStyles[theme].text 
                            : (theme in themeTextColors ? themeTextColors[theme as keyof typeof themeTextColors] : '#cbd5e1'),
                        borderColor: isThemeLight(theme) ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'
                    }}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Highlight Note</span>
                        <button type="button" onClick={() => setReaderNotePopover(null)} className="opacity-60 hover:opacity-100 transition-opacity p-0.5 rounded cursor-pointer">
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="border-l-2 pl-2 text-xs italic opacity-95 text-left line-clamp-3" style={{ borderColor: bookmarks.find(b => b.id === readerNotePopover.id)?.color || '#fef08a' }}>
                        &ldquo;{readerNotePopover.text}&rdquo;
                    </div>
                    {readerNotePopover.note ? (
                        <p className="text-[11px] font-sans opacity-90 bg-black/20 p-2 rounded text-left mt-1 break-words">
                            {readerNotePopover.note}
                        </p>
                    ) : (
                        <p className="text-[10px] font-sans opacity-50 italic text-left mt-1">
                            No note attached.
                        </p>
                    )}
                    <button 
                        type="button" 
                        onClick={() => {
                            deleteBookmark(readerNotePopover.id);
                            setReaderNotePopover(null);
                        }}
                        className="text-left text-[10px] font-bold text-red-500 hover:text-red-400 mt-1 cursor-pointer w-fit"
                    >
                        {readerNotePopover.note ? "Delete Note & Highlight" : "Delete Highlight"}
                    </button>
                </div>
            )}

            {/* Floating Selection Menu Popover (Material 3 style) */}
            {showSelectionMenu && selectionCoords && (
                <div 
                    className="absolute z-[100] selection-menu-popover flex flex-col gap-2.5 p-3 rounded-xl shadow-2xl border w-64 animate-fadeIn"
                    style={{ 
                        left: `${selectionCoords.x}px`, 
                        top: `${selectionCoords.y}px`,
                        transform: 'translate(-50%, -100%)',
                        backgroundColor: getBgColor(theme),
                        color: theme in oklchThemeStyles 
                            ? oklchThemeStyles[theme].text 
                            : (theme in themeTextColors ? themeTextColors[theme as keyof typeof themeTextColors] : '#cbd5e1'),
                        borderColor: isThemeLight(theme) ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'
                    }}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Highlight & Note</span>
                        <button type="button" onClick={() => { setShowSelectionMenu(false); setSelectedText(""); }} className="opacity-60 hover:opacity-100 transition-opacity p-0.5 rounded cursor-pointer">
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* Pastel / Material 3 Highlight Presets */}
                    <div className="flex items-center justify-between gap-1 mt-1">
                        {[
                            { name: 'Yellow', color: 'rgba(254, 240, 138, 0.75)' },
                            { name: 'Green', color: 'rgba(187, 247, 208, 0.75)' },
                            { name: 'Pink', color: 'rgba(251, 207, 232, 0.75)' },
                            { name: 'Blue', color: 'rgba(191, 219, 254, 0.75)' },
                            { name: 'Accent', color: customAccentColor + 'bb' }
                        ].map((p) => (
                            <button
                                key={p.color}
                                type="button"
                                onClick={() => setHighlightColor(p.color)}
                                className={cn(
                                    "w-6 h-6 rounded-full border transition-transform hover:scale-110 cursor-pointer",
                                    highlightColor === p.color ? "border-white border-2 scale-105" : "border-transparent"
                                )}
                                style={{ backgroundColor: p.color }}
                                title={p.name}
                            />
                        ))}
                    </div>

                    <input 
                        type="text"
                        placeholder="Add a note... (optional)"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        className={cn(
                            "w-full rounded-lg border text-xs px-2.5 py-1.5 outline-none focus:ring-1 focus:ring-primary",
                            isThemeLight(theme) ? "bg-white border-gray-300 text-black" : "bg-black/25 border-white/10 text-white"
                        )}
                    />

                    <button
                        type="button"
                        onClick={addHighlight}
                        className="w-full bg-primary hover:opacity-90 text-white text-xs font-semibold py-2 rounded-lg shadow active:scale-95 transition-all cursor-pointer font-sans"
                    >
                        Save Highlight
                    </button>
                </div>
            )}



            {/* Bottom Progress Bar */}
            <div 
                className={cn(
                    "fixed bottom-0 left-0 right-0 h-1 z-[60] transition-all duration-300 print:hidden",
                    isOrv ? "bg-cyan-500/30"
                        : isBunnyGirl ? "bg-purple-500/30"
                        : isRezero ? "bg-violet-500/30"
                        : isMushokuTensei ? "bg-emerald-500/30"
                        : isLotm ? "bg-amber-500/30"
                        : "bg-red-500/30"
                )}
            >
                <div 
                    ref={progressBarRef}
                    className={cn(
                        "h-full transition-all duration-100 ease-out",
                        isOrv ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                            : isBunnyGirl ? "bg-purple-400 shadow-[0_0_8px_#c084fc]"
                            : isRezero ? "bg-violet-400 shadow-[0_0_8px_#a78bfa]"
                            : isMushokuTensei ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                            : isLotm ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
                            : "bg-red-500 shadow-[0_0_8px_#ef4444]"
                    )}
                    style={{ width: '0%' }}
                />
            </div>
        </div >
    );
}

function applyHighlightsToHtml(html: string, bookmarks: any[], currentVol: string, currentCh: number): string {
    if (!html || !bookmarks) return html;
    let result = html;
    const currentHighlights = bookmarks.filter(b => b.type === 'highlight' && b.volumeId === currentVol && b.chapterIndex === currentCh);
    currentHighlights.forEach(h => {
        if (!h.text) return;
        const escapedText = h.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        try {
            const regex = new RegExp(`(${escapedText})(?![^<>]*>)`, 'gi');
            result = result.replace(regex, `<mark data-highlight-id="${h.id}" style="background-color: ${h.color || 'rgba(254, 240, 138, 0.75)'}; color: #1c1917; padding: 0.1em 0.25em; border-radius: 0.25rem; font-weight: inherit;" class="group relative cursor-pointer highlight-mark" title="${h.note ? 'Note: ' + h.note : 'Highlight'}">$1</mark>`);
        } catch (e) {
            console.error(e);
        }
    });
    return result;
}

interface ReaderContentProps {
    content: string;
    volumeId: string;
    isRezero?: boolean;
    isBunnyGirl?: boolean;
    bookmarks?: any[];
    chapterIndex: number;
    readingMode?: string;
    chapterHeaderHtml?: string;
}

const ReaderContent = React.memo(React.forwardRef<HTMLDivElement, ReaderContentProps>(({ content, volumeId, isRezero, isBunnyGirl, bookmarks = [], chapterIndex, readingMode, chapterHeaderHtml }, ref) => {
    const isOrv = volumeId.startsWith('orv-');
    const isApothecaryDiaries = volumeId.startsWith('ad');
    const highlightedContent = React.useMemo(() => {
        const rawHtml = applyHighlightsToHtml(content, bookmarks, volumeId, chapterIndex);
        if (readingMode === 'horizontal' && chapterHeaderHtml) {
            return chapterHeaderHtml + rawHtml;
        }
        return rawHtml;
    }, [content, bookmarks, volumeId, chapterIndex, readingMode, chapterHeaderHtml]);

    const [colWidth, setColWidth] = React.useState<number>(0);

    React.useEffect(() => {
        if (readingMode !== 'horizontal') return;
        
        const getElement = () => {
            if (typeof ref === 'function') return null;
            return ref?.current || null;
        };

        const updateWidth = () => {
            const el = getElement();
            if (el) {
                setColWidth(el.clientWidth);
            }
        };
        
        const timer = setTimeout(updateWidth, 50);
        
        const el = getElement();
        let observer: ResizeObserver | null = null;
        if (el) {
            observer = new ResizeObserver(() => {
                updateWidth();
            });
            observer.observe(el);
        }
        
        window.addEventListener('resize', updateWidth);
        return () => {
            clearTimeout(timer);
            if (observer) observer.disconnect();
            window.removeEventListener('resize', updateWidth);
        };
    }, [readingMode, ref]);

    return (
        <div
            ref={ref}
            data-volume={volumeId}
            style={{ '--column-width': colWidth ? `${colWidth}px` : '100vw' } as React.CSSProperties}
            className={cn(
                "reader-content prose prose-lg max-w-none dark:prose-invert leading-relaxed break-words prose-a:font-medium hover:prose-a:underline cursor-text prose-headings:text-center prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl md:prose-h2:text-4xl prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-10 text-justify",
                isOrv 
                    ? "prose-a:text-cyan-400 dark:prose-a:text-cyan-400" 
                    : isBunnyGirl
                        ? "prose-a:text-purple-400 dark:prose-a:text-purple-400"
                        : isRezero 
                            ? "prose-a:text-violet-400 dark:prose-a:text-violet-400" 
                            : isApothecaryDiaries
                                ? "prose-a:text-pink-400 dark:prose-a:text-pink-400"
                                : "prose-a:text-red-600 dark:prose-a:text-red-400",
                readingMode === 'horizontal' && "page-mode no-scrollbar"
            )}
            dangerouslySetInnerHTML={{ __html: highlightedContent }}
        />
    );
}));
ReaderContent.displayName = 'ReaderContent';
