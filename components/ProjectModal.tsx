"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Layers, AlertCircle, Cpu, Activity, Server } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1424] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6"
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
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-cyan-500 text-slate-950">
              PROJECT {project.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
              {project.category.join(" • ")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
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

        {/* Performance & Deployment Highlights Banner (if available) */}
        {(project.performance || project.deployment) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.performance && (
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50">
                <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider block mb-1 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Performance Metrics
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-white">
                  {project.performance.map((stat, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-800/60 text-cyan-300">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.deployment && (
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/50">
                <span className="text-[10px] font-mono uppercase text-indigo-400 tracking-wider block mb-1 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  Deployment Stack
                </span>
                <span className="text-xs font-mono font-medium text-slate-200">
                  {project.deployment}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-xs uppercase font-mono tracking-wider text-red-400 mb-2 font-semibold">
              The Problem
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-2 font-semibold">
              The Solution
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
              <span>System Architecture</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {project.architecture.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-mono font-medium">
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

        {/* Key Features (if provided) */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
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
        )}

        {/* Technology Badges */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase text-slate-400">
            Technology Badges
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

        {/* Medical Disclaimer if healthcare */}
        {project.disclaimer && (
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-2.5 text-amber-300 text-xs leading-relaxed">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
            <span>{project.disclaimer}</span>
          </div>
        )}

        {/* Modal Footer / Action Links */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
