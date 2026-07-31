/**
 * items: [{ title, author, genre, gradient }]
 * Displays a concise portfolio marquee of the supplied books.
 */
export default function PortfolioSlider({
  eyebrow,
  title,
  items,
  secondsPerItem = 4,
}) {
  const duration = Math.max(items.length, 1) * secondsPerItem;

  return (
    <div className="container">
      <div className="slider-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="portfolio-marquee">
        <div
          className="portfolio-marquee__track"
          style={{ "--marquee-duration": `${duration}s` }}
        >
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
