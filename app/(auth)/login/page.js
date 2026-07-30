"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import AuthShell from "@/components/auth/AuthShell";
import PasswordInput from "@/components/auth/PasswordInput";
import GoogleButton from "@/components/auth/GoogleButton";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in both fields to continue.");
      return;
    }

    setIsSubmitting(true);
    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      const idToken = await cred.user.getIdToken();

      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, purpose: "login" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not send a verification code.");
      }

      const next = searchParams.get("next") || "/dashboard";
      router.push(
        `/verify?purpose=login&email=${encodeURIComponent(email.trim())}&next=${encodeURIComponent(next)}`,
      );
    } catch (err) {
      if (
        err?.code === "auth/invalid-credential" ||
        err?.code === "auth/wrong-password" ||
        err?.code === "auth/user-not-found"
      ) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError(err?.message || "Something went wrong. Please try again.");
      }
      setIsSubmitting(false);
    }
  }

  return (
    <AuthShell
      visualSubtitle="Pick up right where you left off — your chapters, tools, and progress are all exactly as you left them."
      visualTitle="Welcome Back to Your Writing Desk"
    >
      <div className="auth-back-link" style={{ marginBottom: "1rem" }}>
        <Link className="auth-link" href="/">
          ← Back to Home
        </Link>
      </div>
      <h1>Welcome back</h1>
      <p>Log in to keep writing where you left off.</p>

      {error && (
        <div className="auth-error" style={{ display: "block" }}>
          {error}
        </div>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="login-email">Email address</label>
          <div className="auth-input-wrap">
            <svg className="leading">
              <use href="#i-mail"></use>
            </svg>
            <input
              id="login-email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </div>
        </div>
        <div className="auth-field">
          <label htmlFor="login-password">Password</label>
          <PasswordInput
            id="login-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="auth-row-between">
          <label className="auth-check">
            <input
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              type="checkbox"
            />
            Remember me
          </label>
          <a className="auth-link" href="#">
            Forgot password?
          </a>
        </div>
        <button
          className="app-btn app-btn--dark"
          disabled={isSubmitting}
          style={{ width: "100%", justifyContent: "center" }}
          type="submit"
        >
          {isSubmitting ? "Logging in\u2026" : "Log In"}
        </button>
      </form>

      <div className="auth-divider">or</div>
      <GoogleButton onError={setError} />

      <p className="auth-footer-link">
        Don&apos;t have an account?{" "}
        <Link className="auth-link" href="/signup">
          Sign up free
        </Link>
      </p>
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
