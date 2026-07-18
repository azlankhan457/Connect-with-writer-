import PortfolioSlider from "@/components/PortfolioSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

const PORTFOLIO_BOOKS = [
  { title: "Pip's Big Day", author: "L. Sorensen", genre: "Picture Book", gradient: "linear-gradient(155deg,#5a2a45,#280f1e)" },
  { title: "Tiny Toes, Big World", author: "R. Okwu", genre: "Board Book", gradient: "linear-gradient(155deg,#2a5a6a,#0f2830)" },
  { title: "Max and the Moon Map", author: "J. Halvorsen", genre: "Early Reader", gradient: "linear-gradient(155deg,#4a3a1d,#241c0d)" },
  { title: "The Backyard Expedition", author: "C. Vidal", genre: "Chapter Book", gradient: "linear-gradient(155deg,#3a4a4a,#16201f)" },
  { title: "The Last Lantern Keeper", author: "A. Bramwell", genre: "Middle Grade", gradient: "linear-gradient(155deg,#2c2438,#13101c)" },
  { title: "Why Do Bees Dance?", author: "Dr. S. Anand", genre: "STEM", gradient: "linear-gradient(155deg,#1d3a4a,#0d1c24)" },
  { title: "Milo's Loud Feelings", author: "N. Farah", genre: "Picture Book", gradient: "linear-gradient(155deg,#5a2a2a,#280f0f)" },
  { title: "Ravi Builds a Rocket", author: "D. Kapoor", genre: "Chapter Book", gradient: "linear-gradient(155deg,#202c3a,#0d141d)" },
];
const REVIEWS = [
  { stars: 5, quote: "They understood exactly how my story should sound read aloud — something I never would have thought to edit for.", initials: "LS", name: "Lena S.", tag: "Picture Book Author" },
  { stars: 5, quote: "Coordinating the illustrations and text together made the whole book feel intentional, not stitched together.", initials: "RO", name: "Rita O.", tag: "Board Book Author" },
  { stars: 5, quote: "My daughter's class loves reading it out loud — I credit a lot of that to the pacing notes they gave me.", initials: "JH", name: "Jonas H.", tag: "Early Reader Author" },
  { stars: 5, quote: "They knew exactly which age band my chapter book actually fit, which changed my whole approach.", initials: "CV", name: "Carla V.", tag: "Chapter Book Author" },
];
const FAQS = [
  { q: "What age bands do you publish for?", a: "We publish across board books (ages 0-3), picture books (ages 3-7), early readers (ages 6-8), chapter books (ages 7-10), and middle grade novels (ages 8-12), each with its own editorial and formatting approach." },
  { q: "Do you handle illustrations too, or just the writing and publishing side?", a: "We coordinate closely with illustration throughout editing and layout, and can connect you with illustrators through our children's book illustration service, or work alongside an illustrator you've already hired." },
  { q: "How is editing a children's book different from editing an adult book?", a: "Children's editing focuses heavily on read-aloud pacing, page-turn timing, vocabulary appropriate to the age band, and how text interacts with illustrations — factors that don't apply the same way to adult fiction or nonfiction." },
  { q: "Can I self-publish a children's book through you?", a: "Yes. We handle ISBN registration, print and eBook formatting, and distribution setup for children's books the same way we do for adult titles, adapted to the physical specs children's formats require." },
  { q: "How long does it take to publish a children's book?", a: "Timelines vary based on whether illustrations are already complete, but most projects take two to four months from manuscript review to a published, distributed book." },
  { q: "Do you help with educational or STEM children's books?", a: "Yes. We work with fact-accurate educational and STEM titles, ensuring content stays engaging and age-appropriate while remaining accurate." },
  { q: "Will my child's book be available in print, not just digitally?", a: "Yes. Print is often the priority for children's books, and we format for board book, hardcover picture book, and paperback formats in addition to eBook editions." },
  { q: "Who owns the rights to my children's book?", a: "You retain 100% ownership of your manuscript, illustrations (if commissioned through us), and royalties once your book is published." },
];

export default function Page() {
  return (
    <>


{/*============================ HERO ============================ */}
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Children&apos;s Book Publication Services</p>
      <h1>Children&apos;s Book Publication Services That Bring Your Story to Little Readers</h1>
      <p className="lede">From manuscript to printed picture book, we handle age-appropriate editing, illustration coordination, formatting, and distribution — so your children&apos;s story ends up in small hands, not just a drawer.</p>
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
          <svg><use href="#i-heart" style={{color: "var(--orange-dark)"}}></use></svg>
        </div>
        <div className="float-card float-card--1"><svg><use href="#i-book-open"></use></svg><span>180+<small>Children&apos;s Books Published</small></span></div>
        <div className="float-card float-card--2"><svg><use href="#i-star"></use></svg><span>4.9/5<small>Client Rating</small></span></div>
        <div className="float-card float-card--3"><svg><use href="#i-shield"></use></svg><span>100%<small>Author-Owned Rights</small></span></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 1 — Proof stats strip ============================ */}
<section className="press">
  <div className="container">
    <p className="press__label">Children&apos;s Publishing By The Numbers</p>
    <div className="press__row">
      <span>180+ Children&apos;s Books Published</span>
      <span>Ages 0-12 Covered</span>
      <span>4.9/5 Average Rating</span>
      <span>100% Author Ownership</span>
      <span>8+ Yrs Children&apos;s Publishing Experience</span>
    </div>
  </div>
</section>

{/*============================ FOLD 2 — Split intro ============================ */}
<section className="section" id="intro">
  <div className="container split">
    <div className="split-art">
      <div className="book book--lg" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}>
        <div className="book__cover">
          <span className="book__genre">Picture Book</span>
          <span className="book__title">Pip&apos;s Big Day</span>
          <span className="book__author">L. Sorensen</span>
        </div>
      </div>
    </div>
    <div className="split-copy">
      <p className="eyebrow">Publish For Young Readers</p>
      <h2>Publish a Children&apos;s Book Built the Way Young Readers Actually Read</h2>
      <div className="body-copy"><p>Children&apos;s publishing has its own rules — page-turn pacing, read-aloud rhythm, and age-appropriate vocabulary all matter as much as the story itself. Our team edits, formats, and publishes with those specifics in mind, coordinating closely with illustration so text and art work together on every spread.</p></div>
      <ul className="checklist">
        <li><svg><use href="#i-check-circle"></use></svg>Age-band editing (board book through middle grade)</li>
        <li><svg><use href="#i-check-circle"></use></svg>Illustration coordination on every spread</li>
        <li><svg><use href="#i-check-circle"></use></svg>Print, board-book & eBook formatting included</li>
        <li><svg><use href="#i-check-circle"></use></svg>Distribution across major retailers & libraries</li>
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
        <h2>Everything a Children&apos;s Book Needs Before Launch Day</h2>
      </div>
      <p className="lede">Publishing for young readers means getting the small details right — we manage every one of them.</p>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-heart"></use></svg></div>
        <h3>Age-Appropriate Editing</h3>
        <p>Vocabulary, sentence length, and read-aloud pacing tailored precisely to your target age band.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-palette"></use></svg></div>
        <h3>Illustration Coordination</h3>
        <p>We align text and art page by page, so illustrations and story beats land exactly where they should.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Print & Board Book Formatting</h3>
        <p>Layouts built to the physical specs of board books, picture books, and early readers alike.</p>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-rocket"></use></svg></div>
        <h3>Distribution & Launch</h3>
        <p>Listing across major retailers and library-friendly formats, with a launch plan built for young audiences.</p>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 4 — CTA banner 1 (dark) ============================ */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div className="cta-banner__copy">
        <h2>Join 180+ Authors Who&apos;ve Published Children&apos;s Books With Us</h2>
        <p>Book a free consultation and we&apos;ll map exactly what your story needs to become a real, published children&apos;s book.</p>
        <a href="#contact" className="btn btn--primary">Book Your Free Call <svg><use href="#i-arrow-right"></use></svg></a>
      </div>
      <div className="cta-banner__art">
        <div className="progress-card">
          <div className="progress-card__top"><span>Your Book Progress</span><svg style={{width: "18px", height: "18px", color: "var(--orange)"}}><use href="#i-heart"></use></svg></div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Manuscript Reviewed</div>
          <div className="progress-step done"><span className="dot"><svg><use href="#i-check"></use></svg></span> Illustration Matched</div>
          <div className="progress-step current"><span className="dot"></span> Layout In Progress</div>
          <div className="progress-step "><span className="dot"></span> Ready for Print</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 5 — Specialties grid ============================ */}
<section className="section" id="specialties">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow" style={{justifyContent: "center"}}>Age Bands We Publish</p>
      <h2>A Publishing Plan Built Around Your Reader&apos;s Age</h2>
      <p className="lede" style={{marginInline: "auto"}}>What works for a board book doesn&apos;t work for a middle-grade novel — we tailor every project to its actual audience.</p>
    </div>
    <div className="genre-grid">
      <article className="genre-card">
        <h3>Board Books (Ages 0-3)</h3>
        <p>Sturdy, simple layouts with minimal text, built for tiny hands and short attention spans.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Picture Books (Ages 3-7)</h3>
        <p>Read-aloud pacing and illustration-forward layouts designed for shared reading time.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Early Readers (Ages 6-8)</h3>
        <p>Controlled vocabulary and short chapters that support kids reading more independently.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Chapter Books (Ages 7-10)</h3>
        <p>Longer narratives with lighter illustration support, paced for growing readers.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Middle Grade Novels (Ages 8-12)</h3>
        <p>Full-length storytelling with age-appropriate themes, pacing, and vocabulary.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
      <article className="genre-card">
        <h3>Educational & STEM Books</h3>
        <p>Fact-accurate, engaging nonfiction built to hold a young reader&apos;s attention.</p>
        <a href="#contact" className="btn btn--ghost-dark btn--sm">Let&apos;s Connect</a>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 6 — Portfolio slider ============================ */}

<section className="section section--cream" id="portfolio">
  <PortfolioSlider eyebrow="Recently Published" title={"Children's Books We've Helped Bring to Life"} items={PORTFOLIO_BOOKS} />
</section>


{/*============================ FOLD 7 — Feature stage ============================ */}
<section className="section feature-band">
  <div className="container">
    <span className="badge-pill"><svg style={{width: "16px", height: "16px"}}><use href="#i-heart"></use></svg>Little Readers Deserve Big Stories.</span>
    <h2>We&apos;re the Publishing Team That Understands How Kids Actually Read Books</h2>
    <p className="lede">A great children&apos;s book isn&apos;t just a shorter adult book — it has its own rhythm, pacing, and page-turn logic. Our team builds every project around how young readers (and the grown-ups reading to them) actually experience a page.</p>
    <em className="accent-italic">The best children&apos;s books are read a hundred times and still land on page ten.</em>

    <div className="feature-stage">
      <div className="feature-col">
        <div className="feature-note"><span className="feature-note__num">01</span><div><h4>Age-Band Specialists</h4><p>Editors who know the difference between a 4-year-old&apos;s book and an 8-year-old&apos;s.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">02</span><div><h4>Illustration-Aware Editing</h4><p>Text edited with the art in mind, not as a separate afterthought.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">03</span><div><h4>Read-Aloud Testing</h4><p>Manuscripts tested for how they actually sound read out loud.</p></div></div>
      </div>

      <div className="feature-books" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__genre">Picture Book</span><span className="book__title">Your Story, Illustrated</span><span className="book__author">Connect with Writer</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__genre">Chapter Book</span><span className="book__title">Ready for Story Time</span><span className="book__author">Connect with Writer</span></div></div>
      </div>

      <div className="feature-col right">
        <div className="feature-note"><span className="feature-note__num">04</span><div><h4>Parent & Educator Friendly</h4><p>Content reviewed for the audiences reading alongside kids too.</p></div></div>
        <div className="feature-note"><span className="feature-note__num">05</span><div><h4>Durable Formats</h4><p>Print specs suited to board books, library binding, and everyday wear.</p></div></div>
      </div>
    </div>

    <div className="feature-final-note" style={{textAlign: "center"}}>
      <a href="#contact" className="btn btn--primary">Talk About Your Story <svg><use href="#i-arrow-right"></use></svg></a>
    </div>
  </div>
</section>

{/*============================ FOLD 7b — Process ============================ */}
<section className="section section--cream">
  <div className="container process-grid">
    <div>
      <p className="eyebrow">How It Works</p>
      <h2>Our 4-Step Children&apos;s Publishing Process</h2>
      <p className="lede">A clear path from manuscript to a finished children&apos;s book that&apos;s ready for story time.</p>
      <div className="process-steps">
        <div className="process-step"><span className="process-step__num">01</span><div><h3>Manuscript & Age-Band Review</h3><p>We review your story and confirm the ideal age band, vocabulary level, and pacing before editing begins.</p></div></div>
        <div className="process-step"><span className="process-step__num">02</span><div><h3>Editing & Illustration Coordination</h3><p>Age-appropriate editing happens alongside illustration planning, so text and art are built to work together.</p></div></div>
        <div className="process-step"><span className="process-step__num">03</span><div><h3>Layout & Formatting</h3><p>Pages are laid out to the physical specs of your chosen format — board book, picture book, or chapter book.</p></div></div>
        <div className="process-step"><span className="process-step__num">04</span><div><h3>Publishing & Launch</h3><p>Your book is printed, listed for distribution, and launched with a plan built around parents, educators, and young readers.</p></div></div>
      </div>
    </div>

    <div className="collage" aria-hidden="true">
      <div className="collage-card"><svg><use href="#i-book-open"></use></svg><strong>180+</strong><span>Children&apos;s Books Published</span></div>
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
        <span className="cta2__tag">Publish Your Children&apos;s Book</span>
        <h2>Your Story Deserves Story Time</h2>
        <h3>Let&apos;s put it in little hands.</h3>
        <p>Tell us about your children&apos;s book idea today, and we&apos;ll map out exactly what it needs to become a real, published book.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn--primary">Get My Free Consultation <svg><use href="#i-arrow-right"></use></svg></a>
          <a href="#portfolio" className="btn btn--ghost-light">View Our Portfolio</a>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Board Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Early Reader</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#3a4a4a,#16201f)"}}><div className="book__cover"><span className="book__title">Chapter Book</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#2c2438,#13101c)"}}><div className="book__cover"><span className="book__title">Middle Grade</span></div></div>
      </div>
    </div>
  </div>
</section>

{/*============================ FOLD 9 — Reviews ============================ */}

<section className="section">
  <ReviewsSlider eyebrow="Client Stories" title={"What Authors Say About Publishing Children's Books With Us"} items={REVIEWS} />
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
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-heart"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Children&apos;s Publishing</span>
          <h3><a href="#blog">How to Choose the Right Age Band for Your Children&apos;s Book</a></h3>
          <p>Vocabulary, page count, and themes all shift depending on who&apos;s actually going to read your story.</p>
          <div className="blog-meta"><span>June 18, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--cream-deep)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-book-open"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Read-Aloud Tips</span>
          <h3><a href="#blog">Why Page-Turns Matter More Than You Think in Picture Books</a></h3>
          <p>The rhythm of a page turn can make or break a bedtime story — here&apos;s how professional editors think about it.</p>
          <div className="blog-meta"><span>June 1, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
      <article className="blog-card">
        <div className="blog-card__media" style={{background: "var(--orange-tint)"}}><svg style={{color: "var(--orange-deep)"}}><use href="#i-rocket"></use></svg></div>
        <div className="blog-card__body">
          <span className="blog-tag">Publishing</span>
          <h3><a href="#blog">Board Book vs. Picture Book: Which Format Fits Your Story?</a></h3>
          <p>The physical format you choose changes everything from page count to price point — here&apos;s how to decide.</p>
          <div className="blog-meta"><span>May 22, 2026</span><a className="read-more" href="#blog">Read More <svg><use href="#i-arrow-right"></use></svg></a></div>
        </div>
      </article>
    </div>
  </div>
</section>

{/*============================ FOLD 12 — Final CTA + contact form ============================ */}

<section className="section section--cream" id="contact">
  <div className="container final-grid">
    <div className="final-copy reveal">
      <p className="eyebrow">Let&apos;s Publish Your Story</p>
      <h2>Every Great Bedtime Story Starts Somewhere.</h2>
      <p className="lede">Tell us about your children&apos;s book idea, and we&apos;ll walk you through exactly what it takes to get it published and into little hands.</p>
      <div className="final-books" aria-hidden="true">
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#2a5a6a,#0f2830)"}}><div className="book__cover"><span className="book__title">Board Book</span></div></div>
        <div className="book book--sm" style={{"--book-bg": "linear-gradient(155deg,#3a4a4a,#16201f)"}}><div className="book__cover"><span className="book__title">Chapter Book</span></div></div>
      </div>
    </div>
    <div className="form-card reveal">
      <ContactForm heading={"Tell Us About Your Children's Book"} blurb={"Share a few details and a member of our children's publishing team will reach out within one business day."} />
    </div>
  </div>
</section>
    </>
  );
}
