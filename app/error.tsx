"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <ResponsiveContainer className="flex flex-col items-center justify-center min-h-[70vh] text-center py-16">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} className="bg-red-600 hover:bg-red-700">
          Try Again
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Return to Home
        </Button>
      </div>
    </ResponsiveContainer>
  )
}
