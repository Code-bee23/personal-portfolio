import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickValue } from "@/components/QuickValue";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BuildingLearning } from "@/components/BuildingLearning";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <QuickValue />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <BuildingLearning />
      <ResumeCTA />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
