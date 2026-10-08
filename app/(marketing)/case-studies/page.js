import Link from "next/link";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import BookCover from "@/components/BookCover";
import { CASE_STUDIES } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies | Connect with Writer",
  description:
    "See how Connect with Writer approaches memoir, fiction, business, self-help and thriller projects, from first idea to finished book.",
};

const COVERS = ["Memoir", "Fiction", "Business", "Self-Help", "Thriller"];

export default function Page() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy reveal">
            <p className="eyebrow">Case Studies</p>
            <h1>How we approach every kind of book.</h1>
            <p className="lede">
              Each profile below shows a common author situation and the way
              we work through it, from the first conversation to a finished
              manuscript. Filter by genre to see the ones closest to your
              own project.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn btn--primary">
                Browse project profiles
                <svg aria-hidden="true">
                  <use href="#i-arrow-right"></use>
                </svg>
              </a>
              <Link href="/contact" className="btn btn--ghost-dark">
                Talk to us
              </Link>
            </div>
          </div>
          <ul className="cs-hero-covers reveal" aria-label="Sample covers by genre">
            {COVERS.map((genre) => (
              <li key={genre}>
                <BookCover genre={genre} title={`${genre} hero sample`} className="cs-hero-covers__book" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--cream" id="projects">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Project profiles</p>
            <h2>Across every genre and every kind of author.</h2>
            <p className="lede">
              These profiles illustrate how we work. Client details stay
              private, and the covers shown are samples from our portfolio.
            </p>
          </div>
          <CaseStudyGrid items={CASE_STUDIES} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner reveal">
            <div>
              <p className="eyebrow">Your story is next</p>
              <h2>Have a book in mind? Let&apos;s talk it through.</h2>
              <p>
                Tell us where you are, whether that&apos;s an idea, a draft or
                a finished manuscript, and we&apos;ll suggest a sensible next
                step. No pressure.
              </p>
              <div className="cta-row">
                <Link className="btn btn--primary" href="/contact">
                  Get a Free Consultation
                  <svg aria-hidden="true">
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
                <Link className="btn btn--ghost-light" href="/book-writing">
                  Explore our services
                </Link>
              </div>
            </div>
            <div className="cta-banner__art">
              <BookCover genre="Memoir" title="Memoir closing sample" className="about-cta__book" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
