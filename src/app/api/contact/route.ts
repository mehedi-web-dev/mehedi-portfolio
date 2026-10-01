import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      service,
      message,
    } = body;

    // Check required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Mehedi.Dev Website" <${process.env.EMAIL_USER}>`,
      to: "mehedihasan958327@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 30px;">

          <h2>New Contact Form Submission</h2>

          <div style="border: 1px solid #ddd; border-radius: 12px; padding: 20px;">

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Subject:</strong><br />
              ${subject}
            </p>

            <p>
              <strong>Service:</strong><br />
              ${service || "Not specified"}
            </p>

            <p>
              <strong>Message:</strong><br />
              ${message.replace(/\n/g, "<br />")}
            </p>

          </div>

          <p style="margin-top: 20px; color: #666;">
            Sent from Mehedi.Dev contact form.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}