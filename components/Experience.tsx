"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Building, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Internships
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Hands-on work in AI workflows, deep learning pipelines, and machine learning projects.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 md:ml-8 space-y-10">
          {portfolioData.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:scale-125 transition-all shadow-sm"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/90 transition-all duration-200">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1 font-medium text-slate-200">
                        <Building className="w-4 h-4 text-cyan-400" />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Technologies used */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
                  <span className="text-[11px] font-mono uppercase text-slate-500 mr-1">
                    Tech:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#080d16] border border-slate-800 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
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
