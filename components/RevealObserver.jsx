"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounted once in the marketing layout. Watches every element with the
 * `.reveal` class currently in the DOM and adds `.is-visible` when it
 * scrolls into view — matching the original static site's behavior,
 * without needing to wrap each element individually in a component.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!els.length) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));

    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
