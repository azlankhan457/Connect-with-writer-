"use client";

import { useState } from "react";

/**
 * Wraps a settings form and gives its submit button a brief "Saved ✓"
 * confirmation, matching the original site's demo behavior. Swap the
 * onSubmit handler for a real API call whenever the backend for this
 * particular form is ready.
 */
export default function SettingsForm({ children, onSubmit, className, style }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(e);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1800);
  }

  return (
    <form className={className} noValidate onSubmit={handleSubmit} style={style}>
      {typeof children === "function" ? children({ isSaved }) : children}
    </form>
  );
}
