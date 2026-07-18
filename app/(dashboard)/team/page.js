import TeamTable from "@/components/dashboard/TeamTable";

export default function TeamPage() {
  return (
    <>
      <div className="app-header">
        <h1>Team</h1>
        <p>Invite collaborators to write, edit, and review content alongside you.</p>
      </div>
      <TeamTable />
    </>
  );
}
