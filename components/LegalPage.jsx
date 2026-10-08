import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function LegalPage({ title, intro, sections, current }) {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__copy reveal">
          <p className="eyebrow">Legal</p>
          <h1>{title}</h1>
          <p className="lede">{intro}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container legal">
          <div className="legal__body">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </section>
            ))}
            <p>
              <strong>Contact.</strong> Questions can be directed to{" "}
              <a href="mailto:hello@connectwithwriter.com">
                hello@connectwithwriter.com
              </a>
              .
            </p>
          </div>
          <nav aria-label="Legal pages" className="legal__nav">
            {LEGAL_LINKS.filter((link) => link.href !== current).map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
                <svg aria-hidden="true">
                  <use href="#i-arrow-right"></use>
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
