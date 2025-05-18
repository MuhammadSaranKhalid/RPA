import { ResponsiveContainer } from "@/components/responsive-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - EQ Automation",
  description: "Learn about how EQ Automation collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col py-12">
      <ResponsiveContainer className="prose dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600 mb-6">
          Privacy Policy
        </h1>

        <p className="text-muted-foreground mb-6">Last updated: May 18, 2025</p>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          EQ Automation ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Fill out forms on our website</li>
          <li>Register for an account</li>
          <li>Subscribe to our newsletter</li>
          <li>Request a consultation</li>
          <li>Contact our customer support</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Providing and maintaining our services</li>
          <li>Improving our website and services</li>
          <li>Communicating with you about our services</li>
          <li>Responding to your inquiries and requests</li>
          <li>Sending you marketing and promotional materials</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and store certain
          information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the
          security of any personal information we process. However, please also remember that no method of transmission
          over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide
          you with advance notice. This does not include website hosting partners and other parties who assist us in
          operating our website, conducting our business, or serving our users.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>The right to access personal information we hold about you</li>
          <li>The right to request correction of inaccurate personal information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to object to processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
