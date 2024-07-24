"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Bsides Dehradun",
    description: "A Conference for and by Cybersecurity community.",
    image: "/bsides.png",
    liveDemo: "https://bsidesdehradun.com/",
    github: "https://github.com/Rahul-verma28/youtube",
    skills: ["next js", "tailwind", "node js"],
  },
  {
    title: "FlickFusion",
    description: "Your Ultimate Movie and TV Show Guide",
    image: "/flickfusion.png",
    liveDemo: "https://flickfusion.netlify.app",
    github: "https://github.com/Rahul-verma28/FlickFusion",
    skills: ["react js", "scss", "rtk"],
  },
  {
    title: "Youtube",
    description: "A brief description of Project One.",
    image: "/youtube.png",
    liveDemo: "https://yourownyoutube.netlify.app/",
    github: "https://github.com/Rahul-verma28/youtube",
    skills: ["react js", "tailwind", "api"],
  },
  {
    title: "NewsNine",
    description:
      "Your ultimate source for the latest news, stories, and insights.",
    image: "/newsnine.png",
    liveDemo: "https://newsnine.netlify.app/",
    github: "https://github.com/Rahul-verma28/NewsNine",
    skills: ["react js", "tailwind", "NewsApi"],
  },
  {
    title: "ModuLearn",
    description: "A perfect learning plateform",
    image: "/modulearn.png",
    liveDemo: "https://modulearn.netlify.app/",
    github: "https://github.com/Rahul-verma28/ModuLearn",
    skills: ["react js", "tailwind", "material ui"],
  },
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
      id="projects"
      className="relative flex flex-col gap-8 pt-10 items-center justify-center light-mode-background-projects dark:bg-none"
    >
      <section className="px-10 sm:px-5">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="text-4xl font-bold mb-5 text-indigo-500 text-center">
            Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            A collection of my recent works and projects.
          </p>
          <div className="grid gap-8 md:grid-cols-2 px-2 py-10">
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
                <CardContainer className="inter-var hover:shadow-2xl dark:hover:shadow-violet-500 rounded-xl">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold dark:text-white text-indigo-600"
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
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <CardItem className="mt-10 flex gap-2 ">
                      {project.skills.map((skill) => (
                        <div key={skill} className="badge badge-neutral uppercase p-3 text-xs">{skill}</div>
                      ))}
                    </CardItem>
                    <div className="flex justify-between items-center mt-2">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.liveDemo}
                        target="__blank"
                        className=" p-2 rounded-xl text-xs font-normal dark:text-white hover:underline hover:text-indigo-500 hover:font-bold"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 flex items-center gap-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        <FaGithub />
                        <span>Github</span>
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
