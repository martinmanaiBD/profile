"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Martin Manai
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Full Stack Developer</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, modern
          design, and solving complex problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/martinmanaiBD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/martinmanai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:martinmanai96@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
