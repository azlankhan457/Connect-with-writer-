/**
 * Client helper shared by both contact forms. Resolves to
 * { ok: true } or { ok: false, error } and never throws.
 */
export async function submitContact(payload) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: window.location.pathname }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) return { ok: true };
    return { ok: false, error: data.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Network problem. Please check your connection and try again." };
  }
}
