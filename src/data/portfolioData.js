const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Geetanshu",
  title: "MERN Stack Developer & Electronics Engineer",
  email: "chaudharygeetanshu719@gmail.com",
  linkedin: "https://www.linkedin.com/in/geetanshu-chaudhary/",
  github: "https://github.com/Geet719",
  resumePath: "public/Geetanshu_Resume.pdf",
};

export const skills = {
  languages: ["JavaScript", "C", "C++", "SQL", "CSS"],
  frontend: ["React.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  tools: ["Git", "JWT", "Docker", "Role-Based Access Control (RBAC)"],
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Knowledge Hub",
    description:
      "Full-stack LLM-based article management platform with secure authentication, JWT, and Gemini Pro API integration. Containerized using Docker.",
    liveUrl: "https://ai-powered-knowledge.onrender.com",
    githubUrl: "https://github.com/Geet719/AI-Powered-Knowledge",
    tags: ["React", "Node.js", "MongoDB", "Docker", "Gemini API"],
  },
  {
    id: 2,
    title: "StayFinder",
    description:
      "Full-stack room booking application featuring robust booking workflows and real-time availability management.",
    liveUrl: "https://stayfinder-i3fg.onrender.com",
    githubUrl: "https://github.com/Geet719/StayFinder",
    tags: ["React", "Express", "MongoDB", "REST API"],
  },
  {
    id: 3,
    title: "Clinic Management Application",
    description:
      "Healthcare application built with Role-Based Access Control (RBAC), secure authentication, and custom dashboards for doctors and patients.",
    liveUrl: "https://clinic-6-hxpa.onrender.com",
    githubUrl: "https://github.com/Geet719/clinic",
    tags: ["React", "Node.js", "RBAC", "JWT"],
  },
];

export { navLinks };
