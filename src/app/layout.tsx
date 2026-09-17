import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CosmicBackground } from "@/components/CosmicBackground";
import { WebGLFallback } from "@/components/WebGLFallback";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { portfolioData } from "@/data/portfolioData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biswaranjan Muduli — CSE Student & Developer",
  description:
    "Portfolio of Biswaranjan Muduli, a Computer Science Engineering student and developer building digital experiences, distributed platforms, and exploring technology.",
  keywords: [
    "Biswaranjan Muduli",
    "Computer Science Engineering",
    "Full Stack Developer",
    "Next.js",
    "Three.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Biswaranjan Muduli", url: "https://github.com/biswaranjanmuduli" }],
  creator: "Biswaranjan Muduli",
  metadataBase: new URL("https://biswaranjanmuduli.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://biswaranjanmuduli.dev",
    title: "Biswaranjan Muduli — CSE Student & Developer",
    description:
      "Digital Universe Portfolio of Biswaranjan Muduli, featuring interactive 3D environments, full-stack systems, and engineering telemetry.",
    siteName: "Biswaranjan Muduli Portfolio",
    images: [
      {
        url: "/projects/project-1.webp",
        width: 1200,
        height: 630,
        alt: "Biswaranjan Muduli — Digital Universe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biswaranjan Muduli — CSE Student & Developer",
    description:
      "Digital Universe Portfolio of Biswaranjan Muduli, featuring interactive 3D environments, full-stack systems, and engineering telemetry.",
    creator: "@biswaranjan_dev",
    images: ["/projects/project-1.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#03040A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#03040A] text-[#F5F7FF] min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
        <LoadingScreen />
        <CustomCursor />
        <CosmicBackground />
        <WebGLFallback />

        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
