import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {

  return (
    <>
      <SiteHeader />
      <div className="flex min-h-screen flex-col items-center gap-2">
        <main className="w-full container max-w-6xl">{children}</main>
      </div>
      <SiteFooter />
    </>
  )
}