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
      url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23B83280' d='M12 2C8.14 2 5 5.14 5 9c0 4.67 6.31 11.55 6.59 11.84.25.26.66.26.91 0 .29-.29 6.59-7.17 6.59-11.84 0-3.86-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'/%3E%3C/svg%3E",
      scaledSize: new window.google.maps.Size(40, 40),
    };
    setMarkerIcon(icon);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="flex justify-center items-center w-full h-screen">
        <GoogleMap
          mapContainerClassName="w-full h-3/5 max-w-5xl rounded shadow"
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
