import Link from "next/link"
import { Button } from "@/app/Youtube/components/ui/button"

interface Profile {
  id: string
  name: string
  title: string
  views: string
  subscribers: string
  image: string
  description: string
  videos: {
    title: string
    views: string
    date: string
    thumbnail: string
  }[]
}

interface ProfileCardProps {
  profile: Profile
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Link
      href={`/Youtube/profile/${profile.id}`}
      className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-video relative">
        <img
          src={profile.videos[0].thumbnail || "/placeholder.svg"}
          alt={profile.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="text-white">
            <h3 className="font-bold">{profile.name}</h3>
            <p className="text-sm opacity-90">{profile.title}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-muted-foreground">{profile.subscribers} subscribers</p>
            <p className="text-xs text-muted-foreground">{profile.views} total views</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{profile.description}</p>
        <Button variant="secondary" size="sm" className="w-full">
          View Profile
        </Button>
      </div>
    </Link>
  )
}
