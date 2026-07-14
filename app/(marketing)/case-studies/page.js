import Link from "next/link";
import CaseStudyGrid from "@/components/CaseStudyGrid";

const CASE_STUDIES = [
  {
    genre: "Memoir",
    title: "Rise & Rebuild: A Story of Failure, Faith, and a Second Chance",
    author: "Karen Janssen, Entrepreneur & Speaker",
    challenge:
      "Karen had survived bankruptcy, a divorce, and a career collapse — and rebuilt herself into a successful business owner. She had a powerful story but no writing background and found it emotionally difficult to structure her experiences into a narrative arc.",
    stats: [
      { num: "5 mo", label: "Turnaround" },
      { num: "82K", label: "Words Written" },
      { num: "Top 50", label: "Memoir Charts" },
    ],
    quote:
      "My writer didn't just write my story — she helped me understand it. I cried reading the finished manuscript. In the best way.",
    quoteAuthor: "Karen Janssen",
    writer: "Sofia Lara",
  },
  {
    genre: "Thriller",
    title: "Beneath Quiet Waters",
    author: "N. Voss, Former Detective",
    challenge:
      "A retired homicide detective with a storyline ripped from his real case files, but no experience turning investigative notes into a page-turning novel. He needed a co-writer who could handle police procedural authenticity while building genuine literary tension.",
    stats: [
      { num: "7 mo", label: "Completion" },
      { num: "96K", label: "Words Written" },
      { num: "4.8★", label: "Avg. Review" },
    ],
    quote:
      "Amara got the police world right in a way that would have taken a civilian writer years to learn. The pacing is exactly how I wanted it — relentless.",
    quoteAuthor: "N. Voss",
    writer: "Amara Tanaka",
  },
  {
    genre: "Self-Help",
    title: "The Permission Slip: Stop Waiting and Start Living the Life You Actually Want",
    author: "Dr. Rachel Obi, Psychologist & Coach",
    challenge:
      "Dr. Obi had a decade of therapy frameworks and client breakthroughs but struggled to make her clinical insights feel accessible to a general audience without dumbing them down. She needed a writer who could translate without oversimplifying.",
    stats: [
      { num: "4 mo", label: "Delivery" },
      { num: "#12", label: "Psychology Chart" },
      { num: "14K+", label: "Pre-orders" },
    ],
    quote:
      "My editor kept telling me my drafts were too clinical. My Book Writing writer found the exact voice I'd been reaching for but couldn't quite grasp.",
    quoteAuthor: "Dr. Rachel Obi",
    writer: "Marcus Reynolds",
  },
  {
    genre: "Fiction",
    title: "The Last Lighthouse",
    author: "R. Calder, Retired Schoolteacher",
    challenge:
      "A 67-year-old retired schoolteacher with a complete novel concept, 40 pages of handwritten notes, and a lifelong dream. She worried her age meant it was \u201ctoo late.\u201d It wasn't. We delivered her debut literary fiction novel nine months later.",
    stats: [
      { num: "9 mo", label: "Total Time" },
      { num: "78K", label: "Word Count" },
      { num: "3", label: "Agent Requests" },
    ],
    quote: "I've wanted to write this book since I was 35. At 67, it's finally real. You're never too late — that's what Book Writing taught me.",
    quoteAuthor: "R. Calder",
    writer: "Sofia Lara",
  },
];

export default function Page() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal">
            <p className="eyebrow">Client Success Stories</p>
            <h1>Real Authors. Real Books. Real Results.</h1>
            <p className="lede">
              Don&apos;t take our word for it. Read how real clients went from a blank page — or a half-finished
              manuscript — to a published book that exceeded their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="section section--tight">
        <div className="container">
          <div className="cs-featured reveal">
            <div>
              <div className="cs-featured__label">
                <svg style={{ width: "14px", height: "14px" }}>
                  <use href="#i-star"></use>
                </svg>
                Featured Case Study
              </div>
              <h2>How a Retired Executive Wrote a Business Bestseller in 6 Months</h2>
              <p className="lede">
                David Osei, a former Fortune 500 COO, had 25 years of leadership insights — and zero time to write
                them down. We matched him with a business ghostwriter, built a chapter plan from his notes, and
                delivered a manuscript that hit #4 in Amazon Business within its first week.
              </p>
              <div className="cs-featured-stats">
                <div className="cs-featured-stat">
                  <div className="cs-featured-stat__num">#4</div>
                  <div className="cs-featured-stat__label">Amazon Business</div>
                </div>
                <div className="cs-featured-stat">
                  <div className="cs-featured-stat__num">6 mo</div>
                  <div className="cs-featured-stat__label">Idea to Published</div>
                </div>
                <div className="cs-featured-stat">
                  <div className="cs-featured-stat__num">62K</div>
                  <div className="cs-featured-stat__label">Copies Sold (Yr 1)</div>
                </div>
              </div>
              <div className="cta-row">
                <Link className="btn btn--primary" href="/contact">
                  Start Your Story{" "}
                  <svg>
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
                <Link className="btn btn--ghost-light" href="/#portfolio">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="cs-featured__visual">
              <div className="book-mock">
                <div className="book-mock__cover" style={{ background: "linear-gradient(155deg,#212529,#131619)" }}>
                  <span className="book-mock__genre">Business</span>
                  <span className="book-mock__title">The Boardroom Code</span>
                  <span className="book-mock__author">D. Osei</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">All Case Studies</p>
            <h2>Across Every Genre & Every Kind of Author</h2>
            <p className="lede">
              From first-time writers to seasoned professionals, our clients come from all backgrounds. Here&apos;s
              what happens when they trust us with their story.
            </p>
          </div>

          <CaseStudyGrid items={CASE_STUDIES} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">What Authors Say</p>
            <h2>Straight from the People We&apos;ve Worked With</h2>
          </div>
          <div className="testimonial-strip">
            <div className="testi-card reveal">
              <div className="testi-stars">
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
              </div>
              <p className="testi-quote">
                &quot;I gave them a 3-page concept document and got back a 320-page manuscript that sounded exactly
                like me. The process was smooth, the communication was great, and the book is everything I hoped it
                would be.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">TW</div>
                <div>
                  <div className="testi-name">Thomas Whitfield</div>
                  <div className="testi-book">Shadows Over Hollow Creek</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal">
              <div className="testi-stars">
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
              </div>
              <p className="testi-quote">
                &quot;I&apos;d tried two other ghostwriting services before Book Writing. Neither got my voice
                right. Book Writing nailed it in the first chapter draft. The difference was that they actually
                listened before they wrote.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">LM</div>
                <div>
                  <div className="testi-name">Lucia Marquez</div>
                  <div className="testi-book">Wildfire Hearts</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal">
              <div className="testi-stars">
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
                <svg>
                  <use href="#i-star"></use>
                </svg>
              </div>
              <p className="testi-quote">
                &quot;As a busy CEO, I had the content but not the time. My Book Writing writer extracted
                everything through interviews and structured it brilliantly. The book has done more for my
                speaking career than anything else I&apos;ve tried.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">PA</div>
                <div>
                  <div className="testi-name">Pieter Andersen</div>
                  <div className="testi-book">The Edge of Everything</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner reveal">
            <div>
              <p className="eyebrow">Your Story Is Next</p>
              <h2>Ready to Join These Authors?</h2>
              <p>
                Every case study on this page started the same way — with a free consultation and an idea.
                Schedule yours today. There&apos;s no obligation and no pressure.
              </p>
              <div className="cta-row">
                <Link className="btn btn--primary" href="/contact">
                  Book a Free Consultation{" "}
                  <svg>
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
                <Link className="btn btn--ghost-light" href="/#portfolio">
                  See Our Portfolio
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "4rem",
                    fontWeight: "800",
                    color: "rgba(64,190,226,.3)",
                    lineHeight: "1",
                  }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: ".8rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  Books & Counting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
