import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Busigrow — Growth Infrastructure & Execution",
  description:
    "End-to-end digital engineering, physical fabrication, campaigns, and workflow automations for growing companies.",
  icons: {
    icon: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen font-sans font-light antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
