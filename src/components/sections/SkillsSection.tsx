"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio-data";
import { SectionReveal, StaggerContainer, staggerItem } from "@/components/ui/AnimatedText";
import { GlowCard } from "@/components/ui/GlowCard";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiRedux,
    SiWebpack,
} from "react-icons/si";
import { HiOutlineServerStack, HiOutlineGlobeAlt } from "react-icons/hi2";

const iconMap: Record<string, React.ReactNode> = {
    html5: <FaHtml5 className="h-6 w-6" />,
    css3: <FaCss3Alt className="h-6 w-6" />,
    javascript: <FaJs className="h-6 w-6" />,
    typescript: <SiTypescript className="h-5 w-5" />,
    react: <FaReact className="h-6 w-6" />,
    nextjs: <SiNextdotjs className="h-5 w-5" />,
    tailwind: <SiTailwindcss className="h-6 w-6" />,
    nodejs: <FaNodeJs className="h-6 w-6" />,
    express: <SiExpress className="h-5 w-5" />,
    mongodb: <SiMongodb className="h-6 w-6" />,
    mysql: <SiMysql className="h-6 w-6" />,
    api: <HiOutlineServerStack className="h-6 w-6" />,
    github: <FaGithub className="h-6 w-6" />,
    docker: <FaDocker className="h-6 w-6" />,
    aws: <FaAws className="h-6 w-6" />,
    redux: <SiRedux className="h-5 w-5" />,
    webpack: <SiWebpack className="h-5 w-5" />,
};

const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <HiOutlineGlobeAlt className="h-5 w-5" />,
    Backend: <HiOutlineServerStack className="h-5 w-5" />,
    "Tools & Cloud": <FaDocker className="h-5 w-5" />,
};

export function SkillsSection() {
    return (
        <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
                            Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Skills & <span className="gradient-text">Technologies</span>
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
                            I work with a variety of modern technologies to build scalable,
                            performant web applications.
                        </p>
                    </div>
                </SectionReveal>

                {/* Skill categories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIdx) => (
                        <SectionReveal key={category.category} delay={catIdx * 0.15}>
                            <GlowCard className="p-6 md:p-8 h-full">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                                        {categoryIcons[category.category]}
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Skills grid */}
                                <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={staggerItem}
                                            className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] dark:bg-white/[0.01] p-3 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/[0.03] cursor-default"
                                        >
                                            <div className="text-neutral-600 dark:text-neutral-400 group-hover:text-violet-500 transition-colors flex-shrink-0">
                                                {iconMap[skill.icon] || (
                                                    <div className="h-6 w-6 rounded bg-violet-500/10" />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </StaggerContainer>
                            </GlowCard>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
