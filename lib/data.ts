import type { Project, Skill } from '@/types'

export const projects: Project[] = [
  {
    id: 'invo',
    title: 'Invo',
    description:
      'Invoicing app for Polish freelancers working with Norwegian clients. Generates bilingual PL/NO PDFs with the correct VAT reverse charge notice.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    liveUrl: 'https://www.getinvo.app/',
    githubUrl: 'https://github.com/bastaxdev/invo',
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & DB',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Figma', 'Stripe', 'Sanity'],
  },
  {
    category: 'Languages',
    items: ['Polish (native)', 'English (C1)', 'Norwegian (B1)'],
  },
]