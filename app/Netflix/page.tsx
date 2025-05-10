import Link from "next/link"
import { ProfileCard } from "./compNetflix/profile-card"
import { Button } from "@/app/Netflix/uiNetflix/button"
import { ThemeToggle } from "@/app/Netflix/compNetflix/theme-toggle"
import AboutPage from "./About/page"
import { ThemeSwitcher } from "./compNetflix/theme-switch"

// Define ProfileCard component since it appears to be missing

export default function Netflix() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-red-600">PORTFOLIX</h1>
        <ThemeSwitcher />
        <ThemeToggle />
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-medium mb-6">Who's portfolio would you like to view?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProfileCard
              name="Software Engineer"
              image="/placeholder.svg?height=250&width=250"
              href="/Netflix/profile/software-engineer"
              color="bg-red-600"
            />
            <ProfileCard
              name="Designer"
              image="/placeholder.svg?height=250&width=250"
              href="/Netflix/profile/designer"
              color="bg-blue-600"
            />
            <ProfileCard
              name="Civil Engineer"
              image="/placeholder.svg?height=250&width=250"
              href="/Netflix/profile/civil-engineer"
              color="bg-green-600"
            />
            <ProfileCard
              name="Management"
              image="/placeholder.svg?height=250&width=250"
              href="/Netflix/profile/management"
              color="bg-purple-600"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="mx-auto">
            <Link href="/Netflix/About">About This Portfolio</Link>
          </Button>
        </div>
      </main>
      <footer className="container mx-auto py-6 px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolix. All rights reserved.</p>
      </footer>
    </div>
  )
}