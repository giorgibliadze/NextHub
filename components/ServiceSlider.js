// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { DiGoogleAnalytics } from "react-icons/di";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CiLocationOn } from "react-icons/ci";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { FaHandsHelping } from "react-icons/fa";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "ვებ დეველოპმენტი",
    description:
      "თანამედროვე დიზაინი, თემატური, ყველა მოწყობილობასთან თავსებადი, სწრაფი და ადვილად ძებნადი",
    link: "/services/web-development",
  },
  {
    icon: <RxRocket />,
    title: "SEO ოპტიმიზაცია",
    description:
      "გამოჩნდი საძიებო სისტემების TOP პოზიციებზე, გაზარდე ინტერნეტ გაყიდვების მოცულობა",
    link: "/services/seo",
  },
  {
    icon: <TfiLayoutMediaLeftAlt />,
    title: "სოციალური მედია მენეჯმენტი",
    description: "ეფექტური ონლაინ სარეკლამო კამპანიები სოციალურ მედიაში",
    link: "/services/soc_media",
  },
  {
    icon: <DiGoogleAnalytics />,
    title: "ანალიტიკა",
    description: "მონაცემთა ანალიზი ციფრული სტრატეგიების ოპტიმიზაცია",
    link: "/services/analytics",
  },
  {
    icon: <CiLocationOn />,
    title: "ლოკაციის ოპტიმიზაცია",
    description: "გამოჩნდი Google-ს რუკაზე და საძიებო კატალოგებში",
    link: "/services/location",
  },
  {
    icon: <FaHandsHelping />,
    title: "ტექნიკური დახმარება",
    description: "საიტის ტექნიკური აუდიტი",
    link: "/services/tech_support",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
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
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-[500px] mt-9"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={item.link}>
              <div
                className={`bg-[rgba(65,7,123,0.15)] h-[450px] rounded-lg px-6 py-8 flex flex-col gap-y-6 cursor-pointer hover:bg-[rgba(116,79,238,0.15)] transition-all duration-300 ${
                  index % 2 === 0 ? "mt-0" : "mt-20"
                }`}
              >
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <div className="mb-4">
                  <div className="mb-2 text-lg font-semibold">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl mt-auto group">
                  <RxArrowTopRight className="group-hover:rotate-[45deg] group-hover:text-red-500 rotate-[45deg] transition-all duration-300" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
