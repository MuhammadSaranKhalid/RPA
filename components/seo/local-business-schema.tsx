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
        telephone: "+1-229-235-5166",
        sameAs: [
          "https://www.linkedin.com/in/muhammad-qasim-mukhtar/",
          "https://www.instagram.com/eq.automation?igsh=djVqZXEzbGRubHBr",
          "https://www.youtube.com/@EQAutomationio",
        ],
        priceRange: "$$",
      }}
    />
  )
}
