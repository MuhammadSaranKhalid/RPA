import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - 404 Error",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <ResponsiveContainer className="flex flex-col items-center justify-center min-h-[70vh] text-center py-16">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" aria-label="Return to home page">
        <Button className="bg-red-600 hover:bg-red-700">Return to Home</Button>
      </Link>
    </ResponsiveContainer>
  )
}
