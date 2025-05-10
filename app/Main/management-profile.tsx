"use client"

import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { BarChart, PieChart, TrendingUp, Users, Briefcase, Calendar, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/app/Main/uiMain/progress"
import { useState, useEffect } from "react"
import data from "@/components/data"

export function ManagementProfile() {
  const { themeStyle } = useTheme()
  const { myData, civilData, designData, managementData } = data;

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

  const skills = [
    { name: "Strategic Planning", level: 95 },
    { name: "Team Leadership", level: 90 },
    { name: "Financial Analysis", level: 85 },
    { name: "Project Management", level: 88 },
    { name: "Business Development", level: 92 },
    { name: "Negotiation", level: 87 },
  ]

  const [animatedSkills, setAnimatedSkills] = useState(skills.map((skill) => ({ ...skill, animatedLevel: 0 })))

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
          <h2 className="text-2xl text-muted-foreground">Event Coordinator</h2>
          <p className="text-lg">
            I am 3rd year B.Tech student at {myData.education[0].institute} with a passion for business management professional with a proven track record of driving organizational growth,
            optimizing operations, and leading high-performing teams across multiple industries.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Strategic Planning</Badge>
            <Badge>Team Leadership</Badge>
            <Badge>Financial Management</Badge>
            <Badge>Operations</Badge>
            <Badge>Business Development</Badge>
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={handleContactClick}>Contact Me</Button>
            <Button variant="outline">Download Resume</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/CB3 copy.png"
              alt="Michael Williams"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
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
        <h2 className="text-3xl font-bold mb-6">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Strategic Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developing and implementing strategic plans to achieve organizational goals and drive business growth.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Team Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Building, mentoring, and leading high-performing teams to achieve exceptional results and foster
                innovation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <PieChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Financial Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Overseeing budgets, financial planning, and resource allocation to maximize ROI and ensure financial
                stability.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Business Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Identifying and pursuing new business opportunities, partnerships, and market expansion strategies.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
        <div className="space-y-6">
          {[
            {
              title: "Chief Operations Officer",
              company: "Global Enterprises Inc.",
              period: "2018 - Present",
              description:
                "Oversee all operational aspects of a multinational corporation with 500+ employees and $100M annual revenue. Led digital transformation initiatives resulting in 30% increase in operational efficiency.",
            },
            {
              title: "Director of Operations",
              company: "Innovative Solutions Ltd.",
              period: "2014 - 2018",
              description:
                "Managed day-to-day operations and led a team of 50+ employees across multiple departments. Implemented process improvements that reduced costs by 25% while improving service quality.",
            },
            {
              title: "Senior Project Manager",
              company: "Strategic Consulting Group",
              period: "2010 - 2014",
              description:
                "Led complex business transformation projects for Fortune 500 clients. Managed cross-functional teams and ensured on-time, on-budget delivery of project milestones.",
            },
          ].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{job.period}</span>
                  </Badge>
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
        <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Led a company-wide digital transformation initiative that increased operational efficiency by 30% and reduced annual costs by $2.5M.",
            "Successfully managed the merger and integration of two business units, resulting in 20% revenue growth within the first year.",
            "Developed and implemented a strategic expansion plan that led to successful market entry in 3 new countries.",
            "Restructured the sales department and implemented new CRM systems, resulting in 45% increase in sales within 18 months.",
          ].map((achievement, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p>{achievement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>MBA in Business Administration</CardTitle>
              <CardDescription>Harvard Business School | 2008 - 2010</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Specialized in Strategic Management and Organizational Leadership</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Science in Economics</CardTitle>
              <CardDescription>University of Pennsylvania | 2004 - 2008</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Graduated with honors, Minor in International Business</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Management Professional (PMP)</CardTitle>
              <CardDescription>Project Management Institute | 2012</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Certified in project management methodologies and best practices</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Six Sigma Black Belt</CardTitle>
              <CardDescription>American Society for Quality | 2015</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expert-level certification in process improvement methodologies</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>michael.williams@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>(555) 987-6543</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
