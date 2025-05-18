import { ResponsiveContainer } from "@/components/responsive-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - EQ Automation",
  description: "Read the terms and conditions governing the use of EQ Automation's website and services.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="flex flex-col py-12">
      <ResponsiveContainer className="prose dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-600 mb-6">
          Terms of Service
        </h1>

        <p className="text-muted-foreground mb-6">Last updated: May 18, 2025</p>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the EQ Automation website and services. By
          accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Use of Services</h2>
        <p>
          You may use our services only as permitted by these Terms and any applicable laws. You may not use our
          services:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail",
            "chain letter", "spam", or any other similar solicitation
          </li>
          <li>
            To impersonate or attempt to impersonate EQ Automation, an EQ Automation employee, another user, or any
            other person or entity
          </li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Intellectual Property Rights</h2>
        <p>
          The services and their entire contents, features, and functionality (including but not limited to all
          information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
          thereof) are owned by EQ Automation, its licensors, or other providers of such material and are protected by
          United States and international copyright, trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Limitation of Liability</h2>
        <p>
          In no event will EQ Automation, its affiliates, or their licensors, service providers, employees, agents,
          officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in
          connection with your use, or inability to use, the services, including any direct, indirect, special,
          incidental, consequential, or punitive damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless EQ Automation, its affiliates, licensors, and service
          providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
          suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
          losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
          violation of these Terms or your use of the services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to Terms</h2>
        <p>
          We may revise and update these Terms from time to time in our sole discretion. All changes are effective
          immediately when we post them, and apply to all access to and use of the services thereafter.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <address className="not-italic mb-8">
          <p>EQ Automation</p>
          <p>123 Business Ave, Suite 200</p>
          <p>New York, NY 10001</p>
          <p>Email: legal@eqautomation.com</p>
          <p>Phone: (555) 123-4567</p>
        </address>
      </ResponsiveContainer>
    </div>
  )
}
