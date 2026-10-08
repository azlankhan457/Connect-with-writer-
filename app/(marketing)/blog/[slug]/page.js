import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import BookCover from "@/components/BookCover";
import {
  formatPostDate,
  getBlogPostBySlug,
  getBlogPosts,
  getReadingTime,
  getRelatedPosts,
} from "@/lib/blog/posts";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="about-hero">
        <div className="container blog-post__head reveal">
          <Link className="blog-post__back" href="/blog">
            <svg aria-hidden="true">
              <use href="#i-arrow-left"></use>
            </svg>
            Back to blog
          </Link>
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
          <p className="blog-post__meta">
            {formatPostDate(post.date)} · {getReadingTime(post)} min read
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <article className="blog-post">
            <figure className="blog-post__cover">
              <BookCover
                genre={post.genre}
                title={post.title}
                className="blog-post__book"
              />
            </figure>
            <div className="blog-post__body">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner">
            <div>
              <p className="eyebrow">Talk it through</p>
              <h2>Have a question about your own book?</h2>
              <p>
                Tell us where you are in the process and we&apos;ll suggest a
                sensible next step, without pressure.
              </p>
              <div className="cta-row">
                <Link className="btn btn--primary" href="/contact">
                  Get a Free Consultation
                  <svg aria-hidden="true">
                    <use href="#i-arrow-right"></use>
                  </svg>
                </Link>
                <Link className="btn btn--ghost-light" href="/case-studies">
                  See how we work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Keep reading</p>
            <h2>More from the blog</h2>
          </div>
          <div className="blog-grid">
            {getRelatedPosts(post.slug).map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
