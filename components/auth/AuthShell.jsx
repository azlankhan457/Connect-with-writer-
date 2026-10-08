import Link from "next/link";
import BookCover from "@/components/BookCover";

const HIGHLIGHTS = [
  "Sign-in protected by an emailed verification code",
  "Your writing tools and projects in one dashboard",
  "Pick up exactly where you left off",
];

const SHELF = ["Memoir", "Fiction", "Business"];

export default function AuthShell({ visualTitle, visualSubtitle, children }) {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <div className="auth-visual__top">
          <svg aria-hidden="true" className="brand__mark auth-visual__mark">
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
          <ul className="auth-visual__points">
            {HIGHLIGHTS.map((point) => (
              <li key={point}>
                <svg aria-hidden="true">
                  <use href="#i-check-circle"></use>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div aria-hidden="true" className="auth-visual__shelf">
          {SHELF.map((genre) => (
            <BookCover
              className="auth-visual__book"
              genre={genre}
              key={genre}
              title={`${genre} sign-in sample`}
            />
          ))}
        </div>
      </div>
      <div className="auth-form-col">
        <div className="auth-form-wrap">
          <Link aria-label="Connect with Writer" className="brand" href="/">
            <svg aria-hidden="true" className="brand__mark">
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
