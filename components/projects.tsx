"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { projects, personalInfo, projectsPageData} from "@/lib/data"
import { Markdown } from "@/components/markdown"

export function Projects() {
  const getTypeColor = (type: string) => {
    const colors = {
      "AI/ML": "bg-primary/10 text-primary border-primary/20",
      "Web App": "bg-accent/10 text-accent border-accent/20",
      "Mobile App": "bg-secondary/10 text-secondary border-secondary/20",
      System: "bg-primary/15 text-primary border-primary/25",
      Educational: "bg-accent/15 text-accent border-accent/25",
      Concept: "bg-muted text-muted-foreground border-border",
    }
    return colors[type as keyof typeof colors] || colors["System"]
  }

  return (
    <section id="projects" className="section-spacing bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-4 h-4 bg-primary/5 rounded border border-primary/10"
          animate={{
            y: [-6, 6, -6],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-3 h-3 bg-accent/5 rounded-full border border-accent/10"
          animate={{
            scale: [1, 1.1, 1],
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-6 text-foreground">{projectsPageData.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {projectsPageData.shortText}{" "}
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="me"
              className="text-primary hover:text-primary/80 transition-all duration-300 font-medium hover:scale-105 inline-block"
            >
              {projectsPageData.linkLabel}
            </a>
            .
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative"
            >
              <Card className="elegant-card h-full group border-border/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-all duration-500"
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getTypeColor(project.type)} border font-medium`}>{project.type}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Markdown content={project.description} className="text-base" />

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 bg-muted/50 border-border/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className="pt-4"
                    style={{
                      display: "grid",
                      gridTemplateColumns: (() => {
                        const buttonCount = Object.values(project.links).filter(Boolean).length
                        if (buttonCount === 1) return "1fr"
                        if (buttonCount === 2) return "1fr 1fr"
                        if (buttonCount >= 3) return "1fr 1fr"
                        return "1fr"
                      })(),
                      gap: "0.5rem",
                    }}
                  >
                    {project.links.code && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="elegant-button bg-transparent border-primary/30 hover:border-primary/50 text-sm"
                      >
                        <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="elegant-button bg-transparent border-primary/30 hover:border-primary/50 text-sm"
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="elegant-button bg-transparent border-primary/30 hover:border-primary/50 text-sm"
                        style={{
                          gridColumn: Object.values(project.links).filter(Boolean).length >= 3 ? "1 / -1" : "auto",
                        }}
                      >
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
