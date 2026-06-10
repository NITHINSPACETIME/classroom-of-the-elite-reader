"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const mushokuTenseiSlides = [
  "/assets/images/mushoku-tensei/backgrounds/bg1.jpeg",
  "/assets/images/mushoku-tensei/backgrounds/bg2.jpeg",
  "/assets/images/mushoku-tensei/backgrounds/bg3.jpg",
  "/assets/images/mushoku-tensei/backgrounds/bg4.jpg"
];

export default function MushokuTenseiLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden bg-[#050605] text-white">
      {/* Background Slideshow */}
      <BackgroundSlideshow images={mushokuTenseiSlides} imageOpacity={0.7} />

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
          {/* Logo / Character Artwork */}
          <div className="relative h-48 w-full max-w-xl md:h-64 mt-6">
            <Image
              src="/assets/mushoku_logo.png"
              alt="Mushoku Tensei: Jobless Reincarnation"
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-contain drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              priority
            />
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-serif text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-center leading-tight drop-shadow-2xl"
          >
            <span 
              className="text-[#f5f9f6] inline-block md:mr-4"
              style={{ textShadow: "0 0 25px rgba(16,185,129,0.35), 0 0 50px rgba(16,185,129,0.2)" }}
            >
              Mushoku Tensei:
            </span>
            <br />
            <span 
              className="text-[#a7f3d0] inline-block mt-2"
              style={{ textShadow: "0 0 25px rgba(52,211,153,0.55), 0 0 50px rgba(52,211,153,0.3)" }}
            >
              Jobless Reincarnation
            </span>
          </motion.h1>

          {/* Rudeus Greyrat's Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative mt-4 max-w-2xl"
          >
            <p className="font-serif text-lg italic text-zinc-300 md:text-xl leading-relaxed">
              &ldquo;One who obtains the wings of freedom loses both legs in exchange.&rdquo;
            </p>
            <p className="mt-2 text-sm text-emerald-400 font-bold tracking-widest uppercase">- Rudeus Greyrat</p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/mushoku-tensei/select">
              <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-200 cursor-pointer">
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
        <p>© 2026 Novels Reader. Not affiliated with the official Mushoku Tensei franchise.</p>
      </footer>
    </main>
  );
}
