"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 pb-20 md:p-8 md:pb-24 pt-24 md:pt-32 max-w-7xl mx-auto">
            <div className="space-y-12">
                {/* Section Header */}
                <div className="space-y-4">
                    <Skeleton className="h-8 w-48 bg-white/10 rounded-lg" />
                    <Skeleton className="h-px w-full bg-white/5" />
                </div>

                {/* Volumes Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-[2/3] rounded-sm overflow-hidden relative">
                                <Skeleton className="h-full w-full bg-white/5" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-3/4 bg-white/5 mx-auto" />
                                <Skeleton className="h-3 w-1/2 bg-white/5 mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
