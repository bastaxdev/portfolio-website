export const cvData = {
  personal: {
    name: "Bartłomiej Basta",
    title: "Junior Frontend Developer",
    subtitle: "Next.js · TypeScript · Supabase",
    location: "Kraków, Poland",
    email: "bastaxdev@gmail.com",
    phone: "+48 507 814 777",
    website: "bastaxdev.com",
    github: "github.com/bastaxdev",
    linkedin: "linkedin.com/in/bastaxdev",
    summary:
      "Frontend developer specializing in Next.js, TypeScript and Supabase. " +
      "Building production-grade apps with focus on performance and clean architecture.",
  },

  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & DB",
      items: ["Supabase", "PostgreSQL", "Node.js", "REST APIs"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vercel", "Figma", "Stripe"],
    },
    {
      category: "Languages",
      items: ["Polish (native)", "English (C1)", "Norwegian (B1)"],
    },
  ],

  experience: [
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "2021 – Present",
    highlights: [
      "Built invoicing SaaS (Invo) for Polish freelancers billing Norwegian clients – Next.js, Supabase, Stripe",
      // "Developed internal management system for metal construction company – route optimization, drag-and-drop scheduling",
      "Delivered kennel pricing calculator with complex pricing engine for a client",
    ],
  },
  {
    role: "Norwegian-Polish Translator",
    company: "Fundacja Głos Młodych · Internship",
    period: "2025",
    highlights: [
      "Translation of Norwegian texts to Polish and web content administration",
      "Published and managed translated articles as part of Scandinavian Studies internship at SWPS",
    ],
  },
  {
    role: "IT Technician Intern",
    company: "REWOLT · Apprenticeship",
    period: "2020",
    highlights: [
      "Hands-on IT apprenticeship as part of Technik Informatyk program",
      "System configuration and web-related tasks",
    ],
  },
],

  projects: [
    {
      name: "Invo",
      description:
        "Invoicing SaaS for Polish freelancers billing Norwegian clients. Bilingual PDF generation, Norwegian MVA/VAT logic, analytics dashboard. Test account: test@test.com / test",
      tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "React PDF"],
      url: "https://www.getinvo.app/",
      github: "https://github.com/bastaxdev/invo",
      highlight: true,
    },
    // {
    //   name: "Martikstal IMS",
    //   description:
    //     "Internal management system for a metal construction company. Real-time route optimization with OSRM, drag-and-drop scheduling, role-based access.",
    //   tech: ["Next.js", "Supabase", "Leaflet", "dnd-kit", "OSRM"],
    //   url: undefined,
    //   github: undefined,
    //   highlight: true,
    // },
    {
      name: "Norsk Arbeidsliv",
      description:
        "Interactive educational portal built as a B.A. thesis project. Features learning modules, cultural quiz, glossary and study materials.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      url: "norsk-arbeidsliv.vercel.app",
      github: null,
      highlight: false,
    },
    {
      name: "Kennel Pricing Calculator",
      description:
        "Custom pricing calculator for a kennel, built with Next.js and React. Complex pricing logic based on Excel formulas, user-friendly interface for staff to quickly generate accurate quotes.",
      tech: ["Next.js", "TypeScript", "React"],
      url: "https://martikstal-kalkulator-kojce.vercel.app/",
      github: null,
      highlight: false,
    },
  ],

  education: [
    {
      degree: "Scandinavian Studies – Norwegian specialization",
      school: "SWPS University, Kraków",
      period: "2022 – 2026",
      note: "Thesis: Norsk Arbeidsliv – interactive educational portal on Norwegian workplace culture (Next.js, React, TypeScript)",
    },
    {
      degree: "IT Technician (Technik Informatyk)",
      school: "ZSTIO, Limanowa",
      period: "2017 – 2021",
      note: "Qualifications: EE.08, EE.09",
    },
  ],
} as const;

export type CvData = typeof cvData;
