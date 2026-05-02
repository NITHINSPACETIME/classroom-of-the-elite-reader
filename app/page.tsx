import { Hero } from "@/components/landing/Hero";
import { BackgroundSlideshow } from "@/components/landing/BackgroundSlideshow";
import { Github, Heart, BookOpen } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const dynamic = 'force-static';
export const revalidate = false;

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

          <a
            href="https://discord.gg/3zAsapzwmv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-[#5865F2]/20 hover:shadow-[0_0_20px_rgba(88,101,242,0.5)] border border-transparent hover:border-[#5865F2]/30 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
          >
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white/80 group-hover:text-[#5865F2] transition-colors"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          </a>

          <Link
            href="/guestbook"
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:border-amber-500/30 border border-transparent transition-all duration-300 hover:scale-110 group"
          >
            <BookOpen className="w-6 h-6 text-white/80 group-hover:text-amber-400 transition-all duration-300" />
          </Link>

          <Link
            href="/donate"
            className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:border-red-500/30 border border-transparent transition-all duration-300 hover:scale-110 group"
          >
            <Heart className="w-6 h-6 text-white/80 group-hover:text-red-500 group-hover:fill-red-500/20 transition-all duration-300" />
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1 justify-center">
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

        <div className="sr-only">
          <h2>Read Classroom of the Elite (COTE) Light Novel</h2>
          <p>
            Welcome to COTE Reader, the premier destination to read the Classroom of the Elite light novel series online for free.
            Follow the journey of Kiyotaka Ayanokoji and his classmates at the Tokyo Metropolitan Advanced Nurturing School.
            Explore all volumes and chapters of Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (You-Zitsu) with our immersive, ad-free reader.
            Whether you are looking for Year 1 or Year 2 translations, our platform offers the best reading experience for COTE fans.
          </p>
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
