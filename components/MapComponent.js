import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const LoadScript = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.LoadScript),
  { ssr: false }
);
const GoogleMap = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.GoogleMap),
  { ssr: false }
);
const Marker = dynamic(
  () => import("@react-google-maps/api").then((mod) => mod.Marker),
  { ssr: false }
);

const center = {
  lat: 41.729583,
  lng: 44.741778,
};

const MapComponent = () => {
  const [markerIcon, setMarkerIcon] = useState(null);

  const onLoad = useCallback((map) => {
    const icon = {
      url: "/public/location-map.webp",
      scaledSize: new window.google.maps.Size(40, 40),
    };
    setMarkerIcon(icon);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="flex justify-center items-center w-full h-screen z-30">
        <GoogleMap
          mapContainerClassName="w-full h-3/5 max-w-5xl shadow rounded-2xl"
          center={center}
          zoom={15}
          onLoad={onLoad}
        >
          {markerIcon && <Marker position={center} icon={markerIcon} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapComponent;
