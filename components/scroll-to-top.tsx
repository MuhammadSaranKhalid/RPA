"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

export default function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    // Store the current path for comparison
    const currentPath = pathname + searchParams.toString()

    // Only scroll to top if the path has changed
    if (prevPathRef.current !== currentPath) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant", // Use "instant" instead of "smooth" to avoid visual jumps
        })
      })

      // Update the previous path reference
      prevPathRef.current = currentPath
    }

    // Add event listener for popstate (browser back/forward buttons)
    const handlePopState = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        })
      })
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}
