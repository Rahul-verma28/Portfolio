"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navItems, personalInfo } from "@/data/portfolio-data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function FloatingNavbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 100) {
      setVisible(true);
      setScrolled(false);
    } else {
      setScrolled(true);
      setVisible(currentScrollY < lastScrollY);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 inset-x-0 mx-auto z-[5000] max-w-5xl px-4"
        >
          <div
            // className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${scrolled
            //   ? "glass-strong shadow-lg shadow-black/5 dark:shadow-black/20"
            //   : "border-transparent bg-transparent"
            //   }`}
            className="flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 glass-strong shadow-lg shadow-black/5 dark:shadow-black/20"
          >
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

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className="relative px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
              >
                Let&apos;s Connect
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <HiX className="h-5 w-5" />
                ) : (
                  <HiMenuAlt3 className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-2 rounded-2xl glass-strong p-4 shadow-xl md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link)}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="mt-2 flex items-center justify-center rounded-lg bg-violet-600 px-4 py-3 text-sm font-medium text-white hover:bg-violet-700 transition-colors"
                  >
                    Let&apos;s Connect
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}
