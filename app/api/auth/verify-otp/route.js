import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { verifyOtp } from "@/lib/otp";
import { createSessionCookie } from "@/lib/session";

/**
 * POST { idToken, purpose: "signup" | "login", code }
 *
 * On success, establishes the server session (httpOnly cookie) and, for
 * signup, marks the account as email-verified in Firestore.
 */
export async function POST(request) {
  try {
    const { idToken, purpose, code } = await request.json();

    if (!idToken || !["signup", "login"].includes(purpose) || !code) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken);
    const email = decoded.email;
    if (!email) {
      return NextResponse.json({ error: "No email associated with this account." }, { status: 400 });
    }

    const result = await verifyOtp(email, purpose, code);
    if (!result.valid) {
      return NextResponse.json({ error: result.reason }, { status: 400 });
    }

    if (purpose === "signup") {
      await adminAuth.updateUser(decoded.uid, { emailVerified: true });
      await adminDb.collection("users").doc(decoded.uid).set(
        {
          email,
          emailVerified: true,
          createdAt: Date.now(),
        },
        { merge: true }
      );
    }

    await createSessionCookie(idToken);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("verify-otp error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
