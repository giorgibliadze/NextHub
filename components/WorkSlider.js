// components/WorkSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const workSlides = {
  slides: [
    {
      images: [
        { title: "TenaHandmade", path: "/TenaHandmade.png", link: "https://tenahandmade.com", status: "დასრულებული" },
        { title: "JewelryTools", path: "/Jewelrytools.png", link: "https://jewelrytools.ge/", status: "დასრულებული" },
        { title: "NbFurniture", path: "/NbFurniture.png", link: "https://nbfurniture.ge/", status: "დასრულებული" },
        { title: "Ninos-ia", path: "/ninos-ia.png", link: "https://ninosia.pro/shop/", status: "დასრულებული" },
        { title: "Core", path: "/core.png", link: "https://core.org.ge/", status: "დასრულებული" },
        { title: "Teba", path: "/Teba.png", link: "https://teba.ge/", status: "დასრულებული" },
        { title: "Bigloans", path: "/Bigloans.png", link: "https://bigloans.ge", status: "დასრულებული" },
        { title: "WearHouse", path: "/WearHouse.png", link: "https://wearhouse.ge", status: "დასრულებული" },
        { title: "PaLocksmith", path: "/PaLocksmith.png", link: "https://palocksmithservice.com/", status: "დასრულებული" },
        { title: "WakeUp", path: "/WakeUp.png", link: "https://wakeup.ge", status: "მიმდინარე" },
        { title: "EchelonEngineering", path: "/EchelonEngineering.png", link: "https://echelonengineering.ge", status: "მიმდინარე" },
        { title: "GeoArtConstruction", path: "/GeoArtConstruction.png", link: "https://geoartconstruction.ge", status: "მიმდინარე" },
        { title: "katta", path: "/Katta.png", link: "https://katta.ge", status: "მიმდინარე" },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-auto mt-9"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:max-w-[900px] gap-4 cursor-pointer p-4 smx:mb-[150px] lg:mr-[50px]">
            {slide.images.map((image, idx) => (
              <Link href={image.link} key={idx} target="_blank" rel="noopener noreferrer">
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group p-4 bg-white shadow-lg w-full">
                  <div className="relative w-full rounded-lg min-w-[250px]">
                    {/* 16:9 box for the logo/image */}
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={image.path}
                        alt={image.title}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 450px"
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                        priority={i === 0 && idx < 2} // preload a couple of first images
                      />
                    </div>
                  </div>

                  {/* hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-lg" />

                  {/* hover title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 w-full text-center">
                    <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">{image.status}</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        პროექტი
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}