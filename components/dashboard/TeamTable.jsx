import PreviewNotice from "./PreviewNotice";

export default function TeamTable({ owner }) {
  const initials = owner.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <div className="app-card">
        <PreviewNotice>
          Team invites aren&apos;t live yet. No invitations can be sent.
        </PreviewNotice>
        <div className="app-card__head">
          <h2>Invite a Teammate</h2>
        </div>
        <form className="invite-row">
          <fieldset className="invite-row__fields" disabled>
            <div className="app-field">
              <label htmlFor="invite-email">Email address</label>
              <input
                id="invite-email"
                placeholder="teammate@example.com"
                type="email"
              />
            </div>
            <div className="app-field invite-row__role">
              <label htmlFor="invite-role">Role</label>
              <div className="select-wrap">
                <select defaultValue="Editor" id="invite-role">
                  <option>Editor</option>
                  <option>Viewer</option>
                  <option>Admin</option>
                </select>
                <svg aria-hidden="true">
                  <use href="#i-chevron-down"></use>
                </svg>
              </div>
            </div>
            <button className="app-btn app-btn--dark" type="submit">
              <svg aria-hidden="true" className="app-btn__icon">
                <use href="#i-user-plus"></use>
              </svg>
              Send Invite
            </button>
          </fieldset>
        </form>
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Members</h2>
        </div>
        <table className="team-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="team-member">
                  <span aria-hidden="true" className="team-member__avatar">
                    {initials}
                  </span>
                  <div>
                    <div className="team-member__name">{owner.name}</div>
                    <div className="team-member__email">{owner.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="role-pill role-pill--owner">Owner</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
