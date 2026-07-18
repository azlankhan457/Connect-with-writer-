"use client";

import { useState } from "react";
import SettingsForm from "./SettingsForm";

export default function AccountInfoForm({ defaultFirstName, defaultLastName, defaultEmail }) {
  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);
  const [email, setEmail] = useState(defaultEmail);

  return (
    <SettingsForm>
      {({ isSaved }) => (
        <>
          <div className="field-grid-2">
            <div className="app-field">
              <label htmlFor="as-first">First Name</label>
              <input id="as-first" onChange={(e) => setFirstName(e.target.value)} type="text" value={firstName} />
            </div>
            <div className="app-field">
              <label htmlFor="as-last">Last Name</label>
              <input id="as-last" onChange={(e) => setLastName(e.target.value)} type="text" value={lastName} />
            </div>
          </div>
          <div className="app-field">
            <label htmlFor="as-email">Login Email</label>
            <input id="as-email" onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
          </div>
          <button className="app-btn app-btn--dark" type="submit">
            {isSaved ? "Saved ✓" : "Save"}
          </button>
        </>
      )}
    </SettingsForm>
  );
}
