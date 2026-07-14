import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "Now Available", author: "Book Writing", genre: "Business", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "The Harbor Line", author: "N. Castillo", genre: "Fiction", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "Paper Anniversary", author: "M. Lindqvist", genre: "Romance", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "Dead Reckoning", author: "A. Whitcombe", genre: "Thriller", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
  { title: "Borrowed Light", author: "I. Odusanya", genre: "Memoir", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "The Steady Method", author: "R. Falk", genre: "Self-Help", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "Field Notes Home", author: "C. Ementa", genre: "Nonfiction", gradient: "linear-gradient(155deg,#3a2c20,#1d140d)" },
  { title: "The Long Coastline", author: "P. Serrano", genre: "Fiction", gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)" },
];
const REVIEWS = [
  { stars: 5, quote: "I had no idea how many moving parts were involved until they laid it all out and handled it for me.", initials: "NC", name: "Nadia C.", tag: "Self-Published Novelist" },
  { stars: 5, quote: "They got my book listed correctly across three platforms in a week. It would have taken me a month alone.", initials: "RF", name: "Ravi F.", tag: "Business Author" },
  { stars: 5, quote: "The submission strategy for agents was realistic and specific — no generic advice, just a real plan.", initials: "IO", name: "Ifeoma O.", tag: "Memoir Author" },
  { stars: 5, quote: "Launch week actually felt organized instead of chaotic, for the first time.", initials: "PS", name: "Pablo S.", tag: "Fiction Author" },
];
const FAQS = [
  { q: "Should I self-publish or pursue traditional publishing?", a: "It depends on your goals, timeline, and how much control you want over pricing, rights, and creative decisions. Self-publishing is faster and keeps full control and royalties; traditional publishing offers wider distribution reach but takes longer and involves less control. We'll walk through both honestly during your consultation." },
  { q: "Do I need an ISBN to publish my book?", a: "Yes, if you want your book listed for sale through most retailers and libraries. We handle ISBN registration and filing correctly under your name as part of our publishing packages." },
  { q: "How long does it take to publish a book once it's finished?", a: "Self-publishing setup typically takes two to four weeks once your manuscript, cover, and formatting are finalized. Traditional publishing submission and acceptance timelines vary widely and can take many months to over a year." },
  { q: "Who owns the rights to my book once it's published?", a: "With self-publishing, you retain 100% of your rights and royalties. Traditional publishing contracts vary, and we'll help you understand exactly what you're signing before you commit to any deal." },
  { q: "Which platforms do you set up distribution on?", a: "We typically set up distribution across Amazon KDP, IngramSpark, Apple Books, and other major retailers and library systems, depending on your goals and target markets." },
  { q: "Can you help me publish an audiobook?", a: "Yes. We provide guidance on narration options, production standards, and distribution for authors who want to add an audiobook edition alongside print and eBook." },
  { q: "What is hybrid publishing, and is it right for me?", a: "Hybrid publishing involves paying a publisher for services while sharing some rights and revenue. It can work well for some authors, but the terms vary widely — we'll help you evaluate any offer before you sign." },
  { q: "Do you help with book launches, not just publishing?", a: "Yes. We coordinate your publishing timeline with a launch and marketing plan so your book has real momentum in its first weeks, not just a listing that goes quiet." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Full-Service Book Publishing</p>
      <h1>Book Publishing Services That Take Your Manuscript From File to Bookstore Shelf</h1>
      <p className="lede">Whether you&apos;re self-publishing or pursuing a traditional deal, our team handles ISBN registration, distribution setup, formatting, and submission strategy — so your finished book actually reaches readers.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Publishing Consultation <svg><use href="#i-arrow-right"></use></svg></a>
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
          <svg><use href="#i-rocket" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-book-open"></use></svg><span>300+<small>Books Published</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Rights Retained</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Book Publishing By The Numbers</p>
    <div className="press__row">
      <span>300+ Books Published</span>
      <span>15+ Distribution Channels</span>
      <span>4.9/5 Average Rating</span>
      <span>100% Author-Owned Rights</span>
      <span>10+ Yrs Publishing Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}>
        <div className="book__cover">
          <span className="book__genre">Business</span>
          <span className="book__title">Now Available</span>
          <span className="book__author">Book Writing</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Publish Your Book</p>
      <h2>Publish With a Team That Knows Every Path to the Shelf</h2>
      <div className="body-copy"><p>Publishing is more than clicking upload. We handle ISBN registration, metadata, print and eBook formatting, distribution setup across major retailers, and — if you&apos;re pursuing traditional publishing — a submission strategy for agents and imprints that actually fit your book.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>ISBN registration & copyright filing handled for you</li>
        <li><svg><use href="#i-check-circle"></use></svg>Print, eBook & audiobook formatting included</li>
        <li><svg><use href="#i-check-circle"></use></svg>Distribution setup across major retailers</li>
        <li><svg><use href="#i-check-circle"></use></svg>Traditional submission strategy, if that&apos;s your path</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Publishing <svg><use href="#i-arrow-right"></use></svg></a>
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
        <h2>Everything Between a Finished Manuscript and a Published Book</h2>
      </div>
      <p className="lede">Publishing involves more moving parts than most authors expect — we manage every one of them.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-rocket"></use></svg></div>
        <h3>Self-Publishing Setup</h3>
        <p>ISBN registration, metadata, and account setup across Amazon KDP, IngramSpark, and other major platforms.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Print & eBook Formatting</h3>
        <p>Interior formatting built to platform specifications for print, eBook, and audiobook editions.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-message"></use></svg></div>
        <h3>Traditional Submission Strategy</h3>
        <p>Agent and imprint research, query letter support, and submission tracking for authors pursuing traditional deals.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-megaphone"></use></svg></div>
        <h3>Launch Planning</h3>
        <p>A coordinated release plan that lines up your publishing date with marketing and distribution.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 300+ Authors Who&apos;ve Published With Us</h2>
        <p>Book a free consultation and we&apos;ll map the exact publishing path that fits your goals, budget, and timeline.</p>
        <a href="#contact" className="btn btn--primary">Book Your Free Consultation <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Publishing Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-rocket"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Manuscript Finalized</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> ISBN & Metadata Set</div>
          <div className="progress-step current"><span className="dot"></span> Distribution In Setup</div>
          <div className="progress-step "><span className="dot"></span> Book Live & Available</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>Publishing Paths We Support</p>
      <h2>Whichever Path You Choose, We Know the Route</h2>
      <p className="lede" style={{marginInline: "auto"}}>Every author&apos;s goals are different — we tailor the publishing plan to fit yours, not the other way around.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Self-Publishing (Print & eBook)</h3>
        <p>Full setup across Amazon KDP, IngramSpark, and other retailers, with print and digital editions live within weeks.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Audiobook Production Support</h3>
        <p>Guidance on narration, production standards, and distribution for authors adding an audiobook edition.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Traditional Publishing Submission</h3>
        <p>Agent research, query letter polish, and a realistic submission strategy for authors pursuing a publishing deal.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Hybrid Publishing Guidance</h3>
        <p>Honest advice on hybrid publisher contracts so you understand exactly what you&apos;re signing before you do.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>International Distribution</h3>
        <p>Expanded distribution setup for authors looking to reach readers beyond their home market.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Reprints & Second Editions</h3>
        <p>Support for updating, reformatting, and relaunching a previously published book.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recently Published" title={"Books We've Helped Bring to Market"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-rocket"></use></svg>Finished Isn&apos;t The Same As Published.</span>
    <h2>We&apos;re the Publishing Team That Handles the Part Most Authors Get Stuck On</h2>
    <p className="lede">A finished manuscript and a published book are two very different things. ISBNs, metadata, distribution accounts, and formatting specs trip up even experienced authors — we handle every piece.</p>
    <em className="accent-italic">A book that isn&apos;t published yet is still just a very long file.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>ISBN & Copyright Handled</h4><p>Registration filed correctly, in your name, the first time.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Platform Expertise</h4><p>Deep experience across Amazon KDP, IngramSpark, and more.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Format-Perfect Files</h4><p>Interior files built to each platform&apos;s exact specifications.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__genre">Business</span><span className="book__title">Published & Live</span><span className="book__author">Book Writing</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__genre">Fiction</span><span className="book__title">On Every Shelf</span><span className="book__author">Book Writing</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Distribution Setup</h4><p>Live across major retailers and libraries where relevant.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>You Keep 100% Rights</h4><p>Every account and every right stays fully in your name.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Talk Publishing Strategy <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Publishing Process, File to Bookshelf</h2>
      <p className="lede">A clear path from a finished manuscript to a book that&apos;s actually available for readers to buy.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Publishing Consultation</h3><p>We map out whether self-publishing, traditional submission, or a hybrid path fits your goals and timeline best.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Formatting & Registration</h3><p>Interior formatting, cover specs, ISBN registration, and metadata are finalized for every edition you&apos;re releasing.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Distribution Setup</h3><p>Accounts and listings are configured across your chosen retailers, with pricing and categories optimized for discovery.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Launch & Beyond</h3><p>Your book goes live, and we coordinate the release with your marketing plan for a strong first-week push.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-book-open"></use></svg><strong>300+</strong><span>Books Published</span></div>
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
        <span className="cta2__tag">Get Published</span>
        <h2>Your Book Is Closer to the Shelf Than You Think</h2>
        <h3>Let&apos;s get it there.</h3>
        <p>Tell us where your manuscript stands and we&apos;ll map the fastest realistic path to a published, distributed book.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Consultation <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Publishing With Us"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-rocket"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Publishing</span>
          <h3><a href="#blog">Self-Publishing vs. Traditional Publishing: A Realistic Comparison</a></h3>
          <p>What each path actually asks of you in time, money, and control — and how to decide which fits your goals.</p>
          <div className="blog-meta"><span>June 20, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-layout"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Distribution</span>
          <h3><a href="#blog">What Actually Happens After You Hit &apos;Publish&apos;</a></h3>
          <p>A behind-the-scenes look at ISBNs, metadata, and distribution accounts most authors never see.</p>
          <div className="blog-meta"><span>June 3, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-megaphone"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Launch Strategy</span>
          <h3><a href="#blog">How to Plan a Book Launch That Doesn&apos;t Fizzle Out</a></h3>
          <p>A first-week strategy that keeps momentum going instead of ending the day your book goes live.</p>
          <div className="blog-meta"><span>May 20, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Get You Published</p>
      <h2>Your Manuscript Deserves an Audience.</h2>
      <p className="lede">Tell us where your book stands today, and we&apos;ll map out exactly how to get it published, distributed, and in front of real readers.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Fiction</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Book"} blurb={"Share a few details and a publishing specialist will reach out within one business day."} />
    </div>
  </div>
</section>
    </>
  );
}
