import type React from "react"
import "@/app/Amazon/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/Amazon/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio Hub",
  description: "Discover top professional talent across various fields",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </div>
  )
}
