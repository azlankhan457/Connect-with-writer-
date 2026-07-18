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
  "contact",
  "privacy-policy",
  "terms-of-service",
  "sitemap",
];

export default function sitemap() {
  const base = "https://www.connectwithwriter.com";
  const now = new Date();

  return ROUTES.map((route) => ({
    url: `${base}/${route}`,
    lastModified: now,
  }));
}
