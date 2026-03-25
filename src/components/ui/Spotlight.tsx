"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface SpotlightProps {
    children: React.ReactNode;
    className?: string;
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        },
        []
    );

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px z-10"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.06), transparent 40%)`,
                    opacity,
                }}
                animate={{ opacity }}
                transition={{ duration: 0.3 }}
            />
            {children}
        </div>
    );
}
