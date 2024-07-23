// components/Footer.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Footer() {
  return (
    <footer className="w-full border-t-2 py-8 px-4 md:px-8 bg-gray-100 dark:bg-[#1a1b1e] text-[#333333] dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="Company Logo" width={40} height={40} className="w-10 h-10 rounded-full" />
          <span className="text-3xl font-bold font-tangerine text-indigo-500 hover:underline">Rahul.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 md:gap-8 cursor-pointer">
          <Link href="/" legacyBehavior>
            <div className=" transition-colors hover:text-indigo-500 hover:bold">Home</div>
          </Link>
          <Link href="#about" legacyBehavior>
            <div className=" transition-colors hover:text-indigo-500 hover:bold">About</div>
          </Link>
          <Link href="#services" legacyBehavior>
            <div className=" transition-colors hover:text-indigo-500 hover:bold">Services</div>
          </Link>
          <Link href="#projects" legacyBehavior>
            <div className=" transition-colors hover:text-indigo-500 hover:bold">Projects</div>
          </Link>
        </nav>
        <div className="flex items-center gap-4 cursor-pointer">
          <Link href="https://www.linkedin.com/in/rahul-verma-09227a263/" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <FaLinkedin className=" text-3xl hover:text-indigo-500 hover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
          <Link href="https://github.com/Rahul-verma28" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <FaGithub className=" text-3xl hover:text-indigo-500 hover transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
          <Link href="mailto: rahulverma281202@gmail.com" target="_blank" rel="noopener noreferrer" legacyBehavior>
            <div className="hover:text-primary dark:hover:text-primary-light transition-colors">
              <IoIosMail className=" text-4xl hover:text-indigo-500 hover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-[#e0e0e0] dark:border-[#2c2d30] text-[#666666] dark:text-[#a9a9a9] transition-colors duration-300">
        <p className="text-center text-sm">Copyright &copy; 2024 Portfolio. All rights are reserved by <b>Rahul Verma</b>.</p>
      </div>
    </footer>
  );
}
