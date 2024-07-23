import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: any
  ) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex justify-between max-w-screen-xl top-0 inset-x-0 mx-auto px-10 py-5 items-center space-x-4 absolute"
      >
        <h1 className="text-4xl font-tangerine text-violet-500 e font-extrabold flex items-center gap-2">
          <Image
            src="/logo.png"
            className="rounded-full border-1 border-indigo-500 mr-dafoe-regular"
            width={40}
            height={40}
            alt="Logo"
          />
          Rahul.
        </h1>
        <div className="md:flex items-center space-x-3 md:space-x-8 hidden">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleSmoothScroll(e, navItem.link)}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 hover:underline uppercase"
            >
              <span className="text-sm hover:text-violet-500 hover:font-bold">
                {navItem.name}
              </span>
            </a>
          ))}
        </div>
        <div className="flex items-center md:gap-2 justify-center text-center">
          <ModeToggle />
          <Link href="mailto: rahulverma281202@gmail.com" target="_blank">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="hidden md:flex items-center space-x-2"
            >
              <span>Let's Connect</span> <FaArrowRight />
            </HoverBorderGradient>
          </Link>
          <Sidebar />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
