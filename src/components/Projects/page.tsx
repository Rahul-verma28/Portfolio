// "use client";

// import { motion } from "framer-motion";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import Link from "next/link";
// import Image from "next/image";

// export function Projects() {
//   return (
// <motion.div
//   initial={{ opacity: 0.0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{
//     delay: 0.3,
//     duration: 0.8,
//     ease: "easeInOut",
//   }}
//   className="relative flex flex-col gap-4 items-center justify-center p-4"
// >
//     <CardContainer className="inter-var">
//   <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//     <CardItem
//       translateZ="50"
//       className="text-xl font-bold text-neutral-600 dark:text-white"
//     >
//       Make things float in air
//     </CardItem>
//     <CardItem
//       as="p"
//       translateZ="60"
//       className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//     >
//       Hover over this card to unleash the power of CSS perspective
//     </CardItem>
//     <CardItem translateZ="100" className="w-full mt-4">
//       <Image
//         src="/hero.png"
//         height="1000"
//         width="1000"
//         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//         alt="thumbnail"
//       />
//     </CardItem>
//     <div className="flex justify-between items-center mt-20">
//       <CardItem
//         translateZ={20}
//         as={Link}
//         href="https://twitter.com/mannupaaji"
//         target="__blank"
//         className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//       >
//         Try now →
//       </CardItem>
//       <CardItem
//         translateZ={20}
//         as="button"
//         className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//       >
//         Sign up
//       </CardItem>
//     </div>
//   </CardBody>
// </CardContainer>
//       </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/hero.png",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "/hero.png",
    liveDemo: "#",
    github: "#",
  },
  // Add more projects as needed
];

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center p-4"
    >
      <section className="px-4 md:px-8" id="projects">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="text-5xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            A collection of my recent works and projects.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative items-center justify-center"
              >
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={project.liveDemo}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      className="text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      GitHub
                    </Link>
                  </div>
                </div> */}
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src="/hero.png"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.liveDemo}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Github
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
