"use client";

import { useState } from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { CASE_FILTERS } from "@/lib/caseStudies";

export default function CaseStudyGrid({ items }) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((c) => c.genre === active);
  const countFor = (genre) =>
    genre === "All" ? items.length : items.filter((c) => c.genre === genre).length;

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter by genre">
        {CASE_FILTERS.map((f) => (
          <button
            aria-pressed={active === f}
            className={`filter-btn${active === f ? " active" : ""}`}
            key={f}
            onClick={() => setActive(f)}
            type="button"
          >
            {f} <span className="filter-btn__count">{countFor(f)}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="cs-status">
        Showing {visible.length} {visible.length === 1 ? "profile" : "profiles"}
        {active === "All" ? "" : ` in ${active}`}
      </p>

      <div className="cs-grid">
        {visible.map((c) => (
          <article className="cs-card" key={c.genre}>
            <div className="cs-card__cover">
              <BookCover genre={c.genre} title={`${c.genre} case study sample`} className="cs-card__book" />
            </div>
            <div className="cs-card__body">
              <p className="cs-card__genre">{c.genre}</p>
              <h3>{c.title}</h3>
              <p className="cs-card__challenge">{c.challenge}</p>
              <h4>What we did</h4>
              <ul className="cs-card__list">
                {c.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="cs-card__services">
                {c.services.map((s) => (
                  <Link href={s.href} key={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
