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
      className="flex flex-col items-center justify-center p-6 border border-gray-300 bg-white rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        ₾ <CountUp start={500} end={price} duration={1} /> +
      </div>
      <ul className="text-gray-700 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <Button onClick={onButtonClick}>Purchase</Button>
    </motion.div>
  );
};

export default PriceCard;
