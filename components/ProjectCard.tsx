"use client";

import React from "react";
import { ArrowRight, Eye, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#0d1424] to-[#0a0f1d] border border-slate-800/90 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden">
      
      <div>
        {/* Project Image Header with Zoom on Hover */}
        <div 
          onClick={() => onOpenModal(project)}
          className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#070b14] border-b border-slate-800/80 cursor-pointer"
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

          {/* Project Number Badge & Category Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500 text-slate-950 shadow-md">
              PROJECT {project.number}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 border border-slate-700 text-slate-300 backdrop-blur-md">
                {project.badge}
              </span>
            )}
          </div>

          {/* Click Hint Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          
          {/* Title & Category */}
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1">
              {project.category.slice(0, 3).join(" • ")}
            </div>
            <h3 
              onClick={() => onOpenModal(project)}
              className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Team Contribution Scope Callout */}
          {project.contributionNote && (
            <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-700/50 text-indigo-300 text-xs font-mono">
              <span className="font-semibold text-white">Role Scope: </span>
              {project.contributionNote}
            </div>
          )}

          {/* Project Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#070c17] border border-slate-800/80 space-y-2">
              <span className="font-mono text-[10px] uppercase text-cyan-400 font-semibold tracking-wider block">
                Project Highlights:
              </span>
              <ul className="space-y-1.5">
                {project.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-1.5 pt-1">
            <span className="font-mono text-[10px] uppercase text-slate-500 block">
              Technology Badges:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 text-[11px] font-mono border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
            id={`github-${project.id}`}
          >
            <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>GitHub ↗</span>
          </a>
        ) : (
          <span className="text-xs text-slate-600 font-mono">Code Private</span>
        )}

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shadow-sm transition-all hover:scale-[1.02]"
          id={`view-details-${project.id}`}
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
