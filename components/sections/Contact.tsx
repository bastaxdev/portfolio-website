"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

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
    transition: { staggerChildren: 0.1 },
  },
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bastaxdev@gmail.com",
    href: "mailto:bastaxdev@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bastaxdev",
    href: "https://github.com/bastaxdev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bastaxdev",
    href: "https://linkedin.com/in/bastaxdev",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
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
          Get in touch
        </p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h2>
        <p className="mx-auto max-w-md text-white/50">
          Open to junior developer roles, freelance projects and
          Norwegian-facing opportunities.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mx-auto flex max-w-lg flex-col gap-4"
      >
        {contactLinks.map(({ icon: Icon, label, value, href }) => (
          <motion.a
            key={label}
            href={href}
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(139,124,246,0.12)" }}
            >
              <Icon size={18} style={{ color: "var(--accent)" }} />
            </span>
            <div>
              <p className="text-xs text-white/40">{label}</p>
              <p className="text-sm font-medium">{value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
