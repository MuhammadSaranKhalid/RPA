import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">About Us</h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Learn more about our company and our mission to transform businesses through automation.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/automation-experts-teamwork.png"
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Founded five years ago, our company was built on a passion for automation and a commitment to
                  transforming the way businesses operate. Since then, we've developed and deployed hundreds of Robotic
                  Process Automations (RPAs), helping our clients save thousands of hours in manual work and hundreds of
                  thousands of dollars in operational costs.
                </p>
                <p className="text-muted-foreground">
                  What sets us apart is our relentless focus on customer satisfaction. We don't just build automations —
                  we build relationships. Our team goes above and beyond to ensure every solution we deliver meets our
                  clients' needs and exceeds their expectations. Whether it's streamlining workflows, improving
                  accuracy, or scaling operations, we're here to make automation work for you.
                </p>
                <p className="text-muted-foreground">
                  Let us show you what's possible when innovation meets dedication.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700">Contact Us</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Our Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-600">See Our Work in Action</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Watch how our RPA solutions transform business operations.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600&query=video player showing automation demo"
                alt="Video Placeholder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm">
                  Play Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your business?</h2>
            <p className="max-w-[800px] md:text-xl/relaxed">
              Book a free consultation today and discover how our RPA solutions can help you.
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
