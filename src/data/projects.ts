import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'ZPL Label Generator',
    description:
      'Go utility to generate Zebra Programming Language (ZPL) label files from Go structs and templates — useful for automating label printing workflows.',
    technologies: ['Go', 'ZPL'],
    link: 'https://github.com/android-lewis/zpl-gen',
  },
  {
    title: 'Note Taker (CLI)',
    description:
      'A simple command-line note taking application written in Go. Supports creating, listing and deleting notes — built to learn Go and ship a small developer tool.',
    technologies: ['Go', 'CLI'],
    link: 'https://github.com/android-lewis/note-taker',
  },
  {
    title: 'Final Year — Abstract Styler',
    description:
      'Final-year project: a web app that generates abstract art (DCGAN) and applies neural styling to uploaded images. Containerised with Docker for easy deployment.',
    technologies: ['Vue', 'Python', 'Machine Learning'],
    link: 'https://github.com/android-lewis/FinalYear',
  },
  {
    title: 'BarFlow Dispenser Controller',
    description:
      'Rust-based controller for an automated self-pour bar: flow control, Modbus communication and turbine flow-meter feedback. Designed to run in a containerised environment.',
    technologies: ['Rust', 'gRPC', 'Modbus'],
    link: 'https://github.com/android-lewis/barflow-dispenser-controller',
  },
]
