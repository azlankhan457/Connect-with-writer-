import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";
import { createSessionCookie } from "@/lib/session";

/**
 * POST { idToken }
 *
 * Creates a session for a trusted device during login (skipping OTP).
 * Used when the device_id cookie matches a trusted device in Firestore.
 */
export async function POST(request) {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return NextResponse.json({ error: "Missing ID token." }, { status: 400 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken);

    // Ensure email is verified
    if (!decoded.email_verified) {
      return NextResponse.json(
        {
          error: "Your account hasn't been verified yet.",
        },
        { status: 403 },
      );
    }

    await createSessionCookie(idToken);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("create-session error:", err);
    return NextResponse.json(
      { error: "Could not sign you in. Please try again." },
      { status: 500 },
    );
  }
}
