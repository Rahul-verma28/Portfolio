"use client";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import Header from "../ui/Header";
import Image from "next/image";

export function Hero() {
  const words = [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative max-w-screen-lg md:mx-auto"
      >
        <Header />
        <div className="h-full pt-[18vh] flex justify-between gap-5">
          <div>
            <div className="text-sm font-normal text-neutral-600 dark:text-neutral-400 uppercase">
              Welcome to my website
            </div>
            <div className="text-3xl md:text-7xl font-semibold dark:text-white flex ">
              Rahul Verma
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                I'm a
                <FlipWords words={words} /> <br />
              </div>
            </div>
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-black dark:bg-white dark:hover:bg-volet-500 rounded-lg w-fit text-white dark:text-black px-4 py-2">
              Resume
            </button>
          </div>
          <div>
            <Image
              src="/hero.png"
              alt="img"
              width={400}
              height={400}
              className="inline-block "
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
