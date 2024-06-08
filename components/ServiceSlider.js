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
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { CiLocationOn } from "react-icons/ci";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
//import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "ვებ დეველოპმენტი",
    description:
      "Crafting engaging web experiences with the latest technologies.",
  },
  {
    icon: <TfiLayoutMediaLeftAlt />,
    title: "სოციალური მედია მენეჯმენტი",
    description: "Building responsive and dynamic front-end solutions.",
  },
  {
    icon: <RxRocket />,
    title: "SEO ოპტიმიზაცია",
    description: "Creating SEO-friendly content for your audience.",
  },
  {
    icon: <DiGoogleAnalytics />,
    title: "ანალიტიკა",
    description:
      "Analyzing data to drive insights and optimize digital strategies.",
  },
  {
    icon: <CiLocationOn />,
    title: "ლოკაციის ოპტიმიზაცია",
    description: "Building responsive and dynamic front-end solutions.",
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
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[340px] mt-9"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,7,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-4">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
