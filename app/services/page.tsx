import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Code, Headphones } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-600">Our Services</h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Unlock the full potential of automation with our end-to-end RPA solutions. From design to deployment, we
              handle everything so you can focus on scaling your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-6 w-6 text-red-600" />
                  <CardTitle>RPA Development</CardTitle>
                </div>
                <CardDescription>Custom automation solutions tailored to your business</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">
                  We build custom Robotic Process Automation solutions tailored to your business processes. Our team
                  works closely with you to understand your workflows and automate them efficiently and securely.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Process analysis and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Custom bot development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integration with existing systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <CardTitle>Rigorous Testing</CardTitle>
                </div>
                <CardDescription>Ensuring your automation works flawlessly</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">
                  Every automation we build goes through extensive testing to ensure stability, accuracy, and
                  reliability in real-world use — so you get a solution that just works.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive test scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Edge case handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Headphones className="h-6 w-6 text-red-600" />
                  <CardTitle>Maintenance & Support</CardTitle>
                </div>
                <CardDescription>Ongoing assistance to keep your automation running</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">
                  Our commitment doesn't stop at deployment. We offer ongoing maintenance and robust backup support to
                  keep your automations running smoothly and minimize downtime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>24/7 monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Regular updates and improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Rapid response to issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="w-full py-12 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm font-medium text-red-600">
              Limited Time Offer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Special Promotion</h2>
            <p className="max-w-[800px] md:text-xl/relaxed">
              We're currently waiving our standard $5,000 initial development fee to $0! — a perfect opportunity to
              start automating without the upfront cost. Don't miss out!
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Claim This Offer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-600">Our Service Process</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              We follow a structured approach to deliver high-quality automation solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mb-4">
                <span className="text-xl font-bold text-red-600 dark:text-red-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-muted-foreground">We discuss your needs and identify automation opportunities.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mb-4">
                <span className="text-xl font-bold text-red-600 dark:text-red-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground">We create a detailed plan for your automation solution.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mb-4">
                <span className="text-xl font-bold text-red-600 dark:text-red-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">We build and test your custom RPA solution.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mb-4">
                <span className="text-xl font-bold text-red-600 dark:text-red-400">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Deployment</h3>
              <p className="text-muted-foreground">We implement the solution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-red-600">Ready to Get Started?</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Book a free consultation today and discover how our RPA solutions can help your business.
            </p>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700">Book a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
