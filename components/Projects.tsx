"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type FilterCategory = "All" | "AI/ML" | "Backend";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "AI/ML", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => {
        if (activeFilter === "AI/ML") {
          return p.category.some(c => 
            c.toLowerCase().includes("ai") || 
            c.toLowerCase().includes("machine learning") || 
            c.toLowerCase().includes("nlp") ||
            c.toLowerCase().includes("llm") ||
            c.toLowerCase().includes("regression")
          );
        }
        if (activeFilter === "Backend") {
          return p.category.some(c => 
            c.toLowerCase().includes("fastapi") || 
            c.toLowerCase().includes("backend") || 
            c.toLowerCase().includes("rest api") ||
            c.toLowerCase().includes("full-stack")
          );
        }
        return true;
      });

  return (
    <section id="projects" className="py-24 relative bg-[#080d19]/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
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

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
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
