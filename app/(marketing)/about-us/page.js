import Link from "next/link";

export default function Page() {
  return (
    <>
{/*PAGE HERO */}
<section className="page-hero">
  <div className="container">
    <div className="page-hero-inner reveal">
      <p className="eyebrow">About Book Writing</p>
      <h1>We Exist to Help Every Author Tell Their Story — Brilliantly</h1>
      <p className="lede">Since 2015, we&apos;ve partnered with hundreds of authors to turn raw ideas into polished, publish-ready books. We&apos;re not a factory — we&apos;re a team of dedicated writers, editors, and creatives who genuinely care about every manuscript we touch.</p>
    </div>
  </div>
</section>

{/*MISSION SECTION */}
<section className="section">
  <div className="container">
    <div className="mission-grid">
      <div className="reveal">
        <p className="eyebrow">Our Mission</p>
        <h2>Giving Every Voice the Platform It Deserves</h2>
        <p className="lede" style={{marginTop: "1rem"}}>We believe every person has at least one book worth writing. Our job is to make sure the world gets to read it — written in your voice, shaped by your story, and crafted to your vision.</p>
        <div className="value-row">
          <div className="value-item">
            <div className="value-icon"><svg><use href="#i-heart"></use></svg></div>
            <div>
              <h4>Author-First Approach</h4>
              <p>Your creative vision drives everything. We amplify, never overwrite.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon"><svg><use href="#i-shield"></use></svg></div>
            <div>
              <h4>Complete Confidentiality</h4>
              <p>Every project is protected by a strict NDA. Your idea stays yours, always.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon"><svg><use href="#i-star"></use></svg></div>
            <div>
              <h4>Uncompromising Quality</h4>
              <p>We don&apos;t ship drafts. Every manuscript goes through rigorous editing before delivery.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon"><svg><use href="#i-users"></use></svg></div>
            <div>
              <h4>Dedicated Writer Match</h4>
              <p>You&apos;re matched to a writer based on genre, style, and personality — never randomly assigned.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-visual reveal">
        <div className="mission-blob-wrap">
          <div className="mission-blob">
            <svg style={{width: "140px", height: "140px", color: "var(--orange-dark)"}} aria-hidden="true"><use href="#i-book-open"></use></svg>
          </div>
          <div className="mission-stat-cards">
            <div className="stat-card stat-card--1">
              <div><div className="stat-card__num">500+</div><div className="stat-card__label">Books Written</div></div>
            </div>
            <div className="stat-card stat-card--2">
              <div><div className="stat-card__num">4.9★</div><div className="stat-card__label">Avg. Rating</div></div>
            </div>
            <div className="stat-card stat-card--3">
              <div><div className="stat-card__num">10+</div><div className="stat-card__label">Yrs Experience</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*OUR STORY TIMELINE */}
<section className="section section--cream">
  <div className="container">
    <div className="section-head reveal">
      <p className="eyebrow">Our Story</p>
      <h2>From a Single Writer&apos;s Desk to a Full Publishing Partner</h2>
      <p className="lede">What began as a small freelance operation has grown into one of the most trusted ghostwriting agencies in the country.</p>
    </div>
    <div className="timeline reveal">
      <div className="timeline-item">
        <div className="tl-year">2015</div>
        <div style={{position: "relative"}}>
          <div className="tl-dot"></div>
          <div className="tl-content" style={{paddingLeft: "1rem"}}>
            <h4>Founded with a Single Mission</h4>
            <p>Book Writing launches with a small team of 3 writers and a simple belief: every author deserves a professional partner. Our first 10 books are completed in the first year.</p>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="tl-year">2017</div>
        <div style={{position: "relative"}}>
          <div className="tl-dot"></div>
          <div className="tl-content" style={{paddingLeft: "1rem"}}>
            <h4>Expanded to Full-Service Publishing</h4>
            <p>We add editing, cover design, and publishing guidance to our offering. Our team grows to 15 specialists across writing, editing, and design disciplines.</p>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="tl-year">2019</div>
        <div style={{position: "relative"}}>
          <div className="tl-dot"></div>
          <div className="tl-content" style={{paddingLeft: "1rem"}}>
            <h4>100 Books Milestone & National Recognition</h4>
            <p>We celebrate our 100th completed manuscript, with several client books becoming Amazon bestsellers in their categories. Featured in Publishing Weekly&apos;s &ldquo;Agencies to Watch.&rdquo;</p>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="tl-year">2022</div>
        <div style={{position: "relative"}}>
          <div className="tl-dot"></div>
          <div className="tl-content" style={{paddingLeft: "1rem"}}>
            <h4>500 Books & a Refined Process</h4>
            <p>After 500 manuscripts, our Writer Match system is refined into the industry&apos;s most accurate genre-and-voice pairing process. 97% of clients report their writer felt &ldquo;exactly right.&rdquo;</p>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="tl-year">Today</div>
        <div style={{position: "relative"}}>
          <div className="tl-dot" style={{background: "var(--orange-dark)"}}></div>
          <div className="tl-content" style={{paddingLeft: "1rem"}}>
            <h4>Your Partner for Whatever Comes Next</h4>
            <p>With a growing team of 40+ specialists and an unblemished record of client confidentiality, we&apos;re ready to help you write — and publish — the book you&apos;ve been putting off.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*TEAM */}
<section className="section">
  <div className="container">
    <div className="section-head center reveal">
      <p className="eyebrow">The Team</p>
      <h2>Real Writers. Real Editors. Real Results.</h2>
      <p className="lede">Our writers aren&apos;t temps or freelancers who take any project. They specialize deeply in 1–2 genres so your voice is always in expert hands.</p>
    </div>
    <div className="team-grid">
      <div className="team-card reveal">
        <div className="team-card__avatar">MR</div>
        <div className="team-card__body">
          <div className="team-card__name">Marcus Reynolds</div>
          <div className="team-card__role">Lead Ghostwriter — Nonfiction</div>
          <p className="team-card__bio">Former journalist with 15 years in long-form narrative. Specializes in business, memoir, and self-help. Has ghostwritten 4 New York Times–listed titles.</p>
        </div>
      </div>
      <div className="team-card reveal">
        <div className="team-card__avatar">SL</div>
        <div className="team-card__body">
          <div className="team-card__name">Sofia Lara</div>
          <div className="team-card__role">Senior Writer — Fiction &amp; Romance</div>
          <p className="team-card__bio">MFA in Creative Writing (Iowa). Published author under her own name with 3 novels. Brings both structural rigor and emotional depth to every story she touches.</p>
        </div>
      </div>
      <div className="team-card reveal">
        <div className="team-card__avatar">DK</div>
        <div className="team-card__body">
          <div className="team-card__name">Daniel Koh</div>
          <div className="team-card__role">Editor-in-Chief</div>
          <p className="team-card__bio">20 years in publishing as a developmental and line editor. Worked with imprints at Penguin Random House and HarperCollins before joining Book Writing.</p>
        </div>
      </div>
      <div className="team-card reveal">
        <div className="team-card__avatar">AT</div>
        <div className="team-card__body">
          <div className="team-card__name">Amara Tanaka</div>
          <div className="team-card__role">Writer — Thrillers &amp; Mystery</div>
          <p className="team-card__bio">Former crime reporter turned novelist. Understands plot pacing, red herrings, and the art of the satisfying reveal better than anyone on our team.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*WHY US */}
<section className="section section--cream">
  <div className="container">
    <div className="section-head center reveal">
      <p className="eyebrow">Why Choose Us</p>
      <h2>The Numbers Behind Every Book We Write</h2>
    </div>
    <div className="why-grid">
      <div className="why-card reveal">
        <div className="why-card__num">97%</div>
        <h3>Client Satisfaction Rate</h3>
        <p>Nearly every author who works with us says they&apos;d recommend us to a friend — and most come back for a second book.</p>
      </div>
      <div className="why-card reveal">
        <div className="why-card__num">500+</div>
        <h3>Books Completed to Date</h3>
        <p>Across fiction, nonfiction, memoir, business, self-help, romance, thriller, and more. If it has a genre, we&apos;ve written it well.</p>
      </div>
      <div className="why-card reveal">
        <div className="why-card__num">100%</div>
        <h3>Author Ownership Guaranteed</h3>
        <p>You own every word. Every chapter. Every royalty. Our writers work under full transfer-of-rights agreements, no exceptions.</p>
      </div>
    </div>
  </div>
</section>

{/*CTA BANNER */}
<section className="section section--tight">
  <div className="container">
    <div className="cta-banner reveal">
      <div>
        <p className="eyebrow">Ready to Start?</p>
        <h2>Let&apos;s Write Your Book Together</h2>
        <p>Tell us about your idea. We&apos;ll match you with the right writer, walk you through the process, and give you a free consultation — no pressure, no obligation.</p>
        <div className="cta-row">
          <Link href="/contact" className="btn btn--primary">Get a Free Consultation <svg><use href="#i-arrow-right"></use></svg></Link>
          <Link href="/case-studies" className="btn btn--ghost-light">Read Success Stories</Link>
        </div>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <svg style={{width: "180px", height: "180px", color: "rgba(64,190,226,.25)"}} aria-hidden="true"><use href="#i-book-open"></use></svg>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
