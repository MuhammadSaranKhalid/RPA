"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import ThemeLogo from "./theme-logo"
import { ResponsiveContainer } from "./responsive-container"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  // Add state to control the sidebar open/close state
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close sidebar when pathname changes (i.e., when navigation occurs)
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      }`}
    >
      <ResponsiveContainer>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="EQ Automation Home">
            <ThemeLogo width={200} height={67} className="h-auto w-auto max-w-[200px] header-logo" />
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
            <Link href="https://calendly.com/contact-eqautomation/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Free Consultation
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile navigation controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme toggle for mobile - next to menu button */}
            <ThemeToggle />

            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link href="/" className="flex justify-center mb-4" onClick={() => setSidebarOpen(false)}>
                    <ThemeLogo width={160} height={53} className="h-auto w-auto max-w-[160px] sidebar-logo" />
                  </Link>
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        pathname === route.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <Link
                    href="https://calendly.com/contact-eqautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  )
}
