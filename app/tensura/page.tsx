"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const tensuraSlides = [
  "/assets/images/tensura/wallpapers/rimuru_tempest.jpg",
  "/assets/images/tensura/wallpapers/tensei_shitara.jpg",
  "/assets/images/tensura/wallpapers/r1.jpg",
  "/assets/images/tensura/wallpapers/ss.jpg",
  "/assets/images/tensura/wallpapers/ssssa.jpg",
  "/assets/images/tensura/wallpapers/wallpaper_all.jpg"
];

export default function TensuraLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-x-hidden bg-[#05060f] text-white">
      {/* Background Slideshow featuring actual Tensura covers */}
      <BackgroundSlideshow images={tensuraSlides} imageOpacity={0.8} />

      {/* Header */}
      <SiteHeader showBack={true} backLink="/" />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto w-full z-10 relative">
          
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-xl z-10"
          >
            {/* Subtitle & Title replaced by s1.webp logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start"
            >
              {/* Hidden h1 for SEO */}
              <h1 className="sr-only">That Time I Got Reincarnated as a Slime</h1>
              <Image
                src="/assets/images/tensura/s1.webp"
                alt="That Time I Got Reincarnated as a Slime"
                width={864}
                height={417}
                priority
                className="w-[240px] sm:w-[360px] md:w-[420px] h-auto object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:scale-[1.03] transition-transform duration-300 select-none"
              />
            </motion.div>

            {/* Rimuru's Famous Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="relative mt-2 max-w-2xl bg-black/45 backdrop-blur-[3px] border border-cyan-950/20 p-5 rounded-xl shadow-xl"
            >
              <p className="font-serif text-base italic text-zinc-150 md:text-lg leading-relaxed drop-shadow-md">
                &quot;In this cruel world, what was justice without strength? Ideals without power are nonsense.&quot;
              </p>
              <p className="mt-2 text-xs text-cyan-400 font-bold tracking-widest uppercase font-mono drop-shadow-md">- Rimuru Tempest</p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-4"
            >
              <Link href="/tensura/select">
                <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-gradient-to-r from-cyan-600 to-sky-650 hover:from-cyan-500 hover:to-sky-505 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.55)] transition-all duration-200 cursor-pointer border border-cyan-400/25">
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Rimuru Character Clip */}
          <div className="relative md:relative mt-8 md:mt-0 opacity-100 z-10 w-[200px] sm:w-[280px] md:w-[380px] lg:w-[440px] aspect-[1/1.4] select-none pointer-events-none md:pointer-events-auto mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/images/tensura/rimuru_render.png"
                  alt="Rimuru Tempest"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_10px_50px_rgba(34,211,238,0.25)]"
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 380px, 440px"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 z-10 animate-bounce hidden md:block"
        >
          <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        </motion.div>
      </section>

      {/* Thematic Footer */}
      <footer className="w-full py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-zinc-500 border-t border-white/5 bg-black/20 backdrop-blur-sm z-10">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-medium">
          ← Return to Library
        </Link>
        <p>© 2026 Novels Reader. Not affiliated with the official franchise.</p>
      </footer>
    </main>
  );
}
