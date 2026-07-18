import ToolsExplorer from "@/components/dashboard/ToolsExplorer";

const TOOLS = [
  { name: "Chapter Writer", category: "writing", href: "/ai-tool", icon: "i-book-open", description: "Turn a title and an outline into a fully-structured, publish-ready chapter." },
  { name: "Full Book Writer", category: "writing", href: "/ai-book-writer", icon: "i-wand", description: "Generate a complete first draft from a title, genre, premise, and chapter outline." },
  { name: "Book Title Generator", category: "writing", href: "/ai-tool", icon: "i-bulb", description: "Generate genre-matched title options for any book idea, topic, or outline." },
  { name: "Character Bio Generator", category: "writing", href: "/ai-tool", icon: "i-users", description: "Build detailed character backstories, motivations, and voice notes in seconds." },
  { name: "Dialogue Writer", category: "writing", href: "/ai-tool", icon: "i-message", description: "Draft natural, character-consistent dialogue for any scene or situation." },
  { name: "Scene Expander", category: "writing", href: "/ai-tool", icon: "i-layout", description: "Turn a short scene summary into a fully written, sensory-rich passage." },
  { name: "Manuscript Rewriter", category: "editing", href: "/ai-tool", icon: "i-refresh", description: "Rewrite long-form chapters or passages in seconds to sharpen pacing and voice." },
  { name: "Line Edit Assistant", category: "editing", href: "/ai-tool", icon: "i-edit", description: "Get sentence-level suggestions for clarity, flow, and voice as you draft." },
  { name: "Plot Hole Checker", category: "editing", href: "/ai-tool", icon: "i-search", description: "Scan your manuscript for timeline inconsistencies and unresolved threads." },
  { name: "Blurb & Synopsis Writer", category: "publishing", href: "/ai-tool", icon: "i-pen", description: "Write a compelling back-cover blurb or query-letter synopsis with our guided writer." },
  { name: "Query Letter Writer", category: "publishing", href: "/ai-tool", icon: "i-mail", description: "Draft a polished agent query letter tailored to your manuscript and genre." },
  { name: "Author Bio Generator", category: "publishing", href: "/ai-tool", icon: "i-users", description: "Create a professional author bio for your book jacket, website, or press kit." },
  { name: "Book Description Writer", category: "marketing", href: "/ai-tool", icon: "i-layout", description: "Generate Amazon-ready book descriptions optimized for keywords and conversions." },
  { name: "Social Post Generator", category: "marketing", href: "/ai-tool", icon: "i-megaphone", description: "Create launch-week social captions and quote graphics text for your book." },
];

export default function AllToolsPage() {
  return (
    <>
      <div className="app-header">
        <h1>All Tools</h1>
        <p>Every AI writing tool in one place — search or filter by category to find what you need.</p>
      </div>
      <ToolsExplorer tools={TOOLS} />
    </>
  );
}
