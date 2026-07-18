import nodemailer from "nodemailer";

// Uses Resend's SMTP relay (https://resend.com) — free tier covers 3,000
// emails/month, which is plenty for OTP emails at this stage. Get an API
// key from the Resend dashboard and set it as RESEND_API_KEY in .env.local.
//
// Swapping providers later: only this file needs to change. Any SMTP
// provider (Gmail, SendGrid, Brevo, etc.) works the same way with
// nodemailer.createTransport — just change host/port/auth below.
let transporter;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
      user: "resend",
      pass: process.env.RESEND_API_KEY,
    },
  });

  return transporter;
}

/**
 * Sends a 6-digit OTP code by email.
 * @param {string} to - recipient email address
 * @param {string} code - the 6-digit code
 * @param {"signup" | "login"} purpose
 */
export async function sendOtpEmail(to, code, purpose) {
  const isSignup = purpose === "signup";
  const subject = isSignup ? "Verify your email — Connect with Writer" : "Your login code — Connect with Writer";
  const heading = isSignup ? "Confirm your email address" : "Your login verification code";
  const blurb = isSignup
    ? "Enter this code to finish creating your account."
    : "Enter this code to finish logging in.";

  await getTransporter().sendMail({
    from: process.env.EMAIL_FROM || "Connect with Writer <onboarding@resend.dev>",
    to,
    subject,
    text: `${heading}\n\nYour code is: ${code}\n\nThis code expires in 10 minutes. If you didn't request this, you can ignore this email.`,
    html: `
      <div style="font-family: -apple-system, Segoe UI, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #212529;">
        <h2 style="margin: 0 0 8px;">${heading}</h2>
        <p style="margin: 0 0 24px; color: #545C63;">${blurb}</p>
        <div style="font-size: 32px; font-weight: 700; letter-spacing: 8px; background: #F7FCFD; border: 1px solid #E1E6EA; border-radius: 12px; padding: 16px; text-align: center;">
          ${code}
        </div>
        <p style="margin: 24px 0 0; font-size: 13px; color: #848C94;">
          This code expires in 10 minutes. If you didn't request this, you can safely ignore this email.
        </p>
      </div>
    `,
  });
}
