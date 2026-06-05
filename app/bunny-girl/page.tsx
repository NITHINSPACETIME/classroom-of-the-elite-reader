"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const bunnyGirlSlides = [
  "/assets/bunny-girl/bg/1027054.jpg",
  "/assets/bunny-girl/bg/1042594.png",
  "/assets/bunny-girl/bg/95009998.jpg",
  "/assets/bunny-girl/bg/994295.png",
  "/assets/bunny-girl/bg/hq720.jpg",
  "/assets/bunny-girl/bg/peakpx.jpg"
];

export default function BunnyGirlLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden bg-[#0a0714] text-white">
      {/* Dynamic Background Slideshow featuring actual Aobuta Covers */}
      <BackgroundSlideshow images={bunnyGirlSlides} imageOpacity={0.85} />

      {/* Header */}
      <SiteHeader showBack={true} backLink="/" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-10 flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-serif text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-center leading-tight drop-shadow-2xl"
          >
            <span 
              className="text-[#fefbf0] inline-block md:mr-4"
              style={{ textShadow: "0 0 25px rgba(147,197,253,0.55), 0 0 50px rgba(147,197,253,0.3)" }}
            >
              Rascal Does Not Dream Of
            </span>
            <br className="lg:hidden" />
            <span 
              className="text-[#e9d5ff] inline-block mt-2 lg:mt-0"
              style={{ textShadow: "0 0 25px rgba(168,85,247,0.75), 0 0 50px rgba(168,85,247,0.45)" }}
            >
              Bunny Girl Senpai
            </span>
          </motion.h1>

          {/* Sakuta's Legendary Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative mt-4 max-w-2xl"
          >
            <p className="font-serif text-lg italic text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              &quot;I want them to sandwich me. Specifically, I mean my face.&quot;
            </p>
            <p className="mt-2 text-sm text-purple-400 font-bold tracking-widest uppercase font-mono drop-shadow-md">- Sakuta Azusagawa</p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/bunny-girl/select">
              <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-200 cursor-pointer">
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 z-10 animate-bounce"
        >
          <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        </motion.div>
      </section>

      {/* Thematic Footer */}
      <footer className="w-full py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-zinc-500 border-t border-white/5 bg-black/10 backdrop-blur-sm z-10">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-medium">
          ← Back to Novel Selection
        </Link>
        <p>© 2026 Novels Reader. Not affiliated with the official Seishun Buta Yarou franchise.</p>
      </footer>
    </main>
  );
}
