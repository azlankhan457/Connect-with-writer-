/**
 * Project profiles shown on /case-studies.
 * Each one describes a common author situation and how we approach it.
 * No client names, quotes or performance numbers: add those here only
 * when a real client has approved them.
 */
export const CASE_FILTERS = ["All", "Memoir", "Fiction", "Business", "Self-Help", "Thriller"];

export const CASE_STUDIES = [
  {
    genre: "Memoir",
    title: "Turning a lived story into a clear narrative arc",
    challenge:
      "The author had a powerful personal story but no writing background, and found it hard to decide what belonged on the page and in what order.",
    approach: [
      "Guided interviews to draw out the key moments",
      "A chapter structure built around one clear through-line",
      "Line editing that kept the author's own voice",
    ],
    services: [
      { label: "Book Writing", href: "/book-writing" },
      { label: "Book Editing", href: "/book-editing" },
    ],
  },
  {
    genre: "Thriller",
    title: "From investigative notes to a page-turning novel",
    challenge:
      "The author had an authentic premise and plenty of procedural detail, but needed help building pacing and tension across a full-length story.",
    approach: [
      "Plot outline with clear turning points",
      "Pacing pass to keep chapters moving",
      "Consistency checks on timeline and detail",
    ],
    services: [
      { label: "Book Writing", href: "/book-writing" },
      { label: "Proofreading", href: "/proofreading" },
    ],
  },
  {
    genre: "Self-Help",
    title: "Making expert ideas accessible without oversimplifying",
    challenge:
      "The author had years of professional frameworks but struggled to explain them in a warm, practical way for a general reader.",
    approach: [
      "Reader-first outline of the core framework",
      "Examples and exercises written in plain language",
      "Developmental edit for clarity and flow",
    ],
    services: [
      { label: "Book Editing", href: "/book-editing" },
      { label: "Book Marketing", href: "/book-marketing" },
    ],
  },
  {
    genre: "Fiction",
    title: "Helping a first-time novelist finish the manuscript",
    challenge:
      "The author had a complete concept and a stack of handwritten notes, and needed structure and steady momentum to reach the final chapter.",
    approach: [
      "Story map built from the author's notes",
      "Draft support chapter by chapter",
      "Editing and proofreading before publication",
    ],
    services: [
      { label: "Book Writing", href: "/book-writing" },
      { label: "Book Publishing", href: "/book-publishing" },
    ],
  },
  {
    genre: "Business",
    title: "Capturing leadership experience in a structured book",
    challenge:
      "A busy professional had deep experience and little time to write, so the material needed to be gathered and organised efficiently.",
    approach: [
      "Interview-led content capture",
      "Chapter plan around the author's key ideas",
      "Cover and positioning that fit the audience",
    ],
    services: [
      { label: "Book Cover Design", href: "/book-cover-design" },
      { label: "Book Marketing", href: "/book-marketing" },
    ],
  },
];
