"use client";

import { useState } from "react";

const TYPES = [
  { id: "spelling", label: "Spelling" },
  { id: "punctuation", label: "Punctuation" },
  { id: "grammar", label: "Grammar" },
  { id: "consistency", label: "Consistency" },
];

/**
 * Interactive proof sample.
 * passage: array of plain strings or { wrong, right, type } issues.
 */
export default function ProofMarks({ passage }) {
  const [marked, setMarked] = useState(true);
  const [active, setActive] = useState(TYPES.map((type) => type.id));

  function toggleType(id) {
    setActive((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  const issueCount = passage.filter((part) => typeof part !== "string").length;

  return (
    <div className="pmarks">
      <div className="pmarks__controls">
        <div aria-label="Version" className="sedit__toggle" role="group">
          <button aria-pressed={marked} onClick={() => setMarked(true)} type="button">
            Marked up
          </button>
          <button aria-pressed={!marked} onClick={() => setMarked(false)} type="button">
            Clean copy
          </button>
        </div>
        <div aria-label="Show mark types" className="pmarks__chips" role="group">
          {TYPES.map((type) => (
            <button
              aria-pressed={active.includes(type.id)}
              className={`pmarks__chip pm--${type.id}`}
              key={type.id}
              onClick={() => toggleType(type.id)}
              type="button"
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="pmarks__passage">
        {passage.map((part, index) => {
          if (typeof part === "string") return <span key={index}>{part}</span>;
          if (!marked || !active.includes(part.type)) return <span key={index}>{part.right}</span>;
          return (
            <span className={`pm pm--${part.type}`} key={index}>
              <del>{part.wrong}</del>
              <ins>{part.right}</ins>
            </span>
          );
        })}
      </p>
      <p className="sedit__caption">
        Illustrative sample, not client work. {issueCount} issues are marked in this passage.
      </p>
    </div>
  );
}
