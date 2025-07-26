import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, CreditCard, UserPlus, FileSearch } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Use Cases - RPA Applications Across Industries",
  description:
    "Discover real-world applications of our RPA solutions including invoice processing, tax preparation, expense report analysis, client onboarding, and document classification.",
  alternates: {
    canonical: "/use-cases",
  },
}

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EQ Automation Use Cases",
          description: "Real-world applications of our RPA solutions across various industries and business processes.",
          url: "https://eqautomation.com/use-cases",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://eqautomation.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Use Cases",
                item: "https://eqautomation.com/use-cases",
              },
            ],
          },
        }}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted"
          aria-labelledby="use-cases-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 id="use-cases-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                Use Cases
              </h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Discover how our RPA solutions can transform various business processes across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24" aria-labelledby="use-cases-list-heading">
          <div className="container px-4 md:px-6">
            <h2 id="use-cases-list-heading" className="sr-only">
              RPA Use Cases
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full" id="invoice-processing">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle>Automated Invoice Processing & Reporting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1 min-h-[120px]">
                    RPA can extract data from invoices, organize it into Excel spreadsheets, and generate detailed
                    revenue reports by service. It can also pull related data from your CRM and automatically send out
                    invoices to customers—saving time and ensuring accuracy.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/automate-invoice-processing.png"
                      alt="Professional demonstrating automated invoice processing with laptop showing invoice application interface"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full" id="tax-preparation">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle>Tax Return Preparation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1 min-h-[120px]">
                    Whether you're using cloud-based or legacy tax software, RPA can handle data entry and form
                    population, reducing the time spent on manual input and lowering the risk of errors during tax
                    return preparation.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/tax-return-preparation-rpa.png"
                      alt="Professional tax return preparation automation showing tax form and calculator with RPA technology"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full" id="expense-reports">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle>Expense Report Analysis & QA</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1 min-h-[120px]">
                    Bots can review employee expense reports, check them against company policies, and flag
                    discrepancies or missing information. This ensures compliance and reduces the workload on finance
                    teams.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/expense-report-analysis-rpa.png"
                      alt="Professional expense reporting automation showing pie chart breakdown of expenses by category with RPA technology"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full" id="client-onboarding">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <UserPlus className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle>Client Onboarding Automation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1 min-h-[120px]">
                    RPA can streamline the entire onboarding process—sending personalized welcome emails, creating
                    accounts in internal systems, and dispatching documents for e-signature. All of this happens
                    automatically, improving speed and client experience.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/client-onboarding-automation-rpa.png"
                      alt="Professional client onboarding automation showing handshake with digital onboarding interface elements and RPA technology"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full" id="document-classification">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileSearch className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle>Document Classification & Data Extraction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground flex-1 min-h-[120px]">
                    RPA can identify document types (like invoices, contracts, or receipts), sort them into designated
                    folders, and extract relevant data for storage or further processing—eliminating tedious manual
                    work.
                  </p>
                  <div className="mt-6">
                    <Image
                      src="/document-classification-extraction-rpa.png"
                      alt="Professional document extraction automation showing digital document processing and classification with RPA technology"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* RPA Capabilities Section */}
        <section className="w-full py-12 md:py-24 bg-muted" aria-labelledby="capabilities-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 id="capabilities-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Unlimited Possibilities
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                RPA isn't limited by APIs or system restrictions—it mimics human actions and works across almost any
                website or desktop application. That means it can automate nearly any task you can think of. The
                possibilities are endless—if a human can do it on a computer, RPA can too.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <FileText className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Entry & Extraction</h3>
                <p className="text-muted-foreground">Automate repetitive data entry tasks across multiple systems.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <FileCheck className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Report Generation</h3>
                <p className="text-muted-foreground">Create and distribute reports automatically on schedule.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <CreditCard className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Payment Processing & Invoicing</h3>
                <p className="text-muted-foreground">Automate payment reconciliation and financial workflows.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <UserPlus className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">HR Processes</h3>
                <p className="text-muted-foreground">Streamline employee onboarding and HR documentation.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <FileSearch className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Monitoring</h3>
                <p className="text-muted-foreground">Automatically check for regulatory compliance issues.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20 mb-4" aria-hidden="true">
                  <FileText className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Workflows</h3>
                <p className="text-muted-foreground">Create tailored automation for your unique business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-white" aria-labelledby="automate-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 id="automate-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to automate your business processes?
              </h2>
              <p className="max-w-[800px] md:text-xl/relaxed">
                Book a free consultation today and discover how our RPA solutions can transform your operations.
              </p>
              <Link href="/contact" aria-label="Book a free consultation">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
