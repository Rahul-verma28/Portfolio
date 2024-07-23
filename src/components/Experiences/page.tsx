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
      {/* <h2 className="text-3xl font-semibold my-6 text-gray-700 dark:text-gray-300">
        Experiences
      </h2> */}
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
            <time className="font-mono italic">Jan-Mar (2024)</time>
            <div className="text-lg font-black text-indigo-500 text-indigo-500">
              Bsides Dehradun
            </div>
            Collaborated with a team to develop the front end of the BSides
            Dehradun website. Utilized Next js and Tailwind to create responsive
            and interactive web pages. Implemented user-friendly interfaces
            ensuring seamless user experience across various devices. Worked
            closely with backend developers to integrate APIs and ensure data
            consistency. Participated in regular code reviews and team meetings
            to discuss project progress and improvements.
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
            <time className="font-mono italic">Oct-Nov (2023)</time>
            <div className="text-lg font-black text-indigo-500">
              Tech-A-Intern
            </div>
            I've successfully completed my internship in web development with
            Tech-A-Intern. Over the past few months, I've had the incredible
            opportunity to dive deep into the world of web development, honing
            my skills and gaining invaluable experience along the way. Grateful
            for the hands-on experience, mentorship, and opportunities to grow
            my skills in coding, design, and problem-solving.
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
            <time className="font-mono italic">July(2024)</time>
            <div className="text-lg font-black text-indigo-500">
              Software Engineering Job Simulation
            </div>
            I just completed J.P. Morgan's Software Engineering on Forage. In
            the simulation I: * Set up a local dev environment by downloading
            the necessary files, tools and dependencies. * Fixed broken files in
            the repository to make web application output correctly. * Used
            JPMorgan Chase’s open source library called Perspective to generate
            a live graph that displays a data feed in a clear and visually
            appealing way for traders to monitor.
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
            <time className="font-mono italic">May-July (2024)</time>
            <div className="text-lg font-black text-indigo-500">
              Accenture North America - Coding: Development & Advanced
              Engineering Job Simulation
            </div>
            I just completed Accenture North America's Coding: Development &
            Advanced Engineering on Forage. In the simulation I: -Completed a
            job simulation where I supported a client with a small development
            team overwhelmed by the growth of their code base. -Wrote a class to
            perform search on an interactive website in Java using the Spring
            Boot framework. -Set up automated builds using Jenkins to validate
            code changes on every push. -Managed the team's workload by
            preparing for a sprint and writing user stories in an Agile planning
            session.
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
