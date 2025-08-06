import Link from "next/link"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Terms and Conditions - EQ Automation",
  description: "Review EQ Automation's terms and conditions for using our website and services.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EQ Automation Terms and Conditions",
          description: "Review EQ Automation's terms and conditions for using our website and services.",
          url: "https://eqautomation.com/terms",
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
                name: "Terms and Conditions",
                item: "https://eqautomation.com/terms",
              },
            ],
          },
        }}
      />
      <div className="flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Terms and Conditions</h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the services provided by EQ Automation, you agree to be bound by these Terms and
                  Conditions. If you disagree with any part of the terms, then you may not access the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                <p className="text-muted-foreground">
                  EQ Automation provides Robotic Process Automation (RPA) solutions, including but not limited to
                  consultation, development, testing, deployment, and maintenance of automation bots. Our services are
                  designed to streamline business processes, reduce manual effort, and improve efficiency for our
                  clients.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-2">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate and complete information when requested.</li>
                  <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
                  <li>Maintain the confidentiality of any account credentials provided to you.</li>
                  <li>Comply with all applicable laws and regulations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, trademarks, and data on this website, including but not limited to text, graphics, logos,
                  icons, images, and software, are the property of EQ Automation or its content suppliers and are
                  protected by international copyright laws. You may not reproduce, distribute, modify, or create
                  derivative works from any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  In no event shall EQ Automation, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from (i) your access to or use of or inability to access or use the service; (ii) any
                  conduct or content of any third party on the service; (iii) any content obtained from the service; and
                  (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on
                  warranty, contract, tort (including negligence), or any other legal theory, whether or not we have
                  been informed of the possibility of such damage, and even if a remedy set forth herein is found to
                  have failed of its essential purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed and construed in accordance with the laws of [Your Country/State],
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of
                  these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    By email:{" "}
                    <Link href="mailto:info@eqautomation.com" className="text-primary hover:underline">
                      info@eqautomation.com
                    </Link>
                  </li>
                  <li>
                    By visiting this page on our website:{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      eqautomation.com/contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
