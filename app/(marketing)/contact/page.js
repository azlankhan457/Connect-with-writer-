import MultiStepContactForm from "@/components/MultiStepContactForm";
import FaqGrid from "@/components/FaqGrid";

const CONTACT_FAQS = [
  {
    q: "How does the free consultation work?",
    a: "It's a 30-minute call with one of our senior writer consultants. We'll ask about your idea, your goals, and what kind of support you're looking for. You'll also get a chance to ask us anything. No pitch, no pressure \u2014 just a genuine conversation to see if we're a good fit.",
  },
  {
    q: "Is my idea confidential before I sign anything?",
    a: "Absolutely. Everything you share with us is treated as confidential from the first interaction. If you'd like a formal NDA before the consultation, just ask and we'll send one immediately.",
  },
  {
    q: "How long does a ghostwriting project typically take?",
    a: "Most full-length books (60,000\u201390,000 words) take between 4 and 9 months depending on your availability for interviews, the complexity of the topic, and how many revision rounds are needed. We'll give you a clear timeline estimate after the consultation.",
  },
  {
    q: "Do I need to have a complete idea before contacting you?",
    a: "Not at all. Many of our best projects started with \u201cI know I have a book in me, but I don't know exactly what it is yet.\u201d Part of our process is helping you clarify and shape your idea into a compelling concept.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "A real human being on our team reads your message, reviews your project details, and reaches out within 24 hours via email (or phone if you prefer). We match you with the consultant best suited to your genre before we get on a call.",
  },
  {
    q: "Who owns the copyright to the finished book?",
    a: "You do \u2014 100%. Our writers work under a full work-for-hire agreement. You own every word, every chapter, and all rights to the manuscript from the moment we deliver it. There are no royalty claims or ongoing obligations on our end.",
  },
];

export default function Page() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal">
            <p className="eyebrow">Get In Touch</p>
            <h1>Let&apos;s Talk About Your Book</h1>
            <p className="lede">
              Whether you have a fully formed idea or just a feeling that there&apos;s a book somewhere inside you
              — we&apos;re ready to listen. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <svg>
                  <use href="#i-lock"></use>
                </svg>
                100% Confidential
              </div>
              <div className="trust-badge">
                <svg>
                  <use href="#i-clock"></use>
                </svg>
                Response Within 24 hrs
              </div>
              <div className="trust-badge">
                <svg>
                  <use href="#i-check"></use>
                </svg>
                Free Consultation
              </div>
              <div className="trust-badge">
                <svg>
                  <use href="#i-shield"></use>
                </svg>
                NDA Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section section--tight">
        <div className="container">
          <div className="contact-layout">
            {/* LEFT: Info */}
            <div className="reveal">
              <div className="contact-info-card">
                <p className="eyebrow">Contact Details</p>
                <h2>We&apos;re Here When You&apos;re Ready</h2>
                <p className="lede">
                  Reach us by phone, email, or the form. Every inquiry is handled personally — you&apos;ll
                  never get a bot response.
                </p>

                <div className="contact-detail-list">
                  <div className="contact-detail">
                    <div className="contact-detail__icon">
                      <svg>
                        <use href="#i-phone"></use>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-detail__label">Call Us</div>
                      <div className="contact-detail__value">
                        <a href="tel:+18558886875">(855) 888-6875</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail__icon">
                      <svg>
                        <use href="#i-mail"></use>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-detail__label">Email Us</div>
                      <div className="contact-detail__value">
                        <a href="mailto:hello@bookwriting.com">hello@bookwriting.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail__icon">
                      <svg>
                        <use href="#i-pin"></use>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-detail__label">Mailing Address</div>
                      <div className="contact-detail__value">
                        123 Author Lane, Suite 200
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hours-block">
                  <h4>Office Hours</h4>
                  <div className="hours-row">
                    <span>Monday – Friday</span>
                    <span>9:00 AM – 6:00 PM EST</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday</span>
                    <span>10:00 AM – 2:00 PM EST</span>
                  </div>
                  <div className="hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: ".82rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    color: "rgba(255,255,255,.4)",
                    marginBottom: ".8rem",
                  }}
                >
                  Follow Us
                </p>
                <div className="social-row">
                  <a aria-label="Facebook" href="https://www.facebook.com/bookwriting">
                    <svg>
                      <use href="#i-facebook"></use>
                    </svg>
                  </a>
                  <a aria-label="Instagram" href="https://www.instagram.com/bookwriting">
                    <svg>
                      <use href="#i-instagram"></use>
                    </svg>
                  </a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/company/bookwriting">
                    <svg>
                      <use href="#i-linkedin"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="reveal">
              <MultiStepContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">Common Questions</p>
            <h2>Before You Reach Out, You Might Want to Know…</h2>
          </div>
          <FaqGrid items={CONTACT_FAQS} />
        </div>
      </section>
    </>
  );
}
