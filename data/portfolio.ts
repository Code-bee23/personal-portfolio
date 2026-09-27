export interface Project {
  id: string;
  title: string;
  category: ('AI/ML' | 'LLM' | 'Full-Stack' | 'Backend')[];
  description: string;
  highlight: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: string[];
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
    linkedin: "https://www.linkedin.com/in/gauri-ai", // Replace with your personal LinkedIn URL
    resumeUrl: "/resume/Gauri_Resume.pdf", // Place your resume PDF in public/resume/
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
      skills: ["FastAPI", "REST APIs", "Python", "Pydantic"],
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
      id: "srdt-ai-ml",
      role: "AI & ML Experience",
      company: "SRDT Pvt Ltd",
      period: "September 2025",
      location: "Internship / Trainee",
      technologies: ["Machine Learning", "Python", "Data Science", "NumPy", "Pandas"],
      description: "Worked with machine learning workflows and Python-based data science tools including NumPy and Pandas."
    },
    {
      id: "lt-edutech-ml",
      role: "Machine Learning Fundamentals",
      company: "L&T EduTech",
      period: "January 2025",
      location: "Training & Project Work",
      technologies: ["Supervised ML", "Model Evaluation", "NumPy", "Pandas", "Scikit-learn"],
      description: "Worked with supervised machine learning models, model evaluation, NumPy, Pandas, and practical ML projects."
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
      title: "AI Symptom Checker",
      category: ["AI/ML", "Full-Stack", "Backend"],
      description: "An AI-powered web application that predicts possible diseases based on selected symptoms and provides disease descriptions, precautions, and risk information.",
      highlight: "Machine-learning powered prediction with a FastAPI backend and responsive web interface.",
      problem: "Users often encounter generic medical articles online that make it hard to assess symptoms accurately or understand preliminary precautionary steps in an organized manner.",
      solution: "Designed a clean, multi-symptom selector backed by a trained Random Forest classification model served over FastAPI REST endpoints with immediate precautionary guidance.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "Random Forest", "HTML", "CSS", "JavaScript", "Pandas", "NumPy"],
      keyFeatures: [
        "Multi-select symptom input with instant validation",
        "Random Forest classifier predicting high-probability conditions",
        "Actionable precautions, risk assessment, and disease descriptions",
        "Fast REST API endpoints built with FastAPI and Pydantic validation"
      ],
      architecture: [
        "User Interface (Interactive Selection)",
        "FastAPI REST API Server",
        "Scikit-learn ML Model (Random Forest)",
        "Precaution & Risk Analytics Engine",
        "Structured JSON Response to UI"
      ],
      githubUrl: "https://github.com/Code-bee23/ai-symptom-checker",
      liveUrl: "", // Add live deployment URL here when available
      image: "/projects/symptom-checker.svg"
    },
    {
      id: "ai-mto-generator",
      title: "AI MTO Generator",
      category: ["AI/ML", "Full-Stack", "Backend"],
      description: "An AI-powered application that extracts information from engineering documents/images and generates structured Material Take-Off data.",
      highlight: "Combines OCR, computer vision, local AI, and document processing into an automated workflow.",
      problem: "Engineering drawings, blueprints, and schematic PDFs contain scattered component quantities that engineers traditionally have to transcribe manually into Excel sheets.",
      solution: "Created an automated document processing pipeline utilizing computer vision image preprocessing (OpenCV), OCR (EasyOCR), and local multimodal vision models (LLaVA via Ollama) to extract and format tabular data into ready-to-use Excel sheets.",
      technologies: ["Python", "FastAPI", "Next.js", "EasyOCR", "OpenCV", "pdf2image", "Ollama", "LLaVA", "Excel automation"],
      keyFeatures: [
        "Ingestion of high-resolution engineering schematics and PDFs",
        "Computer vision image enhancement & table bounding box detection",
        "Local multimodal AI extraction (LLaVA via Ollama) for zero data leakage",
        "Automated generation of formatted Excel Material Take-Off (MTO) files"
      ],
      architecture: [
        "Document Ingestion (PDF / Image)",
        "Preprocessing with OpenCV & pdf2image",
        "OCR (EasyOCR) & Vision-LLM (LLaVA via Ollama)",
        "FastAPI Data Parsing & Validation",
        "Formatted Excel / CSV Export"
      ],
      githubUrl: "https://github.com/Code-bee23/ai-mto-generator",
      liveUrl: "",
      image: "/projects/mto-generator.svg"
    },
    {
      id: "ai-candidate-profile-chatbot",
      title: "AI Candidate Profile Chatbot",
      category: ["LLM", "AI/ML", "Full-Stack"],
      description: "An AI-powered chatbot that answers questions based on a candidate profile while minimizing hallucinated information.",
      highlight: "Structured candidate data + LLM-powered conversational interface.",
      problem: "Recruiters and hiring managers spend valuable time sifting through resumes looking for specific skill validations, project details, and experience verification.",
      solution: "Constructed an interactive recruiter-assistant chatbot grounded strictly on structured candidate profile data with low-latency LLM inference via Groq, providing factual answers and source grounding.",
      technologies: ["Python", "FastAPI", "Groq", "Llama", "Pydantic", "Next.js", "TypeScript"],
      keyFeatures: [
        "Strict anti-hallucination prompt conditioning with Pydantic verification",
        "Ultra-fast sub-second LLM inference powered by Groq and Llama 3",
        "Recruiter-focused quick prompt suggestions (e.g., 'Key AI skills', 'Past experience')",
        "Modern conversational web interface with clear markdown formatting"
      ],
      architecture: [
        "Next.js / React Chat Frontend",
        "FastAPI Backend Controller",
        "Pydantic Candidate Profile Context Provider",
        "Groq High-Speed Llama 3 Inference",
        "Streamed Factual Response"
      ],
      githubUrl: "https://github.com/Code-bee23/candidate-profile-chatbot",
      liveUrl: "",
      image: "/projects/profile-chatbot.svg"
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
