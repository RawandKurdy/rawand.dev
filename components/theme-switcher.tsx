"use client"

import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Palette, Monitor, Laptop } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const getThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-4 w-4" />
      case "classic":
        return <Palette className="h-4 w-4" />
      case "xp":
        return <Monitor className="h-4 w-4" />
      case "macos":
        return <Laptop className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          {getThemeIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("classic")}>
          <Palette className="mr-2 h-4 w-4" />
          <span>Classic</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("xp")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>Windows XP</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("macos")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>macOS</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
