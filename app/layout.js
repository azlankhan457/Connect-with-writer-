import { Fraunces, Inter, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/IconSprite";
import PageLoader from "@/components/PageLoader";

const thirdPartyScripts = [
  {
    id: "google-search-console",
    src: process.env.NEXT_PUBLIC_GSC_VERIFICATION_SRC,
  },
  { id: "google-analytics", src: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_SRC },
  { id: "microsoft-clarity", src: process.env.NEXT_PUBLIC_CLARITY_SRC },
  {
    id: "bing-webmaster-tools",
    src: process.env.NEXT_PUBLIC_BING_WEBMASTER_SRC,
  },
  { id: "google-tag-manager", src: process.env.NEXT_PUBLIC_GTM_SRC },
].filter((script) => Boolean(script.src));

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default:
      "Book Writing Services | Hire Professional Ghostwriters – Connect with Writer",
    template: "%s | Connect with Writer",
  },
  description:
    "Hire professional book writers and ghostwriters to turn your idea into a finished, publish-ready book. Fiction, memoir, and nonfiction. Free consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${fraunces.variable} ${inter.variable} ${playfair.variable} ${lato.variable}`}
      lang="en"
    >
      <body>
        {thirdPartyScripts.map((script) => (
          <script key={script.id} src={script.src} />
        ))}
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PageLoader />
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
