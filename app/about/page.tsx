import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { VideoSchema } from "@/components/seo/video-schema";
import { ResponsiveContainer } from "@/components/responsive-container"; // Import ResponsiveContainer

export const metadata: Metadata = {
  title: "About EQ Automation - RPA Experts & Business Process Automation",
  description:
    "Learn about EQ Automation's mission to streamline business operations through RPA solutions. Meet our expert team and discover our commitment to automation excellence.",
  alternates: {
    canonical: "/about",
  },
};

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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1
                id="about-heading"
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary"
              >
                About Us
              </h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Learn more about our company and our mission to transform
                businesses through automation.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section
          className="w-full py-12 md:py-24"
          aria-labelledby="our-story-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-full h-[300px] max-w-[600px] aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/qR1MZZb7c4U"
                    title="EQ Automation team collaboration and RPA solutions"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h2 id="our-story-heading" className="text-2xl font-bold">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground">
                    Founded five years ago, our company was built on a passion
                    for automation and a commitment to transforming the way
                    businesses operate. Since then, we've developed and deployed
                    hundreds of Robotic Process Automations (RPAs), helping our
                    clients save thousands of hours in manual work and hundreds
                    of thousands of dollars in operational costs.
                  </p>
                  <p className="text-muted-foreground">
                    What sets us apart is our relentless focus on customer
                    satisfaction. We don't just build automations — we build
                    relationships. Our team goes above and beyond to ensure
                    every solution we deliver meets our clients' needs and
                    exceeds their expectations. Whether it's streamlining
                    workflows, improving accuracy, or scaling operations, we're
                    here to make automation work for you.
                  </p>
                  <p className="text-muted-foreground">
                    Let us show you what's possible when innovation meets
                    dedication.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/contact" aria-label="Contact our team">
                    <Button className="bg-primary hover:bg-primary/90">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services" aria-label="View our services">
                    <Button variant="outline">Our Services</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          className="w-full py-12 md:py-24 bg-muted"
          aria-labelledby="values-heading"
        >
          <ResponsiveContainer>
            {" "}
            {/* Added ResponsiveContainer */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2
                id="values-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary"
              >
                Our Values
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                These core principles guide everything we do and shape how we
                serve our clients.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <CheckCircle
                        className="h-6 w-6 text-primary dark:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We strive for perfection in every automation solution we
                    deliver, ensuring reliability and precision.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Users
                        className="h-6 w-6 text-primary dark:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <CardTitle>Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work closely with our clients as trusted partners,
                    understanding their unique needs and challenges.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Target
                        className="h-6 w-6 text-primary dark:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We continuously explore new technologies and methodologies
                    to provide cutting-edge automation
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                      <Award
                        className="h-6 w-6 text-primary dark:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We measure our success by the tangible improvements we bring
                    to our clients' operations and productivity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ResponsiveContainer>{" "}
          {/* Closed ResponsiveContainer */}
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-12 md:py-24 bg-primary text-white"
          aria-labelledby="cta-heading"
        >
          <ResponsiveContainer>
            {" "}
            {/* Added ResponsiveContainer */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2
                id="cta-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
              >
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[800px] md:text-xl/relaxed">
                Join the growing number of businesses that have revolutionized
                their operations with our RPA solutions. Let's discuss how we
                can help you achieve similar results.
              </p>
              <Link
                href="https://calendly.com/contact-eqautomation/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free consultation"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </ResponsiveContainer>{" "}
          {/* Closed ResponsiveContainer */}
        </section>
      </div>
    </>
  );
}
