import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-600">
                  Smarter workflows. Lower costs. Greater impact.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Robotic Process Automation (RPA) uses software bots to handle repetitive tasks - quickly and
                  accurately. It helps businesses save time, cut costs, and let employees focus on more important work.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700">Book Free Consultation</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[600px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/automation-robot-computer.png"
                  alt="RPA Automation"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Without RPA Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
              The RPA Advantage
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Without RPA, employees spend hours on repetitive, manual tasks—which leads to wasted time, higher costs,
              and more human errors. RPA takes over these tasks, working faster and more accurately. This means lower
              operational costs, fewer mistakes, and happier, more productive teams.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Save Time</h3>
                    <p className="text-muted-foreground">
                      Automate repetitive tasks that would take humans hours to complete.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900">
                    <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Reduce Errors</h3>
                    <p className="text-muted-foreground">Eliminate human errors with precise, consistent automation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900">
                    <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Lower Costs</h3>
                    <p className="text-muted-foreground">Reduce operational expenses by automating manual processes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/increasing-productivity-graph.png"
                alt="Increased Productivity with RPA"
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
              How It Works – Simple 3-Step Process
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Our streamlined approach makes implementing RPA solutions quick and hassle-free.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <Card className="relative border-2 border-red-200 dark:border-red-900">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                1
              </div>
              <CardHeader>
                <CardTitle>Discovery Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We start with a quick meeting to understand your workflow and identify the tasks that can be
                  automated.
                </p>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-red-200 dark:border-red-900">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                2
              </div>
              <CardHeader>
                <CardTitle>Build & Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team develops the RPA bot, then thoroughly tests and debugs it to make sure everything runs
                  smoothly.
                </p>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-red-200 dark:border-red-900">
              <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                3
              </div>
              <CardHeader>
                <CardTitle>Launch & Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once ready, the automation is deployed and your team can start using it right away— no hassle, just
                  results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600">
              Secure & Compliant RPA Practices Using Power Automate
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Security is our top priority. We implement industry-leading practices to keep your data safe.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Built on Microsoft's Secure Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Power Automate runs on Microsoft Azure, leveraging its world-class security infrastructure, compliance
                  certifications, and data protection features.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Role-Based Access Control (RBAC)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RPA workflows are managed with granular user permissions, ensuring only authorized personnel can
                  create, modify, or trigger flows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Audit Logs and Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full activity logging and monitoring are available via Microsoft Purview and Power Platform Admin
                  Center to detect anomalies and support compliance reporting.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>DLP (Data Loss Prevention) Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Administrators can enforce DLP policies to control how data is shared across connectors, ensuring
                  sensitive data is not exposed to unapproved systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Environment Isolation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Segmentation of development, testing, and production environments helps prevent accidental changes and
                  ensures secure RPA deployment lifecycles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-6 w-6 text-red-600" />
                <CardTitle>Connector Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Only pre-approved and trusted connectors are used, with strict governance to block high-risk or
                  third-party connectors unless reviewed and allowed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to see what RPA can do for your business?
            </h2>
            <p className="max-w-[800px] md:text-xl/relaxed">
              Let's talk about your workflows and discover how automation can save you time and money. Book a free
              consultation today and take the first step toward smarter, faster operations.
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
