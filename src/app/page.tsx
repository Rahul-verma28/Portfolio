'use client';

import { About } from "@/components/About/page";
import { Hero } from "@/components/Hero/page";
import { Projects } from "@/components/Projects/page";
import { Skills } from "@/components/Skills/page";
import { Navbar } from "@/components/ui/navbar";
import ProgressBar from "react-scroll-progress-bar"; 

export default function Home() {
  return (
    <>
      <ProgressBar height="4" bgcolor="#7F00FF" duration="0.2" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
