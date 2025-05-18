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

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <div
        className={`${className} h-auto`}
        style={{ width: width, height: "auto", aspectRatio: `${width}/${height}` }}
      />
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width: "auto", height: "auto", maxWidth: width }}>
      <Image
        src={resolvedTheme === "dark" ? "/images/eq-dark-mode.png" : "/images/eq-light-mode.png"}
        alt="EQ Automation Logo"
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          maxWidth: "100%",
        }}
        priority
      />
    </div>
  )
}
