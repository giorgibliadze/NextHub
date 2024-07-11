// pages/graphic_design.js
import React from "react";
import GraphicDesignPriceCard from "../../components/GraphicDesignPriceCard";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
const graphic_design = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Circles />
      <GraphicDesignPriceCard />
      <Bulb />
    </div>
  );
};

export default graphic_design;
