import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/session";
import AppShell from "@/components/dashboard/AppShell";
import "../dashboard-globals.css";

export default async function DashboardLayout({ children }) {
  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    redirect("/login");
  }

  const user = {
    email: sessionUser.email,
    name: sessionUser.name || sessionUser.email?.split("@")[0],
  };

  return <AppShell user={user}>{children}</AppShell>;
}
