import MultiStepContactForm from "@/components/MultiStepContactForm";
import FaqGrid from "@/components/FaqGrid";

export const metadata = {
  title: "Contact Us",
  description:
    "Tell Connect with Writer about your book. Call, email or send the project form and our team will get back to you.",
};

const TRUST_BADGES = [
  { icon: "i-lock", label: "100% Confidential" },
  { icon: "i-clock", label: "Response Within 24 hrs" },
  { icon: "i-check", label: "Free Consultation" },
  { icon: "i-shield", label: "NDA Available" },
];

const CONTACT_DETAILS = [
  {
    icon: "i-phone",
    label: "Call Us",
    value: <a href="tel:+18558886875">(855) 888-6875</a>,
  },
  {
    icon: "i-mail",
    label: "Email Us",
    value: (
      <a href="mailto:hello@connectwithwriter.com">hello@connectwithwriter.com</a>
    ),
  },
  {
    icon: "i-pin",
    label: "Remote Consultations",
    value:
      "Available nationwide for virtual strategy calls and project planning.",
  },
];

const HOURS = [
  ["Monday \u2013 Friday", "9:00 AM \u2013 6:00 PM EST"],
  ["Saturday", "10:00 AM \u2013 2:00 PM EST"],
  ["Sunday", "Closed"],
];

const SOCIALS = [
  { icon: "i-facebook", label: "Facebook", href: "https://www.facebook.com/connectwithwriter" },
  { icon: "i-instagram", label: "Instagram", href: "https://www.instagram.com/connectwithwriter" },
  { icon: "i-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/connectwithwriter" },
];

const NEXT_STEPS = [
  ["Send your details", "Share a few details about you and your book."],
  ["We review your project", "Our team reads your message and looks at what you need."],
  ["We reach out", "We contact you to arrange a free consultation."],
];

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
      <section className="about-hero">
        <div className="container about-hero__copy reveal">
          <p className="eyebrow">Get In Touch</p>
          <h1>Let&apos;s Talk About Your Book</h1>
          <p className="lede">
            Whether you have a fully formed idea or just a feeling that
            there&apos;s a book somewhere inside you, we&apos;re ready to
            listen. Fill out the form and we&apos;ll get back to you within 24
            hours.
          </p>
          <ul className="trust-badges">
            {TRUST_BADGES.map((badge) => (
              <li className="trust-badge" key={badge.label}>
                <svg aria-hidden="true">
                  <use href={`#${badge.icon}`}></use>
                </svg>
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="contact-layout">
            <div className="reveal">
              <div className="contact-info-card">
                <p className="eyebrow">Contact Details</p>
                <h2>We&apos;re Here When You&apos;re Ready</h2>
                <p className="lede">
                  Reach us by phone, email, or the form. Every inquiry is
                  read by our team.
                </p>

                <div className="contact-detail-list">
                  {CONTACT_DETAILS.map((item) => (
                    <div className="contact-detail" key={item.label}>
                      <div className="contact-detail__icon">
                        <svg aria-hidden="true">
                          <use href={`#${item.icon}`}></use>
                        </svg>
                      </div>
                      <div>
                        <div className="contact-detail__label">{item.label}</div>
                        <div className="contact-detail__value">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hours-block">
                  <h4>Office Hours</h4>
                  {HOURS.map(([day, time]) => (
                    <div className="hours-row" key={day}>
                      <span>{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>

                <p className="contact-follow">Follow Us</p>
                <div className="social-row">
                  {SOCIALS.map((social) => (
                    <a
                      aria-label={social.label}
                      href={social.href}
                      key={social.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg aria-hidden="true">
                        <use href={`#${social.icon}`}></use>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal">
              <MultiStepContactForm />
              <ol className="contact-steps">
                {NEXT_STEPS.map(([title, text], index) => (
                  <li key={title}>
                    <span className="contact-steps__num">0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head center reveal">
            <p className="eyebrow">Common Questions</p>
            <h2>Before You Reach Out, You Might Want to Know&hellip;</h2>
          </div>
          <FaqGrid items={CONTACT_FAQS} />
        </div>
      </section>
    </>
  );
}
