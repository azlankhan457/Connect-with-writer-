import { getSessionUser } from "@/lib/session";
import AccountInfoForm from "@/components/dashboard/AccountInfoForm";
import PasswordForm from "@/components/dashboard/PasswordForm";
import PreviewNotice from "@/components/dashboard/PreviewNotice";

export const metadata = { title: "Account Settings" };

export default async function AccountSettingsPage() {
  const user = await getSessionUser();
  const [firstName, ...rest] = (user?.name || "").split(" ");

  return (
    <>
      <div className="app-header">
        <h1>Account Settings</h1>
      </div>

      <div className="app-card app-card--settings">
        <div className="app-card__head">
          <h2>Account Information</h2>
        </div>
        <AccountInfoForm
          defaultEmail={user?.email || ""}
          defaultFirstName={firstName || ""}
          defaultLastName={rest.join(" ")}
        />
      </div>

      <div className="app-card app-card--settings">
        <div className="app-card__head">
          <h2>Password</h2>
        </div>
        <PasswordForm />
      </div>

      <div className="app-card app-card--settings">
        <div className="app-card__head">
          <h2>Tool Settings</h2>
        </div>
        <PreviewNotice>
          Tool preferences aren&apos;t live yet and can&apos;t be changed.
        </PreviewNotice>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="set-lang">
            Default tools language
          </label>
          <div className="select-wrap select-wrap--fixed">
            <select defaultValue="English (US)" disabled id="set-lang">
              <option>English (US)</option>
              <option>English (UK)</option>
            </select>
            <svg aria-hidden="true">
              <use href="#i-chevron-down"></use>
            </svg>
          </div>
        </div>
        <div className="settings-row">
          <label className="settings-row__label" htmlFor="set-auto">
            Enable/disable auto-writing feature
          </label>
          <label className="toggle-switch">
            <input defaultChecked disabled id="set-auto" type="checkbox" />
            <span className="track"></span>
          </label>
        </div>
      </div>

      <div className="app-card app-card--settings">
        <div className="app-card__head">
          <h2>My Publishing Websites</h2>
        </div>
        <div className="connect-box">
          <p className="connect-box__title">
            You don&apos;t have any connected websites yet.
          </p>
          <p>Website connections (such as WordPress) aren&apos;t available yet.</p>
        </div>
      </div>

      <div className="app-card app-card--settings" id="billing">
        <div className="app-card__head">
          <h2>Billing &amp; Invoices</h2>
        </div>
        <div className="settings-row">
          <div>
            <div className="settings-row__label">Current plan</div>
            <div className="settings-row__value">Free Trial</div>
          </div>
        </div>
        <p className="settings-note">
          Paid plans, payment methods and invoices aren&apos;t available yet.
        </p>
      </div>
    </>
  );
}
