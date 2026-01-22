"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const shouldReduceMotion = useReducedMotion()

    const fadeIn = shouldReduceMotion
        ? { initial: {}, animate: {}, transition: {} }
        : {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: "easeOut" as const }
        }

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center z-10">


            <motion.div
                {...fadeIn}
                className="z-10 flex flex-col items-center gap-6 max-w-4xl"
            >
                <div className="relative h-40 w-full max-w-xl md:h-52">
                    <Image
                        src="/assets/logo.png"
                        alt="Classroom of the Elite"
                        fill
                        sizes="(max-width: 768px) 100vw, 576px"
                        className="object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                        priority
                    />
                </div>

                <motion.h1
                    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                    transition={shouldReduceMotion ? {} : { delay: 0.15, duration: 0.5 }}
                    className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-[#d4d4d8] drop-shadow-2xl"
                >
                    Classroom of the <span className="text-[#ef4444]">Elite</span>
                </motion.h1>

                <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1 }}
                    transition={shouldReduceMotion ? {} : { delay: 0.25, duration: 0.5 }}
                    className="relative mt-4 max-w-2xl"
                >
                    <p className="font-serif text-xl italic text-muted-foreground md:text-2xl">
                        "All people are nothing but tools. It doesn't matter how it's done. It doesn't matter what needs to be sacrificed. In this world, winning is everything."
                    </p>
                    <p className="mt-2 text-sm text-primary/80 font-bold tracking-widest uppercase">- Ayanokouji Kiyotaka</p>
                </motion.div>

                <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? {} : { delay: 0.35, duration: 0.5 }}
                    className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                    <Link href="/select">
                        <Button size="lg" className="group text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-200">
                            Start Reading
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/characters">
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-white/20 bg-black/30 hover:bg-white/10 hover:border-white/40 text-white backdrop-blur-sm transition-all duration-200">
                            Characters
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>


            <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={shouldReduceMotion ? {} : { opacity: 1 }}
                transition={shouldReduceMotion ? {} : { delay: 0.5, duration: 0.5 }}
                className="absolute bottom-10 z-10 animate-bounce"
            >
                <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll Down</span>
            </motion.div>
        </section>
    )
}
