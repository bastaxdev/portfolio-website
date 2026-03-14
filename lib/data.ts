import type { Project, Skill } from '@/types'

export const projects: Project[] = []

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