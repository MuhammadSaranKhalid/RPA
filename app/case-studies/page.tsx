import { Metadata } from "next"
import { caseStudies } from "@/lib/case-studies"
import { CaseStudyCard } from "@/components/case-study-card"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Case Studies - EQ Automation",
  description: "Explore our successful automation projects and see how we've helped businesses achieve their goals.",
  openGraph: {
    title: "Case Studies - EQ Automation",
    description: "Explore our successful automation projects and see how we've helped businesses achieve their goals.",
    url: "https://www.eqautomation.com/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - EQ Automation",
    description: "Explore our successful automation projects and see how we've helped businesses achieve their goals.",
  },
}

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies - EQ Automation",
    "description": "Explore our successful automation projects and see how we've helped businesses achieve their goals.",
    "url": "https://www.eqautomation.com/case-studies",
    "mainEntity": caseStudies.map(cs => ({
      "@type": "Article",
      "headline": cs.title,
      "description": cs.description,
      "image": cs.imageUrl,
      "url": `https://www.eqautomation.com/case-studies/${cs.slug}`,
      "datePublished": cs.datePublished,
      "author": {
        "@type": "Organization",
        "name": "EQ Automation"
      },
      "publisher": {
        "@type": "Organization",
        "name": "EQ Automation",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.eqautomation.com/images/eq-light-mode.png"
        }
      }
    }))
  }

  return (
    <ResponsiveContainer>
      <JsonLd data={jsonLd} />
      <div className="py-8 md:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl mt-8 mb-12">
          Our Success Stories
        </h1>
        <p className="mt-4 text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Discover how EQ Automation has helped businesses like yours achieve significant efficiencies and cost savings through intelligent automation.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  )
}
