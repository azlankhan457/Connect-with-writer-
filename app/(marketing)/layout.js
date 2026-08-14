import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevealObserver from "@/components/RevealObserver";
import { getSessionUser } from "@/lib/session";

export default async function MarketingLayout({ children }) {
  const sessionUser = await getSessionUser();
  const isLoggedIn = !!sessionUser;

  return (
    <>
      <RevealObserver />
      <SiteHeader isLoggedIn={isLoggedIn} />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
