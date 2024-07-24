"use client";

import { motion } from "framer-motion";
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
      name: "HTML",
      description: "Markup language for web pages",
      icon: <FaHtml5 size={36} />,
    },
    {
      name: "CSS",
      description: "Style sheet language for web pages",
      icon: <FaCss3Alt size={36} />,
    },
    {
      name: "JavaScript",
      description: "Programming language for web development",
      icon: <FaJs size={36} />,
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      icon: <FaReact size={36} />,
    },
    {
      name: "Next.js",
      description: "React framework for server-side rendering",
      icon: <SiNextdotjs size={36} />,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: <SiTailwindcss size={36} />,
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development",
      icon: <FaNodeJs size={36} />,
    },
    {
      name: "Express",
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
      name: "Python",
      description: "High-level programming language",
      icon: <FaPython size={36} />,
    },
    {
      name: "Git",
      description: "Version control system",
      icon: <FaGithub size={36} />,
    },
  ];

  const words = `I&apos;m a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I&apos;m a self-motivated and hardworking individual who is always ready to learn new things and work in a team.`;

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 px-10 lg:p-2 items-center light-mode-background-skills dark:bg-none md:text-center"
    >
      <div className="text-gray-900 dark:text-white py-10 max-w-screen-lg mx-auto ">
        <h2 className="text-4xl font-bold mb-4 text-indigo-500
        ">Skills</h2>
        <p className="text-md font-normal text-neutral-600 dark:text-neutral-400 my-8">
          I have extensive experience working with a variety of technologies as
          a web developer. I&apos;ve developed and maintained multiple projects using
          these technologies, and I&apos;m always eager to learn more.
        </p>
        {/* <TextGenerateEffect words={words} /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              key={skill.name}
              className="flex items-center bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-150 hover:bg-gray-300 dark:hover:bg-gray-700 group hover:shadow-2xl hover:shadow-indigo-400 hover:border-indigo-400"
            >
              <div className="mr-4 group-hover:text-indigo-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold group-hover:text-indigo-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className=" text-xs md:text-sm font-normal text-neutral-600 dark:text-neutral-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
