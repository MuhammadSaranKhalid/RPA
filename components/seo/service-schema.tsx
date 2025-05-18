import { JsonLd } from "@/components/json-ld"

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = "EQ Automation",
  areaServed = "Worldwide",
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
      }}
    />
  )
}
