"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { useTheme } from "@/lib/theme-context"

export function Hero() {
  const { theme } = useTheme()

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getThemeGradients = () => {
    switch (theme) {
      case "dark":
        return {
          background: "bg-gradient-to-br from-primary/5 via-background to-accent/5",
          profileGradient: "from-primary to-accent",
          textGradient: "from-primary to-accent",
        }
      case "classic":
        return {
          background: "bg-gradient-to-br from-primary/5 via-background to-accent/5",
          profileGradient: "from-primary to-accent",
          textGradient: "from-primary to-accent",
        }
      default:
        return {
          background: "bg-gradient-to-br from-primary/5 via-background to-accent/5",
          profileGradient: "from-primary to-accent",
          textGradient: "from-primary to-accent",
        }
    }
  }

  const gradients = getThemeGradients()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 ${gradients.background}`} />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-lg"
          animate={{
            y: [-6, 6, -6],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/5 rounded-full backdrop-blur-sm border border-accent/10"
          animate={{
            y: [-8, 8, -8],
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-gentle-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-gentle-float" />
      </div>

      <div className="relative z-10 section-spacing text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradients.profileGradient} rounded-full p-1 animate-subtle-glow`}
            >
              <img
                src={personalInfo.profileImage || "/placeholder.svg"}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover bg-background shadow-lg"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r ${gradients.textGradient} bg-clip-text text-transparent leading-tight`}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Badge variant="secondary" className="elegant-button text-sm px-4 py-2 font-medium">
                {personalInfo.tagline}
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2 font-medium border-primary/20">
                {personalInfo.tagline2}
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2 font-medium border-primary/20">
                {personalInfo.location}
              </Badge>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary hover:text-primary/80 transition-all duration-300 font-medium text-lg hover:scale-105"
            >
              {personalInfo.email}
            </a>
            <div className="hidden sm:block w-2 h-2 bg-primary/30 rounded-full" />
            <a
              href={`https://${personalInfo.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all duration-300 font-medium text-lg inline-flex items-center gap-2 hover:scale-105"
            >
              {personalInfo.blog}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" onClick={scrollToAbout} className="elegant-button group text-lg px-8 py-4">
              Learn More
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="elegant-button bg-transparent text-lg px-6 py-4 border-primary/30 hover:border-primary/50"
              >
                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="elegant-button bg-transparent text-lg px-6 py-4 border-primary/30 hover:border-primary/50"
              >
                <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
