"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import React from "react";

export function Skills() {
  const data = [
    {
      name: "HTML",
      icon: "aa",
    },
    {
      name: "CSS",
      icon: "aa",
    },
    {
      name: "JAVASCRIPT",
      icon: "aa",
    },
    {
      name: "REACT",
      icon: "aa",
    },
    {
      name: "NEXT",
      icon: "aa",
    },
    {
      name: "TAILWIND",
      icon: "aa",
    },
    {
      name: "TYPESCRIPT",
      icon: "aa",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <section id="about" className=" max-w-screen-lg mx-auto min-h-screen">
        <div className="text-xl md:text-5xl font-semibold dark:text-white">
          Skills
        </div>
        {data.map((e) => {
          return (
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 hover:text-violet-500 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              {e.name}
            </Button>
          );
        })}
      </section>
    </motion.div>
  );
}
