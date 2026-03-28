export const personalInfo = {
  name: "Rahul Verma",
  tagline: "Full Stack Developer",
  location: "Noida, India",
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

export const aboutText = `Self-motivated Full Stack Developer from Noida, India with expertise in the MERN stack. Passionate about building dynamic, high-performance web applications with clean, maintainable code. Currently enhancing CRM systems as an SDE Intern at Makunai Global while completing my BSc in Computer Science and Engineering from Galgotias University (CGPA: 8.4).`;

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
  slug: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  images: string[];
  liveDemo: string;
  github: string;
  skills: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Roshogolpo - Bengali Short Stories",
    slug: "roshogolpo",
    description:
      "A beautifully crafted platform for Bengali short stories, featuring rich content management, responsive design, and modern web architecture.",
    longDescription:
      "Roshogolpo is a digital platform dedicated to preserving and sharing Bengali short stories. It features a comprehensive content management system, SEO-optimized story pages, and a reading experience optimized for both desktop and mobile devices.",
    problem: "Bengali literature lacked a modern, accessible digital platform for short stories with proper SEO and user experience.",
    solution: "Built a full-stack platform using Next.js with server-side rendering for SEO, Tailwind CSS for responsive design, and a Node.js backend for content management.",
    impact: "Enabled a growing community of Bengali literature enthusiasts to discover and read stories with optimized page load times and mobile-first design.",
    image: "/roshogolpo.png",
    images: ["/roshogolpo.png"],
    liveDemo: "https://roshogolpo.in/",
    github: "https://github.com/Rahul-verma28/Roshogolopo",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "Dental Specialist Clinic",
    slug: "dental-clinic",
    description:
      "Professional healthcare platform for dental specialists with appointment booking, patient management, and responsive clinical UI.",
    longDescription:
      "A comprehensive healthcare web application for a dental specialty clinic. Features include online appointment scheduling, service catalog, patient testimonials, and a professional UI that builds trust with potential patients.",
    problem: "The dental clinic needed a professional online presence to attract patients and streamline appointment booking.",
    solution: "Designed and developed a modern, responsive website with Next.js, featuring an intuitive appointment system, service pages, and optimized performance.",
    impact: "Increased patient inquiries by providing a professional digital presence with easy-to-use appointment booking functionality.",
    image: "/dental.png",
    images: ["/dental.png"],
    liveDemo: "https://www.dentalspecialitycentre.in/",
    github: "https://github.com/Rahul-verma28/Dental-speciality-centre",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "Cartify - E-commerce Platform",
    slug: "cartify",
    description:
      "Full-featured e-commerce platform with product catalog, cart management, checkout flow, and modern responsive design.",
    longDescription:
      "Cartify is a complete e-commerce solution featuring product browsing with filters, shopping cart with persistent state, checkout flow, and a responsive design that works seamlessly across all devices.",
    problem: "Need for a modern, performant e-commerce platform with smooth UX and mobile-first design.",
    solution: "Built a full-stack e-commerce app with Next.js, implementing product catalog, cart state management, and a streamlined checkout process with Tailwind CSS for styling.",
    impact: "Delivered a production-ready e-commerce platform with optimized performance and conversion-focused design patterns.",
    image: "/cartify.png",
    images: ["/cartify.png"],
    liveDemo: "https://cartify-shop.vercel.app/",
    github: "https://github.com/Rahul-verma28/cartify-shop",
    skills: ["Next.js", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    title: "FlickFusion - Movie Discovery",
    slug: "flickfusion",
    description:
      "Movie discovery platform with lazy loading, infinite scroll, and TMDB API integration for seamless browsing.",
    longDescription:
      "FlickFusion is a movie discovery application that integrates with the TMDB API to provide real-time movie data, ratings, trailers, and detailed information. Features infinite scroll and lazy loading for optimal performance.",
    problem: "Movie enthusiasts needed a fast, visually appealing way to discover and explore movies without page reloads or slow loading.",
    solution: "Created a React SPA with Redux Toolkit for state management, implementing infinite scroll, lazy loading images, and SCSS for custom responsive styling.",
    impact: "Achieved smooth browsing experience with lazy loading reducing initial load time by 60% and infinite scroll eliminating pagination friction.",
    image: "/flickfusion.png",
    images: ["/flickfusion.png"],
    liveDemo: "https://flickfusion.netlify.app",
    github: "https://github.com/Rahul-verma28/FlickFusion",
    skills: ["React.js", "Redux Toolkit", "SCSS", "TMDB API"],
  },
  {
    title: "BSides Dehradun Conference",
    slug: "bsides-dehradun",
    description:
      "Conference website for cybersecurity community with responsive design and heavily optimized performance.",
    longDescription:
      "Official website for BSides Dehradun, a cybersecurity conference. Built with performance as a priority, featuring speaker profiles, schedule management, ticket information, and responsive design for all devices.",
    problem: "The cybersecurity conference needed a fast, professional website to attract attendees and share event information.",
    solution: "Developed with Next.js and Tailwind CSS, implemented Webpack optimizations to reduce bundle size by 30%, achieving 40% faster page loads.",
    impact: "Delivered a 40% improvement in page load speed and 35% increase in mobile engagement through responsive UI components.",
    image: "/bsides.png",
    images: ["/bsides.png"],
    liveDemo: "https://bsidesdehradun.com/",
    github: "https://github.com/Rahul-verma28/bsides-dehradun",
    skills: ["Next.js", "Tailwind CSS", "Webpack"],
  },
  {
    title: "YouTube Clone",
    slug: "youtube-clone",
    description:
      "YouTube clone with video streaming, search functionality, and responsive design using the YouTube Data API.",
    longDescription:
      "A feature-rich YouTube clone that replicates core YouTube functionality including video search, video playback, channel information, and related video recommendations using the YouTube Data API v3.",
    problem: "Wanted to demonstrate proficiency in API integration and building complex UI applications with real-time data.",
    solution: "Built with React.js and Tailwind CSS, integrating the YouTube Data API for search, video streaming, and channel data with a fully responsive design.",
    impact: "Created a fully functional video platform clone demonstrating skills in API integration, state management, and responsive UI development.",
    image: "/Youtube.png",
    images: ["/Youtube.png"],
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
    title: "Junior Software Engineer - MERN Stack",
    company: "PC Solutions",
    period: "Oct 2025 - Present",
    current: true,
    highlights: [
      "Working on SSPR (Self-Service Password Reset) system using the MERN stack for enterprise-scale organizations, enabling secure identity verification and password recovery integrated with Active Directory",
      "Designed scalable backend architecture and REST APIs; improved backend reliability and response time through optimized queries and Express middleware",
      "Containerized application services using Docker and deployed on VM-based infrastructure, ensuring consistent environments and reliable production hosting",
    ],
  },
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

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];
