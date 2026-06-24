"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  sway: number;
  opacity: number;
}

const adSlides = [
  "/assets/images/apothecary-diaries/wallpapers/bg_cherry.jpg",
  "/assets/images/apothecary-diaries/wallpapers/bg_main.png",
  "/assets/images/apothecary-diaries/wallpapers/bg_select.jpg",
  "/assets/images/apothecary-diaries/wallpapers/bg_read.jpg"
];

export default function ApothecaryDiariesLanding() {
  const [petalsActive, setPetalsActive] = useState(true);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [atelierOpen, setAtelierOpen] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 16,
      delay: Math.random() * 15,
      duration: Math.random() * 16 + 14,
      rotation: Math.random() * 360,
      sway: (Math.random() - 0.5) * 15,
      opacity: Math.random() * 0.35 + 0.6,
    }));
    setTimeout(() => {
      setPetals(generated);
    }, 0);
  }, []);

  return (
    <main className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#0c0709] text-white flex flex-col justify-between">

      {/* Cinematic background wallpaper slideshow */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={adSlides[currentSlide]}
              alt=""
              fill
              priority={currentSlide === 0}
              className="object-cover object-[50%_25%] opacity-80 sm:opacity-90"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Cinematic overlays and vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0709]/80 via-transparent to-[#0c0709]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0709]/75 via-transparent to-[#0c0709]/30 z-10" />
        <div className="absolute inset-0 bg-[#0c0709]/10 z-10" />
      </div>

      {/* Global cherry blossom petals */}
      <AnimatePresence>
        {petalsActive && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-[60]">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                initial={{ y: -20, x: `${petal.x}vw`, rotate: petal.rotation, opacity: 0 }}
                animate={{
                  y: "105vh",
                  x: [`${petal.x}vw`, `${petal.x + petal.sway}vw`, `${petal.x - petal.sway * 0.4}vw`],
                  rotate: petal.rotation + 360,
                  opacity: [0, petal.opacity * 0.7, petal.opacity, petal.opacity * 0.5, 0],
                }}
                transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: "linear" }}
                className="absolute pointer-events-none"
                style={{
                  width: petal.size,
                  height: petal.size,
                  filter: "drop-shadow(0 2px 4px rgba(216, 82, 135, 0.2)) blur(0.3px)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <defs>
                    <radialGradient id={`petal-grad-${petal.id}`} cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="30%" stopColor="#ffe6f0" stopOpacity="0.9" />
                      <stop offset="75%" stopColor="#f59cc0" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d44b80" stopOpacity="0.7" />
                    </radialGradient>
                  </defs>
                  {/* Sakura Petal Path with V-notch */}
                  <path
                    d="M12 21C12 21 6.5 16.5 4.5 11.5C2.5 6.5 5.5 3 9 3.5C10.8 3.7 11.5 5.2 12 6.2C12.5 5.2 13.2 3.7 15 3.5C18.5 3 21.5 6.5 19.5 11.5C17.5 16.5 12 21 12 21Z"
                    fill={`url(#petal-grad-${petal.id})`}
                  />
                  {/* Delicate center line/vein */}
                  <path
                    d="M12 20C12 16.5 12 11.5 12 6.5"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    strokeOpacity="0.4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Header Navigation */}
      <div className="relative z-50">
        <SiteHeader showBack={true} backLink="/" />
      </div>

      {/* Petal toggle — relocated to bottom-right corner to prevent header overlap */}
      <button
        onClick={() => setPetalsActive(!petalsActive)}
        aria-label={petalsActive ? "Hide petals" : "Show petals"}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg ${
          petalsActive
            ? "bg-[#9c3d49]/20 border-[#9c3d49]/40 text-[#fac8d8] hover:bg-[#9c3d49]/35 hover:border-[#9c3d49]/60 shadow-[0_0_15px_rgba(156,61,73,0.15)]"
            : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:border-white/20"
        } backdrop-blur-md`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={petalsActive ? "animate-pulse" : ""}>
          <path d="M17 8C8 10 5.9 16.1 5 21C6.1 19.8 8.2 18.2 12 17C16 15.7 18.2 12.3 19 9C19.5 7 19.8 4.2 20 2C18 2.2 17.5 4.5 17 8Z" />
          <path d="M12 17C7 17.5 4 19 2 22C3.5 18 5 13.5 10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </button>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 lg:px-20 gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto w-full z-10 pt-24 pb-8 md:py-0">
        
        {/* Left Side: Overlapping Tactile Parchment Card System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center select-none"
        >
          <div className="relative w-[150px] sm:w-[200px] md:w-[220px] aspect-[2/3]">
            {/* Paper 1: Aged parchment (bottom layer) */}
            <div className="absolute inset-0 bg-[#ebdcb9] border border-[#d2c095]/40 rounded-sm -rotate-6 shadow-xl mix-blend-multiply opacity-80" />
            
            {/* Paper 2: Soft watercolor paper (middle layer) */}
            <div className="absolute inset-0 bg-[#f9f6ed] border border-[#e5dec9]/60 rounded-sm rotate-3 shadow-lg mix-blend-normal opacity-90" />
            
            {/* Book Cover Frame (top layer) */}
            <div className="absolute inset-[3px] rounded-sm overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-[1.03] group">
              <Image
                src="/assets/images/apothecary-diaries/ad1/cover.jpg"
                alt="The Apothecary Diaries Cover"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 150px, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Typography & CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg gap-4 md:gap-6"
        >
          <div className="flex flex-col gap-1.5 md:gap-3">
            <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-white/30 font-light">
              薬屋のひとりごと
            </p>
            <h1 className="font-[family:var(--font-lora)] leading-[0.95] tracking-tight">
              <span className="block text-[clamp(2rem,4vw,3.2rem)] font-bold text-white/95">
                The
              </span>
              <span className="block text-[clamp(2.5rem,6vw,4.2rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e4cbb5] via-[#d4a07a] to-[#b87a50] drop-shadow-[0_2px_10px_rgba(212,160,122,0.15)]">
                Apothecary
              </span>
              <span className="block text-[clamp(2rem,4vw,3.2rem)] font-bold text-white/90">
                Diaries
              </span>
            </h1>
          </div>

          {/* Maomao Quote (Soft glassmorphic card for high legibility against the bright background) */}
          <div className="relative border-l-2 border-[#d4a07a]/55 pl-4 py-2 pr-5 max-w-md hidden sm:block bg-black/35 backdrop-blur-[3px] rounded-r-lg border-y border-r border-white/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
            <p className="font-[family:var(--font-lora)] text-sm sm:text-base italic text-white/90 leading-relaxed font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              &quot;A little poison can be a cure. A little knowledge can be deadly.&quot;
            </p>
            <p className="mt-1.5 text-[9px] text-[#d4a07a]/85 font-bold tracking-widest uppercase font-mono drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              — Maomao
            </p>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col items-center md:items-start gap-3 mt-2">
            <Link href="/apothecary-diaries/select">
              <Button
                size="lg"
                className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-[#9c3d49] to-[#b85461] hover:from-[#b85461] hover:to-[#d4707e] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(156,61,73,0.45)] hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <span>Start Reading</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Maomao's Cursor Atelier (Interactive hover test grid for all 17 cursor files) */}
          <motion.div
            layout
            onClick={() => !atelierOpen && setAtelierOpen(true)}
            className={`relative border shadow-lg hidden sm:flex flex-col select-none overflow-hidden transition-all duration-300 ${
              atelierOpen
                ? "mt-2 p-3.5 bg-black/45 backdrop-blur-[3px] border-white/[0.04] rounded-xl max-w-sm text-left w-full cursor-default"
                : "mt-2 w-12 h-12 rounded-full bg-gradient-to-r from-[#9c3d49]/20 to-[#b85461]/20 hover:from-[#9c3d49]/35 hover:to-[#b85461]/35 border-[#9c3d49]/30 hover:border-[#9c3d49]/50 items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(156,61,73,0.2)]"
            }`}
          >
            {!atelierOpen ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center justify-center text-white cursor-pointer relative w-full h-full"
                title="Open Cursor Atelier"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fac8d8] animate-pulse">
                  <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="m13 13 6 6" />
                </svg>
                {/* Ripple ring effect */}
                <div className="absolute inset-0 rounded-full border border-[#fac8d8]/30 animate-ping opacity-60 scale-125" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col w-full"
              >
                <div className="flex items-center justify-between mb-2 select-none">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#d4a07a]/90 font-bold">
                    Maomao Cursor Atelier (Hover to Test)
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAtelierOpen(false);
                    }}
                    className="text-white/40 hover:text-white/80 transition-colors p-0.5 rounded-full hover:bg-white/5 cursor-pointer flex items-center justify-center"
                    title="Collapse Atelier"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[8px] text-white/50 font-mono select-none">
                  <div className="cursor-default bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Default arrow cursor">Normal</div>
                  <div className="cursor-pointer bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Hand pointer hover">Link</div>
                  <div className="cursor-text bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="I-beam text hover">Text</div>
                  <div className="cursor-wait bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Hourglass wait hover">Busy</div>
                  <div className="cursor-progress bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Background working hover">Working</div>
                  <div className="cursor-not-allowed bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Not allowed circle hover">Forbidden</div>
                  <div className="cursor-help bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Question mark help hover">Help</div>
                  <div className="cursor-move bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Move arrow cross hover">Move</div>
                  <div className="cursor-crosshair bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Precision hair cross hover">Crosshair</div>
                  <div className="cursor-cell bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Table cell green select hover">Cell</div>
                  <div className="cursor-alias bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Curved link arrow hover">Alternate</div>
                  <div className="cursor-copy bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Pencil/copy hover">Pencil</div>
                  <div className="cursor-ns-resize bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Vertical split resize hover">Resize V</div>
                  <div className="cursor-ew-resize bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Horizontal split resize hover">Resize H</div>
                  <div className="cursor-nwse-resize bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Diagonal split resize hover">Resize D1</div>
                  <div className="cursor-nesw-resize bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded py-1 text-center transition-colors" title="Diagonal split 2 resize hover">Resize D2</div>
                  <div className="cursor-person col-span-4 bg-[#9c3d49]/10 hover:bg-[#9c3d49]/20 hover:text-[#fac8d8] border border-[#9c3d49]/25 rounded py-1 text-center transition-colors" title="Custom person profile hover">Maomao Profile (Person)</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Thematic Footer */}
      <footer className="w-full py-5 flex flex-col items-center justify-center gap-1.5 text-center text-[10px] text-white/10 border-t border-white/[0.03] bg-black/10 backdrop-blur-sm z-10">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-semibold uppercase tracking-wider">
          ← Return to Library
        </Link>
        <p>© 2026 Novels Reader. Not affiliated with the official franchise.</p>
      </footer>
    </main>
  );
}
