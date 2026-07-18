import { getSessionUser } from "@/lib/session";
import AccountInfoForm from "@/components/dashboard/AccountInfoForm";
import PasswordForm from "@/components/dashboard/PasswordForm";

export default async function AccountSettingsPage() {
  const user = await getSessionUser();
  const [firstName, lastName] = (user?.name || "").split(" ");

  return (
    <>
      <div className="app-header">
        <h1>Account Settings</h1>
      </div>

      <div className="app-card" style={{ maxWidth: "760px" }}>
        <div className="app-card__head">
          <h2>Tool Settings</h2>
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row__label">
              Default tools language{" "}
              <svg>
                <use href="#i-help-circle"></use>
              </svg>
            </div>
          </div>
          <div className="select-wrap" style={{ width: "200px" }}>
            <select defaultValue="🇺🇸 English (US)">
              <option>🇺🇸 English (US)</option>
              <option>🇬🇧 English (UK)</option>
            </select>
            <svg>
              <use href="#i-chevron-down"></use>
            </svg>
          </div>
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row__label">
              Enable/disable auto-writing feature{" "}
              <svg>
                <use href="#i-help-circle"></use>
              </svg>
            </div>
          </div>
          <label className="toggle-switch">
            <input defaultChecked type="checkbox" />
            <span className="track"></span>
          </label>
        </div>
      </div>

      <div className="app-card" style={{ maxWidth: "760px" }}>
        <div className="app-card__head">
          <h2>My Publishing Websites</h2>
        </div>
        <p style={{ fontSize: ".9rem", color: "var(--ink-soft)", marginBottom: "1rem" }}>
          Link your WordPress author site to Connect with Writer to automatically publish your chapters and blog posts.
        </p>
        <div className="connect-box">
          <p style={{ fontWeight: "700", color: "var(--ink)" }}>You don&apos;t have any connected websites yet.</p>
          <p>Connect your WordPress website by installing the plugin below, or download it directly.</p>
          <a className="app-btn app-btn--dark" href="#" style={{ marginTop: ".8rem" }}>
            <svg style={{ width: "16px", height: "16px" }}>
              <use href="#i-globe"></use>
            </svg>
            Download Connect with Writer Plugin
          </a>
        </div>
      </div>

      <div className="app-card" id="billing" style={{ maxWidth: "760px" }}>
        <div className="app-card__head">
          <h2>Account Information</h2>
        </div>
        <AccountInfoForm
          defaultEmail={user?.email || ""}
          defaultFirstName={firstName || ""}
          defaultLastName={lastName || ""}
        />
      </div>

      <div className="app-card" style={{ maxWidth: "760px" }}>
        <div className="app-card__head">
          <h2>Password</h2>
        </div>
        <PasswordForm />
      </div>
    </>
  );
}
