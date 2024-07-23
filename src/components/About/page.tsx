"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";
import Experiences from "../Experiences/page";

const words = `I am a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I am a self-motivated and hardworking individual who is always ready to learn new things and work in a team.`;

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
      className={`flex flex-col justify-center gap-4 relative p-10 md:px-8 light-mode-background-about dark:bg-none`}
      id="about"
    >
      <div className="mx-auto min-h-screen py-10 max-w-screen-lg">
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
                    B.Sc. in Computer Science
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Galgotias University, 2022 - 2025
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
