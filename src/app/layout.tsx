import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SvgText } from "@/components/svg-text"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://minimaltweet.vercel.app"),
  title: "Minimal Tweet Layout",
  description: "Minimal Tweet Layout powered by Emplode",
  creator: "shouryamaanjain",
  keywords: [
    "tweet ui",
    "tweet card",
    "tweet layout",
    "tweet card ui",
    "tweet layout ui",
    "tailwindcss tweet card",
    "tailwingcss tweet layout",
    "shouryamaanjain",
    "minimal tweet card",
    "minimal tweet layout",
    "tailwind css card",
    "tailwind css layout",
  ],
  openGraph: {
    title: "Minimal Tweet layout powered by Emplode",
    type: "website",
    url: "https://minimaltweet.vercel.app/",
    images: [
      {
        url: "https://minimaltweet.vercel.app/opengraph-image.png",
        alt: "Minimal Tweet Layout powered by Emplode",
      },
    ],
  },
  twitter: {
    site: "@shouryamaanjain",
    images: [
      {
        url: "https://minimaltweet.vercel.app/opengraph-image.png",
        alt: "Minimal Tweet Layout powered by Emplode",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed left-60 top-0 ">
          <SvgText />
        </div>
        <div className="fixed left-0 top-0 -z-10  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
