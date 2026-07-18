"use client";

import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Your new password needs to be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setIsSubmitting(true);
    try {
      await updatePassword(auth.currentUser, password);
      setPassword("");
      setConfirm("");
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 1800);
    } catch (err) {
      if (err?.code === "auth/requires-recent-login") {
        setError("For security, please log out and log back in before changing your password.");
      } else {
        setError(err?.message || "Could not update your password. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {error && (
        <div className="auth-error" style={{ display: "block", marginBottom: "1rem" }}>
          {error}
        </div>
      )}
      <div className="app-field">
        <label htmlFor="as-pass">New password</label>
        <input
          id="as-pass"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          type="password"
          value={password}
        />
      </div>
      <div className="app-field">
        <label htmlFor="as-pass2">Confirm new password</label>
        <input
          id="as-pass2"
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="••••••••"
          type="password"
          value={confirm}
        />
      </div>
      <button className="app-btn app-btn--dark" disabled={isSubmitting} type="submit">
        {isSaved ? "Saved ✓" : isSubmitting ? "Saving\u2026" : "Save"}
      </button>
    </form>
  );
}
