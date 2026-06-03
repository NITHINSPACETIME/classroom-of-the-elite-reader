import { Hero } from "@/components/landing/Hero";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { Github, Heart, BookOpen } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const dynamic = 'force-static';
export const revalidate = false;

export default function CoteLanding() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <SiteHeader showBack={true} backLink="/" />
      <BackgroundSlideshow />
      <Hero />

      <footer className="w-full py-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground/40 border-t border-white/5 bg-black/10 backdrop-blur-sm">
        <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-medium">
          ← Back to Novel Selection
        </Link>
        <p>© 2026 COTE Reader. Not affiliated with the official Classroom of the Elite franchise.</p>
      </footer>
    </main >
  );
}
