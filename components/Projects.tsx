"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type FilterCategory = "All" | "AI/ML" | "LLM" | "Full-Stack" | "Backend";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: FilterCategory[] = ["All", "AI/ML", "LLM", "Full-Stack", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category.includes(activeFilter as any));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              A selection of AI and full-stack applications I&apos;ve built with production pipelines and clean architectures.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
