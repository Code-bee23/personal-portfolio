"use client";

import React from "react";
import { Code2, Sparkles, Cpu, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export const BuildingLearning: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Sparkle":
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case "Bot":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#070c16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with GitHub CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Continuous Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Building &amp; Learning
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Consistent focus on algorithms, machine learning research, and building scalable full-stack applications.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white text-sm font-medium transition-all hover:scale-[1.02] shadow-sm self-start md:self-auto"
            id="learning-github-profile"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Explore GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* 4 Learning Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.learningPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/90 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#080d16] border border-slate-800 text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">
                  Focus Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.focusAreas.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-800/60 text-slate-300 font-mono"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
