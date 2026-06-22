"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const center = { lat: 41.729583, lng: 44.741778 };

export default function MapComponent() {
  const [apiReady, setApiReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  useEffect(() => {
    if (!apiReady || !window.google) return;

    const el = document.getElementById("gmap-container");
    if (!el) return;

    const map = new window.google.maps.Map(el, {
      center,
      zoom: 16,
      disableDefaultUI: true,
      zoomControl: true,
    });

    const icon = {
      url: "/location-map.png",
      scaledSize: new window.google.maps.Size(44, 44),
      anchor: new window.google.maps.Point(22, 44),
    };

    new window.google.maps.Marker({
      map,
      position: center,
      title: "Our location",
      icon,
    });
  }, [apiReady]);

  const showFallback = !apiKey || scriptError;

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 mb-10 md:mt-0 md:mb-0">
      <div
        className="contact-map-card relative w-full h-[280px] sm:h-[320px] md:h-[520px] overflow-hidden rounded-[24px] md:rounded-[28px] border border-white/10 bg-white/[0.05] shadow-2xl shadow-accent/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,48,36,0.12),transparent_42%)]" />
        <div
          id="gmap-container"
          className={`relative z-10 h-full w-full bg-[#10091b] ${
            showFallback ? "hidden" : "block"
          }`}
        />
        {showFallback && (
          <iframe
            title="Google Map"
            className="relative z-10 block h-full w-full border-0 bg-[#10091b]"
            src={`https://www.google.com/maps?q=${center.lat},${center.lng}&z=16&output=embed`}
            loading="lazy"
          />
        )}
      </div>
      {apiKey && (
        <Script
          id="google-maps"
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`}
          strategy="afterInteractive"
          onLoad={() => setApiReady(true)}
          onError={() => setScriptError(true)}
        />
      )}
    </div>
  );
}
