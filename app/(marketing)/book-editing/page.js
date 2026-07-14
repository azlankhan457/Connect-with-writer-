import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "Second Draft", author: "M. Reyes", genre: "Fiction", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
  { title: "Between the Lines", author: "C. Hooper", genre: "Memoir", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "The Clarity Principle", author: "F. Nwosu", genre: "Business", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "Static & Stars", author: "J. Ibarra", genre: "YA Fiction", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "No Clean Exit", author: "R. Doyle", genre: "Thriller", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "The Long Table", author: "V. Aldana", genre: "Nonfiction", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "Held Water", author: "S. Kaur", genre: "Memoir", gradient: "linear-gradient(155deg,#3a2c20,#1d140d)" },
  { title: "Low Tide Notice", author: "E. Marsh", genre: "Fiction", gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)" },
];
const REVIEWS = [
  { stars: 5, quote: "My editor caught pacing problems I couldn't see after reading my own book fifty times. The editorial letter alone was worth it.", initials: "MR", name: "Marcus R.", tag: "Debut Novelist" },
  { stars: 5, quote: "I was nervous about losing my voice, but the line edits actually sounded more like me than my first draft did.", initials: "CH", name: "Clara H.", tag: "Memoir Author" },
  { stars: 5, quote: "The debrief call made all the difference — I finally understood why certain scenes weren't landing.", initials: "JI", name: "Jorge I.", tag: "YA Author" },
  { stars: 5, quote: "Thorough, specific, and genuinely kind feedback. Exactly what a first-time author needs.", initials: "VA", name: "Vera A.", tag: "Nonfiction Author" },
];
const FAQS = [
  { q: "What's the difference between developmental editing, line editing, and copyediting?", a: "Developmental editing addresses big-picture issues like structure, pacing, and character arcs. Line editing works at the sentence level for flow and voice. Copyediting focuses on grammar, consistency, and style-guide accuracy. Many manuscripts benefit from all three, in that order." },
  { q: "How long does book editing take?", a: "A developmental edit typically takes three to five weeks depending on manuscript length, with line editing and copyediting adding two to four more weeks each." },
  { q: "Will editing change my writing voice?", a: "No. Our editors are trained to strengthen your voice, not replace it. Every suggested change is meant to make your writing sound more like the best version of you, not like someone else." },
  { q: "Do I get to see exactly what was changed?", a: "Yes. All edits are delivered using track changes, so you can review, accept, or reject every suggestion, plus a summary editorial letter explaining the reasoning behind major notes." },
  { q: "How much does professional book editing cost?", a: "Pricing depends on manuscript length, genre, and which editing stages you need. We provide a custom quote after reviewing a sample of your manuscript, free of charge." },
  { q: "Do you edit self-published and traditionally published books?", a: "Yes. We work with self-publishing authors preparing a final manuscript and with authors polishing a draft before submitting to agents or publishers." },
  { q: "What if I disagree with an editorial suggestion?", a: "Every suggestion is exactly that — a suggestion. You have final say over every change, and your editor is available to discuss any note you're unsure about." },
  { q: "Can you edit a partial manuscript or just a few chapters?", a: "Yes. We offer sample edits and partial-manuscript packages for authors who want feedback before committing to a full edit." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Professional Book Editing Services</p>
      <h1>Professional Book Editing That Turns a Rough Draft Into a Publish-Ready Manuscript</h1>
      <p className="lede">Our developmental editors and line editors sharpen structure, pacing, characters, and prose — so your manuscript is ready for agents, readers, or publication, without losing your voice.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Manuscript Assessment <svg><use href="#i-arrow-right"></use></svg></a>
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
          <svg><use href="#i-edit" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-book-open"></use></svg><span>400+<small>Manuscripts Edited</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Voice Preserved</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Book Editing By The Numbers</p>
    <div className="press__row">
      <span>400+ Manuscripts Edited</span>
      <span>20+ Genres Covered</span>
      <span>4.9/5 Average Rating</span>
      <span>2 Rounds Included Standard</span>
      <span>12+ Yrs Editorial Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}>
        <div className="book__cover">
          <span className="book__genre">Fiction</span>
          <span className="book__title">Second Draft</span>
          <span className="book__author">M. Reyes</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Hire An Editor</p>
      <h2>Hire Professional Book Editors Who Respect Your Voice</h2>
      <div className="body-copy"><p>Every manuscript is matched with an editor who specializes in your genre — not a one-size-fits-all proofreader. They read the whole book first, then work chapter by chapter to strengthen structure, pacing, and clarity while keeping the story unmistakably yours.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Genre-matched developmental & line editors</li>
        <li><svg><use href="#i-check-circle"></use></svg>Detailed editorial letter with every project</li>
        <li><svg><use href="#i-check-circle"></use></svg>Track-changes edits plus a debrief call</li>
        <li><svg><use href="#i-check-circle"></use></svg>Unlimited follow-up questions during revisions</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Your Edit <svg><use href="#i-arrow-right"></use></svg></a>
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
        <h2>Full-Spectrum Editing, From Structure to Sentence</h2>
      </div>
      <p className="lede">Whether your manuscript needs a structural overhaul or a final polish, our editors meet you exactly where your draft is.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Developmental Editing</h3>
        <p>Big-picture feedback on plot, pacing, structure, and character arcs, with a detailed editorial letter and revision roadmap.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-edit"></use></svg></div>
        <h3>Line Editing</h3>
        <p>Sentence-level work on flow, voice, and clarity so every paragraph reads as smoothly as it should.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-search"></use></svg></div>
        <h3>Copyediting</h3>
        <p>Grammar, consistency, and style-guide accuracy checked line by line before your manuscript moves to proofreading.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-message"></use></svg></div>
        <h3>Editorial Coaching Calls</h3>
        <p>A live debrief with your editor to walk through the feedback and plan your revision approach together.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 400+ Authors Who&apos;ve Sharpened Their Manuscript With Us</h2>
        <p>Book a free manuscript assessment and we&apos;ll tell you honestly what level of editing your draft actually needs.</p>
        <a href="#contact" className="btn btn--primary">Book Your Free Assessment <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Edit Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-edit"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Manuscript Submitted</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Editorial Letter Delivered</div>
          <div className="progress-step current"><span className="dot"></span> Line Edit In Progress</div>
          <div className="progress-step "><span className="dot"></span> Final Polished Draft</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>What We Edit</p>
      <h2>We Edit the Books Readers Can&apos;t Put Down</h2>
      <p className="lede" style={{marginInline: "auto"}}>From debut novels to seasoned nonfiction, our editors bring the genre expertise your manuscript needs.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Fiction & Literary Novels</h3>
        <p>Structural notes on plot, pacing, and character arcs from editors who read and edit fiction for a living.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Memoir & Narrative Nonfiction</h3>
        <p>Help shaping real events into a compelling narrative arc without losing the truth of your story.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Business & Self-Help</h3>
        <p>Editors who tighten arguments, examples, and structure so your expertise reads clearly and persuasively.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Young Adult & Middle Grade</h3>
        <p>Age-appropriate pacing, voice, and structural notes from editors who specialize in younger readers.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Thriller, Mystery & Suspense</h3>
        <p>Pacing and plot-hole review from editors who understand exactly how tension is built and sustained.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Academic & Technical Manuscripts</h3>
        <p>Clarity-focused editing for dense or technical material, without stripping out necessary nuance.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recent Edits" title={"Manuscripts We've Helped Sharpen"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-search"></use></svg>Stuck on Revisions? We Can Help.</span>
    <h2>We&apos;re the Editing Team That Tells You What&apos;s Actually Wrong</h2>
    <p className="lede">A vague &apos;this needs work&apos; doesn&apos;t help anyone revise. Our editors give specific, actionable notes tied directly to the page — so you know exactly what to fix and why.</p>
    <em className="accent-italic">Good editing doesn&apos;t rewrite your book — it reveals the book you were already writing.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Specific, Actionable Notes</h4><p>Every note is tied to a page, a line, or a scene — never vague.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Genre-Matched Editors</h4><p>Your editor actually reads and edits within your genre.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Editorial Letter Included</h4><p>A full-manuscript summary before any line-level work begins.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}><div className="book__cover"><span className="book__genre">Fiction</span><span className="book__title">Before & After</span><span className="book__author">Book Writing</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__genre">Nonfiction</span><span className="book__title">Clarity, Delivered</span><span className="book__author">Book Writing</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Track-Changes Delivery</h4><p>See exactly what changed and why, line by line.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Debrief Call Included</h4><p>Talk through the feedback live before you start revising.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Get My Manuscript Assessed <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Editing Process, Draft to Polished Manuscript</h2>
      <p className="lede">A clear, honest path from a rough draft to a manuscript you&apos;re proud to send out — with no guesswork in between.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Manuscript Assessment</h3><p>We read a sample (or the full draft) and tell you honestly whether you need developmental, line, or copy editing.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Developmental Pass</h3><p>Your editor reviews the full manuscript for structure and pacing, then delivers a detailed editorial letter.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Line Edit & Copyedit</h3><p>Sentence-level work on voice and clarity, followed by a grammar and consistency pass.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Debrief & Final Polish</h3><p>A live call to walk through the changes, plus one round of follow-up revisions included.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-book-open"></use></svg><strong>400+</strong><span>Manuscripts Edited</span></div>
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
        <span className="cta2__tag">Sharpen Your Manuscript</span>
        <h2>Your Manuscript Is Closer to Ready Than You Think</h2>
        <h3>Let&apos;s find out what it needs.</h3>
        <p>Send us a sample chapter today and we&apos;ll tell you honestly what level of editing will get your book where it needs to be.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Assessment <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">YA</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Our Editing"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-edit"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Editing</span>
          <h3><a href="#blog">Developmental Edit vs. Line Edit: Which Does Your Manuscript Need?</a></h3>
          <p>Understanding the difference can save you months of revising the wrong thing first.</p>
          <div className="blog-meta"><span>June 9, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-search"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Writing Tips</span>
          <h3><a href="#blog">5 Signs Your Manuscript Is Ready for a Professional Editor</a></h3>
          <p>How to tell when self-editing has hit its ceiling and it&apos;s time to bring in a second set of eyes.</p>
          <div className="blog-meta"><span>May 26, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-refresh"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Revisions</span>
          <h3><a href="#blog">How to Take Editorial Feedback Without Losing Momentum</a></h3>
          <p>A practical approach to reading tough notes and turning them into your next, stronger draft.</p>
          <div className="blog-meta"><span>May 11, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Sharpen Your Draft</p>
      <h2>Your Manuscript Deserves a Second Set of Eyes.</h2>
      <p className="lede">You&apos;ve done the hardest part already — you finished a draft. Let&apos;s talk about what it needs to become the book you set out to write.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Nonfiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Manuscript"} blurb={"Share a few details and an editor will reach out within one business day with next steps."} />
    </div>
  </div>
</section>
    </>
  );
}
