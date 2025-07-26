import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_HHyshPxH_LNnRkZqKsTA427dh4SkfnvzB")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, date, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to your business
    const { data, error } = await resend.emails.send({
      from: "EQ Automation <noreply@eqautomation.io>",
      to: ["info@eqautomation.io"],
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Consultation Request</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            ${service ? `<p><strong>Interested in:</strong> ${service}</p>` : ""}
            ${date ? `<p><strong>Preferred Date:</strong> ${new Date(date).toLocaleDateString()}</p>` : ""}
          </div>

          ${
            message
              ? `
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "EQ Automation <noreply@eqautomation.io>",
      to: [email],
      subject: "Thank you for your consultation request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Thank You for Your Interest!</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for requesting a consultation with EQ Automation. We've received your request and will contact you shortly to schedule your free consultation.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">What happens next?</h3>
            <ul style="color: #374151;">
              <li>Our team will review your request within 24 hours</li>
              <li>We'll contact you to confirm your preferred consultation date</li>
              <li>We'll prepare a customized discussion based on your needs</li>
            </ul>
          </div>

          <p>In the meantime, feel free to explore our <a href="https://eqautomation.io/services" style="color: #dc2626;">services</a> or <a href="https://eqautomation.io/use-cases" style="color: #dc2626;">use cases</a> to learn more about how RPA can benefit your business.</p>
          
          <p>Best regards,<br>
          The EQ Automation Team</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>EQ Automation<br>
            123 Business Ave, Suite 200<br>
            New York, NY 10001<br>
            (555) 123-4567</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
