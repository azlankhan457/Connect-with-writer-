"use client";

import { useState } from "react";

let rowIdCounter = 0;
function newId() {
  rowIdCounter += 1;
  return `row-${rowIdCounter}`;
}

export default function OutlineBuilder({
  placeholderPrefix = "Beat",
  initialRows,
  allowRemove = false,
  aiFillLabel = "Write the outline with AI",
  aiFillSamples,
}) {
  const [rows, setRows] = useState(
    () => initialRows || [{ id: newId(), value: "" }]
  );

  function addRow() {
    setRows((r) => [...r, { id: newId(), value: "" }]);
  }

  function removeRow(id) {
    setRows((r) => (r.length > 1 ? r.filter((row) => row.id !== id) : r));
  }

  function updateRow(id, value) {
    setRows((r) => r.map((row) => (row.id === id ? { ...row, value } : row)));
  }

  function fillWithAi() {
    if (aiFillSamples?.length) {
      setRows(aiFillSamples.map((text) => ({ id: newId(), value: text })));
    } else {
      addRow();
    }
  }

  return (
    <div className="app-field">
      <div className="app-field--row" style={{ marginBottom: ".7rem" }}>
        <label style={{ marginBottom: 0 }}>
          {allowRemove ? "Chapter Outline" : "Outline"}{" "}
          <span className="hint">(minimum 3 {allowRemove ? "chapters" : "beats"})</span>
        </label>
        <button className="ai-assist-btn" onClick={fillWithAi} type="button">
          <svg>
            <use href="#i-wand"></use>
          </svg>
          {aiFillLabel}
        </button>
      </div>
      <div>
        {rows.map((row, i) => {
          const isLast = i === rows.length - 1;
          const showRemove = allowRemove && !isLast;
          return (
            <div className="subheading-row" key={row.id}>
              <input
                onChange={(e) => updateRow(row.id, e.target.value)}
                placeholder={`${placeholderPrefix} ${i + 1}`}
                type="text"
                value={row.value}
              />
              {showRemove ? (
                <button aria-label="Remove" className="icon-btn-add" onClick={() => removeRow(row.id)} type="button">
                  <svg>
                    <use href="#i-close"></use>
                  </svg>
                </button>
              ) : (
                <button aria-label="Add another" className="icon-btn-add" onClick={addRow} type="button">
                  <svg>
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
