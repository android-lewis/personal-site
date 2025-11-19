import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../data/experiences'
import { ANIMATION_VARIANTS } from '../animations/variants'

const Experience = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 overflow-hidden">
      <motion.div
        className="max-w-5xl"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-slate-600"
          variants={ANIMATION_VARIANTS.itemLeftSlide}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="border-l-2 border-accent pl-6"
              variants={ANIMATION_VARIANTS.itemLeftSlide}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <motion.h3
                className="text-2xl font-bold text-indigo-600 mb-1"
              >
                {exp.title}
              </motion.h3>
              <p className="text-slate-600 mb-4">{exp.company}</p>
              <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
              <p className="text-lg text-slate-500 mb-4 leading-relaxed">{exp.description}</p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={ANIMATION_VARIANTS.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {exp.technologies.map((tech, i) => (
                  <motion.button
                    key={tech.label}
                    type="button"
                    aria-label={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    viewport={{ once: true }}
                    className={
                      `group relative flex items-center gap-2 select-none rounded-full px-3 py-1.5 transition-all ` +
                      `outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ` +
                      `backdrop-blur-sm bg-slate-50 border border-slate-600/20 ` +
                      `hover:border-slate-600/10` +
                      `hover:shadow-lg hover:shadow-slate-900/20 ` +
                      `text-sm font-medium text-slate-600`
                    }
                  >
                    <motion.span
                      aria-hidden
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ` +
                        `bg-linear-to-tr from-slate-50/20 to-slate-100/10 `}
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-sm lg:text-md">{tech.emoji}</span>
                    </motion.span>

                    <span className="whitespace-nowrap">{tech.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience