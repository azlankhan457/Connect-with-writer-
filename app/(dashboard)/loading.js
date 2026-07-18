import { LoaderMark } from "@/components/PageLoader";

export default function Loading() {
  // Note: this renders inside AppShell's content area, not full-screen —
  // the sidebar/topbar persist across dashboard navigation, only the
  // page content itself is loading.
  return (
    <div className="content-loader">
      <LoaderMark size="sm" />
    </div>
  );
}
