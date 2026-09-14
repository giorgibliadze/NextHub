import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Script from "next/script";
import Head from "next/head";
import { faviconLinks } from "../lib/faviconConfig";
import { companyProfile } from "../lib/aiSeo";
import LazyVercelInsights from "../components/LazyVercelInsights";
import Footer from "../components/Footer";
import DelayedThirdPartyScripts from "../components/DelayedThirdPartyScripts";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  getLanguageAlternates,
  isEnglishRoute,
  SITE_ORIGIN,
} from "../lib/languageRoutes";

// ✅ default to non-www canonical root
const SITE_URL = SITE_ORIGIN;

function buildSiteEntitySchema(isEnglish) {
  return {
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
      alternateName: isEnglish
        ? ["Website development in Georgia", "Next-Hub"]
        : ["ვებსაიტის დამზადება საქართველოში", "Next-Hub"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: isEnglish ? "en" : "ka-GE",
    },
  ],
};
}

export default function Layout({ children }) {
  const router = useRouter();
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const isEnglish = isEnglishRoute(router.asPath);
  const isHomePage = router.pathname === "/" || router.pathname === "/en";
  const languageAlternates = getLanguageAlternates(router.asPath);
  const siteEntitySchema = buildSiteEntitySchema(isEnglish);

  useEffect(() => {
    document.body.classList.toggle("homepage-route", isHomePage);

    return () => {
      document.body.classList.remove("homepage-route");
    };
  }, [isHomePage]);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "ka-GE";

    const contentLanguage = document.querySelector(
      'meta[http-equiv="content-language"]',
    );
    contentLanguage?.setAttribute("content", isEnglish ? "en" : "ka-GE");
  }, [isEnglish]);

  return (
    <>
      <Head>
        {/* Favicons */}
        {faviconLinks.map((link) => (
          <link key={link.rel} {...link} />
        ))}
        <meta name="theme-color" content="#0b0b0b" />
        {Object.entries(languageAlternates.languages).map(([hrefLang, href]) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
      </Head>

      <DelayedThirdPartyScripts
        gaId={gtmId ? "" : gaId}
        googleAdsId={googleAdsId}
        gtmId={gtmId}
        facebookPixelId={facebookPixelId}
      />

      {/* Organization/WebSite/LocalBusiness JSON-LD (uses non-www SITE_URL) */}
      <Script
        id="site-entity-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteEntitySchema),
        }}
      />

      {facebookPixelId && (
        <>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Page wrapper */}
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto${
          isHomePage ? " homepage-page" : ""
        }`}
      >
        <LazyVercelInsights />
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <Footer />
      </div>
      <LanguageSwitcher />
    </>
  );
}
