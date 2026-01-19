"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-md flex flex-col items-center gap-8">
                <Skeleton className="h-16 w-3/4 bg-white/10 rounded-lg" />

                <div className="w-[65vw] max-w-[280px] aspect-[9/16] rounded-sm relative overflow-hidden">
                    <Skeleton className="h-full w-full bg-white/5" />
                </div>

                <div className="flex gap-2">
                    <Skeleton className="h-1 w-8 bg-white/20" />
                    <Skeleton className="h-1 w-8 bg-white/20" />
                    <Skeleton className="h-1 w-8 bg-white/20" />
                </div>
            </div>
        </div>
    )
}
