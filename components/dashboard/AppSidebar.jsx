"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

// Note: the original static mockup had several nav links pointing at the
// wrong pages (e.g. "All Tools" linked to the AI tool page, "Team" and
// "Billing" both linked to Account Settings). Fixed here to point at each
// item's actual page.
const NAV_ITEMS = [
  { href: "/dashboard", icon: "i-home", label: "Dashboard" },
  { href: "/ai-tool", icon: "i-wand", label: "AI Book Writer" },
  { href: "/all-tools", icon: "i-grid", label: "All Tools", badge: "42" },
  { href: "/my-content", icon: "i-folder", label: "My Content" },
];

const NAV_ITEMS_BOTTOM = [
  { href: "/account-settings", icon: "i-settings", label: "Account Settings" },
  { href: "/account-settings#billing", icon: "i-credit-card", label: "Billing & Invoices" },
  { href: "/team", icon: "i-users", label: "Team" },
  { href: "/usage", icon: "i-bar-chart", label: "Usage" },
  { href: "/api-keys", icon: "i-terminal", label: "API" },
];

export default function AppSidebar({ user, isMobileOpen, onCloseMobile }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef(null);

  // Close mobile sidebar / account menu on route change (render-time adjustment,
  // avoids the extra render pass a useEffect-based reset would cause)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    onCloseMobile();
    setIsAccountOpen(false);
  }

  useEffect(() => {
    function onDocClick(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAccountOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    await signOut(auth).catch(() => {});
    router.push("/login");
    router.refresh();
  }

  const initials = (user?.name || user?.email || "?")
    .split(/[\s@]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <>
      <div
        className={`app-sidebar-overlay${isMobileOpen ? " is-visible" : ""}`}
        onClick={onCloseMobile}
      />
      <aside className={`app-sidebar${isMobileOpen ? " is-open" : ""}`}>
        <Link className="app-sidebar__brand" href="/dashboard">
          <svg className="brand__mark">
            <use href="#i-book-mark"></use>
          </svg>
          <span className="brand__word">
            <b>Connect</b>
            <span>with Writer</span>
          </span>
        </Link>

        <div className="app-sidebar__plan">
          <div className="app-sidebar__plan-top">
            <span className="app-sidebar__plan-label">Free Trial</span>
            <span className="app-sidebar__plan-words">1,500 words left</span>
          </div>
          <div className="app-progress">
            <div className="app-progress__fill" style={{ width: "100%" }}></div>
          </div>
          <Link className="app-upgrade-btn" href="/account-settings">
            <svg>
              <use href="#i-zap"></use>
            </svg>
            Upgrade
          </Link>
        </div>

        <nav className="app-nav">
          {NAV_ITEMS.map((item) => (
            <Link className={pathname === item.href ? "is-active" : ""} href={item.href} key={item.href}>
              <svg>
                <use href={`#${item.icon}`}></use>
              </svg>
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </Link>
          ))}
          <div className="app-nav-divider"></div>
          {NAV_ITEMS_BOTTOM.map((item) => (
            <Link
              className={pathname === item.href.split("#")[0] ? "is-active" : ""}
              href={item.href}
              key={item.href}
            >
              <svg>
                <use href={`#${item.icon}`}></use>
              </svg>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={`app-account${isAccountOpen ? " is-open" : ""}`} ref={accountRef}>
          <div className="app-account__trigger" onClick={() => setIsAccountOpen((v) => !v)}>
            <span className="app-account__avatar">{initials || "?"}</span>
            <span className="app-account__name">{user?.name || user?.email || "My Account"}</span>
            <svg>
              <use href="#i-chevron-down"></use>
            </svg>
          </div>
          {isAccountOpen && (
            <div className="app-account__menu">
              <Link href="/account-settings">
                <svg>
                  <use href="#i-settings"></use>
                </svg>
                Account Settings
              </Link>
              <button onClick={handleLogout} type="button">
                <svg>
                  <use href="#i-external"></use>
                </svg>
                Log Out
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
