// Server-only Gemini client. Never import this from a "use client" file:
// the API key must stay on the server (do NOT use a NEXT_PUBLIC_ variable).

const DEFAULT_MODEL = "gemini-3.5-flash";
const DEFAULT_BASE = "https://generativelanguage.googleapis.com/v1beta";
const TIMEOUT_MS = 25000;

export class GeminiError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "GeminiError";
    this.code = code; // "no_key" | "upstream" | "blocked" | "empty" | "timeout"
  }
}

export function isGeminiConfigured() {
  return Boolean(process.env.GEMINI_API_KEY);
}

/**
 * Generates a reply.
 *
 * @param {object}   opts
 * @param {string}   opts.systemInstruction  Rules for the model (kept separate from user text).
 * @param {{role: "user"|"assistant", content: string}[]} opts.messages  Chat history, oldest first.
 * @param {number}  [opts.maxOutputTokens=1024]
 * @param {number}  [opts.temperature=0.6]
 * @returns {Promise<string>} The reply text. Throws GeminiError on failure.
 */
export async function generateText({
  systemInstruction,
  messages,
  maxOutputTokens = 1024,
  temperature = 0.6,
}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new GeminiError("no_key", "GEMINI_API_KEY is not set.");

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const base = process.env.GEMINI_API_BASE || DEFAULT_BASE;

  let response;
  try {
    response = await fetch(`${base}/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Header (not ?key=) so the key never appears in URLs or logs.
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents: messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
        generationConfig: { temperature, maxOutputTokens },
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (err) {
    if (err?.name === "TimeoutError" || err?.name === "AbortError") {
      throw new GeminiError("timeout", "Gemini request timed out.");
    }
    throw new GeminiError("upstream", `Gemini request failed: ${err?.message}`);
  }

  if (!response.ok) {
    // Status only: the response body can echo request details.
    throw new GeminiError("upstream", `Gemini returned HTTP ${response.status} (model: ${model}).`);
  }

  const data = await response.json();

  if (data?.promptFeedback?.blockReason) {
    throw new GeminiError("blocked", `Prompt blocked: ${data.promptFeedback.blockReason}`);
  }

  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .filter((part) => typeof part.text === "string" && !part.thought)
    .map((part) => part.text)
    .join("")
    .trim();

  if (!text) {
    throw new GeminiError("empty", `Gemini returned no text (finish: ${data?.candidates?.[0]?.finishReason ?? "unknown"}).`);
  }
  return text;
}
