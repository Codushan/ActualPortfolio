"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import { useTheme } from "@/app/Main/compoMain/theme-provider"

export function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme()

  // Handle potential undefined theme (better error handling)
  const currentTheme = themeMode || "light" // Default to light if undefined
  
  const toggleMode = () => {
    try {
      setThemeMode(currentTheme === "light" ? "dark" : "light")
    } catch (error) {
      console.error("Failed to toggle theme:", error)
      // Fallback to light theme if there's an error
      setThemeMode("light")
    }
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleMode} 
      aria-label={`Toggle theme (current: ${currentTheme})`}
      className="hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {currentTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}