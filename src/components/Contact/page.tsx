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
      <section className="text-gray-800 dark:text-white max-w-screen-lg mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-500">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out to me or connect with me on social media.
          </p>
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
