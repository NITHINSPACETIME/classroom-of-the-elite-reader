/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import React from 'react';
import { useEffect, useState, useMemo, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Settings, Home, Menu, Minimize, Maximize, X, Search, Download, Printer, FileDown, Plus, Minus, RotateCcw, MoreVertical, ArrowUp, ArrowDown, Heart, MessageCircle, Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomComments } from "@/components/comments/CustomComments"
import { UserMenu } from "@/components/auth/UserMenu"
import { AuthModal } from "@/components/auth/AuthModal"
import { ProfileModal } from "@/components/auth/ProfileModal"
import { ShortcutsModal } from "./ShortcutsModal"
import { useReadingProgress } from "@/hooks/useReadingProgress"
import AdBanner from "@/components/AdBanner"

export type ReaderTheme = 'dark' | 'light' | 'sepia' | 'slatedark' | 'midnight' | 'forest' | 'oled' | 'espresso' | 'gray';
export type ReaderFontFamily = 'serif' | 'sans' | 'merriweather' | 'roboto' | 'lora';

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

export function HtmlReader({ content, title, prevChapter, nextChapter, volumeId, chapterIndex, toc, volumeTitle, epubSource, detailsLink = "/select", returnLink, currentSpineIndex, nextVolumeLink, nextVolumeTitle, debugInfo }: ReaderProps) {
    const router = useRouter();

    const isRezero = detailsLink?.startsWith('/rezero');
    const isOrv = detailsLink?.startsWith('/orv');
    const isBunnyGirl = detailsLink?.startsWith('/bunny-girl');
    const baseReadPath = isOrv ? `/orv/read` : (isRezero ? `/rezero/read` : (isBunnyGirl ? `/bunny-girl/read` : `/read`));


    const [theme, setTheme] = useState<ReaderTheme>('dark');
    const [fontSize, setFontSize] = useState(18);
    const [lineHeight, setLineHeight] = useState(1.8);
    const [fontFamily, setFontFamily] = useState<ReaderFontFamily>('serif');
    const [fontWeight, setFontWeight] = useState(400);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);


    const [commentsOpen, setCommentsOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
    const downloadRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [searchQuery, setSearchQuery] = useState("");

    
    const { progress, loading: progressLoading, saveScrollPosition } = useReadingProgress(volumeId, chapterIndex);
    const [restoredPosition, setRestoredPosition] = useState(false);

 
    useEffect(() => {
        if (!progressLoading && progress && !restoredPosition && progress.chapterIndex === chapterIndex) {
           
            if (progress.scrollPercentage > 0) {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollTop = (progress.scrollPercentage / 100) * scrollHeight;

                
                setTimeout(() => {
                    window.scrollTo({
                        top: scrollTop,
                        behavior: 'smooth'
                    });
                }, 100);
            }
            setRestoredPosition(true);
        }
    }, [progressLoading, progress, restoredPosition, chapterIndex]);







    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY) >= 10) {
                setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
                lastScrollY = currentScrollY;
            }

            // Save reading progress
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll > 0) {
                const percentage = (currentScrollY / maxScroll) * 100;
                // Clamp between 0 and 100
                const clampedPercentage = Math.min(100, Math.max(0, percentage));
                saveScrollPosition(clampedPercentage);
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
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
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
                case 'h':
                    if (prevChapter) router.push(isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`);
                    break;
                case 'arrowright':
                case 'l':
                    if (nextChapter) router.push(isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`);
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
    }, [prevChapter, nextChapter, router, theme, sidebarOpen, settingsOpen, isFullscreen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
                setDownloadMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
        dark: isOrv ? "bg-[#020204] text-[#e2e8f0]" : (isRezero ? "bg-[#05030a] text-[#f4f4f5]" : (isBunnyGirl ? "bg-[#0b0816] text-[#ece2f9]" : "bg-[#14151b] text-[#b6bccc]")),
        light: "bg-white text-gray-900",
        sepia: "bg-[#f4ecd8] text-[#5b4636]",
        slatedark: "bg-[#0d1117] text-[#c9d1d9]",
        midnight: "bg-[#0f172a] text-[#cbd5e1]",
        forest: "bg-[#1a2321] text-[#c1d1cb]",
        oled: "bg-black text-[#a3a3a3]",
        espresso: "bg-[#2b2523] text-[#d6c6c1]",
        gray: "bg-[#27272a] text-[#d4d4d8]"
    };


    const [isInitialized, setIsInitialized] = useState(false);


    const resetSettings = () => {
        setTheme('dark');
        setFontSize(18);
        setLineHeight(1.8);
        setFontFamily('serif');
        setFontWeight(400);
    };


    useEffect(() => {
        const savedTheme = localStorage.getItem('cote-theme');
        const savedFontSize = localStorage.getItem('cote-fontSize');
        const savedLineHeight = localStorage.getItem('cote-lineHeight');
        const savedFontFamily = localStorage.getItem('cote-fontFamily');
        const savedFontWeight = localStorage.getItem('cote-fontWeight');

        if (savedTheme) setTheme(savedTheme as ReaderTheme);
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
        if (savedLineHeight) setLineHeight(parseFloat(savedLineHeight));
        if (savedFontFamily) setFontFamily(savedFontFamily as ReaderFontFamily);
        if (savedFontWeight) setFontWeight(parseInt(savedFontWeight));

        setIsInitialized(true);
    }, []);


    const processedContent = useMemo(() => {
        if (!isBunnyGirl) return content;
        // Format standalone section numbers (like 1, 2, 3...) to be large, italicized, and centered
        return content.replace(/<(p|h3|h2|h4)[^>]*>(?:\s*<[a-zA-Z]+[^>]*>)*\s*(\d+)\s*(?:<\/[a-zA-Z]+>\s*)*<\/\1>/g, (match, tagName, num) => {
            return `<p class="text-center text-4xl font-serif font-light italic text-purple-300/95 my-16 tracking-widest block w-full select-none">${num}</p>`;
        });
    }, [content, isBunnyGirl]);

    useEffect(() => {
        if (nextChapter) {
            router.prefetch(`${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`);
        }
    }, [nextChapter, router, baseReadPath]);


    useEffect(() => {
        if (!isInitialized) return;

        localStorage.setItem('cote-theme', theme);
        localStorage.setItem('cote-fontSize', fontSize.toString());
        localStorage.setItem('cote-lineHeight', lineHeight.toString());
        localStorage.setItem('cote-fontFamily', fontFamily);
        localStorage.setItem('cote-fontWeight', fontWeight.toString());
    }, [theme, fontSize, lineHeight, fontFamily, fontWeight, isInitialized]);


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
        const anchor = target.closest('a');

        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href && (href.startsWith('/read/') || href.startsWith('/rezero/read/'))) {
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
                : "border-red-500 bg-red-500/10 text-white"));

    return (
        <div className={cn("min-h-screen flex flex-col transition-colors duration-300 print:bg-white print:text-black", themeMap[theme])}
            style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                fontFamily: fontFamily === 'serif' ? 'var(--font-playfair), ui-serif, Georgia, serif'
                    : fontFamily === 'sans' ? 'var(--font-inter), ui-sans-serif, system-ui, sans-serif'
                        : fontFamily === 'merriweather' ? 'var(--font-merriweather), serif'
                            : fontFamily === 'roboto' ? 'var(--font-roboto), sans-serif'
                                : fontFamily === 'lora' ? 'var(--font-lora), serif'
                                    : 'ui-sans-serif, system-ui, sans-serif',
                fontWeight: fontWeight
            }}>


            {/* Simple, header */}
            <header className={cn("sticky top-0 z-50 flex h-12 items-center gap-3 border-b px-3 print:hidden", headerStyle)}>

                <div className="flex items-center gap-1 flex-1 min-w-0">
                    <Link href={detailsLink} title="Back to Volume">
                        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Back">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="h-9 w-9" aria-label="Menu">
                        <Menu className="h-4 w-4" />
                    </Button>
                    <div className="flex flex-col min-w-0 flex-1 ml-1">
                        <span className={cn("font-medium text-sm leading-tight truncate", isOrv && "font-cinzel tracking-widest text-cyan-400 text-shadow-cyan uppercase text-xs")}>{volumeTitle}</span>
                        <button 
                            onClick={() => setSidebarOpen(true)} 
                            className={cn("text-xs opacity-50 truncate text-left hover:opacity-80 transition-opacity", isOrv && "font-cinzel tracking-wide text-zinc-200 opacity-90 text-[10px]")}
                        >
                            {title}
                        </button>
                    </div>
                </div>


                <div className="flex items-center gap-0.5 flex-shrink-0">
                    {/* Desktop actions */}
                    <div className="hidden sm:flex items-center gap-0.5">
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
                            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                        </Button>

                        <div className="relative" ref={downloadRef}>
                            <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setDownloadMenuOpen(!downloadMenuOpen)} title="Download">
                                <Download className="h-4 w-4" />
                            </Button>
                            {downloadMenuOpen && (
                                <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-lg border bg-popover p-1 shadow-lg">
                                    <button onClick={handlePrint} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                        <Printer className="h-4 w-4" /> Print
                                    </button>
                                    <button onClick={handleDownload} disabled={!epubSource} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors disabled:opacity-40 text-left">
                                        <FileDown className="h-4 w-4" /> Download EPUB
                                    </button>
                                </div>
                            )}
                        </div>

                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setShortcutsOpen(true)} title="Shortcuts">
                            <Keyboard className="h-4 w-4" />
                        </Button>

                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setCommentsOpen(true)} title="Discussions">
                            <MessageCircle className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile menu */}
                    <div className="sm:hidden relative" ref={mobileMenuRef}>
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                        {mobileMenuOpen && (
                            <div className="absolute right-0 top-full mt-1 w-40 rounded-lg shadow-lg border bg-popover p-1 z-50">
                                <button onClick={toggleFullscreen} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                    {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                                    {isFullscreen ? "Exit Full" : "Fullscreen"}
                                </button>
                                <button onClick={() => { setCommentsOpen(true); setMobileMenuOpen(false); }} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                    <MessageCircle className="h-4 w-4" /> Discuss
                                </button>
                                <button onClick={handlePrint} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors text-left">
                                    <Printer className="h-4 w-4" /> Print
                                </button>
                                <button onClick={handleDownload} disabled={!epubSource} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent transition-colors disabled:opacity-40 text-left">
                                    <FileDown className="h-4 w-4" /> Download
                                </button>
                            </div>
                        )}
                    </div>


                    <UserMenu
                        onSignIn={() => setAuthModalOpen(true)}
                        onProfile={() => setProfileModalOpen(true)}
                    />

                    <ShortcutsModal
                        isOpen={shortcutsOpen}
                        onClose={() => setShortcutsOpen(false)}
                    />

                    <div className="relative">
                        <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSettingsOpen(!settingsOpen)}>
                            <Settings className="h-4 w-4" />
                        </Button>


                        {settingsOpen && (
                            <div className="absolute right-0 top-full mt-2 w-80 p-5 rounded-xl shadow-2xl border bg-[#1a1b26] text-gray-200 z-50 border-gray-800 max-h-[80vh] overflow-y-auto">
                                <h3 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-500">Theme</h3>

                                <div className="grid grid-cols-3 gap-2 mb-6">
                                    <button onClick={() => setTheme('dark')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'dark' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#14151b] border border-gray-600" />
                                        Dark
                                    </button>
                                    <button onClick={() => setTheme('light')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'light' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-white border border-gray-300" />
                                        Light
                                    </button>
                                    <button onClick={() => setTheme('slatedark')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'slatedark' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#0d1117] border border-gray-600" />
                                        Tokyo
                                    </button>
                                    <button onClick={() => setTheme('sepia')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'sepia' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#f4ecd8] border border-[#eaddcf]" />
                                        Sepia
                                    </button>
                                    <button onClick={() => setTheme('midnight')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'midnight' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#0f172a] border border-slate-600" />
                                        Midnight
                                    </button>
                                    <button onClick={() => setTheme('forest')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'forest' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#1a2321] border border-[#2a3633]" />
                                        Forest
                                    </button>
                                    <button onClick={() => setTheme('oled')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'oled' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-black border border-gray-700" />
                                        OLED
                                    </button>
                                    <button onClick={() => setTheme('espresso')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'espresso' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#2b2523] border border-[#403632]" />
                                        Espresso
                                    </button>
                                    <button onClick={() => setTheme('gray')} className={cn("flex flex-col items-center gap-1 p-2 rounded-lg border transition-all text-xs", theme === 'gray' ? activeBorderClass : "border-gray-700 hover:bg-white/5")}>
                                        <div className="w-6 h-6 rounded-full bg-[#27272a] border border-zinc-600" />
                                        Gray
                                    </button>
                                </div>

                                <div className="space-y-5">

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-xs text-gray-400">Font Size</label>
                                            <span className="text-xs font-mono">{fontSize}px</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setFontSize(Math.max(12, fontSize - 1))}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <div className="flex-1 h-8 flex items-center justify-center bg-black/20 rounded border border-gray-800 font-bold text-sm">
                                                {Math.round((fontSize / 18) * 100)}%
                                            </div>
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setFontSize(Math.min(32, fontSize + 1))}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>


                                    <div>
                                        <label className="text-xs text-gray-400 mb-2 block">Font Family</label>
                                        <div className="grid grid-cols-3 gap-2 bg-black/20 p-1 rounded-lg border border-gray-800">
                                            {[
                                                { id: 'serif', label: 'Serif', font: 'font-serif' },
                                                { id: 'sans', label: 'Sans', font: 'font-sans' },
                                                { id: 'merriweather', label: 'Merriweather', font: 'font-merriweather' },
                                                { id: 'roboto', label: 'Roboto', font: 'font-roboto' },
                                                { id: 'lora', label: 'Lora', font: 'font-lora' },
                                            ].map((font) => (
                                                <button
                                                    key={font.id}
                                                    onClick={() => setFontFamily(font.id as ReaderFontFamily)}
                                                    className={cn(
                                                        "text-xs py-1.5 rounded transition-colors truncate px-1",
                                                        fontFamily === font.id
                                                            ? "bg-gray-700 text-white shadow-sm"
                                                            : "hover:bg-white/5 text-gray-400"
                                                    )}
                                                    style={{ fontFamily: font.id === 'merriweather' ? 'var(--font-merriweather)' : font.id === 'roboto' ? 'var(--font-roboto)' : font.id === 'lora' ? 'var(--font-lora)' : undefined }}
                                                >
                                                    {font.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>


                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-xs text-gray-400">Line Height</label>
                                            <span className="text-xs font-mono">{lineHeight.toFixed(1)}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setLineHeight(Math.max(1.0, parseFloat((lineHeight - 0.1).toFixed(1))))}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <div className="flex-1 h-8 flex items-center justify-center bg-black/20 rounded border border-gray-800 font-bold text-sm">
                                                {lineHeight}
                                            </div>
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setLineHeight(Math.min(3.0, parseFloat((lineHeight + 0.1).toFixed(1))))}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>


                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-xs text-gray-400">Font Weight</label>
                                            <span className="text-xs font-mono">{fontWeight}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setFontWeight(Math.max(100, fontWeight - 100))}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <div className="flex-1 h-8 flex items-center justify-center bg-black/20 rounded border border-gray-800 font-bold text-sm">
                                                {fontWeight}
                                            </div>
                                            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent border-gray-700 hover:bg-white/5" onClick={() => setFontWeight(Math.min(900, fontWeight + 100))}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <Button onClick={resetSettings} variant="destructive" className="w-full h-9 text-xs gap-2">
                                        <RotateCcw className="h-3 w-3" /> Reset to Defaults
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>




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
                )}>
                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                        <h2 className="text-lg font-serif font-bold">Contents</h2>
                        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>


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
                                    isOrv ? "focus:ring-cyan-500" : isBunnyGirl ? "focus:ring-purple-400" : isRezero ? "focus:ring-violet-500" : "focus:ring-red-500",
                                    theme === 'light'
                                        ? "bg-white border-gray-300 text-black placeholder:text-gray-400"
                                        : "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:bg-white/10"
                                )}
                            />
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto space-y-1 min-h-0">
                        {filteredToc?.map((item, i) => {

                            return (
                                <Link
                                    key={i}
                                    href={isOrv ? `${baseReadPath}?c=${item.href}` : `${baseReadPath}/${volumeId}/${item.index}${item.href && item.href.includes('#') ? '#' + item.href.split('#')[1] : ''}`}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "block px-3 py-2 rounded-md text-sm transition-colors line-clamp-2",
                                        (currentSpineIndex ? item.index === currentSpineIndex : item.index === chapterIndex)
                                            ? (isOrv 
                                                ? "bg-cyan-500/10 text-cyan-400 font-medium" 
                                                : isBunnyGirl 
                                                    ? "bg-purple-500/10 text-purple-300 font-medium" 
                                                    : isRezero 
                                                        ? "bg-violet-500/10 text-violet-400 font-medium" 
                                                        : "bg-red-500/10 text-red-500 font-medium")
                                            : theme === 'light' ? "hover:bg-gray-200/50" : "hover:bg-white/5 opacity-80 hover:opacity-100",

                                        volumeId === 'v0' && item.label.startsWith('Part ') && "pl-8 border-l-2 border-transparent hover:border-white/10 ml-2"
                                    )}
                                >
                                    {item.label || `Chapter ${item.index}`}
                                </Link>
                            );
                        })}

                        {(!toc || toc.length === 0) && (
                            <p className="text-sm opacity-50 italic">Table of contents not available.</p>
                        )}

                        {toc && toc.length > 0 && filteredToc.length === 0 && (
                            <p className="text-sm opacity-50 italic text-center py-4">No matching chapters found.</p>
                        )}
                    </nav>
                </aside>


                <main
                    className={cn(
                        "flex-1 overflow-y-auto relative scroll-smooth print:overflow-visible print:h-auto print:block",
                        sidebarOpen && "md:ml-80 transition-[margin] duration-300 print:ml-0"
                    )}

                    onClick={handleContentClickInternal}
                >
                    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 md:px-12">
                        {debugInfo && (
                            <div className="bg-red-500 text-white p-4 mb-4 rounded font-mono text-xs whitespace-pre-wrap">
                                FLAGS: {debugInfo}
                            </div>
                        )}

                        <AdBanner />

                        <style jsx global>{`
                            .reader-content p, 
                            .reader-content li,
                            .reader-content div {
                                line-height: ${lineHeight} !important;
                                margin-bottom: 1.5em;
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
                        `}</style>

                        <style>{`

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
                        `}</style>


                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                             <ReaderContent content={processedContent} volumeId={volumeId} isRezero={isRezero} isBunnyGirl={isBunnyGirl} />
                        </motion.div>

                        <AdBanner />
                    </div>


                    <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 print:hidden">
                        {prevChapter ? (
                            <Link href={isOrv ? `${baseReadPath}?c=${prevChapter.chapter}` : `${baseReadPath}/${prevChapter.volumeId}/${prevChapter.chapter}`} className="flex-1">
                                <div className={cn(
                                    "flex flex-col gap-1 p-4 rounded-xl border transition-all cursor-pointer group",
                                    theme === 'light' 
                                        ? (isOrv ? "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-md" : isBunnyGirl ? "bg-white border-gray-200 hover:border-purple-300 hover:shadow-md" : isRezero ? "bg-white border-gray-200 hover:border-violet-300 hover:shadow-md" : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md")
                                        : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10" : isBunnyGirl ? "bg-[#100b1e] border-purple-950/40 hover:border-purple-500/50 hover:bg-purple-950/20" : isRezero ? "bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/10" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-white/10")
                                )}>
                                    <div className={cn(
                                        "flex items-center gap-2 text-xs uppercase tracking-wider opacity-60 font-semibold group-hover:text-opacity-100",
                                        isOrv ? "text-cyan-400 group-hover:text-cyan-300" : isBunnyGirl ? "text-purple-400 group-hover:text-purple-300" : isRezero ? "text-violet-400 group-hover:text-violet-300" : "text-red-500 group-hover:text-red-400"
                                    )}>
                                        <ArrowLeft className="w-3 h-3" /> Previous Chapter
                                    </div>
                                    <div className="text-sm sm:text-base font-serif font-bold truncate">
                                        {prevChapter.title || `Chapter ${prevChapter.chapter}`}
                                    </div>
                                </div>
                            </Link>
                        ) : <div className="flex-1" />}



                        {nextChapter ? (
                            <Link href={isOrv ? `${baseReadPath}?c=${nextChapter.chapter}` : `${baseReadPath}/${nextChapter.volumeId}/${nextChapter.chapter}`} className="flex-1">
                                <div className={cn(
                                    "flex flex-col gap-1 p-4 rounded-xl border transition-all cursor-pointer group text-left sm:text-right",
                                    theme === 'light' 
                                        ? (isOrv ? "bg-white border-gray-200 hover:border-cyan-300 hover:shadow-md" : isBunnyGirl ? "bg-white border-gray-200 hover:border-purple-300 hover:shadow-md" : isRezero ? "bg-white border-gray-200 hover:border-violet-300 hover:shadow-md" : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md")
                                        : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-white/10" : isBunnyGirl ? "bg-[#100b1e] border-purple-950/40 hover:border-purple-500/50 hover:bg-purple-950/20" : isRezero ? "bg-white/5 border-white/10 hover:border-violet-500/50 hover:bg-white/10" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-white/10")
                                )}>
                                    <div className={cn(
                                        "flex items-center justify-start sm:justify-end gap-2 text-xs uppercase tracking-wider opacity-60 font-semibold group-hover:text-opacity-100",
                                        isOrv ? "text-cyan-400 group-hover:text-cyan-300" : isBunnyGirl ? "text-purple-400 group-hover:text-purple-300" : isRezero ? "text-violet-400 group-hover:text-violet-300" : "text-red-500 group-hover:text-red-400"
                                    )}>
                                        Next Chapter <ArrowRight className="h-3 w-3" />
                                    </div>
                                    <div className="text-sm sm:text-base font-serif font-bold truncate">
                                        {nextChapter.title || `Chapter ${nextChapter.chapter}`}
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            nextVolumeLink ? (
                                <Link href={nextVolumeLink} className="flex-1">
                                    <div className={cn(
                                        "flex flex-col items-center justify-center gap-1 p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.02] group relative overflow-hidden",
                                        theme === 'light'
                                            ? (isOrv 
                                                ? "bg-gradient-to-br from-cyan-50 to-white border-cyan-200 text-cyan-900 shadow-sm hover:shadow-md hover:border-cyan-300"
                                                : isBunnyGirl
                                                    ? "bg-gradient-to-br from-purple-50 to-white border-purple-200 text-purple-900 shadow-sm hover:shadow-md hover:border-purple-300"
                                                    : isRezero
                                                        ? "bg-gradient-to-br from-violet-50 to-white border-violet-200 text-violet-900 shadow-sm hover:shadow-md hover:border-violet-300"
                                                        : "bg-gradient-to-br from-red-50 to-white border-red-200 text-red-900 shadow-sm hover:shadow-md hover:border-red-300"
                                              )
                                            : (isOrv
                                                ? "bg-gradient-to-br from-cyan-950/20 to-cyan-950/10 border-cyan-500/30 text-cyan-100 hover:border-cyan-500/50 hover:from-cyan-950/30 hover:to-cyan-950/20"
                                                : isBunnyGirl
                                                    ? "bg-gradient-to-br from-[#1b102e]/30 to-[#1b102e]/10 border-purple-500/30 text-purple-100 hover:border-purple-500/50 hover:from-[#1b102e]/40 hover:to-[#1b102e]/20"
                                                    : isRezero
                                                        ? "bg-gradient-to-br from-violet-950/20 to-violet-950/10 border-violet-500/30 text-violet-100 hover:border-violet-500/50 hover:from-violet-950/30 hover:to-violet-950/20"
                                                        : "bg-gradient-to-br from-red-900/20 to-red-900/10 border-red-500/30 text-red-100 hover:border-red-500/50 hover:from-red-900/30 hover:to-red-900/20"
                                              )
                                    )}>

                                        <div className={cn(
                                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            isOrv ? "bg-cyan-500/5" : isBunnyGirl ? "bg-purple-500/5" : isRezero ? "bg-violet-500/5" : "bg-red-500/5"
                                        )} />

                                        <div className="relative z-10 flex flex-col items-center gap-1">
                                            <span className="font-serif font-bold flex items-center gap-2 text-lg">
                                                Start {nextVolumeTitle ? nextVolumeTitle : "Next Volume"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <span className="text-xs opacity-70 uppercase tracking-widest font-semibold">Continue the Story</span>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <Link href={returnLink || detailsLink} className="flex-1">
                                    <div className={cn(
                                        "flex flex-col items-center justify-center gap-1 p-4 rounded-xl border transition-all cursor-pointer hover:scale-[1.02]",
                                        theme === 'light' 
                                            ? (isOrv ? "bg-cyan-50 border-cyan-200 text-cyan-800" : isBunnyGirl ? "bg-purple-50 border-purple-200 text-purple-800" : isRezero ? "bg-violet-50 border-violet-200 text-violet-800" : "bg-red-50 border-red-200 text-red-800") 
                                            : (isOrv ? "bg-cyan-950/20 border-cyan-500/50 text-cyan-200" : isBunnyGirl ? "bg-[#1b102e] border-purple-500/30 text-purple-200" : isRezero ? "bg-violet-950/20 border-violet-500/30 text-violet-200" : "bg-red-900/20 border-red-500/50 text-red-200")
                                    )}>
                                        <span className="font-serif font-bold">Return to Library</span>
                                        <span className="text-xs opacity-70">
                                            {isOrv ? "Select Scenario" : (isRezero || isBunnyGirl) ? "Select Volume" : "Select Year"}
                                        </span>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>


                    <div className="mt-16 mb-8 flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground/70">
                            <div className="h-px w-8 bg-current opacity-30" />
                            <span>Support the Project</span>
                            <div className="h-px w-8 bg-current opacity-30" />
                        </div>
                        <Link href="/donate">
                            <Button
                                variant="outline"
                                className={cn(
                                    "rounded-full gap-2 pl-4 pr-6 h-10 transition-all duration-300 group hover:scale-105 shadow-sm",
                                    theme === 'light'
                                        ? (isOrv ? "bg-white border-cyan-100 hover:border-cyan-300 text-gray-600 hover:text-cyan-600" : "bg-white border-red-100 hover:border-red-300 text-gray-600 hover:text-red-600")
                                        : (isOrv ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400" : "bg-white/5 border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400")
                                )}
                            >
                                <Heart className="w-4 h-4 transition-colors group-hover:fill-current" />
                                <span className="font-serif">Donate</span>
                            </Button>
                        </Link>
                    </div>
                </main>
            </div >


            < div className="fixed bottom-6 right-6 z-50 print:hidden flex flex-col gap-3" >

                < div className="flex flex-col gap-2" >
                    <Button
                        size="icon"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={cn(
                            "h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                            theme === 'light' ? "bg-white text-gray-600 hover:bg-gray-100" : "bg-black/50 text-gray-300 hover:bg-black/70 border border-white/10",
                            scrollDirection === 'up' ? "flex" : "hidden sm:flex"
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
                            theme === 'light' ? "bg-white text-gray-600 hover:bg-gray-100" : "bg-black/50 text-gray-300 hover:bg-black/70 border border-white/10",
                            scrollDirection === 'down' ? "flex" : "hidden sm:flex"
                        )}
                        title="Scroll to Bottom"
                    >
                        <ArrowDown className="h-5 w-5" />
                    </Button>
                </div >

                <Link href={detailsLink}>
                    <Button
                        size="icon"
                        className={cn(
                            "h-12 w-12 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110",
                            theme === 'light' ? "bg-white text-black hover:bg-gray-100" : "bg-black/80 text-white hover:bg-black border border-white/10"
                        )}
                        title="Exit to Volume Details"
                    >
                        <Home className="h-5 w-5" />
                    </Button>
                </Link>
            </div >


            < CustomComments
                isOpen={commentsOpen}
                onClose={() => setCommentsOpen(false)
                }
                volumeId={volumeId}
                chapterTitle={title}
                onSignInRequest={() => setAuthModalOpen(true)}
            />
            < AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
            < ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
        </div >
    );
}

const ReaderContent = React.memo(({ content, volumeId, isRezero, isBunnyGirl }: { content: string, volumeId: string, isRezero?: boolean, isBunnyGirl?: boolean }) => {
    const isOrv = volumeId.startsWith('orv-');

    return (
        <div
            data-volume={volumeId}
            className={cn(
                "reader-content prose prose-lg max-w-none dark:prose-invert leading-relaxed break-words prose-a:font-medium hover:prose-a:underline cursor-text prose-headings:text-center prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl md:prose-h2:text-4xl prose-headings:font-serif prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-10 text-justify",
                isOrv 
                    ? "prose-a:text-cyan-400 dark:prose-a:text-cyan-400" 
                    : isBunnyGirl
                        ? "prose-a:text-purple-400 dark:prose-a:text-purple-400"
                        : isRezero 
                            ? "prose-a:text-violet-400 dark:prose-a:text-violet-400" 
                            : "prose-a:text-red-600 dark:prose-a:text-red-400"
            )}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
});
ReaderContent.displayName = 'ReaderContent';
