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
            email: "info@eqautomation.io",
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
        description:
          "EQ Automation provides Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
      }}
    />
  )
}
