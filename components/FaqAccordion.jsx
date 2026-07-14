"use client";

import { useState } from "react";

/**
 * items: [{ q: string, a: string }]
 * Only one item can be open at a time, matching the original site's behavior.
 */
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details
          className="faq-item"
          key={item.q}
          open={openIndex === i}
          onToggle={(e) => {
            if (e.target.open) setOpenIndex(i);
            else if (openIndex === i) setOpenIndex(null);
          }}
        >
          <summary>
            <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="faq-q">{item.q}</span>
            <svg className="faq-chev">
              <use href="#i-chevron-down"></use>
            </svg>
          </summary>
          <div className="faq-a">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
