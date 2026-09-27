"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#080d19]/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MY WORK</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          
          <p className="mt-3 text-slate-400 text-base sm:text-lg leading-relaxed">
            Building practical AI systems with machine learning, Generative AI, NLP, and modern web technologies.
          </p>
        </div>

        {/* 3-Card Desktop Grid / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
