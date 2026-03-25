"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutText, education } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { GridBackground } from "@/components/ui/GridBackground";
import {
    HiOutlineAcademicCap,
    HiOutlineCodeBracket,
    HiOutlineBolt,
    HiOutlineRocketLaunch,
} from "react-icons/hi2";

const strengths = [
    {
        icon: HiOutlineCodeBracket,
        title: "Clean Code",
        description: "Writing maintainable, well-structured code with modern best practices",
    },
    {
        icon: HiOutlineBolt,
        title: "Performance",
        description: "Optimizing applications for speed, scalability, and user experience",
    },
    {
        icon: HiOutlineRocketLaunch,
        title: "Fast Learner",
        description: "Quickly adapting to new technologies, frameworks, and project requirements",
    },
];

export function AboutSection() {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
            <GridBackground variant="grid" className="absolute inset-0" />

            {/* Subtle gradient orb */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[100px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section header */}
                <SectionReveal>
                    <div className="mb-16">
                        <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
                            About Me
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            Crafting Digital{" "}
                            <span className="gradient-text">Experiences</span>
                        </h2>
                    </div>
                </SectionReveal>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* About text */}
                    <SectionReveal className="lg:col-span-3" delay={0.1}>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {aboutText}
                            </p>

                            {/* Education */}
                            <div className="mt-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <HiOutlineAcademicCap className="h-5 w-5 text-violet-500" />
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                        Education
                                    </h3>
                                </div>
                                {education.map((edu, i) => (
                                    <GlassCard key={i} className="p-5">
                                        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {edu.institution}, {edu.period}
                                        </p>
                                        <span className="inline-flex items-center mt-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                                            {edu.grade}
                                        </span>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Strengths */}
                    <div className="lg:col-span-2 space-y-4">
                        {strengths.map((item, i) => (
                            <SectionReveal key={item.title} delay={0.2 + i * 0.1}>
                                <GlassCard className="p-5 group">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
