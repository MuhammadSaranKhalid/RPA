import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { ResponsiveContainer } from "@/components/responsive-container" // Import ResponsiveContainer

export const metadata: Metadata = {
  title: "Privacy Policy - EQ Automation",
  description: "Read the privacy policy of EQ Automation regarding data collection and usage.",
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
          name: "Privacy Policy - EQ Automation",
          description: "Read the privacy policy of EQ Automation regarding data collection and usage.",
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
      <ResponsiveContainer> {/* Added ResponsiveContainer */}
        <div className="py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl mb-8">
            Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This Privacy Policy describes how EQ Automation ("we," "us," or "our") collects, uses, and discloses
              your personal information when you visit our website and use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect various types of information in connection with the services we provide, including:</p>
            <ul>
              <li>
                **Personal Information:** This includes information that can be used to identify you, such as your
                name, email address, phone number, and company name, which you voluntarily provide when you fill out
                contact forms, subscribe to newsletters, or request consultations.
              </li>
              <li>
                **Usage Data:** We automatically collect information about how you access and use our website,
                including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates
                and times of your visits.
              </li>
              <li>
                **Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track the
                activity on our website and hold certain information. For more details, please refer to our Cookie
                Policy.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including to:</p>
            <ul>
              <li>Provide and maintain our services.</li>
              <li>Improve, personalize, and expand our website and services.</li>
              <li>Communicate with you, including responding to your inquiries and providing customer support.</li>
              <li>Send you marketing and promotional communications, if you have opted in.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
              <li>Detect, prevent, and address technical issues or security incidents.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with third parties in the following situations:</p>
            <ul>
              <li>
                **Service Providers:** We may share your information with third-party vendors, consultants, and other
                service providers who perform services on our behalf, such as website hosting, data analysis, and
                email delivery.
              </li>
              <li>
                **Business Transfers:** In connection with any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business by another company.
              </li>
              <li>
                **Legal Requirements:** We may disclose your information if required to do so by law or in response to
                valid requests by public authorities (e.g., a court or a government agency).
              </li>
              <li>
                **With Your Consent:** We may disclose your personal information for any other purpose with your
                consent.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures designed to protect your personal information from unauthorized
              access, use, or disclosure. However, no method of transmission over the Internet or method of electronic
              storage is 100% secure.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>
                **Access:** The right to request copies of your personal data.
              </li>
              <li>
                **Rectification:** The right to request that we correct any information you believe is inaccurate or
                complete information you believe is incomplete.
              </li>
              <li>
                **Erasure:** The right to request that we erase your personal data, under certain conditions.
              </li>
              <li>
                **Restriction of Processing:** The right to request that we restrict the processing of your personal
                data, under certain conditions.
              </li>
              <li>
                **Object to Processing:** The right to object to our processing of your personal data, under certain
                conditions.
              </li>
              <li>
                **Data Portability:** The right to request that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these
              rights, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@eqautomation.io">info@eqautomation.io</a>.
            </p>
          </div>
        </div>
      </ResponsiveContainer> {/* Closed ResponsiveContainer */}
    </>
  )
}
