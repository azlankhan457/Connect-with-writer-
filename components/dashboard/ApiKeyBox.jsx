"use client";

import { useState } from "react";
import { useCopyToClipboard } from "./CopyToastProvider";

const MASK = "••••••••••••••••••••••••••••••••";

export default function ApiKeyBox({ apiKey }) {
  const [isMasked, setIsMasked] = useState(true);
  const copyText = useCopyToClipboard();

  return (
    <div className="key-box">
      <code>{isMasked ? MASK : apiKey}</code>
      <button
        aria-label={isMasked ? "Show key" : "Hide key"}
        className="icon-action-btn"
        onClick={() => setIsMasked((v) => !v)}
        type="button"
      >
        <svg>
          <use href={isMasked ? "#i-eye" : "#i-eye-off"}></use>
        </svg>
      </button>
      <button className="app-btn app-btn--ghost" onClick={() => copyText(apiKey)} type="button">
        <svg style={{ width: "15px", height: "15px" }}>
          <use href="#i-copy"></use>
        </svg>
        Copy
      </button>
    </div>
  );
}
