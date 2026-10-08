import { getBlogPosts } from "@/lib/blog/posts";

const ROUTES = [
  "",
  "about-us",
  "services",
  "book-writing",
  "book-editing",
  "proofreading",
  "book-publishing",
  "childrens-book-publication",
  "childrens-book-illustration",
  "book-cover-design",
  "book-marketing",
  "case-studies",
  "blog",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "sitemap",
];

export default function sitemap() {
  const base = "https://www.connectwithwriter.com";
  const now = new Date();

  const blogRoutes = getBlogPosts().map((post) => `blog/${post.slug}`);

  return [...ROUTES, ...blogRoutes].map((route) => ({
    url: `${base}/${route}`,
    lastModified: now,
  }));
}
