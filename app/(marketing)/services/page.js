import Link from "next/link";
import BookCover from "@/components/BookCover";

export const metadata = {
  title: "Our Services",
  description:
    "Writing, editing, proofreading, publishing, illustration, cover design and marketing for authors, all in one place.",
};

const SERVICES = [
  {
    icon: "i-pen",
    title: "Book Writing",
    text: "From first outline to final proofread, our professional ghostwriters and editors craft fiction, memoirs, and nonfiction books that sound exactly like you — while you keep 100% of the rights, royalties, and credit.",
    href: "/book-writing",
  },
  {
    icon: "i-edit",
    title: "Book Editing",
    text: "Our developmental editors and line editors sharpen structure, pacing, characters, and prose — so your manuscript is ready for agents, readers, or publication, without losing your voice.",
    href: "/book-editing",
  },
  {
    icon: "i-search",
    title: "Proofreading",
    text: "After the editing is done, our proofreaders comb every page for typos, grammar slips, punctuation errors, and formatting inconsistencies — the final quality check before your book goes to print or upload.",
    href: "/proofreading",
  },
  {
    icon: "i-rocket",
    title: "Book Publishing",
    text: "Whether you’re self-publishing or pursuing a traditional deal, our team handles ISBN registration, distribution setup, formatting, and submission strategy — so your finished book actually reaches readers.",
    href: "/book-publishing",
  },
  {
    icon: "i-book-open",
    title: "Children’s Book Publication",
    text: "From manuscript to printed picture book, we handle age-appropriate editing, illustration coordination, formatting, and distribution — so your children’s story ends up in small hands, not just a drawer.",
    href: "/childrens-book-publication",
  },
  {
    icon: "i-palette",
    title: "Children’s Book Illustration",
    text: "Our illustrators design characters, build full-spread scenes, and paint covers that match your story’s tone and age band — turning your manuscript into a book kids actually want to hold.",
    href: "/childrens-book-illustration",
  },
  {
    icon: "i-layout",
    title: "Book Cover Design",
    text: "Our designers build genre-matched, retail-ready covers for print, eBook, and audiobook editions — the kind of cover that sells your book in the first two seconds a reader sees it.",
    href: "/book-cover-design",
  },
  {
    icon: "i-megaphone",
    title: "Book Marketing",
    text: "Publishing your book is only half the job. Our marketing team builds Amazon optimization, ARC reader campaigns, social content, and launch PR strategies that put your book in front of the readers who’ll actually love it.",
    href: "/book-marketing",
  },
];

const COLLAGE_GENRES = ["Memoir", "Fiction", "Thriller", "Business", "Self-Help"];

export default function Page() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__copy reveal">
          <p className="eyebrow">Everything Authors Need, In One Place</p>
          <h1>Our Services</h1>
          <p className="lede">
            From a blank page to a book on the shelf — writing, editing,
            proofreading, publishing, illustration, cover design, and marketing,
            all under one roof.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="service-grid service-grid--three">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.href}>
                <div className="service-card__icon">
                  <svg aria-hidden="true">
                    <use href={`#${service.icon}`}></use>
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="cta-row service-card__cta">
                  <Link href={service.href} className="btn btn--ghost-dark btn--sm">
                    Learn More
                    <svg aria-hidden="true">
                      <use href="#i-arrow-right"></use>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
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
              <p>
                Every project is different. Book a free consultation and
                we&apos;ll help you figure out exactly which services your book
                needs, in what order.
              </p>
              <div className="cta-row">
                <Link href="/contact" className="btn btn--primary">
                  Get a Free Consultation
                  <svg aria-hidden="true">
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="cta2-collage" aria-hidden="true">
              {COLLAGE_GENRES.map((genre) => (
                <BookCover
                  genre={genre}
                  key={genre}
                  title={`${genre} services sample`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
