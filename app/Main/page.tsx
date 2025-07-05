import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { ModeToggle } from "@/app/Main/compoMain/mode-toggle"
import { ProfileSelector } from "@/app/Main/compoMain/profile-selector"
import { Portfolio } from "@/app/Main/compoMain/portfolio"
import { ThemeProvider } from "@/app/Main/compoMain/theme-provider"
import { ContactSection } from "@/components/shared/contact-section"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="flex items-center gap-4">
              <ProfileSelector />
              <div className="hidden md:block">
                <ThemeSwitcher />
              </div>
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="flex-1">
          <Portfolio />
        </main>

        {/* Floating ThemeSwitcher for mobile */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
      </div>
      <ContactSection />
    </ThemeProvider>
  )
}