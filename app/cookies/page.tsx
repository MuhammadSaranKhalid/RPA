import { ResponsiveContainer } from "@/components/responsive-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - EQ Automation",
  description: "Learn about how EQ Automation uses cookies and similar technologies on our website.",
  alternates: {
    canonical: "/cookies",
  },
}

export default function CookiesPage() {
  return (
    <div className="flex flex-col py-12">
      <ResponsiveContainer className="prose dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600 mb-6">Cookie Policy</h1>

        <p className="text-muted-foreground mb-6">Last updated: May 18, 2025</p>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          This Cookie Policy explains how EQ Automation ("we", "our", or "us") uses cookies and similar technologies on
          our website. By using our website, you consent to the use of cookies as described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to
          make websites work more efficiently and provide information to the website owners.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Types of Cookies We Use</h2>
        <p>We use the following types of cookies on our website:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and
            cannot be switched off in our systems.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can
            measure and improve the performance of our site.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and
            personalization.
          </li>
          <li>
            <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to
            build a profile of your interests.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">How to Manage Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
          ability of websites to set cookies, you may impact your overall user experience. To find out more about
          cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
            www.allaboutcookies.org
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie
          Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
        <p>If you have any questions about this Cookie Policy, please contact us at:</p>
        <address className="not-italic mb-8">
          <p>EQ Automation</p>
          <p>123 Business Ave, Suite 200</p>
          <p>New York, NY 10001</p>
          <p>Email: privacy@eqautomation.com</p>
          <p>Phone: (555) 123-4567</p>
        </address>
      </ResponsiveContainer>
    </div>
  )
}
