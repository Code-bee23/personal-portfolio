"use client";

import React from "react";
import { CheckCircle2, Sparkles, Code2, Database, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-400 font-mono text-xs mb-1 uppercase tracking-wider">
                  Development Style
                </div>
                <div className="text-slate-200 font-medium text-sm">
                  Production-minded, modular, and reproducible AI architectures.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-blue-400 font-mono text-xs mb-1 uppercase tracking-wider">
                  Core Focus
                </div>
                <div className="text-slate-200 font-medium text-sm">
                  Building full-stack products with robust ML/LLM pipelines.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What I Enjoy Building */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c121e] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white text-lg">
                  What I enjoy building
                </h3>
              </div>

              <ul className="space-y-3">
                {personal.enjoyBuilding.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
