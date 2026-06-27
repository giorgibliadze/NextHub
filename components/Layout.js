import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Script from "next/script";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { faviconLinks } from "../lib/faviconConfig";
import { companyProfile } from "../lib/aiSeo";

// ✅ default to non-www canonical root
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://next-hub.pro";

const siteEntitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: companyProfile.name,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.jpg`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: companyProfile.phone,
      email: companyProfile.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: companyProfile.location.addressLocality,
        addressCountry: companyProfile.location.addressCountry,
      },
      areaServed: [
        { "@type": "Country", name: "Georgia" },
        { "@type": "City", name: "Tbilisi" },
      ],
      sameAs: companyProfile.socialLinks,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: companyProfile.phone,
          email: companyProfile.email,
          contactType: "customer support",
          areaServed: "GE",
          availableLanguage: ["ka-GE", "en"],
        },
      ],
      makesOffer: companyProfile.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
      knowsAbout: companyProfile.technologies,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: companyProfile.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ka-GE",
    },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Favicons */}
        {faviconLinks.map((link) => (
          <link key={link.rel} {...link} />
        ))}
        <meta name="theme-color" content="#0b0b0b" />
      </Head>

      {/* Google Analytics via gtag (optional if you use only GTM) */}
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            strategy="lazyOnload"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <Script id="ga-gtag" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* GTM (safe to keep with GA, or use GTM only) */}
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var firstScript = document.getElementsByTagName('script')[0];
            var gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}';
            firstScript.parentNode.insertBefore(gtmScript, firstScript);
          `}
        </Script>
      )}

      {/* Organization/WebSite/LocalBusiness JSON-LD (uses non-www SITE_URL) */}
      <Script
        id="site-entity-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteEntitySchema),
        }}
      />

      {/* Facebook Pixel (optional) */}
      {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
        <>
          <Script id="fb-pixel" strategy="lazyOnload">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
              t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Page wrapper */}
      <div
        className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto"
      >
        <Analytics />
        <SpeedInsights />
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
}
