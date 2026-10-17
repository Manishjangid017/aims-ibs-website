import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
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
    <html lang="en" className={ibmPlexSans.variable}>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
