export type CourseModule = {
  title: string;
  topics: string[];
};

/** Optional EdTech-style fields for premium course showcase */
export type CourseStats = { label: string; value: string };
export type CourseHighlight = { title: string; icon: string };
export type CourseTimelineStep = { label: string; title: string };

export type Course = {
  id: string;
  title: string;
  duration: string;
  modules: CourseModule[];
  projects?: string[];
  tagline?: string;
  /** Short description for overview card */
  shortDescription?: string;
  /** e.g. ["6 Months Program", "120+ Hours Training", "6 Real Projects"] */
  stats?: CourseStats[];
  /** Course benefits with icon key */
  highlights?: CourseHighlight[];
  /** Skill badges: HTML, CSS, React, etc. */
  skills?: string[];
  /** Tech stack for logo grid */
  techStack?: string[];
  /** Timeline steps derived from modules if not set (e.g. Month 1: Web Fundamentals) */
  timeline?: CourseTimelineStep[];
  /** Career paths after completion */
  careerPaths?: string[];
};

export const courses: Course[] = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    duration: "6 Months",
    shortDescription: "Master frontend and backend development with React, Node.js, and MongoDB. Build and deploy real applications from day one.",
    stats: [
      { label: "Program", value: "6 Months" },
      { label: "Training", value: "120+ Hours" },
      { label: "Projects", value: "6 Real Projects" },
      { label: "Outcome", value: "Capstone App" },
    ],
    highlights: [
      { title: "Industry expert trainers", icon: "👨‍🏫" },
      { title: "Hands-on coding sessions", icon: "💻" },
      { title: "Real project deployment", icon: "🚀" },
      { title: "Portfolio-ready applications", icon: "📁" },
      { title: "Placement assistance", icon: "📋" },
      { title: "Live project hosting", icon: "🌐" },
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "APIs"],
    techStack: ["React", "Node.js", "MongoDB", "Git", "Docker", "AWS"],
    timeline: [
      { label: "Month 1", title: "Web Fundamentals" },
      { label: "Month 2", title: "JavaScript Programming" },
      { label: "Month 3", title: "React Development" },
      { label: "Month 4", title: "Backend Development" },
      { label: "Month 5", title: "Database & APIs" },
      { label: "Month 6", title: "Deployment & Final Project" },
    ],
    careerPaths: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Freelancer / Startup Founder"],
    projects: ["E-commerce Web Application", "Real-time Chat Application", "Admin Dashboard", "Portfolio Website", "REST API Backend"],
    modules: [
      {
        title: "Module 1: Web Fundamentals",
        topics: ["Internet & Web Architecture", "HTML5 Structure", "CSS3 Styling", "Responsive Design (Flexbox, Grid)"],
      },
      {
        title: "Module 2: JavaScript Programming",
        topics: ["JavaScript Basics", "DOM Manipulation", "ES6 Features", "Async Programming"],
      },
      {
        title: "Module 3: Frontend Framework",
        topics: ["React.js Fundamentals", "React Hooks", "State Management", "API Integration"],
      },
      {
        title: "Module 4: Backend Development",
        topics: ["Node.js Basics", "Express.js Framework", "REST APIs", "Authentication (JWT)"],
      },
      {
        title: "Module 5: Database",
        topics: ["MongoDB", "SQL Basics", "Data Modeling"],
      },
      {
        title: "Module 6: Deployment",
        topics: ["Git & GitHub", "CI/CD Basics", "Hosting (Vercel / AWS)"],
      },
    ],
  },
  {
    id: "python-programming",
    title: "Python Programming (Beginner to Advanced)",
    duration: "3 Months",
    modules: [
      { title: "Module 1: Python Fundamentals", topics: ["Variables", "Data Types", "Loops", "Functions"] },
      { title: "Module 2: Object-Oriented Programming", topics: ["Classes & Objects", "Inheritance", "Encapsulation"] },
      { title: "Module 3: Libraries", topics: ["NumPy", "Pandas", "Matplotlib"] },
      { title: "Module 4: Automation", topics: ["File Automation", "Web Scraping", "API Integration"] },
      { title: "Module 5: Projects", topics: ["Data Automation Tool", "Web Scraper", "Python CLI Application"] },
    ],
    tagline: "Python remains one of the most requested programming languages in job postings, widely used across AI, data science, automation, and web development.",
  },
  {
    id: "data-science-machine-learning",
    title: "Data Science & Machine Learning",
    duration: "6 Months",
    modules: [
      { title: "Module 1: Data Analysis", topics: ["Python for Data Analysis", "Pandas & NumPy", "Data Cleaning"] },
      { title: "Module 2: Statistics", topics: ["Probability", "Hypothesis Testing", "Data Visualization"] },
      { title: "Module 3: Machine Learning", topics: ["Regression", "Classification", "Clustering"] },
      { title: "Module 4: Deep Learning", topics: ["Neural Networks", "TensorFlow / PyTorch"] },
      { title: "Module 5: Model Deployment", topics: ["Flask API", "Model Serving"] },
    ],
    projects: ["Sales Prediction Model", "Recommendation System", "Image Classification"],
    tagline: "AI/ML roles are among the fastest-growing tech jobs globally with significant salary growth.",
  },
  {
    id: "generative-ai-prompt-engineering",
    title: "Generative AI & Prompt Engineering",
    duration: "2–3 Months",
    modules: [
      { title: "Module 1: AI Fundamentals", topics: ["AI vs ML vs Deep Learning", "LLM Concepts"] },
      { title: "Module 2: Prompt Engineering", topics: ["Prompt Design", "Chain of Thought", "AI Agents"] },
      { title: "Module 3: LLM Development", topics: ["OpenAI APIs", "LangChain", "Vector Databases"] },
      { title: "Module 4: AI Applications", topics: ["Chatbots", "AI Automation", "RAG Systems"] },
    ],
    projects: ["AI Chatbot", "AI Knowledge Assistant"],
    tagline: "Generative AI adoption is rapidly growing as companies deploy AI in business systems and automation.",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing (AWS / Azure / GCP)",
    duration: "3–4 Months",
    modules: [
      { title: "Module 1: Cloud Fundamentals", topics: ["Cloud Architecture", "Virtualization", "IaaS, PaaS, SaaS"] },
      { title: "Module 2: AWS Services", topics: ["EC2", "S3", "Lambda"] },
      { title: "Module 3: Containerization", topics: ["Docker", "Kubernetes"] },
      { title: "Module 4: Infrastructure as Code", topics: ["Terraform", "CI/CD Pipelines"] },
      { title: "Module 5: Projects", topics: ["Deploy Web Application", "Serverless API"] },
    ],
    tagline: "Cloud skills appear in most tech job postings due to global cloud adoption.",
  },
  {
    id: "devops-engineering",
    title: "DevOps Engineering",
    duration: "3–4 Months",
    modules: [
      { title: "Module 1: Linux & Networking", topics: ["Linux Commands", "Shell Scripting"] },
      { title: "Module 2: CI/CD", topics: ["Jenkins", "GitHub Actions"] },
      { title: "Module 3: Containers", topics: ["Docker", "Kubernetes"] },
      { title: "Module 4: Monitoring", topics: ["Prometheus", "Grafana"] },
    ],
    projects: ["CI/CD Pipeline", "Microservices Deployment"],
  },
  {
    id: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    duration: "4 Months",
    modules: [
      { title: "Module 1: Security Basics", topics: ["Network Security", "Cryptography"] },
      { title: "Module 2: Ethical Hacking", topics: ["Penetration Testing", "Vulnerability Scanning"] },
      { title: "Module 3: Security Tools", topics: ["Kali Linux", "Metasploit", "Wireshark"] },
      { title: "Module 4: Cloud Security", topics: ["Identity Management", "Zero Trust"] },
    ],
    tagline: "Cybersecurity talent shortages are significant globally, making it a highly demanded career path.",
  },
  {
    id: "mobile-app-development-flutter",
    title: "Mobile App Development (Flutter)",
    duration: "3 Months",
    modules: [
      { title: "Module 1", topics: ["Dart Programming"] },
      { title: "Module 2", topics: ["Flutter UI"] },
      { title: "Module 3", topics: ["API Integration"] },
      { title: "Module 4", topics: ["Firebase Backend"] },
    ],
    projects: ["E-commerce App", "Chat App"],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    duration: "2–3 Months",
    modules: [
      { title: "Module 1", topics: ["Design Principles"] },
      { title: "Module 2", topics: ["Wireframing"] },
      { title: "Module 3", topics: ["Prototyping"] },
      { title: "Module 4", topics: ["Figma"] },
    ],
    projects: ["Mobile App Design", "Dashboard UI"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    duration: "3 Months",
    modules: [
      { title: "Module 1", topics: ["Excel Advanced"] },
      { title: "Module 2", topics: ["SQL"] },
      { title: "Module 3", topics: ["Python Analytics"] },
      { title: "Module 4", topics: ["Power BI / Tableau"] },
    ],
    projects: ["Sales Dashboard", "Business Insights Report"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (Optional Non-Coding)",
    duration: "2 Months",
    modules: [
      { title: "Modules", topics: ["SEO", "Social Media Marketing", "Google Ads", "Analytics"] },
    ],
  },
];
