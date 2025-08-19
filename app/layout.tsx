import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { SpeedInsights } from "@vercel/speed-insights/next"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Rawand Farhad - Software Engineer",
  description: "Passionate software engineer from Iraqi Kurdistan with over a decade of experience.",
  keywords: ["software engineer", "freelancer", "full-stack developer", "machine learning", "distributed systems"],
  authors: [{ name: "Rawand Farhad", url: "https://rawand.dev" }],
  creator: "Rawand Farhad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rawand.dev",
    title: "Rawand Farhad - Software Engineer",
    description: "Passionate software engineer from Iraqi Kurdistan with over a decade of experience.",
    siteName: "Rawand Farhad - Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawand Farhad - Software Engineer",
    description: "Passionate software engineer from Iraqi Kurdistan with over a decade of experience.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} antialiased`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights/>
      </body>
    </html>
  )
}
