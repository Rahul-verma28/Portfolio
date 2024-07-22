"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";
import styles from "../CustomSection.module.css";

const words = `I&apos;m a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I&apos;m a self-motivated and hardworking individual who is always ready to learn new things and work in a team.`;

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className={`flex flex-col justify-center gap-4 relative py-10 px-4 md:px-8`}
      id="about"
    >
      <div className="mx-auto min-h-screen py-10 max-w-screen-lg">
        <div className="flex flex-col dark:shadow-lg rounded-lg ">
          <h1 className="text-5xl font-semibold mb-8 text-gray-800 dark:text-white">
            About Me
          </h1>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <TextGenerateEffect words={words} />
            <div className="w-full md:w-2/3 lg:w-1/2 mt-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    B.Sc. in Computer Science
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Galgotias University, 2022 - 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-3xl font-semibold my-6 text-gray-700 dark:text-gray-300">
            Experiences
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-2">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1984</time>
                <div className="text-lg font-black">
                  First Macintosh computer
                </div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function. The motherboard, a 9 in (23 cm) CRT monitor, and a
                floppy drive were housed in a beige case with integrated
                carrying handle; it came with a keyboard and single-button
                mouse.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">1998</time>
                <div className="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple&apos;s
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2001</time>
                <div className="text-lg font-black">iPod</div>
                The iPod is a discontinued series of portable media players and
                multi-purpose mobile devices designed and marketed by Apple Inc.
                The first version was released on October 23, 2001, about 8+1⁄2
                months after the Macintosh version of iTunes was released. Apple
                sold an estimated 450 million iPod products as of 2022. Apple
                discontinued the iPod product line on May 10, 2022. At over 20
                years, the iPod brand is the oldest to be discontinued by Apple
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2007</time>
                <div className="text-lg font-black">iPhone</div>
                iPhone is a line of smartphones produced by Apple Inc. that use
                Apple&apos;s own iOS mobile operating system. The first-generation
                iPhone was announced by then-Apple CEO Steve Jobs on January 9,
                2007. Since then, Apple has annually released new iPhone models
                and iOS updates. As of November 1, 2018, more than 2.2 billion
                iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
                of global smartphone market share
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2015</time>
                <div className="text-lg font-black">Apple Watch</div>
                The Apple Watch is a line of smartwatches produced by Apple Inc.
                It incorporates fitness tracking, health-oriented capabilities,
                and wireless telecommunication, and integrates with iOS and
                other Apple products and services
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
