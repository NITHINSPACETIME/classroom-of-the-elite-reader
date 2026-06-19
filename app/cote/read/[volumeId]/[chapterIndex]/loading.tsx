"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-[#111] flex flex-col items-center py-20 px-4 md:px-8 max-w-4xl mx-auto">

            <div className="w-full flex flex-col items-center gap-6 mb-16 mt-10">
                <Skeleton className="h-4 w-32 rounded-full mb-2 bg-white/5" />
                <Skeleton className="h-10 w-3/4 md:w-1/2 rounded-lg bg-white/10" />
                <Skeleton className="h-px w-full max-w-xs mt-4 bg-white/5" />
            </div>


            <div className="w-full space-y-4 max-w-2xl">

                <div className="space-y-3">
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <Skeleton className="h-4 w-5/6 bg-white/5" />
                    <Skeleton className="h-4 w-full bg-white/5" />
                </div>


                <div className="space-y-3 pt-6">
                    <Skeleton className="h-4 w-11/12 bg-white/5" />
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <Skeleton className="h-4 w-4/5 bg-white/5" />
                </div>


                <div className="space-y-3 pt-6">
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <Skeleton className="h-4 w-3/4 bg-white/5" />
                    <Skeleton className="h-4 w-5/6 bg-white/5" />
                    <Skeleton className="h-4 w-full bg-white/5" />
                </div>
            </div>
        </div>
    )
}
