// icons
import {
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { DiGoogleAnalytics } from "react-icons/di";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { SiTaichigraphics } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaHandsHelping, FaVideo } from "react-icons/fa";
// import required modules
import { FreeMode, Autoplay } from "swiper";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "making a website.",
    description:
      "you're going to build modern, fast, user-friendly websites that work properly on all devices.",
    link: "/en/webdevelopment",
  },
  {
    icon: <SiGooglemarketingplatform />,
    title: "software.",
    description:
      "we're building business-specific systems, portals, CRM solutions, and individual web applications for workflows.",
    link: "/en/software-development",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    description:
      "SEO services help you to better appear in Google, attract quality traffic and increase sales for businesses in Georgia.",
    link: "/en/seo-services",
  },
  // {
  //   icon: <RiFacebookCircleFill />,
  //   title: "სოციალური მედია მენეჯმენტი",
  //   description:
  //     "განვახორციელებთ ეფექტურ სარეკლამო კამპანიებს თქვენს სოციალურ ქსელებში.",
  //   link: "/services/soc_media",
  // },
  {
    icon: <SiTaichigraphics />,
    title: "Web design.",
    description:
      "we're creating modern, clean, conversion-focused design for websites, landings, and digital products.",
    link: "/en/web-design",
  },
  {
    icon: <DiGoogleAnalytics />,
    title: "Google Business Profile",
    description:
      "We run Google Business Profile- and Google Maps optimization so that local users can find you easily in their searches.",
    link: "/en/google-business-profile-optimization",
  },
  {
    icon: <FaHandsHelping />,
    title: "Support the site.",
    description:
      "we take care of the maintenance of the site, technical support, security updates, speed and stability on a daily basis.",
    link: "/en/website-maintenance-services",
  },
  {
    icon: <FaVideo />,
    title: "AI video creation",
    description:
      "We create promotional videos, Reels, product presentations, and multi-lingual AI avatar videos for business.",
    link: "/en/ai-video-creation",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className="h-[500px] mt-9"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={item.link}>
            <div
              className={`bg-[rgba(65,7,123,0.15)] h-[450px] md:h-[400px] rounded-lg px-4 md:px-6 py-6 flex flex-col gap-y-4 md:gap-y-6 cursor-pointer hover:bg-[rgba(116,79,238,0.15)] transition-all duration-300 ${
                index % 2 === 0 ? "md:mt-0" : "md:mt-20"
              }`}
            >
              {/* icon */}
              <div className="text-3xl md:text-4xl text-accent mb-2 md:mb-4">
                {item.icon}
              </div>
              {/* title & desc */}
              <div className="mb-2 md:mb-4">
                <div className="mb-1 md:mb-2 text-base md:text-lg font-semibold">
                  {item.title}
                </div>
                <p className="max-w-[300px] md:max-w-[350px] leading-normal text-sm md:text-base">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-2xl md:text-3xl mt-auto group">
                <RxArrowTopRight className="group-hover:rotate-[45deg] group-hover:text-red-500 rotate-[45deg] transition-all duration-300" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
