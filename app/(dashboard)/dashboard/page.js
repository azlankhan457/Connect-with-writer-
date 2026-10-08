import Link from "next/link";
import AssistantWidget from "@/components/ai/AssistantWidget";
import { getSessionUser } from "@/lib/session";
import { STARTER_TOOL_NAMES, TOOLS } from "@/lib/dashboardTools";

const STARTER_TOOLS = STARTER_TOOL_NAMES.map((name) =>
  TOOLS.find((tool) => tool.name === name),
);

export default async function DashboardPage() {
  const user = await getSessionUser();
  const firstName = (user?.name || user?.email || "there").split(/[\s@]/)[0];

  return (
    <>
      <div className="app-header app-header--greet">
        <h1>
          <span className="wave">👋</span> Hey {firstName}{" "}
          <span className="dim">
            — Let&apos;s start your next chapter today!
          </span>
        </h1>
      </div>
      <div className="app-card">
        <AssistantWidget title="Write support assistant" compact />
      </div>
      <div className="app-card">
        <div className="tool-scroll-head">
          <div>
            <h2>Tools to Start With</h2>
            <p>
              A good place to start. Give them a try!
            </p>
          </div>
          <Link className="tool-all-link" href="/all-tools">
            All Tools{" "}
            <svg>
              <use href="#i-arrow-right"></use>
            </svg>
          </Link>
        </div>
        <div className="tool-grid">
          {STARTER_TOOLS.map((tool) => (
            <Link className="tool-card" href={tool.href} key={tool.name}>
              <svg aria-hidden="true" className="tool-card__ext">
                <use href="#i-external"></use>
              </svg>
              <div className="tool-card__icon">
                <svg aria-hidden="true">
                  <use href={`#${tool.icon}`}></use>
                </svg>
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="app-card">
        <div className="autopilot-panel">
          <div className="autopilot-copy">
            <h2>Grow your author platform on autopilot with AI</h2>
            <p className="autopilot-copy__lede">
              Just enter your book&apos;s title and genre, and Autopilot will
              generate launch content and suggest changes to help readers
              actually find it.
            </p>
            <ul className="autopilot-list">
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Get high-quality, genre-optimized launch content
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Improve and track your Amazon keyword rankings
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Compare your listing with genre bestsellers
              </li>
              <li>
                <svg>
                  <use href="#i-check-circle"></use>
                </svg>
                Receive recommendations to improve discoverability
              </li>
            </ul>
            <Link className="app-btn app-btn--dark" href="/ai-tool">
              <svg aria-hidden="true" className="app-btn__icon">
                <use href="#i-zap"></use>
              </svg>
              Activate Autopilot
            </Link>
          </div>
          <div aria-hidden="true" className="autopilot-visual">
            <p className="autopilot-visual__note">Sample preview</p>
            <div className="mini-card mini-card--chart">
              <div className="mini-card--chart__top">
                <span>AVERAGE POSITION</span>
                <svg aria-hidden="true" className="mini-card__icon">
                  <use href="#i-list"></use>
                </svg>
              </div>
              <div className="mini-card--chart__val">
                7.50 <span>▲ +1.74%</span>
              </div>
              <svg
                className="mini-sparkline"
                preserveAspectRatio="none"
                viewBox="0 0 200 44"
              >
                <polyline
                  fill="none"
                  points="0,34 25,30 50,32 75,20 100,24 125,12 150,16 175,6 200,10"
                  stroke="var(--orange-dark)"
                  strokeWidth="2.5"
                ></polyline>
              </svg>
            </div>
            <div className="mini-card mini-card--table">
              <div className="mini-card--table__head">
                New Keyword Opportunities
              </div>
              <div className="mini-table-row">
                <span>Keyword</span>
                <span>Vol.</span>
                <span>Diff.</span>
              </div>
              <div className="mini-table-row">
                <span>best fantasy books 2026</span>
                <span>12,100</span>
                <span>41</span>
              </div>
              <div className="mini-table-row">
                <span>how to publish a novel</span>
                <span>700</span>
                <span>28</span>
              </div>
            </div>
            <div className="mini-card mini-card--notif">
              <svg>
                <use href="#i-check-circle"></use>
              </svg>
              <div>
                <time>2hrs ago</time>
                <strong>One chapter has been published!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
