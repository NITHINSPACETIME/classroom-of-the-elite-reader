"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-red-900/50">
            {/* Background Gradient Skeleton */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />

            {/* Nav Skeleton */}
            <nav className="relative z-50 p-6 flex items-center justify-between">
                <Button variant="ghost" disabled className="text-gray-400 gap-2 pl-0 hover:bg-transparent">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Year 1
                </Button>
                <div className="flex gap-4">
                    <Skeleton className="h-9 w-9 rounded-full bg-white/10" />
                    <Skeleton className="h-9 w-9 rounded-full bg-white/10" />
                </div>
            </nav>

            <main className="relative z-10 container mx-auto px-4 lg:px-8 pb-20 pt-4">
                {/* Mobile Header Skeleton (lg:hidden) */}
                <div className="lg:hidden mb-6 space-y-3">
                    <Skeleton className="h-8 w-3/4 bg-white/10 rounded-lg" />
                    <Skeleton className="h-6 w-1/2 bg-white/5 rounded-lg" />
                    <div className="flex gap-2 pt-2">
                        <Skeleton className="h-6 w-20 rounded-full bg-red-950/30" />
                        <Skeleton className="h-6 w-24 rounded-full bg-red-950/30" />
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

                    {/* Left Column (Sticky) */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-8">
                        {/* Cover Image Skeleton */}
                        <div className="relative aspect-[2/3] w-full max-w-[300px] lg:max-w-none mx-auto lg:mx-0 rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                            <Skeleton className="h-full w-full bg-white/5" />
                        </div>

                        {/* Start Reading Button Skeleton */}
                        <Skeleton className="w-full h-14 rounded-md bg-red-900/20" />

                        {/* Info Grid Skeleton */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/5 rounded-lg p-3 border border-white/5 h-[62px] space-y-2">
                                <Skeleton className="h-3 w-16 bg-white/10" />
                                <Skeleton className="h-4 w-24 bg-white/5" />
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 border border-white/5 h-[62px] space-y-2">
                                <Skeleton className="h-3 w-16 bg-white/10" />
                                <Skeleton className="h-4 w-24 bg-white/5" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8">
                        {/* Desktop Header Skeleton (hidden lg:block) */}
                        <div className="hidden lg:block space-y-4 border-b border-white/10 pb-8">
                            <Skeleton className="h-12 w-3/4 bg-white/10 rounded-lg" />
                            <Skeleton className="h-8 w-1/2 bg-white/5 rounded-lg" />
                            <div className="flex gap-3 pt-2">
                                <Skeleton className="h-7 w-24 rounded-full bg-red-950/30" />
                                <Skeleton className="h-7 w-28 rounded-full bg-red-950/30" />
                                <Skeleton className="h-7 w-20 rounded-full bg-red-950/30" />
                            </div>
                        </div>

                        {/* Search & Sort Skeleton */}
                        <div>
                            <div className="mb-6 flex gap-4 h-11">
                                <Skeleton className="flex-1 h-full rounded-md bg-white/5 border border-white/10" />
                                <Skeleton className="w-32 h-full rounded-md bg-white/5 border border-white/10" />
                            </div>

                            {/* Chapter List Skeleton */}
                            <div className="grid gap-2">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="flex items-start justify-between p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 gap-3">
                                        <div className="space-y-2 w-2/3">
                                            <Skeleton className="h-4 w-1/6 bg-white/10 rounded" />
                                            <Skeleton className="h-4 w-3/4 bg-white/5 rounded" />
                                        </div>
                                        <Skeleton className="h-4 w-4 rounded-full bg-white/10 mt-1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
