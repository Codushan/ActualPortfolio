import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/Netflix/uiNetflix/button"
import { ThemeToggle } from "@/app/Netflix/compNetflix/theme-toggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover:bg-red-600/20">
            <Link href="/theme/netflix">
              <ArrowLeft className="h-5 w-5 text-red-600" />
              <span className="sr-only">Back to profiles</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-red-600 tracking-tight">PORTFOLIX</h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white tracking-tight">About This Portfolio</h2>

          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to Portfolix, a Netflix-inspired portfolio platform showcasing professionals from various fields.
                This project demonstrates how a familiar interface can be adapted to present professional information in
                an engaging and intuitive way.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-500">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  Netflix-inspired profile selection screen
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  Dark and light theme toggle
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  Responsive design for all devices
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  Custom color themes for each profession
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                  Detailed portfolio pages for each professional
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-500">Technology Stack</h3>
              <p className="text-gray-300 leading-relaxed">
                This portfolio website is built with Next.js, React, and Tailwind CSS. It uses the App Router for
                navigation and server components for improved performance. The theme switching is implemented using the
                next-themes library.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-500">Customization</h3>
              <p className="text-gray-300 leading-relaxed">
                The portfolio is fully customizable. You can easily add more profiles, change the color schemes, or modify
                the content structure to fit your specific needs.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-red-500">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                If you're interested in using this template for your own portfolio or have any questions, feel free to
                reach out!
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Portfolix. All rights reserved.</p>
      </footer>
    </div>
  )
}
