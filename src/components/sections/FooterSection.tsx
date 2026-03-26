"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, navItems } from "@/data/portfolio-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMapPin, HiArrowUp, HiOutlineCodeBracket } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.github,
    icon: FaGithub,
    hoverColor: "hover:text-white hover:border-neutral-600 hover:bg-neutral-800 dark:hover:bg-neutral-700/50",
  },
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/10",
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: HiOutlineEnvelope,
    hoverColor: "hover:text-violet-500 hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/10",
  },
  {
    name: "Portfolio",
    href: "#hero",
    icon: HiOutlineCodeBracket,
    hoverColor: "hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-500/10",
  },
];

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
];

export function FooterSection() {
  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-neutral-200 dark:border-white/[0.06] bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      {/* Subtle gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand + Bio + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group mb-4"
            >
              <Image
                src={personalInfo.logoImage}
                alt="Logo"
                width={36}
                height={36}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                {`>`}_ Rahul.dev
              </span>
            </Link>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Full Stack Developer passionate about building high-performance web applications with the MERN stack and modern frameworks.
            </p>

            {/* Social Tiles */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={social.href === "#hero" ? (e) => handleNavClick(e, "#hero") : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-400 transition-all duration-300 ${social.hoverColor}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white mb-5 uppercase tracking-wider">
              <span className="text-violet-500">{`<>`}</span> Quick Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className="group flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-violet-500 transition-all duration-200" />
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Get In Touch + Built With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white mb-5 uppercase tracking-wider">
              <span className="text-violet-500">{`>`}</span> Get In Touch
            </h3>

            <div className="space-y-3 mb-8">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
              >
                <HiOutlineEnvelope className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                {personalInfo.email}
              </Link>
              <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                <HiOutlineMapPin className="h-4 w-4 flex-shrink-0" />
                {personalInfo.location}
              </div>
            </div>

            {/* Built with */}
            <div>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3 font-medium uppercase tracking-wider">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 cursor-default"
                  >
                    <tech.icon className="h-3 w-3" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400 dark:text-neutral-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Rahul Verma — Crafted with
            <span className="text-red-500">♥</span>
            and lots of
            <span className="text-amber-500">☕</span>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
          >
            Back to top
            <HiArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
