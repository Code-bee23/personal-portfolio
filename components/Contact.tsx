"use client";

import React from "react";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 relative bg-[#070b14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg leading-relaxed">
            I&apos;m open to AI/ML, software development, and full-stack opportunities. Let&apos;s connect to discuss how I can contribute to your team.
          </p>
        </div>

        {/* Focused Connection Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          {/* GitHub Card */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 group shadow-lg"
            id="contact-github-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b1220] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-4">
                <GithubIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                GitHub
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore source code, repositories &amp; implementations
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-cyan-400">
              <span>View Profile</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 group shadow-lg"
            id="contact-linkedin-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b1220] border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-4">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Professional background &amp; career updates
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-blue-400">
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Email Connection Card */}
          <a
            href={`mailto:${personal.email}`}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200 group shadow-lg"
            id="contact-email-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b1220] border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                Email
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Reach out directly for roles &amp; engineering opportunities
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-emerald-400">
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Availability Status Banner */}
        <div className="max-w-md mx-auto mt-10 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-center gap-3 text-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span className="text-xs sm:text-sm text-emerald-300 font-medium">
            Actively reviewing full-time &amp; internship opportunities.
          </span>
        </div>

      </div>
    </section>
  );
};
