import { JsonLd } from "@/components/json-ld"

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "EQ Automation",
        url: "https://eqautomation.com",
        logo: "https://eqautomation.com/images/eq-light-mode.png",
        sameAs: [
          "https://twitter.com/eqautomation",
          "https://facebook.com/eqautomation",
          "https://linkedin.com/company/eqautomation",
          "https://instagram.com/eqautomation",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "info@eqautomation.com",
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Business Ave, Suite 200",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10001",
          addressCountry: "US",
        },
        description:
          "EQ Automation provides Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
      }}
    />
  )
}
