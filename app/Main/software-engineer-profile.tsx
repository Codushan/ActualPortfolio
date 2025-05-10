"use client"
import { useEffect, useState } from "react"
import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { Code, Server, Database, Globe, Github, Linkedin, Twitter, X, Instagram } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/app/Main/uiMain/progress"
import data from "@/app/components/Data"

export function SoftwareEngineerProfile() {
  const { themeStyle } = useTheme()
  const { myData, sdeExp, civilData, designData, managementData } = data;

  const handleContactClick = () => {
    // Using window.location.href with hash to navigate to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if the element isn't found in the current page
      window.location.href = '/#contact';
    }
  };

  // Add check to ensure sdeExp and civilData are arrays before spreading
  const sdeExpArray = Array.isArray(sdeExp) ? sdeExp : [];
  const civilDataArray = Array.isArray(civilData) ? civilData : [];

  const sdeData = [
    {
      title: "Prithvi Website (Tech Fest - Civil Dept)",
      url: "https://prithvi25.in",
      github: "https://github.com/Codushan/Prithvi",
      duration: "Jan – Mar 2025",
      description: "Led UI/UX and full-stack development as Tech Head. Live at prithvi25.in",
    },
    {
      title: "RIG Club Website",
      url: "https://rignitc.com",
      github: "https://github.com/Codushan/rig_web",
      duration: "Oct – Dec 2024",
      description: "Built full-stack website with UI/UX for Robotics Interested Group. Live at rignitc.com",
    },
    {
      title: "Login & Signup Function",
      url: "https://login-2-ui.vercel.app/",
      github: "https://github.com/Codushan/Login-2",
      duration: "Dec 2024",
      description: "Developed backend-based login/signup functionality. Live at https://login-2-ui.vercel.app/",
    },
    {
      title: "Location Search Tool (India > Bihar)",
      url: "https://thecbweb.netlify.app/",
      github: "http://github.com/Codushan/My-Web",
      duration: "Nov 2024",
      description: "Created a web app for searching Indian states and districts (currently Bihar only). Live at https://thecbweb.netlify.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      url: "https://tictactoecb.netlify.app/",
      github: "",
      duration: "Aug 2024",
      description: "Created simple browser games like Stone Paper Scissors and Tic-Tac-Toe.",
    },
    {
      title: "Stone Paper Scissors Game",
      url: "https://stonepaperscissorchb.netlify.app/",
      github: "",
      duration: "Aug 2024",
      description: "Created simple browser games like Stone Paper Scissors and Tic-Tac-Toe.",
    }
  ];

  // Map skills from your data
  const techSkills = myData.skills.tech;
  // Select a subset of skills to show with progress bars
  const skillsToDisplay = [
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "C++", level: 70 },
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
    }, 500) // Delay start of animation

    return () => clearTimeout(timer)
  }, [])

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
            {techSkills.slice(0, 6).map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={handleContactClick}>Hire Me</Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Tech Resume.pdf';
                link.download = 'Chandrabhushan_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
          {sdeData.map((project, idx) => (
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
          {/* Combining SDE and Civil experiences with proper checks */}
          {[...sdeExpArray, ...civilDataArray].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    {/* <CardDescription>{job.guide || ''}</CardDescription> */}
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