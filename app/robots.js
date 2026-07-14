export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.bookwriting.com/sitemap.xml",
  };
}
