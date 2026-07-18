"use client";

import { useState } from "react";

export default function PasswordInput({ id, value, onChange, placeholder = "••••••••", ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="auth-input-wrap">
      <svg className="leading">
        <use href="#i-lock"></use>
      </svg>
      <input
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required
        type={visible ? "text" : "password"}
        value={value}
        {...rest}
      />
      <button
        aria-label={visible ? "Hide password" : "Show password"}
        className="auth-toggle-visibility"
        onClick={() => setVisible((v) => !v)}
        type="button"
      >
        <svg>
          <use href={visible ? "#i-eye-off" : "#i-eye"}></use>
        </svg>
      </button>
    </div>
  );
}
