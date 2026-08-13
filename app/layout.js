import "../styles/globals.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import { faviconIcons } from "../lib/faviconConfig";
import MicrosoftClarity from "../components/MicrosoftClarity";
import { companyProfile, siteUrl } from "../lib/aiSeo";
import LazyVercelInsights from "../components/LazyVercelInsights";

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

const siteEntitySchema = {
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
      alternateName: [
        "ვებსაიტის დამზადება საქართველოში",
        "Next-Hub",
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ka-GE",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka-GE">
      <head>
        <meta httpEquiv="content-language" content="ka-GE" />
        <script
          id="site-entity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteEntitySchema) }}
        />
      </head>
      <body>
        <MicrosoftClarity />
        <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative overflow-y-auto">
          <LazyVercelInsights />
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
