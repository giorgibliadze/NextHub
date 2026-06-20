import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AppNav from "../components/AppNav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

export const metadata = {
  metadataBase: new URL("https://next-hub.pro"),
  title: {
    default: "Next-Hub Solutions",
    template: "%s | Next-Hub Solutions",
  },
  description:
    "Next-Hub Solutions ქმნის SEO-ზე მორგებულ ვებსაიტებს, პროგრამულ სისტემებს, ვებ დიზაინს, ლოკალურ SEO კამპანიებს და საიტის მოვლის გეგმებს ბიზნესებისთვის.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto">
          <Analytics />
          <SpeedInsights />
          <TopLeftImg />
          <AppNav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
