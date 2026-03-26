"use client";
import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl shadow-sm dark:shadow-none ${
        hover
          ? "transition-all duration-300 hover:border-violet-500/20 hover:bg-white/80 dark:hover:bg-white/[0.04] hover:shadow-md hover:shadow-violet-500/5 dark:hover:shadow-violet-500/5"
          : ""
      } ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
