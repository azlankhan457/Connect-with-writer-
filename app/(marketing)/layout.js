import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevealObserver from "@/components/RevealObserver";

export default function MarketingLayout({ children }) {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
