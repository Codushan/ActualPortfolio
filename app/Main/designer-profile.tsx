"use client"

import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { Brush, Palette, Layers, ImageIcon, MessageSquare } from "lucide-react"
import Image from "next/image"
import data from "@/components/data"

export function DesignerProfile() {
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

  const projects = [
    {
      title: "DND Club Website UI/UX",
      duration: "Oct – Dec 2024",
      src: "/dnd.png",
      figma: "https://www.figma.com/proto/XkRLxvi0y52gy8YcIo3NK8/DnD?page-id=0%3A1&node-id=112-309&starting-point-node-id=112%3A309&t=jE6FIR2LlMbjEiY7-1",
      description: "Designed UI/UX for the DND & SNS Club website. Shared via Figma link.",
    },
    {
      title: "RIG Club Website UI/UX",
      duration: "Oct – Dec 2024",
      src: "/rig.png",
      figma: "https://rignitc.com/",
      description: "Designed UI/UX for the Robotics Interested Group Club website.",
    },
  ];


  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Chandrabhushan Kumar</h1>
          <h2 className="text-2xl text-muted-foreground">Creative Designer</h2>
          <p className="text-lg">
            I'm a passionate designer with over 5 years of experience creating beautiful and functional designs for web
            and mobile applications.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>UI/UX</Badge>
            <Badge>Graphic Design</Badge>
            <Badge>Branding</Badge>
            <Badge>Illustration</Badge>
            <Badge>Motion Graphics</Badge>
          </div>
          <div className="flex gap-3 pt-4">
            <Button onClick={handleContactClick}>
              Contact Me
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Chandrabhushan_Kumar_Design.pdf';
                link.download = 'Chandrabhushan_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >View Resume</Button>
            <Button
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Portfolio CB.pdf';
                link.download = 'Portfolio CB.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >View Portfolio</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/CB3 copy.png"
              alt="Jane Doe"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Brush className="h-8 w-8 text-primary mb-2" />
              <CardTitle>UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creating intuitive and engaging user interfaces and experiences for web and mobile applications.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Graphic Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Designing visual content to communicate messages through typography, color, and imagery.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Layers className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Developing brand identities including logos, color palettes, and brand guidelines.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ImageIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Illustration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creating custom illustrations and visual assets for various digital and print media.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proje, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={proje.src}
                  alt={`Project ${idx}`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{proje.title}</CardTitle>
                <CardDescription>UI/UX Design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2">
                  {proje.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  <a href={proje.figma} target="_blank" rel="noopener noreferrer">Figma link</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...designData].map((item, id) => (
            <Card key={id} className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=Client ${item}`}
                      alt={`Client ${item}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.duration}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <MessageSquare className="absolute top-4 right-4 h-8 w-8 text-muted-foreground opacity-20" />
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
