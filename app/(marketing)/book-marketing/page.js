import Link from "next/link";
import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import TiltCard from "@/components/TiltCard";
import BookCover from "@/components/BookCover";

const PORTFOLIO_BOOKS = [
  {
    title: "Bestseller Bound",
    author: "Connect with Writer",
    genre: "Fiction",
    gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)",
  },
  {
    title: "The Margin Method",
    author: "T. Achebe",
    genre: "Business",
    gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)",
  },
  {
    title: "Milo's Loud Feelings",
    author: "N. Farah",
    genre: "Children's",
    gradient: "linear-gradient(155deg,#5a2a45,#280f1e)",
  },
  {
    title: "No Clean Exit",
    author: "R. Doyle",
    genre: "Thriller",
    gradient: "linear-gradient(155deg,#2c2438,#13101c)",
  },
  {
    title: "Ordinary Weather",
    author: "B. Tanaka",
    genre: "Memoir",
    gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)",
  },
  {
    title: "The Last Signal Home",
    author: "K. Bertrand",
    genre: "Sci-Fi",
    gradient: "linear-gradient(155deg,#202c3a,#0d141d)",
  },
  {
    title: "The Steady Method",
    author: "R. Falk",
    genre: "Self-Help",
    gradient: "linear-gradient(155deg,#3a4a4a,#16201f)",
  },
  {
    title: "The Long Coastline",
    author: "P. Serrano",
    genre: "Fiction",
    gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)",
  },
];
const REVIEWS = [
  {
    stars: 5,
    quote:
      "Launch week actually felt like an event instead of a quiet upload. The ARC campaign alone got me 40 reviews before release day.",
    initials: "PS",
    name: "Priya S.",
    tag: "Fiction Author",
  },
  {
    stars: 5,
    quote:
      "They understood how business readers actually find books, which is completely different from fiction. The PR outreach was worth every dollar.",
    initials: "TA",
    name: "Tomás A.",
    tag: "Business Author",
  },
  {
    stars: 5,
    quote:
      "Reaching parent and educator communities for my kids' book was something I never would have known how to do myself.",
    initials: "NF",
    name: "Nia F.",
    tag: "Children's Book Author",
  },
  {
    stars: 5,
    quote:
      "The Amazon ad strategy kept my book visible for months after launch, not just the first week.",
    initials: "RD",
    name: "Ramon D.",
    tag: "Thriller Author",
  },
];
const FAQS = [
  {
    q: "When should book marketing start?",
    a: "Real momentum starts four to eight weeks before your release date with ARC distribution and early reviews, not on launch day itself. We build the timeline around your actual publication date.",
  },
  {
    q: "What is an ARC campaign, and do I need one?",
    a: "An ARC (advance reader copy) campaign distributes early copies of your book to reviewers and readers before launch, generating reviews and buzz that make your book look established the moment it goes live. It's one of the most effective tools for fiction and nonfiction launches alike.",
  },
  {
    q: "Do you run paid ads, or just organic marketing?",
    a: "We offer both. Amazon Ads and social ad management are available alongside organic strategies like ARC campaigns, content, and PR outreach, depending on your budget and goals.",
  },
  {
    q: "How much does book marketing cost?",
    a: "Pricing depends on the scope of your launch plan, ad budget, and which channels you want to prioritize. We provide a custom quote after a free consultation about your book and goals.",
  },
  {
    q: "Can you market a book that's already published?",
    a: "Yes. We regularly work with authors whose books have already launched but need a fresh push — a redesigned cover, a new ad strategy, or a backlist marketing plan for an existing title.",
  },
  {
    q: "Do you help with author branding, not just individual book launches?",
    a: "Yes. We offer author platform building, including website, email list, and social media strategy for authors thinking beyond a single release.",
  },
  {
    q: "How do you market children's books differently from adult titles?",
    a: "Children's book marketing focuses on reaching parents, educators, and children's book communities — through different channels and messaging than adult fiction or nonfiction marketing.",
  },
  {
    q: "What results can I realistically expect?",
    a: "Results vary by genre, budget, and book quality, but our clients typically see measurably higher launch-week reviews, sales rank movement, and sustained visibility compared to an unmarketed release. We'll set realistic expectations during your consultation.",
  },
];

export default function Page() {
  return (
    <>
      {/*============================ HERO ============================ */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Book Marketing Services</p>
            <h1>
              Book Marketing That Turns a Published Book Into a Book People
              Actually Find
            </h1>
            <p className="lede">
              Publishing your book is only half the job. Our marketing team
              builds Amazon optimization, ARC reader campaigns, social content,
              and launch PR strategies that put your book in front of the
              readers who&apos;ll actually love it.
            </p>
            <div className="cta-row">
              <a href="#contact" className="btn btn--primary">
                Get a Free Marketing Plan{" "}
                <svg>
                  <use href="#i-arrow-right"></use>
                </svg>
              </a>
              <Link href="/case-studies" className="btn btn--ghost-dark">
                See Our Work
              </Link>
            </div>
            <div className="hero-trust">
              <p className="hero-trust-text">
                <strong>Launch, visibility &amp; promotion support</strong>
                Positioning built around your readers
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="cover-showcase"
              aria-label="Book marketing launch examples"
            >
              <div className="cover-showcase__glow" aria-hidden="true"></div>
              <div className="cover-showcase__stack" aria-hidden="true">
                <BookCover
                  className="cover-showcase__book cover-showcase__book--primary"
                  genre="Fiction"
                  title="Bestseller Bound"
                  author="Connect with Writer"
                  gradient="linear-gradient(155deg,#5a2a2a,#280f0f)"
                />
                <BookCover
                  className="cover-showcase__book cover-showcase__book--secondary"
                  genre="Business"
                  title="The Margin Method"
                  author="T. Achebe"
                  gradient="linear-gradient(155deg,#4a3a1d,#241c0d)"
                />
                <BookCover
                  className="cover-showcase__book cover-showcase__book--tertiary"
                  genre="Thriller"
                  title="No Clean Exit"
                  author="R. Doyle"
                  gradient="linear-gradient(155deg,#2c2438,#13101c)"
                />
              </div>
              <div className="cover-showcase__badge">
                Launch-ready positioning
              </div>
              <div className="cover-mini-card cover-mini-card--top">
                <svg>
                  <use href="#i-megaphone"></use>
                </svg>
                <span>Pre-launch momentum</span>
              </div>
              <div className="cover-mini-card cover-mini-card--bottom">
                <svg>
                  <use href="#i-users"></use>
                </svg>
                <span>Audience-first strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*============================ FOLD 1 — Proof stats strip ============================ */}
      <section className="press">
        <div className="container">
          <p className="press__label">Why Authors Launch With Us</p>
          <div className="press__row">
            <span>Pre-Launch Momentum Plans</span>
            <span>Audience & Positioning First</span>
            <span>Amazon Keywords & Categories</span>
            <span>ARC Review Campaigns</span>
            <span>100% Custom Launch Plans</span>
          </div>
        </div>
      </section>

      {/*============================ FOLD 2 — Split intro ============================ */}
      <section className="section" id="intro">
        <div className="container split">
          <div className="split-art">
            <TiltCard>
              <BookCover
                className="book--lg"
                genre="Fiction"
                title="Bestseller Bound"
                author="Connect with Writer"
                gradient="linear-gradient(155deg,#5a2a2a,#280f0f)"
              />
            </TiltCard>
          </div>
          <div className="split-copy">
            <p className="eyebrow">Market Your Book</p>
            <h2>
              Market Your Book With a Team That Knows Where Readers Actually Are
            </h2>
            <div className="body-copy">
              <p>
                A great book with no marketing plan quietly disappears in a sea
                of new releases. Our marketing team builds a custom launch
                strategy around Amazon algorithm optimization, advance reader
                campaigns, targeted social content, and press outreach — matched
                to your genre and your actual readers.
              </p>
            </div>
            <ul className="checklist">
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Custom launch plan built around your genre
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Amazon keyword & category optimization
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                ARC (advance reader copy) campaign management
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Social content & press outreach included
              </li>
            </ul>
            <div className="cta-row">
              <a href="#contact" className="btn btn--primary">
                Start Marketing My Book{" "}
                <svg>
                  <use href="#i-arrow-right"></use>
                </svg>
              </a>
              <a href="#contact" className="btn btn--ghost-dark">
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*============================ FOLD 3 — Services grid ============================ */}
      <section className="section section--cream" id="services">
        <div className="container">
          <div className="fold3-head">
            <div>
              <p className="eyebrow">What We Offer</p>
              <h2>
                A Complete Marketing Plan, Pre-Launch Through Long-Term Sales
              </h2>
            </div>
            <p className="lede">
              Book marketing isn&apos;t a single push — it&apos;s a coordinated
              plan that builds momentum before, during, and after launch.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-card__icon">
                <svg>
                  <use href="#i-search"></use>
                </svg>
              </div>
              <h3>Amazon & Retail Optimization</h3>
              <p>
                Keyword research, category selection, and listing optimization
                built to improve algorithmic visibility.
              </p>
            </article>
            <article className="service-card">
              <div className="service-card__icon">
                <svg>
                  <use href="#i-users"></use>
                </svg>
              </div>
              <h3>ARC & Review Campaigns</h3>
              <p>
                Advance reader copy distribution and review outreach that builds
                momentum before launch day.
              </p>
            </article>
            <article className="service-card">
              <div className="service-card__icon">
                <svg>
                  <use href="#i-message"></use>
                </svg>
              </div>
              <h3>Social Media & Content</h3>
              <p>
                Genre-matched social content and creator outreach designed to
                reach readers where they actually scroll.
              </p>
            </article>
            <article className="service-card">
              <div className="service-card__icon">
                <svg>
                  <use href="#i-megaphone"></use>
                </svg>
              </div>
              <h3>Press & Launch PR</h3>
              <p>
                Media outreach and launch-week press strategy to build
                credibility and visibility beyond retail platforms.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="cta-banner__copy">
              <h2>Let&apos;s Give Your Book the Launch It Deserves</h2>
              <p>
                Book a free marketing consultation and get a custom launch plan
                built around your genre and your book&apos;s release date.
              </p>
              <a href="#contact" className="btn btn--primary">
                Get My Free Marketing Plan{" "}
                <svg>
                  <use href="#i-arrow-right"></use>
                </svg>
              </a>
            </div>
            <div className="cta-banner__art">
              <div className="progress-card">
                <div className="progress-card__top">
                  <span>Your Launch Progress</span>
                  <svg
                    style={{
                      width: "18px",
                      height: "18px",
                      color: "var(--orange)",
                    }}
                  >
                    <use href="#i-megaphone"></use>
                  </svg>
                </div>
                <div className="progress-step done">
                  <span className="dot">
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                  </span>{" "}
                  Launch Plan Built
                </div>
                <div className="progress-step done">
                  <span className="dot">
                    <svg>
                      <use href="#i-check"></use>
                    </svg>
                  </span>{" "}
                  ARC Campaign Live
                </div>
                <div className="progress-step current">
                  <span className="dot"></span> Launch Week In Progress
                </div>
                <div className="progress-step ">
                  <span className="dot"></span> Post-Launch Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*============================ FOLD 5 — Specialties grid ============================ */}
      <section className="section" id="specialties">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Marketing We Specialize In
            </p>
            <h2>
              Marketing Built Around How Your Genre&apos;s Readers Actually
              Discover Books
            </h2>
            <p className="lede" style={{ marginInline: "auto" }}>
              Thriller readers and business-book readers don&apos;t discover new
              titles the same way — our strategy reflects that.
            </p>
          </div>
          <div className="genre-grid">
            <article className="genre-card">
              <h3>Fiction & Genre Launches</h3>
              <p>
                ARC campaigns, review outreach, and social content built around
                how fiction readers discover new authors.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
            <article className="genre-card">
              <h3>Business & Nonfiction Authority Building</h3>
              <p>
                PR and content strategy that positions you as a credible expert,
                not just a book for sale.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
            <article className="genre-card">
              <h3>Children&apos;s Book Marketing</h3>
              <p>
                Outreach to parents, educators, and children&apos;s book
                communities where young readers&apos; books get discovered.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
            <article className="genre-card">
              <h3>Amazon Ads & Algorithm Strategy</h3>
              <p>
                Paid and organic Amazon strategy built to keep your book visible
                well past launch week.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
            <article className="genre-card">
              <h3>Author Platform Building</h3>
              <p>
                Website, email list, and social presence strategy for authors
                building a long-term readership.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
            <article className="genre-card">
              <h3>Series & Backlist Marketing</h3>
              <p>
                Ongoing marketing support for authors with multiple books or an
                upcoming series launch.
              </p>
              <a href="#contact" className="btn btn--ghost-dark btn--sm">
                Let&apos;s Connect
              </a>
            </article>
          </div>
        </div>
      </section>

      {/*============================ FOLD 6 — Portfolio slider ============================ */}

      <section className="section section--cream" id="portfolio">
        <PortfolioSlider
          eyebrow="Recent Launches"
          title={"Launches We've Helped Build Momentum For"}
          items={PORTFOLIO_BOOKS}
        />
      </section>

      {/*============================ FOLD 7 — Feature stage ============================ */}
      <section className="section feature-band">
        <div className="container">
          <span className="badge-pill">
            <svg style={{ width: "16px", height: "16px" }}>
              <use href="#i-megaphone"></use>
            </svg>
            Publishing Isn&apos;t the Finish Line.
          </span>
          <h2>
            We&apos;re the Marketing Team That Builds Momentum Before Launch Day
            Even Arrives
          </h2>
          <p className="lede">
            The most common mistake authors make is starting marketing after
            their book goes live. Real momentum starts weeks earlier, with ARC
            readers, early reviews, and a content plan already in motion before
            launch day.
          </p>
          <em className="accent-italic">
            A book without a launch plan is a whisper in a very loud room.
          </em>

          <div className="feature-stage">
            <div className="feature-col">
              <div className="feature-note">
                <span className="feature-note__num">01</span>
                <div>
                  <h4>Pre-Launch Momentum</h4>
                  <p>
                    ARC campaigns and early reviews built before your release
                    date.
                  </p>
                </div>
              </div>
              <div className="feature-note">
                <span className="feature-note__num">02</span>
                <div>
                  <h4>Genre-Specific Strategy</h4>
                  <p>
                    A plan built around how your specific readers discover
                    books.
                  </p>
                </div>
              </div>
              <div className="feature-note">
                <span className="feature-note__num">03</span>
                <div>
                  <h4>Data-Informed Ad Spend</h4>
                  <p>
                    Amazon and social ad budgets guided by real performance
                    data.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-books" aria-hidden="true">
              <BookCover
                className="book--sm"
                genre="Fiction"
                title="Launch Week Live"
                author="Connect with Writer"
                gradient="linear-gradient(155deg,#5a2a2a,#280f0f)"
              />
              <BookCover
                className="book--sm"
                genre="Business"
                title="Momentum Building"
                author="Connect with Writer"
                gradient="linear-gradient(155deg,#4a3a1d,#241c0d)"
              />
            </div>

            <div className="feature-col right">
              <div className="feature-note">
                <span className="feature-note__num">04</span>
                <div>
                  <h4>Press & PR Outreach</h4>
                  <p>
                    Media strategy that builds credibility beyond retail
                    platforms.
                  </p>
                </div>
              </div>
              <div className="feature-note">
                <span className="feature-note__num">05</span>
                <div>
                  <h4>Long-Term Growth Plan</h4>
                  <p>Marketing support that continues well past launch week.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-final-note" style={{ textAlign: "center" }}>
            <a href="#contact" className="btn btn--primary">
              Get My Free Marketing Plan{" "}
              <svg>
                <use href="#i-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/*============================ FOLD 7b — Process ============================ */}
      <section className="section section--cream">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2>
              Our 4-Step Marketing Process, Pre-Launch to Long-Term Growth
            </h2>
            <p className="lede">
              A coordinated marketing timeline that builds real momentum instead
              of a single day of attention.
            </p>
            <div className="process-steps">
              <div className="process-step">
                <span className="process-step__num">01</span>
                <div>
                  <h3>Strategy & Positioning</h3>
                  <p>
                    We build a custom marketing plan around your genre, comp
                    titles, and target readers, timed to your release date.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <span className="process-step__num">02</span>
                <div>
                  <h3>Pre-Launch Momentum</h3>
                  <p>
                    ARC distribution, early reviews, and content teasers begin
                    building buzz weeks before launch day.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <span className="process-step__num">03</span>
                <div>
                  <h3>Launch Week Execution</h3>
                  <p>
                    Coordinated social content, ad spend, and press outreach
                    concentrated around your release date.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <span className="process-step__num">04</span>
                <div>
                  <h3>Post-Launch Growth</h3>
                  <p>
                    Ongoing optimization of ads, content, and outreach to keep
                    sales momentum going long after launch week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="collage">
            <Link className="collage-card" href="/case-studies">
              <svg>
                <use href="#i-megaphone"></use>
              </svg>
              <strong>Our Work</strong>
              <span>See launch stories in the case studies</span>
            </Link>
            <div className="collage-card">
              <svg>
                <use href="#i-users"></use>
              </svg>
              <strong>Audience First</strong>
              <span>Positioning before promotion</span>
            </div>
            <Link className="collage-card play" href="/case-studies">
              <span className="play-btn" aria-hidden="true">
                <svg>
                  <use href="#i-play"></use>
                </svg>
              </span>
              <span>See how it works</span>
            </Link>
            <div className="collage-card">
              <svg>
                <use href="#i-shield"></use>
              </svg>
              <strong>Confidential</strong>
              <span>NDA on every campaign</span>
            </div>
          </div>
        </div>
      </section>

      {/*============================ FOLD 8 — CTA 2 ============================ */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta2 reveal">
            <div className="cta2-copy">
              <span className="cta2__tag">Launch With Momentum</span>
              <h2>Your Book Deserves More Than a Quiet Launch Day</h2>
              <h3>Let&apos;s build it real momentum.</h3>
              <p>
                Tell us about your book and release date today, and we&apos;ll
                send back a custom marketing plan built around your genre and
                goals.
              </p>
              <div className="cta-row">
                <a href="#contact" className="btn btn--primary">
                  Get My Free Marketing Plan{" "}
                  <svg>
                    <use href="#i-arrow-right"></use>
                  </svg>
                </a>
                <Link href="/case-studies" className="btn btn--ghost-light">
                  View Our Portfolio
                </Link>
              </div>
            </div>
            <div className="cta2-collage" aria-hidden="true">
              <BookCover
                className="book--sm"
                genre="Fiction"
                title="Fiction"
                author=""
                gradient="linear-gradient(155deg,#5a2a2a,#280f0f)"
              />
              <BookCover
                className="book--sm"
                genre="Business"
                title="Business"
                author=""
                gradient="linear-gradient(155deg,#4a3a1d,#241c0d)"
              />
              <BookCover
                className="book--sm"
                genre="Children's"
                title="Children's"
                author=""
                gradient="linear-gradient(155deg,#5a2a45,#280f1e)"
              />
              <BookCover
                className="book--sm"
                genre="Thriller"
                title="Thriller"
                author=""
                gradient="linear-gradient(155deg,#2c2438,#13101c)"
              />
              <BookCover
                className="book--sm"
                genre="Memoir"
                title="Memoir"
                author=""
                gradient="linear-gradient(155deg,#1d3a4a,#0d1c24)"
              />
            </div>
          </div>
        </div>
      </section>

      {/*============================ FOLD 9 — Reviews ============================ */}

      <section className="section">
        <ReviewsSlider
          eyebrow="Client Stories"
          title={"What Authors Say About Our Marketing"}
          items={REVIEWS}
        />
      </section>

      <section className="section section--cream" id="faq">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              FAQs
            </p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              From The Blog
            </p>
            <h2>Resources for Authors &amp; First-Time Writers</h2>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div
                className="blog-card__media"
                style={{ background: "var(--orange-tint)" }}
              >
                <svg style={{ color: "var(--orange-deep)" }}>
                  <use href="#i-megaphone"></use>
                </svg>
              </div>
              <div className="blog-card__body">
                <span className="blog-tag">Launch Strategy</span>
                <h3>
                  <Link href="/blog/how-to-choose-a-ghostwriter">
                    Why Your Book Marketing Should Start Before Your Book Is
                    Even Published
                  </Link>
                </h3>
                <p>
                  The authors with the strongest launch weeks almost always
                  started building momentum a month or more in advance.
                </p>
                <div className="blog-meta">
                  <span>June 28, 2026</span>
                  <Link
                    className="read-more"
                    href="/blog/how-to-choose-a-ghostwriter"
                  >
                    Read More{" "}
                    <svg>
                      <use href="#i-arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <div
                className="blog-card__media"
                style={{ background: "var(--cream-deep)" }}
              >
                <svg style={{ color: "var(--orange-deep)" }}>
                  <use href="#i-users"></use>
                </svg>
              </div>
              <div className="blog-card__body">
                <span className="blog-tag">ARC Campaigns</span>
                <h3>
                  <Link href="/blog/self-publishing-vs-traditional">
                    How to Run an ARC Campaign That Actually Generates Reviews
                  </Link>
                </h3>
                <p>
                  A step-by-step look at what makes advance reader campaigns
                  succeed instead of quietly fizzling out.
                </p>
                <div className="blog-meta">
                  <span>June 11, 2026</span>
                  <Link
                    className="read-more"
                    href="/blog/self-publishing-vs-traditional"
                  >
                    Read More{" "}
                    <svg>
                      <use href="#i-arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <div
                className="blog-card__media"
                style={{ background: "var(--orange-tint)" }}
              >
                <svg style={{ color: "var(--orange-deep)" }}>
                  <use href="#i-search"></use>
                </svg>
              </div>
              <div className="blog-card__body">
                <span className="blog-tag">Amazon Strategy</span>
                <h3>
                  <Link href="/blog/book-outline-template">
                    Amazon Keyword & Category Strategy for Authors, Explained
                    Simply
                  </Link>
                </h3>
                <p>
                  How the Amazon algorithm actually surfaces books, and what
                  authors can control to improve visibility.
                </p>
                <div className="blog-meta">
                  <span>May 29, 2026</span>
                  <Link
                    className="read-more"
                    href="/blog/book-outline-template"
                  >
                    Read More{" "}
                    <svg>
                      <use href="#i-arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/*============================ FOLD 12 — Final CTA + contact form ============================ */}

      <section className="section section--cream" id="contact">
        <div className="container final-grid">
          <div className="final-copy reveal">
            <p className="eyebrow">Let&apos;s Build Your Launch Plan</p>
            <h2>Give Your Book the Launch It Deserves.</h2>
            <p className="lede">
              Tell us about your book, genre, and release timeline, and
              we&apos;ll send back a custom marketing plan within one business
              day.
            </p>
            <div className="final-books" aria-hidden="true">
              <BookCover
                className="book--sm"
                genre="Fiction"
                title="Fiction"
                author=""
                gradient="linear-gradient(155deg,#5a2a2a,#280f0f)"
              />
              <BookCover
                className="book--sm"
                genre="Business"
                title="Business"
                author=""
                gradient="linear-gradient(155deg,#4a3a1d,#241c0d)"
              />
              <BookCover
                className="book--sm"
                genre="Children's"
                title="Children's"
                author=""
                gradient="linear-gradient(155deg,#5a2a45,#280f1e)"
              />
            </div>
          </div>
          <div className="form-card reveal">
            <ContactForm
              heading={"Tell Us About Your Book & Launch"}
              blurb={
                "Share your book details and release timeline, and a marketing strategist will reach out within one business day."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
