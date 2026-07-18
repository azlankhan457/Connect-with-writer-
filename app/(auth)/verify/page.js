"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import AuthShell from "@/components/auth/AuthShell";
import OtpCodeInput from "@/components/auth/OtpCodeInput";

function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose") === "signup" ? "signup" : "login";
  const email = searchParams.get("email") || "";
  const next = searchParams.get("next") || "/dashboard";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return unsubscribe;
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResendMessage("");

    if (code.length !== 6) {
      setError("Enter the full 6-digit code.");
      return;
    }
    if (!user) {
      setError("Your session expired — please log in again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const idToken = await user.getIdToken();
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, purpose, code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Invalid code. Please try again.");
      }

      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  async function handleResend() {
    setError("");
    setResendMessage("");
    if (!user) {
      setError("Your session expired — please log in again.");
      return;
    }
    setIsResending(true);
    try {
      const idToken = await user.getIdToken();
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, purpose }),
      });
      if (!res.ok) throw new Error("Could not resend the code. Please try again.");
      setResendMessage("A new code is on its way to your inbox.");
    } catch (err) {
      setError(err?.message || "Could not resend the code.");
    } finally {
      setIsResending(false);
    }
  }

  return (
    <AuthShell
      visualSubtitle="A code is on its way to your inbox — enter it to finish getting into your account."
      visualTitle="Just One More Step"
    >
      <h1>{purpose === "signup" ? "Verify your email" : "Enter your login code"}</h1>
      <p>
        We sent a 6-digit code to {email ? <strong>{email}</strong> : "your email"}. It expires in 10 minutes.
      </p>

      {error && (
        <div className="auth-error" style={{ display: "block" }}>
          {error}
        </div>
      )}
      {resendMessage && (
        <div className="auth-error" style={{ display: "block", background: "var(--orange-tint)", color: "var(--orange-deep)" }}>
          {resendMessage}
        </div>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="otp-0">Verification code</label>
          <OtpCodeInput onChange={setCode} value={code} />
        </div>
        <button
          className="app-btn app-btn--dark"
          disabled={isSubmitting}
          style={{ width: "100%", justifyContent: "center" }}
          type="submit"
        >
          {isSubmitting ? "Verifying\u2026" : "Verify & Continue"}
        </button>
      </form>

      <p className="auth-footer-link">
        Didn&apos;t get a code?{" "}
        <button className="auth-link" disabled={isResending} onClick={handleResend} style={{ background: "none", border: "none", cursor: "pointer" }} type="button">
          {isResending ? "Sending\u2026" : "Resend it"}
        </button>
      </p>
    </AuthShell>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyForm />
    </Suspense>
  );
}
