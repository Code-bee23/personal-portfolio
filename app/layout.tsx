import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gauri-portfolio.vercel.app"),
  title: "Gauri | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Gauri, an AI/ML and full-stack developer building intelligent applications with Python, machine learning, FastAPI, Next.js, and modern AI technologies.",
  keywords: [
    "Gauri",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "FastAPI",
    "Python",
    "Next.js",
    "React",
    "TypeScript",
    "LLM",
    "Deep Learning",
    "TensorFlow",
    "PyTorch"
  ],
  authors: [{ name: "Gauri" }],
  creator: "Gauri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Code-bee23",
    title: "Gauri | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent software that solves real-world problems with Python, Machine Learning, FastAPI, and Next.js.",
    siteName: "Gauri Portfolio",
    images: [
      {
        url: "/projects/symptom-checker.svg",
        width: 1200,
        height: 700,
        alt: "Gauri Portfolio - AI/ML Engineer & Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gauri | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent software that solves real-world problems with Python, Machine Learning, FastAPI, and Next.js.",
    creator: "@Gauri"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
