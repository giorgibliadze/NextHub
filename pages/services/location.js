import React from "react";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const location = () => {
  return (
    <div>
      <MapComponent />
    </div>
  );
};

export default location;
