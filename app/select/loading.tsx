"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center py-20 px-4 md:px-8">
            <div className="w-full flex flex-col items-center gap-8 mb-16 mt-10">
                <Skeleton className="h-8 w-48 rounded-lg bg-white/10" />
                <div className="flex gap-4">
                    <Skeleton className="h-10 w-32 rounded-full bg-white/5" />
                    <Skeleton className="h-10 w-32 rounded-full bg-white/5" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 w-full max-w-7xl">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="aspect-[2/3] rounded-xl overflow-hidden relative">
                        <Skeleton className="h-full w-full bg-white/5" />
                    </div>
                ))}
            </div>
        </div>
    )
}
