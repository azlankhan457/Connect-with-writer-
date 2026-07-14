import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/IconSprite";

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

export const metadata = {
  title: {
    default: "Book Writing Services | Hire Professional Ghostwriters – Book Writing",
    template: "%s | Book Writing",
  },
  description:
    "Hire professional book writers and ghostwriters to turn your idea into a finished, publish-ready book. Fiction, memoir, and nonfiction. Free consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
