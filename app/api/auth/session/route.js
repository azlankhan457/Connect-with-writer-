import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { createSessionCookie, setTrustedDevice } from "@/lib/session";

/**
 * POST { idToken }
 *
 * Used for Google sign-in, which skips the OTP step entirely — Google has
 * already verified the person owns that email address, so an extra code
 * would just be friction. Establishes the session cookie directly and sets
 * a trusted device cookie for future login skips.
 */
export async function POST(request) {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return NextResponse.json({ error: "Missing ID token." }, { status: 400 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken);

    // Do not create session for unverified accounts
    if (!decoded.email_verified) {
      return NextResponse.json(
        {
          error:
            "Your account hasn't been verified yet. Please complete the signup verification first.",
          needsSignupVerification: true,
        },
        { status: 403 },
      );
    }

    // Ensure a Firestore profile exists (first-time Google sign-in = signup)
    await adminDb.collection("users").doc(decoded.uid).set(
      {
        email: decoded.email,
        emailVerified: true,
        createdAt: Date.now(),
      },
      { merge: true },
    );

    await createSessionCookie(idToken);

    // Set trusted device so this browser can skip OTP on future logins
    await setTrustedDevice(decoded.uid);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("session error:", err);
    return NextResponse.json(
      { error: "Could not sign you in. Please try again." },
      { status: 500 },
    );
  }
}
