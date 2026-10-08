import Link from "next/link";
import { getBlogPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Sitemap",
  description: "A list of every page on the Connect with Writer website.",
};

const GROUPS = [
  {
    title: "Company",
    links: [
      ["/", "Home"],
      ["/about-us", "About Us"],
      ["/case-studies", "Case Studies"],
      ["/contact", "Contact Us"],
    ],
  },
  {
    title: "Services",
    links: [
      ["/services", "Our Services"],
      ["/book-writing", "Book Writing"],
      ["/book-editing", "Book Editing"],
      ["/proofreading", "Proofreading"],
      ["/book-publishing", "Book Publishing"],
      ["/childrens-book-publication", "Children\u2019s Book Publication"],
      ["/childrens-book-illustration", "Children\u2019s Book Illustration"],
      ["/book-cover-design", "Book Cover Design"],
      ["/book-marketing", "Book Marketing"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy-policy", "Privacy Policy"],
      ["/terms-of-service", "Terms of Service"],
    ],
  },
];

export default function Page() {
  const groups = [
    GROUPS[0],
    GROUPS[1],
    {
      title: "Blog",
      links: [
        ["/blog", "All articles"],
        ...getBlogPosts().map((post) => [`/blog/${post.slug}`, post.title]),
      ],
    },
    GROUPS[2],
  ];

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__copy reveal">
          <p className="eyebrow">Site Navigation</p>
          <h1>Sitemap</h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container sitemap-grid">
          {groups.map((group) => (
            <nav aria-labelledby={`sm-${group.title}`} key={group.title}>
              <h2 id={`sm-${group.title}`}>{group.title}</h2>
              <ul>
                {group.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </>
  );
}
