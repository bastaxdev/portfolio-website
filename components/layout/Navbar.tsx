"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
  { label: "CV", href: "/cv" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
      style={
        scrolled
          ? { background: "var(--nav-bg)", borderColor: "var(--card-border)" }
          : {}
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/#hero"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          style={{ color: "var(--accent)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="22"
            height="22"
          >
            <rect width="32" height="32" rx="7" fill="#0a0a0f" />
            <polyline
              points="8,10 3,16 8,22"
              stroke="#8b7cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <polyline
              points="24,10 29,16 24,22"
              stroke="#8b7cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <line
              x1="19"
              y1="9"
              x2="13"
              y2="23"
              stroke="#ededed"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          bastaxdev
        </a>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="hidden sm:block">
              <a
                href={link.href}
                className="text-sm transition-colors hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
