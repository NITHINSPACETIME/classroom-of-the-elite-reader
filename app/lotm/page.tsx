"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { SiteHeader } from "@/components/ui/SiteHeader";

const lotmSlides = [
  "/assets/images/lotm/bg/1405686.jpg",
  "/assets/images/lotm/bg/c.jpg",
  "/assets/images/lotm/bg/d.jpg",
  "/assets/images/lotm/bg/web-bg.jpg",
  "/assets/images/lotm/bg/wp11646841-lord-of-mysteries-wallpapers.jpg"
];

export default function LotmLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden theme-lotm bg-[#020204] text-white">
      {/* Dynamic Background Slideshow */}
      <BackgroundSlideshow images={lotmSlides} imageOpacity={0.75} />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] pointer-events-none" />

      {/* Header */}
      <SiteHeader showBack={true} backLink="/" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 z-10">
        {/* Main Flex Layout */}
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10 w-full max-w-6xl min-h-screen">
          
          {/* Left Side: 3D Hover Tilt Card (somewhat big size) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="hover-3d relative cursor-pointer h-[60vh] max-h-[40vh] md:max-h-[60dvh] aspect-[736/1308]">
              {/* First child: The actual card content */}
              <div className="relative h-full w-full rounded-[16px] border border-amber-600/25 bg-zinc-950/20 shadow-[0_20px_45px_rgba(0,0,0,0.85),_0_0_20px_rgba(196,127,10,0.15)] overflow-hidden">
                <img
                  src="/assets/images/lotm/v1/ff.jpg"
                  alt="The Fool - Lord of the Mysteries"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              {/* 8 empty divs for grid hover zones */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </motion.div>

          {/* Right Side: Typography & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg gap-6"
          >
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="relative w-36 h-32 md:w-44 md:h-40 drop-shadow-[0_0_20px_rgba(196,127,10,0.3)] select-none">
                <Image
                  src="/assets/images/lotm/logo.png"
                  alt="Lord of the Mysteries Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 
                className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white select-text"
                style={{ filter: "drop-shadow(0 0 15px rgba(196,127,10,0.35))" }}
              >
                Lord of the <span className="text-[#f59e0b]">Mysteries</span>
              </h1>
            </div>

            {/* Quote (styled like Re:Zero) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="relative mt-2 max-w-md border-l-2 md:border-l-4 border-amber-600/30 pl-4 py-2"
            >
              <p className="font-serif text-2xl italic text-zinc-300 md:text-3xl leading-relaxed">
                &quot;Praise the Fool!&quot;
              </p>
              <p className="mt-2 text-sm text-[#f59e0b] font-bold tracking-widest uppercase font-mono">- LORD OF THE MYSTERIES</p>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-4"
            >
              <Link href="/lotm/select">
                <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_20px_rgba(196,127,10,0.25)] hover:shadow-[0_0_30px_rgba(196,127,10,0.45)] transition-all duration-200 cursor-pointer">
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 z-10 animate-bounce"
        >
          <span className="text-zinc-550 text-xs tracking-widest uppercase">Scroll Down</span>
        </motion.div>
      </section>

      {/* Thematic Footer */}
      <footer className="w-full py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-zinc-550 border-t border-white/5 bg-black/10 backdrop-blur-sm z-10">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-medium">
          ← Back to Novel Selection
        </Link>
        <p>© 2026 Novels Reader. Not affiliated with the official franchise.</p>
      </footer>
    </main>
  );
}
