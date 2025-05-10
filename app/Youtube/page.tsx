import Link from "next/link"
import { ModeToggle } from "@/app/Youtube/components/mode-toggle"
import { ProfileCard } from "@/app/Youtube/components/profile-card"
import { SearchBar } from "@/app/Youtube/components/search-bar"
import { MainNav } from "@/app/Youtube/components/main-nav"
import { ThemeSwitcher } from "./components/theme-switch"

export default function Home() {
  const profiles = [
    {
      id: "software-engineer",
      name: "Alex Morgan",
      title: "Software Engineer",
      views: "125K",
      subscribers: "15.2K",
      image: "/placeholder.svg?height=400&width=400",
      description: "Full-stack developer specializing in React, Node.js, and cloud architecture.",
      videos: [
        {
          title: "Building Scalable APIs with Node.js",
          views: "45K",
          date: "2 weeks ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "React Performance Optimization",
          views: "32K",
          date: "1 month ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Microservices Architecture Explained",
          views: "28K",
          date: "2 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
      ],
    },
    {
      id: "designer",
      name: "Samantha Lee",
      title: "UI/UX Designer",
      views: "98K",
      subscribers: "12.5K",
      image: "/placeholder.svg?height=400&width=400",
      description: "Creative designer with expertise in user experience, interface design, and brand identity.",
      videos: [
        {
          title: "Design Systems That Scale",
          views: "38K",
          date: "3 weeks ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "UX Research Methods",
          views: "27K",
          date: "1 month ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Color Theory for Digital Products",
          views: "22K",
          date: "2 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
      ],
    },
    {
      id: "civil-engineer",
      name: "David Chen",
      title: "Civil Engineer",
      views: "87K",
      subscribers: "9.8K",
      image: "/placeholder.svg?height=400&width=400",
      description: "Structural engineer specializing in sustainable building design and urban infrastructure.",
      videos: [
        {
          title: "Sustainable Building Materials",
          views: "32K",
          date: "1 week ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Bridge Design Fundamentals",
          views: "25K",
          date: "1 month ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Urban Planning Challenges",
          views: "19K",
          date: "3 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
      ],
    },
    {
      id: "management",
      name: "Priya Sharma",
      title: "Project Manager",
      views: "110K",
      subscribers: "13.7K",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Experienced manager with expertise in agile methodologies, team leadership, and strategic planning.",
      videos: [
        {
          title: "Agile Project Management",
          views: "42K",
          date: "2 weeks ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Leading Remote Teams",
          views: "35K",
          date: "1 month ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Stakeholder Communication",
          views: "22K",
          date: "2 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <SearchBar />
            <ThemeSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container py-6 md:py-12">
        <section className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Featured Professionals</h1>
          <p className="text-muted-foreground mb-8">
            Explore our curated collection of industry experts sharing their knowledge and experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Trending Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profiles.flatMap((profile) =>
              profile.videos.slice(0, 1).map((video, idx) => (
                <Link
                  href={`/profile/${profile.id}`}
                  key={`${profile.id}-${idx}`}
                  className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.views} views
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-3">
                      <img
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {video.views} views • {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )),
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
