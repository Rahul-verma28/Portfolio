"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, heroRoles } from "@/data/portfolio-data";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GridBackground } from "@/components/ui/GridBackground";
import { HiOutlineDocumentArrowDown, HiOutlineArrowDown } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { AuroraBackground } from "../ui/aurora-background";

import {
    SiTypescript
} from "react-icons/si";

export function HeroSection() {
    const [roleIndex, setRoleIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AuroraBackground>

            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background effects */}
                <GridBackground variant="dots" className="absolute inset-0" />

                {/* Radial gradient orbs */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/[0.03] blur-[80px] pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Text content */}
                        <motion.div
                            className="flex-1 text-center lg:text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Status badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.05] px-4 py-1.5 mb-6"
                            >
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                    Available for opportunities
                                </span>
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                            >
                                <span className="text-neutral-900 dark:text-white">Hi, I&apos;m </span>
                                <span className="gradient-text">{personalInfo.name}</span>
                            </motion.h1>

                            {/* Dynamic role */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="h-10 md:h-12 mb-6 overflow-hidden"
                            >
                                <motion.p
                                    key={roleIndex}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -30, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                                >
                                    {heroRoles[roleIndex]}
                                </motion.p>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
                            >
                                Building high-performance web applications with the MERN stack.
                                Focused on clean architecture, scalable solutions, and premium user experiences.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            >
                                <Link
                                    href={personalInfo.resumeUrl}
                                    download
                                    className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <HiOutlineDocumentArrowDown className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                                    Download Resume
                                </Link>

                                <Link
                                    href="#projects"
                                    className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    View Projects
                                    <HiOutlineArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                                </Link>
                            </motion.div>

                            {/* Social links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
                            >
                                <Link
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="h-5 w-5" />
                                </Link>
                                <Link
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg text-neutral-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </Link>
                                <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-800" />
                                <Link
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-sm text-neutral-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                >
                                    {personalInfo.email}
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Hero image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                            className="relative flex-shrink-0"
                        >
                            {/* Glow behind image */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-transparent blur-3xl scale-110" />

                            {/* Decorative ring */}
                            <div className="absolute inset-0 rounded-full border border-violet-500/10 scale-[1.15] animate-spin-slow" />

                            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
                                <Image
                                    src={personalInfo.heroImage}
                                    alt={`Portrait of ${personalInfo.name}`}
                                    fill
                                    priority
                                    className="object-contain rounded-2xl"
                                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 440px"
                                />
                            </div>

                            {/* Floating skill badges */}
                            <motion.div
                                className="absolute -top-2 -right-4 md:-right-8 rounded-xl border border-white/10 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl px-3 py-2 shadow-lg"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg text-blue-600"><FaReact /></span>
                                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">React.js</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-8 -left-4 md:-left-12 rounded-xl border border-white/10 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl px-3 py-2 shadow-lg"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg text-green-600"><FaNodeJs /></span>
                                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Node.js</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 -right-6 md:-right-16 rounded-xl border border-white/10 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl px-3 py-2 shadow-lg"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-lg text-yellow-500"><SiTypescript /></span>
                                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">TypeScript</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs text-neutral-400">Scroll</span>
                        <div className="w-5 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex justify-center pt-1.5">
                            <motion.div
                                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-1.5 rounded-full bg-violet-500"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </AuroraBackground>

    );
}
