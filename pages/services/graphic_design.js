// pages/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../components/GraphicDesignPriceCard";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
const graphic_design = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Next-Hub Solutions | Graphic Design</title>
        <meta
          name="description"
          content="გრაფიკული დიზაინის სერვისები Next-Hub Solutions-ისგან. შექმენით უნიკალური და მიმზიდველი დიზაინები ჩვენი გამოცდილ დიზაინერების დახმარებით."
        />
        <meta
          name="keywords"
          content="Next-Hub, Graphic Design, გრაფიკული დიზაინი, უნიკალური დიზაინები, დიზაინერების დახმარება"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Next-Hub Solutions | Graphic Design"
        />
        <meta
          property="og:description"
          content="გრაფიკული დიზაინის სერვისები Next-Hub Solutions-ისგან. შექმენით უნიკალური და მიმზიდველი დიზაინები ჩვენი გამოცდილ დიზაინერების დახმარებით."
        />
        <meta name="changefreq" content="always" />
        <meta
          property="og:url"
          content="https://www.next-hub.pro/services/graphic_design"
        />
        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta
          name="twitter:title"
          content="Next-Hub Solutions | Graphic Design"
        />
        <meta
          name="twitter:description"
          content="გრაფიკული დიზაინის სერვისები Next-Hub Solutions-ისგან. შექმენით უნიკალური და მიმზიდველი დიზაინები ჩვენი გამოცდილ დიზაინერების დახმარებით."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.jpg" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Circles />
      <GraphicDesignPriceCard />
      <Bulb />
    </div>
  );
};

export default graphic_design;
