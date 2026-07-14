import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "Final Pass", author: "H. Delgado", genre: "Nonfiction", gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)" },
  { title: "Salt & Static", author: "G. Ferris", genre: "Fiction", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "The Margin Method", author: "T. Achebe", genre: "Business", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "Pip's Big Day", author: "L. Sorensen", genre: "Children's", gradient: "linear-gradient(155deg,#5a2a45,#280f1e)" },
  { title: "Ordinary Weather", author: "B. Tanaka", genre: "Memoir", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
  { title: "Small Rooms", author: "Q. Reyes", genre: "Poetry", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "The Quiet Ledger", author: "D. Novak", genre: "Fiction", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "Fieldwork Notes", author: "Dr. P. Aminu", genre: "Academic", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
];
const REVIEWS = [
  { stars: 5, quote: "I'd read my manuscript ten times and still missed things they caught in the first pass. Genuinely impressive attention to detail.", initials: "HD", name: "Hannah D.", tag: "Nonfiction Author" },
  { stars: 5, quote: "The style sheet alone saved me from three different spellings of my main character's hometown.", initials: "GF", name: "Gabriel F.", tag: "Novelist" },
  { stars: 5, quote: "Fast, thorough, and they clearly understood the difference between proofreading and rewriting my book.", initials: "TA", name: "Tomiwa A.", tag: "Business Author" },
  { stars: 5, quote: "The rush option saved my launch date. Full proofread back in 48 hours, and it was flawless.", initials: "BT", name: "Bea T.", tag: "Memoir Author" },
];
const FAQS = [
  { q: "What's the difference between proofreading and editing?", a: "Editing addresses structure, pacing, clarity, and voice — it can involve significant rewriting. Proofreading is the final quality check for spelling, grammar, punctuation, and formatting after all editing is complete, with no rewriting involved." },
  { q: "When should I get my manuscript proofread?", a: "Proofreading should always be the last step, after developmental editing, line editing, and any major revisions are finished, and right before your final file is prepared for print or upload." },
  { q: "How long does proofreading take?", a: "A standard proofread typically takes one to two weeks depending on manuscript length. We also offer a 48-hour rush option for time-sensitive launches." },
  { q: "Do you proofread eBooks and print books differently?", a: "Yes. Print proofreading includes checks for page breaks, headers, and layout specific to the print format, while eBook proofreading checks formatting across different screen sizes and reading apps." },
  { q: "Will proofreading catch plot holes or factual errors?", a: "Our proofreaders will flag anything that looks like an inconsistency or clear factual error, but proofreading is not a substitute for developmental editing or fact-checking, which happen earlier in the process." },
  { q: "Do two people really review my manuscript?", a: "Yes. Every manuscript gets a first full pass and a second, independent pass from a different proofreader, which is how we catch what a single read can miss." },
  { q: "How much does professional proofreading cost?", a: "Pricing depends on manuscript length and turnaround time. We provide a custom quote and a free sample proofread so you can see our process before committing." },
  { q: "Can I request specific style guide rules (e.g., Chicago, AP)?", a: "Absolutely. We build a style sheet at the start of every project based on your preferred style guide or specific formatting requests." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Professional Proofreading Services</p>
      <h1>Meticulous Proofreading That Catches What Everyone Else Misses</h1>
      <p className="lede">After the editing is done, our proofreaders comb every page for typos, grammar slips, punctuation errors, and formatting inconsistencies — the final quality check before your book goes to print or upload.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Sample Proofread <svg><use href="#i-arrow-right"></use></svg></a>
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
          <svg><use href="#i-search" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-check-circle"></use></svg><span>600+<small>Books Proofread</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>99.9%<small>Error Catch Rate</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Proofreading By The Numbers</p>
    <div className="press__row">
      <span>600+ Books Proofread</span>
      <span>99.9% Error Catch Rate</span>
      <span>4.9/5 Average Rating</span>
      <span>48-Hr Rush Option Available</span>
      <span>10+ Yrs Combined Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}>
        <div className="book__cover">
          <span className="book__genre">Nonfiction</span>
          <span className="book__title">Final Pass</span>
          <span className="book__author">H. Delgado</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Hire A Proofreader</p>
      <h2>Hire Professional Proofreaders for the Final, Meticulous Pass</h2>
      <div className="body-copy"><p>Proofreading is the last line of defense before your book reaches readers. Our proofreaders read every page in isolation — checking spelling, grammar, punctuation, spacing, and formatting consistency — without touching your voice or your structure.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Two proofreaders review every manuscript</li>
        <li><svg><use href="#i-check-circle"></use></svg>Print and eBook formatting checks included</li>
        <li><svg><use href="#i-check-circle"></use></svg>Consistency checks for names, timelines & style</li>
        <li><svg><use href="#i-check-circle"></use></svg>Clean, print-ready file delivered on schedule</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Your Proofread <svg><use href="#i-arrow-right"></use></svg></a>
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
        <h2>A Complete Final-Pass Quality Check</h2>
      </div>
      <p className="lede">Proofreading catches the small things that undermine a reader&apos;s trust — the goal is a manuscript with zero visible errors.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-search"></use></svg></div>
        <h3>Grammar & Spelling Review</h3>
        <p>Every sentence checked for grammar, spelling, and punctuation accuracy against your preferred style guide.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-refresh"></use></svg></div>
        <h3>Consistency Checks</h3>
        <p>Character names, timelines, spellings, and formatting checked for consistency across the entire manuscript.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Print & eBook Formatting</h3>
        <p>Layout, spacing, headers, and page-break checks specific to your print or digital publishing format.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-clock"></use></svg></div>
        <h3>Rush Proofreading</h3>
        <p>Need it fast? Our rush option delivers a full proofread within 48 hours for time-sensitive launches.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 600+ Authors Who Published Error-Free</h2>
        <p>Send us a sample chapter and we&apos;ll proofread it free, so you can see exactly the level of detail we bring to every page.</p>
        <a href="#contact" className="btn btn--primary">Get My Free Sample <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Proofread Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-search"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Manuscript Received</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> First Pass Complete</div>
          <div className="progress-step current"><span className="dot"></span> Second Pass In Progress</div>
          <div className="progress-step "><span className="dot"></span> Final Clean Copy</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>What We Proofread</p>
      <h2>A Final Check for Every Kind of Manuscript</h2>
      <p className="lede" style={{marginInline: "auto"}}>Whatever you&apos;re publishing, our proofreaders bring the same meticulous, page-by-page attention.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Novels & Short Story Collections</h3>
        <p>A final pass that protects immersive fiction from typos and continuity slips that pull readers out of the story.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Memoirs & Nonfiction</h3>
        <p>Careful fact-format checks for names, dates, and citations alongside standard grammar and spelling review.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Children&apos;s & Picture Books</h3>
        <p>Line-by-line accuracy for short, high-visibility text where a single typo stands out immediately.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Business & Self-Help Books</h3>
        <p>Clean, professional proofreading that protects your credibility as an expert in your field.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Academic & Technical Manuscripts</h3>
        <p>Precise attention to terminology, citations, and formatting conventions specific to your field.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Poetry & Literary Collections</h3>
        <p>Careful, form-aware proofreading that respects intentional stylistic choices while catching genuine errors.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recent Proofreads" title={"Manuscripts We've Given the Final Polish"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-check-circle"></use></svg>One Typo Can Cost You a Reader.</span>
    <h2>We&apos;re the Proofreading Team That Catches the Details You&apos;ve Stopped Seeing</h2>
    <p className="lede">After reading your own manuscript dozens of times, your brain starts autocorrecting mistakes without telling you. That&apos;s exactly the blind spot our proofreaders are trained to close.</p>
    <em className="accent-italic">Great writing deserves a final page with nothing standing in its way.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Two-Proofreader System</h4><p>A second, independent read catches what a single pass can miss.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Style Sheet Included</h4><p>A running record of names, terms, and formatting choices for consistency.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Fresh Eyes, Every Time</h4><p>Proofreaders who haven&apos;t read prior drafts, so nothing is skimmed from familiarity.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__genre">Fiction</span><span className="book__title">Zero Errors Found</span><span className="book__author">Book Writing</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__genre">Nonfiction</span><span className="book__title">Print Ready</span><span className="book__author">Book Writing</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Print-Ready Delivery</h4><p>Files formatted and checked for your specific publishing platform.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Rush Turnaround Available</h4><p>48-hour options for launches and tight deadlines.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Get My Free Sample Proofread <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Proofreading Process, Draft to Print-Ready</h2>
      <p className="lede">A meticulous, repeatable process designed to leave nothing to chance on your final pages.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Style Sheet Setup</h3><p>We build a style sheet from your manuscript covering names, terms, and formatting preferences before proofreading begins.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>First Full Pass</h3><p>A proofreader reads the entire manuscript line by line, flagging every spelling, grammar, and punctuation issue.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Second Independent Pass</h3><p>A second proofreader reviews the manuscript fresh, catching anything the first pass may have missed.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Final Formatting Check</h3><p>A last review of layout, spacing, and page breaks for your specific print or eBook format.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-check-circle"></use></svg><strong>600+</strong><span>Books Proofread</span></div>
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
        <span className="cta2__tag">Publish With Confidence</span>
        <h2>Your Book Deserves an Error-Free Final Page</h2>
        <h3>Let&apos;s make sure it gets one.</h3>
        <p>Send us a sample today and see the level of detail we bring before your book ever reaches a reader.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Sample <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Nonfiction</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Children&apos;s</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Poetry</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Our Proofreading"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-search"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Proofreading</span>
          <h3><a href="#blog">Why Proofreading Should Always Be the Last Step Before Publishing</a></h3>
          <p>Skipping the order of operations is one of the most common — and costly — mistakes self-published authors make.</p>
          <div className="blog-meta"><span>June 15, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-check-circle"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Self-Publishing</span>
          <h3><a href="#blog">The 10 Most Common Typos That Slip Past Self-Editing</a></h3>
          <p>A look at the small errors that show up again and again, and why your own eyes tend to miss them.</p>
          <div className="blog-meta"><span>May 30, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-layout"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Formatting</span>
          <h3><a href="#blog">Print vs. eBook Proofreading: What&apos;s Actually Different</a></h3>
          <p>The formatting checks that matter for a physical book don&apos;t always apply to a digital one — here&apos;s the breakdown.</p>
          <div className="blog-meta"><span>May 14, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Give It a Final Read</p>
      <h2>Don&apos;t Let a Typo Undercut a Great Book.</h2>
      <p className="lede">Send us a sample chapter and see exactly the kind of detail we bring to every single page, before you commit to anything.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Nonfiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Children&apos;s</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Manuscript"} blurb={"Share a few details and we'll get back to you within one business day with a free sample proofread."} />
    </div>
  </div>
</section>
    </>
  );
}
