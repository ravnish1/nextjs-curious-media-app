/**
 * Shared TypeScript types and interfaces for Curious Media.
 */

// Navigation
export interface NavLink {
  name: string
  href: string
}

// Brand / Client logos
export interface Brand {
  name: string
  url?: string
  fallbackUrl?: string
}

// Team member
export interface TeamMember {
  name: string
  role: string
  image?: string
}

// Testimonial
export interface Testimonial {
  quote: string
  author: string
  company?: string
  avatar?: string
}

// Service / Feature card
export interface Service {
  title: string
  description: string
  icon?: string
}

// Process step
export interface ProcessStep {
  number: string
  title: string
  description: string
}

// Stats
export interface Stat {
  value: string
  label: string
  suffix?: string
}
