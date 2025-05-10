"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type ThemeStyle = "amazon" | "netflix" | "youtube" | "corporate"
type ThemeMode = "dark" | "light"

interface ThemeContextType {
  themeStyle: ThemeStyle
  themeMode: ThemeMode
  setThemeStyle: (style: ThemeStyle) => void
  setThemeMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>("corporate")
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark")

  useEffect(() => {
    // Apply theme classes to the document element
    const root = document.documentElement

    // Remove all theme style classes
    root.classList.remove("theme-amazon", "theme-netflix", "theme-youtube", "theme-corporate")

    // Add the current theme style class
    root.classList.add(`theme-${themeStyle}`)

    // Set dark/light mode
    if (themeMode === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [themeStyle, themeMode])

  return (
    <ThemeContext.Provider value={{ themeStyle, themeMode, setThemeStyle, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
