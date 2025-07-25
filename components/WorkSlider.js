// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "TenaHandmade",
          path: "/TenaHandmade.png",
          link: "https://tenahandmade.com",
          status: "დასრულებული",
        },
        {
          title: "EvakuatorService",
          path: "/EvakuatorService.png",
          link: "https://evakuatorservice.ge/",
          status: "დასრულებული",
        },
        {
          title: "JewelryTools",
          path: "/Jewelrytools.png",
          link: "https://jewelrytools.ge/",
          status: "დასრულებული",
        },
        {
          title: "Ninos-ia",
          path: "/ninos-ia.png",
          link: "https://ninosia.pro/shop/",
          status: "დასრულებული",
        },
        {
          title: "Core",
          path: "/core.png",
          link: "https://core.org.ge/",
          status: "დასრულებული",
        },
        {
          title: "Teba",
          path: "/Teba.png",
          link: "https://teba.ge/",
          status: "დასრულებული",
          
        },
        {
          title: "Bigloans",
          path: "/Bigloans.png",
          link: "https://bigloans.ge",
          status: "დასრულებული",
        },
        {
          title: "WearHouse",
          path: "/WearHouse.png",
          link: "https://wearhouse.ge",
          status: "დასრულებული",
        },
        {
          title: "PaLocksmith",
          path: "/PaLocksmith.png",
          link: "https://palocksmithservice.com/",
          status: "დასრულებული",
        },
        {
          title: "WakeUp",
          path: "/WakeUp.png",
          link: "https://wakeup.ge",
          status: "მიმდინარე",
        },
        {
          title: "EchelonEngineering",
          path: "/EchelonEngineering.png",
          link: "https://echelonengineering.ge",
          status: "მიმდინარე",
        },
        {
          title: "GeoArtConstruction",
          path: "/GeoArtConstruction.png",
          link: "https://geoartconstruction.ge",
          status: "მიმდინარე",
        },
        {
          title: "katta",
          path: "/Katta.png",
          link: "https://katta.ge",
          status: "მიმდინარე",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto mt-9"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[900px] sm:grid-cols-2 gap-4 cursor-pointer p-4 smx:mb-[150px] lg:mr-[50px]">
              {slide.images.map((image, index) => {
                return (
                  <Link href={`${image.link}`} key={index}>
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group p-4 bg-white shadow-lg w-full"
                    >
                      <div className="relative overflow-hidden group w-full rounded-lg min-w-[250px]">
                        {/* image */}
                        <div className="relative w-full h-0 pb-[56.25%]">
                          {" "}
                          {/* 16:9 Aspect Ratio */}
                          <Image
                            src={image.path}
                            layout="fill"
                            objectFit="contain"
                            alt={image.title}
                            className="rounded-lg"
                          />
                        </div>
                        {/* overflow gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-lg"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 w-full text-center">
                          <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">{image.status}</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              პროექტი
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
