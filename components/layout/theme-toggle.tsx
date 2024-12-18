"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconButton } from "@radix-ui/themes"
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <IconButton
      variant="ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun color="black" className="h-[1.5rem] w-[1.3rem] dark:hidden cursor-pointer" />
      <Icons.moon color="white" className="hidden h-5 w-5 dark:block cursor-pointer" />
      <span className="sr-only">Toggle theme</span>
    </IconButton>
  )
}