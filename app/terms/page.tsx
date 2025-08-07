import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { ResponsiveContainer } from "@/components/responsive-container" // Import ResponsiveContainer

export const metadata: Metadata = {
  title: "Terms of Service - EQ Automation",
  description: "Review the terms of service for using EQ Automation's website and services.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service - EQ Automation",
          description: "Review the terms of service for using EQ Automation's website and services.",
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
                name: "Terms of Service",
                item: "https://eqautomation.com/terms",
              },
            ],
          },
        }}
      />
      <ResponsiveContainer> {/* Added ResponsiveContainer */}
        <div className="py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl mb-8">
            Terms of Service
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Welcome to EQ Automation! These Terms of Service ("Terms") govern your use of our website and services.
              By accessing or using our website and services, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using EQ Automation's website and services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms, as well as our Privacy Policy and Cookie Policy. If you
              do not agree with any part of these Terms, you must not use our website or services.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              EQ Automation provides Robotic Process Automation (RPA) solutions, including but not limited to:
            </p>
            <ul>
              <li>RPA Development</li>
              <li>Rigorous Testing of RPA solutions</li>
              <li>Ongoing Maintenance and Support for RPA deployments</li>
              <li>Consultation and process analysis for automation opportunities</li>
            </ul>
            <p>
              The specific details of services provided will be outlined in a separate agreement or proposal between EQ
              Automation and the client.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>As a user of our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when requested.</li>
              <li>Use our website and services only for lawful purposes and in accordance with these Terms.</li>
              <li>Not engage in any activity that interferes with or disrupts the functionality of our website or
                services.</li>
              <li>Not attempt to gain unauthorized access to any part of our website, services, or related systems.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed on our website are the property of EQ
              Automation or its licensors. You may not use, reproduce, distribute, or create derivative works from any
              content without our express written permission.
            </p>

            <h2>5. Disclaimers</h2>
            <p>
              Our website and services are provided on an "as is" and "as available" basis. EQ Automation makes no
              warranties, express or implied, regarding the accuracy, reliability, or completeness of any content or
              services provided. We do not guarantee that our website will be uninterrupted or error-free.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, EQ Automation shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
              resulting from (a) your access to or use of or inability to access or use the website or services; (b)
              any conduct or content of any third party on the website; or (c) unauthorized access, use, or alteration
              of your transmissions or content.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., the
              State of New York, USA], without regard to its conflict of law provisions.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:info@eqautomation.io">info@eqautomation.io</a>.
            </p>
          </div>
        </div>
      </ResponsiveContainer> {/* Closed ResponsiveContainer */}
    </>
  )
}
