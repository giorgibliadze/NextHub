// pages/services/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../components/GraphicDesignPriceCard";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { NextSeo } from "next-seo";
import Script from "next/script";
import Portfolio from "../../components/Portfolio";

const CANONICAL = "https://next-hub.pro/services/graphic_design/";

const GraphicDesign = () => {
  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="გრაფიკული დიზაინი | ლოგოს დიზაინი და ბრენდინგი | Next-Hub"
        description="გრაფიკული დიზაინის სერვისები ბიზნესისთვის: ლოგოს დიზაინი, ბრენდინგი, სოციალური მედიის ვიზუალები, ბანერები, პოსტერები და კრეატიული ვიზუალური მასალები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "გრაფიკული დიზაინი | ლოგოს დიზაინი და ბრენდინგი | Next-Hub",
          description:
            "Next-Hub გთავაზობთ გრაფიკული დიზაინის სერვისებს: ლოგოს დიზაინი, ბრენდინგი, სოციალური მედიის ვიზუალები, ბანერები, პოსტერები და ბიზნესისთვის მორგებული კრეატიული მასალები.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "გრაფიკული დიზაინი Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
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
              "გრაფიკული დიზაინი, ლოგოს დიზაინი, ლოგოს დამზადება, ბრენდინგი, ბრენდის იდენტობა, სოციალური მედიის დიზაინი, პოსტის დიზაინი, ბანერის დიზაინი, პოსტერის დიზაინი, ვიზუალური მასალები, კრეატიული დიზაინი, დიზაინის სერვისები, graphic design Georgia, logo design Georgia, branding Georgia, Next-Hub Solutions",
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
            name: "გრაფიკული დიზაინი",
            serviceType: "Graphic Design",
            url: CANONICAL,
            description:
              "გრაფიკული დიზაინის სერვისები: ლოგოს დიზაინი, ბრენდინგი, სოციალური მედიის ვიზუალები, ბანერები, პოსტერები და ბიზნესისთვის მორგებული ვიზუალური მასალები.",
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro",
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

      <div className="flex justify-center items-center min-h-screen bg-primary/30 px-4 overflow-x-hidden">
        <Circles />
        {/* <GraphicDesignPriceCard /> */}
        <Portfolio />
        <Bulb />
      </div>
    </>
  );
};

export default GraphicDesign;