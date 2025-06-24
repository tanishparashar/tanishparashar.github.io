"use client"

import { useState, useEffect } from "react"
import { Github, Mail, Linkedin, ExternalLink, Menu, X, Code, Smartphone, Cpu, Bot, Zap } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "MERN Stack", icon: Code, description: "MongoDB, Express, React, Node.js" },
    { name: "React Native", icon: Smartphone, description: "Cross-platform mobile development" },
    { name: "Expo", icon: Smartphone, description: "React Native development platform" },
    { name: "Rust", icon: Cpu, description: "Systems programming language" },
    { name: "AI / Agentic AI", icon: Bot, description: "Artificial Intelligence solutions", isLearning: true },
  ]

  const projects = [
    {
      title: "Rate Limiting Microservice",
      description:
        "A multi-tenant, multi-algorithm rate limiting microservice built in Rust, allowing custom rate limits per API via request headers.",
      tech: ["Rust", "Microservices", "Rate Limiting"],
      link: "https://github.com/tanishparashar/rate-limiter-final",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "React & FastAPI Starter Kit",
      description:
        "A starter web application combining a React frontend with a FastAPI backend, using SQLAlchemy for DB interactions and Pydantic for validation, designed to boost Agentic AI projects.",
      tech: ["React", "FastAPI", "Python", "SQLAlchemy"],
      link: "https://github.com/tanishparashar/Fast-api-react-starter",
      gradient: "from-blue-400 to-purple-500",
    },
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/tanishparashar" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/tanish-parashar-2b727221b" },
    { name: "Email", icon: Mail, url: "mailto:parashartanish22@gmail.com" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-amber-50/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Tanish Parashar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-800 hover:text-orange-700 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-amber-100/95 backdrop-blur-sm rounded-lg mt-2 p-4">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-amber-800 hover:text-orange-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-200/30"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent">
                Tanish Parashar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8">Software Engineer</p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-amber-700">Problem solving gives me a thrill, and my code is my ego</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-amber-100/80 backdrop-blur-sm rounded-full hover:bg-amber-200/80 transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-6 h-6 text-amber-700 group-hover:text-orange-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-amber-50/80 backdrop-blur-sm rounded-xl p-6 hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill.isLearning && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Currently Learning
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">{skill.name}</h3>
                </div>
                <p className="text-amber-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-amber-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-amber-50/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-200/50 text-orange-700 rounded-full text-sm border border-orange-300/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 group"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-amber-800 leading-relaxed">
              Feel free to reach out if you'd like to collaborate on a project, have a question, or just want to
              connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:parashartanish22@gmail.com"
              className="group bg-amber-50/80 backdrop-blur-sm rounded-xl p-6 hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50"
            >
              <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-amber-900 font-semibold mb-2">Email</h3>
              <p className="text-amber-700 text-sm break-all">parashartanish22@gmail.com</p>
            </a>

            <a
              href="https://github.com/tanishparashar"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-50/80 backdrop-blur-sm rounded-xl p-6 hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50"
            >
              <Github className="w-8 h-8 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-amber-900 font-semibold mb-2">GitHub</h3>
              <p className="text-amber-700 text-sm">@tanishparashar</p>
            </a>

            <a
              href="https://x.com/ParasharTanish3"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-50/80 backdrop-blur-sm rounded-xl p-6 hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50"
            >
              <div className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-xl font-bold">𝕏</span>
              </div>
              <h3 className="text-white font-semibold mb-2">X (Twitter)</h3>
              <p className="text-gray-400 text-sm">@ParasharTanish3</p>
            </a>

            <a
              href="https://www.linkedin.com/in/tanish-parashar-2b727221b"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-50/80 backdrop-blur-sm rounded-xl p-6 hover:bg-amber-100/80 transition-all duration-300 hover:scale-105 border border-amber-200/50"
            >
              <Linkedin className="w-8 h-8 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-amber-900 font-semibold mb-2">LinkedIn</h3>
              <p className="text-amber-700 text-sm">Tanish Parashar</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-amber-200/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-700">© 2025 Tanish Parashar. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
