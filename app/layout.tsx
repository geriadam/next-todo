import "@/styles/globals.css"

import { Viewport } from "next"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Theme } from "@radix-ui/themes";
import ThemeProvider from "@/providers/ThemeProvider";

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
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}