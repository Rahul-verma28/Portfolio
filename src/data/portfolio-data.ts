export const personalInfo = {
  name: "Rahul Verma",
  tagline: "Full Stack Developer",
  location: "Greater Noida, India",
  email: "rahulverma281202@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-verma-09227a263/",
  github: "https://github.com/Rahul-verma28",
  resumeUrl: "/Resume.pdf",
  heroImage: "/hero.png",
  logoImage: "/logo.png",
};

export const heroRoles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "JavaScript Developer",
];

export const aboutText = `Self-motivated Full Stack Developer from Greater Noida, India with expertise in the MERN stack. Passionate about building dynamic, high-performance web applications with clean, maintainable code. Currently enhancing CRM systems as an SDE Intern at Makunai Global while completing my BSc in Computer Science and Engineering from Galgotias University (CGPA: 8.4).`;

export const education = [
  {
    degree: "BSc Computer Science and Engineering",
    institution: "Galgotias University",
    period: "2022 - 2025",
    grade: "CGPA: 8.4/10.0",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  skills: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Roshogolpo - Bengali Short Stories",
    description:
      "A beautifully crafted platform for Bengali short stories, featuring rich content management, responsive design, and modern web architecture.",
    image: "/roshogolpo.png",
    liveDemo: "https://roshogolpo.in/",
    github: "https://github.com/Rahul-verma28/Roshogolopo",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "Dental Specialist Clinic",
    description:
      "Professional healthcare platform for dental specialists with appointment booking, patient management, and responsive clinical UI.",
    image: "/dental.png",
    liveDemo: "https://www.dentalspecialitycentre.in/",
    github: "https://github.com/Rahul-verma28/Dental-speciality-centre",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "Cartify - E-commerce Platform",
    description:
      "Full-featured e-commerce platform with product catalog, cart management, checkout flow, and modern responsive design.",
    image: "/cartify.png",
    liveDemo: "https://cartify-shop.vercel.app/",
    github: "https://github.com/Rahul-verma28/cartify-shop",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "FlickFusion - Movie Discovery",
    description:
      "Movie discovery platform with lazy loading, infinite scroll, and TMDB API integration for seamless browsing.",
    image: "/flickfusion.png",
    liveDemo: "https://flickfusion.netlify.app",
    github: "https://github.com/Rahul-verma28/FlickFusion",
    skills: ["React.js", "Redux Toolkit", "SCSS", "TMDB API"],
  },
  {
    title: "BSides Dehradun Conference",
    description:
      "Conference website for cybersecurity community with responsive design and heavily optimized performance.",
    image: "/bsides.png",
    liveDemo: "https://bsidesdehradun.com/",
    github: "https://github.com/Rahul-verma28/bsides-dehradun",
    skills: ["Next.js", "Tailwind CSS", "Webpack"],
  },
  {
    title: "YouTube Clone",
    description:
      "YouTube clone with video streaming, search functionality, and responsive design using the YouTube Data API.",
    image: "/Youtube.png",
    liveDemo: "https://yourownyoutube.netlify.app/",
    github: "https://github.com/Rahul-verma28/youtube",
    skills: ["React.js", "Tailwind CSS", "YouTube API"],
  },
];

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Redux", icon: "redux" },
      { name: "Webpack", icon: "webpack" },
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "SDE Intern",
    company: "Makunai Global",
    period: "April 2025 - Present",
    current: true,
    highlights: [
      "Built scalable CRM modules with Next.js/Tailwind achieving 45% UI responsiveness improvement",
      "Implemented REST API integration and user authentication systems",
      "Optimized Redux Toolkit usage resulting in 30% reduction in re-renders",
      "Collaborated in Agile development environment using Git/GitHub",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company: "PC Solutions",
    period: "Jan 2024 - Apr 2024",
    highlights: [
      "Developed conference website achieving 40% faster page loads through optimization",
      "Created responsive UI components resulting in 35% increase in mobile engagement",
      "Implemented Webpack optimization reducing bundle size by 30%",
      "Collaborated with design team to ensure pixel-perfect implementation",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "BSides Dehradun",
    period: "Jan 2024 - Apr 2024",
    highlights: [
      "Developed conference website achieving 40% faster page loads through optimization",
      "Created responsive UI components resulting in 35% increase in mobile engagement",
      "Implemented Webpack optimization reducing bundle size by 30%",
      "Collaborated with design team to ensure pixel-perfect implementation",
    ],
  },
];

export const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development using MERN stack with modern best practices and scalable architecture.",
    icon: "code",
  },
  {
    title: "Frontend Development",
    description:
      "Modern React.js applications with Next.js, TypeScript, and responsive design using Tailwind CSS.",
    icon: "globe",
  },
  {
    title: "Backend Development",
    description:
      "Robust Node.js APIs with Express.js, database integration, and secure authentication systems.",
    icon: "server",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
