"use client";

import { useState } from "react";

/**
 * Before/After sample for each editing level.
 * level: { id, label, summary, before, after: [{ t, changed? }], notes: [] }
 * The passages are illustrative writing samples, not client work.
 */
export default function SampleEdit({ levels }) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);
  const level = levels[levelIndex];

  return (
    <div className="sedit">
      <div aria-label="Editing level" className="dtabs__tabs" role="group">
        {levels.map((item, index) => (
          <button
            aria-pressed={index === levelIndex}
            className="dtabs__tab"
            key={item.id}
            onClick={() => setLevelIndex(index)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="sedit__body">
        <div className="sedit__main">
          <div aria-label="Version" className="sedit__toggle" role="group">
            <button aria-pressed={!showAfter} onClick={() => setShowAfter(false)} type="button">
              Before
            </button>
            <button aria-pressed={showAfter} onClick={() => setShowAfter(true)} type="button">
              After
            </button>
          </div>
          <p aria-live="polite" className="sedit__passage">
            {showAfter
              ? level.after.map((part, index) =>
                  part.changed ? <mark key={index}>{part.t}</mark> : <span key={index}>{part.t}</span>,
                )
              : level.before}
          </p>
          <p className="sedit__caption">Illustrative sample, not client work. Highlights show what changed.</p>
        </div>
        <div className="sedit__side">
          <h3>{level.label}</h3>
          <p>{level.summary}</p>
          <ul className="checklist">
            {level.notes.map((note) => (
              <li key={note}>
                <svg aria-hidden="true">
                  <use href="#i-check-circle"></use>
                </svg>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
