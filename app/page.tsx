"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import Terminal from "@/components/terminal"

export default function Home() {
  const [isTerminalMode, setIsTerminalMode] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const terminalParam = searchParams.get("terminal")
    if (terminalParam === "1") {
      setIsTerminalMode(true)
    }
  }, [searchParams])

  const toggleTerminalMode = () => {
    setIsTerminalMode(!isTerminalMode)
  }

  const exitTerminalMode = () => {
    setIsTerminalMode(false)
    const currentUrl = new URL(window.location.href)
    currentUrl.searchParams.delete("terminal")
    router.replace(currentUrl.pathname + currentUrl.search)
  }

  if (isTerminalMode) {
    return <Terminal onExit={exitTerminalMode} />
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navigation onToggleTerminal={toggleTerminalMode} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <FloatingElements />
    </main>
  )
}
