"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Open mailto link prefilled
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070b14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg max-w-xl">
            I&apos;m open to AI/ML, software development, and full-stack opportunities. Let&apos;s connect to discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-500">Direct Email</span>
              <div className="flex items-center justify-between gap-3 bg-[#090d16] p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-200 truncate select-all">
                    {personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors flex-shrink-0"
                  id="copy-email-btn"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase text-slate-500">Profiles &amp; Repositories</span>
              
              <div className="space-y-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090d16] border border-slate-800 hover:border-cyan-800/60 hover:bg-slate-900 transition-all text-slate-300 hover:text-white group"
                  id="contact-github"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="font-semibold text-sm block text-white">GitHub</span>
                      <span className="text-xs text-slate-500 font-mono">Code repositories &amp; open source</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-cyan-400">Visit →</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#090d16] border border-slate-800 hover:border-blue-800/60 hover:bg-slate-900 transition-all text-slate-300 hover:text-white group"
                  id="contact-linkedin"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-400" />
                    <div>
                      <span className="font-semibold text-sm block text-white">LinkedIn</span>
                      <span className="text-xs text-slate-500 font-mono">Professional network &amp; updates</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-blue-400">Connect →</span>
                </a>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              <span className="text-xs sm:text-sm text-emerald-300 font-medium">
                Actively reviewing full-time &amp; internship opportunities.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to initiate an email conversation directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Ready to Send!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your default email client has been prompted with your message draft. You can also write directly to{" "}
                    <span className="text-cyan-300 font-mono">{personal.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-cyan-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex (Tech Lead @ AI Corp)"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Gauri, we liked your AI Symptom Checker project and would like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    id="submit-contact-form"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
