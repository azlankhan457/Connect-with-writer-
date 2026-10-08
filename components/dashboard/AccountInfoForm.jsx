import Link from "next/link";

export default function AccountInfoForm({ defaultFirstName, defaultLastName, defaultEmail }) {
  return (
    <div>
      <div className="field-grid-2">
        <div className="app-field">
          <label htmlFor="as-first">First Name</label>
          <input id="as-first" readOnly type="text" value={defaultFirstName} />
        </div>
        <div className="app-field">
          <label htmlFor="as-last">Last Name</label>
          <input id="as-last" readOnly type="text" value={defaultLastName} />
        </div>
      </div>
      <div className="app-field">
        <label htmlFor="as-email">Login Email</label>
        <input id="as-email" readOnly type="email" value={defaultEmail} />
      </div>
      <p className="settings-note">
        To change your name or login email,{" "}
        <Link className="auth-link" href="/contact">
          contact us
        </Link>
        .
      </p>
    </div>
  );
}
