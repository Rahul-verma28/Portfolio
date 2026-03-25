"use client";
import React from "react";

interface GridBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    variant?: "dots" | "grid" | "lines";
}

export function GridBackground({
    children,
    className = "",
    variant = "dots",
}: GridBackgroundProps) {
    const patterns = {
        dots: (
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" className="fill-violet-500/[0.07] dark:fill-violet-400/[0.05]" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
        ),
        grid: (
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-violet-500/[0.04] dark:stroke-violet-400/[0.03]" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />
            </svg>
        ),
        lines: (
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="linePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="60" x2="60" y2="0" className="stroke-violet-500/[0.03]" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#linePattern)" />
            </svg>
        ),
    };

    return (
        <div className={`relative ${className}`}>
            {patterns[variant]}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
