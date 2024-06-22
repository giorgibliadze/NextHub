import React from "react";
import CountUp from "react-countup";
import Button from "./Button";

const PriceCard = ({ title, price, features, onButtonClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-slate-900 bg-slate-900/50 rounded-xl">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        ₾ <CountUp start={0} end={price} duration={1} /> +
      </div>
      <ul className="text-gray-300 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <Button onClick={onButtonClick}>Purchase</Button>
    </div>
  );
};

export default PriceCard;
