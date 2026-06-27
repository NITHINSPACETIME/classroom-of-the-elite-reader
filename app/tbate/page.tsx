"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const tbateSlides = [
  "/assets/images/tbate/wallpapers/bg_1.jpeg",
  "/assets/images/tbate/wallpapers/bg_2.jpg",
  "/assets/images/tbate/wallpapers/bg_3.jpg",
  "/assets/images/tbate/wallpapers/aldir_arthur.jpg",
  "/assets/images/tbate/wallpapers/yy.jpg",
  "/assets/images/tbate/wallpapers/tbate_wall.jpg"
];

export default function TbateLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden theme-tbate bg-[#070503] text-white">
      {/* Dynamic Background Slideshow */}
      <BackgroundSlideshow images={tbateSlides} />

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
          {/* Logo Image (replacing text) */}
          <div className="relative h-32 sm:h-44 md:h-56 w-full max-w-2xl mt-4 group">
            <Image
              src="/assets/images/tbate/tbate_logo.png"
              alt="The Beginning After The End"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.85)] drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>
          {/* SEO Header */}
          <h1 className="sr-only">The Beginning After The End</h1>

          {/* Character Artwork (Arthur x Tessia Cutout) - Clip Down */}
          <div className="relative h-48 sm:h-60 md:h-72 w-full max-w-lg mt-2 group">
            <Image
              src="/assets/images/tbate/arthur_tessia_cutout.png"
              alt="Arthur x Tessia"
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </div>

          {/* Legendary Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative mt-2 max-w-2xl bg-black/60 backdrop-blur-[4px] border border-amber-950/40 p-6 rounded-2xl shadow-2xl"
          >
            <p className="font-serif text-base italic text-amber-100/90 md:text-lg leading-relaxed drop-shadow-md">
              &quot;If you cannot even protect yourself, you cannot protect anyone else. In this new life, I will protect those I care about, no matter what.&quot;
            </p>
            <p className="mt-3 text-xs text-amber-400 font-bold tracking-widest uppercase font-mono drop-shadow-md">- ARTHUR LEYWIN</p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6"
          >
            <Link href="/tbate/select">
              <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-200 cursor-pointer border border-amber-400/30">
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
          <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll Down</span>
        </motion.div>
      </section>

      {/* Thematic Footer */}
      <footer className="w-full py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-zinc-500 border-t border-white/5 bg-black/40 backdrop-blur-sm z-10">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-medium">
          ← Back to Novel Selection
        </Link>
        <p>© 2026 Novels Reader. Not affiliated with the official franchise.</p>
      </footer>
    </main>
  );
}
