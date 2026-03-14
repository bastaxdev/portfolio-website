"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/bastaxdev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/bastaxdev",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:bastaxdev@gmail.com", label: "Email" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,124,246,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-4 text-sm font-medium tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        Junior Developer
      </motion.p>

      <motion.h1
        custom={0.15}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
        style={{ color: "var(--text-primary)" }}
      >
        Hi, I'm <span style={{ color: "var(--accent)" }}>Bartek</span>
      </motion.h1>

      <motion.p
        custom={0.3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-10 max-w-xl text-lg leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        I build modern web applications with{" "}
        <span style={{ color: "var(--text-primary)" }}>Next.js</span>,{" "}
        <span style={{ color: "var(--text-primary)" }}>TypeScript</span> and{" "}
        <span style={{ color: "var(--text-primary)" }}>Supabase</span>. Based in
        Kraków — open to remote & Norwegian-facing roles.
      </motion.p>

      <motion.div
        custom={0.45}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-14 flex items-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          style={{ background: "var(--accent)" }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full px-6 py-3 text-sm font-semibold transition-colors"
          style={{
            border: "1px solid var(--card-border)",
            color: "var(--text-muted)",
          }}
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        custom={0.6}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex items-center gap-5"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="rounded-full p-3 transition-all"
            style={{
              border: "1px solid var(--card-border)",
              color: "var(--text-muted)",
            }}
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>

      <motion.div
        custom={0.9}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown
          size={20}
          className="animate-bounce"
          style={{ color: "var(--text-faint)" }}
        />
      </motion.div>
    </section>
  );
}
