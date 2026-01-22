"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

interface HorizontalCarouselProps<T> {
    items: T[]
    renderItem: (item: T, isActive: boolean, index: number) => React.ReactNode
    keyExtractor: (item: T) => string
    ListFooterComponent?: React.ReactNode
    scrollContainerClassName?: string
    className?: string
}

export interface CarouselHandle {
    scrollTo: (index: number) => void;
}

export const HorizontalCarousel = React.forwardRef<CarouselHandle, HorizontalCarouselProps<any>>(
    ({ items, renderItem, keyExtractor, ListFooterComponent, className, scrollContainerClassName }, ref) => {

        const totalItems = items.length + (ListFooterComponent ? 1 : 0)

        const containerRef = useRef<HTMLDivElement>(null)
        const [activeIndex, setActiveIndex] = useState(0)
        const isProgrammaticScroll = useRef(false)
        const programmaticScrollTimeout = useRef<NodeJS.Timeout | null>(null)

        const activeIndexRef = useRef(0)
        useEffect(() => { activeIndexRef.current = activeIndex }, [activeIndex])

        const scrollTo = React.useCallback((index: number) => {
            const container = containerRef.current
            if (!container) return

            if (index < 0) index = 0
            if (index >= totalItems) index = totalItems - 1

            setActiveIndex(index)

            isProgrammaticScroll.current = true
            if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current)
            programmaticScrollTimeout.current = setTimeout(() => {
                isProgrammaticScroll.current = false
            }, 600)

            const child = container.children[index] as HTMLElement
            if (!child) return

            child.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }, [totalItems])

        React.useImperativeHandle(ref, () => ({
            scrollTo
        }));

        useEffect(() => {
            const container = containerRef.current
            if (!container) return

            const handleScroll = () => {
                if (isProgrammaticScroll.current) return

                const containerRect = container.getBoundingClientRect()
                const containerCenter = containerRect.left + containerRect.width / 2

                let closestIndex = 0
                let minDistance = Infinity

                Array.from(container.children).forEach((child, index) => {
                    const rect = child.getBoundingClientRect()
                    const itemCenter = rect.left + rect.width / 2
                    const dist = Math.abs(containerCenter - itemCenter)

                    if (dist < minDistance) {
                        minDistance = dist
                        closestIndex = index
                    }
                })

                if (closestIndex !== activeIndexRef.current) {
                    setActiveIndex(closestIndex)
                }
            }


            let ticking = false
            const onScroll = () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScroll()
                        ticking = false
                    })
                    ticking = true
                }
            }

            container.addEventListener('scroll', onScroll, { passive: true })

            handleScroll()

            return () => {
                container.removeEventListener('scroll', onScroll)
            }
        }, [])

        // Keyboard Nav
        useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "ArrowLeft") {
                    scrollTo(activeIndex - 1)
                } else if (e.key === "ArrowRight") {
                    scrollTo(activeIndex + 1)
                }
            }

            window.addEventListener("keydown", handleKeyDown)
            return () => window.removeEventListener("keydown", handleKeyDown)
        }, [activeIndex, scrollTo])

        return (
            <div className={`relative group/carousel w-full ${className}`}>
                {/* Arrows */}
                {activeIndex > 0 && (
                    <div className="absolute top-1/2 left-4  -translate-y-1/2 z-20 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                        <Button
                            variant="secondary"
                            className="rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white/20 h-12 w-12 p-0 flex items-center justify-center"
                            onClick={() => scrollTo(activeIndex - 1)}
                            disabled={activeIndex === 0}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                    </div>
                )}

                {activeIndex < totalItems - 1 && (
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                        <Button
                            variant="secondary"
                            className="rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white/20 h-12 w-12 p-0 flex items-center justify-center"
                            onClick={() => scrollTo(activeIndex + 1)}
                            disabled={activeIndex === totalItems - 1}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                )}

                {/* Carousel */}
                <div
                    ref={containerRef}
                    className={`flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory py-4 md:py-10 no-scrollbar items-center w-full ${scrollContainerClassName || 'px-[15vw] md:px-[30vw]'}`}
                >
                    {items.map((item, index) => {
                        const isActive = index === activeIndex
                        return (
                            <div
                                key={keyExtractor(item)}
                                className="snap-center flex-shrink-0 transition-all duration-300 ease-out will-change-transform"
                                onClick={() => scrollTo(index)}
                            >
                                {renderItem(item, isActive, index)}
                            </div>
                        )
                    })}

                    {ListFooterComponent && (
                        <div
                            className="snap-center flex-shrink-0 transition-all duration-300 ease-out flex items-center justify-center will-change-transform"
                            onClick={() => scrollTo(items.length)}
                        >

                            {ListFooterComponent}
                        </div>
                    )}
                </div>
            </div>
        )
    })
HorizontalCarousel.displayName = "HorizontalCarousel"
