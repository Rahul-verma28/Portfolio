"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio-data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    project: Project;
    index: number;
    featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white dark:bg-neutral-950/80 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 ${featured ? "md:col-span-1" : ""
                }`}
        >
            {/* Spotlight glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-0"
                style={{
                    background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 40%)`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Animated gradient border on hover */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
                style={{
                    background: `linear-gradient(135deg, rgba(139,92,246,0.15), transparent, rgba(59,130,246,0.15))`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            <div className="relative z-10">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Quick action buttons on image hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-white/90 dark:bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
                            aria-label={`Live demo of ${project.title}`}
                        >
                            <FaExternalLinkAlt className="h-3 w-3" />
                            Live Demo
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
                            aria-label={`GitHub for ${project.title}`}
                        >
                            <FaGithub className="h-3.5 w-3.5" />
                            Code
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center rounded-full bg-violet-500/[0.08] dark:bg-violet-500/[0.1] px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300 ring-1 ring-inset ring-violet-500/[0.15]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
