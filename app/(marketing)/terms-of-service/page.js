import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service",
  description:
    "The general terms for using the Connect with Writer website and engaging its services.",
};

const SECTIONS = [
  {
    heading: "Services",
    text: "Connect with Writer provides book writing, editing, proofreading, publishing, illustration, cover design, and marketing services under individual project agreements. The specific scope, timeline, and pricing for each project are defined in a separate agreement with the client.",
  },
  {
    heading: "Ownership",
    text: "Unless otherwise agreed in writing, clients retain full ownership of manuscripts, illustrations, and other deliverables once a project is paid in full.",
  },
  {
    heading: "Payments",
    text: "Payment terms, including deposits and milestone payments, are outlined in each individual project agreement.",
  },
  {
    heading: "Website Use",
    text: "This website and its content are provided for informational purposes. You agree not to misuse the site or attempt to access it in unauthorized ways.",
  },
];

export default function Page() {
  return (
    <LegalPage
      current="/terms-of-service"
      intro="This placeholder Terms of Service outlines the general terms for using this website and engaging Connect with Writer's services. Replace this page with your finalized, attorney-reviewed terms before launch."
      sections={SECTIONS}
      title="Terms of Service"
    />
  );
}
