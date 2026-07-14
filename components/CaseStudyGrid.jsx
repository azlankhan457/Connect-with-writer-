"use client";

import { useState } from "react";
import Link from "next/link";

const FILTERS = ["All", "Memoir", "Fiction", "Business", "Self-Help", "Thriller"];

export default function CaseStudyGrid({ items }) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((c) => c.genre === active);

  return (
    <>
      <div className="filter-bar reveal">
        {FILTERS.map((f) => (
          <button
            className={`filter-btn${active === f ? " active" : ""}`}
            key={f}
            onClick={() => setActive(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="cs-grid">
        {visible.map((c) => (
          <div className="cs-card reveal" key={c.title}>
            <div className="cs-card__header">
              <div className="cs-card__genre-badge">
                <svg style={{ width: "12px", height: "12px" }}>
                  <use href="#i-star"></use>
                </svg>{" "}
                {c.genre}
              </div>
              <div className="cs-card__title">{c.title}</div>
              <div className="cs-card__author">{c.author}</div>
            </div>
            <div className="cs-card__body">
              <div className="cs-card__challenge">
                <h4>The Challenge</h4>
                <p>{c.challenge}</p>
              </div>
              <div className="cs-stats">
                {c.stats.map((s) => (
                  <div className="cs-stat" key={s.label}>
                    <div className="cs-stat__num">{s.num}</div>
                    <div className="cs-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="cs-card__quote">
                &quot;{c.quote}&quot;
                <cite>— {c.quoteAuthor}</cite>
              </blockquote>
            </div>
            <div className="cs-card__footer">
              <span style={{ fontSize: ".82rem", fontWeight: "600", color: "var(--ink-faint)" }}>
                Writer: {c.writer}
              </span>
              <Link className="btn btn--ghost-dark btn--sm" href="/contact">
                Start Your Book
              </Link>
            </div>
          </div>
        ))}
        {visible.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "var(--ink-soft)" }}>
            No case studies in this category yet — check back soon.
          </p>
        )}
      </div>
    </>
  );
}
