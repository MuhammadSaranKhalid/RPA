import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"

interface CaseStudyPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs()
  return slugs
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {}
  }

  const title = `${caseStudy.title} - EQ Automation Case Study`
  const description = caseStudy.description
  const url = `https://www.eqautomation.com/case-studies/${caseStudy.slug}`
  const imageUrl = `https://www.eqautomation.com${caseStudy.imageUrl}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: imageUrl, alt: caseStudy.imageAlt }],
      type: "article",
      publishedTime: caseStudy.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: caseStudy.title, href: `/case-studies/${caseStudy.slug}` },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": `https://www.eqautomation.com${caseStudy.imageUrl}`,
    "url": `https://www.eqautomation.com/case-studies/${caseStudy.slug}`,
    "datePublished": caseStudy.datePublished,
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
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.eqautomation.com/case-studies/${caseStudy.slug}`
    }
  }

  return (
    <ResponsiveContainer>
      <JsonLd data={jsonLd} />
      <div className="py-8 md:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <article className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl mb-8">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            {caseStudy.description}
          </p>

          <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={caseStudy.imageUrl || "/placeholder.svg"}
              alt={caseStudy.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Client</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.client}</p>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Industry</h2>
              <p className="text-lg text-muted-foreground">{caseStudy.industry}</p>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Date Published</h2>
              <p className="text-lg text-muted-foreground">{new Date(caseStudy.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              {caseStudy.challenge.map((item, index) => (
                <li key={index} className="text-lg text-muted-foreground">{item}</li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              {caseStudy.solution.map((item, index) => (
                <li key={index} className="text-lg text-muted-foreground">{item}</li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              {caseStudy.results.map((item, index) => (
                <li key={index} className="text-lg text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </ResponsiveContainer>
  )
}
