// components/Portfolio.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button"; // uses your existing Button component

const portfolioItems = [
  { title: "TenaHandmade", path: "/TenaHandmade.png", link: "https://tenahandmade.ge", category: "დასრულებული" },
  { title: "Ninos-ia", path: "/ninos-ia.png", link: "https://ninosia.pro/shop/", category: "დასრულებული" },
  { title: "Core", path: "/core.png", link: "https://core.org.ge/", category: "დასრულებული" },
  { title: "Hoppa", path: "/Hoppa.jpg", link: "https://hoppa.ge", category: "დასრულებული" },
  { title: "Bigloans", path: "/Bigloans.png", link: "https://bigloans.ge", category: "დასრულებული" },
  { title: "WearHouse", path: "/WearHouse.png", link: "https://wearhouse.ge", category: "დასრულებული" },
  { title: "WakeUp", path: "/WakeUp.png", link: "https://wakeup.ge", category: "მიმდინარე" },
  { title: "EchelonEngineering", path: "/EchelonEngineering.png", link: "https://echelonengineering.ge", category: "მიმდინარე" },
  { title: "GeoArtConstruction", path: "/GeoArtConstruction.png", link: "https://geoartconstruction.ge", category: "მიმდინარე" },
  { title: "katta", path: "/Katta.png", link: "https://katta.ge", category: "მიმდინარე" },
];

const categories = ["ყველა", "დასრულებული", "მიმდინარე"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ყველა");

  const filteredItems =
    activeCategory === "ყველა"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="w-[80%] mt-[150px] mx-auto px-4 py-12 items-center">
        {/* Sidebar filter buttons */}
        <div className="gap-4 md:min-w-[150px] ml-[15px] mr-[15px] flex">
          {categories.map((category) => (
            <div key={category} className="flex flex-col">
                <Button
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </Button>
            </div>
          ))}
        </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          {filteredItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={item.path}
                  alt={item.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center mt-2 font-medium">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}