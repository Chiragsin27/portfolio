import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillsData = [
  {
    category: "Languages",
    color: "from-violet-500 to-purple-700",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-600",
    skills: [
      "React.js", "Next.js", "Tailwind CSS", "Shadcn UI",
      "Bootstrap", "Zustand", "React Query", "Chart.js", "Framer Motion",
    ],
  },
  {
    category: "Backend & APIs",
    color: "from-emerald-500 to-teal-700",
    skills: [
      "Node.js", "Express.js", "REST APIs", "Next.js Server Actions",
      "node-cron", "NextAuth", "Clerk", "Firebase Auth", "JWT", "OAuth", "Gemini API",
    ],
  },
  {
    category: "Databases & Cloud",
    color: "from-orange-500 to-rose-600",
    skills: [
      "PostgreSQL", "MongoDB", "Prisma ORM",
      "Firebase", "Supabase", "Cloudflare R2",
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-pink-500 to-fuchsia-700",
    skills: ["Git", "GitHub", "Vercel", "Postman"],
  },
];


export const Socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chiragsin27/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    link: "https://github.com/Chiragsin27",
    color: "#ffffff",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Chisin27/",
    color: "#FFA116",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/chiraggg00",
    color: "#96714A",
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/Chiragsin27",
    color: "#1F8ACB",
  },
];
export const Projects = [
  {
    title: "Inter-AI",
    text: "A mock interview app powered by Google Gemini that simulates real interview conditions to help you practice and improve.",
    src: "/inter-ai.png",
    link: "https://github.com/Chiragsin27/inter-ai",
  },
  {
    title: "GoBiggy",
    text: "Where brands and creators meet — a platform to discover creators, launch campaigns, and manage collaborations end to end.",
    src: "/gobiggy.png",
    link: "https://github.com/Chiragsin27/gobiggy",
  },
  {
    title: "PregaHelp",
    text: "A Pregnancy Risk calculator that assesses health risk levels based on BMI and other key health-related factors.",
    src: "/NextWebsite.png",
    link: "https://github.com/Chiragsin27/pregahelp1",
  },
  {
    title: "Next.js Portfolio",
    text: "This very portfolio website — built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Swiper.js.",
    src: "/WebPortfolio.png",
    link: "https://github.com/Chiragsin27/portfolio",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];