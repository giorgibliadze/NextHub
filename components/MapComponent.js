// components/MapComponent.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.729583,
  lng: 44.741778,
};

const MapComponent = () => {
  console.log(process.env.GOOGLE_MAPS_API_KEY);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCEAC2BcHnyl-_OhyuKnN5CxEl5BaYvPXs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
