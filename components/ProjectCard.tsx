"use client";

import React from "react";
import { ExternalLink, ArrowRight, Layers, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0b111e] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-cyan-950/20">
      
      <div>
        {/* Project Image Header */}
        <div 
          onClick={() => onOpenModal(project)}
          className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#070b14] border-b border-slate-800/80 cursor-pointer"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
              Architecture Preview
            </div>
          )}

          {/* Category Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {project.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#090d16]/90 border border-slate-700 text-cyan-300 backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Quick Click Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold shadow-md flex items-center gap-1.5">
              <span>View System Specs &amp; Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 
              onClick={() => onOpenModal(project)}
              className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            
            <p className="text-xs text-cyan-400 font-mono mt-1 font-medium">
              {project.highlight}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Problem Solved Compact Box */}
          <div className="p-3 rounded-xl bg-[#070c17] border border-slate-800/80 text-xs text-slate-400">
            <span className="font-mono text-[10px] uppercase text-slate-500 block mb-0.5">Problem Focus:</span>
            <span className="line-clamp-2 text-slate-300">{project.problem}</span>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-0.5 rounded bg-slate-800/40 text-slate-500 text-[11px] font-mono">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn transition-colors"
        >
          <span>Architecture &amp; Specs</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="View GitHub Repository"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
              title="View Live Demo"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
