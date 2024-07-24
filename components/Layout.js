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
import { NextSeo } from "next-seo";
// Font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
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
      <Head>
      <link rel="icon" href="/favicon.jpg" />
      <meta name="robots" content="index, follow" />
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
        <meta
          name="google-site-verification"
          content="AV_Rqc6RXH1HpfaYzYb7la24kvaGW8sqHpeTaW2NU50"
        />
      </Head>
      <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
      <NextSeo
      canonical="https://www.next-hub.pro"
        title="Next-Hub Solutions | Home"
        description="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        keywords="Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Home",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
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
          title: "Next-Hub Solutions | Home",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა",
          },
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "changefreq",
            content: "always",
          },
        ]}
      />
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
