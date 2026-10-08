import Link from "next/link";
import BookCover from "@/components/BookCover";
import { formatPostDate, getReadingTime } from "@/lib/blog/posts";

export default function BlogCard({ post, featured = false }) {
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <div className="blog-card__media blog-card__media--cover">
        <BookCover
          genre={post.genre}
          title={post.title}
          className="blog-card__book"
        />
      </div>
      <div className="blog-card__body">
        <span className="blog-tag">{post.category}</span>
        <h3>
          <Link className="blog-card__link" href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="blog-meta">
          <span>
            {formatPostDate(post.date)} · {getReadingTime(post)} min read
          </span>
          <span className="read-more" aria-hidden="true">
            Read article
            <svg>
              <use href="#i-arrow-right"></use>
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
