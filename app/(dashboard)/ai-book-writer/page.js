import SettingsForm from "@/components/dashboard/SettingsForm";
import OutlineBuilder from "@/components/dashboard/OutlineBuilder";

const AI_OUTLINE_SAMPLES = [
  "Introduce the protagonist and their ordinary world",
  "An inciting incident disrupts their routine",
  "The protagonist commits to the journey ahead",
  "A setback forces a change in approach",
  "The story builds toward its central turning point",
];

export default function AiBookWriterPage() {
  return (
    <>
      <div className="app-header" style={{ textAlign: "center", maxWidth: "680px", marginInline: "auto" }}>
        <p className="eyebrow" style={{ justifyContent: "center", color: "var(--orange-dark)", fontWeight: "800", fontSize: ".8rem", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".6rem" }}>
          Flagship Tool
        </p>
        <h1 style={{ fontSize: "clamp(1.8rem,2.8vw,2.4rem)" }}>Write Your Book With AI</h1>
        <p style={{ marginInline: "auto" }}>Turn a title, genre, and chapter outline into a full first draft — in your voice, ready for your editor.</p>
      </div>

      <div className="app-card" style={{ maxWidth: "960px", marginInline: "auto" }}>
        <SettingsForm>
          {({ isSaved }) => (
            <>
              <div className="field-grid-2">
                <div className="app-field">
                  <label htmlFor="bw-lang">Language</label>
                  <div className="select-wrap">
                    <select defaultValue="🇺🇸 English (US)" id="bw-lang">
                      <option>🇺🇸 English (US)</option>
                      <option>🇬🇧 English (UK)</option>
                      <option>🇪🇸 Spanish</option>
                      <option>🇫🇷 French</option>
                    </select>
                    <svg>
                      <use href="#i-chevron-down"></use>
                    </svg>
                  </div>
                </div>
                <div className="app-field">
                  <label htmlFor="bw-genre">Genre</label>
                  <div className="select-wrap">
                    <select defaultValue="Fiction — Thriller" id="bw-genre">
                      <option>Fiction — Thriller</option>
                      <option>Fiction — Romance</option>
                      <option>Fiction — Fantasy</option>
                      <option>Nonfiction — Memoir</option>
                      <option>Nonfiction — Business</option>
                      <option>Children&apos;s — Picture Book</option>
                    </select>
                    <svg>
                      <use href="#i-chevron-down"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="app-field">
                <label htmlFor="bw-title">Book Title *</label>
                <input id="bw-title" placeholder="e.g. The Quiet Years" type="text" />
              </div>

              <div className="field-grid-2">
                <div className="app-field">
                  <label htmlFor="bw-chapters">Number of Chapters</label>
                  <input id="bw-chapters" placeholder="e.g. 12" type="text" />
                </div>
                <div className="app-field">
                  <label htmlFor="bw-tone">Tone of Voice</label>
                  <div className="select-wrap">
                    <select defaultValue="Warm & Conversational" id="bw-tone">
                      <option>Warm &amp; Conversational</option>
                      <option>Literary &amp; Reflective</option>
                      <option>Fast-Paced &amp; Gripping</option>
                      <option>Formal &amp; Authoritative</option>
                    </select>
                    <svg>
                      <use href="#i-chevron-down"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="app-field">
                <label htmlFor="bw-premise">
                  Book Premise <span className="hint">(a few sentences about what it&apos;s about)</span>
                </label>
                <textarea
                  id="bw-premise"
                  placeholder="e.g. A retired lighthouse keeper reconnects with her estranged daughter over one final summer on the coast."
                  rows={3}
                />
              </div>

              <OutlineBuilder
                aiFillLabel="Write the outline with AI"
                aiFillSamples={AI_OUTLINE_SAMPLES}
                allowRemove
                initialRows={[
                  { id: "seed-1", value: "" },
                  { id: "seed-2", value: "" },
                ]}
                placeholderPrefix="Chapter"
              />

              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <button className="app-btn app-btn--dark" style={{ padding: ".95rem 2.6rem" }} type="submit">
                  {isSaved ? "Saved ✓" : "Write My Book"}
                </button>
                <p style={{ fontSize: ".8rem", color: "var(--ink-faint)", marginTop: ".8rem" }}>
                  This will use approximately 1,200 words from your plan.
                </p>
              </div>
            </>
          )}
        </SettingsForm>
      </div>
    </>
  );
}
