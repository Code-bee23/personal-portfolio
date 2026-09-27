"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Brain, 
  Sparkles, 
  Server, 
  Layout, 
  Wrench,
  Check
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Terminal":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-sky-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Brain className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = ["All", ...portfolioData.skillCategories.map(c => c.title)];

  const filteredCategories = selectedCategory === "All"
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#070b13] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Cleanly categorised toolsets focused on machine learning models, modern web frameworks, and production tools.
            </p>
          </div>

          {/* Filter Pills for Skills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/70">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">
                      {category.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {category.skills.length} verified technologies
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0b1220] border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-800/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production Ready</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Tested
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
