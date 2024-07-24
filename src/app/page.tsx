"use client";

import { About } from "@/components/About/page";
import { Contact } from "@/components/Contact/page";
import { Footer } from "@/components/Footer/page";
import { Hero } from "@/components/Hero/page";
import { Projects } from "@/components/Projects/page";
import { Services } from "@/components/Services/page";
import { Skills } from "@/components/Skills/page";
import BackToTop from "@/components/ui/backToTop";
import { Navbar } from "@/components/ui/navbar";
import ProgressBar from "react-scroll-progress-bar";


export default function Home() {
  return (
    <>
      <ProgressBar height="2" bgcolor="#7F00FF" duration="0.2" />
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
