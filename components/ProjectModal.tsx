"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Cpu, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap gap-1.5">
            {project.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/80 border border-cyan-800/60 text-cyan-300"
              >
                {cat}
              </span>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-300 font-medium">
            {project.highlight}
          </p>
        </div>

        {/* Project Image Preview */}
        {project.image && (
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-800 bg-[#080d17]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-xs uppercase font-mono tracking-wider text-red-400 mb-2 font-semibold">
              The Problem Solved
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-2 font-semibold">
              The Engineering Solution
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Flow */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              <Layers className="w-4 h-4" />
              <span>Application Pipeline &amp; Architecture</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {project.architecture.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono">
                    {step}
                  </span>
                  {idx < project.architecture.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase text-slate-400">
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer / Action Links */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white text-sm transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
