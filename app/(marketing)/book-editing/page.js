import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import BookCover from "@/components/BookCover";
import SampleEdit from "@/components/services/SampleEdit";
import Link from "next/link";
import { getBlogPostBySlug } from "@/lib/blog/posts";

const BLOG_SLUGS = ["how-to-revise-a-manuscript", "how-to-choose-a-ghostwriter", "book-outline-template"];
const BLOG_ICONS = ["i-edit", "i-search", "i-refresh"];

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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

const EDIT_LEVELS = [
  {
    id: "developmental",
    label: "Developmental",
    summary: "The big picture: structure, pacing, characters and argument.",
    before:
      "Maya reached the station and stood on the platform. She was sad because her father had left when she was nine, and she remembered the summer he taught her to fish. The train was late. She waited.",
    after: [
      { t: "Maya reached the station and stood on the platform. The train was late. " },
      {
        t: "She waited, and the waiting pulled her back to the summer her father taught her to fish, the year before he left.",
        changed: true,
      },
    ],
    notes: [
      "Reshapes structure, pacing and character arcs",
      "Places backstory where it lands hardest",
      "Delivered as an editorial letter with chapter notes",
    ],
  },
  {
    id: "line",
    label: "Line editing",
    summary: "The sentence level: rhythm, clarity, tone and word choice.",
    before:
      "The room was very dark and the very old clock was ticking loudly, which made her feel nervous and a bit afraid.",
    after: [
      { t: "The room was dark. " },
      { t: "An old clock ticked, each beat louder than the last", changed: true },
      { t: ", and her nerves tightened with every one." },
    ],
    notes: [
      "Tightens wordy or repetitive sentences",
      "Shows feeling through detail instead of labels",
      "Keeps your voice, only sharper",
    ],
  },
  {
    id: "copy",
    label: "Copyediting",
    summary: "Grammar, usage, consistency and style rules, applied throughout.",
    before:
      "In 1998 the Company opened it's first office on fifth street, and by Nineteen ninety nine they had twelve employee's.",
    after: [
      { t: "In 1998" },
      { t: ",", changed: true },
      { t: " the " },
      { t: "company", changed: true },
      { t: " opened " },
      { t: "its", changed: true },
      { t: " first office on " },
      { t: "Fifth Street", changed: true },
      { t: ", and by " },
      { t: "1999", changed: true },
      { t: " " },
      { t: "it had", changed: true },
      { t: " " },
      { t: "twelve employees", changed: true },
      { t: "." },
    ],
    notes: [
      "Fixes grammar, usage and punctuation",
      "Keeps names, numbers and spellings consistent",
      "Builds a style sheet as it goes",
    ],
  },
  {
    id: "proof",
    label: "Final polish",
    summary: "The last pass for typos and slips before the book goes out.",
    before:
      "She said goodbye, and walked out the door. The suitcase was heavy,she didnt look back.",
    after: [
      { t: "She said goodbye" },
      { t: " and", changed: true },
      { t: " walked out the door. The suitcase was heavy" },
      { t: "; ", changed: true },
      { t: "she " },
      { t: "didn't", changed: true },
      { t: " look back." },
    ],
    notes: [
      "Catches typos, spacing and stray punctuation",
      "Done after the text is locked",
      "See our proofreading service for a full two-pass check",
    ],
  },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="svc-hero">
  <div className="container svc-hero__grid">
    <div className="svc-hero__copy">
      <p className="eyebrow">Professional Book Editing Services</p>
      <h1>Professional Book Editing That Turns a Rough Draft Into a Publish-Ready Manuscript</h1>
      <p className="lede">Our developmental editors and line editors sharpen structure, pacing, characters, and prose — so your manuscript is ready for agents, readers, or publication, without losing your voice.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Manuscript Assessment <svg><use href="#i-arrow-right"></use></svg></a>
        <a href="#portfolio" className="btn btn--ghost-dark">See Our Work</a>
      </div>
      <p className="svc-hero__note"><strong>Developmental, line &amp; copy editing</strong>Genre-matched editors for fiction and nonfiction</p>
    </div>
    <div className="svc-hero__visual">
      <figure className="desk">
        <div className="desk__sheet">
          <p className="desk__line">
            Maya <del>was very sad when she</del>
            <ins>stood on the platform as she</ins> watched the train{" "}
            <del>come in late</del>
            <ins>slide in, ten minutes late</ins>.
          </p>
          <span className="desk__note">
            <svg aria-hidden="true">
              <use href="#i-edit"></use>
            </svg>
            Move her father&apos;s backstory to chapter two?
          </span>
        </div>
        <span aria-hidden="true" className="desk__pencil"></span>
        <figcaption>Illustrative sample edit</figcaption>
      </figure>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Trust strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Why Authors Edit With Us</p>
    <div className="press__row">
      <span>Genre-Matched Editors</span>
      <span>Developmental to Copyediting</span>
      <span>Editorial Letter Included</span>
      <span>Track-Changes Delivery</span>
      <span>Debrief Call Before Revisions</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <BookCover
        className="book--lg"
        genre="Fiction"
        title="Second Draft"
        author="M. Reyes"
        gradient="linear-gradient(155deg,#202c3a,#0d141d)"
      />
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

{/*============================ Editing levels (interactive) ============================ */}
<section className="section section--cream" id="levels">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow">See The Difference</p>
      <h2>Four Levels of Editing, Side by Side</h2>
      <p className="lede">Pick a level to see what an editor changes, and what stays yours.</p>
    </div>
    <SampleEdit levels={EDIT_LEVELS} />
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
        <h2>Join the Authors Who&apos;ve Sharpened Their Manuscript With Us</h2>
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
        <BookCover genre="Fiction" title="Before & After" author="Connect with Writer" gradient="linear-gradient(155deg,#202c3a,#0d141d)" />
        <BookCover genre="Business" title="Clarity, Delivered" author="Connect with Writer" gradient="linear-gradient(155deg,#4a3a1d,#241c0d)" />
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

    <div className="collage">
      <Link className="collage-card" href="/case-studies"><svg><use href="#i-book-open"></use></svg><strong>Our Work</strong><span>See edited books in the case studies</span></Link>
      <div className="collage-card"><svg><use href="#i-edit"></use></svg><strong>Note by Note</strong><span>Track-changes edits you control</span></div>
      <Link className="collage-card play" href="/case-studies"><span className="play-btn" aria-hidden="true"><svg><use href="#i-play"></use></svg></span><span>See how it works</span></Link>
      <div className="collage-card"><svg><use href="#i-shield"></use></svg><strong>Confidential</strong><span>NDA on every project</span></div>
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
        <BookCover className="book--sm" genre="Fiction" title="Fiction" gradient="linear-gradient(155deg,#202c3a,#0d141d)" />
        <BookCover className="book--sm" genre="Business" title="Business" gradient="linear-gradient(155deg,#4a3a1d,#241c0d)" />
        <BookCover className="book--sm" genre="Thriller" title="Thriller" gradient="linear-gradient(155deg,#5a2a2a,#280f0f)" />
        <BookCover className="book--sm" genre="Memoir" title="Memoir" gradient="linear-gradient(155deg,#1d3a4a,#0d1c24)" />
        <BookCover className="book--sm" genre="Romance" title="YA" gradient="linear-gradient(155deg,#2c2438,#13101c)" />
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
      {BLOG_SLUGS.map((slug, i) => {
        const post = getBlogPostBySlug(slug);
        if (!post) return null;
        return (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card__media" style={{ background: i % 2 ? "var(--cream-deep)" : "var(--orange-tint)" }}>
              <svg style={{ color: "var(--orange-deep)" }}><use href={`#${BLOG_ICONS[i]}`}></use></svg>
            </div>
            <div className="blog-card__body">
              <span className="blog-tag">{post.category}</span>
              <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{formatDate(post.date)}</span>
                <Link className="read-more" href={`/blog/${post.slug}`}>Read More <svg><use href="#i-arrow-right"></use></svg></Link>
              </div>
            </div>
          </article>
        );
      })}
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
      <BookCover className="book--sm" genre="Fiction" title="Fiction" gradient="linear-gradient(155deg,#202c3a,#0d141d)" />
      <BookCover className="book--sm" genre="Business" title="Nonfiction" gradient="linear-gradient(155deg,#4a3a1d,#241c0d)" />
      <BookCover className="book--sm" genre="Thriller" title="Thriller" gradient="linear-gradient(155deg,#5a2a2a,#280f0f)" />
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
