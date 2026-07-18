"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen branded splash loader shown on the very first paint of the
 * site. Fades out once the page has finished loading (or after a short
 * minimum time, so it never feels like a flash on fast connections).
 */
export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const MIN_VISIBLE_MS = 500;
    const shownAt = Date.now();

    function hide() {
      const elapsed = Date.now() - shownAt;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsVisible(false), 420); // matches CSS fade duration
      }, wait);
    }

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      // Fallback in case 'load' never fires cleanly (e.g. slow third-party asset)
      const fallback = setTimeout(hide, 3000);
      return () => {
        window.removeEventListener("load", hide);
        clearTimeout(fallback);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div aria-hidden="true" className={`page-loader${isFading ? " page-loader--fade" : ""}`}>
      <LoaderMark />
    </div>
  );
}

/**
 * The animated mark itself — reused by PageLoader (splash) and by each
 * route group's loading.js (shown automatically by Next.js during
 * navigation), so the animation is consistent everywhere.
 */
export function LoaderMark({ size = "md" }) {
  return (
    <div className={`loader-mark loader-mark--${size}`}>
      <svg className="loader-mark__book" fill="none" viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
        <path
          className="loader-mark__page loader-mark__page--left"
          d="M31 8C31 8 22 3 8 5C8 5 6 5.4 6 8V38C6 38 6 40 8 39.6C22 37.6 31 42 31 42V8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
        <path
          className="loader-mark__page loader-mark__page--right"
          d="M33 8C33 8 42 3 56 5C56 5 58 5.4 58 8V38C58 38 58 40 56 39.6C42 37.6 33 42 33 42V8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
        <path className="loader-mark__spine" d="M32 8V42" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
      <div className="loader-mark__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
