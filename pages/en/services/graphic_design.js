// pages/services/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../../components/en/GraphicDesignPriceCard";
import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";
import { NextSeo } from "next-seo";
import Script from "next/script";
import Portfolio from "../../../components/en/Portfolio";

const CANONICAL = "https://next-hub.pro/en/services/graphic_design";

const GraphicDesign = () => {
  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Graphic Design."
        description="graphic design services for businesses: logo design, branding, social media visuals, banners and creative materials."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Graphic Design.",
          description:
            "graphic design services for businesses: logo design, branding, social media visuals, banners and creative materials.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions graphic design.",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Graphic Design.",
          },
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "robots",
            content: "index,follow,max-image-preview:large",
          },
          {
            name: "keywords",
            content:
              "graphic design, logo design, branding, graphic design Georgia, branding Tbilisi, logo making, brand identity, social media design, logo design Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="graphic-design-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "graphic design.",
            serviceType: "Graphic Design",
            url: CANONICAL,
            description:
              "graphic design services: logo design, branding, social media visuals, banners, posters, and business-friendly visual materials.",
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro/en",
              logo: "https://next-hub.pro/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "Georgia",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "GEL",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <div className="flex min-h-screen flex-col items-center justify-start bg-primary/30 px-4 py-28 md:py-44 overflow-x-hidden">
        <Circles />
        <h1 className="text-4xl md:text-6xl font-bold xl:mt-8 text-center">
          graphic design.
          <span className="text-accent">.</span>
        </h1>
        {/* <GraphicDesignPriceCard /> */}
        <Portfolio />
        <Bulb />
      </div>
    </>
  );
};

export default GraphicDesign;
