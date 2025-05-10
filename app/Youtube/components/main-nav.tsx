import Link from "next/link"
import { Youtube } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Youtube className="h-6 w-6 text-red-500" />
        <span className="inline-block font-bold">Portfolio Hub</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="/"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/Youtube/profile/software-engineer"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Software
        </Link>
        <Link
          href="/Youtube/profile/designer"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Design
        </Link>
        <Link
          href="/Youtube/profile/civil-engineer"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Civil
        </Link>
        <Link
          href="/Youtube/profile/management"
          className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Management
        </Link>
      </nav>
    </div>
  )
}
