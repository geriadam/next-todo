import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/layout/main-nav"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export function SiteHeader() {
  return (
    <div className="w-full border-b">
      <header className="sticky container top-0 z-40 max-w-6xl mx-auto bg-background">
        <div className="flex h-14 container  max-w-6xl items-center justify-between p-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex items-center justify-between space-x-2 md:justify-end md:space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  )
}