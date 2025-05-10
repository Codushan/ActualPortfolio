import Link from "next/link"
import { Search } from "lucide-react"
import { ThemeSwitcher } from "@/app/Main/compoMain/theme-switch"

import { ThemeToggle } from "@/app/Amazon/components/theme-toggle"
import { ProfileCard } from "@/app/Amazon/components/profile-card"
import { Footer } from "@/app/Amazon/components/footer"
import { Button } from "@/app/Amazon/components/ui/button"
import { Input } from "@/app/Amazon/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>Portfolio Hub</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search profiles..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <ThemeSwitcher />
            <Button>Contact</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover Top Professional Talent
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our curated selection of experts across various fields. Find the perfect professional for your
                  next project.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input type="text" placeholder="Search by skill or profession" className="max-w-lg flex-1" />
                  <Button type="submit">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Featured Professionals</h2>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            <ProfileCard
              name="Alex Johnson"
              title="Software Engineer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.9}
              reviews={127}
              skills={["React", "Node.js", "TypeScript", "AWS"]}
              slug="software-engineer"
            />
            <ProfileCard
              name="Sophia Chen"
              title="UI/UX Designer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.8}
              reviews={93}
              skills={["Figma", "Adobe XD", "Sketch", "User Research"]}
              slug="designer"
            />
            <ProfileCard
              name="Michael Rodriguez"
              title="Civil Engineer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.7}
              reviews={85}
              skills={["Structural Design", "AutoCAD", "Project Planning", "Site Inspection"]}
              slug="civil-engineer"
            />
            <ProfileCard
              name="Emily Williams"
              title="Project Manager"
              image="/placeholder.svg?height=300&width=300"
              rating={4.9}
              reviews={142}
              skills={["Agile", "Scrum", "Risk Management", "Stakeholder Communication"]}
              slug="management"
            />
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Recently Viewed</h2>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              Clear history
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            <ProfileCard
              name="Alex Johnson"
              title="Software Engineer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.9}
              reviews={127}
              skills={["React", "Node.js", "TypeScript", "AWS"]}
              slug="software-engineer"
            />
            <ProfileCard
              name="Sophia Chen"
              title="UI/UX Designer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.8}
              reviews={93}
              skills={["Figma", "Adobe XD", "Sketch", "User Research"]}
              slug="designer"
            />
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Recommended For You</h2>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            <ProfileCard
              name="Michael Rodriguez"
              title="Civil Engineer"
              image="/placeholder.svg?height=300&width=300"
              rating={4.7}
              reviews={85}
              skills={["Structural Design", "AutoCAD", "Project Planning", "Site Inspection"]}
              slug="civil-engineer"
            />
            <ProfileCard
              name="Emily Williams"
              title="Project Manager"
              image="/placeholder.svg?height=300&width=300"
              rating={4.9}
              reviews={142}
              skills={["Agile", "Scrum", "Risk Management", "Stakeholder Communication"]}
              slug="management"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
