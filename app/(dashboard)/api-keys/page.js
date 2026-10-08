import CopyButton from "@/components/dashboard/CopyButton";
import PreviewNotice from "@/components/dashboard/PreviewNotice";

export const metadata = { title: "API" };

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
        <p>
          Use an API key to call Connect with Writer&apos;s tools directly from
          your own app or workflow.
        </p>
      </div>

      <div className="app-card">
        <PreviewNotice>
          API access isn&apos;t available yet, so no key has been issued for your
          account.
        </PreviewNotice>
        <div className="app-card__head">
          <h2>Your API Key</h2>
          <span className="app-card__sub">
            Keys will appear here once API access opens.
          </span>
        </div>
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Example Request</h2>
          <span className="app-card__sub">
            Illustrative only. This endpoint isn&apos;t live.
          </span>
        </div>
        <div className="code-block">
          <CopyButton text={SAMPLE_CODE} />
          <pre>
            <code>{SAMPLE_CODE}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
