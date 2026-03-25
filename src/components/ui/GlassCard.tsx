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
            className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl dark:bg-white/[0.02] ${hover
                    ? "transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.06] dark:hover:bg-white/[0.04]"
                    : ""
                } ${className}`}
            whileHover={hover ? { y: -2 } : undefined}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
