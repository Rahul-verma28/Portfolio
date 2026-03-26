"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/AnimatedText";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineCheckBadge,
  HiOutlinePaperAirplane,
  HiOutlineUser,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const contactCards = [
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: HiOutlineMapPin,
    title: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: HiOutlineCheckBadge,
    title: "Status",
    value: "Available for opportunities",
    href: null,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [honeypot, setHoneypot] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot
    if (honeypot) return;

    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-neutral-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`input-glow w-full rounded-xl border bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm pl-10 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 outline-none transition-all duration-300 ${
                        errors.name
                          ? "border-red-400 dark:border-red-500/50"
                          : "border-neutral-200 dark:border-neutral-800 focus:border-violet-500 dark:focus:border-violet-500"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <HiOutlineEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`input-glow w-full rounded-xl border bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm pl-10 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 outline-none transition-all duration-300 ${
                        errors.email
                          ? "border-red-400 dark:border-red-500/50"
                          : "border-neutral-200 dark:border-neutral-800 focus:border-violet-500 dark:focus:border-violet-500"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <HiOutlineChatBubbleBottomCenterText className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`input-glow w-full rounded-xl border bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm pl-10 pr-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 outline-none transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-400 dark:border-red-500/50"
                          : "border-neutral-200 dark:border-neutral-800 focus:border-violet-500 dark:focus:border-violet-500"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <HiOutlineCheckCircle className="h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-3 text-sm text-emerald-700 dark:text-emerald-400"
                  >
                    <HiOutlineCheckCircle className="h-4 w-4 flex-shrink-0" />
                    Thank you! I&apos;ll get back to you within 24 hours. Check
                    your inbox for a confirmation email.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-3 text-sm text-red-700 dark:text-red-400"
                  >
                    <HiOutlineExclamationTriangle className="h-4 w-4 flex-shrink-0" />
                    Something went wrong. Please try emailing me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </SectionReveal>

          {/* Right sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card, idx) => (
              <SectionReveal key={card.title} delay={0.2 + idx * 0.1}>
                <div className="rounded-xl border border-neutral-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl p-5 group hover:border-violet-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                        {card.title}
                      </h3>
                      {card.href ? (
                        <Link
                          href={card.href}
                          className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                        >
                          {card.value}
                        </Link>
                      ) : (
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {card.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}

            {/* Social links */}
            <SectionReveal delay={0.5}>
              <div className="rounded-xl border border-neutral-200/60 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl p-5">
                <h3 className="font-semibold text-neutral-900 dark:text-white text-sm mb-3">
                  Connect with me
                </h3>
                <div className="flex items-center gap-3">
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-blue-600 hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500/30 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-violet-600 hover:border-violet-500/30 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-200"
                    aria-label="Email"
                  >
                    <HiOutlineEnvelope className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
