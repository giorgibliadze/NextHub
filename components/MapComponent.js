import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 41.729583,
  lng: 44.741778,
};

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [markerIcon, setMarkerIcon] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
    const icon = {
      url: "/custom-marker.svg",
      scaledSize: new window.google.maps.Size(40, 40),
    };
    setMarkerIcon(icon);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="flex justify-center items-center w-full h-screen">
        <GoogleMap
          mapContainerClassName="w-full h-3/5 max-w-5xl rounded-lg shadow-lg"
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
