"use client";

import React, { useState } from "react";
import { FileText, Download, Eye, Sparkles, ExternalLink, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const ResumeCTA: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);
  const { personal } = portfolioData;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1527] to-slate-900 border border-slate-700/80 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Curriculum Vitae</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Want to know more about my experience?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take a look at my resume for a detailed overview of my skills, experience, and projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowViewer(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                id="view-resume-btn"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personal.resumeUrl}
                download="Gauri_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 text-sm font-medium transition-all hover:scale-[1.02]"
                id="download-resume-btn"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive In-Browser Resume Quick-Summary Modal */}
      {showViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0d1322] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowViewer(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-2xl font-bold text-white">{personal.name}</h3>
              <p className="text-cyan-400 font-mono text-xs">{personal.role}</p>
              <p className="text-slate-400 text-xs mt-1">{personal.email} • {personal.location}</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-white uppercase text-xs font-mono text-cyan-300 mb-1">
                  Summary
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {personal.bio}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white uppercase text-xs font-mono text-cyan-300 mb-2">
                  Key Experience
                </h4>
                <div className="space-y-2">
                  {portfolioData.experiences.map((e) => (
                    <div key={e.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-white">{e.role} — {e.company}</span>
                        <span className="font-mono text-slate-400">{e.period}</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1">{e.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <a
                href={personal.resumeUrl}
                download="Gauri_Resume.pdf"
                className="px-4 py-2 bg-cyan-500 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF File</span>
              </a>
              <button
                onClick={() => setShowViewer(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
