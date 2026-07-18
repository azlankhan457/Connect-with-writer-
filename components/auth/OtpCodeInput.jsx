"use client";

import { useRef } from "react";

export default function OtpCodeInput({ value, onChange, length = 6 }) {
  const inputRefs = useRef([]);
  const digits = value.padEnd(length, " ").split("").slice(0, length);

  function setDigitAt(index, char) {
    const next = digits.slice();
    next[index] = char;
    onChange(next.join("").replace(/ /g, ""));
  }

  function handleChange(index, e) {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (!raw) {
      setDigitAt(index, " ");
      return;
    }
    // Handle pasting a full code into one box
    if (raw.length > 1) {
      const chars = raw.split("").slice(0, length - index);
      const next = digits.slice();
      chars.forEach((c, i) => (next[index + i] = c));
      onChange(next.join("").replace(/ /g, ""));
      const lastIndex = Math.min(index + chars.length, length - 1);
      inputRefs.current[lastIndex]?.focus();
      return;
    }
    setDigitAt(index, raw);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !digits[index].trim() && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <div className="otp-input-row">
      {digits.map((d, i) => (
        <input
          className="otp-digit"
          inputMode="numeric"
          key={i}
          maxLength={1}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          value={d.trim()}
        />
      ))}
    </div>
  );
}
