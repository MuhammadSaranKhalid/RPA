import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { VideoSchema } from "@/components/seo/video-schema" // Import VideoSchema

export const metadata: Metadata = {
  title: "About EQ Automation - RPA Experts & Business Process Automation",
  description:
    "Learn about EQ Automation's mission to streamline business operations through RPA solutions. Meet our expert team and discover our commitment to automation excellence.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "About EQ Automation",
          description:
            "Learn about EQ Automation's mission to streamline business operations through RPA solutions. Meet our expert team and discover our commitment to automation excellence.",
          url: "https://eqautomation.com/about",
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
                name: "About",
                item: "https://eqautomation.com/about",
              },
            ],
          },
        }}
      />
      {/* Video Schema for the about page video */}
      <VideoSchema
        name="EQ Automation company overview and RPA solutions demonstration"
        description="An overview of EQ Automation's mission and a demonstration of their Robotic Process Automation (RPA) solutions."
        uploadDate="2023-02-20" // Placeholder: Replace with actual upload date
        contentUrl="https://www.youtube.com/watch?v=qR1MZZb7c4U"
        embedUrl="https://www.youtube.com/embed/qR1MZZb7c4U"
        thumbnailUrl="/eq-automation-overview.png" // Placeholder: Replace with actual thumbnail
        duration="PT2M15S" // Placeholder: Replace with actual duration (e.g., "PT2M15S" for 2 min 15 sec)
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted"
          aria-labelledby="about-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h1 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  About EQ Automation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  We're passionate about helping businesses unlock their potential through intelligent automation. Our
                  mission is to make RPA accessible, reliable, and transformative for organizations of all sizes.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="https://calendly.com/contact-eqautomation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a free consultation"
                  >
                    <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Get Started Today</Button>
                  </Link>
                  <Link href="/services" aria-label="Learn more about our services">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/qR1MZZb7c4U"
                    title="EQ Automation company overview and RPA solutions demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24" aria-labelledby="story-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <Image
                  src="/automation-experts-teamwork.webp"
                  alt="EQ Automation team collaborating on RPA solutions and business process automation"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover shadow-xl max-w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <h2 id="story-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our Story
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Founded with a vision to democratize business automation, EQ Automation emerged from the recognition
                  that every business, regardless of size, deserves access to cutting-edge RPA solutions.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Our team of automation experts combines deep technical knowledge with practical business experience to
                  deliver solutions that truly make a difference. We've helped businesses across various industries
                  save thousands of hours and significantly reduce operational costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 bg-muted" aria-labelledby="values-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 id="values-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Our Values
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                These core principles guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <CheckCircle className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We strive for perfection in every automation solution we deliver, ensuring reliability and
                    precision.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Users className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle>Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work closely with our clients as trusted partners, understanding their unique needs and
                    challenges.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Target className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We continuously explore new technologies and methodologies to provide cutting-edge automation
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Award className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We measure our success by the tangible improvements we bring to our clients' operations and
                    productivity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24" aria-labelledby="why-choose-heading">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h2 id="why-choose-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Why Choose EQ Automation?
                </h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Proven Track Record</h3>
                      <p className="text-muted-foreground">
                        Successfully delivered automation solutions across multiple industries with measurable results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">End-to-End Support</h3>
                      <p className="text-muted-foreground">
                        From initial consultation to ongoing maintenance, we provide comprehensive support throughout
                        your automation journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20 shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary dark:text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Rapid Implementation</h3>
                      <p className="text-muted-foreground">
                        Our streamlined process ensures quick deployment without compromising on quality or security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/increasing-productivity-graph.webp"
                  alt="Productivity growth chart showing the impact of RPA automation on business efficiency"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover shadow-xl max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[800px] md:text-xl/relaxed">
                Join the growing number of businesses that have revolutionized their operations with our RPA solutions.
                Let's discuss how we can help you achieve similar results.
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
          </div>
        </section>
      </div>
    </>
  )
}
