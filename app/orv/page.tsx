"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";

const backgroundImages = [
  "/assets/orv/8419281.png",
  "/assets/orv/8419302.png",
  "/assets/orv/8419309.jpg",
  "/assets/orv/9397294.jpg"
];

export default function OrvLanding() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden theme-orv bg-[#020204] text-white">
      {/* Dynamic Background Slideshow matching COTE and Re:Zero */}
      <BackgroundSlideshow images={backgroundImages} />

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
          {/* Logo emblem */}
          <div className="relative h-48 w-full max-w-md md:h-64 mt-4 select-none">
            <Image
              src="/assets/orv/orv-logo.webp"
              alt="Omniscient Reader's Viewpoint Emblem"
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-contain drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]"
              priority
            />
          </div>

          {/* Stylized ORV text title matching Image 2 */}
          <div className="flex flex-col items-center select-none mt-4 leading-none font-cinzel">
            <h1 className="text-2xl md:text-3xl tracking-[0.25em] text-zinc-300 uppercase">
              Omniscient
            </h1>
            <h2 className="text-5xl md:text-7.5xl tracking-[0.05em] font-bold font-cinzel-deco text-white my-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] uppercase">
              Reader&apos;s
            </h2>
            <h3 className="text-2.5xl md:text-3.5xl tracking-[0.2em] text-zinc-400 uppercase">
              Viewpoint
            </h3>
          </div>

          {/* Legendary Quote - styled clean and open like Re:Zero and COTE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative mt-4 max-w-2xl"
          >
            <p className="font-serif text-xl italic text-zinc-300 md:text-2xl leading-relaxed">
              &quot;It doesn’t matter what gender, race, or world you originated from. It doesn’t matter if you are strong or weak, famous or not famous. Anything is okay. What I am looking for is passion. I hope you have the passion to see the end of this damn story with me.&quot;
            </p>
            <p className="mt-3 text-sm text-cyan-400 font-bold tracking-widest uppercase font-mono">- KIM DOKJA</p>
          </motion.div>

          {/* Actions - capsule button matching COTE and Re:Zero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/orv/select">
              <Button size="lg" className="group text-lg px-10 py-6 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black border border-cyan-300/40 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] font-bold transition-all duration-200">
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
          <span className="text-zinc-550 text-xs tracking-widest uppercase font-mono">Scroll Down</span>
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
