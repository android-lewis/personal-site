import React from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '../animations/variants'

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-start px-8 overflow-hidden">
      <motion.div
        className="max-w-3xl"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-slate-600"
          variants={ANIMATION_VARIANTS.itemLeftSlide}
        >
          About
        </motion.h2>
        <motion.div className="space-y-6 text-lg text-slate-500 leading-relaxed">
          <motion.p variants={ANIMATION_VARIANTS.itemLeftSlide}>
            Hi, I'm Lewis - a software engineer passionate about building smart, efficient systems. I love designing and implementing solutions that make technology work seamlessly, whether that's through PLC's and robotics, or intuitive web applications and business software.
          </motion.p>
          <motion.p variants={ANIMATION_VARIANTS.itemLeftSlide}>
            I have hands-on experience in React, Golang, .NET, and SQL, I enjoy working across the stack to create scalable, maintainable, and impactful software. My background in industrial automation has given me a deep appreciation for reliability, precision, and elegant engineering - qualities I bring to every project I take on.
          </motion.p>
          <motion.p variants={ANIMATION_VARIANTS.itemLeftSlide}>
            When I'm not coding, I'm usually taking photographs, experimenting with side projects, or hiking in the great Irish weather.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
