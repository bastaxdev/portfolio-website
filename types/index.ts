export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  category: string
  items: string[]
}