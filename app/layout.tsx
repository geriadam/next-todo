import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Theme } from "@radix-ui/themes";
import ThemeProvider from "@/providers/ThemeProvider";
import TanstackProvider from "@/providers/TanstackProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://next-todo-ashen-six.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "next supabase",
    "next tailwindcss",
    "next radixui",
    "next tanstack query"
  ],
  authors: [
    {
      name: "geriadam",
      url: "https://github.com/geriadam",
    },
  ],
  creator: "geriadam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@geriadam",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            <TanstackProvider>
              {children}
            </TanstackProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}