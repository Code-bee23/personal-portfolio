import os

pdf_content = """%PDF-1.4
1 0 obj
<<
  /Title (Gauri - Resume)
  /Author (Gauri)
  /Creator (Gauri Portfolio)
  /Producer (Python PDF Generator)
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Length 1200
>>
stream
BT
/F1 20 Tf
50 740 Td
(GAURI) Tj
/F1 11 Tf
0 -18 Td
(AI/ML Engineer & Full-Stack Developer) Tj
/F2 9 Tf
0 -15 Td
(Email: gauri.dev.ai@example.com  |  GitHub: github.com/Code-bee23  |  LinkedIn: linkedin.com/in/gauri-ai) Tj

/F1 12 Tf
0 -26 Td
(PROFESSIONAL SUMMARY) Tj
/F2 9 Tf
0 -14 Td
(AI/ML and Full-Stack Developer who builds practical applications using Python, machine learning,) Tj
0 -11 Td
(modern web technologies, and AI pipelines. Experienced with PyTorch, TensorFlow, FastAPI, Next.js, and Docker.) Tj

/F1 12 Tf
0 -24 Td
(TECHNICAL SKILLS) Tj
/F2 9 Tf
0 -14 Td
(Languages: Python, TypeScript, JavaScript, C++, SQL) Tj
0 -12 Td
(AI / ML: Machine Learning, Deep Learning, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, NLTK) Tj
0 -12 Td
(AI / LLM: LLM Applications, Agentic AI, Groq, Prompt Engineering, RAG Architectures) Tj
0 -12 Td
(Backend & Tools: FastAPI, REST APIs, Pydantic, Next.js, React, Docker, Git, MLflow) Tj

/F1 12 Tf
0 -24 Td
(WORK EXPERIENCE & INTERNSHIPS) Tj
/F1 10 Tf
0 -14 Td
(Artificial Intelligence Intern  -  Enginow) Tj
/F2 9 Tf
400 0 Td
(Jan 2026 - Mar 2026) Tj
-400 -12 Td
(Worked on AI/ML workflows and contributed to developing practical AI solutions using Python and deep learning.) Tj

/F1 10 Tf
0 -16 Td
(Virtual Internship  -  Tata Consultancy Services (TCS)) Tj
/F2 9 Tf
400 0 Td
(Program Completion) Tj
-400 -12 Td
(Worked with prompt engineering, LLM concepts, AI pipelines, and automated reporting.) Tj

/F1 12 Tf
0 -24 Td
(FEATURED PROJECTS) Tj
/F1 10 Tf
0 -14 Td
(1. AI-Powered Symptom Checker System  (Python, FastAPI, Scikit-learn, Docker)) Tj
/F2 9 Tf
0 -12 Td
(End-to-end healthcare AI web app predicting diseases from user symptoms with 94% precision and <200ms latency.) Tj

/F1 10 Tf
0 -14 Td
(2. AI Factory Assistant  (FastAPI, Next.js, Groq, Agentic AI, TypeScript)) Tj
/F2 9 Tf
0 -12 Td
(Agentic AI assistant handling real-time production, maintenance, and quality queries with Hindi/English support.) Tj

/F1 10 Tf
0 -14 Td
(3. Emotion Detection from Text  (Python, NLP, NLTK, Scikit-learn, FastAPI)) Tj
/F2 9 Tf
0 -12 Td
(Multi-class emotion and sentiment classification pipeline with real-time REST inference.) Tj

/F1 10 Tf
0 -14 Td
(4. California House Price Prediction API  (Python, FastAPI, Random Forest)) Tj
/F2 9 Tf
0 -12 Td
(Machine learning regression API supporting individual and batch CSV predictions.) Tj

/F1 10 Tf
0 -14 Td
(5. SpendGuard  (TypeScript, Node.js, FinOps, REST API)) Tj
/F2 9 Tf
0 -12 Td
(Engineered core backend modules for Budgets, Threshold Alerts, FinOps Reporting, and Billing.) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000150 00000 n 
0000000201 00000 n 
0000000355 00000 n 
0000000438 00000 n 
0000000516 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1770
%%EOF
"""

os.makedirs("public/resume", exist_ok=True)
with open("public/resume/Gauri_Resume.pdf", "wb") as f:
    f.write(pdf_content.encode("latin-1"))

print("Resume PDF successfully generated in public/resume/Gauri_Resume.pdf")
