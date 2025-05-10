import { ThemeSwitcher } from "@/app/Main/compoMain/theme-switch"
import { ModeToggle } from "@/app/Main/compoMain/mode-toggle"
import { ProfileSelector } from "@/app/Main/compoMain/profile-selector"
import { Portfolio } from "@/app/Main/compoMain/portfolio"
import { ThemeProvider } from "@/app/Main/compoMain/theme-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/Main/uiMain/card"
import { Badge } from "@/app/Main/uiMain/badge"
import { Button } from "@/app/Main/uiMain/button"
import { Code, Server, Database, Globe, Github, Linkedin, Twitter, X, Instagram } from "lucide-react"
import data from "@/components/data"

export default function Home() {
  
    const { myData, sdeExp, civilData, designData, managementData } = data;
  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="flex items-center gap-4">
              <ProfileSelector />
              <ThemeSwitcher />
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="flex-1">
          <Portfolio />
        </main>
      </div>
      <section id="contact" className="py-8 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-6 px-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-md">{myData.mobile}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-md">{myData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-md">{myData.city}, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <a href="https://github.com/Codushan" target="_blank" rel="noopener noreferrer" className="text-md text-primary hover:underline">
                    @Codushan
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/chandrabhushan3/" target="_blank" rel="noopener noreferrer" className="text-md text-primary hover:underline">
                    @chandrabhushan3
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <a href="https://www.instagram.com/chandrabhushan_acb/" target="_blank" rel="noopener noreferrer" className="text-md text-primary hover:underline">
                    @chandrabhushan_acb
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 text-primary">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">X</p>
                  <a href="https://x.com/IamrealCB" target="_blank" rel="noopener noreferrer" className="text-md text-primary hover:underline">
                    @IamrealCB
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p>© {new Date().getFullYear()} {myData.name}. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
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
      </section>
    </ThemeProvider>
    
    </>
  )
}
