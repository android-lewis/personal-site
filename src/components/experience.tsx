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
          className="text-4xl font-bold mb-12 text-foreground"
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
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-foreground mb-1"
                whileHover={{ color: "#00ff88" }}
              >
                {exp.title}
              </motion.h3>
              <p className="text-accent mb-4">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
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
                    custom={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={
                      `group relative flex items-center gap-2 select-none rounded-full px-3 py-1.5 transition-all ` +
                      `transform hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0 ` +
                      `outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ` +
                      `backdrop-blur-sm bg-black ` +
                      `border border-black hover:border-transparent ` +
                      `hover:shadow-lg hover:shadow-gray-500/20 ` +
                      `text-sm font-medium text-neutral-100`
                    }
                  >
                    <motion.span
                      aria-hidden
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ` +
                        `bg-gradient-to-tr from-cyan-500/20 to-emerald-400/10 ring-1 ring-white/5 ` +
                        `group-hover:scale-105 transition-transform`}
                      whileHover={{ rotate: 20 }}
                    >
                      <span className="text-[14px]">{tech.emoji}</span>
                    </motion.span>

                    <span className="whitespace-nowrap">{tech.label}</span>

                    <motion.span
                      className={
                        `ml-2 inline-block h-1.5 w-1.5 rounded-full transition-opacity ` +
                        `opacity-50 group-hover:opacity-100 bg-gradient-to-r from-cyan-400 to-blue-400`
                      }
                      aria-hidden
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    />
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