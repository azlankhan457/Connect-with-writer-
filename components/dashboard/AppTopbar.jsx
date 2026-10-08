"use client";

import Link from "next/link";

export default function AppTopbar({ onToggleMobile }) {
  return (
    <div className="app-topbar">
      <button
        aria-label="Toggle menu"
        className="app-mobile-toggle"
        onClick={onToggleMobile}
        type="button"
      >
        <svg>
          <use href="#i-menu"></use>
        </svg>
      </button>
      <div className="app-topbar__msg">
        <svg aria-hidden="true" className="app-topbar__icon">
          <use href="#i-zap"></use>
        </svg>
        <span>
          Get <b>20% off for life</b> if you upgrade within 24h, use the code <code>20TODAY</code> at checkout!
        </span>
      </div>
      <Link className="app-topbar__cta" href="/account-settings">
        Claim My Discount
      </Link>
    </div>
  );
}
