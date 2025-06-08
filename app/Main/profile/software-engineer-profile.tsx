"use client"
import { useEffect, useState } from "react"
import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { Code, Server, Database, Globe, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/app/Main/uiMain/progress"
import { myData, sdeExp, civilData, sdeProjects } from "@/lib/data"
import { useScrollToContact } from "@/hooks/use-scroll-to-contact"
import { useDownload } from "@/hooks/use-download"

export function SoftwareEngineerProfile() {
  const { themeStyle } = useTheme()
  const scrollToContact = useScrollToContact()
  const { downloadResume } = useDownload()

  const skillsToDisplay = [
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "Figma", level: 80 },
    { name: "C++", level: 60 },
  ];

  const [animatedSkills, setAnimatedSkills] = useState(skillsToDisplay.map((skill) => ({ ...skill, animatedLevel: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedSkills((prev) => {
          const allComplete = prev.every((skill) => skill.animatedLevel >= skill.level)
          if (allComplete) {
            clearInterval(interval)
            return prev
          }

          return prev.map((skill) => ({
            ...skill,
            animatedLevel: Math.min(skill.animatedLevel + 1, skill.level),
          }))
        })
      }, 15)

      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const sdeExpArray = Array.isArray(sdeExp) ? sdeExp : [];
  const civilDataArray = Array.isArray(civilData) ? civilData : [];

  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{myData.name}</h1>
          <h2 className="text-2xl text-muted-foreground">Software Engineer & Civil Engineering Student</h2>
          <p className="text-lg">
            I am 3rd year B.Tech student at {myData.education[0].institute} with a passion for technology and engineering.
            Full-stack developer with experience building responsive web applications and digital solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            {myData.skills.tech.slice(0, 6).map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={scrollToContact}>Hire Me</Button>
            <Button
              variant="outline"
              onClick={() => downloadResume('Software Engineer')}
            >
              Download CV
            </Button>
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/CB3 copy.png"
              alt={myData.name}
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animatedSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{Math.round(skill.animatedLevel)}%</span>
              </div>
              <Progress value={skill.animatedLevel} className="h-2" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Building responsive and interactive user interfaces using modern JavaScript frameworks like React and Next.js.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Server className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Developing server-side applications and APIs using Node.js and MongoDB.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Database className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Civil Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Applying technical skills in MATLAB, Staad Pro, AutoCAD, and QGIS for civil engineering projects and research.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creating intuitive and visually appealing user interfaces and experiences for web applications.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdeProjects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  src={project.url}
                  title={project.title}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute inset-0"
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <a href={project.url} target="_blank">Demo</a>
                </Button>
                <Button variant="outline" size="sm" disabled={!project.github} className={!project.github ? "opacity-50 cursor-not-allowed" : ""}>
                  <Github className="mr-2 h-4 w-4" />
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                  ) : (
                    <span>Code</span>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {[...sdeExpArray, ...civilDataArray].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                  </div>
                  <Badge>{job.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {myData.education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institute}</CardDescription>
                  </div>
                  <Badge>{edu.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}