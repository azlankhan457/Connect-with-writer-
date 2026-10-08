import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Connect with Writer collects, uses and protects information submitted through this website.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    text: "When you submit a form on this site, we collect the details you provide — such as your name, email address, phone number, and information about your book project.",
  },
  {
    heading: "How We Use It",
    text: "We use this information solely to respond to your inquiry, provide requested services, and, where you've opted in, send updates about our services.",
  },
  {
    heading: "Confidentiality",
    text: "Manuscripts, ideas, and personal details shared with our team are treated as confidential and are never sold or shared with third parties for marketing purposes.",
  },
  {
    heading: "Cookies & Analytics",
    text: "This site may use standard analytics cookies to understand site traffic. You can disable cookies in your browser settings at any time.",
  },
];

export default function Page() {
  return (
    <LegalPage
      current="/privacy-policy"
      intro="This placeholder Privacy Policy explains, in general terms, how Connect with Writer collects, uses, and protects information submitted through this website. Replace this page with your finalized, attorney-reviewed policy before launch."
      sections={SECTIONS}
      title="Privacy Policy"
    />
  );
}
