// components/PriceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import CountUp from "react-countup";

const PriceCard = ({ title, price, features, onButtonClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-6 border-4 border-glow bg-gradient-to-r from-primary/10 via-black/30 to-black/10 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow z-40"
    >
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h3>
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 animate-price-glow">
        ₾ <CountUp start={500} end={price} duration={1} /> +
      </div>
      <ul className="text-gray-200 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {
          console.log("Button inside PriceCard clicked");
          onButtonClick();
        }}
      >
        Purchase
      </Button>
    </motion.div>
  );
};

export default PriceCard;
