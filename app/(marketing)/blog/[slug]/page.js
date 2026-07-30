import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog/posts";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main
      id="main"
      className="container"
      style={{ paddingBlock: "clamp(72px, 10vw, 120px)" }}
    >
      <article
        className="blog-post"
        style={{ maxWidth: "780px", margin: "0 auto" }}
      >
        <Link
          className="auth-link"
          href="/blog"
          style={{ marginBottom: "1rem", display: "inline-flex" }}
        >
          ← Back to blog
        </Link>
        <p className="eyebrow">{post.category}</p>
        <h1 style={{ marginBottom: "0.8rem" }}>{post.title}</h1>
        <p className="lede" style={{ marginBottom: "2rem" }}>
          {post.excerpt}
        </p>
        <div
          className="blog-post__hero"
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <img
            alt={post.title}
            src={post.image}
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />
        </div>
        <div style={{ display: "grid", gap: "1rem", color: "var(--ink-soft)" }}>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
