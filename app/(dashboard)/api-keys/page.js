import ApiKeyBox from "@/components/dashboard/ApiKeyBox";
import CopyButton from "@/components/dashboard/CopyButton";

const SAMPLE_CODE = `curl https://api.connectwithwriter.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool": "chapter-writer",
    "title": "Chapter 1 — The Long Way Home",
    "outline": ["She arrives at the station", "A stranger recognizes her"]
  }'`;

export default function ApiKeysPage() {
  return (
    <>
      <div className="app-header">
        <h1>API</h1>
        <p>Use your API key to call Connect with Writer&apos;s tools directly from your own app or workflow.</p>
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Your API Key</h2>
          <span className="app-card__sub">Keep this secret — anyone with this key can use your credits.</span>
        </div>
        <ApiKeyBox apiKey="bw_live_sk_4f8a2c9e17d6b3a0f5c8e2d9b1a7f4c6" />
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Quick Start</h2>
        </div>
        <div className="code-block">
          <CopyButton text={SAMPLE_CODE} />
          <pre>
            <code>{SAMPLE_CODE}</code>
          </pre>
        </div>
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Usage This Month</h2>
        </div>
        <div className="stat-row">
          <div className="stat-box">
            <span className="stat-box__value">1,842</span>
            <span className="stat-box__label">Requests</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__value">99.98%</span>
            <span className="stat-box__label">Uptime</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__value">210ms</span>
            <span className="stat-box__label">Avg. Response</span>
          </div>
        </div>
      </div>
    </>
  );
}
