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
  title: "Classroom of the Elite Reader",
  description: "A premium reader experience for Classroom of the Elite light novels.",
  openGraph: {
    title: "Classroom of the Elite Reader",
    description: "Read Classroom of the Elite light novels with a premium, immersive experience.",
    url: "https://classroom-of-the-elite-reader.vercel.app",
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
    title: "Classroom of the Elite Reader",
    description: "Read Classroom of the Elite light novels with a premium, immersive experience.",
    images: ["/assets/preview-hero.png"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { AuthProvider } from "@/context/AuthContext";

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
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
