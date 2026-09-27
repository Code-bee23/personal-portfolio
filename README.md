# Gauri — Personal Portfolio

A modern, recruiter-focused personal portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

## 🚀 Key Features

- **Recruiter-Optimized**: Communicates skills, real-world AI/ML projects, and contact info in seconds.
- **Single-Source Configuration**: Easily customize all personal details, skills, experiences, and projects in [`data/portfolio.ts`](./data/portfolio.ts).
- **Interactive Visual**: Developer & AI pipeline terminal with architecture previews and interactive tabs.
- **Dynamic Project Filtering**: Filter projects smoothly across `AI/ML`, `LLM`, `Full-Stack`, and `Backend`.
- **Architectural Modals**: View problem definitions, solutions, tech stacks, and pipeline flowcharts for each project.
- **Zero Backend Required**: Ready for immediate 1-click deployment on **Vercel** or any static/Node host.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom Tech SVGs

---

## ⚙️ How to Customize

All portfolio information is centralized in [`data/portfolio.ts`](./data/portfolio.ts).

You can easily update:
- Your name, role, and bio
- Email, LinkedIn, GitHub, and Resume URLs
- Skills and tool categories
- Work experiences and internships
- Featured project descriptions, architecture, and live links

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/).
3. Framework preset will automatically be detected as **Next.js**.
4. Click **Deploy**.
