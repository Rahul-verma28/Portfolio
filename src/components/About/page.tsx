"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";
import Experiences from "../Experiences/page";

const words = `Self-motivated Full Stack Developer from Greater Noida, India with expertise in the MERN stack. Passionate about building dynamic, high-performance web applications with clean, maintainable code. Currently enhancing CRM systems as an SDE Intern at Makunai Global while completing my BSc in Computer Science and Engineering from Galgotias University (CGPA: 8.4).`;

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={`flex flex-col justify-center gap-4 relative p-6 md:px-8 light-mode-background-about dark:bg-none`}
      id="about"
    >
      <div className="mx-auto min-h-screen py-10 max-w-7xl">
        <div className="flex flex-col rounded-lg ">
          <h1 className="text-4xl font-bold mb-3 text-indigo-500">
            About me
          </h1>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <TextGenerateEffect words={words} />
            <div className="w-full md:w-2/3 lg:w-1/2 mt-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    BSc Computer Science and Engineering
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Galgotias University, 2022 - 2025 | CGPA: 8.4/10.0
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Experiences />
      </div>
    </motion.div>
  );
}
