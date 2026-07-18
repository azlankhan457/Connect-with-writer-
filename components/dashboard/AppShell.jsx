"use client";

import { useState } from "react";
import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import { CopyToastProvider } from "./CopyToastProvider";

export default function AppShell({ user, children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <CopyToastProvider>
      <div className="app-shell">
        <AppSidebar isMobileOpen={isMobileOpen} onCloseMobile={() => setIsMobileOpen(false)} user={user} />
        <div className="app-main">
          <AppTopbar onToggleMobile={() => setIsMobileOpen((v) => !v)} />
          <div className="app-content">{children}</div>
        </div>
      </div>
    </CopyToastProvider>
  );
}
