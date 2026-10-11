import Link from "next/link";

export default function AuthShell({ visualTitle, visualSubtitle, children }) {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <div className="auth-visual__top">
          <svg className="brand__mark" style={{ width: "34px", height: "34px" }}>
            <use href="#i-book-mark"></use>
          </svg>
          <span className="brand__word">
            <b>Connect</b>
            <span>with Writer</span>
          </span>
        </div>
        <div className="auth-visual__mid">
          <h2>{visualTitle}</h2>
          <p>{visualSubtitle}</p>
        </div>
        <div className="auth-visual__stats">
          <div>
            <strong>1,200+</strong>
            <span>Books Delivered</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Average Rating</span>
          </div>
          <div>
            <strong>8</strong>
            <span>Writing Tools</span>
          </div>
        </div>
      </div>
      <div className="auth-form-col">
        <div className="auth-form-wrap">
          <Link aria-label="Connect with Writer" className="brand" href="/">
            <svg className="brand__mark">
              <use href="#i-book-mark"></use>
            </svg>
            <span className="brand__word">
              <b>Connect</b>
              <span>with Writer</span>
            </span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
