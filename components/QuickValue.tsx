"use client";

import React from "react";
import { Cpu, Layers, Code, Server } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const QuickValue: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-emerald-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-8 relative z-10 border-y border-slate-800/80 bg-[#0c121e]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.quickValues.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 transition-colors">
                  {getIcon(card.icon)}
                </div>
                <h3 className="font-semibold text-white text-base tracking-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                {card.items.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
