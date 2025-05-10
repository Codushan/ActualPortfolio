import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Badge } from "@/app/Amazon/components/ui/badge"
import { Button } from "@/app/Amazon/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/Amazon/components/ui/card"

interface ProfileCardProps {
  name: string
  title: string
  image: string
  rating: number
  reviews: number
  skills: string[]
  slug: string
}

export function ProfileCard({ name, title, image, rating, reviews, skills, slug }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`Amazon/profile/${slug}`}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={300}
              className="object-cover transition-all hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Link href={`/profile/${slug}`} className="block">
            <h3 className="font-semibold text-lg">{name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
          </div>
          <div className="flex flex-wrap gap-1 pt-2">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Contact
        </Button>
        <Button size="sm">View Profile</Button>
      </CardFooter>
    </Card>
  )
}
