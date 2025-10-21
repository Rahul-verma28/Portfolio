import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import Link from "next/link";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 border-t-4"
      id="contact"
    >
      <section className="text-gray-800 dark:text-white max-w-7xl mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-500">Contact Me</h2>
          <p className="text-lg mb-6">
            Let's discuss your next project or collaboration opportunity. I'm always open to new challenges and learning experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">rahulverma281202@gmail.com</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Greater Noida, India</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-indigo-500 mb-2">Status</h3>
              <p className="text-gray-600 dark:text-gray-300">Available for opportunities</p>
            </div>
          </div>
          <div className="flex w-full max-w-sm items-center mx-auto space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <Link href="mailto: rahulverma281202@gmail.com" target="_blank">
              <Button type="submit">Mail me</Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
