import Link from "next/link";

export default function Page() {
  return (
    <>
<div className="app-header">
<h1>Usage</h1>
<p>Review your usage (and your team&apos;s usage) for the current billing cycle.</p>
</div>
<div className="app-card">
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
<div className="upsell-banner" style={{marginBottom: "0"}}>
<p>Upgrade your plan to unlock unlimited words, priority support, and full access to every writing tool.</p>
<Link className="app-btn app-btn--dark" href="/account-settings"><svg style={{width: "16px", height: "16px"}}><use href="#i-zap"></use></svg>Upgrade Now</Link>
</div>
</div>
    </>
  );
}
