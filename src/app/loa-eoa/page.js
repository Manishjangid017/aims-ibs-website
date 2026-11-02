import { generateSEO } from "@/_helper/seo";
import MainLOAEOA from "@/components/LOAEOA/MainLOAEOA";

export const metadata = generateSEO({
  title: "MBA & PGDM in Bangalore | AIMS IBS Business School",
  description:
    "AIMS IBS is a top-ranked business school in Bangalore offering MBA, PGDM and executive management programs with global collaborations and 100% placement support.",
  keywords:
    "MBA Bangalore, PGDM Bangalore, business school Bangalore, AIMS IBS, management college",
  image: "/images/home/life-at-ibs-img-21.webp",
  path: "/",
  index: true,
});

export default function LOA_EOA() {
  return <MainLOAEOA />;
}
