"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 p-6">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12">

                {/* Hero Text */}
                <div className="flex flex-col items-center gap-4 text-center w-full">
                    <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
                    <Skeleton className="h-10 w-3/4 md:w-1/2 bg-white/10 rounded-lg" />
                    <Skeleton className="h-4 w-full max-w-md bg-white/5 rounded" />
                </div>

                {/* Crypto Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-[4/5] md:aspect-[3/4] bg-white/5 rounded-2xl p-6 flex flex-col items-center gap-6">
                            <Skeleton className="h-16 w-16 rounded-full bg-white/10" />
                            <Skeleton className="h-6 w-24 bg-white/10 rounded" />
                            <Skeleton className="h-4 w-12 bg-white/5 rounded" />
                            <Skeleton className="h-12 w-full bg-white/5 rounded-lg mt-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
