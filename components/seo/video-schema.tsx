import { JsonLd } from "@/components/json-ld"

interface VideoSchemaProps {
  name: string
  description: string
  uploadDate: string
  contentUrl: string
  embedUrl: string
  thumbnailUrl: string
  duration?: string // ISO 8601 format, e.g., "PT1M30S" for 1 minute 30 seconds
}

export function VideoSchema({
  name,
  description,
  uploadDate,
  contentUrl,
  embedUrl,
  thumbnailUrl,
  duration,
}: VideoSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name,
        description,
        uploadDate,
        contentUrl,
        embedUrl,
        thumbnailUrl,
        ...(duration && { duration }),
      }}
    />
  )
}
