import Link from "next/link"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Privacy Policy - EQ Automation",
  description: "Learn about EQ Automation's privacy policy regarding data collection, usage, and protection.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EQ Automation Privacy Policy",
          description: "Learn about EQ Automation's privacy policy regarding data collection, usage, and protection.",
          url: "https://eqautomation.com/privacy",
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
                name: "Privacy Policy",
                item: "https://eqautomation.com/privacy",
              },
            ],
          },
        }}
      />
      <div className="flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Privacy Policy</h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your data.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-2">
                  We collect various types of information in connection with the services we provide, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    <span className="font-semibold">Personal Information:</span> Name, email address, phone number,
                    company name, and other contact details you provide when you fill out forms or contact us.
                  </li>
                  <li>
                    <span className="font-semibold">Usage Data:</span> Information about how you access and use our
                    website, such as your IP address, browser type, pages visited, and time spent on pages.
                  </li>
                  <li>
                    <span className="font-semibold">Cookies and Tracking Technologies:</span> We use cookies and similar
                    tracking technologies to track activity on our website and hold certain information.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">
                  We use the collected information for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>To provide and maintain our services.</li>
                  <li>To notify you about changes to our services.</li>
                  <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
                  <li>To provide customer support.</li>
                  <li>To gather analysis or valuable information so that we can improve our services.</li>
                  <li>To monitor the usage of our services.</li>
                  <li>To detect, prevent, and address technical issues.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Disclosure of Your Information</h2>
                <p className="text-muted-foreground mb-2">
                  We may disclose your personal information in the good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Comply with a legal obligation.</li>
                  <li>Protect and defend the rights or property of EQ Automation.</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the service.</li>
                  <li>Protect the personal safety of users of the service or the public.</li>
                  <li>Protect against legal liability.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
                <p className="text-muted-foreground">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Your Data Protection Rights</h2>
                <p className="text-muted-foreground mb-2">
                  Depending on your location, you may have the following data protection rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>The right to access, update, or delete the information we have on you.</li>
                  <li>The right of rectification.</li>
                  <li>The right to object.</li>
                  <li>The right of restriction.</li>
                  <li>The right to data portability.</li>
                  <li>The right to withdraw consent.</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  To exercise any of these rights, please contact us at{" "}
                  <Link href="mailto:info@eqautomation.com" className="text-primary hover:underline">
                    info@eqautomation.com
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
                  changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us:
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
