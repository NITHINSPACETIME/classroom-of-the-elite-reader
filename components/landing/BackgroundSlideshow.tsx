"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, memo } from "react"

const backgroundImages = [
    "/assets/bg-slide-1.jpg",
    "/assets/bg-slide-2.jpg",
    "/assets/bg-slide-3.jpg",
    "/assets/bg-slide-4.jpg"
]

interface BackgroundSlideshowProps {
    images?: string[];
    interval?: number;
}

export function BackgroundSlideshow({ images = backgroundImages, interval = 6000 }: BackgroundSlideshowProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className="fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden pointer-events-none select-none">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 will-change-[opacity]"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="Hero Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-60"
                        priority
                        quality={60}
                    />
                </motion.div>
            </AnimatePresence>


            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/40 to-background opacity-90 z-10" />
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 z-10" />
        </div>
    )
}
