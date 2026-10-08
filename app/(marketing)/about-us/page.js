import Link from "next/link";
import BookCover from "@/components/BookCover";

export const metadata = {
  title: "About Connect with Writer",
  description:
    "Connect with Writer supports authors with writing, editing, cover design, publishing and marketing, with the author's voice leading every project.",
};

const HERO_BOOKS = [
  { genre: "Memoir", title: "Memoir sample" },
  { genre: "Fiction", title: "Fiction sample" },
  { genre: "Business", title: "Business sample" },
];

const SHELF_BOOKS = [
  { genre: "Fiction", title: "Fiction shelf sample" },
  { genre: "Memoir", title: "Memoir shelf sample" },
  { genre: "Business", title: "Business shelf sample" },
  { genre: "Self-Help", title: "Self-Help shelf sample" },
  { genre: "Thriller", title: "Thriller shelf sample" },
];

const PRINCIPLES = [
  {
    title: "The author leads",
    text: "Your story and your voice come first. We guide the craft, not the message.",
  },
  {
    title: "Care with every manuscript",
    text: "Your idea and your draft are handled respectfully, from the first conversation to the final file.",
  },
  {
    title: "Editorial precision",
    text: "Structure, clarity and polish are sharpened so the book reads with confidence.",
  },
  {
    title: "Clear communication",
    text: "You always know which stage your book is in and what happens next.",
  },
];

const DISCIPLINES = [
  {
    icon: "i-pen",
    title: "Writing",
    text: "Shaping ideas and rough material into a focused manuscript.",
    href: "/book-writing",
  },
  {
    icon: "i-edit",
    title: "Editing",
    text: "Structure, language and consistency refined without losing your voice.",
    href: "/book-editing",
  },
  {
    icon: "i-palette",
    title: "Cover design",
    text: "A cover and layout that tell readers what the book is before they open it.",
    href: "/book-cover-design",
  },
  {
    icon: "i-megaphone",
    title: "Marketing",
    text: "Positioning and launch support so the right readers can find the book.",
    href: "/book-marketing",
  },
];

const STEPS = [
  {
    title: "Discovery and direction",
    text: "We start with your goals, your audience and the book you want to create.",
  },
  {
    title: "Drafting and shaping",
    text: "Rough material becomes a focused manuscript with stronger momentum.",
  },
  {
    title: "Editing and refinement",
    text: "Structure and language are sharpened while the voice stays yours.",
  },
  {
    title: "Ready for publication",
    text: "From final review to production support, the book is ready to go out.",
  },
];

export default function Page() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy reveal">
            <p className="eyebrow">About Connect with Writer</p>
            <h1>
              Publishing support built around your book, your voice and your
              next chapter.
            </h1>
            <p className="lede">
              We help authors turn ideas into clear, compelling books, with
              the care and editorial rigor that lets you feel confident at
              every stage, from a blank page to a finished draft.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="btn btn--primary">
                Get a Free Consultation
                <svg aria-hidden="true">
                  <use href="#i-arrow-right"></use>
                </svg>
              </Link>
              <Link href="/case-studies" className="btn btn--ghost-dark">
                See our work
              </Link>
            </div>
          </div>

          <figure className="about-shelf reveal">
            <div className="about-shelf__row">
              {HERO_BOOKS.map((book) => (
                <BookCover
                  key={book.genre}
                  genre={book.genre}
                  title={book.title}
                  className="about-shelf__book"
                />
              ))}
            </div>
            <figcaption>Covers from our portfolio</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <div className="about-split__intro reveal">
            <p className="eyebrow">Our approach</p>
            <h2>Thoughtful publishing support without the factory feeling.</h2>
            <p className="lede">
              Writing a book should feel collaborative, not mechanical. Our
              process is structured enough to keep projects moving and
              personal enough to protect the voice that makes your work
              distinct.
            </p>
          </div>
          <ol className="about-principles">
            {PRINCIPLES.map((item, index) => (
              <li className="about-principles__item reveal" key={item.title}>
                <span className="about-principles__num">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">What we do</p>
            <h2>Four disciplines, one book.</h2>
            <p className="lede">
              A book is made through several kinds of craft. We bring them
              together around your project so nothing is handled in
              isolation.
            </p>
          </div>
          <div className="about-cards">
            {DISCIPLINES.map((item) => (
              <Link
                className="about-card reveal"
                href={item.href}
                key={item.href}
              >
                <span className="about-card__icon">
                  <svg aria-hidden="true">
                    <use href={`#${item.icon}`}></use>
                  </svg>
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="about-card__link">
                  Explore {item.title.toLowerCase()}
                  <svg aria-hidden="true">
                    <use href="#i-arrow-right"></use>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">How we work</p>
            <h2>A process designed to keep your book moving with intention.</h2>
            <p className="lede">
              We support authors through the messy middle of writing, the
              curve of revision and the final stretch toward publication.
            </p>
          </div>
          <ol className="about-steps">
            {STEPS.map((step, index) => (
              <li className="about-steps__item reveal" key={step.title}>
                <span className="about-steps__num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">Across genres</p>
            <h2>Books of every kind deserve the same care.</h2>
          </div>
          <ul className="about-genres">
            {SHELF_BOOKS.map((book) => (
              <li className="about-genres__item reveal" key={book.genre}>
                <BookCover
                  genre={book.genre}
                  title={book.title}
                  className="about-genres__book"
                />
                <span>{book.genre}</span>
              </li>
            ))}
          </ul>
          <div className="about-genres__cta">
            <Link href="/case-studies" className="btn btn--ghost-dark">
              Browse case studies
              <svg aria-hidden="true">
                <use href="#i-arrow-right"></use>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner reveal">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>
                Let&apos;s make your next book feel sharper, stronger and more
                yours.
              </h2>
              <p>
                Share your project goals and we&apos;ll help you map out the
                right next step, without pressure.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn btn--primary">
                  Get a Free Consultation
                  <svg aria-hidden="true">
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
                <Link href="/case-studies" className="btn btn--ghost-light">
                  Read Success Stories
                </Link>
              </div>
            </div>
            <div className="cta-banner__art">
              <BookCover
                genre="Thriller"
                title="Thriller closing sample"
                className="about-cta__book"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
