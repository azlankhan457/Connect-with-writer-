import { generateText, isGeminiConfigured } from "@/lib/ai/gemini";

export const assistantConfig = {
  provider: "gemini",
  placeholder: false,
  instructions: [
    "You help visitors and authors with general questions about Connect with Writer.",
    "Keep answers concise, warm, and focused on booking a consultation or starting a free trial.",
    "If the user asks for pricing, suggest a free consultation. If the user asks for writing help, suggest the next best step for their book project.",
  ],
};

function getFallbackReply(message) {
  const normalized = `${message}`.trim();
  if (!normalized) {
    return "I can help with questions about our writing services, publishing options, and how to get started.";
  }

  const lower = normalized.toLowerCase();
  if (
    lower.includes("pricing") ||
    lower.includes("cost") ||
    lower.includes("quote")
  ) {
    return "We offer custom pricing based on your project scope, timeline, and goals. A free consultation is the best way to get a tailored estimate.";
  }

  if (lower.includes("ghostwriter") || lower.includes("writer")) {
    return "Our team can help with fiction, memoir, nonfiction, and collaborative writing. We can match you with a writer based on genre, tone, and project goals.";
  }

  if (lower.includes("publishing")) {
    return "We can help with drafting, editing, cover design, formatting, and publishing guidance so your book is ready for launch.";
  }

  return "I can help with general questions about our services, timeline, publishing support, and how to start a free trial. If you want, I can also suggest the next best step for your book project.";
}

export async function getAssistantReply(message) {
  const normalized = `${message}`.trim();
  if (!normalized || !isGeminiConfigured()) return getFallbackReply(normalized);

  try {
    return await generateText({
      systemInstruction: assistantConfig.instructions.join(" "),
      messages: [{ role: "user", content: normalized }],
      maxOutputTokens: 400,
    });
  } catch (error) {
    console.error("Gemini assistant error:", error.code, error.message);
    return getFallbackReply(normalized);
  }
}
