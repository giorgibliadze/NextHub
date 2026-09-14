import "../styles/globals.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { faviconIcons } from "../lib/faviconConfig";
import MicrosoftClarity from "../components/MicrosoftClarity";
import { companyProfile, siteUrl } from "../lib/aiSeo";
import LazyVercelInsights from "../components/LazyVercelInsights";
import Footer from "../components/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { LanguageStateProvider } from "../components/LanguageStateProvider";
import { headers } from "next/headers";

export const metadata = {
  metadataBase: new URL("https://next-hub.pro"),
  title: {
    default: "Next-Hub Solutions",
    template: "%s",
  },
  description:
    "Next-Hub Solutions ქმნის SEO-ზე მორგებულ ვებსაიტებს, პროგრამულ სისტემებს, ვებ დიზაინს, ლოკალურ SEO კამპანიებს და საიტის მოვლის გეგმებს ბიზნესებისთვის.",
  keywords: [
    "ვებსაიტების დამზადება",
    "ვებსაიტის დამზადება",
    "ვებ დეველოპმენტი",
    "ვებსაიტების შექმნა",
    "საიტის შექმნა",
    "ვებ დეველოპერი საქართველო",
    "NextHub",
    "Next-Hub Solutions",
    "website development Georgia",
    "web design Tbilisi",
    "SEO Georgia",
    "digital agency Georgia",
  ],
  icons: faviconIcons,
};

function buildSiteEntitySchema(isEnglish) {
  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: companyProfile.name,
      url: siteUrl,
      logo: `${siteUrl}/favicon.jpg`,
      image: `${siteUrl}/og-image.jpg`,
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
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
      knowsAbout: companyProfile.technologies,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: companyProfile.name,
      alternateName: isEnglish
        ? ["Website development in Georgia", "Next-Hub"]
        : ["ვებსაიტის დამზადება საქართველოში", "Next-Hub"],
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: isEnglish ? "en" : "ka-GE",
    },
  ],
};
}

export default async function RootLayout({ children }) {
  const pathname = (await headers()).get("x-next-pathname") || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const pageLanguage = isEnglish ? "en" : "ka-GE";
  const siteEntitySchema = buildSiteEntitySchema(isEnglish);

  return (
    <html lang={pageLanguage}>
      <head>
        <meta httpEquiv="content-language" content={pageLanguage} />
        <script
          id="site-entity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteEntitySchema) }}
        />
      </head>
      <body>
        <LanguageStateProvider>
          <MicrosoftClarity />
          <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto">
            <LazyVercelInsights />
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
            <Footer />
          </div>
          <LanguageSwitcher />
        </LanguageStateProvider>
      </body>
    </html>
  );
}
