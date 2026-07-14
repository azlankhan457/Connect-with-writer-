"use client";

import { useRef } from "react";

/**
 * items: [{ title, author, genre, gradient }]
 * Horizontal book-cover slider with prev/next arrows (no dots), matching
 * the "Our Portfolio" section used across the site.
 */
export default function PortfolioSlider({ eyebrow, title, items }) {
  const trackRef = useRef(null);

  function scrollByAmount(dir) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 0.85 * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="container">
      <div className="slider-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="slider-arrows">
          <button aria-label="Previous" className="slider-arrow" onClick={() => scrollByAmount(-1)}>
            <svg>
              <use href="#i-arrow-left"></use>
            </svg>
          </button>
          <button aria-label="Next" className="slider-arrow" onClick={() => scrollByAmount(1)}>
            <svg>
              <use href="#i-arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="slider-track" ref={trackRef}>
          {items.map((book) => (
            <div className="slide" key={book.title}>
              <div className="book" style={{ "--book-bg": book.gradient }}>
                <div className="book__cover">
                  <span className="book__genre">{book.genre}</span>
                  <span className="book__title">{book.title}</span>
                  <span className="book__author">{book.author}</span>
                </div>
              </div>
              <span>
                {book.title}
                <small>{book.genre}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
