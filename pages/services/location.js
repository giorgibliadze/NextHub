import React from "react";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const location = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="mb-5 text-2xl font-bold text-gray-800 text-center">
        My Google Map
      </h1>
      <MapComponent />
    </div>
  );
};

export default location;
