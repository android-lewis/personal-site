import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Element } from "react-scroll"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Navigation from "../components/navigation"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-slate-50 text-slate-600 font-sans antialiased flex min-h-screen flex-col lg:flex">
      <div className="w-full fixed top-0 left-0 z-20">
        <Navigation />
      </div>
      <div className="w-full flex flex-col mx-auto">
        <Element name="hero" className="min-h-screen w-full z-10 element">
          <Hero />
        </Element>
        <Element name="about" className="min-h-screen w-full element mb-4">
          <About />
        </Element>
        <Element name="experience" className="min-h-screen w-full py-4 element mb-4">
          <Experience />
        </Element>
        <Element name="projects" className="min-h-screen w-full element mb-4">
          <Projects />
        </Element>
        <section className="py-8 px-8 border-t border-border text-center text-slate-500">
          © {new Date().getFullYear()} Lewis Baston. Crafted with vibes and ☕
        </section>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Lewis Baston</title>