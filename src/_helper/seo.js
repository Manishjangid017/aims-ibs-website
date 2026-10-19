const SITE_NAME = "AIMS IBS";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.aimsibs.com";

const DEFAULT_OG_IMAGE = "/images/home/life-at-ibs-img-21.webp";

export function generateSEO({
  title,
  description,
  keywords = "",
  image = DEFAULT_OG_IMAGE,
  path = "/",
  index = true,
}) {
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImageUrl = `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    ...(keywords && { keywords }),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
