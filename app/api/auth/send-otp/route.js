import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";
import { createOtp } from "@/lib/otp";
import { sendOtpEmail } from "@/lib/mailer";

/**
 * POST { idToken, purpose: "signup" | "login" }
 *
 * The client must already be signed in via the Firebase client SDK
 * (createUserWithEmailAndPassword or signInWithEmailAndPassword) before
 * calling this — the idToken proves the request really comes from that
 * account. This route does NOT create a session; it only sends a code.
 * The session is created after the code is verified in /api/auth/verify-otp.
 */
export async function POST(request) {
  try {
    const { idToken, purpose } = await request.json();

    if (!idToken || !["signup", "login"].includes(purpose)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken);
    const email = decoded.email;
    if (!email) {
      return NextResponse.json({ error: "No email associated with this account." }, { status: 400 });
    }

    const code = await createOtp(email, purpose);
    await sendOtpEmail(email, code, purpose);

    // Never return the code itself in the response — it goes only to the inbox.
    return NextResponse.json({ ok: true, email });
  } catch (err) {
    console.error("send-otp error:", err);
    return NextResponse.json({ error: "Could not send verification code. Please try again." }, { status: 500 });
  }
}
