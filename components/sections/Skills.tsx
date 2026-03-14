"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

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

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
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
          Stack
        </p>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Skills
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3
              className="mb-4 text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {skill.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {skill.items.map((item) => (
                <li key={item} className="text-sm text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
