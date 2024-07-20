/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-head-element */
import { useEffect, useState } from "react";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import Head from "next/head";

// Font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MCWYDWRTCY"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MCWYDWRTCY');`}
        </Script>
      </Head>
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
      >
        <DefaultSeo
          title="Next-Hub Solutions"
          description="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
          openGraph={{
            type: "website",
            locale: "ka_GE",
            url: "https://www.next-hub.pro",
            site_name: "Next-Hub Solutions",
            images: [
              {
                url: "https://www.next-hub.pro/nexthub.jpg",
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
    </>
  );
};

export default Layout;
