import type React from "react"
import "@/app/Youtube/globals.css"
import { ThemeProvider } from "@/app/Youtube/components/theme-provider"

export const metadata = {
  title: "Portfolio Hub",
  description: "A YouTube-inspired portfolio showcasing professionals from different fields",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="theme-transition">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
