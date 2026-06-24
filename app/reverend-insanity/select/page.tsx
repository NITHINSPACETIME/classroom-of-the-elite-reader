import { Suspense } from "react";
import { reverendInsanityVolumes } from "@/data/reverend-insanity";
import ReverendInsanitySelectClient from "./ReverendInsanitySelectClient";

export const dynamic = 'force-static';

export default function ReverendInsanitySelectPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#020204] text-zinc-400 flex items-center justify-center font-mono theme-reverend-insanity">
                <span className="animate-pulse text-red-500">Loading Archives...</span>
            </div>
        }>
            <ReverendInsanitySelectClient volumes={reverendInsanityVolumes} />
        </Suspense>
    );
}
