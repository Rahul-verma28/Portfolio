"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlineCheckBadge,
    HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactCards = [
    {
        icon: HiOutlineEnvelope,
        title: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        color: "violet",
    },
    {
        icon: HiOutlineMapPin,
        title: "Location",
        value: personalInfo.location,
        href: null,
        color: "indigo",
    },
    {
        icon: HiOutlineCheckBadge,
        title: "Status",
        value: "Available for opportunities",
        href: null,
        color: "emerald",
    },
];

export function ContactSection() {
    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                {/* Header */}
                <SectionReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Let&apos;s <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
                            Have a project in mind or want to discuss collaboration opportunities?
                            I&apos;d love to hear from you.
                        </p>
                    </div>
                </SectionReveal>

                {/* Contact cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {contactCards.map((card, idx) => (
                        <SectionReveal key={card.title} delay={idx * 0.1}>
                            <GlassCard className="p-6 text-center group" hover>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 mx-auto mb-4 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                                    <card.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                                    {card.title}
                                </h3>
                                {card.href ? (
                                    <Link
                                        href={card.href}
                                        className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                                    >
                                        {card.value}
                                    </Link>
                                ) : (
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {card.value}
                                    </p>
                                )}
                            </GlassCard>
                        </SectionReveal>
                    ))}
                </div>

                {/* CTA Card */}
                <SectionReveal delay={0.3}>
                    <motion.div
                        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.05] via-transparent to-indigo-500/[0.05] p-8 md:p-12 text-center"
                        whileHover={{ borderColor: "rgba(139, 92, 246, 0.2)" }}
                    >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-indigo-500/[0.03]" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                                Ready to start a project?
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
                                Drop me a message and I&apos;ll get back to you within 24 hours.
                                Let&apos;s build something amazing together.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href={`mailto:${personalInfo.email}`}
                                    className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <HiOutlinePaperAirplane className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    Send me an email
                                </Link>

                                <div className="flex items-center gap-3">
                                    <Link
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-3.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <FaLinkedin className="h-4 w-4" />
                                        LinkedIn
                                    </Link>
                                    <Link
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-3.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-500/30 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <FaGithub className="h-4 w-4" />
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
}
