// pages/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../components/GraphicDesignPriceCard";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextSeo } from "next-seo";
const graphic_design = () => {
  return (
    <>
      <NextSeo
        title="Next-Hub Solutions | Graphic Design"
        description="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        keywords="Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/services/graphic_design",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Graphic Design",
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
          title: "Next-Hub Solutions | Graphic Design",
          description:
            "გრაფიკული დიზაინის სერვისები Next-Hub Solutions-ისგან. შექმენით უნიკალური და მიმზიდველი დიზაინები ჩვენი გამოცდილ დიზაინერების დახმარებით.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, Graphic Design, გრაფიკული დიზაინი, უნიკალური დიზაინები, დიზაინერების დახმარება",
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
      <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
      <div className="flex justify-center items-center min-h-screen">
        <Circles />
        <GraphicDesignPriceCard />
        <Bulb />
      </div>
    </>
  );
};

export default graphic_design;
