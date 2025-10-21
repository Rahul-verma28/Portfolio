"use client";

import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export function Skills() {
  const skills = [
        {
      name: "HTML5",
      description: "Modern markup language for web pages",
      icon: <FaHtml5 size={36} />,
    },
    {
      name: "CSS3",
      description: "Modern style sheet language for web pages",
      icon: <FaCss3Alt size={36} />,
    },
    {
      name: "JavaScript",
      description: "Modern JavaScript for web development",
      icon: <FaJs size={36} />,
    },
    {
      name: "React.js",
      description: "JavaScript library for building user interfaces",
      icon: <FaReact size={36} />,
    },
    {
      name: "Next.js",
      description: "React framework for server-side rendering",
      icon: <SiNextdotjs size={36} />,
    },
    {
      name: "Tailwind",
      description: "Utility-first CSS framework",
      icon: <SiTailwindcss size={36} />,
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development",
      icon: <FaNodeJs size={36} />,
    },
    {
      name: "Express.js",
      description: "Web application framework for Node.js",
      icon: <SiExpress size={36} />,
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      icon: <SiMongodb size={36} />,
    },
    {
      name: "MySQL",
      description: "Relational database management system",
      icon: <SiMysql size={36} />,
    },
    {
      name: "AWS",
      description: "Cloud computing platform",
      icon: <FaPython size={36} />,
    },
    {
      name: "Docker",
      description: "Containerization platform",
      icon: <FaGithub size={36} />,
    },
    {
      name: "Git & GitHub",
      description: "Version control system",
      icon: <FaGithub size={36} />,
    },
  ];

  return (
    <section className="overflow-hidden w-full px-4 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black dark:to-neutral-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 mb-3">Skills</h2>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-8">
          I work with a variety of technologies — here are some of the tools and
          frameworks I use frequently.
        </p>
      </div>

      {/* Marquee / horizontal scroller */}
      <div className="relative mt-6 max-w-7xl mx-auto">
        <div className="flex w-full overflow-auto">
          <div className="flex gap-8 items-center py-6">
            {skills.map((skill) => (
              <button
                key={skill.name}
                type="button"
                className="flex flex-col items-center justify-center min-w-[120px] px-4 py-3 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-neutral-800 hover:scale-105 transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label={skill.name}
              >
                <div className="text-indigo-600 mb-2">{skill.icon}</div>
                <span className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  {skill.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
