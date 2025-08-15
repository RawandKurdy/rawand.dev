"use client"

import { useTheme } from "@/lib/theme-context"

export function FloatingElements() {
  const { theme } = useTheme()

  const getThemeStyles = () => {
    switch (theme) {
      case "dark":
        return {
          primary: "bg-blue-500/30 border-blue-400/50",
          secondary: "bg-purple-500/30 border-purple-400/50",
          accent: "bg-cyan-500/30 border-cyan-400/50",
        }
      case "classic":
        return {
          primary: "bg-amber-600/30 border-amber-500/50",
          secondary: "bg-red-600/30 border-red-500/50",
          accent: "bg-emerald-600/30 border-emerald-500/50",
        }
      default:
        return {
          primary: "bg-blue-400/30 border-blue-300/50",
          secondary: "bg-green-400/30 border-green-300/50",
          accent: "bg-yellow-400/30 border-yellow-300/50",
        }
    }
  }

  const styles = getThemeStyles()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className={`absolute top-20 left-10 w-24 h-24 rounded-full ${styles.primary} border-2 animate-float backdrop-blur-sm`}
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />

      <div
        className={`absolute top-40 right-20 w-20 h-20 ${styles.secondary} border-2 animate-pulse-glow rotate-45 backdrop-blur-sm`}
        style={{ animationDelay: "2s" }}
      />

      <div
        className={`absolute bottom-32 left-1/4 w-16 h-16 rounded-full ${styles.accent} border-2 animate-bounce-slow backdrop-blur-sm`}
        style={{ animationDelay: "4s" }}
      />

      <div
        className={`absolute top-1/3 right-10 w-12 h-12 ${styles.primary} border-2 animate-orbit backdrop-blur-sm`}
        style={{ animationDelay: "1s" }}
      />

      <div
        className={`absolute bottom-20 right-1/3 w-18 h-18 rounded-full ${styles.secondary} border-2 animate-pulse-glow backdrop-blur-sm`}
        style={{ animationDelay: "3s" }}
      />

      <div
        className={`absolute -top-10 -right-10 w-48 h-48 rounded-full ${styles.accent} opacity-20 animate-float border backdrop-blur-sm`}
        style={{ animationDelay: "0s", animationDuration: "12s" }}
      />

      <div
        className={`absolute -bottom-20 -left-20 w-72 h-72 ${styles.primary} opacity-15 rotate-12 animate-pulse-glow border backdrop-blur-sm`}
        style={{ animationDelay: "5s" }}
      />

      <div
        className={`absolute top-1/2 left-20 w-10 h-10 rounded-full ${styles.accent} border animate-bounce-slow`}
        style={{ animationDelay: "6s" }}
      />

      <div
        className={`absolute top-3/4 right-1/4 w-14 h-14 ${styles.secondary} border animate-float rotate-45`}
        style={{ animationDelay: "7s", animationDuration: "10s" }}
      />
    </div>
  )
}
