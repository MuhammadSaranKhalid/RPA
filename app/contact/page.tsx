import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with RPA Experts",
  description:
    "Schedule a free consultation with EQ Automation's RPA experts. Discuss your automation needs and discover tailored solutions to optimize your business.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact EQ Automation",
          description:
            "Schedule a free consultation with EQ Automation's RPA experts. Discuss your automation needs and discover tailored solutions to optimize your business.",
          url: "https://eqautomation.com/contact",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://eqautomation.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://eqautomation.com/contact",
              },
            ],
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-229-235-5166",
            contactType: "customer service",
            email: "info@eqautomation.io",
            areaServed: "US",
            availableLanguage: "English",
          },
        }}
      />
      <ContactPageClient />
    </>
  )
}
