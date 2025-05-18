import { JsonLd } from "@/components/json-ld"

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "EQ Automation",
        image: "https://eqautomation.com/images/eq-light-mode.png",
        "@id": "https://eqautomation.com",
        url: "https://eqautomation.com",
        telephone: "+1-555-123-4567",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Business Ave, Suite 200",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10001",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7128,
          longitude: -74.006,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
        sameAs: [
          "https://twitter.com/eqautomation",
          "https://facebook.com/eqautomation",
          "https://linkedin.com/company/eqautomation",
          "https://instagram.com/eqautomation",
        ],
        priceRange: "$$",
      }}
    />
  )
}
