import SettingsForm from "@/components/dashboard/SettingsForm";
import OutlineBuilder from "@/components/dashboard/OutlineBuilder";

export default function AiToolPage() {
  return (
    <>
      <div className="app-header" style={{ textAlign: "center", maxWidth: "640px", marginInline: "auto" }}>
        <h1 style={{ fontSize: "clamp(1.7rem,2.6vw,2.3rem)" }}>Write Chapters With AI</h1>
        <p style={{ marginInline: "auto" }}>Turn a chapter title and outline into a long, engaging scene in your book&apos;s voice.</p>
      </div>

      <div className="upsell-banner">
        <p>Would you like to try the new version, which includes advanced outline writing, maximum word count, and more?</p>
        <a className="app-btn app-btn--dark" href="#">
          Try New Version
        </a>
      </div>

      <div className="app-card" style={{ maxWidth: "900px", marginInline: "auto" }}>
        <SettingsForm>
          {({ isSaved }) => (
            <>
              <div className="app-field">
                <label htmlFor="tool-lang">Language</label>
                <div className="select-wrap">
                  <select defaultValue="🇺🇸 English (US)" id="tool-lang">
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
                <label htmlFor="tool-title">Chapter Title *</label>
                <input id="tool-title" placeholder="e.g. Chapter 1 — The Long Way Home" type="text" />
              </div>
              <div className="app-field">
                <label htmlFor="tool-keywords">
                  Focus Elements <span className="hint">(separated with a comma)</span>
                </label>
                <input id="tool-keywords" placeholder="Add a character, setting, or plot beat" type="text" />
              </div>

              <OutlineBuilder placeholderPrefix="Beat" />

              <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
                <button className="app-btn app-btn--dark" style={{ padding: ".9rem 2.4rem" }} type="submit">
                  {isSaved ? "Saved ✓" : "Write Chapter"}
                </button>
              </div>
            </>
          )}
        </SettingsForm>
      </div>
    </>
  );
}
