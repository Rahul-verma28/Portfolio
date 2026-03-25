"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, navItems } from "@/data/portfolio-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export function FooterSection() {
    const handleNavClick = (e: React.MouseEvent, link: string) => {
        e.preventDefault();
        const element = document.querySelector(link);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-white/[0.06] bg-neutral-50 dark:bg-neutral-950/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        className="flex items-center gap-2 group"
                    >
                        <Image
                            src={personalInfo.logoImage}
                            alt="Logo"
                            width={32}
                            height={32}
                            className="rounded-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                            Rahul.
                        </span>
                    </Link>

                    {/* Nav links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.link}
                                href={item.link}
                                onClick={(e) => handleNavClick(e, item.link)}
                                className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-neutral-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-5 w-5" />
                        </Link>
                        <Link
                            href={`mailto:${personalInfo.email}`}
                            className="p-2 rounded-lg text-neutral-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-200"
                            aria-label="Email"
                        >
                            <HiOutlineEnvelope className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <p className="text-center text-sm text-neutral-400 dark:text-neutral-600">
                        © {new Date().getFullYear()} Rahul Verma. Built with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
