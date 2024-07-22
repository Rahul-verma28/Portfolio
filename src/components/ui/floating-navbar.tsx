"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { HoverBorderGradient } from "./hover-border-gradient";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex justify-between fixed max-w-screen-md top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.5] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-3 px-6 items-center space-x-4 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75",
          className
        )}
      >
        <h1 className="text-2xl hover:underline uppercase flex items-center gap-2">
          <Image
            src="/image.png"
            className=" rounded-full"
            width={40}
            height={40}
            alt="Logo"
          />
          Rahul.
        </h1>
        <div className="flex items-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:font-bold dark:hover:text-neutral-300 hover:text-blue-900 hover:underline uppercase"
              )}
            >
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-center text-center">
          <ModeToggle />
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2"
          >
            <span>Let&apos;s Connect</span>
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
