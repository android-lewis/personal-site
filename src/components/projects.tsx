import React from 'react'
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { ANIMATION_VARIANTS } from "../animations/variants"

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 overflow-hidden">
      <motion.div
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-foreground"
          variants={ANIMATION_VARIANTS.itemLeftSlide}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-lg p-6 group cursor-pointer bg-background"
              variants={ANIMATION_VARIANTS.itemBottomSlide}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={ANIMATION_VARIANTS.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.3,
                    }}
                    className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
