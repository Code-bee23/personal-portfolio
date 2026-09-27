"use client";

import React, { useState, useEffect } from "react";
import { FileText, Download, Eye, ExternalLink, X, Printer, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const ResumeCTA: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowViewer(false);
    };
    if (showViewer) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showViewer]);

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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                id="view-resume-btn"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <a
                href={personal.resumeUrl}
                download="Gauri_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 text-sm font-medium transition-all hover:scale-[1.02]"
                id="download-resume-btn"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Full Resume In-Browser Modal Viewer */}
      {showViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0b101d] border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[90vh] overflow-hidden">
            
            {/* Header Control Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#080d17] border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {personal.name} — Resume
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {personal.role}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setViewMode("document")}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      viewMode === "document"
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Formatted Document
                  </button>
                  <button
                    onClick={() => setViewMode("pdf")}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      viewMode === "pdf"
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Embedded PDF
                  </button>
                </div>

                <a
                  href={personal.resumeUrl}
                  download="Gauri_Resume.pdf"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download</span>
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>New Tab</span>
                </a>

                <button
                  onClick={() => setShowViewer(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#070b14]">
              {viewMode === "pdf" ? (
                <div className="w-full h-full min-h-[600px] rounded-xl overflow-hidden border border-slate-800 bg-[#090d16]">
                  <iframe
                    src={`${personal.resumeUrl}#toolbar=1`}
                    className="w-full h-full min-h-[600px] border-0"
                    title="Gauri Resume PDF"
                  />
                </div>
              ) : (
                /* Full Formatted Document View matching recruiter standard */
                <div className="max-w-3xl mx-auto bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-10 text-slate-200 shadow-xl space-y-8 font-sans">
                  
                  {/* Document Header */}
                  <div className="border-b border-slate-800 pb-6 text-center space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                      {personal.name}
                    </h1>
                    <p className="text-cyan-400 font-mono text-sm font-semibold">
                      {personal.role}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                      <span>Email: <strong className="text-slate-200">{personal.email}</strong></span>
                      <span>•</span>
                      <span>GitHub: <a href={personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{personal.github}</a></span>
                      <span>•</span>
                      <span>LinkedIn: <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{personal.linkedin}</a></span>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="space-y-2">
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <span>01</span>
                      <span className="h-px flex-1 bg-slate-800"></span>
                      <span>Professional Summary</span>
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {personal.bio}
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <span>02</span>
                      <span className="h-px flex-1 bg-slate-800"></span>
                      <span>Technical Skills</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {portfolioData.skillCategories.map((cat, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80">
                          <span className="font-semibold text-white block mb-1 text-xs">{cat.title}:</span>
                          <span className="text-slate-400 font-mono leading-relaxed">{cat.skills.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <span>03</span>
                      <span className="h-px flex-1 bg-slate-800"></span>
                      <span>Work Experience &amp; Internships</span>
                    </h2>
                    <div className="space-y-4">
                      {portfolioData.experiences.map((exp) => (
                        <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="font-bold text-white text-sm">
                              {exp.role} — <span className="text-cyan-300 font-normal">{exp.company}</span>
                            </h3>
                            <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.technologies.map((t, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Engineering Projects */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <span>04</span>
                      <span className="h-px flex-1 bg-slate-800"></span>
                      <span>Key AI/ML &amp; Software Projects</span>
                    </h2>
                    <div className="space-y-4">
                      {portfolioData.projects.map((proj) => (
                        <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="font-bold text-white text-sm">
                              {proj.title}
                            </h3>
                            <span className="text-[11px] font-mono text-cyan-400">
                              {proj.category.slice(0, 3).join(" • ")}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {proj.technologies.map((tech, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Bottom Modal Actions */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#080d17] border-t border-slate-800">
              <span className="text-xs text-slate-500 font-mono">
                Verified Candidate Profile
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.resumeUrl}
                  download="Gauri_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowViewer(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
