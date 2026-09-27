"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Sparkles } from "lucide-react";

export const InteractiveVisual: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import torch
import torch.nn as nn
from fastapi import FastAPI, HTTPException
from transformers import AutoModel, AutoTokenizer

app = FastAPI(title="AI-Inference-Engine", version="1.0.0")

class MultiModalPipeline:
    def __init__(self, model_name: str = "neural-engine"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model = AutoModel.from_pretrained(model_name).to(self.device)
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)

    async def predict(self, input_data: dict) -> dict:
        tokens = self.tokenizer(input_data["prompt"], return_tensors="pt")
        with torch.no_grad():
            embeddings = self.model(**tokens.to(self.device))
        return {
            "status": "success",
            "inference_time_ms": 14.8,
            "output": embeddings.last_hidden_state.shape
        }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl border border-slate-800 bg-[#0c121e]/90 backdrop-blur-xl shadow-2xl overflow-hidden group">
      {/* Glow background accent */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080d17] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>ai_service.py</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Status indicator */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Engine Active</span>
          </div>

          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-xs flex items-center gap-1 transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Window */}
      <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto min-h-[290px] max-h-[330px] bg-[#0c121e]">
        <pre className="text-slate-300 leading-relaxed whitespace-pre font-code">
          <code>{codeSnippet}</code>
        </pre>
      </div>

      {/* Bottom Technical Metric Strip */}
      <div className="grid grid-cols-3 border-t border-slate-800/80 bg-[#080d17] p-3 text-center text-xs">
        <div className="border-r border-slate-800/60">
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Backend Stack</span>
          <span className="text-slate-200 font-medium">FastAPI + Python</span>
        </div>
        <div className="border-r border-slate-800/60">
          <span className="text-slate-500 block text-[10px] uppercase font-mono">ML &amp; AI Stack</span>
          <span className="text-cyan-400 font-medium">PyTorch / Scikit</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Frontend</span>
          <span className="text-indigo-400 font-medium">Next.js + TS</span>
        </div>
      </div>
    </div>
  );
};
