"use client"

import Link from "next/link"
import ThemeLogo from "./theme-logo"
import { ResponsiveContainer } from "./responsive-container"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <ResponsiveContainer>
        <div className="py-8 md:py-10">
          {/* Mobile Footer */}
          <div className="block md:hidden">
            <MobileFooter />
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:block">
            <DesktopFooter />
          </div>

          {/* Copyright - Shown on all devices */}
          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} EQ Automation. All rights reserved.
            </p>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}

function MobileFooter() {
  return (
    <div className="space-y-6">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-center text-center">
        <ThemeLogo width={140} height={47} className="w-auto max-w-[140px] footer-logo mb-3" />
        <p className="text-sm text-muted-foreground">Smarter workflows. Lower costs. Greater impact.</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/eq.automation?igsh=djVqZXEzbGRubHBr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-qasim-mukhtar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/@EQAutomationio" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      {/* Quick Links and Legal in a horizontal layout */}
      <div className="grid grid-cols-2 gap-4 border-t pt-6">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section below */}
      <div className="border-t pt-6">
        <h3 className="text-sm font-semibold mb-3">Contact</h3>
        <div className="space-y-3">
          <div className="text-xs">
            <span className="block font-medium text-foreground mb-1">Email:</span>
            <a
              href="mailto:info@eqautomation.io"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              info@eqautomation.io
            </a>
          </div>
          <div className="text-xs">
            <span className="block font-medium text-foreground mb-1">Phone:</span>
            <a href="tel:+12292355166" className="text-muted-foreground hover:text-primary transition-colors">
              +1 229-235-5166
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopFooter() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start">
          <ThemeLogo width={160} height={53} className="w-auto max-w-[160px] footer-logo" />
        </div>
        <p className="text-sm text-muted-foreground">Smarter workflows. Lower costs. Greater impact.</p>
        <div className="flex space-x-4 mt-2">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/eq.automation?igsh=djVqZXEzbGRubHBr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-qasim-mukhtar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/@EQAutomationio" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Use Cases
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-4">Contact</h3>
        <ul className="space-y-3">
          <li className="text-sm text-muted-foreground">
            <span className="block font-medium text-foreground">Email:</span>
            <a href="mailto:info@eqautomation.io" className="hover:text-primary transition-colors">
              info@eqautomation.io
            </a>
          </li>
          <li className="text-sm text-muted-foreground">
            <span className="block font-medium text-foreground">Phone:</span>
            <a href="tel:+12292355166" className="hover:text-primary transition-colors">
              +1 229-235-5166
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-4">Legal</h3>
        <ul className="space-y-3">
          <li>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
