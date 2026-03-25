"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowCard({
    children,
    className = "",
    glowColor = "rgba(139, 92, 246, 0.15)",
}: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setPosition({
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
            className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:border-violet-500/20 ${className}`}
        >
            {/* Spotlight glow following mouse */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-0"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
