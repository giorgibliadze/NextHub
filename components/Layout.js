import { useEffect, useState } from "react";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { DefaultSeo } from "next-seo";

// Font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
    >
      <DefaultSeo
        title="Next-Hub Solutions"
        description="Transform your ideas into digital reality with Next-Hub Solutions. Achieve your goals and maximize your brand's potential with our expert team."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.next-hub.pro",
          site_name: "Next-Hub Solutions",
          images: [
            {
              url: "https://www.next-hub.pro/bg-explosion.png",
              width: 800,
              height: 600,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
        }}
      />
      <Analytics />
      <SpeedInsights />
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
