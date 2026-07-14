import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "Tiny Toes, Big World", author: "R. Okwu", genre: "Picture Book", gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)" },
  { title: "Max and the Moon Map", author: "J. Halvorsen", genre: "Early Reader", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "Milo's Loud Feelings", author: "N. Farah", genre: "Picture Book", gradient: "linear-gradient(155deg,#5a2a45,#280f1e)" },
  { title: "The Backyard Expedition", author: "C. Vidal", genre: "Chapter Book", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "The Last Lantern Keeper", author: "A. Bramwell", genre: "Middle Grade", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "Why Do Bees Dance?", author: "Dr. S. Anand", genre: "STEM", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "Ravi Builds a Rocket", author: "D. Kapoor", genre: "Chapter Book", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
  { title: "Pip's Big Day", author: "L. Sorensen", genre: "Picture Book", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
];
const REVIEWS = [
  { stars: 5, quote: "Seeing my character sketched for the first time was the moment my book started to feel real.", initials: "RO", name: "Rita O.", tag: "Picture Book Author" },
  { stars: 5, quote: "They matched the style to my story's tone perfectly — warm and soft, exactly as I'd imagined it.", initials: "JH", name: "Jonas H.", tag: "Early Reader Author" },
  { stars: 5, quote: "The revision rounds on character design meant my protagonist actually looks the way I pictured her.", initials: "NF", name: "Nadia F.", tag: "Picture Book Author" },
  { stars: 5, quote: "Consistent, professional, and genuinely creative. My illustrator understood the story, not just the brief.", initials: "CV", name: "Carla V.", tag: "Chapter Book Author" },
];
const FAQS = [
  { q: "How much does children's book illustration cost?", a: "Cost depends on the number of illustrations, style complexity, and whether you need full-spread art or a cover-only package. We provide a custom quote after a free consultation about your story." },
  { q: "Do I get to choose the illustration style?", a: "Yes. We'll show you a range of styles that fit your story's tone and age band, and you choose the direction before any full illustration work begins." },
  { q: "How does character design work?", a: "Your illustrator produces character sketches first, which go through revision rounds until the look, proportions, and personality are fully locked in — before full-spread illustration starts." },
  { q: "Can I use my own reference art or photos for character inspiration?", a: "Yes. Many authors bring reference sketches, photos, or mood boards, and our illustrators use them as a starting point for original character design." },
  { q: "Who owns the rights to the illustrations?", a: "You own 100% of the rights to commissioned illustrations once the project is complete and paid in full, the same as you own your manuscript." },
  { q: "How long does it take to illustrate a children's book?", a: "A standard 24-32 page picture book typically takes six to ten weeks from character design approval to final art delivery, depending on style complexity." },
  { q: "Do you illustrate books for older age bands, like chapter books?", a: "Yes. We illustrate across board books, picture books, and chapter books, adjusting the amount and style of illustration to fit each age band's needs." },
  { q: "Can you illustrate just a cover if my interior is already done?", a: "Yes, we offer cover-only illustration packages for authors who already have interior art, are eBook-only, or need a fresh cover for an existing book." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Children&apos;s Book Illustration Services</p>
      <h1>Children&apos;s Book Illustration That Makes Your Story Impossible to Put Down</h1>
      <p className="lede">Our illustrators design characters, build full-spread scenes, and paint covers that match your story&apos;s tone and age band — turning your manuscript into a book kids actually want to hold.</p>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Get a Free Illustration Quote <svg><use href="#i-arrow-right"></use></svg></a>
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
          <svg><use href="#i-palette" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-palette"></use></svg><span>150+<small>Books Illustrated</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Custom Character Art</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Illustration By The Numbers</p>
    <div className="press__row">
      <span>150+ Books Illustrated</span>
      <span>20+ Illustration Styles</span>
      <span>4.9/5 Average Rating</span>
      <span>100% Custom, Original Art</span>
      <span>8+ Yrs Illustration Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}>
        <div className="book__cover">
          <span className="book__genre">Picture Book</span>
          <span className="book__title">Tiny Toes, Big World</span>
          <span className="book__author">R. Okwu</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Hire An Illustrator</p>
      <h2>Hire an Illustrator Who Designs Characters Kids Remember</h2>
      <div className="body-copy"><p>Every project starts with character design sketches before a single full-spread illustration is painted, so your protagonist&apos;s look is locked in and consistent from the first page to the last. Our illustrators match style, color palette, and tone to your story&apos;s age band and mood.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Character design sketches before full illustration</li>
        <li><svg><use href="#i-check-circle"></use></svg>Style and palette matched to your story&apos;s tone</li>
        <li><svg><use href="#i-check-circle"></use></svg>Full-spread illustrations for every page</li>
        <li><svg><use href="#i-check-circle"></use></svg>Unlimited revision rounds on character design</li>
      </ul>
      <div className="cta-row">
        <a href="#contact" className="btn btn--primary">Start Your Illustrations <svg><use href="#i-arrow-right"></use></svg></a>
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
        <h2>Full-Spread Illustration, From Character Sketch to Cover Art</h2>
      </div>
      <p className="lede">Whether you need a full picture book illustrated or just a standout cover, our illustrators bring your story&apos;s world to life.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-palette"></use></svg></div>
        <h3>Character Design</h3>
        <p>Original character sketches refined until your protagonist&apos;s look is fully locked in and consistent throughout the book.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Full-Spread Illustration</h3>
        <p>Complete page and spread illustrations that carry the story visually alongside your text.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-book-open"></use></svg></div>
        <h3>Cover Illustration</h3>
        <p>A standout cover illustration designed to catch a young reader&apos;s (and a parent&apos;s) eye on a shelf or a screen.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-heart"></use></svg></div>
        <h3>Style Matching</h3>
        <p>Illustration style and color palette selected to match your story&apos;s age band, tone, and emotional register.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 150+ Authors Whose Stories We&apos;ve Illustrated</h2>
        <p>Book a free illustration consultation and get a custom quote based on your story&apos;s length and style.</p>
        <a href="#contact" className="btn btn--primary">Get My Free Quote <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Illustration Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-palette"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Character Sketches Approved</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Style Locked In</div>
          <div className="progress-step current"><span className="dot"></span> Full-Spreads In Progress</div>
          <div className="progress-step "><span className="dot"></span> Final Art Delivered</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>Illustration Styles We Offer</p>
      <h2>A Style to Match Every Story&apos;s Tone</h2>
      <p className="lede" style={{marginInline: "auto"}}>From soft watercolor to bold digital line art, we match the illustration style to what your story actually needs.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Watercolor & Soft Palette</h3>
        <p>Gentle, warm illustrations suited to bedtime stories and quiet, emotional picture books.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Bold Digital & Flat Color</h3>
        <p>Bright, graphic illustration style built for high-energy stories and early readers.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Whimsical & Storybook Classic</h3>
        <p>Detailed, classic storybook illustration with texture and depth, ideal for fantasy and folklore.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Educational & Diagram-Style Art</h3>
        <p>Clear, accurate illustration for STEM and educational titles where visual accuracy matters.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Character-Driven Cartoon Style</h3>
        <p>Expressive, cartoon-forward character art built for humor and personality-driven stories.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Cover-Only Illustration Packages</h3>
        <p>A single standout cover illustration for authors who already have interior art or are eBook-only.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recent Illustration Work" title={"Stories We've Brought to Life With Art"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-palette"></use></svg>A Character Kids Actually Remember.</span>
    <h2>We&apos;re the Illustration Team That Starts With Character, Not Just Pretty Pictures</h2>
    <p className="lede">A children&apos;s book lives or dies by whether kids connect with its characters. That&apos;s why every project starts with character design sketches — refined until your protagonist is fully realized — before a single full-spread illustration begins.</p>
    <em className="accent-italic">Kids don&apos;t remember every page. They remember the character.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Character-First Process</h4><p>Design sketches locked in before full illustration begins.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Style Options for Every Tone</h4><p>From watercolor to bold digital, matched to your story.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Consistency Across Every Page</h4><p>Characters and settings stay visually consistent start to finish.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__genre">Picture Book</span><span className="book__title">Character Locked In</span><span className="book__author">Book Writing</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__genre">Picture Book</span><span className="book__title">Full Spreads Complete</span><span className="book__author">Book Writing</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Unlimited Revision Rounds</h4><p>On character design, until the look is exactly right.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Print-Ready File Delivery</h4><p>High-resolution art delivered ready for your chosen format.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Get My Illustration Quote <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Illustration Process, Sketch to Final Art</h2>
      <p className="lede">A structured path from your manuscript to fully illustrated, print-ready artwork.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Style & Character Consultation</h3><p>We discuss your story&apos;s tone, age band, and any visual references you already have in mind.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Character Design Sketches</h3><p>Your illustrator sketches character options, refined through revisions until the look is fully locked in.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Full-Spread Illustration</h3><p>Full-color illustrations are produced page by page, keeping characters and settings consistent throughout.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Final Delivery</h3><p>Print-ready, high-resolution files are delivered in the formats your publisher or printer requires.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-palette"></use></svg><strong>150+</strong><span>Books Illustrated</span></div>
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
        <span className="cta2__tag">Illustrate Your Story</span>
        <h2>Your Characters Deserve to Be Seen</h2>
        <h3>Let&apos;s design them together.</h3>
        <p>Tell us about your story today and we&apos;ll send a custom illustration quote based on length, style, and age band.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Quote <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Early Reader</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#3a4a4a,#16201f)"}}><div className="book__cover"><span className="book__title">Chapter Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Middle Grade</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Our Illustration Work"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-palette"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Illustration</span>
          <h3><a href="#blog">How Character Design Sketches Shape an Entire Picture Book</a></h3>
          <p>Why the first few sketches of your protagonist matter more than any single full-spread illustration.</p>
          <div className="blog-meta"><span>June 22, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-heart"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Style Guide</span>
          <h3><a href="#blog">Watercolor, Digital, or Classic Storybook: Choosing Your Illustration Style</a></h3>
          <p>A practical breakdown of popular children&apos;s illustration styles and which stories they suit best.</p>
          <div className="blog-meta"><span>June 5, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-book-open"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Publishing</span>
          <h3><a href="#blog">How Text and Illustration Should Actually Work Together on a Page</a></h3>
          <p>The best picture books treat text and art as one unit, not two separate elements — here&apos;s how.</p>
          <div className="blog-meta"><span>May 24, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Illustrate Your Story</p>
      <h2>Give Your Characters a Face Kids Won&apos;t Forget.</h2>
      <p className="lede">Tell us about your story and your vision, and we&apos;ll send back a custom illustration quote and style options within one business day.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Early Reader</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Story"} blurb={"Share your story details and vision, and an illustrator will reach out within one business day."} />
    </div>
  </div>
</section>
    </>
  );
}
