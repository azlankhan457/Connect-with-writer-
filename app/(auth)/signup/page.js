"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import GoogleButton from "@/components/auth/GoogleButton";

function getPasswordScore(v) {
  let score = 0;
  if (v.length >= 6) score++;
  if (v.length >= 10) score++;
  if (/[0-9]/.test(v) && /[a-zA-Z]/.test(v)) score++;
  if (/[^a-zA-Z0-9]/.test(v)) score++;
  return score;
}

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const strengthScore = getPasswordScore(password);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError("Please fill in all fields to continue.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms & Privacy Policy to continue.");
      return;
    }
    if (password.length < 6) {
      setError("Your password needs to be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      await updateProfile(cred.user, {
        displayName: `${firstName.trim()} ${lastName.trim()}`,
      });
      const idToken = await cred.user.getIdToken();

      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, purpose: "signup" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not send a verification code.");
      }

      router.push(
        `/verify?purpose=signup&email=${encodeURIComponent(email.trim())}`,
      );
    } catch (err) {
      if (err?.code === "auth/email-already-in-use") {
        setError(
          "An account with that email already exists. Try logging in instead.",
        );
      } else if (err?.code === "auth/weak-password") {
        setError("That password is too weak. Try a longer, less common one.");
      } else {
        setError(err?.message || "Something went wrong. Please try again.");
      }
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell
      visualSubtitle="Join thousands of authors using AI to draft, edit, and publish — start free, no credit card required."
      visualTitle="Every Book Starts With One Page"
    >
      <div className="auth-back-link" style={{ marginBottom: "1rem" }}>
        <Link className="auth-link" href="/">
          ← Back to Home
        </Link>
      </div>
      <h1>Create your account</h1>
      <p>Start writing your book with a free trial — no card required.</p>

      {error && (
        <div className="auth-error" style={{ display: "block" }}>
          {error}
        </div>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="field-grid-2" style={{ gap: "1.15rem" }}>
          <div className="auth-field">
            <label htmlFor="su-first">First name</label>
            <div className="auth-input-wrap">
              <svg className="leading">
                <use href="#i-users"></use>
              </svg>
              <input
                id="su-first"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Alex"
                required
                type="text"
                value={firstName}
              />
            </div>
          </div>
          <div className="auth-field">
            <label htmlFor="su-last">Last name</label>
            <div className="auth-input-wrap">
              <svg className="leading">
                <use href="#i-users"></use>
              </svg>
              <input
                id="su-last"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Miller"
                required
                type="text"
                value={lastName}
              />
            </div>
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="su-email">Email address</label>
          <div className="auth-input-wrap">
            <svg className="leading">
              <use href="#i-mail"></use>
            </svg>
            <input
              id="su-email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="su-password">Password</label>
          <PasswordInput
            id="su-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            value={password}
          />
          <div className="password-strength">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  background:
                    i < strengthScore ? "var(--orange-dark)" : "var(--line)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="auth-row-between" style={{ marginBottom: "1.1rem" }}>
          <label className="auth-check">
            <input
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              type="checkbox"
            />
            I agree to the{" "}
            <Link className="auth-link" href="/terms-of-service">
              Terms
            </Link>{" "}
            &amp;{" "}
            <Link className="auth-link" href="/privacy-policy">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          className="app-btn app-btn--dark"
          disabled={isSubmitting}
          style={{ width: "100%", justifyContent: "center" }}
          type="submit"
        >
          {isSubmitting ? "Creating account\u2026" : "Create Free Account"}
        </button>
      </form>

      <div className="auth-divider">or</div>
      <GoogleButton label="Sign up with Google" onError={setError} />

      <p className="auth-footer-link">
        Already have an account?{" "}
        <Link className="auth-link" href="/login">
          Log in
        </Link>
      </p>
    </AuthShell>
  );
}
