import MainHome from "@/components/Home/MainHome";
import { generateSEO } from "@/_helper/seo";

export const metadata = generateSEO({
  title: "MBA & PGDM in Bangalore | AIMS IBS Business School",
  description: "AIMS IBS is a top-ranked business school in Bangalore offering MBA, PGDM and executive management programs with global collaborations and 100% placement support.",
  keywords: "MBA Bangalore, PGDM Bangalore, business school Bangalore, AIMS IBS, management college",
  image: "/images/home/life-at-ibs-img-21.webp",
  path: "/",
  index: true,
});

export default function HomePage() {
  return <MainHome />;
}
