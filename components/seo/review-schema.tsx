import { JsonLd } from "@/components/json-ld"

interface ReviewSchemaProps {
  authorName: string
  reviewBody: string
  ratingValue: number
  itemReviewedName: string
  datePublished: string
}

export function ReviewSchema({
  authorName,
  reviewBody,
  ratingValue,
  itemReviewedName,
  datePublished,
}: ReviewSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": authorName,
        },
        "reviewBody": reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": ratingValue,
          "bestRating": 5,
          "worstRating": 1,
        },
        "itemReviewed": {
          "@type": "Thing",
          "name": itemReviewedName,
        },
        "datePublished": datePublished,
      }}
    />
  )
}
