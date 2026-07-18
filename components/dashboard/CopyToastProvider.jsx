"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

const CopyToastContext = createContext(null);

export function CopyToastProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showToast = useCallback(() => {
    setIsVisible(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(false), 1800);
  }, []);

  const copyText = useCallback(
    async (text) => {
      try {
        if (navigator.clipboard && text) {
          await navigator.clipboard.writeText(text.trim());
        }
      } finally {
        showToast();
      }
    },
    [showToast]
  );

  return (
    <CopyToastContext.Provider value={copyText}>
      {children}
      <div className={`copied-toast${isVisible ? " is-visible" : ""}`}>
        <svg>
          <use href="#i-check-circle"></use>
        </svg>
        <span>Copied to clipboard</span>
      </div>
    </CopyToastContext.Provider>
  );
}

export function useCopyToClipboard() {
  const ctx = useContext(CopyToastContext);
  if (!ctx) throw new Error("useCopyToClipboard must be used within CopyToastProvider");
  return ctx;
}
