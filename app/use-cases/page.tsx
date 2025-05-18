import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, CreditCard, UserPlus, FileSearch } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UseCasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Use Cases</h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Discover how our RPA solutions can transform various business processes across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-6 w-6 text-red-600" />
                  <CardTitle>Automated Invoice Processing & Reporting</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  RPA can extract data from invoices, organize it into Excel spreadsheets, and generate detailed revenue
                  reports by service. It can also pull related data from your CRM and automatically send out invoices to
                  customers—saving time and ensuring accuracy.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=invoice processing automation"
                    alt="Invoice Processing"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="h-6 w-6 text-red-600" />
                  <CardTitle>Tax Return Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Whether you're using cloud-based or legacy tax software, RPA can handle data entry and form
                  population, reducing the time spent on manual input and lowering the risk of errors during tax return
                  preparation.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=tax return automation"
                    alt="Tax Return Preparation"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-6 w-6 text-red-600" />
                  <CardTitle>Expense Report Analysis & QA</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Bots can review employee expense reports, check them against company policies, and flag discrepancies
                  or missing information. This ensures compliance and reduces the workload on finance teams.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=expense report analysis automation"
                    alt="Expense Report Analysis"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <UserPlus className="h-6 w-6 text-red-600" />
                  <CardTitle>Client Onboarding Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  RPA can streamline the entire onboarding process—sending personalized welcome emails, creating
                  accounts in internal systems, and dispatching documents for e-signature. All of this happens
                  automatically, improving speed and client experience.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=client onboarding automation"
                    alt="Client Onboarding"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileSearch className="h-6 w-6 text-red-600" />
                  <CardTitle>Document Classification & Data Extraction</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  RPA can identify document types (like invoices, contracts, or receipts), sort them into designated
                  folders, and extract relevant data for storage or further processing—eliminating tedious manual work.
                </p>
                <div className="mt-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=document classification automation"
                    alt="Document Classification"
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
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-600">Unlimited Possibilities</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              RPA isn't limited by APIs or system restrictions—it mimics human actions and works across almost any
              website or desktop application. That means it can automate nearly any task you can think of. The
              possibilities are endless—if a human can do it on a computer, RPA can too.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Entry & Extraction</h3>
              <p className="text-muted-foreground">Automate repetitive data entry tasks across multiple systems.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <FileCheck className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Report Generation</h3>
              <p className="text-muted-foreground">Create and distribute reports automatically on schedule.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <CreditCard className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
              <p className="text-muted-foreground">Automate payment reconciliation and financial workflows.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <UserPlus className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">HR Processes</h3>
              <p className="text-muted-foreground">Streamline employee onboarding and HR documentation.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <FileSearch className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compliance Monitoring</h3>
              <p className="text-muted-foreground">Automatically check for regulatory compliance issues.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900 mb-4">
                <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Workflows</h3>
              <p className="text-muted-foreground">Create tailored automation for your unique business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to automate your business processes?
            </h2>
            <p className="max-w-[800px] md:text-xl/relaxed">
              Book a free consultation today and discover how our RPA solutions can transform your operations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
