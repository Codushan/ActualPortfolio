"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import { useTheme } from "@/app/Main/compoMain/theme-provider"

export function ModeToggle() {
  const { themeMode, setThemeMode } = useTheme()

  const toggleMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleMode} aria-label="Toggle theme">
      {themeMode === "light" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}
