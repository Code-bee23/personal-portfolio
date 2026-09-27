export interface Project {
  id: string;
  number: string;
  title: string;
  category: string[];
  badge?: string;
  contributionNote?: string;
  description: string;
  highlights: string[];
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: string[];
  batchArchitecture?: string[];
  deployment?: string;
  performance?: string[];
  disclaimer?: string;
  codeFiles?: { file: string; desc: string }[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  technologies: string[];
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    bio: string;
    aboutParagraphs: string[];
    enjoyBuilding: string[];
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    location?: string;
  };
  quickValues: {
    title: string;
    items: string[];
    icon: string;
  }[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  projects: Project[];
  learningPillars: {
    title: string;
    badge: string;
    description: string;
    focusAreas: string[];
    icon: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Gauri",
    role: "AI/ML Engineer • Full-Stack Developer",
    headline: "Building intelligent software that solves real-world problems.",
    bio: "I'm Gauri, an AI/ML and full-stack developer who builds practical applications using Python, machine learning, modern web technologies, and AI.",
    aboutParagraphs: [
      "Gauri is an AI/ML and full-stack developer interested in building intelligent and practical software applications.",
      "She has hands-on experience working with Python, Machine Learning, Deep Learning, TensorFlow, PyTorch, FastAPI, Next.js, TypeScript, React, LLM applications, and REST APIs to create end-to-end solutions that bridge AI pipelines with polished user experiences."
    ],
    enjoyBuilding: [
      "AI-powered applications",
      "Machine learning solutions",
      "Intelligent automation",
      "Full-stack web applications",
      "LLM-powered tools",
      "Developer-focused software"
    ],
    email: "gauri.dev.ai@example.com", // Customizable contact email
    github: "https://github.com/Code-bee23",
    linkedin: "https://www.linkedin.com/in/gauri-ai", // Customizable LinkedIn URL
    resumeUrl: "/resume/Gauri_Resume.pdf", // Place resume PDF in public/resume/
    location: "India (Open to Remote / Relocation)"
  },
  quickValues: [
    {
      title: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "LLM Applications"],
      icon: "Cpu"
    },
    {
      title: "Full-Stack",
      items: ["FastAPI", "Next.js", "TypeScript", "React"],
      icon: "Layers"
    },
    {
      title: "Problem Solving",
      items: ["Python", "Data Structures", "Algorithms"],
      icon: "Code"
    },
    {
      title: "Development",
      items: ["REST APIs", "Git", "Docker", "Deployment"],
      icon: "Server"
    }
  ],
  skillCategories: [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
      iconName: "Terminal"
    },
    {
      title: "AI / Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
      iconName: "Brain"
    },
    {
      title: "AI / LLM",
      skills: ["LLM Applications", "RAG", "Hugging Face", "Prompt Engineering", "Vector Databases", "Sentence Transformers"],
      iconName: "Sparkles"
    },
    {
      title: "Backend",
      skills: ["FastAPI", "REST APIs", "Python", "Pydantic", "TypeScript", "Node.js"],
      iconName: "Server"
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "HTML", "CSS", "JavaScript"],
      iconName: "Layout"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "MLflow", "Weights & Biases"],
      iconName: "Wrench"
    }
  ],
  experiences: [
    {
      id: "enginow-ai-intern",
      role: "Artificial Intelligence Intern",
      company: "Enginow",
      period: "January 2026 – March 2026",
      location: "Remote",
      technologies: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      description: "Worked on AI/ML workflows and contributed to developing practical AI solutions using Python and deep learning technologies."
    },
    {
      id: "tcs-virtual-internship",
      role: "Virtual Internship",
      company: "Tata Consultancy Services (TCS)",
      period: "Program Completion",
      location: "Virtual",
      technologies: ["Prompt Engineering", "LLM Concepts", "AI Pipelines", "Automated Reporting"],
      description: "Worked with prompt engineering, LLM concepts, AI pipelines, and automated reporting."
    }
  ],
  projects: [
    {
      id: "ai-symptom-checker",
      number: "01",
      title: "AI-Powered Symptom Checker System",
      category: ["Machine Learning", "Healthcare AI", "FastAPI"],
      badge: "Featured AI Project",
      description: "An end-to-end AI-powered symptom checker built with Python that predicts possible diseases from user-selected symptoms.",
      highlights: [
        "94% precision on the stated dataset",
        "Real-time inference under 200ms",
        "FastAPI backend",
        "Docker deployment",
        "Custom disease-symptom dataset"
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "FastAPI",
        "Docker",
        "Scikit-learn",
        "Random Forest",
        "Pandas",
        "NumPy"
      ],
      problem: "Users need a simple way to interact with symptom-based information through a software interface.",
      solution: "An end-to-end symptom checker system was built from scratch using Python and a custom disease-symptom dataset. The system processes symptoms and provides a model-based prediction through a FastAPI backend.",
      keyFeatures: [
        "Custom disease-symptom dataset integration",
        "Random Forest classification engine",
        "Real-time prediction under 200ms",
        "Containerized with Docker and served via FastAPI"
      ],
      architecture: [
        "User",
        "Web Interface",
        "FastAPI",
        "ML Model",
        "Disease Prediction"
      ],
      deployment: "FastAPI + Docker",
      performance: [
        "94% Precision",
        "<200ms Real-Time Inference"
      ],
      disclaimer: "Educational project only. This system is not a substitute for professional medical diagnosis, treatment, or medical advice.",
      githubUrl: "https://github.com/Code-bee23/ai-symptom-checker",
      liveUrl: "",
      image: "/projects/symptom-checker.svg"
    },
    {
      id: "ai-factory-assistant",
      number: "02",
      title: "AI Factory Assistant",
      category: ["Agentic AI", "LLM", "Full-Stack"],
      badge: "Featured AI Project",
      description: "An Agentic AI-powered factory assistant that answers production, quality, and maintenance queries in real time.",
      highlights: [
        "Agentic AI-powered assistant",
        "Production queries",
        "Quality queries",
        "Maintenance queries",
        "Hindi/English conversational support",
        "Real-time data integration",
        "ChatGPT-style interface"
      ],
      technologies: [
        "FastAPI",
        "Next.js",
        "Groq",
        "LLM",
        "Agentic AI",
        "TypeScript"
      ],
      problem: "Factory operations can involve frequent production, quality, and maintenance-related questions that require quick access to relevant information.",
      solution: "An Agentic AI-powered factory assistant was developed to answer production, quality, and maintenance queries in real time. The application combines a Next.js interface, FastAPI backend, and Groq LLM.",
      keyFeatures: [
        "Production Support: Answers production-related queries.",
        "Quality Support: Handles quality-related questions.",
        "Maintenance Support: Provides conversational assistance for maintenance queries.",
        "Hindi + English: Supports bilingual conversations.",
        "Real-Time Data: Uses real-time data integration.",
        "ChatGPT-Style Interface: Provides a familiar conversational user experience."
      ],
      architecture: [
        "User",
        "Next.js Interface",
        "FastAPI Backend",
        "Groq LLM",
        "Factory Data",
        "AI Response"
      ],
      deployment: "FastAPI + Next.js + Groq",
      githubUrl: "https://github.com/Code-bee23/ai-factory-assistant",
      liveUrl: "",
      image: "/projects/factory-assistant.svg"
    },
    {
      id: "emotion-detection-text",
      number: "03",
      title: "Emotion Detection from Text",
      category: ["NLP", "Machine Learning", "FastAPI"],
      badge: "Featured AI Project",
      description: "An NLP system that analyzes textual input to detect and classify emotional states and sentiment in real time.",
      highlights: [
        "Text preprocessing & tokenization pipeline",
        "Multi-class emotion classification",
        "Real-time sentiment & tone inference",
        "Clean FastAPI REST endpoint"
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Scikit-learn",
        "FastAPI",
        "Pandas",
        "NumPy"
      ],
      problem: "Textual messages and conversational interactions often lack emotional nuance, making automated emotion detection valuable for understanding sentiment and intent.",
      solution: "Engineered an NLP classification system that tokenizes and vectorizes textual inputs, passes them through a trained classifier, and outputs discrete emotion labels with confidence scoring.",
      keyFeatures: [
        "NLP Text Preprocessing: Cleans stopwords, tokenizes, and normalizes input text.",
        "Multi-Class Emotion Output: Predicts emotional categories (Joy, Sadness, Anger, Neutral).",
        "Confidence Distribution: Delivers probability scores across all emotion classes.",
        "REST API Endpoint: Low-latency FastAPI inference service."
      ],
      architecture: [
        "User Text",
        "NLP Preprocessing",
        "FastAPI Backend",
        "Emotion ML Model",
        "Emotion Prediction"
      ],
      deployment: "FastAPI REST API",
      githubUrl: "https://github.com/Code-bee23/emotion-detection-text",
      liveUrl: "",
      image: "/projects/emotion-detection.svg"
    },
    {
      id: "california-house-price-prediction",
      number: "04",
      title: "California House Price Prediction API",
      category: ["Machine Learning", "Regression", "FastAPI", "REST API", "AI/ML", "Backend"],
      badge: "Machine Learning Project",
      description: "An end-to-end machine learning project that exposes a California house-price prediction model through a FastAPI REST API, supporting both individual predictions and batch CSV processing.",
      highlights: [
        "Random Forest Regression: Uses a Random Forest Regressor to predict California house prices.",
        "REST API: Built with FastAPI to expose the machine learning prediction functionality.",
        "Individual Prediction: Supports predictions for individual house inputs.",
        "Batch Prediction: Supports CSV uploads for processing multiple house records with downloadable CSV results."
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Random Forest",
        "Scikit-learn",
        "REST API",
        "Machine Learning",
        "Regression"
      ],
      problem: "Predict California house prices from housing-related input data using a machine learning regression model.",
      solution: "A Random Forest Regressor is exposed through a FastAPI backend. The API supports individual house-price prediction, batch prediction through CSV upload, input validation, processing of multiple records, and downloadable CSV results.",
      keyFeatures: [
        "01 — ML Prediction: Predict California house prices using a Random Forest regression model.",
        "02 — FastAPI Backend: Expose the machine learning model through REST API endpoints.",
        "03 — Individual Predictions: Allow individual house information to be submitted for prediction.",
        "04 — Batch Predictions: Process multiple house records through CSV upload.",
        "05 — Input Validation: Validate incoming prediction data before processing.",
        "06 — Downloadable Results: Return batch prediction results as a downloadable CSV file."
      ],
      architecture: [
        "User / Client",
        "FastAPI REST API",
        "Input Validation",
        "Random Forest Regressor",
        "House Price Prediction",
        "JSON Response"
      ],
      batchArchitecture: [
        "CSV Upload",
        "FastAPI",
        "Batch Prediction",
        "Generated CSV",
        "Download Results"
      ],
      codeFiles: [
        { file: "train.py", desc: "Model training workflow" },
        { file: "main.py", desc: "FastAPI application" },
        { file: "explore.py", desc: "Data/model exploration" },
        { file: "test_houses.csv", desc: "Test input data" },
        { file: "requirements.txt", desc: "Project dependencies" }
      ],
      deployment: "FastAPI REST API",
      githubUrl: "https://github.com/Code-bee23/California-House-price-prediction",
      liveUrl: "",
      image: "/projects/california-housing.svg"
    },
    {
      id: "ai-powered-resume",
      number: "05",
      title: "AI-Powered Resume Analyzer",
      category: ["NLP", "Python", "NLTK", "Full-Stack", "AI/ML", "Backend"],
      badge: "NLP & Web Application",
      description: "An NLP-driven web application that analyzes and processes resume content using NLTK and Python to extract skills, keywords, and candidate profile insights.",
      highlights: [
        "NLTK text processing & tokenization pipeline",
        "Skill and keyword extraction from resumes",
        "Real-time resume parsing & content analysis",
        "Web interface with modular NLP utility functions"
      ],
      technologies: [
        "Python",
        "NLP",
        "NLTK",
        "Flask",
        "HTML/Templates",
        "Text Processing"
      ],
      problem: "Job seekers need an automated way to parse, analyze, and structure resume text for key skill extraction and technical keyword alignment.",
      solution: "Engineered an NLP-powered resume analysis web application using custom NLP utility helpers (nlp_utils.py) and NLTK routines to tokenize, clean, and extract candidate skill profiles through an interactive web interface.",
      keyFeatures: [
        "01 — Resume Text Parsing: Ingests candidate resume content for lexical analysis.",
        "02 — NLTK NLP Processing: Tokenizes, normalizes, and filters candidate resume tokens via setup_nltk.py.",
        "03 — Skill & Keyword Extraction: Identifies technical competencies and domain keywords.",
        "04 — Interactive Web UI: Presents structured analysis and candidate feedback."
      ],
      architecture: [
        "User Resume Input",
        "Text Preprocessing (setup_nltk & nlp_utils)",
        "Keyword & Skill Extraction Engine",
        "Web App Server (app.py)",
        "Analysis Results & Dashboard"
      ],
      codeFiles: [
        { file: "app.py", desc: "Web server application & route handler" },
        { file: "nlp_utils.py", desc: "Text processing & skill extraction helpers" },
        { file: "setup_nltk.py", desc: "NLTK resource and tokenizer setup" },
        { file: "templates/", desc: "Web UI presentation templates" },
        { file: "requirements.txt", desc: "Project dependencies" },
        { file: "build.sh", desc: "Deployment build script" }
      ],
      deployment: "Python Web Application",
      githubUrl: "https://github.com/Code-bee23/AI-powered-resume",
      liveUrl: "",
      image: "/projects/ai-resume.svg"
    },
    {
      id: "spendguard",
      number: "06",
      title: "SpendGuard",
      category: ["Backend", "FinOps", "SaaS Infrastructure", "TypeScript", "REST API"],
      badge: "Backend Contribution",
      contributionNote: "Backend contribution — Budgets, Alerts, Reporting & Billing",
      description: "A SaaS spending-management platform with budget monitoring, threshold alerts, financial reporting, and billing modules.",
      highlights: [
        "Backend contribution — Budgets, Alerts, Reporting & Billing",
        "Budget limit monitoring & threshold alert triggers",
        "FinOps cost breakdown & analytical reporting",
        "SaaS billing lifecycle & subscription usage metering"
      ],
      technologies: [
        "TypeScript",
        "Node.js",
        "REST API",
        "FinOps",
        "SaaS Infrastructure",
        "PostgreSQL"
      ],
      problem: "Multi-tenant SaaS platforms require reliable backend services to monitor organizational cloud expenditures against allocated caps, trigger instant breach alerts, and generate consolidated billing reports.",
      solution: "Contributed to the SpendGuard team repository by engineering and owning the backend modules for budget monitoring, threshold alert triggers, FinOps reporting analytics, and billing pipelines.",
      keyFeatures: [
        "01 — Budgets Module: Real-time spend tracking and allocated budget threshold surveillance.",
        "02 — Alerts Module: Event-driven notification dispatch when expenditures exceed predefined percentages.",
        "03 — Reporting Module: Automated cost breakdowns and financial data aggregation.",
        "04 — Billing Module: Subscription metering, invoice record management, and usage sync."
      ],
      architecture: [
        "SaaS Invoices & Usage",
        "Backend API (apps/api)",
        "Budgets & Threshold Evaluator",
        "Alerts Trigger Engine",
        "Automated Reports & Billing Sync"
      ],
      codeFiles: [
        { file: "apps/api/src/modules/budgets/", desc: "Budget limits & threshold monitoring" },
        { file: "apps/api/src/modules/reports/", desc: "FinOps cost breakdown & reporting" },
        { file: "apps/api/src/modules/billing/", desc: "Billing sync & subscription metering" }
      ],
      deployment: "Node.js / TypeScript SaaS Backend",
      githubUrl: "https://github.com/DevNs-cmd/Spend-Guard",
      liveUrl: "",
      image: "/projects/spendguard.svg"
    }
  ],
  learningPillars: [
    {
      title: "Problem Solving & DSA",
      badge: "Algorithms & Python",
      description: "Practicing data structures, algorithmic complexity, optimization, and clean code principles.",
      focusAreas: ["Arrays & Hashmaps", "Graph & Tree Traversal", "Dynamic Programming", "Time & Space Complexity"],
      icon: "Code2"
    },
    {
      title: "AI / ML Experimentation",
      badge: "Deep Learning & Pipelines",
      description: "Experimenting with neural network architectures, model training pipelines, data preprocessing, and evaluation metrics.",
      focusAreas: ["TensorFlow & PyTorch", "Model Evaluation & Tuning", "Feature Engineering", "Computer Vision & NLP"],
      icon: "Sparkle"
    },
    {
      title: "LLMs & Modern AI Systems",
      badge: "RAG & Multimodal",
      description: "Building production-minded AI applications using retrieval augmentation, prompt engineering, and local model inference.",
      focusAreas: ["RAG Architectures", "Vector Search & Embeddings", "Groq & Ollama", "Structured LLM Output"],
      icon: "Bot"
    },
    {
      title: "Full-Stack Web Engineering",
      badge: "End-to-End Apps",
      description: "Connecting intelligent backends with reactive, responsive, and accessible user interfaces.",
      focusAreas: ["Next.js App Router", "FastAPI Asynchronous Endpoints", "TypeScript Type Safety", "Tailwind Modern Styling"],
      icon: "Layers"
    }
  ]
};
