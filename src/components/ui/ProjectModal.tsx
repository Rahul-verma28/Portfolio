"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio-data";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineCog6Tooth, HiOutlineChartBar } from "react-icons/hi2";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[6000] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-y-12 xl:inset-x-[15%] z-[6001] overflow-y-auto rounded-2xl border border-white/[0.1] bg-white dark:bg-neutral-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 dark:bg-white/10 backdrop-blur-sm text-white hover:bg-black/40 dark:hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="h-4 w-4" />
            </button>

            {/* Image carousel */}
            <div className="relative aspect-video w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.images[imageIndex]}
                    alt={`${project.title} screenshot ${imageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent" />

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="h-4 w-4" />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImageIndex(i)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          i === imageIndex
                            ? "bg-violet-500 w-6"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="px-6 md:px-10 pb-8 -mt-8 relative z-10">
              {/* Title + actions */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                    {project.longDescription}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt className="h-3 w-3" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                    Source Code
                  </Link>
                </div>
              </div>

              {/* Problem / Solution / Impact */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-white/[0.08] bg-violet-50/50 dark:bg-violet-500/[0.04] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-500">
                      <HiOutlineLightBulb className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                      Problem
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-indigo-50/50 dark:bg-indigo-500/[0.04] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                      <HiOutlineCog6Tooth className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                      Solution
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-blue-50/50 dark:bg-blue-500/[0.04] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <HiOutlineChartBar className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                      Impact
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 uppercase tracking-wide">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-violet-500/[0.08] dark:bg-violet-500/[0.1] px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 ring-1 ring-inset ring-violet-500/[0.15]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
