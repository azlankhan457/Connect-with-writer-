import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";
import { createOtp } from "@/lib/otp";
import { sendOtpEmail } from "@/lib/mailer";
import { isTrustedDevice, updateTrustedDeviceTimestamp } from "@/lib/session";

/**
 * POST { idToken, purpose: "signup" | "login" }
 *
 * The client must already be signed in via the Firebase client SDK
 * (createUserWithEmailAndPassword or signInWithEmailAndPassword) before
 * calling this — the idToken proves the request really comes from that
 * account. This route does NOT create a session; it only sends a code.
 * The session is created after the code is verified in /api/auth/verify-otp.
 *
 * For login: checks if this is a trusted device. If yes, skips OTP.
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
      return NextResponse.json(
        { error: "No email associated with this account." },
        { status: 400 },
      );
    }

    // Verify-bypass gap: if email is not verified and they're trying to log in,
    // force them through signup verification instead
    if (purpose === "login" && !decoded.email_verified) {
      return NextResponse.json(
        {
          error:
            "Your account hasn't been verified yet. Please complete the signup verification first.",
          needsSignupVerification: true,
        },
        { status: 403 },
      );
    }

    // SIGNUP: Always require OTP (never skip)
    if (purpose === "signup") {
      console.log(`[send-otp] SIGNUP: Always sending OTP code`);
      const code = await createOtp(email, purpose);
      await sendOtpEmail(email, code, purpose);
      return NextResponse.json({ ok: true, email });
    }

    // LOGIN-specific: Check if this is a trusted device, skip OTP if so
    if (purpose === "login") {
      console.log(
        `[send-otp] LOGIN: Checking trusted device for uid=${decoded.uid}`,
      );
      const trusted = await isTrustedDevice(decoded.uid);
      console.log(`[send-otp] Device trusted: ${trusted}`);
      if (trusted) {
        // Update the last used timestamp for this device
        await updateTrustedDeviceTimestamp(decoded.uid);
        // Return a special response indicating to skip OTP
        console.log(`[send-otp] Skipping OTP for trusted device`);
        return NextResponse.json({ ok: true, email, skipOtp: true });
      }
    }

    const code = await createOtp(email, purpose);
    await sendOtpEmail(email, code, purpose);

    // Never return the code itself in the response — it goes only to the inbox.
    return NextResponse.json({ ok: true, email });
  } catch (err) {
    console.error("send-otp error:", err);
    return NextResponse.json(
      { error: "Could not send verification code. Please try again." },
      { status: 500 },
    );
  }
}
