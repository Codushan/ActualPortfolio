"use client"
import React, { useState } from "react"
import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { Building, HardHat, Ruler, Compass, Award, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/Main/uiMain/tabs"
import data from "@/app/components/Data"

export function CivilEngineerProfile() {
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

  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Chandrabhushan Kumar</h1>
          <h2 className="text-2xl text-muted-foreground">Civil Engineer</h2>
          <p className="text-lg">
            Professional civil engineer with 10+ years of experience in structural design, project management, and
            construction supervision. Specialized in sustainable infrastructure development and urban planning.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Structural Design</Badge>
            <Badge>Project Management</Badge>
            <Badge>Urban Planning</Badge>
            <Badge>Sustainable Development</Badge>
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={handleContactClick}>Contact Me</Button>
            <Button variant="outline">View Portfolio</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/CB3 copy.png"
              alt="Robert Johnson"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Structural Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Designing and analyzing structures to ensure they are safe, durable, and meet all building codes and
                regulations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HardHat className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Construction Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Overseeing construction projects from planning to completion, ensuring they are completed on time and
                within budget.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Ruler className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Infrastructure Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Planning and designing infrastructure systems including roads, bridges, water supply, and sewage
                systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Compass className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Urban Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developing comprehensive plans for land use and the design of urban environments to promote sustainable
                development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <Card>
          <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-4">
                {/* <Mail className="h-8 w-8 text-primary" /> */}
                <div>
                  <h3 className="font-medium">Autocad</h3>
                  {/* <p>robert.johnson@example.com</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <Phone className="h-8 w-8 text-primary" /> */}
                <div>
                  <h3 className="font-medium">Matlab</h3>
                  {/* <p>(555) 123-4567</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-medium">QGIS</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-medium">Staad Pro</h3>
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-4">
                {/* <Mail className="h-8 w-8 text-primary" /> */}
                <div>
                  <h3 className="font-medium">Word</h3>
                  {/* <p>robert.johnson@example.com</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <Phone className="h-8 w-8 text-primary" /> */}
                <div>
                  <h3 className="font-medium">Excel</h3>
                  {/* <p>(555) 123-4567</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-medium">Power Point</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-medium">Photoshop</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <Tabs defaultValue="commercial" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="commercial">Collage</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          </TabsList>
          <TabsContent value="commercial" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...civilData].map((project, id) => (
                <Card key={id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Commercial ${id}`}
                      alt={`Commercial Project ${id}`}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.duration}</CardDescription>
                    <CardDescription>{project.guide}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="residential" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Residential ${item}`}
                      alt={`Residential Project ${item}`}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Luxury Apartments {item}</CardTitle>
                    <CardDescription>Residential Complex</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">
                      A modern residential complex with 200 luxury apartments, underground parking, and community
                      amenities including a pool and fitness center.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="infrastructure" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Infrastructure ${item}`}
                      alt={`Infrastructure Project ${item}`}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Bridge Project {item}</CardTitle>
                    <CardDescription>Infrastructure Development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">
                      A 500-meter cable-stayed bridge designed to withstand extreme weather conditions and accommodate
                      high traffic volumes.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Certifications & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Ekasva 2025",
              issuer: "CIEI, NIT Calicut",
              year: "4-5 March 2025",
              description: "Presented a solar-powered bioreactor for biohydrogen production using cyanobacteria. Sponsored by NIT Calicut with a goal of patenting or publishing the research.",
            },
            {
              title: "RIG Club Website Launch",
              issuer: "RIG Club, NIT Calicut",
              year: "22 January 2025",
              description:
                "Certified in development of RIG Club website participation.",
            },
            {
              title: "Workshop on Innovation and Adaptability",
              issuer: "CIKS, NIT Calicut",
              year: "16 March 2024",
              description: "Attended a workshop on innovation and adaptability: Mahabharata's Timeless Relevance in Rapidly Changing Buisiness Landscape.",
            },
            {
              title: "Translating English Documents to Hindi",
              issuer: "Official Language Unit, NIT Calicut",
              year: "28 October 2023",
              description: "Participated in one day workshop organnised by the Official Language Unit along with CITRA on online tools for translating English Documents to Hindi at the Central Computer Centre of NIT Calicut.",
            },
            {
              title: "Hindi Pakhwada",
              issuer: "Official Language Unit, NIT Calicut",
              year: "14 september 2023",
              description: "Participated in a poetry competion and delivered my best poetries.",
            },
          ].map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} | {cert.year}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}


