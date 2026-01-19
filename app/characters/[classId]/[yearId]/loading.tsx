"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 pb-20 md:p-8 md:pb-24 pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header Skeleton */}
                <div className="flex flex-col items-center gap-4">
                    <Skeleton className="h-12 w-48 bg-white/10 rounded-lg" />
                    <Skeleton className="h-4 w-96 max-w-full bg-white/5 rounded" />
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-80 rounded-xl bg-white/5 p-4 flex flex-col gap-4 relative overflow-hidden">

                            <div className="absolute inset-0 bg-white/5" />

                            {/* Text Content */}
                            <div className="mt-auto relative z-10 space-y-2">
                                <Skeleton className="h-6 w-3/4 bg-white/10 rounded" />
                                <Skeleton className="h-4 w-1/2 bg-white/5 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
