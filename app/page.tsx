import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { ResponsiveContainer } from "@/components/responsive-container"
import { LocalBusinessSchema } from "@/components/seo/local-business-schema"
import { FAQSchema } from "@/components/seo/faq-schema"

export const metadata: Metadata = {
  title: "Home - Robotic Process Automation Solutions",
  description:
    "EQ Automation provides Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EQ Automation - Home",
          description:
            "Robotic Process Automation (RPA) solutions to help businesses save time, cut costs, and let employees focus on more important work.",
          url: "https://eqautomation.com/",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://eqautomation.com/",
              },
            ],
          },
        }}
      />
      <LocalBusinessSchema />
      <FAQSchema
        items={[
          {
            question: "What is Robotic Process Automation (RPA)?",
            answer:
              "Robotic Process Automation (RPA) uses software bots to handle repetitive tasks quickly and accurately. It helps businesses save time, cut costs, and let employees focus on more important work.",
          },
          {
            question: "How can RPA benefit my business?",
            answer:
              "RPA can benefit your business by reducing operational costs, eliminating human errors, increasing productivity, and allowing your employees to focus on higher-value tasks.",
          },
          {
            question: "How long does it take to implement an RPA solution?",
            answer:
              "Implementation time varies based on complexity, but most solutions can be deployed within 2-4 weeks. Simple automations may be ready in just a few days.",
          },
        ]}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted"
          aria-labelledby="hero-heading"
        >
          <ResponsiveContainer>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    id="hero-heading"
                    className="mb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-primary"
                  >
                    Smarter workflows. Lower costs. Greater impact.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Robotic Process Automation (RPA) uses software bots to handle repetitive tasks - quickly and
                    accurately. It helps businesses save time, cut costs, and let employees focus on more important
                    work.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="https://calendly.com/contact-eqautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a free consultation"
                  >
                    <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Book Free Consultation</Button>
                  </Link>
                  <Link href="/services" aria-label="Learn more about our services">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-[400px] aspect-[9/12] rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/q72YYivTZB0"
                    title="RPA automation demonstration video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Without RPA Section */}
        <section className="w-full py-12 md:py-24 bg-muted" aria-labelledby="rpa-advantage-heading">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2
                id="rpa-advantage-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
              >
                The RPA Advantage
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Without RPA, employees spend hours on repetitive, manual tasks—which leads to wasted time, higher costs,
                and more human errors. RPA takes over these tasks, working faster and more accurately. This means lower
                operational costs, fewer mistakes, and happier, more productive teams.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <Clock className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Save Time</h3>
                      <p className="text-muted-foreground">
                        Automate repetitive tasks that would take humans hours to complete.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Reduce Errors</h3>
                      <p className="text-muted-foreground">
                        Eliminate human errors with precise, consistent automation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <FileText className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Lower Costs</h3>
                      <p className="text-muted-foreground">
                        Reduce operational expenses by automating manual processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <Image
                  src="/rpa-savings-graph.png"
                  alt="Line graph showing increasing time and money saved as RPA implementation progresses"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="how-it-works-heading">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2
                id="how-it-works-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
              >
                How It Works – Simple 3-Step Process
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Our streamlined approach makes implementing RPA solutions quick and hassle-free.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card className="relative border-2 border-primary/20 dark:border-primary/30">
                <div
                  className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
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
              <Card className="relative border-2 border-primary/20 dark:border-primary/30 mt-8 sm:mt-0">
                <div
                  className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
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
              <Card className="relative border-2 border-primary/20 dark:border-primary/30 mt-8 md:mt-0">
                <div
                  className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
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
          </ResponsiveContainer>
        </section>

        {/* Privacy & Security Section */}
        <section className="w-full py-12 md:py-24 bg-muted" aria-labelledby="security-heading">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2
                id="security-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
              >
                Secure & Compliant RPA Practices
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Security is our top priority. We implement industry-leading practices to keep your data safe.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <CardTitle>Built on Microsoft's Secure Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Power Automate runs on Microsoft Azure, leveraging its world-class security infrastructure,
                    compliance certifications, and data protection features.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <CardTitle>Role-Based Access Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    RPA workflows are managed with granular user permissions, ensuring only authorized personnel can
                    create, modify, or trigger flows.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <CardTitle>Audit Logs and Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full activity logging and monitoring are available via Microsoft Purview and Power Platform Admin
                    Center to detect anomalies and support compliance reporting.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <CardTitle>Data Loss Prevention Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Administrators can enforce DLP policies to control how data is shared across connectors, ensuring
                    sensitive data is not exposed to unapproved systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <CardTitle>Environment Isolation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Segmentation of development, testing, and production environments helps prevent accidental changes
                    and ensures secure RPA deployment lifecycles.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
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
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="testimonials-heading">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2
                id="testimonials-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
              >
                What Our Clients Say
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Don't just take our word for it. Here's what businesses are saying about their RPA transformation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Game-changing efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "EQ Automation transformed our invoice processing from a 3-hour daily task to just 15 minutes. Our
                    team can now focus on strategic work instead of data entry."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Mitchell</p>
                      <p className="text-sm text-muted-foreground">Finance Director, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Incredible ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "Within 6 months, we saved over $50,000 in operational costs. The RPA solution paid for itself in
                    just 3 months. Highly recommend EQ Automation!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">Operations Manager, RetailPlus</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Seamless implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "The team made the entire process effortless. From discovery to deployment, everything was handled
                    professionally. Our customer onboarding is now 80% faster."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">LC</span>
                    </div>
                    <div>
                      <p className="font-semibold">Lisa Chen</p>
                      <p className="text-sm text-muted-foreground">CEO, StartupHub</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white" aria-labelledby="cta-heading">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to see what RPA can do for your business?
              </h2>
              <p className="max-w-[800px] md:text-xl/relaxed">
                Let's talk about your workflows and discover how automation can save you time and money. Book a free
                consultation today and take the first step toward smarter, faster operations.
              </p>
              <Link
                href="https://calendly.com/contact-eqautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free consultation"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  )
}
