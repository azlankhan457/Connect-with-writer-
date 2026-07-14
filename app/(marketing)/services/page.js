import Link from "next/link";

export default function Page() {
  return (
    <>
<section className="hero" style={{paddingBottom: "clamp(48px,6vw,72px)"}}>
  <div className="container" style={{maxWidth: "800px", textAlign: "center", marginInline: "auto"}}>
    <p className="eyebrow" style={{justifyContent: "center"}}>Everything Authors Need, In One Place</p>
    <h1>Our Services</h1>
    <p className="lede" style={{marginInline: "auto"}}>From a blank page to a book on the shelf — writing, editing, proofreading, publishing, illustration, cover design, and marketing, all under one roof.</p>
  </div>
</section>

<section className="section section--cream">
  <div className="container">
    <div className="service-grid" style={{gridTemplateColumns: "repeat(3,1fr)"}}>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-pen"></use></svg></div>
        <h3>Book Writing</h3>
        <p>From first outline to final proofread, our professional ghostwriters and editors craft fiction, memoirs, and nonfiction books that sound exactly like you — while you keep 100% of the rights, royalties, and credit.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/book-writing" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-edit"></use></svg></div>
        <h3>Book Editing</h3>
        <p>Our developmental editors and line editors sharpen structure, pacing, characters, and prose — so your manuscript is ready for agents, readers, or publication, without losing your voice.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/book-editing" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-search"></use></svg></div>
        <h3>Proofreading</h3>
        <p>After the editing is done, our proofreaders comb every page for typos, grammar slips, punctuation errors, and formatting inconsistencies — the final quality check before your book goes to print or upload.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/proofreading" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-rocket"></use></svg></div>
        <h3>Book Publishing</h3>
        <p>Whether you&apos;re self-publishing or pursuing a traditional deal, our team handles ISBN registration, distribution setup, formatting, and submission strategy — so your finished book actually reaches readers.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/book-publishing" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-book-open"></use></svg></div>
        <h3>Children&apos;s Book Publication</h3>
        <p>From manuscript to printed picture book, we handle age-appropriate editing, illustration coordination, formatting, and distribution — so your children&apos;s story ends up in small hands, not just a drawer.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/childrens-book-publication" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-palette"></use></svg></div>
        <h3>Children&apos;s Book Illustration</h3>
        <p>Our illustrators design characters, build full-spread scenes, and paint covers that match your story&apos;s tone and age band — turning your manuscript into a book kids actually want to hold.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/childrens-book-illustration" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-layout"></use></svg></div>
        <h3>Book Cover Design</h3>
        <p>Our designers build genre-matched, retail-ready covers for print, eBook, and audiobook editions — the kind of cover that sells your book in the first two seconds a reader sees it.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/book-cover-design" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
      <article className="service-card">
        <div className="service-card__icon"><svg><use href="#i-megaphone"></use></svg></div>
        <h3>Book Marketing</h3>
        <p>Publishing your book is only half the job. Our marketing team builds Amazon optimization, ARC reader campaigns, social content, and launch PR strategies that put your book in front of the readers who&apos;ll actually love it.</p>
        <div className="cta-row" style={{marginTop: "1.2rem"}}>
          <Link href="/book-marketing" className="btn btn--ghost-dark btn--sm">Learn More <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </article>
    </div>
  </div>
</section>

<section className="section section--tight">
  <div className="container">
    <div className="cta2 reveal">
      <div className="cta2-copy">
        <span className="cta2__tag">Not Sure Where to Start?</span>
        <h2>Tell Us About Your Book</h2>
        <h3>We&apos;ll point you to the right service.</h3>
        <p>Every project is different. Book a free consultation and we&apos;ll help you figure out exactly which services your book needs, in what order.</p>
        <div className="cta-row">
          <Link href="/contact" className="btn btn--primary">Get a Free Consultation <svg><use href="#i-arrow-right"></use></svg></Link>
        </div>
      </div>
      <div className="cta2-collage" aria-hidden="true">
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#3a2c20,#1d140d)"}}><div className="book__cover"><span className="book__title">Memoir</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a2a,#280f0f)"}}><div className="book__cover"><span className="book__title">Romance</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#1d3a4a,#0d1c24)"}}><div className="book__cover"><span className="book__title">Thriller</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#4a3a1d,#241c0d)"}}><div className="book__cover"><span className="book__title">Business</span></div></div>
        <div className="book" style={{"--book-bg": "linear-gradient(155deg,#5a2a45,#280f1e)"}}><div className="book__cover"><span className="book__title">Picture Book</span></div></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
