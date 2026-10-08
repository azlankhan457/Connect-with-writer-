export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/login",
        "/signup",
        "/verify",
        "/dashboard",
        "/my-content",
        "/team",
        "/ai-tool",
        "/all-tools",
        "/api-keys",
        "/ai-book-writer",
        "/usage",
        "/account-settings",
      ],
    },
    sitemap: "https://www.connectwithwriter.com/sitemap.xml",
  };
}
