"use client";

import { Suspense } from "react";
import OrvReadPageClient from "./OrvReadPageClient";

export default function OrvReadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#020204] text-cyan-400 flex items-center justify-center font-mono">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-cyan-400"></div>
          <div>Loading Star Stream...</div>
        </div>
      </div>
    }>
      <OrvReadPageClient />
    </Suspense>
  );
}
