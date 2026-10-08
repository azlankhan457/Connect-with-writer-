import Link from "next/link";
import PreviewNotice from "@/components/dashboard/PreviewNotice";

export const metadata = { title: "Usage" };

export default function Page() {
  return (
    <>
<div className="app-header">
<h1>Usage</h1>
<p>Review your usage (and your team&apos;s usage) for the current billing cycle.</p>
</div>
<div className="app-card">
<PreviewNotice>Usage tracking isn&apos;t live yet. The figures below are placeholders.</PreviewNotice>
<div className="app-card__head">
<h2>Available Credits</h2>
<span className="app-card__sub">Current billing cycle: Free trial</span>
</div>
<div className="stat-row">
<div className="stat-box">
<div className="stat-box__label">Words left <svg><use href="#i-help-circle"></use></svg></div>
<div className="stat-box__value">1,500 <small>/ 1,500</small></div>
</div>
<div className="stat-box">
<div className="stat-box__label">Free Plagiarism Credits <svg><use href="#i-help-circle"></use></svg></div>
<div className="stat-box__value">0%</div>
</div>
<div className="stat-box">
<div className="stat-box__label">Extra Plagiarism Credits <svg><use href="#i-help-circle"></use></svg></div>
<div className="stat-box__value">0</div>
</div>
</div>
<div className="stat-section-label">Total Usage</div>
<p className="stat-section-desc">Review your total usage across the platform since you registered.</p>
<div className="stat-row">
<div className="stat-box">
<div className="stat-box__label">Words generated <svg><use href="#i-trending-up"></use></svg></div>
<div className="stat-box__value">0</div>
</div>
<div className="stat-box">
<div className="stat-box__label">Chapters generated <svg><use href="#i-book-open"></use></svg></div>
<div className="stat-box__value">0</div>
</div>
<div className="stat-box">
<div className="stat-box__label">Tools used <svg><use href="#i-grid"></use></svg></div>
<div className="stat-box__value">0</div>
</div>
</div>
</div>
<div className="app-card">
<div className="app-card__head"><h2>Need More Words?</h2></div>
<div className="upsell-banner upsell-banner--flush">
<p>Paid plans aren&apos;t available yet. Get in touch and we&apos;ll let you know when they are.</p>
<Link className="app-btn app-btn--dark" href="/contact"><svg aria-hidden="true" className="app-btn__icon"><use href="#i-zap"></use></svg>Contact us</Link>
</div>
</div>
    </>
  );
}
