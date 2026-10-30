import { generateSEO } from "@/_helper/seo";

export const metadata = generateSEO({
  title: "Welcome to the AIMS IBS Family | AIMS IBS Business School",
  description: "AIMS IBS is a top-ranked business school in Bangalore offering MBA, PGDM and executive management programs with global collaborations and 100% placement support.",
  keywords: "MBA Bangalore, PGDM Bangalore, business school Bangalore, AIMS IBS, management college",
  image: "/images/about-us/family-img.webp",
  path: "/ ",
  index: true,
});

export default function EducationLoanPage() {
  return <MainAdmissionProcess />;
}
