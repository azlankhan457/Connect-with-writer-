"use client";

import { useEffect, useRef, useState } from "react";

/**
 * items: [{ stars (number 1-5), quote, initials, name, tag }]
 * Center-snapping testimonial slider with dot navigation, matching the
 * "What Authors Say" section used across the site.
 */
export default function ReviewsSlider({ eyebrow, title, items }) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function updateActive() {
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    let closest = 0;
    let minDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  // Scrolls the track only (its own scrollLeft), never the page — unlike
  // scrollIntoView, which can also drag the whole document's vertical
  // scroll position if it decides the card "isn't visible" enough.
  function scrollTrackToIndex(index) {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = cardRect.left + cardRect.width / 2 - (trackRect.left + trackRect.width / 2);
    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let t;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(updateActive, 80);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance every 1s, pausing while the cursor is over the carousel.
  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const id = setInterval(() => {
      const next = (active + 1) % items.length;
      scrollTrackToIndex(next);
    }, 1000);
    return () => clearInterval(id);
  }, [active, isPaused, items.length]);

  return (
    <div className="container">
      <div className="section-head center">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      <div
        className="review-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="review-track" ref={trackRef}>
          {items.map((review, i) => (
            <div
              className={`review-card${i === active ? " is-active" : ""}`}
              key={review.name}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div aria-hidden="true" className="stars">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <svg key={s}>
                    <use href="#i-star"></use>
                  </svg>
                ))}
              </div>
              <p>&quot;{review.quote}&quot;</p>
              <div className="review-author">
                <span className="review-author__avatar">{review.initials}</span>
                <span>
                  <span className="review-author__name">{review.name}</span>
                  <span className="review-author__tag">{review.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="review-dots">
          {items.map((review, i) => (
            <button
              aria-label={`Go to slide ${i + 1}`}
              className={i === active ? "is-active" : ""}
              key={review.name}
              onClick={() => scrollTrackToIndex(i)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
