"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Experience } from "@/data/portfolio-data";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative flex md:justify-center"
    >
      {/* Desktop layout */}
      <div className="hidden md:flex w-full items-center">
        {/* Left side */}
        <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : ""}`}>
          {isLeft && <TimelineCard experience={experience} />}
        </div>

        {/* Center line + dot */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            className={`w-4 h-4 rounded-full border-2 ${experience.current
              ? "border-violet-500 bg-violet-500 glow-violet-sm"
              : "border-violet-500/50 bg-white dark:bg-neutral-900"
              }`}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
          />
          {!isLast && (
            <motion.div
              className="w-px h-full min-h-[120px] bg-gradient-to-b from-violet-500/40 to-violet-500/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              style={{ transformOrigin: "top" }}
            />
          )}
        </div>

        {/* Right side */}
        <div className={`w-1/2 ${!isLeft ? "pl-12" : ""}`}>
          {!isLeft && <TimelineCard experience={experience} />}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden w-full">
        {/* Line + dot */}
        <div className="relative flex flex-col items-center mr-6">
          <motion.div
            className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${experience.current
              ? "border-violet-500 bg-violet-500 glow-violet-sm"
              : "border-violet-500/50 bg-white dark:bg-neutral-900"
              }`}
          />
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-violet-500/40 to-violet-500/10" />
          )}
        </div>

        {/* Card */}
        <div className="pb-10 flex-1 min-w-0">
          <TimelineCard experience={experience} />
        </div>
      </div>
    </motion.div>
  );
}

function TimelineCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-neutral-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/80 dark:hover:bg-white/[0.04] hover:shadow-lg hover:shadow-violet-500/5 dark:hover:shadow-violet-500/10"
      whileHover={{ y: -2 }}
    >
      {/* Period badge */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
          {experience.period}
        </span>
        {experience.current && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Current
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
        {experience.title}
      </h3>
      <p className="text-sm font-medium text-violet-600 dark:text-violet-400/80 mb-3">
        {experience.company}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
          >
            {/* <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-500/50 flex-shrink-0" /> */}
            <span className="break-words">{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
