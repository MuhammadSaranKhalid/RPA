"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle, Clock, Mail, Phone, Loader2 } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ResponsiveContainer } from "@/components/responsive-container" // Added ResponsiveContainer import

export default function ContactPageClient() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: date?.toISOString(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitted(true)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
      setDate(undefined)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Book a Free Consultation</h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Ready to see what RPA can do for your business? Let's talk about your workflows and discover how
                automation can save you time and money.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ResponsiveContainer>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-2 border-primary/20">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center h-full">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-900 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your consultation request has been submitted successfully. We'll contact you shortly to confirm your
                      appointment. Please check your email for a confirmation message.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <>
                    <CardHeader>
                      <CardTitle>Schedule Your Free Consultation</CardTitle>
                      <CardDescription>
                        Fill out the form below to book your free consultation with our RPA experts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {error && (
                        <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-md">
                          <p className="text-primary text-sm">{error}</p>
                        </div>
                      )}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Interested in</Label>
                          <Select value={formData.service} onValueChange={handleServiceChange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="invoice-processing">Invoice Processing</SelectItem>
                              <SelectItem value="tax-preparation">Tax Preparation</SelectItem>
                              <SelectItem value="expense-reports">Expense Reports</SelectItem>
                              <SelectItem value="client-onboarding">Client Onboarding</SelectItem>
                              <SelectItem value="document-processing">Document Processing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred consultation date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Tell us about your needs</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Describe the processes you're looking to automate..."
                            className="min-h-[120px]"
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Book Consultation"
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </>
                )}
              </Card>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">contact@eqautomation.io</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">+1 229-235-5166</p>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-muted-foreground">123 Business Ave, Suite 200</p>
                        <p className="text-muted-foreground">New York, NY 10001</p>
                      </div>
                    </div> */}
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM</p>
                        <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Our RPA Solutions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Customized solutions tailored to your specific business needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Experienced team with proven track record of successful implementations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Ongoing support and maintenance to ensure your automation runs smoothly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Transparent pricing with no hidden fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Limited time offer: $0 initial development fee</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        </ResponsiveContainer>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Have questions about our RPA solutions? Find answers to common questions below.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>How long does it take to implement an RPA solution?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implementation time varies based on complexity, but most solutions can be deployed within 2-4 weeks.
                    Simple automations may be ready in just a few days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do I need technical expertise to use RPA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No technical expertise is required. We handle all the technical aspects, and the solutions we build
                    are designed to be user-friendly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How secure is RPA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our RPA solutions are built on Microsoft's secure cloud infrastructure with multiple layers of
                    security, including role-based access control and data loss prevention policies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What's the ROI of implementing RPA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most clients see ROI within 3-6 months. RPA typically reduces processing time by 40-70% and eliminates
                    errors, leading to significant cost savings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  )
}
