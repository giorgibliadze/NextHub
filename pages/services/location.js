import React from "react";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const location = () => {
  return (
    <div className="flex flex-col items-center p-5 rounded-2xl">
      <MapComponent />
    </div>
  );
};

export default location;
