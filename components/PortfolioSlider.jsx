/**
 * items: [{ title, author, genre, gradient }]
 * Continuously auto-scrolling book-cover marquee (right to left), pausing
 * on hover. The item list is duplicated so the loop is seamless.
 */
export default function PortfolioSlider({ eyebrow, title, items, secondsPerItem = 4 }) {
  const duration = items.length * secondsPerItem;
  const loopItems = [...items, ...items];

  return (
    <div className="container">
      <div className="slider-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="portfolio-marquee">
        <div className="portfolio-marquee__track" style={{ "--marquee-duration": `${duration}s` }}>
          {loopItems.map((book, i) => (
            <div aria-hidden={i >= items.length || undefined} className="slide" key={`${book.title}-${i}`}>
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
