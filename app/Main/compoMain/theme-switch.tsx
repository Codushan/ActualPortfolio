"use client"
import { useRouter } from 'next/navigation';
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/Main/uiMain/dropdown-menu"
import { useTheme } from "@/app/Main/compoMain/theme-provider"

export function ThemeSwitcher() {
  const { themeStyle, setThemeStyle } = useTheme()
  const router = useRouter()

  const themeStyles = [
    { id: "Amazon", name: "Amazon" },
    { id: "Netflix", name: "Netflix" },
    { id: "Youtube", name: "YouTube" },
    { id: "Main", name: "Main" },
  ]

  const handleThemeChange = (styleId: string) => {
    // First update the theme context
    setThemeStyle(styleId);
    
    // Log for debugging
    console.log(`Navigating to /${styleId}`);
    
    // Use Next.js router for client-side navigation
    router.push(`/${styleId}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Theme</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Theme Style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {themeStyles.map((style) => (
            <DropdownMenuItem
              key={style.id}
              onClick={() => handleThemeChange(style.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              {style.name}
              {themeStyle === style.id && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}