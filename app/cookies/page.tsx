import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { ResponsiveContainer } from "@/components/responsive-container" // Import ResponsiveContainer

export const metadata: Metadata = {
  title: "Cookie Policy - EQ Automation",
  description: "Learn about the cookie policy of EQ Automation.",
  alternates: {
    canonical: "/cookies",
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Cookie Policy - EQ Automation",
          description: "Learn about the cookie policy of EQ Automation.",
          url: "https://eqautomation.com/cookies",
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
                name: "Cookie Policy",
                item: "https://eqautomation.com/cookies",
              },
            ],
          },
        }}
      />
      <ResponsiveContainer> {/* Added ResponsiveContainer */}
        <div className="py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl mb-8">
            Cookie Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>

            <h2>What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work or to work more efficiently, as well as to provide reporting
              information.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for several reasons:</p>
            <ul>
              <li>
                **Essential Cookies:** These cookies are strictly necessary to provide you with services available
                through our website and to enable you to use some of its features. Without these cookies, we cannot
                provide certain services.
              </li>
              <li>
                **Performance and Functionality Cookies:** These cookies are used to enhance the performance and
                functionality of our website but are non-essential to their use. However, without these cookies,
                certain functionality may become unavailable.
              </li>
              <li>
                **Analytics and Customization Cookies:** These cookies collect information that is used either in
                aggregate form to help us understand how our website is being used or how effective our marketing
                campaigns are, or to help us customize our website for you.
              </li>
            </ul>

            <h2>Your Choices Regarding Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie
              preferences by clicking on the appropriate opt-out links provided in the cookie table below, or by
              setting your preferences in your web browser.
            </p>
            <p>
              Most web browsers allow you to manage cookies through their settings. You can set your browser to refuse
              all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our Service.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at{" "}
              <a href="mailto:info@eqautomation.io">info@eqautomation.io</a>.
            </p>
          </div>
        </div>
      </ResponsiveContainer> {/* Closed ResponsiveContainer */}
    </>
  )
}
