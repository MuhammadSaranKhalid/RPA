"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ThemeLogoProps {
  className?: string
  width?: number
  height?: number
}

export default function ThemeLogo({ className, width = 180, height = 60 }: ThemeLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the logo after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine the appropriate styling based on where the logo is used
  const isHeader = className?.includes("header-logo")
  const isFooter = className?.includes("footer-logo")
  const isSidebar = className?.includes("sidebar-logo")

  // Set appropriate max heights for different logo placements - increased for better visibility
  let maxHeight = "auto"
  if (isHeader) maxHeight = "100px"
  else if (isFooter) maxHeight = "120px"
  else if (isSidebar) maxHeight = "100px"

  // Use a simpler placeholder during SSR to reduce initial load
  if (!mounted) {
    return (
      <div
        className={`${className || ""} h-auto`}
        style={{
          width: width,
          height: "auto",
          aspectRatio: `${width}/${height}`,
          maxWidth: "100%",
        }}
        aria-hidden="true"
      />
    )
  }

  // Use a more efficient rendering approach
  const logoSrc = resolvedTheme === "dark" ? "/images/eq-dark-mode.png" : "/images/eq-light-mode.png"

  return (
    <div
      className={`relative ${className || ""}`}
      style={{
        maxWidth: "100%",
        maxHeight: maxHeight,
      }}
    >
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="EQ Automation Logo"
        width={width}
        height={height}
        style={{
          width: "auto",
          height: "auto",
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: maxHeight,
        }}
        priority={isHeader} // Only prioritize header logo
        loading={isHeader ? "eager" : "lazy"} // Use eager loading only for header
      />
    </div>
  )
}
