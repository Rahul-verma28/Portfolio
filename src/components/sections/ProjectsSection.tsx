"use client";
import React, { useState } from "react";
import { projects, type Project } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionReveal } from "@/components/ui/AnimatedText";
import { GridBackground } from "@/components/ui/GridBackground";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="relative pb-24 md:pb-32 overflow-hidden">
      <GridBackground variant="dots" className="absolute inset-0" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-violet-500 mb-3 tracking-wide uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
              A curated collection of projects that showcase my expertise in
              full-stack development, UI design, and modern web technologies.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
                featured
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <SectionReveal delay={0.2}>
              <div className="flex items-center gap-4 my-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
                  More Projects
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={idx + featuredProjects.length}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
