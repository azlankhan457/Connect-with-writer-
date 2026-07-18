"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_MEMBERS = [
  { id: "1", name: "Alex Miller", email: "alex.miller1692@gmail.com", role: "owner", joined: "Jan 2026", removable: false },
  { id: "2", name: "Jordan Reyes", email: "jordan.reyes@gmail.com", role: "editor", joined: "Mar 2026", removable: true },
  { id: "3", name: "Sam Kapoor", email: "sam.kapoor@gmail.com", role: "pending", joined: "2 days ago", removable: true },
];

const ROLE_LABELS = { owner: "Owner", editor: "Editor", pending: "Pending" };

export default function TeamTable({ seatLimit = 5 }) {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Editor");

  function handleInvite(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const initials = trimmed.slice(0, 2).toUpperCase();
    const name = trimmed.split("@")[0];
    setMembers((m) => [
      ...m,
      { id: crypto.randomUUID(), name, email: trimmed, role: "pending", joined: "Just now", removable: true, initials },
    ]);
    setEmail("");
  }

  function handleRemove(id) {
    setMembers((m) => m.filter((member) => member.id !== id));
  }

  return (
    <>
      <div className="app-card">
        <div className="app-card__head">
          <h2>Invite a Teammate</h2>
        </div>
        <form className="invite-row" onSubmit={handleInvite}>
          <div className="app-field">
            <label htmlFor="invite-email">Email address</label>
            <input
              id="invite-email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teammate@example.com"
              required
              type="email"
              value={email}
            />
          </div>
          <div className="app-field" style={{ flex: "0 0 180px" }}>
            <label htmlFor="invite-role">Role</label>
            <div className="select-wrap">
              <select id="invite-role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option>Editor</option>
                <option>Viewer</option>
                <option>Admin</option>
              </select>
              <svg>
                <use href="#i-chevron-down"></use>
              </svg>
            </div>
          </div>
          <button className="app-btn app-btn--dark" type="submit">
            <svg style={{ width: "16px", height: "16px" }}>
              <use href="#i-user-plus"></use>
            </svg>
            Send Invite
          </button>
        </form>
      </div>

      <div className="app-card">
        <div className="app-card__head">
          <h2>Members</h2>
          <span className="app-card__sub">
            {members.length} of {seatLimit} seats used
          </span>
        </div>
        <table className="team-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className="team-member">
                    <span className="team-member__avatar">
                      {member.initials || member.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                    </span>
                    <div>
                      <div className="team-member__name">{member.name}</div>
                      <div className="team-member__email">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`role-pill role-pill--${member.role}`}>{ROLE_LABELS[member.role]}</span>
                </td>
                <td>{member.joined}</td>
                <td>
                  <div className="team-row-actions">
                    {member.removable && (
                      <button
                        aria-label={member.role === "pending" ? "Cancel invite" : "Remove member"}
                        className="icon-action-btn danger"
                        onClick={() => handleRemove(member.id)}
                        type="button"
                      >
                        <svg>
                          <use href="#i-trash"></use>
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="seats-note">
          <span>
            Need more seats? Each additional seat is <strong>$12/month</strong>.
          </span>
          <Link className="app-btn app-btn--ghost" href="/account-settings">
            Manage Plan
          </Link>
        </div>
      </div>
    </>
  );
}
