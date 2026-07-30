import Link from "next/link";
import { getBlogPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Blog",
  description:
    "Helpful articles and practical guides for authors, ghostwriters, and publishing teams.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main
      id="main"
      className="container"
      style={{ paddingBlock: "clamp(72px, 10vw, 120px)" }}
    >
      <section
        className="page-hero"
        style={{
          marginBottom: "2.4rem",
          borderRadius: "24px",
          padding: "clamp(32px, 6vw, 56px)",
        }}
      >
        <div className="page-hero-inner">
          <p className="eyebrow">From the Blog</p>
          <h1>
            Practical advice for authors who want to write, publish, and grow
            with confidence.
          </h1>
          <p className="lede">
            These starter posts cover writing, editing, publishing, and the
            decisions that matter most as your book comes to life.
          </p>
        </div>
      </section>

      <section
        className="blog-grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div
              className="blog-card__media"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="blog-card__body">
              <span className="blog-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>
                  {new Date(post.date).toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link className="read-more" href={`/blog/${post.slug}`}>
                  Read more
                  <svg>
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
