"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function GoogleButton({
  label = "Continue with Google",
  onError,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    onError?.("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // Google has already verified this email address, so we skip the
      // OTP step entirely and go straight to establishing the session.
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));

        // If account needs signup verification, this is unexpected with Google sign-in
        // but handle it gracefully by redirecting to signup verification
        if (data.needsSignupVerification) {
          router.push(
            `/verify?purpose=signup&email=${encodeURIComponent(result.user.email)}`,
          );
          return;
        }

        throw new Error(data.error || "Could not sign you in with Google.");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      if (err?.code === "auth/popup-closed-by-user") {
        // Silent — the person just closed the popup, no need to show an error.
      } else {
        onError?.(err?.message || "Something went wrong with Google sign-in.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      className="auth-alt-btn"
      disabled={isLoading}
      onClick={handleClick}
      type="button"
    >
      <svg viewBox="0 0 20 20" width="18" height="18">
        <path
          fill="#4285F4"
          d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.23c1.9-1.75 2.97-4.33 2.97-7.32z"
        />
        <path
          fill="#34A853"
          d="M10 20c2.7 0 4.96-.89 6.62-2.42l-3.23-2.5c-.9.6-2.05.95-3.4.95-2.6 0-4.81-1.76-5.6-4.13H1.06v2.59A10 10 0 0 0 10 20z"
        />
        <path
          fill="#FBBC05"
          d="M4.4 11.9a6.02 6.02 0 0 1 0-3.8V5.51H1.06a10 10 0 0 0 0 8.98l3.34-2.59z"
        />
        <path
          fill="#EA4335"
          d="M10 3.98c1.47 0 2.79.5 3.82 1.5l2.87-2.87A9.6 9.6 0 0 0 10 0 10 10 0 0 0 1.06 5.51L4.4 8.1C5.19 5.74 7.4 3.98 10 3.98z"
        />
      </svg>
      {isLoading ? "Signing in\u2026" : label}
    </button>
  );
}
