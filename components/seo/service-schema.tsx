import { JsonLd } from "@/components/json-ld"

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
  price?: string
  priceCurrency?: string
  serviceType?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = "EQ Automation",
  areaServed = "Worldwide",
  price,
  priceCurrency = "USD",
  serviceType = "RPA Solution",
}: ServiceSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "Organization",
          name: provider,
          url: "https://eqautomation.com",
        },
        areaServed,
        url,
        serviceType,
        ...(price && {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency,
            availability: "https://schema.org/InStock",
          },
        }),
      }}
    />
  )
}
