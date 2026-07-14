import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "The Last Lighthouse", author: "R. Calder", genre: "Fiction", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "Beneath Quiet Waters", author: "N. Voss", genre: "Thriller", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "The Boardroom Code", author: "D. Osei", genre: "Business", gradient: "linear-gradient(155deg,#3a2c20,#1d140d)" },
  { title: "Wildfire Hearts", author: "L. Marquez", genre: "Romance", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "Shadows Over Hollow Creek", author: "T. Whitfield", genre: "Mystery", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "Rise & Rebuild", author: "K. Janssen", genre: "Memoir", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "Letters to My Younger Self", author: "S. Okafor", genre: "Memoir", gradient: "linear-gradient(155deg,#3a2c20,#1d140d)" },
  { title: "The Edge of Everything", author: "P. Andersen", genre: "Fiction", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
];
const REVIEWS = [
  { stars: 5, quote: "I had the story in my head for years but never the time to write it. My writer captured my voice so well that readers couldn't tell someone else helped.", initials: "KR", name: "Karen R.", tag: "First-Time Author" },
  { stars: 5, quote: "Communication was the best part. I always knew exactly what stage my manuscript was in and never felt left in the dark.", initials: "JT", name: "James T.", tag: "Business Memoir Author" },
  { stars: 5, quote: "The editing process turned a messy first draft into something I was genuinely proud to publish.", initials: "AM", name: "Aisha M.", tag: "Self-Published Novelist" },
  { stars: 5, quote: "From outline to final formatting, the whole team made publishing my first book feel achievable instead of overwhelming.", initials: "DK", name: "Daniel K.", tag: "Nonfiction Author" },
];
const FAQS = [
  { q: "What does a book writing service include?", a: "A full book writing service typically includes a discovery consultation, ghostwriting or co-writing of the full manuscript, professional editing and proofreading, cover design and interior formatting, and guidance through self-publishing or traditional submission. At Book Writing, every package includes unlimited revisions and direct access to your writer throughout the process." },
  { q: "How much does it cost to hire a ghostwriter?", a: "Ghostwriting costs vary based on book length, research depth, and genre, typically ranging from a few thousand dollars for a short nonfiction book to tens of thousands for a fully researched memoir or novel. We provide a custom quote after a free consultation." },
  { q: "How long does it take to write a book?", a: "Most full-length books take three to six months to write from outline to final draft, depending on length, genre, and how much research is required." },
  { q: "Who owns the rights to my book once it's written?", a: "You retain 100% ownership of your manuscript, copyright, and royalties once it's written. Our writers work under a confidentiality and ownership-transfer agreement." },
  { q: "What's the difference between ghostwriting and collaborative writing?", a: "Ghostwriting means a professional writer drafts the entire manuscript with your name as sole author. Collaborative writing involves more back-and-forth drafting with you." },
  { q: "Do you help with publishing and marketing after the book is written?", a: "Yes. Once your manuscript is finished and edited, we help with cover design, interior formatting, and a launch plan to help your book reach readers." },
  { q: "Is my information and manuscript kept confidential?", a: "Yes. Every project starts with a confidentiality agreement, and our writers and editors are bound by strict non-disclosure terms." },
  { q: "What genres or types of books do you write?", a: "We write across both fiction and nonfiction, including memoirs, self-help, business, health and wellness, thrillers, mystery, and romance." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Professional Book Writing & Ghostwriting Services</p>
      <h1>Professional Book Writing Services That Turn Your Ideas Into Published Books</h1>
      <p className="lede">From first outline to final proofread, our professional ghostwriters and editors craft fiction, memoirs, and nonfiction books that sound exactly like you — while you keep 100% of the rights, royalties, and credit.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Consultation <svg><use href="#i-arrow-right"></use></svg></a>
        <a href="#portfolio" className="btn btn--ghost-dark">See Our Work</a>
      </div>
      <div className="hero-trust">
        <div className="avatar-stack" aria-hidden="true">
          <span style={{background: "var(--orange)"}}>JM</span>
          <span style={{background: "var(--ink)"}}>AK</span>
          <span style={{background: "var(--orange-deep)"}}>RT</span>
          <span style={{background: "var(--orange-dark)"}}>+250</span>
        </div>
        <p className="hero-trust-text">
          <span className="stars" aria-hidden="true"><svg><use href="#i-star"></use></svg><svg><use href="#i-star"></use></svg><svg><use href="#i-star"></use></svg><svg><use href="#i-star"></use></svg><svg><use href="#i-star"></use></svg></span>
          <strong>4.9 / 5 average rating</strong>from 250+ authors we&apos;ve worked with
        </p>
      </div>
    </div>

    <div className="hero-visual">
      <div className="hero-art">
        <div className="hero-art__blob" aria-hidden="true"></div>
        <div className="hero-art__book" aria-hidden="true">
          <svg><use href="#i-book-open" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-book-open"></use></svg><span>250+<small>Books Completed</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Ownership Retained</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Book Writing By The Numbers</p>
    <div className="press__row">
      <span>250+ Books Written</span>
      <span>30+ Genres Covered</span>
      <span>4.9/5 Average Rating</span>
      <span>100% Author Ownership</span>
      <span>15+ Yrs Combined Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#3a2c20,#1d140d)"}}>
        <div className="book__cover">
          <span className="book__genre">Memoir</span>
          <span className="book__title">The Quiet Years</span>
          <span className="book__author">A. Marsh</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Hire A Writer</p>
      <h2>Hire Professional Book Writers Who Bring Your Vision to Life</h2>
      <div className="body-copy"><p>Every project is matched with a writer who actually knows your genre — not a generalist juggling five other projects. They interview you, research the subject, and draft every chapter so it reads like you wrote it yourself.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Genre-matched writers with real publishing experience</li>
        <li><svg><use href="#i-check-circle"></use></svg>Unlimited revisions until the manuscript is exactly right</li>
        <li><svg><use href="#i-check-circle"></use></svg>Transparent, milestone-based progress updates</li>
        <li><svg><use href="#i-check-circle"></use></svg>100% manuscript ownership & confidentiality</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Your Book <svg><use href="#i-arrow-right"></use></svg></a>
        <a href="#contact" className="btn btn--ghost-dark">Get a Custom Quote</a>
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
        <h2>Full-Service Book Writing, Cover to Cover</h2>
      </div>
      <p className="lede">Whether you&apos;re starting from a single idea or a half-finished draft, our team handles every stage of the process — writing, editing, design, and getting your book in front of readers.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-pen"></use></svg></div>
        <h3>Ghostwriting & Book Writing</h3>
        <p>A dedicated writer interviews you, researches the subject, and drafts every chapter in your voice from outline to final manuscript.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-edit"></use></svg></div>
        <h3>Editing & Proofreading</h3>
        <p>Professional editors refine structure, pacing, and grammar so your manuscript reads cleanly and professionally, ready for agents or readers.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Book Cover & Formatting</h3>
        <p>Custom cover design and interior formatting for print, eBook, and audiobook — built to publishing-house specifications.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-megaphone"></use></svg></div>
        <h3>Publishing & Marketing</h3>
        <p>Guidance on self-publishing or traditional submission, plus launch marketing to help your book find its audience.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 250+ Authors Who&apos;ve Already Started Their Book</h2>
        <p>Book a free, no-pressure call with our team to talk through your idea, your timeline, and what working together actually looks like.</p>
        <a href="#contact" className="btn btn--primary">Book Your Free Call <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Book Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-book-open"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Discovery Call</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Outline Approved</div>
          <div className="progress-step current"><span className="dot"></span> First Draft In Progress</div>
          <div className="progress-step "><span className="dot"></span> Final Manuscript</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>Genres We Write</p>
      <h2>We Write the Books Everyone Wants to Read</h2>
      <p className="lede" style={{marginInline: "auto"}}>From page-turning thrillers to deeply personal memoirs, our writers have the range to match your story to the right voice.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Self-Help & Personal Development</h3>
        <p>Turn your expertise or personal transformation into a book that genuinely helps readers change their habits, mindset, or life direction.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Business & Finance</h3>
        <p>Establish authority in your industry with a well-researched business book that shares your strategy, story, or framework with the right audience.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Health & Wellness</h3>
        <p>Share medical expertise, recovery stories, or wellness practices in a book readers trust enough to actually follow.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Memoirs & Biographies</h3>
        <p>Your life story deserves more than scattered notes and old photographs — we shape it into a narrative worth reading.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Thrillers & Mystery Novels</h3>
        <p>Plot twists, pacing, and tension that keep readers turning pages — crafted by writers who understand genre structure.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Romance & Contemporary Fiction</h3>
        <p>Compelling characters and emotional stakes, written in a voice that fits exactly what your readers are looking for.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Our Portfolio" title={"Great Books Are Just Another Day's Work for Us"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-bulb"></use></svg>Writer&apos;s Block? No Problem.</span>
    <h2>We&apos;re the Book Writing Company That Works When You&apos;re Stuck</h2>
    <p className="lede">Most people don&apos;t stall on having a story — they stall on getting it onto the page in a way that actually sounds right. That&apos;s the exact problem our writers are built to solve.</p>
    <em className="accent-italic">Every great book starts with someone willing to help you finish it.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Professional Writers</h4><p>Matched to your genre, not assigned at random.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Transparent Communication</h4><p>You always know exactly what stage your book is at.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Thorough Research</h4><p>Every fact, quote, and detail checked before it&apos;s drafted.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#3a2c20,#1d140d)"}}><div className="book__cover"><span className="book__genre">Nonfiction</span><span className="book__title">Your Book Here</span><span className="book__author">Book Writing</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__genre">Fiction</span><span className="book__title">Your Story, Told Well</span><span className="book__author">Book Writing</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Timely Delivery</h4><p>Chapters delivered on a schedule you agree to up front.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Confidentiality Guaranteed</h4><p>Your idea and manuscript stay strictly between us.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Talk to a Writer Today <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Process, From Idea to Finished Book</h2>
      <p className="lede">No mystery, no vague timelines — just a clear path from your first conversation with us to a book you&apos;re proud to put your name on.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Discovery & Concept</h3><p>We start with a deep-dive conversation about your idea, audience, and goals, then map out a chapter-by-chapter concept before a single word is drafted.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Outline & Drafting</h3><p>Your writer drafts chapters on a regular schedule, researching as needed and checking in with you at every milestone.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Editing & Revisions</h3><p>A professional editor passes over the manuscript for structure, clarity, and voice — and you get unlimited rounds of revisions.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Publishing & Beyond</h3><p>We help you format, design, and publish your finished book, plus plan a launch that gets it in front of real readers.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-book-open"></use></svg><strong>250+</strong><span>Books Completed</span></div>
      <div className="collage-card"><svg><use href="#i-star"></use></svg><strong>4.9/5</strong><span>Average Client Rating</span></div>
      <div className="collage-card play"><span className="play-btn"><svg><use href="#i-play"></use></svg></span><span>See how it works</span></div>
      <div className="collage-card"><svg><use href="#i-clock"></use></svg><strong>100%</strong><span>On-Time Delivery</span></div>
    </div>
  </div>
</section>

{/*============================ FOLD 8 — CTA 2 ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta2 reveal">
      <div className="cta2-copy">
        <span className="cta2__tag">Start Your Book Today</span>
        <h2>Your Book Is Closer Than You Think</h2>
        <h3>Let&apos;s make it real.</h3>
        <p>Tell us about your idea today and we&apos;ll match you with a writer, map a realistic timeline, and start turning pages into chapters — without you staring at a blank page.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Consultation <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#3a2c20,#1d140d)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Mystery</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Working With Us"} items={REVIEWS} />
</section>

<section className="section section--cream" id="faq">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>FAQs</p>
      <h2>Frequently Asked Questions</h2>
    </div>
      <FaqAccordion items={FAQS} />
    </div>
</section>

<section className="section" id="blog">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>From The Blog</p>
      <h2>Resources for Authors &amp; First-Time Writers</h2>
    </div>
    <div className="blog-grid">
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-pen"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Ghostwriting</span>
          <h3><a href="#blog">How to Choose the Right Ghostwriter for Your Book</a></h3>
          <p>Not every writer is the right fit for every project. Here&apos;s what to actually look for before you hire someone to write your book.</p>
          <div className="blog-meta"><span>June 2, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-rocket"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Publishing</span>
          <h3><a href="#blog">Self-Publishing vs. Traditional Publishing: Which Path Is Right for You?</a></h3>
          <p>Both paths can lead to a successful book, but they ask very different things of you as an author.</p>
          <div className="blog-meta"><span>May 18, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-list"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Writing Tips</span>
          <h3><a href="#blog">7 Mistakes First-Time Authors Make (And How to Avoid Them)</a></h3>
          <p>From skipping the outline to ignoring professional editing — simple ways to avoid every one of them.</p>
          <div className="blog-meta"><span>May 4, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Start Writing</p>
      <h2>Stop Staring At That Blank Page.</h2>
      <p className="lede">You don&apos;t need to be a professional writer to publish a professional book. Tell us your idea, and we&apos;ll show you exactly how the process works.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#3a2c20,#1d140d)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Book"} blurb={"Share a few details and a member of our team will reach out within one business day."} />
    </div>
  </div>
</section>
    </>
  );
}
