"use client";

import { useState } from "react";
import Link from "next/link";

const CONTENT_ITEMS = [
  { icon: "i-book-open", tag: "Chapter Writer", title: "Chapter 1 \u2014 The Quiet Years", meta: ["1,240 words", "2 days ago"] },
  { icon: "i-pen", tag: "Blurb Writer", title: "Back-Cover Blurb Draft", meta: ["180 words", "5 days ago"] },
  { icon: "i-bulb", tag: "Title Generator", title: "12 Title Options \u2014 Memoir", meta: ["12 titles", "1 week ago"] },
];

export default function MyContentPage() {
  const [view, setView] = useState("grid");

  return (
    <>
      <div className="app-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <h1>My Content</h1>
          <p>Find all your chapters, blurbs, and any saved content below.</p>
        </div>
        <div aria-label="View content as" className="view-toggle" role="group">
          <button
            aria-label="Grid view"
            className={view === "grid" ? "is-active" : ""}
            onClick={() => setView("grid")}
            type="button"
          >
            <svg>
              <use href="#i-grid"></use>
            </svg>
          </button>
          <button
            aria-label="List view"
            className={view === "list" ? "is-active" : ""}
            onClick={() => setView("list")}
            type="button"
          >
            <svg>
              <use href="#i-list"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className={`content-grid${view === "list" ? " is-list" : ""}`}>
        {CONTENT_ITEMS.map((item) => (
          <article className="content-card" key={item.title}>
            <div className="content-card__media">
              <svg>
                <use href={`#${item.icon}`}></use>
              </svg>
            </div>
            <div className="content-card__body">
              <span className="content-card__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <div className="content-card__meta">
                <span>{item.meta[0]}</span>
                <span>{item.meta[1]}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="empty-state" style={{ marginTop: "1.5rem" }}>
        <p>Looking for something else? You didn&apos;t create any other content yet.</p>
        <p>Our Chapter Writer tool is a good place to start if you want to draft a scene in seconds, or visit our collection of tools.</p>
        <div className="cta-row">
          <Link className="app-btn app-btn--ghost" href="/all-tools">
            View all tools
          </Link>
          <Link className="app-btn app-btn--dark" href="/ai-tool">
            Generate content
          </Link>
        </div>
      </div>
    </>
  );
}
