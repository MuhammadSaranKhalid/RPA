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
          "https://www.linkedin.com/in/muhammad-qasim-mukhtar/",
          "https://www.instagram.com/eq.automation?igsh=djVqZXEzbGRubHBr",
          "https://www.youtube.com/@EQAutomationio",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+1-229-235-5166",
            contactType: "customer service",
            email: "contact@eqautomation.io", // Updated email address
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Automation Drive",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10001",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        // Placeholder for certifications/awards - replace with actual data if available
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Certified RPA Professional",
          },
        ],
        description:
          "EQ Automation provides Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
      }}
    />
  )
}
