import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "No Clean Exit", author: "R. Doyle", genre: "Thriller", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "Paper Anniversary", author: "M. Lindqvist", genre: "Romance", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "The Last Signal Home", author: "K. Bertrand", genre: "Sci-Fi", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
  { title: "The Margin Method", author: "T. Achebe", genre: "Business", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "Ordinary Weather", author: "B. Tanaka", genre: "Memoir", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "Static & Stars", author: "J. Ibarra", genre: "YA Fiction", gradient: "linear-gradient(155deg,#5a2a45,#280f1e)" },
  { title: "The Bramblewood Oath", author: "E. Sorel", genre: "Fantasy", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "Field Notes Home", author: "C. Ementa", genre: "Nonfiction", gradient: "linear-gradient(155deg,#3a2c20,#1d140d)" },
];
const REVIEWS = [
  { stars: 5, quote: "The three concepts were genuinely different directions, not just three colors of the same idea. Hard decision, in a good way.", initials: "RD", name: "Rosa D.", tag: "Thriller Author" },
  { stars: 5, quote: "My cover finally looks like it belongs on the same shelf as the bestsellers I was comping it to.", initials: "ML", name: "Mateo L.", tag: "Romance Author" },
  { stars: 5, quote: "They tested it at thumbnail size before I even asked — exactly the kind of detail I didn't know to ask for.", initials: "KB", name: "Kiera B.", tag: "Sci-Fi Author" },
  { stars: 5, quote: "Clean, credible, and exactly the tone I needed for a business book. Sales picked up after the redesign.", initials: "TA", name: "Tunde A.", tag: "Business Author" },
];
const FAQS = [
  { q: "How many cover concepts do I get to choose from?", a: "Every standard package includes three distinct initial concepts, each grounded in research on your genre's current bestseller conventions, so you're choosing between genuinely different directions." },
  { q: "Do you design covers for print, eBook, and audiobook?", a: "Yes. Our standard packages include a full print wraparound cover (front, spine, and back), an optimized eBook cover, and square-format audiobook art." },
  { q: "How long does cover design take?", a: "Initial concepts are typically delivered within one to two weeks, with revisions on your chosen concept taking an additional one to two weeks depending on complexity." },
  { q: "Can I request a specific style or reference covers I like?", a: "Absolutely. Comp titles and style references are part of our initial brief process, and we use them alongside our own genre research to shape your concepts." },
  { q: "Do you use stock imagery or custom illustration?", a: "We use a combination depending on your genre and budget — some covers work well with curated stock imagery, while others benefit from custom illustration, which we can arrange." },
  { q: "How many revision rounds are included?", a: "Unlimited revisions are included on your chosen concept until you're fully satisfied with the typography, imagery, and overall design." },
  { q: "Who owns the rights to my finished cover design?", a: "You own full rights to your finished, custom cover design once the project is paid in full." },
  { q: "Can you redesign an existing cover that isn't performing well?", a: "Yes. We regularly redesign underperforming covers, starting with the same genre research process to identify exactly what the original cover is missing." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Professional Book Cover Design</p>
      <h1>Book Cover Design That Makes Readers Stop Scrolling and Click</h1>
      <p className="lede">Our designers build genre-matched, retail-ready covers for print, eBook, and audiobook editions — the kind of cover that sells your book in the first two seconds a reader sees it.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Cover Concept <svg><use href="#i-arrow-right"></use></svg></a>
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
          <svg><use href="#i-layout" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-layout"></use></svg><span>350+<small>Covers Designed</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Original Custom Art</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Cover Design By The Numbers</p>
    <div className="press__row">
      <span>350+ Covers Designed</span>
      <span>25+ Genres Covered</span>
      <span>4.9/5 Average Rating</span>
      <span>3 Concepts Included Standard</span>
      <span>10+ Yrs Design Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}>
        <div className="book__cover">
          <span className="book__genre">Thriller</span>
          <span className="book__title">No Clean Exit</span>
          <span className="book__author">R. Doyle</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Hire A Cover Designer</p>
      <h2>Hire a Cover Designer Who Actually Understands Your Genre</h2>
      <div className="body-copy"><p>A great cover signals genre and tone before a reader reads a single word of your blurb. Our designers study your genre&apos;s bestseller conventions, then build a cover that fits right in — while still standing out on a crowded shelf or a thumbnail-sized retail page.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Genre-matched design, not generic templates</li>
        <li><svg><use href="#i-check-circle"></use></svg>Three initial concepts to choose from</li>
        <li><svg><use href="#i-check-circle"></use></svg>Print, eBook & audiobook formats included</li>
        <li><svg><use href="#i-check-circle"></use></svg>Unlimited revisions on your chosen concept</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Your Cover Design <svg><use href="#i-arrow-right"></use></svg></a>
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
        <h2>Retail-Ready Covers for Every Format You Publish</h2>
      </div>
      <p className="lede">Whether you&apos;re publishing in print, digital, or audio, your cover needs to work at every size, from a bookstore shelf to a phone screen.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Front Cover Design</h3>
        <p>A striking, genre-appropriate front cover built to stand out as a full image and as a small thumbnail.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-book-open"></use></svg></div>
        <h3>Full Print Wraparound</h3>
        <p>Complete front, spine, and back cover design with barcode placement, built to your exact trim size.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-search"></use></svg></div>
        <h3>eBook Cover Optimization</h3>
        <p>Covers tested for legibility and impact at the small sizes readers actually see them in online.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-play"></use></svg></div>
        <h3>Audiobook Cover Art</h3>
        <p>Square-format cover art optimized for audiobook platforms and app store thumbnails.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 350+ Authors Whose Covers We&apos;ve Designed</h2>
        <p>Book a free cover concept call and see genre-matched design directions before you commit to anything.</p>
        <a href="#contact" className="btn btn--primary">Get My Free Concept <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Cover Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-layout"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Genre Research Complete</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> 3 Concepts Delivered</div>
          <div className="progress-step current"><span className="dot"></span> Revisions In Progress</div>
          <div className="progress-step "><span className="dot"></span> Final Files Delivered</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>Genres We Design For</p>
      <h2>A Cover Style for Every Genre&apos;s Readers</h2>
      <p className="lede" style={{marginInline: "auto"}}>Cover conventions differ wildly by genre — our designers know exactly what each one signals to readers.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Thriller & Mystery</h3>
        <p>High-contrast, moody imagery and bold typography that signal tension before the first page.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Romance & Contemporary Fiction</h3>
        <p>Warm, character-forward covers that match today&apos;s romance retail conventions and reader expectations.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Fantasy & Sci-Fi</h3>
        <p>Immersive world-building imagery with genre-appropriate typographic treatment.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Business & Self-Help</h3>
        <p>Clean, authoritative covers that establish credibility and expertise at a glance.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Memoir & Literary Fiction</h3>
        <p>Evocative, editorial-style covers that reflect the emotional tone of literary and memoir titles.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Children&apos;s & YA</h3>
        <p>Bright, character-driven covers built to appeal directly to younger readers and their parents.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recent Cover Work" title={"Covers We've Designed Across Every Genre"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-layout"></use></svg>You Have Two Seconds. Make Them Count.</span>
    <h2>We&apos;re the Cover Design Team That Studies Your Genre Before We Design Anything</h2>
    <p className="lede">A cover that doesn&apos;t read as its genre gets scrolled past, no matter how good the book is. Before any design begins, we study your genre&apos;s current bestsellers so your cover fits right in — and still stands out.</p>
    <em className="accent-italic">A great cover doesn&apos;t just look good. It sells the promise of the book inside.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Genre Research First</h4><p>Bestseller conventions studied before a single concept is sketched.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Three Concepts, Not One</h4><p>Real choice between distinct design directions, every time.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Thumbnail-Tested</h4><p>Every cover checked for legibility at actual retail thumbnail size.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__genre">Thriller</span><span className="book__title">Cover Concept 01</span><span className="book__author">Connect with Writer</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__genre">Romance</span><span className="book__title">Cover Concept 02</span><span className="book__author">Connect with Writer</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>All Formats Included</h4><p>Print wraparound, eBook, and audiobook covers in one package.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Unlimited Revisions</h4><p>On your chosen concept, until it&apos;s exactly right.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Get My Free Cover Concept <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Cover Design Process, Brief to Final Files</h2>
      <p className="lede">A structured process that turns your book&apos;s genre and tone into a cover readers actually notice.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Genre & Brief Consultation</h3><p>We discuss your book&apos;s genre, tone, and any comp titles you admire, then research current bestseller conventions.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Three Initial Concepts</h3><p>Your designer delivers three distinct cover directions to choose from, each grounded in genre research.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Revisions on Your Favorite</h3><p>We refine your chosen concept through unlimited rounds until typography, imagery, and color are exactly right.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Final File Delivery</h3><p>Print-ready wraparound files, eBook covers, and audiobook art delivered in every format you need.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-layout"></use></svg><strong>350+</strong><span>Covers Designed</span></div>
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
        <span className="cta2__tag">Design Your Cover</span>
        <h2>Your Book Deserves a Cover That Sells It</h2>
        <h3>Let&apos;s design one that does.</h3>
        <p>Tell us about your book today and we&apos;ll send back genre-matched concept directions before you commit to anything.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Concept <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#202c3a,#0d141d)"}}><div className="book__cover"><span className="book__title">Sci-Fi</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Our Cover Designs"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-layout"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Cover Design</span>
          <h3><a href="#blog">Why Your Book Cover Needs to Work as a Thumbnail First</a></h3>
          <p>Most readers see your cover the size of a postage stamp before they ever see it in full — design for that reality.</p>
          <div className="blog-meta"><span>June 25, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-search"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Genre Conventions</span>
          <h3><a href="#blog">What Your Cover Silently Tells Readers About Your Genre</a></h3>
          <p>Color, typography, and imagery all send genre signals readers process in a fraction of a second.</p>
          <div className="blog-meta"><span>June 8, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-refresh"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Self-Publishing</span>
          <h3><a href="#blog">Signs It&apos;s Time to Redesign Your Book Cover</a></h3>
          <p>Flat sales aren&apos;t always about the writing — sometimes the cover just isn&apos;t doing its job anymore.</p>
          <div className="blog-meta"><span>May 27, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Design Your Cover</p>
      <h2>Give Your Book a Cover That Earns the Click.</h2>
      <p className="lede">Tell us about your book and genre, and we&apos;ll send back genre-matched concept directions within one business day.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Book"} blurb={"Share your book's genre and any style references, and a designer will reach out within one business day."} />
    </div>
  </div>
</section>
    </>
  );
}
