"use client";

import { useCopyToClipboard } from "./CopyToastProvider";

export default function CopyButton({ text, className = "code-copy-btn", ariaLabel = "Copy code" }) {
  const copyText = useCopyToClipboard();

  return (
    <button aria-label={ariaLabel} className={className} onClick={() => copyText(text)} type="button">
      <svg>
        <use href="#i-copy"></use>
      </svg>
    </button>
  );
}
