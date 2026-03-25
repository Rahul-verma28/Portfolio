"use client";
import React from "react";
import { experiences } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/AnimatedText";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { GridBackground } from "@/components/ui/GridBackground";

export function ExperienceSection() {
    return (
        <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
            <GridBackground variant="grid" className="absolute inset-0" />

            {/* Gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/[0.03] blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                {/* Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
                            Career
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
                            My professional journey and the impact I&apos;ve made at each organization.
                        </p>
                    </div>
                </SectionReveal>

                {/* Timeline */}
                <div className="relative">
                    {experiences.map((exp, idx) => (
                        <TimelineItem
                            key={`${exp.company}-${idx}`}
                            experience={exp}
                            index={idx}
                            isLast={idx === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
