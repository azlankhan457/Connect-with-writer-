"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "writing", label: "Writing" },
  { id: "editing", label: "Editing" },
  { id: "publishing", label: "Publishing" },
  { id: "marketing", label: "Marketing" },
];

const CATEGORY_LABELS = { writing: "Writing", editing: "Editing", publishing: "Publishing", marketing: "Marketing" };

export default function ToolsExplorer({ tools }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return tools.filter((tool) => {
      const matchesCategory = category === "all" || tool.category === category;
      const matchesSearch = !q || tool.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [tools, query, category]);

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((tool) => {
      groups[tool.category] = groups[tool.category] || [];
      groups[tool.category].push(tool);
    });
    return groups;
  }, [filtered]);

  const categoryOrder = ["writing", "editing", "publishing", "marketing"];

  return (
    <>
      <div className="tools-toolbar">
        <div className="tools-search">
          <svg>
            <use href="#i-search"></use>
          </svg>
          <input onChange={(e) => setQuery(e.target.value)} placeholder="Search tools\u2026" type="text" value={query} />
        </div>
        <div className="tools-filters">
          {FILTERS.map((f) => (
            <button
              className={`tools-filter${category === f.id ? " is-active" : ""}`}
              key={f.id}
              onClick={() => setCategory(f.id)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {categoryOrder
        .filter((cat) => grouped[cat]?.length)
        .map((cat) => (
          <div key={cat}>
            <div className="tools-category-label">{CATEGORY_LABELS[cat]}</div>
            <div className="tool-grid">
              {grouped[cat].map((tool) => (
                <Link className="tool-card" href={tool.href} key={tool.name}>
                  <svg className="tool-card__ext">
                    <use href="#i-external"></use>
                  </svg>
                  <div className="tool-card__icon">
                    <svg>
                      <use href={`#${tool.icon}`}></use>
                    </svg>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}

      {filtered.length === 0 && (
        <div className="empty-state" style={{ marginTop: "1rem" }}>
          <p>No tools match your search. Try a different keyword or clear your filters.</p>
        </div>
      )}
    </>
  );
}
