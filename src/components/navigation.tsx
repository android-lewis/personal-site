import React from 'react'
import { Navbar01, Navbar01NavLink } from './ui/shadcn-io/navbar-01'

/**
 * Navigation Component
 * Main navigation bar with smooth scroll links to different sections.
 */
const Navigation = () => {
  const navigationLinks: Navbar01NavLink[] = [
      { href: 'hero', label: 'Home', active: true },
      { href: 'about', label: 'About' },
      { href: 'experience', label: 'Experience' },
      { href: 'projects', label: 'Projects' },
    ]

  return <Navbar01 navigationLinks={navigationLinks} />
}

export default Navigation
