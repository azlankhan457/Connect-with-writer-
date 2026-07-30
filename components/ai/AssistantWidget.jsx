"use client";

import { useState } from "react";

export default function AssistantWidget({
  title = "Ask Connect Assistant",
  compact = false,
}) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I can answer common questions about writing services, publishing support, and getting started.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!draft.trim()) return;

    const userMessage = draft.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setDraft("");
    setIsThinking(true);

    try {
      const response = await fetch("/api/ai/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const payload = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: payload.reply || "I’m here to help with your book project.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m having trouble reaching the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <div
      className={`assistant-widget${compact ? " assistant-widget--compact" : ""}`}
    >
      <div className="assistant-widget__header">
        <div>
          <strong>{title}</strong>
          <p>Helpful, AI-supported guidance</p>
        </div>
        <span className="assistant-badge">Beta</span>
      </div>
      <div className="assistant-widget__body">
        {messages.map((message, index) => (
          <div
            className={`assistant-message assistant-message--${message.role}`}
            key={`${message.role}-${index}`}
          >
            {message.content}
          </div>
        ))}
        {isThinking && (
          <div className="assistant-message assistant-message--assistant">
            Thinking…
          </div>
        )}
      </div>
      <form className="assistant-widget__form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask about our services…"
          value={draft}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
