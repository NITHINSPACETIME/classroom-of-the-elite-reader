"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-white/10 border-t-[#a855f7] animate-spin" />
                </div>
                <div className="space-y-3 w-64">
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <Skeleton className="h-4 w-3/4 mx-auto bg-white/5" />
                </div>
            </div>
        </div>
    )
}
