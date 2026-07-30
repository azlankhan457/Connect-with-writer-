export const blogPosts = [
  {
    slug: "how-to-choose-a-ghostwriter",
    title: "How to Choose a Ghostwriter Without Losing Your Voice",
    excerpt:
      "A practical guide to evaluating ghostwriters, asking the right questions, and protecting your authorial voice before you sign a contract.",
    category: "Writing",
    date: "2026-07-10",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Choosing a ghostwriter is less about finding the flashiest portfolio and more about finding a collaborator who can translate your ideas into language that feels unmistakably yours.",
      "Start by clarifying your goals. Are you looking for a polished memoir, a business book, or a novel with a strong commercial hook? The process of evaluating fit becomes much easier once you know what outcome you want.",
      "During the discovery phase, ask how the writer handles interviews, research, revisions, and voice capture. A strong ghostwriter should be able to explain how they turn your notes and stories into a manuscript that still sounds like you.",
      "Finally, review the working agreement carefully. Ownership, confidentiality, revision rounds, communication cadence, and publishing support are all worth clarifying before the first draft begins.",
    ],
  },
  {
    slug: "book-outline-template",
    title: "A Simple Book Outline Template for First-Time Authors",
    excerpt:
      "Use this chapter-by-chapter structure to turn an idea into a clear, buildable outline before you start drafting.",
    category: "Planning",
    date: "2026-06-24",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Many authors stall because they begin drafting before they have structure. A book outline gives you a map, helps you pace the story, and makes revisions less overwhelming.",
      "Begin with a one-sentence promise: what will the reader gain from finishing this book? Then map the story or argument into three sections: setup, development, and payoff.",
      "For nonfiction, use chapter goals and proof points. For fiction, define key turning points, emotional beats, and character arcs. Keep the outline detailed enough to guide the draft but flexible enough to change as the book evolves.",
      "A strong outline is not a cage; it is a decision-making tool that keeps momentum high.",
    ],
  },
  {
    slug: "self-publishing-vs-traditional",
    title: "Self-Publishing vs. Traditional Publishing: What Matters Most",
    excerpt:
      "Compare the tradeoffs between self-publishing and traditional publishing so you can choose the path that fits your goals.",
    category: "Publishing",
    date: "2026-06-08",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Both self-publishing and traditional publishing can lead to a successful book, but the right path depends on your budget, timeline, and control preferences.",
      "Traditional publishing can bring editorial support, distribution, and prestige, but it often means less control over schedule and marketing. Self-publishing offers more autonomy and faster time to market, but requires more direct responsibility for production and promotion.",
      "If your priority is speed, ownership, and direct audience connection, self-publishing may be the better fit. If you want a publishing team to handle much of the production and distribution, traditional publishing remains attractive.",
      "In either case, a clear publishing plan makes the difference between a book that launches well and one that never reaches the audience it deserves.",
    ],
  },
  {
    slug: "how-to-revise-a-manuscript",
    title: "How to Revise a Manuscript Without Losing the Spark",
    excerpt:
      "Revision is where good books become great. Learn a simple process for cutting clutter while keeping the voice intact.",
    category: "Editing",
    date: "2026-05-19",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The first draft usually contains too much explanation and too little precision. Revision is where you make the book feel inevitable rather than merely complete.",
      "Start by reading for structure. Does the story or argument move clearly from opening to conclusion? Are there sections that repeat points that could be merged or cut?",
      "Then read for voice. Keep the sentences that carry emotional texture, rhythm, and specificity. Remove generic phrasing that weakens the prose.",
      "Finally, revise for the reader's experience. Each chapter should move the book forward, sharpen the stakes, or deepen the emotional payoff.",
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPosts() {
  return blogPosts;
}
