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
import "swiper/css/autoplay";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiTaichigraphics } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import { FaHandsHelping } from "react-icons/fa";
// import required modules
import { FreeMode, Autoplay } from "swiper";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <SiGooglemarketingplatform />,
    title: "ციფრული მარკეტინგი",
    description:
      "გთავაზობთ ინოვაციურ ციფრულ მარკეტინგს, რაც გაზრდის თქვენი ბრენდის ცნობადობას და მომხმარებელთა ჩართულობას.",
    link: "/services/digital_marketing",
  },
  {
    icon: <RxDesktop />,
    title: "ვებსაიტის დამზადება",
    description:
      "დაგიმზადებთ თანამედროვე და მომხმარებლისთვის მოსახერხებელ ვებ-გვერდებს, რომელიც თავსებადია ყველა მოწყობილობასთან.",
    link: "/services/web_development",
  },
  {
    icon: <RxRocket />,
    title: "SEO ოპტიმიზაცია",
    description:
      "ჩვენი SEO სერვისები დაგეხმარებათ საძიებო სისტემებში მოწინავე პოზიციების დაკავებაში და გაყიდვების ზრდაში.",
    link: "/services/seo",
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
    title: "გრაფიკული დიზაინი",
    description:
      "ჩვენი გრაფიკული დიზაინის სერვისები დაგეხმარებათ შექმნათ უნიკალური ვიზუალი, რომელიც თქვენს ბიზნესს გამოარჩევს და მომხმარებლებს მიიზიდავს.",
    link: "/services/graphic_design",
  },
  {
    icon: <DiGoogleAnalytics />,
    title: "ანალიტიკა",
    description:
      "მონაცემთა დეტალური ანალიზით ვზომავთ და ვაუმჯობესებთ ციფრულ სტრატეგიებს.",
    link: "/services/analytics",
  },
  {
    icon: <FaHandsHelping />,
    title: "ტექნიკური დახმარება",
    description:
      "ვაწარმოებთ საიტის ტექნიკურ აუდიტს და ვაძლიერებთ მის ფუნქციონირებას.",
    link: "/services/tech_support",
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
