import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      id="#experiences"
    >
      <h1 className="text-4xl font-bold mb-3 text-indigo-500 my-9">
      Experiences
          </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-2">
        <motion.li
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
            <time className="font-mono italic">April 2025 - Present</time>
            <div className="text-lg font-black text-indigo-500 text-indigo-500">
              SDE Intern | Makunai Global
            </div>
            Built scalable CRM modules with Next.js/Tailwind achieving 45% UI responsiveness improvement.
            Implemented REST API integration and user authentication systems.
            Optimized Redux Toolkit usage resulting in 30% reduction in re-renders.
            Collaborated in Agile development environment using Git/GitHub for version control.
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
            <time className="font-mono italic">Jan 2024 - Apr 2024</time>
            <div className="text-lg font-black text-indigo-500">
              Frontend Developer Intern | BSides Dehradun
            </div>
            Developed conference website achieving 40% faster page loads through optimization.
            Created responsive UI components resulting in 35% increase in mobile engagement.
            Implemented Webpack optimization reducing bundle size by 30%.
            Collaborated with design team to ensure pixel-perfect implementation.
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
            <time className="font-mono italic">July 2024</time>
            <div className="text-lg font-black text-indigo-500">
              J.P. Morgan Software Engineering Job Simulation
            </div>
            Set up local development environment and fixed broken repository files.
            Implemented live data visualization using JPMorgan Chase's Perspective library.
            Created real-time graphs for financial data monitoring and trader analysis.
            Gained experience with enterprise-level development practices and tools.
          </div>
          <hr />
        </motion.li>
        <motion.li
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
            <time className="font-mono italic">May - July 2024</time>
            <div className="text-lg font-black text-indigo-500">
              Accenture North America - Development & Advanced Engineering Job Simulation
            </div>
            Supported client development team with growing codebase management challenges.
            Developed search functionality for interactive website using Java Spring Boot framework.
            Implemented automated CI/CD pipeline using Jenkins for code validation.
            Participated in Agile sprint planning and user story creation for team workload management.
          </div>
          <hr />
        </motion.li>
        {/* <motion.li
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
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
            <div className="text-lg font-black text-indigo-500">
              Apple Watch
            </div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </motion.li> */}
      </ul>
    </motion.div>
  );
};

export default Experiences;
