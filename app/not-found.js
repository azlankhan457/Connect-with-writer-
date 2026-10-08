import Link from "next/link";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main">
      <NotFoundContent />
    </main>
  );
}
