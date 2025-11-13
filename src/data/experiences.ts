import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    title: 'Software Engineer II',
    company: 'Instil',
    period: 'Jun 2025 - Present',
    description:
      'Working across frontend, backend and platform teams to support and deliver resilient services, improve CI/CD pipelines, and ship features.',
    technologies: [
      { label: 'TypeScript', emoji: '🟦' },
      { label: 'C#', emoji: '🔷' },
      { label: 'Azure', emoji: '☁️' },
      { label: 'AWS', emoji: '🟠' },
      { label: 'Docker', emoji: '🐳' },
      { label: 'CI/CD', emoji: '🔁' },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Precision Automation Robotics Ltd',
    period: 'Feb 2024 - Jun 2025',
    description:
      'Developed control and automation software for industrial machinery, integrating PLCs, sensors and communication protocols to deliver reliable robotic solutions.',
    technologies: [
      { label: 'PLC', emoji: '🔧' },
      { label: 'GoLang', emoji: '🐹' },
      { label: 'OPC UA', emoji: '📡' },
      { label: 'Industrial Robotics', emoji: '🤖' },
      { label: 'Back-End Web Dev', emoji: '🕸️' },
    ],
  },
  {
    title: 'Software and Integrations Engineer',
    company: 'Viioni',
    period: 'May 2022 - Feb 2024',
    description:
      'Built and maintained integrations and software for industrial automation and warehouse systems - worked on C# services, stored procedures and systems integration for robotics and WMS platforms.',
    technologies: [
      { label: 'Industrial Robots', emoji: '🤖' },
      { label: 'Back-End Web Dev', emoji: '🕸️' },
      { label: 'Warehouse Management Systems', emoji: '📦' },
      { label: 'C#', emoji: '🔷' },
    ],
  },
]
