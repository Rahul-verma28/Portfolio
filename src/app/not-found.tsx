"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/GridBackground";
import { HiOutlineHome } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground variant="dots" className="absolute inset-0" />

      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          <HiOutlineHome className="h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}