import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const OPTIONAL_FIELDS = [
  ["phone", "Phone"],
  ["hear", "Heard about us via"],
  ["genre", "Genre"],
  ["service", "Service needed"],
  ["budget", "Budget"],
];

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * POST { name, email, message, phone?, hear?, genre?, service?, budget?,
 *        source?, website? }
 * `website` is a honeypot: real visitors never fill it in, so a filled
 * value is answered with a fake success and nothing is sent.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Please check your name, email and message." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({
      name,
      email,
      source: clean(body.source, 100) || "website",
      fields: [
        ...OPTIONAL_FIELDS.map(([key, label]) => [label, clean(body[key], 100)]),
        ["Message", message],
      ],
    });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
