"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="relative max-w-screen-sm hidden md:block">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
