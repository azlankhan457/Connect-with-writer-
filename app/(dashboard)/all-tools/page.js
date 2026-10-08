import ToolsExplorer from "@/components/dashboard/ToolsExplorer";
import { TOOLS } from "@/lib/dashboardTools";

export default function AllToolsPage() {
  return (
    <>
      <div className="app-header">
        <h1>All Tools</h1>
        <p>Every AI writing tool in one place — search or filter by category to find what you need.</p>
      </div>
      <ToolsExplorer tools={TOOLS} />
    </>
  );
}
