// components/GraphicDesignPriceCard.js
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const GraphicDesignPriceCard = () => {
  const priceCardData = {
    title: "Graphic Design",
    price: 500,
    features: [
      "Logo - from 500 GEL",
      "Brandbook - 1000 from the LAR.",
      "Logo Redesign - 300 from the LAR.",
      "Brochure - 200 GEL",
      "Savidiobro barati - 80",
      "Poster (pataura) - 40",
      "Poster (didi) - 100",
      "Gari barati - 200 GEL",
      "Flayeri - 80 GEL",
    ],
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center p-6 border-4 border-glow bg-gradient-to-r from-primary/10 via-black/30 to-black/10 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow z-0"
    >
      <h3 className="text-3xl font-semibold text-accent mb-4">
        {priceCardData.title}
      </h3>

      <ul className="text-gray-200 text-center mb-4">
        {priceCardData.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default GraphicDesignPriceCard;
