import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eqautomation.io'

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/cookies`, lastModified: new Date() },
    { url: `${baseUrl}/case-studies`, lastModified: new Date() }, // Added case studies listing page
  ]

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.datePublished),
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
