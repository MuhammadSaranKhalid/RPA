import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EQ Automation - Robotic Process Automation Solutions",
    short_name: "EQ Automation",
    description:
      "Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and improve efficiency.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c41e3a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://eqautomation.com",
      },
    ],
    categories: ["business", "productivity", "technology"],
    screenshots: [
      {
        src: "/screenshots/desktop-home.jpg",
        sizes: "1280x800",
        type: "image/jpeg",
        platform: "wide",
        label: "EQ Automation Homepage on Desktop",
      },
      {
        src: "/screenshots/mobile-home.jpg",
        sizes: "750x1334",
        type: "image/jpeg",
        platform: "narrow",
        label: "EQ Automation Homepage on Mobile",
      },
    ],
    shortcuts: [
      {
        name: "Book Consultation",
        url: "/contact",
        description: "Book a free RPA consultation",
      },
      {
        name: "Services",
        url: "/services",
        description: "View our RPA services",
      },
    ],
  }
}
