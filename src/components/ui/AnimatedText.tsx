"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    variant?: "reveal" | "gradient" | "typewriter";
    delay?: number;
}

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.04,
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export function AnimatedText({
    text,
    className = "",
    variant = "reveal",
    delay = 0,
}: AnimatedTextProps) {
    if (variant === "gradient") {
        return (
            <motion.span
                className={`gradient-text ${className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                {text}
            </motion.span>
        );
    }

    if (variant === "typewriter") {
        const words = text.split(" ");
        return (
            <motion.span
                className={className}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, i) => (
                    <motion.span
                        key={`${word}-${i}`}
                        custom={i + delay * 10}
                        variants={wordVariants}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    // Default: letter-by-letter reveal
    const letters = text.split("");
    return (
        <motion.span
            className={className}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, i) => (
                <motion.span
                    key={`${letter}-${i}`}
                    custom={i + delay * 25}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ whiteSpace: letter === " " ? "pre" : undefined }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Section reveal wrapper
interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: SectionRevealProps) {
    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay,
                duration: 0.7,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
