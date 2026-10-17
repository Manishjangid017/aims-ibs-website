import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const ibmPlexSans = localFont({
  src: "./fonts/IBM Plex Sans.woff2",
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: "100 700",
});

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600" },
    { path: "./fonts/GeneralSans-Bold.woff2", weight: "700" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Next.js Starter",
    template: "%s | Next.js Starter",
  },
  description: "Next.js App Router + JavaScript + Tailwind CSS + shadcn/ui starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${generalSans.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
