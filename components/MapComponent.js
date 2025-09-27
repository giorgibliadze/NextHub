'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const center = { lat: 41.729583, lng: 44.741778 };

export default function MapComponent() {
  const [apiReady, setApiReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  useEffect(() => {
    if (!apiReady || !window.google) return;

    const el = document.getElementById('gmap-container');
    if (!el) return;

    const map = new window.google.maps.Map(el, {
      center,
      zoom: 16,
      disableDefaultUI: true,
      zoomControl: true,
    });

    const icon = {
      url: '/location-map.png',
      scaledSize: new window.google.maps.Size(44, 44),
      anchor: new window.google.maps.Point(22, 44),
    };

    new window.google.maps.Marker({
      map,
      position: center,
      title: 'Our location',
      icon,
    });
  }, [apiReady]);

  const showFallback = !apiKey || scriptError;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        id="gmap-container"
        className="w-full h-[420px] md:h-[520px] rounded-2xl shadow overflow-hidden bg-gray-100"
      />
      {showFallback && (
        <iframe
          title="Google Map"
          className="w-full h-[320px] mt-3 rounded-2xl border-0 shadow"
          src={`https://www.google.com/maps?q=${center.lat},${center.lng}&z=16&output=embed`}
          loading="lazy"
        />
      )}
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