"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Heart, BookOpen } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<"cote" | "rezero" | "orv" | "bunny-girl" | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("http://nithin7q24zhuov3zepzearfvu3fgsmfsl7nffvewsh5x4jdektbv4qd.onion");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden bg-[#030206] text-white px-4 py-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none fixed">
        {/* Left Side Crimson Glow */}
        <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[150px] transition-all duration-1000 ${
          hoveredCard === "cote" ? "opacity-90 scale-110 bg-red-900/20" : "opacity-40"
        }`} />
        {/* Center Cyan Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-950/10 rounded-full blur-[150px] transition-all duration-1000 ${
          hoveredCard === "orv" ? "opacity-90 scale-125 bg-cyan-900/25" : "opacity-20"
        }`} />
        {/* Right Side Violet Glow */}
        <div className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-950/20 rounded-full blur-[150px] transition-all duration-1000 ${
          hoveredCard === "rezero" ? "opacity-90 scale-110 bg-violet-900/25" : "opacity-40"
        }`} />
        {/* Soft Twilight Glow for Bunny Girl */}
        <div className={`absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[150px] transition-all duration-1000 ${
          hoveredCard === "bunny-girl" ? "opacity-90 scale-110 bg-purple-900/20" : "opacity-0"
        }`} />
        {/* Center Subtler Ambient Light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-950/30 via-transparent to-transparent opacity-60" />
      </div>
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('/assets/grid.svg')] mix-blend-overlay pointer-events-none fixed" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col items-center gap-4 mb-8 md:mb-12 text-center"
      >
        {/* Badges Container */}
        <div className="flex flex-wrap gap-3 items-center justify-center mb-2">
          <a
            href="https://discord.gg/3zAsapzwmv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(88,101,242,0.25)] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm group"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-650 opacity-75 group-hover:bg-[#5865F2]"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-500 group-hover:bg-[#5865F2] transition-colors"></span>
            </span>
            Join Discord for Updates
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-650 opacity-75 group-hover:bg-emerald-500"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-500 group-hover:bg-emerald-500 transition-colors"></span>
            </span>
            {copied ? "URL Copied to Clipboard!" : "Also available on Darkweb"}
          </button>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.22em] bg-gradient-to-b from-zinc-100 via-white to-zinc-500 bg-clip-text text-transparent uppercase transition-all duration-700 select-none">
          Novels Reader
        </h1>
        <p className="font-serif text-[10px] md:text-xs tracking-[0.3em] uppercase text-zinc-500/70 mt-3 flex items-center gap-4 select-none">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-zinc-800/80" />
          Select Your Light Novel
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-zinc-800/80" />
        </p>
      </motion.div>

      {/* Portal Windows (Squircles) Grid */}
      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full max-w-7xl px-4">
        
        {/* COTE Squircle Window */}
        <Link 
          href="/cote" 
          className="group w-full max-w-[340px] lg:max-w-[380px] relative"
          onMouseEnter={() => setHoveredCard("cote")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-red-700 to-orange-600 opacity-0 blur-2xl group-hover:opacity-20 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-red-500/30 group-hover:shadow-[0_0_50px_rgba(239,68,68,0.2)] flex flex-col justify-end p-8"
          >
            {/* Background cover image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/landing-bg-2.jpg"
                alt="Classroom of the Elite Cover"
                fill
                priority
                className="object-cover opacity-75 transition-all duration-1000 group-hover:scale-[1.03] group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-[#030206]/40 to-transparent" />
            </div>

            {/* Squircle Window Content */}
            <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-zinc-150 group-hover:text-red-200 transition-colors duration-300">
                Classroom of the Elite
              </h3>
              <p className="text-xs text-zinc-450 group-hover:text-zinc-200/90 transition-colors duration-300 leading-relaxed font-sans font-light tracking-wide">
                Follow Kiyotaka Ayanokōji through Years 1, 2, and 3 at the Advanced Nurturing High School.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Re:Zero Squircle Window */}
        <Link 
          href="/rezero" 
          className="group w-full max-w-[340px] lg:max-w-[380px] relative"
          onMouseEnter={() => setHoveredCard("rezero")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-violet-700 to-fuchsia-600 opacity-0 blur-2xl group-hover:opacity-20 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-violet-500/30 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.2)] flex flex-col justify-end p-8"
          >
            {/* Background cover image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/rezero_v1_cover.png"
                alt="Re:Zero Cover"
                fill
                priority
                className="object-cover opacity-75 transition-all duration-1000 group-hover:scale-[1.03] group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-[#030206]/40 to-transparent" />
            </div>

            {/* Squircle Window Content */}
            <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-zinc-150 group-hover:text-violet-200 transition-colors duration-300">
                Re:Zero
              </h3>
              <p className="text-xs text-zinc-450 group-hover:text-zinc-200/90 transition-colors duration-300 leading-relaxed font-sans font-light tracking-wide">
                Subaru Natsuki is summoned to a dark fantasy world to face death and loop with memory intact.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* ORV Squircle Window */}
        <Link 
          href="/orv" 
          className="group w-full max-w-[340px] lg:max-w-[380px] relative"
          onMouseEnter={() => setHoveredCard("orv")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-cyan-700 to-blue-650 opacity-0 blur-2xl group-hover:opacity-20 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col justify-end p-8"
          >
            {/* Background cover image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/orv/covers/orv.webp"
                alt="Omniscient Reader's Viewpoint Cover"
                fill
                priority
                className="object-cover opacity-75 transition-all duration-1000 group-hover:scale-[1.03] group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/40 to-transparent" />
            </div>

            {/* Squircle Window Content */}
            <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-zinc-150 group-hover:text-cyan-200 transition-colors duration-300">
                Omniscient Reader
              </h3>
              <p className="text-xs text-zinc-450 group-hover:text-zinc-200/90 transition-colors duration-300 leading-relaxed font-sans font-light tracking-wide">
                Follow Kim Dokja as he navigates the scenario challenges of a webnovel turned reality.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Bunny Girl Squircle Window */}
        <Link 
          href="/bunny-girl" 
          className="group w-full max-w-[340px] lg:max-w-[380px] relative"
          onMouseEnter={() => setHoveredCard("bunny-girl")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-purple-700 to-indigo-650 opacity-0 blur-2xl group-hover:opacity-20 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col justify-end p-8"
          >
            {/* Background cover image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/bunny-girl/v1/cover.jpg"
                alt="Rascal Does Not Dream Cover"
                fill
                priority
                className="object-cover opacity-75 transition-all duration-1000 group-hover:scale-[1.03] group-hover:opacity-90"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-[#030206]/45 to-transparent" />
            </div>

            {/* Squircle Window Content */}
            <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
              <h3 className="font-serif text-xl lg:text-2xl font-semibold tracking-wide text-zinc-150 group-hover:text-purple-200 transition-colors duration-300 leading-tight">
                Rascal Does Not Dream Of Bunny Girl Senpai
              </h3>
              <p className="text-xs text-zinc-450 group-hover:text-zinc-200/90 transition-colors duration-300 leading-relaxed font-sans font-light tracking-wide">
                Follow Sakuta Azusagawa as he resolves supernatural cases of the mysterious Adolescence Syndrome.
              </p>
            </div>
          </motion.div>
        </Link>

      </div>

      {/* Crawlable Structured SEO Elements (Invisible to UI, fully crawlable by Googlebot) */}
      <div className="sr-only">
        <h1>Read Classroom of the Elite, Re:Zero, Omniscient Reader, and Rascal Does Not Dream Light Novels Online</h1>
        <p>
          Welcome to the Portal. Read all volumes of Classroom of the Elite (COTE), Re:Zero - Starting Life in Another World, Omniscient Reader&apos;s Viewpoint (ORV), and Rascal Does Not Dream (Aobuta) online.
          Immersive reading experience, complete translations, and ad-free interfaces.
        </p>
      </div>

      {/* Footer (Moved from COTE landing page to global landing portal) */}
      <footer className="w-full mt-12 py-8 flex flex-col items-center justify-center gap-4 text-center text-sm text-zinc-400 border-t border-white/5 bg-black/20 backdrop-blur-sm z-10">
        <div className="flex gap-4">
          <a
            href="https://github.com/NITHINSPACETIME/novels-reader"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-650 hover:bg-zinc-900/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-5 h-5 text-white/80 group-hover:text-white" />
          </a>

          <a
            href="https://discord.gg/3zAsapzwmv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 hover:shadow-[0_0_20px_rgba(88,101,242,0.15)] transition-all duration-300 hover:scale-110 group flex items-center justify-center"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current text-white/80 group-hover:text-[#5865F2] transition-colors"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          </a>

          <Link
            href="/guestbook"
            className="p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 text-zinc-400 hover:text-amber-355 hover:border-amber-500/40 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 hover:scale-110 group"
          >
            <BookOpen className="w-5 h-5 text-white/80 group-hover:text-amber-400 transition-all duration-300" />
          </Link>

          <Link
            href="/donate"
            className="p-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 text-zinc-400 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] transition-all duration-300 hover:scale-110 group"
          >
            <Heart className="w-5 h-5 text-white/80 group-hover:text-red-500 group-hover:fill-red-500/20 transition-all duration-300" />
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1 justify-center">
            © 2026 Novels Reader. Made by{" "}
            <a
              href="https://github.com/NITHINSPACETIME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-amber-500/95 transition-colors font-medium border-b border-zinc-700/60 hover:border-amber-500/50"
            >
              NITHINSPACETIME
            </a>
          </p>
          <p className="text-xs text-zinc-500/70">Not affiliated with the official Classroom of the Elite, Re:Zero, or Seishun Buta Yarou franchises.</p>
        </div>
      </footer>
    </main>
  );
}
