"use client"

import { useTheme } from "next-themes"
import { Button } from "@/app/Youtube/components/ui/button"
import { Wand2 } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsAnimating(true)

    // Change theme immediately but animations will still play
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Create sparkle effect
    createSparkles()

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  const createSparkles = () => {
    const button = document.getElementById("theme-toggle-button")
    if (!button) return

    const buttonRect = button.getBoundingClientRect()
    const sparkleContainer = document.getElementById("sparkle-container")
    if (!sparkleContainer) return

    // Create multiple sparkles
    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement("div")
      sparkle.className = "sparkle"

      // Random position around the button
      const angle = Math.random() * Math.PI * 2
      const distance = 30 + Math.random() * 60
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      // Set sparkle styles
      sparkle.style.left = `calc(50% + ${x}px)`
      sparkle.style.top = `calc(50% + ${y}px)`
      sparkle.style.animationDelay = `${Math.random() * 0.2}s`
      sparkle.style.animationDuration = `${0.5 + Math.random() * 0.5}s`

      // Add to container
      sparkleContainer.appendChild(sparkle)

      // Remove after animation completes
      setTimeout(() => {
        sparkle.remove()
      }, 1000)
    }
  }

  if (!mounted) return null

  return (
    <div className="relative">
      <div id="sparkle-container" className="absolute inset-0 pointer-events-none overflow-hidden" />
      <Button
        id="theme-toggle-button"
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={cn(
          "relative overflow-hidden transition-all duration-500",
          isAnimating && "animate-wiggle",
          theme === "dark" ? "bg-slate-800 text-slate-200" : "bg-amber-50 text-amber-900",
        )}
      >
        <Wand2
          className={cn("h-[1.2rem] w-[1.2rem] transition-all duration-500", isAnimating && "animate-spin-slow")}
        />
        <span className="sr-only">Toggle theme</span>

        {/* Magic circle effect */}
        <span
          className={cn(
            "absolute inset-0 rounded-full opacity-0 transition-all duration-1000",
            isAnimating && "animate-magic-circle",
            theme === "dark" ? "bg-purple-500/20" : "bg-amber-300/30",
          )}
        />

        {/* Glow effect */}
        <span
          className={cn(
            "absolute inset-0 rounded-full opacity-0 transition-all duration-700",
            isAnimating && "opacity-100 scale-150",
            theme === "dark" ? "bg-purple-500/10" : "bg-amber-300/20",
          )}
        />
      </Button>
    </div>
  )
}
