"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import Header from "../ui/Header";
import Image from "next/image";
import { HiOutlineNewspaper } from "react-icons/hi2";
import Link from "next/link";

export function Hero() {
  const words = [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "React.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative max-w-7xl mx-auto px-6 lg:px-2"
      >
        <Header />

        <header className="h-full w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase mb-3">
              Welcome to my portfolio!
            </p>
            <h1 className="text-4xl md:text-7xl font-abold leading-tight dark:text-white">
              Rahul Verma
            </h1>

            <p className="mt-4 text-lg md:text-2xl font-light text-neutral-700 dark:text-neutral-300">
              I&apos;m a<span className="font-semibold"> <FlipWords words={words} /></span>
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
              <Link
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black shadow-sm hover:translate-y-0.5 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Download resume"
              >
                <HiOutlineNewspaper />
                <span>Download Resume</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
          </div>

            <Image
              src="/hero.png"
              alt="Portrait of Rahul Verma"
              width={520}
              height={520}
              priority
              className=" max-w-[320px] md:max-w-[480px]"
            />
        </header>
      </motion.div>
    </AuroraBackground>
  );
}
