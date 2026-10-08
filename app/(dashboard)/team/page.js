import TeamTable from "@/components/dashboard/TeamTable";
import { getSessionUser } from "@/lib/session";

export const metadata = { title: "Team" };

export default async function TeamPage() {
  const user = await getSessionUser();
  const owner = {
    name: user?.name || user?.email?.split("@")[0] || "You",
    email: user?.email || "",
  };

  return (
    <>
      <div className="app-header">
        <h1>Team</h1>
        <p>Invite collaborators to write, edit, and review content alongside you.</p>
      </div>
      <TeamTable owner={owner} />
    </>
  );
}
