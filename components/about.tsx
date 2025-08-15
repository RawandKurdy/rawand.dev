"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Network, Code, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { aboutInfo, personalInfo } from "@/lib/data"
import { useTheme } from "@/lib/theme-context"

export function About() {
  const { theme } = useTheme()
  const interestIcons = [Network, Brain, Code, Zap]

  const getThemeBackground = () => {
    switch (theme) {
      case "dark":
        return "bg-muted/20"
      case "classic":
        return "bg-muted/40"
      default:
        return "bg-muted/30"
    }
  }

  return (
    <section id="about" className={`py-20 ${getThemeBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{aboutInfo.bio}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Areas of Interest</h3>
            <div className="grid gap-6">
              {aboutInfo.interests.map((interest, index) => {
                const IconComponent = interestIcons[index]
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{interest.title}</h4>
                            <p className="text-muted-foreground text-sm">{interest.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Skills & Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {aboutInfo.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Background</h3>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">{aboutInfo.education.university}</h4>
                      <p className="text-muted-foreground">{aboutInfo.education.degree}</p>
                      <p className="text-sm text-muted-foreground">
                        {aboutInfo.education.period} • {aboutInfo.education.achievement}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground">
                        {personalInfo.blogDivText}{" "}
                        <a
                          href={`https://${personalInfo.blog}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          {personalInfo.blog}
                        </a>
                        !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
