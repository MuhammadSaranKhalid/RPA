export interface CaseStudy {
  slug: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  client: string
  industry: string
  challenge: string[]
  solution: string[]
  results: string[]
  datePublished: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "automated-invoice-processing",
    title: "Automated Invoice Processing for a Large Retailer",
    description: "Streamlined invoice processing, reducing manual effort by 80% and improving accuracy.",
    imageUrl: "/automated-invoice-dashboard.png",
    imageAlt: "Dashboard showing automated invoice processing metrics",
    client: "Global Retail Corp",
    industry: "Retail",
    challenge: [
      "Manual invoice processing was time-consuming and prone to errors.",
      "High volume of invoices led to delays in vendor payments.",
      "Lack of real-time visibility into invoice status."
    ],
    solution: [
      "Implemented an RPA solution to automate invoice data extraction from various formats (PDF, email, scanned images).",
      "Integrated with existing ERP system for automated data entry and validation.",
      "Developed a dashboard for real-time tracking of invoice processing."
    ],
    results: [
      "80% reduction in manual data entry.",
      "95% improvement in invoice processing accuracy.",
      "Reduced invoice processing time from days to hours.",
      "Improved vendor relationships due to timely payments."
    ],
    datePublished: "2023-01-15"
  },
  {
    slug: "accelerating-client-onboarding",
    title: "Accelerating Client Onboarding for a Financial Services Firm",
    description: "Automated client onboarding, cutting down the process time by 60% and enhancing customer experience.",
    imageUrl: "/client-onboarding-automation.png",
    imageAlt: "Diagram illustrating automated client onboarding process",
    client: "Wealth Management Inc.",
    industry: "Financial Services",
    challenge: [
      "Lengthy and complex client onboarding process.",
      "Manual data collection and verification led to delays and compliance risks.",
      "Inconsistent customer experience across different channels."
    ],
    solution: [
      "Deployed RPA bots to collect and validate client information from multiple sources.",
      "Automated document generation and e-signature workflows.",
      "Integrated with CRM and compliance systems for seamless data flow."
    ],
    results: [
      "60% reduction in client onboarding time.",
      "Improved data accuracy and compliance adherence.",
      "Enhanced customer satisfaction with a faster, smoother onboarding experience.",
      "Freed up staff to focus on high-value client interactions."
    ],
    datePublished: "2023-03-20"
  },
  {
    slug: "optimizing-hr-data-management",
    title: "Optimizing HR Data Management for a Tech Company",
    description: "Automated HR data entry and updates, leading to significant time savings and improved data integrity.",
    imageUrl: "/hr-automation-dashboard.png",
    imageAlt: "HR automation dashboard showing employee data metrics",
    client: "Innovate Tech Solutions",
    industry: "Technology",
    challenge: [
      "Manual entry of employee data into multiple HR systems.",
      "Frequent data discrepancies and errors due to human intervention.",
      "Time-consuming process for updating employee records."
    ],
    solution: [
      "Implemented RPA to automate data transfer between HRIS, payroll, and benefits systems.",
      "Developed bots for automated onboarding and offboarding data updates.",
      "Created automated reports for HR analytics and compliance."
    ],
    results: [
      "40% reduction in HR administrative tasks.",
      "Improved data accuracy and consistency across all HR platforms.",
      "Faster processing of employee changes and updates.",
      "Enabled HR team to focus on strategic initiatives rather than manual data entry."
    ],
    datePublished: "2023-05-10"
  }
]

export function getAllCaseStudySlugs() {
  return caseStudies.map(cs => ({
    slug: cs.slug
  }))
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(cs => cs.slug === slug)
}
