import Link from "next/link";

export default function NotFoundContent() {
  return (
    <section className="about-hero not-found">
      <div className="container about-hero__copy">
        <p className="eyebrow">Error 404</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="lede">
          The link may be old or mistyped. Here are a few good places to
          continue from.
        </p>
        <div className="cta-row">
          <Link href="/" className="btn btn--primary">
            Back to home
            <svg aria-hidden="true">
              <use href="#i-arrow-right"></use>
            </svg>
          </Link>
          <Link href="/services" className="btn btn--ghost-dark">
            Our services
          </Link>
          <Link href="/blog" className="btn btn--ghost-dark">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
