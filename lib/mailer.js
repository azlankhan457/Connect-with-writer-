import { Resend } from "resend";

// Uses Resend's SMTP relay (https://resend.com) — free tier covers 3,000
// emails/month, which is plenty for OTP emails at this stage. Get an API
// key from the Resend dashboard and set it as RESEND_API_KEY in .env.local.
// The client is created lazily so `next build` works without the key set;
// a missing key only surfaces when an email is actually attempted to send.

let resendClient;
function getResend() {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set. Add it to .env.local to send emails.");
    }
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

/**
 * Sends a 6-digit OTP code by email.
 * @param {string} to - recipient email address
 * @param {string} code - the 6-digit code
 * @param {"signup" | "login"} purpose
 */
export async function sendOtpEmail(to, code, purpose) {
  const isSignup = purpose === "signup";
  const subject = isSignup
    ? "Verify your email — Connect with Writer"
    : "Your login code — Connect with Writer";
  const heading = isSignup
    ? "Confirm your email address"
    : "Your login verification code";
  const blurb = isSignup
    ? "Enter this code to finish creating your account."
    : "Enter this code to finish logging in.";

  await getResend().emails.send({
    from:
      process.env.EMAIL_FROM || "Connect with Writer <onboarding@resend.dev>",
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Emails a website enquiry to the team. `fields` is a list of [label, value]
 * pairs (empty values are skipped); the visitor's address is set as reply-to.
 * Throws if Resend reports an error, so the API route can answer honestly.
 */
export async function sendContactEmail({ name, email, source, fields }) {
  const rows = fields.filter(([, value]) => value);
  const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 80);

  const { error } = await getResend().emails.send({
    from:
      process.env.EMAIL_FROM || "Connect with Writer <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || "hello@connectwithwriter.com",
    reply_to: email,
    subject: `New enquiry from ${subjectName}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      ...rows.map(([label, value]) => `${label}: ${value}`),
      `Sent from: ${source}`,
    ].join("\n"),
    html: `
      <div style="font-family: -apple-system, Segoe UI, sans-serif; max-width: 560px; padding: 24px; color: #212529;">
        <h2 style="margin: 0 0 16px;">New website enquiry</h2>
        <p style="margin: 0 0 6px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${rows
          .map(
            ([label, value]) =>
              `<p style="margin: 0 0 6px; white-space: pre-wrap;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
          )
          .join("")}
        <p style="margin: 16px 0 0; font-size: 13px; color: #848C94;">Sent from: ${escapeHtml(source)}</p>
      </div>
    `,
  });

  if (error) throw new Error(error.message || "Resend rejected the email.");
}
