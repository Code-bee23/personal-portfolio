"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Activity, Copy, Check } from "lucide-react";

export const InteractiveVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"api" | "model" | "pipeline">("model");
  const [copied, setCopied] = useState(false);

  const snippets = {
    model: `// Random Forest & Vision ML Pipeline
import { RandomForestClassifier } from "scikit-learn"
import { FastAPI, HTTPException } from "fastapi"

app = FastAPI(title="AI-Service", version="1.0.0")

@app.post("/api/v1/predict-condition")
async def predict_condition(symptoms: SymptomPayload):
    # Vectorize symptom tokens
    feature_vector = preprocess(symptoms.selected_ids)
    prediction = rf_classifier.predict_proba(feature_vector)
    
    return {
        "status": "success",
        "predicted_class": prediction.top_label,
        "confidence": 0.942,
        "precautions": fetch_precautions(prediction.top_label)
    }`,
    api: `# High-Performance Async REST Endpoint
curl -X POST "https://api.domain.dev/v1/ai-pipeline" \\
  -H "Content-Type: application/json" \\
  -d '{
    "task": "ocr_extraction_and_classification",
    "document_type": "engineering_schematic.pdf",
    "engine": "local_llava_groq"
  }'

# Response: 200 OK (Execution time: 38ms)
{
  "extracted_items_count": 14,
  "mto_format": "standard_excel_v2",
  "verification": "schema_validated"
}`,
    pipeline: `[Input: Schematics / Symptoms]
         │
         ▼
 ┌───────────────┐
 │ OpenCV / OCR  │ ──► Table & Token Extraction
 └───────┬───────┘
         │
         ▼
 ┌───────────────┐
 │ FastAPI Core  │ ──► Async Request Orchestration
 └───────┬───────┘
         │
         ▼
 ┌───────────────┐
 │ ML / LLM Core │ ──► Random Forest / Groq Llama 3
 └───────┬───────┘
         │
         ▼
[Structured Response & Dashboard]`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
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
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Engine Active</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-4 pt-2 bg-[#0a0f1b] border-b border-slate-800/60">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("model")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-t-lg transition-colors ${
              activeTab === "model"
                ? "bg-[#0c121e] text-cyan-400 border-t-2 border-cyan-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>ML Classifier</span>
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-t-lg transition-colors ${
              activeTab === "api"
                ? "bg-[#0c121e] text-cyan-400 border-t-2 border-cyan-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>FastAPI Endpoint</span>
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-t-lg transition-colors ${
              activeTab === "pipeline"
                ? "bg-[#0c121e] text-cyan-400 border-t-2 border-cyan-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-xs flex items-center gap-1"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code / Visual Box */}
      <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto min-h-[280px] max-h-[320px] bg-[#0c121e]">
        <pre className="text-slate-300 leading-relaxed whitespace-pre font-code">
          <code>{snippets[activeTab]}</code>
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
