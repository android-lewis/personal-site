/**
 * Core type definitions for the Lewis Baston portfolio site.
 */

export interface Technology {
  label: string
  emoji?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: Technology[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
}

export interface NavLink {
  href: string
  label: string
  active?: boolean
}
