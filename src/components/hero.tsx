import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/shadcn-io/background-beams'
import { Link } from 'react-scroll'
import { ANIMATION_VARIANTS } from '../animations/variants'

const Hero = () => {
  return (
    <div className="relative">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-8 overflow-hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={ANIMATION_VARIANTS.itemBottomSlide}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <motion.span
                  className="text-accent font-mono block"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                >
                  Hey, I'm Lewis_
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="mb-8 space-y-4"
              variants={ANIMATION_VARIANTS.itemBottomSlide}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Software Engineer
              </p>
              <p className="font-mono">Belfast</p>
            </motion.div>

            <motion.div
              className="flex gap-4"
              variants={ANIMATION_VARIANTS.itemBottomSlide}
            >
              <Link
                to={'projects'}
                activeClass={'text-accent font-semibold pl-3'}
                smooth={true}
                duration={500}
              >
                <motion.button
                  className="px-8 py-3 border bg-accent text-accent-foreground rounded-lg font-semibold"
                  variants={ANIMATION_VARIANTS.button}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View my Work
                </motion.button>
              </Link>
              <motion.a
                href="mailto:lewis.baston@outlook.com"
                className="px-8 py-3 bg-black border border-accent text-neutral-100 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                variants={ANIMATION_VARIANTS.button}
                whileHover="hover"
                whileTap="tap"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default Hero