// components/Footer.js
"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t-2 py-8 px-4 md:px-8 bg-gray-100 dark:bg-[#1a1b1e] text-[#333333] dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Image src="/image.png" alt="Company Logo" width={40} height={40} className="w-10 h-10 rounded-full" />
          <span className="text-lg font-bold hover:text-indigo-500 hover:underline">Rahul.</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4 md:gap-8">
          <Link href="/" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors hover:text-indigo-500">Home</div>
          </Link>
          <Link href="/about" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors hover:text-indigo-500">About</div>
          </Link>
          <Link href="/projects" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors hover:text-indigo-500">Projects</div>
          </Link>
          <Link href="/contact" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors hover:text-indigo-500">Contact</div>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <FaLinkedin className=" text-3xl hover:text-indigo-500 hover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <FaGithub className=" text-3xl hover:text-indigo-500 hover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <FaInstagram className=" text-3xl hover:text-indigo-500 hover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-[#e0e0e0] dark:border-[#2c2d30] text-[#666666] dark:text-[#a9a9a9] transition-colors duration-300">
        <p className="text-center text-sm">Copyright &copy; 2024 Portfolio. All rights are reserved by Rahul Verma.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7928CA] to-[#FF0080] transition-colors duration-300" />
    </footer>
  );
}
