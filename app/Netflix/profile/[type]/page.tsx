'use client'
import Link from "next/link"
import Image from "next/image"
import { type Metadata } from "next";
import { notFound } from "next/navigation"
import { Bell, Info, Play } from "lucide-react"
import { Button } from "@/app/Netflix/uiNetflix/button"
import { ThemeToggle } from "@/app/Netflix/compNetflix/theme-toggle"
import { ContentRow } from "@/app/Netflix/compNetflix/content-row"
import { ProfileSwitcher } from "@/app/Netflix/compNetflix/profile-switcher"
import { SearchBar } from "@/app/Netflix/compNetflix/search-bar"
import { useParams } from "next/navigation"
import { useState } from "react"
import { ThemeSwitcher } from "../../compNetflix/theme-switch";
import PortfolioFooter from "../../compNetflix/footer";

// Define profile data
const profiles = {
  "software-engineer": {
    name: "Chandrabhushan Kumar",
    title: "Software Engineer",
    color: "red",
    image: "/CB3 copy.png",
    banner: "/CB3 copy.png",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture.",
    featured: {
      title: "Chandrabhushan Kumar",
      description:
        "A complete e-commerce solution with React frontend and Node.js backend, handling 1M+ monthly users with 99.9% uptime.",
      image: "/CB3 copy.png",
    },
    categories: [
      {
        title: "Featured Projects",
        items: [
          { title: "E-commerce Platform", image: "/placeholder.svg?height=200&width=350" },
          { title: "AI Recommendation Engine", image: "/placeholder.svg?height=200&width=350" },
          { title: "Open Source Library", image: "/placeholder.svg?height=200&width=350" },
          { title: "Mobile Banking App", image: "/placeholder.svg?height=200&width=350" },
          { title: "Real-time Analytics Dashboard", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Frontend Development",
        items: [
          { title: "React Component Library", image: "/placeholder.svg?height=200&width=350" },
          { title: "E-commerce UI", image: "/placeholder.svg?height=200&width=350" },
          { title: "Admin Dashboard", image: "/placeholder.svg?height=200&width=350" },
          { title: "Mobile App UI", image: "/placeholder.svg?height=200&width=350" },
          { title: "Landing Page Design", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Backend Development",
        items: [
          { title: "API Gateway", image: "/placeholder.svg?height=200&width=350" },
          { title: "Microservices Architecture", image: "/placeholder.svg?height=200&width=350" },
          { title: "Database Optimization", image: "/placeholder.svg?height=200&width=350" },
          { title: "Authentication System", image: "/placeholder.svg?height=200&width=350" },
          { title: "Payment Processing", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "DevOps & Cloud",
        items: [
          { title: "AWS Infrastructure", image: "/placeholder.svg?height=200&width=350" },
          { title: "CI/CD Pipeline", image: "/placeholder.svg?height=200&width=350" },
          { title: "Kubernetes Cluster", image: "/placeholder.svg?height=200&width=350" },
          { title: "Monitoring Solution", image: "/placeholder.svg?height=200&width=350" },
          { title: "Serverless Architecture", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
    ],
  },
  designer: {
    name: "Chandrabhushan Kumar",
    title: "Designer",
    color: "red",
    image: "/CB3 copy.png",
    banner: "/CB3 copy.png",
    bio: "Creative designer with a passion for crafting beautiful and intuitive user experiences. Focused on user-centered design principles.",
    featured: {
      title: "Banking App Redesign",
      description:
        "Complete redesign of a banking application that improved user satisfaction by 45% and increased daily active users by 30%.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    categories: [
      {
        title: "Featured Designs",
        items: [
          { title: "Banking App Redesign", image: "/placeholder.svg?height=200&width=350" },
          { title: "E-learning Platform", image: "/placeholder.svg?height=200&width=350" },
          { title: "Brand Identity", image: "/placeholder.svg?height=200&width=350" },
          { title: "Mobile App Design", image: "/placeholder.svg?height=200&width=350" },
          { title: "Website Redesign", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "UI Design",
        items: [
          { title: "Component Library", image: "/placeholder.svg?height=200&width=350" },
          { title: "Dashboard UI", image: "/placeholder.svg?height=200&width=350" },
          { title: "Mobile Interfaces", image: "/placeholder.svg?height=200&width=350" },
          { title: "Web App Design", image: "/placeholder.svg?height=200&width=350" },
          { title: "E-commerce UI", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "UX Research",
        items: [
          { title: "User Personas", image: "/placeholder.svg?height=200&width=350" },
          { title: "User Journey Maps", image: "/placeholder.svg?height=200&width=350" },
          { title: "Usability Testing", image: "/placeholder.svg?height=200&width=350" },
          { title: "A/B Testing", image: "/placeholder.svg?height=200&width=350" },
          { title: "Heuristic Evaluation", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Brand Design",
        items: [
          { title: "Logo Design", image: "/placeholder.svg?height=200&width=350" },
          { title: "Brand Guidelines", image: "/placeholder.svg?height=200&width=350" },
          { title: "Marketing Materials", image: "/placeholder.svg?height=200&width=350" },
          { title: "Social Media Assets", image: "/placeholder.svg?height=200&width=350" },
          { title: "Packaging Design", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
    ],
  },
  "civil-engineer": {
    name: "Chandrabhushan Kumar",
    title: "Civil Engineer",
    color: "red",
    image: "/CB3 copy.png",
    banner: "/CB3 copy.png",
    bio: "Experienced civil engineer specializing in structural design and analysis. Passionate about sustainable construction and innovative building solutions.",
    featured: {
      title: "Urban Bridge Project",
      description:
        "Lead engineer for 120m suspension bridge in urban environment, incorporating innovative materials and earthquake-resistant design.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    categories: [
      {
        title: "Featured Projects",
        items: [
          { title: "Urban Bridge Project", image: "/placeholder.svg?height=200&width=350" },
          { title: "Earthquake Resistant Housing", image: "/placeholder.svg?height=200&width=350" },
          { title: "Commercial Tower", image: "/placeholder.svg?height=200&width=350" },
          { title: "Highway Interchange", image: "/placeholder.svg?height=200&width=350" },
          { title: "Sustainable Campus", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Structural Design",
        items: [
          { title: "High-rise Building", image: "/placeholder.svg?height=200&width=350" },
          { title: "Stadium Design", image: "/placeholder.svg?height=200&width=350" },
          { title: "Bridge Engineering", image: "/placeholder.svg?height=200&width=350" },
          { title: "Foundation Systems", image: "/placeholder.svg?height=200&width=350" },
          { title: "Seismic Design", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Sustainable Engineering",
        items: [
          { title: "Green Building Design", image: "/placeholder.svg?height=200&width=350" },
          { title: "LEED Certification", image: "/placeholder.svg?height=200&width=350" },
          { title: "Energy Efficient Structures", image: "/placeholder.svg?height=200&width=350" },
          { title: "Sustainable Materials", image: "/placeholder.svg?height=200&width=350" },
          { title: "Water Management", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Project Management",
        items: [
          { title: "Construction Oversight", image: "/placeholder.svg?height=200&width=350" },
          { title: "Budget Management", image: "/placeholder.svg?height=200&width=350" },
          { title: "Timeline Planning", image: "/placeholder.svg?height=200&width=350" },
          { title: "Resource Allocation", image: "/placeholder.svg?height=200&width=350" },
          { title: "Quality Control", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
    ],
  },
  management: {
    name: "Chandrabhushan Kumar",
    title: "Management",
    color: "red",
    image: "/CB3 copy.png",
    banner: "/CB3 copy.png",
    bio: "Strategic leader with proven track record of delivering complex projects on time and under budget. Skilled in team building and stakeholder management.",
    featured: {
      title: "Digital Transformation",
      description:
        "Led company-wide digital transformation initiative that streamlined operations, improved customer experience, and saved $2M annually.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    categories: [
      {
        title: "Featured Projects",
        items: [
          { title: "Digital Transformation", image: "/placeholder.svg?height=200&width=350" },
          { title: "Product Launch", image: "/placeholder.svg?height=200&width=350" },
          { title: "Team Restructuring", image: "/placeholder.svg?height=200&width=350" },
          { title: "Process Optimization", image: "/placeholder.svg?height=200&width=350" },
          { title: "Strategic Planning", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Leadership",
        items: [
          { title: "Team Building", image: "/placeholder.svg?height=200&width=350" },
          { title: "Executive Coaching", image: "/placeholder.svg?height=200&width=350" },
          { title: "Change Management", image: "/placeholder.svg?height=200&width=350" },
          { title: "Crisis Management", image: "/placeholder.svg?height=200&width=350" },
          { title: "Talent Development", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Project Management",
        items: [
          { title: "Agile Implementation", image: "/placeholder.svg?height=200&width=350" },
          { title: "Budget Management", image: "/placeholder.svg?height=200&width=350" },
          { title: "Risk Assessment", image: "/placeholder.svg?height=200&width=350" },
          { title: "Stakeholder Management", image: "/placeholder.svg?height=200&width=350" },
          { title: "Quality Assurance", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
      {
        title: "Business Strategy",
        items: [
          { title: "Market Analysis", image: "/placeholder.svg?height=200&width=350" },
          { title: "Business Development", image: "/placeholder.svg?height=200&width=350" },
          { title: "Strategic Partnerships", image: "/placeholder.svg?height=200&width=350" },
          { title: "Growth Planning", image: "/placeholder.svg?height=200&width=350" },
          { title: "Competitive Analysis", image: "/placeholder.svg?height=200&width=350" },
        ],
      },
    ],
  },
}

type Props = {
  params: {
    type: string;
  };
};

export default function ProfilePage() {
  const params = useParams();
  const type = params?.type as string;
  const profile = profiles[type as keyof typeof profiles];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  // Create search items from all projects
  const searchItems = profile.categories.flatMap((category) =>
    category.items.map((item) => ({
      title: item.title,
      category: category.title,
      href: `#${item.title.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  )

  const handleDownload = (resume: string) => {
    const link = document.createElement('a');
    let fileName = '';
    let filePath = '';

    switch (resume) {
      case 'Software Engineer':
        filePath = '/Tech Resume.pdf';
        fileName = 'Chandrabhushan_Tech_CV.pdf';
        break;
      case 'Designer':
        filePath = '/Chandrabhushan_Kumar_Design.pdf';
        fileName = 'Chandrabhushan_Design_CV.pdf';
        break;
      case 'Civil Engineer':
        filePath = '/Marketing Resume.pdf';
        fileName = 'Chandrabhushan_Marketing_CV.pdf';
        break;
      case 'Management':
        filePath = '/Management Resume.pdf';
        fileName = 'Chandrabhushan_Management_CV.pdf';
        break;
      default:
        filePath = '/Tech Resume.pdf';
        fileName = 'Chandrabhushan_CV.pdf';
    }

    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto py-4 px-4 flex items-center">
          <Link href={`/profile/${type}`} className="text-3xl font-bold text-red-600 mr-8">
            PORTFOLIX
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href={`/Netflix/profile/${type}`} className="font-medium text-white">
              Home
            </Link>
            <Link href={`/Netflix/profile/${type}#projects`} className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link href={`/Netflix/profile/${type}#skills`} className="text-gray-300 hover:text-white">
              Skills
            </Link>
            <Link href={`/Netflix/profile/${type}#experience`} className="text-gray-300 hover:text-white">
              Experience
            </Link>
            <Link href={`/Netflix/profile/${type}#contact`} className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="ml-auto flex items-center space-x-4">
            <SearchBar allItems={searchItems} />
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <ProfileSwitcher currentProfileImage={profile.image} currentProfileName={profile.title} />
            <ThemeSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Banner */}
        <div className="relative w-full h-[80vh]">
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.title}
            fill
            className="object-cover brightness-50"
            style={{ objectPosition: 'center -120px' }}
            priority
          />

          <div className="absolute bottom-0 left-0 w-full h-full p-8 md:p-16 bg-gradient-to-t from-black to-transparent">
            <div className="container mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{profile.name}</h1>
                <p className="text-2xl mb-6">{profile.title}</p>
                <p className="text-lg mb-6">{profile.bio}</p>
                <div className="flex space-x-4">
                  <Button
                    className="bg-white text-black hover:bg-white/90 px-8"
                    onClick={() => {
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Play className="h-5 w-5 mr-2" /> Hire Me
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-white px-8" onClick={() => handleDownload(profile.title)}>
                    Download CV
                  </Button>
                  {profile.title === 'Designer' && (
                    <Button
                      variant="outline"
                      className="border-gray-400 text-white px-8"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Portfolio CB.pdf'; // adjust the path if needed
                        link.download = 'Chandrabhushan_Portfolio.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Download Portfolio
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Rows */}
        <div className="container mx-auto px-4 -mt-10 md:-mt-40 pb-0 md:pb-0 space-y-8">
          <div id="projects">
            {profile.categories.map((category, index) => (
              <ContentRow key={index} title={category.title} items={category.items} color={profile.color} />
            ))}
          </div>
        </div>
      </main>
      <div id="footer">
        <PortfolioFooter />
      </div>
    </div>
  )
}