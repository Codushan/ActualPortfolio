import { notFound } from "next/navigation"
import { ModeToggle } from "@/app/Youtube/components/mode-toggle"
import { SearchBar } from "@/app/Youtube/components/search-bar"
import { MainNav } from "@/app/Youtube/components/main-nav"
import { Button } from "@/app/Youtube/components/ui/button"
import { BellIcon, Share2Icon, ThumbsUpIcon } from "lucide-react"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profiles = [
    {
      id: "software-engineer",
      name: "Alex Morgan",
      title: "Software Engineer",
      views: "125K",
      subscribers: "15.2K",
      image: "/placeholder.svg?height=400&width=400",
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Full-stack developer specializing in React, Node.js, and cloud architecture. I create tutorials and deep dives into modern web development techniques, system design, and software engineering best practices.",
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
        {
          title: "TypeScript for React Developers",
          views: "24K",
          date: "3 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "CI/CD Pipeline Setup",
          views: "19K",
          date: "4 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "AWS Lambda Deep Dive",
          views: "22K",
          date: "5 months ago",
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
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Creative designer with expertise in user experience, interface design, and brand identity. My channel focuses on design principles, tools like Figma and Adobe XD, and creating user-centered digital experiences.",
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
        {
          title: "Figma Advanced Techniques",
          views: "19K",
          date: "3 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Responsive Design Principles",
          views: "21K",
          date: "4 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Typography in UI Design",
          views: "18K",
          date: "5 months ago",
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
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Structural engineer specializing in sustainable building design and urban infrastructure. I share insights on construction techniques, structural analysis, environmental considerations, and the future of civil engineering.",
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
        {
          title: "Earthquake Resistant Structures",
          views: "22K",
          date: "4 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Water Resource Management",
          views: "17K",
          date: "5 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Green Infrastructure Solutions",
          views: "20K",
          date: "6 months ago",
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
      banner: "/placeholder.svg?height=300&width=1200",
      description:
        "Experienced manager with expertise in agile methodologies, team leadership, and strategic planning. My content covers project management frameworks, leadership skills, and organizational strategies for businesses of all sizes.",
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
        {
          title: "Risk Management Strategies",
          views: "19K",
          date: "3 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Project Budgeting Essentials",
          views: "24K",
          date: "4 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
        {
          title: "Team Conflict Resolution",
          views: "21K",
          date: "5 months ago",
          thumbnail: "/placeholder.svg?height=180&width=320",
        },
      ],
    },
  ]

  const profile = profiles.find((p) => p.id === params.id)

  if (!profile) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <SearchBar />
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="w-full h-48 md:h-64 relative">
        <img
          src={profile.banner || "/placeholder.svg"}
          alt={`${profile.name} banner`}
          className="w-full h-full object-cover"
        />
      </div>

      <main className="container py-6">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <img
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background -mt-12 md:-mt-16 z-10"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-xl text-muted-foreground">{profile.title}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {profile.subscribers} subscribers • {profile.views} total views
            </p>
          </div>
          <div className="flex gap-2 self-start">
            <Button className="gap-2">
              <BellIcon className="h-4 w-4" />
              Subscribe
            </Button>
            <Button variant="outline" size="icon">
              <Share2Icon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-muted-foreground">{profile.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.videos.map((video, idx) => (
              <div
                key={idx}
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
                  <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-xs text-muted-foreground">
                      {video.views} views • {video.date}
                    </p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto">
                      <ThumbsUpIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
