import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { OrganizationSchema } from "@/components/seo/organization-schema"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://eqautomation.com"),
  title: {
    default: "EQ Automation - Robotic Process Automation Solutions",
    template: "%s | EQ Automation",
  },
  description:
    "Smarter workflows. Lower costs. Greater impact. EQ Automation provides Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
  keywords: [
    "RPA",
    "Robotic Process Automation",
    "Business Automation",
    "Workflow Automation",
    "Process Automation",
    "Digital Transformation",
    "Microsoft Power Automate",
    "Business Efficiency",
    "Cost Reduction",
    "Automation Solutions",
  ],
  authors: [{ name: "EQ Automation" }],
  creator: "EQ Automation",
  publisher: "EQ Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "EQ Automation - Robotic Process Automation Solutions",
    description:
      "Smarter workflows. Lower costs. Greater impact. EQ Automation provides Robotic Process Automation (RPA) solutions.",
    url: "https://eqautomation.com",
    siteName: "EQ Automation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EQ Automation - Robotic Process Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EQ Automation - Robotic Process Automation Solutions",
    description:
      "Smarter workflows. Lower costs. Greater impact. EQ Automation provides Robotic Process Automation (RPA) solutions.",
    images: ["/images/twitter-image.jpg"],
    creator: "@eqautomation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <OrganizationSchema />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
