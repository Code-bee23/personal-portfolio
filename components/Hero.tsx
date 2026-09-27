"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-7 flex flex-col items-center">
          
          {/* Small Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              {personal.role}
            </span>
          </div>

          {/* Name & Main Headline */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 tracking-tight">
              Hi, I&apos;m <span className="text-white underline decoration-cyan-500 decoration-2 underline-offset-8">{personal.name}</span>
            </h2>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] pt-2">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                intelligent software
              </span>{" "}
              that solves real-world problems.
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto">
            {personal.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              id="hero-view-projects"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-sm sm:text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
              id="hero-contact-me"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Secondary Links */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 border-t border-slate-800/80 w-full max-w-lg">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              id="hero-github-link"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              id="hero-linkedin-link"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              id="hero-resume-link"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
