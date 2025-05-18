import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-sm text-muted-foreground">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="flex items-center hover:text-primary">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" aria-hidden="true" />
            {item.active ? (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
