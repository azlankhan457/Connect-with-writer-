"use client";

import { useRef, useState } from "react";

export default function OtpCodeInput({ value, onChange, length = 6 }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(e) {
    const digits = e.target.value.replace(/[^0-9]/g, "").slice(0, length);
    onChange(digits);
  }

  const boxes = Array.from({ length }, (_, i) => value[i] || "");

  return (
    <div className="otp-input-row" onClick={() => inputRef.current?.focus()}>
      <input
        aria-label="Verification code"
        autoComplete="one-time-code"
        className="otp-hidden-input"
        inputMode="numeric"
        maxLength={length}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        ref={inputRef}
        type="text"
        value={value}
      />
      {boxes.map((char, i) => (
        <div
          className={`otp-digit${isFocused && i === value.length ? " otp-digit--active" : ""}`}
          key={i}
        >
          {char}
        </div>
      ))}
    </div>
  );
}
