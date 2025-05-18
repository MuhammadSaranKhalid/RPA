"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" to avoid visual jumps
    })
  }, [pathname])

  return null // This component doesn't render anything
}
