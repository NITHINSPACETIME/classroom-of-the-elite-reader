import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Merriweather, Roboto, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Read Classroom of the Elite Light Novel Online | COTE Reader",
    template: "%s | COTE Reader"
  },
  description: "Read Classroom of the Elite (COTE) light novel series online. Enjoy a premium, ad-free, and immersive reading experience for all volumes and chapters of You-Zitsu / Youkoso Jitsuryoku.",
  keywords: ["Classroom of the Elite", "COTE", "light novel", "read online", "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e", "Ayanokoji Kiyotaka", "cote reader", "classroom of the elite light novel"],
  openGraph: {
    title: "Read Classroom of the Elite Light Novel Online | COTE Reader",
    description: "Read Classroom of the Elite (COTE) light novel series online. Enjoy a premium, ad-free, and immersive reading experience for all volumes and chapters.",
    url: "https://cote-reader.me",
    siteName: "COTE Reader",
    images: [
      {
        url: "/assets/preview-hero.png",
        width: 1200,
        height: 630,
        alt: "Classroom of the Elite Reader Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Classroom of the Elite Light Novel Online | COTE Reader",
    description: "Read Classroom of the Elite (COTE) light novel series online. Enjoy a premium, ad-free, and immersive reading experience for all volumes.",
    images: ["/assets/preview-hero.png"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://cote-reader.me'),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


import { AuthProvider } from "@/context/AuthContext";
import { GlobalContinueReading } from "@/components/GlobalContinueReading";
import { GuestbookPopup } from "@/components/GuestbookPopup";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "COTE Reader",
  alternateName: ["Classroom of the Elite Reader", "You-Zitsu Reader"],
  url: "https://cote-reader.me",
  description: "Read Classroom of the Elite (COTE) light novel series online. Enjoy a premium, ad-free, and immersive reading experience for all volumes and chapters.",
  author: {
    "@type": "Person",
    name: "Shōgo Kinugasa",
  },
  genre: ["Light Novel", "Psychological Thriller", "Drama"],
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} ${merriweather.variable} ${roboto.variable} ${lora.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        <AuthProvider>
          <GlobalContinueReading />
          <GuestbookPopup />
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="beforeInteractive"
          />
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
