import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Star,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"

import { Button } from "@/app/Amazon/components/ui/button"
import { Badge } from "@/app/Amazon/components/ui/badge"
import { Progress } from "@/app/Amazon/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/Amazon/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/Amazon/components/ui/card"
import { Footer } from "@/app/Amazon/components/footer"
import { ThemeToggle } from "@/app/Amazon/components/theme-toggle"

const profiles = {
  "software-engineer": {
    name: "Alex Johnson",
    title: "Software Engineer",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 127,
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    experience: "8+ years",
    about:
      "Experienced software engineer with a passion for building scalable web applications. Specialized in React, Node.js, and cloud infrastructure. I've worked with startups and enterprise companies to deliver high-quality software solutions.",
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "AWS", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Docker", level: 70 },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and user authentication.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Real-time Chat Application",
        description:
          "Developed a real-time chat application using Socket.io, React, and Express. Features include private messaging, group chats, and file sharing.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Task Management System",
        description:
          "Created a task management system with drag-and-drop functionality using React DnD. Integrated with a RESTful API for data persistence.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2015",
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        institution: "University of California, Berkeley",
        year: "2013",
      },
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer",
      "MongoDB Certified Developer",
    ],
  },
  designer: {
    name: "Sophia Chen",
    title: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 93,
    location: "New York, NY",
    email: "sophia.chen@example.com",
    phone: "+1 (555) 234-5678",
    experience: "6+ years",
    about:
      "Creative UI/UX designer with a strong background in creating intuitive and visually appealing user interfaces. I combine design thinking with user research to create experiences that delight users and meet business goals.",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "User Research", level: 80 },
      { name: "Prototyping", level: 85 },
      { name: "Interaction Design", level: 75 },
    ],
    projects: [
      {
        title: "Banking App Redesign",
        description:
          "Redesigned a banking application to improve user experience and increase engagement. Conducted user research and usability testing to validate design decisions.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "E-learning Platform",
        description:
          "Designed an e-learning platform with a focus on accessibility and engagement. Created a design system to ensure consistency across the platform.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Health Tracking App",
        description:
          "Designed a health tracking app that helps users monitor their fitness goals. Created user flows, wireframes, and high-fidelity mockups.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    education: [
      {
        degree: "Master of Fine Arts in Design",
        institution: "Rhode Island School of Design",
        year: "2017",
      },
      {
        degree: "Bachelor of Arts in Graphic Design",
        institution: "Parsons School of Design",
        year: "2015",
      },
    ],
    certifications: [
      "Certified User Experience Professional",
      "Google UX Design Certificate",
      "Interaction Design Foundation Certification",
    ],
  },
  "civil-engineer": {
    name: "Michael Rodriguez",
    title: "Civil Engineer",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 85,
    location: "Chicago, IL",
    email: "michael.rodriguez@example.com",
    phone: "+1 (555) 345-6789",
    experience: "10+ years",
    about:
      "Experienced civil engineer specializing in structural design and project management. I have worked on residential, commercial, and infrastructure projects, ensuring they meet safety standards and client requirements.",
    skills: [
      { name: "Structural Design", level: 90 },
      { name: "AutoCAD", level: 95 },
      { name: "Project Planning", level: 85 },
      { name: "Site Inspection", level: 80 },
      { name: "Construction Management", level: 75 },
      { name: "Cost Estimation", level: 70 },
    ],
    projects: [
      {
        title: "Commercial Office Building",
        description:
          "Designed and oversaw the construction of a 15-story commercial office building. Ensured compliance with building codes and safety regulations.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Highway Bridge Renovation",
        description:
          "Led the renovation of a highway bridge, including structural assessment, design modifications, and construction oversight.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Residential Development",
        description:
          "Managed the civil engineering aspects of a 50-unit residential development, including site planning, drainage design, and utility coordination.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    education: [
      {
        degree: "Master of Science in Civil Engineering",
        institution: "University of Illinois at Urbana-Champaign",
        year: "2013",
      },
      {
        degree: "Bachelor of Science in Civil Engineering",
        institution: "Purdue University",
        year: "2011",
      },
    ],
    certifications: [
      "Professional Engineer (PE) License",
      "LEED Accredited Professional",
      "Project Management Professional (PMP)",
    ],
  },
  management: {
    name: "Emily Williams",
    title: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 142,
    location: "Austin, TX",
    email: "emily.williams@example.com",
    phone: "+1 (555) 456-7890",
    experience: "12+ years",
    about:
      "Seasoned project manager with a track record of successfully delivering complex projects on time and within budget. I excel at stakeholder communication, risk management, and team leadership.",
    skills: [
      { name: "Agile", level: 95 },
      { name: "Scrum", level: 90 },
      { name: "Risk Management", level: 85 },
      { name: "Stakeholder Communication", level: 90 },
      { name: "Budgeting", level: 80 },
      { name: "Team Leadership", level: 85 },
    ],
    projects: [
      {
        title: "Enterprise Software Implementation",
        description:
          "Led the implementation of an enterprise resource planning system for a Fortune 500 company. Managed a cross-functional team of 20+ members.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Digital Transformation Initiative",
        description:
          "Managed a digital transformation initiative for a healthcare provider, resulting in improved operational efficiency and patient satisfaction.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Product Launch Campaign",
        description:
          "Coordinated a product launch campaign for a tech startup, including marketing, sales, and customer support preparations.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    education: [
      {
        degree: "Master of Business Administration",
        institution: "University of Texas at Austin",
        year: "2011",
      },
      {
        degree: "Bachelor of Science in Business Administration",
        institution: "Texas A&M University",
        year: "2009",
      },
    ],
    certifications: ["Project Management Professional (PMP)", "Certified Scrum Master (CSM)", "PRINCE2 Practitioner"],
  },
}

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = profiles[params.slug as keyof typeof profiles]

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>Portfolio Hub</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button>Contact</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border">
                <div className="aspect-square">
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.name}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-muted-foreground">{profile.title}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{profile.rating}</span>
                    <span className="text-muted-foreground">({profile.reviews} reviews)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Available for hire</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{profile.experience} experience</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full">Contact</Button>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Technical expertise and proficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Academic background and qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground">{edu.year}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Professional certifications and credentials</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {profile.certifications.map((cert, index) => (
                      <li key={index} className="text-sm">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                  <CardDescription>Professional summary and background</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{profile.about}</p>
                </CardContent>
              </Card>

              <Tabs defaultValue="projects">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="projects" className="space-y-4 pt-4">
                  {profile.projects.map((project, index) => (
                    <Card key={index}>
                      <div className="md:grid md:grid-cols-[1fr_2fr] overflow-hidden">
                        <div className="aspect-video md:aspect-auto md:h-full">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="experience" className="space-y-4 pt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Senior {profile.title}</h3>
                            <Badge>Current</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">TechCorp Inc. • 2020 - Present</p>
                          <p className="text-sm">
                            Led multiple projects and mentored junior team members. Implemented best practices and
                            improved team productivity.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">{profile.title}</h3>
                          <p className="text-sm text-muted-foreground">InnovateTech • 2017 - 2020</p>
                          <p className="text-sm">
                            Worked on various projects and contributed to the company's growth. Collaborated with
                            cross-functional teams to deliver high-quality solutions.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Junior {profile.title}</h3>
                          <p className="text-sm text-muted-foreground">StartUp Solutions • 2015 - 2017</p>
                          <p className="text-sm">
                            Started career and gained valuable experience. Assisted senior team members and learned
                            industry best practices.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reviews" className="space-y-4 pt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-2 text-sm font-medium">Excellent service</span>
                          </div>
                          <p className="text-sm">
                            "{profile.name} exceeded our expectations. Their expertise and professionalism made our
                            project a success. Highly recommended!"
                          </p>
                          <p className="text-xs text-muted-foreground">John D. • Client • 2 months ago</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-2 text-sm font-medium">Outstanding work</span>
                          </div>
                          <p className="text-sm">
                            "Working with {profile.name} was a pleasure. They delivered high-quality work on time and
                            within budget. Will definitely work with them again."
                          </p>
                          <p className="text-xs text-muted-foreground">Sarah M. • Client • 3 months ago</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 text-muted-foreground" />
                            <span className="ml-2 text-sm font-medium">Great collaboration</span>
                          </div>
                          <p className="text-sm">
                            "{profile.name} is a skilled professional who communicates effectively and delivers quality
                            work. Would recommend for any project."
                          </p>
                          <p className="text-xs text-muted-foreground">Michael T. • Colleague • 5 months ago</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View all {profile.reviews} reviews
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Professionals</CardTitle>
                  <CardDescription>Other experts you might be interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {Object.entries(profiles)
                      .filter(([slug]) => slug !== params.slug)
                      .slice(0, 2)
                      .map(([slug, prof]) => (
                        <Link
                          key={slug}
                          href={`/profile/${slug}`}
                          className="flex items-center gap-4 rounded-lg border p-3 hover:bg-muted"
                        >
                          <Image
                            src={prof.image || "/placeholder.svg"}
                            alt={prof.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">{prof.name}</div>
                            <div className="text-sm text-muted-foreground">{prof.title}</div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
