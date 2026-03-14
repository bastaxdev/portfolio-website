"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col rounded-2xl p-6 transition-colors"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <div className="flex shrink-0 gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              aria-label="GitHub"
              style={{ color: "var(--text-faint)" }}
              className="transition-colors hover:opacity-100"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              aria-label="Live"
              style={{ color: "var(--text-faint)" }}
              className="transition-colors hover:opacity-100"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p
        className="mb-6 flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              background: "rgba(139,124,246,0.12)",
              color: "var(--accent)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ComingSoonCard() {
  return (
    <motion.article
      variants={fadeUp}
      className="flex flex-col items-center justify-center rounded-2xl p-6 text-center"
      style={{ border: "1px dashed var(--card-border)" }}
    >
      <p
        className="mb-1 text-sm font-medium"
        style={{ color: "var(--text-faint)" }}
      >
        Coming soon
      </p>
      <p className="text-xs" style={{ color: "var(--text-faint)" }}>
        Project in progress
      </p>
    </motion.article>
  );
}

export default function Projects() {
  const placeholderCount = 6;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mb-16 text-center"
      >
        <p
          className="mb-3 text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Work
        </p>
        <h2
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          Projects
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <ComingSoonCard key={`placeholder-${i}`} />
        ))}
      </motion.div>
    </section>
  );
}
