import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button" // Corrected: Added Button import
import { CaseStudy } from "@/lib/case-studies"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={caseStudy.imageUrl || "/placeholder.svg"}
            alt={caseStudy.imageAlt}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardHeader className="flex-grow">
        <Badge variant="secondary" className="mb-2 w-fit">
          {caseStudy.industry}
        </Badge>
        <Link href={`/case-studies/${caseStudy.slug}`} className="block">
          <CardTitle className="text-xl font-bold leading-tight hover:text-primary">
            {caseStudy.title}
          </CardTitle>
        </Link>
        <CardDescription className="mt-2 text-muted-foreground">
          {caseStudy.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto p-4 pt-0">
        <div className="text-sm text-gray-500">
          Client: <span className="font-medium text-foreground">{caseStudy.client}</span>
        </div>
        <Link href={`/case-studies/${caseStudy.slug}`}>
          <Button variant="outline" className="mt-4 w-full">
            Read Case Study
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
