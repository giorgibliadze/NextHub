// pages/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../components/GraphicDesignPriceCard";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextSeo } from "next-seo";
import Portfolio from "../../components/Portfolio";
const graphic_design = () => {
  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/services/graphic_design/"
        title="გრაფიკული დიზაინი | ბრენდინგი და ვიზუალური მასალები | Next-Hub"
        description="Next-Hub გთავაზობთ გრაფიკული დიზაინის სერვისებს: ლოგოს დიზაინი, ბრენდინგი, სოციალური მედიის ვიზუალები, ბანერები და ბიზნესისთვის მორგებული კრეატიული მასალები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/services/graphic_design/",
          site_name: "Next-Hub Solutions",
          title:
            "გრაფიკული დიზაინი | ბრენდინგი და ვიზუალური მასალები | Next-Hub",
          description:
            "Next-Hub გთავაზობთ გრაფიკული დიზაინის სერვისებს: ლოგოს დიზაინი, ბრენდინგი, სოციალური მედიის ვიზუალები, ბანერები და ბიზნესისთვის მორგებული კრეატიული მასალები.",
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
        ]}
      />
      <div className="flex justify-center items-center min-h-screen">
        <Circles />
        {/* <GraphicDesignPriceCard /> */}
        <Portfolio />
        <Bulb />
      </div>
    </>
  );
};

export default graphic_design;
