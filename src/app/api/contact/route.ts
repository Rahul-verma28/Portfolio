import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL_USER;
const APP_PASSWORD = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (name.length < 2 || message.length < 10) {
      return NextResponse.json(
        { error: "Name must be 2+ chars and message 10+ chars" },
        { status: 400 }
      );
    }

    // 1. Send notification email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL}>`,
      to: EMAIL,
      replyTo: email,
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; border-radius: 16px; overflow: hidden; border: 1px solid rgba(139, 92, 246, 0.2);">
          <div style="background: linear-gradient(135deg, #7c3aed, #4f46e5); padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">📬 New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px;">
            <div style="background: rgba(139, 92, 246, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 20px; border: 1px solid rgba(139, 92, 246, 0.15);">
              <p style="margin: 0 0 8px 0; color: #a78bfa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">From</p>
              <p style="margin: 0; color: #e2e8f0; font-size: 16px; font-weight: 600;">${name}</p>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 14px;">${email}</p>
            </div>
            <div style="background: rgba(255, 255, 255, 0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.06);">
              <p style="margin: 0 0 8px 0; color: #a78bfa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
              <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
              <p style="margin: 0; color: #64748b; font-size: 12px;">Sent from your portfolio contact form • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply to the user
    await transporter.sendMail({
      from: `"Rahul Verma" <${EMAIL}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🙌`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; border-radius: 16px; overflow: hidden; border: 1px solid rgba(139, 92, 246, 0.2);">
          <div style="background: linear-gradient(135deg, #7c3aed, #4f46e5); padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Hey ${name}! 👋</h1>
          </div>
          <div style="padding: 32px;">
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.7; margin: 0 0 16px 0;">
              Thank you for reaching out! I've received your message and will get back to you within <strong style="color: #a78bfa;">24 hours</strong>.
            </p>
            <div style="background: rgba(139, 92, 246, 0.08); border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid rgba(139, 92, 246, 0.15);">
              <p style="margin: 0 0 8px 0; color: #a78bfa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Your Message</p>
              <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #e2e8f0; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
              In the meantime, feel free to check out my latest work on <a href="https://github.com/Rahul-verma28" style="color: #a78bfa; text-decoration: none; font-weight: 600;">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/rahul-verma-09227a263/" style="color: #a78bfa; text-decoration: none; font-weight: 600;">LinkedIn</a>.
            </p>
            <p style="color: #e2e8f0; font-size: 15px; margin: 0;">
              Best regards,<br />
              <strong style="color: #a78bfa;">Rahul Verma</strong><br />
              <span style="color: #64748b; font-size: 13px;">Full Stack Developer</span>
            </p>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
              <p style="margin: 0; color: #64748b; font-size: 12px;">This is an automated response from rahulverma.dev</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
