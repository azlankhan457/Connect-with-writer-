"use client";

import { useState } from "react";

export default function FaqGrid({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-grid reveal">
      {items.map((item, i) => (
        <div className={`faq-item${openIndex === i ? " open" : ""}`} key={item.q}>
          <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)} type="button">
            {item.q}
            <svg>
              <use href="#i-plus"></use>
            </svg>
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
