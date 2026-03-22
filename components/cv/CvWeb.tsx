"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import DownloadButton from "./DownloadButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section {...fadeUp(delay)} className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-1 h-5 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <h2
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function CvWeb() {
  const { personal, skills, experience, projects, education } = cvData;

  return (
    <div className="min-h-screen px-6 py-24 md:py-32">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,124,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <motion.p
            {...fadeUp(0.05)}
            className="text-xs tracking-[0.3em] uppercase mb-3 font-medium"
            style={{ color: "var(--accent)" }}
          >
            {personal.location}
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-6xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {personal.name}
          </motion.h1>
          <motion.p
            {...fadeUp(0.15)}
            className="text-xl mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            {personal.title}
          </motion.p>
          <motion.p
            {...fadeUp(0.2)}
            className="text-sm font-mono mb-6"
            style={{ color: "var(--accent)" }}
          >
            {personal.subtitle}
          </motion.p>
          <motion.p
            {...fadeUp(0.25)}
            className="leading-relaxed max-w-xl mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            {personal.summary}
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 text-sm">
            {[
              { label: personal.email, href: `mailto:${personal.email}` },
              { label: personal.website, href: `https://${personal.website}` },
              { label: personal.github, href: `https://${personal.github}` },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono transition-opacity hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <Section title="Skills" delay={0.35}>
          <div className="space-y-3">
            {skills.map((group) => (
              <div key={group.category} className="flex gap-4 items-start">
                <span
                  className="text-xs w-28 shrink-0 pt-1 font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "rgba(139,124,246,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects" delay={0.4}>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="relative pl-4"
                style={{
                  borderLeft: `2px solid ${project.highlight ? "var(--accent)" : "var(--card-border)"}`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.name}
                  </h3>
                  <div className="flex gap-3 text-xs font-mono shrink-0">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                        style={{ color: "var(--accent)" }}
                      >
                        ↗ live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                        style={{ color: "var(--accent)" }}
                      >
                        ↗ github
                      </a>
                    )}
                  </div>
                </div>
                <p
                  className="text-sm mb-2 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2 py-0.5 text-[10px] font-mono font-medium"
                      style={{
                        background: "rgba(139,124,246,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience" delay={0.45}>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.role}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-mono"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm pl-3 relative"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="absolute left-0"
                        style={{ color: "var(--accent)" }}
                      >
                        –
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education" delay={0.5}>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex justify-between items-start"
              >
                <div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-xs font-mono"
                    style={{ color: "var(--accent)" }}
                  >
                    {edu.school}
                  </p>
                  {edu.note && (
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {edu.note}
                    </p>
                  )}
                </div>
                <span
                  className="text-xs font-mono shrink-0 ml-4"
                  style={{ color: "var(--text-faint)" }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <DownloadButton />
        </motion.div>
      </div>
    </div>
  );
}
