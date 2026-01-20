import { Hero } from "@/components/landing/Hero";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { Github, Heart } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate (until next build)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <SiteHeader showBack={false} />
      <BackgroundSlideshow />
      <Hero />

      <footer className="w-full py-8 flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground border-t border-border/40 bg-black/20 backdrop-blur-sm">
        <div className="flex gap-4">
          <a
            href="https://github.com/NITHINSPACETIME/classroom-of-the-elite-reader"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-black hover:shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-white/80 group-hover:text-white" />
          </a>

          <Link
            href="/donate"
            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:border-red-500/30 border border-transparent transition-all duration-300 hover:scale-110 group"
          >
            <Heart className="w-6 h-6 text-white/80 group-hover:text-red-500 group-hover:fill-red-500/20 transition-all duration-300" />
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1">
            © 2026 COTE Reader. Made by{" "}
            <a
              href="https://github.com/NITHINSPACETIME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 hover:border-primary"
            >
              NITHINSPACETIME
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60">Not affiliated with the official Classroom of the Elite franchise.</p>
        </div>

        <div className="max-w-3xl lg:max-w-4xl w-full mt-8 pt-8 border-t border-white/5 flex flex-col gap-3 px-6 text-[11px] text-muted-foreground/30 text-center leading-relaxed font-light">
          <p>
            <span className="font-medium text-muted-foreground/50">Legal Disclaimer:</span> This project is a fan-made archive created for educational purposes only.
            We do not claim ownership of any content derived from <span className="italic">Classroom of the Elite</span>.
            All intellectual property rights belong to their respective owners: Shōgo Kinugasa, Tomoseshunsaku, Media Factory, and Kadokawa Corporation.
          </p>
          <p>
            We strictly adhere to DMCA compliance. If you are a copyright holder and believe your content is being infringed, please contact us (via GitHub Issues) for immediate removal.
            We strongly encourage readers to support the series by purchasing the official light novels and merchandise.
          </p>
        </div>
      </footer>
    </main >
  );
}
