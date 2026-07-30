import { NextResponse } from "next/server";
import { getAssistantReply } from "@/lib/ai/assistant";

export async function POST(request) {
  try {
    const { message = "" } = await request.json();
    const reply = await getAssistantReply(message);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Assistant route failed:", error);
    return NextResponse.json(
      {
        reply:
          "I can still help with general questions about our services, publishing support, and how to start a free consultation.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, provider: "gemini" });
}
