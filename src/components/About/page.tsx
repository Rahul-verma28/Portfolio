"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";

const words = `I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
`;

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
      className="relative flex flex-col gap-4 items-center justify-center max-w-screen-lg mx-auto"
    >
      <section id="about" className="min-h-screen">
        <div className="text-xl md:text-5xl font-semibold dark:text-white p-10">
          About
        </div>
        <TextGenerateEffect words={words} />
      </section>
    </motion.div>
  );
}
