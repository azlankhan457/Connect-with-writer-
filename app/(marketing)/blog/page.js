import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Blog",
  description:
    "Helpful articles and practical guides for authors on writing, planning, editing and publishing a book.",
};

export default function BlogPage() {
  const [featured, ...rest] = getBlogPosts();

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__copy reveal">
          <p className="eyebrow">From the Blog</p>
          <h1>
            Practical advice for authors who want to write, publish and grow
            with confidence.
          </h1>
          <p className="lede">
            Short, plain-language guides on writing, planning, editing and
            publishing, for the decisions that matter most as your book comes
            to life.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <BlogCard post={featured} featured />
          <div className="blog-grid blog-grid--spaced">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
