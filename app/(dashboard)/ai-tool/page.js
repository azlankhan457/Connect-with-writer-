import OutlineBuilder from "@/components/dashboard/OutlineBuilder";
import PreviewNotice from "@/components/dashboard/PreviewNotice";

export const metadata = { title: "Chapter Writer" };

export default function AiToolPage() {
  return (
    <>
      <div className="app-header app-header--center">
        <h1>Write Chapters With AI</h1>
        <p>
          Turn a chapter title and outline into a long, engaging scene in your
          book&apos;s voice.
        </p>
      </div>

      <div className="app-card app-card--form">
        <PreviewNotice />
        <form noValidate>
          <div className="app-field">
            <label htmlFor="tool-lang">Language</label>
            <div className="select-wrap">
              <select defaultValue="English (US)" id="tool-lang">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <svg aria-hidden="true">
                <use href="#i-chevron-down"></use>
              </svg>
            </div>
          </div>
          <div className="app-field">
            <label htmlFor="tool-title">Chapter Title *</label>
            <input
              id="tool-title"
              placeholder="e.g. Chapter 1 — The Long Way Home"
              type="text"
            />
          </div>
          <div className="app-field">
            <label htmlFor="tool-keywords">
              Focus Elements{" "}
              <span className="hint">(separated with a comma)</span>
            </label>
            <input
              id="tool-keywords"
              placeholder="Add a character, setting, or plot beat"
              type="text"
            />
          </div>

          <OutlineBuilder placeholderPrefix="Beat" />

          <div className="form-actions">
            <button className="app-btn app-btn--dark" disabled type="submit">
              Write Chapter · Coming soon
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
