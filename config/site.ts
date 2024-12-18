export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Todo",
  url: process.env.BASE_URL || 'http://localhost:3000',
  ogImage: "/ogImage.png",
  description: "Next, Tailwind, RadixUi, Tanstack Query, Supabase + Typescript",
  mainNav: [
    {
      title: "Todo Homepage",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/geriadam"
  },
}