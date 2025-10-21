// components/ServicesSection.js
import React from "react";
import { FaCode, FaGlobe, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development using MERN stack with modern best practices and scalable architecture.",
    icon: FaCode,
  },
  {
    title: "Frontend Development",
    description:
      "Modern React.js applications with Next.js, TypeScript, and responsive design using Tailwind CSS.",
    icon: FaGlobe,
  },
  {
    title: "Backend Development",
    description:
      "Robust Node.js APIs with Express.js, database integration, and secure authentication systems.",
    icon: FaPaintBrush,
  },
];

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 light-mode-background-services dark:bg-none"
      id="services"
    >
      <section  className="text-gray-800 dark:text-white py-10 max-w-7xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">My Services</h2>
          <p className="text-lg mb-12">
            Offering a range of services to help you build a successful digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative items-center justify-center"
              >
                <div
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl dark:hover:shadow-violet-500"
                >
                  <service.icon className="w-12 h-12 mx-auto text-primary dark:text-primary-light mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-indigo-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
