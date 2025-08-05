"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cartify Shop - E-Commerce Platform",
    description: "Complete e-commerce solution with user authentication, admin dashboard, and real-time order management.",
    image: "/bsides.png", // You can update this image
    liveDemo: "https://cartify-shop.vercel.app/",
    github: "https://github.com/Rahul-verma28/cartify-shop",
    skills: ["Next.js 14", "TypeScript", "Redux Toolkit", "MongoDB", "NextAuth.js", "AWS EC2", "Docker"],
  },
  {
    title: "FlowChat - Real-time Messaging",
    description: "Real-time messaging platform with end-to-end encryption, supporting 500+ daily active users.",
    image: "/flickfusion.png",
    liveDemo: "https://flowchat.vercel.app/",
    github: "https://github.com/Rahul-verma28/FlowChat",
    skills: ["MERN Stack", "Socket.io", "JWT Auth", "Crypto.js", "Real-time"],
  },
  {
    title: "Dental Speciality Centre",
    description: "Clinic website with online appointment booking system and email confirmation integration.",
    image: "/modulearn.png",
    liveDemo: "https://dental-centre.vercel.app/",
    github: "https://github.com/Rahul-verma28/dental-centre",
    skills: ["Next.js", "MongoDB", "Nodemailer", "Framer Motion", "SSR"],
  },
  {
    title: "FlickFusion - Movie Discovery",
    description: "Movie discovery platform with lazy loading, infinite scroll, and TMDB API integration.",
    image: "/flickfusion.png",
    liveDemo: "https://flickfusion.netlify.app",
    github: "https://github.com/Rahul-verma28/FlickFusion",
    skills: ["React.js", "Redux Toolkit", "SCSS", "TMDB API", "Lazy Loading"],
  },
  {
    title: "BSides Dehradun Conference",
    description: "Conference website for cybersecurity community with responsive design and optimized performance.",
    image: "/bsides.png",
    liveDemo: "https://bsidesdehradun.com/",
    github: "https://github.com/Rahul-verma28/bsides-dehradun",
    skills: ["Next.js", "Tailwind CSS", "Webpack", "Performance Optimization"],
  },
  {
    title: "YouTube Clone",
    description: "YouTube clone with video streaming, search functionality, and responsive design.",
    image: "/youtube.png",
    liveDemo: "https://yourownyoutube.netlify.app/",
    github: "https://github.com/Rahul-verma28/youtube",
    skills: ["React.js", "Tailwind CSS", "YouTube API", "Video Streaming"],
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
      <section className="px-4 sm:px-5">
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
                        as={Link}
                        href={project.github}
                        target="__blank"
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
