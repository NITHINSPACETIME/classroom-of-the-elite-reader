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
    imageOpacity?: number;
}

export function BackgroundSlideshow({ images = backgroundImages, interval = 6000, imageOpacity = 0.85 }: BackgroundSlideshowProps) {
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
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover"
                        style={{ opacity: imageOpacity }}
                        priority={currentImageIndex === 0}
                        loading={currentImageIndex === 0 ? "eager" : "lazy"}
                        quality={50}
                    />
                </motion.div>
            </AnimatePresence>


            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/45 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/30 to-background opacity-75 z-10" />
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 z-10" />
        </div>
    )
}
