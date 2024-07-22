// components/ServicesSection.js
import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and high-performance websites using the latest technologies.",
    icon: FaCode,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating seamless and engaging mobile applications for iOS and Android.",
    icon: FaMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly and visually appealing interfaces for a better user experience.",
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
      className="relative flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 "
    >
      <section id="services" className="  text-gray-800 dark:text-white py-10 max-w-screen-lg mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">My Services</h2>
          <p className="text-lg mb-12">
            Offering a range of services to help you build a successful digital
            presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
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
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <service.icon className="w-12 h-12 mx-auto text-primary dark:text-primary-light mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
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