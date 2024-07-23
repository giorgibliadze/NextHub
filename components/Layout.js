import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.next-hub.pro",
              logo: "https://www.next-hub.pro/favicon.jpg",
            }),
          }}
        />
        <link rel="icon" href="/favicon.jpg" sizes="any" type="image/jpg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Head>
          <meta name="robots" content="index, follow" />
          <meta name="changefreq" content="always" />
        </Head>
      </Head>
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
      >
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
        <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
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
