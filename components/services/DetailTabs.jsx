"use client";

import { useRef, useState } from "react";
import BookCover from "@/components/BookCover";

/**
 * Accessible tabs (arrow keys, Home/End) for a short set of options.
 * Each item: { id, label, title, text, points?, genre?, swatches? }
 *  - genre    -> shows a real portfolio cover for that genre
 *  - swatches -> shows a colour palette: [{ name, color }]
 *  - badge    -> shows a large short label (for example an age range)
 */
export default function DetailTabs({ items, label }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const item = items[active];

  function handleKeyDown(event) {
    const last = items.length - 1;
    const target = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    setActive(target);
    tabRefs.current[target]?.focus();
  }

  return (
    <div className="dtabs">
      <div aria-label={label} className="dtabs__tabs" onKeyDown={handleKeyDown} role="tablist">
        {items.map((tab, index) => (
          <button
            aria-controls={`dtab-panel-${tab.id}`}
            aria-selected={index === active}
            className="dtabs__tab"
            id={`dtab-${tab.id}`}
            key={tab.id}
            onClick={() => setActive(index)}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            role="tab"
            tabIndex={index === active ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`dtab-${item.id}`}
        className="dtabs__panel"
        id={`dtab-panel-${item.id}`}
        role="tabpanel"
      >
        <div className="dtabs__visual">
          {item.genre && (
            <BookCover className="dtabs__book" genre={item.genre} title={`${item.label} sample`} />
          )}
          {item.badge && <span className="dtabs__badge">{item.badge}</span>}
          {item.swatches && (
            <ul aria-label="Colour palette" className="dtabs__swatches">
              {item.swatches.map((swatch) => (
                <li key={swatch.name}>
                  <span className="dtabs__swatch" style={{ background: swatch.color }}></span>
                  {swatch.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="dtabs__body">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.points && (
            <ul className="checklist">
              {item.points.map((point) => (
                <li key={point}>
                  <svg aria-hidden="true">
                    <use href="#i-check-circle"></use>
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
