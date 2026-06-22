"use client";

import { useEffect, useState } from "react";

const center = { lat: 41.729583, lng: 44.741778 };
const mapEmbedUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}&z=16&output=embed`;
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;

export default function MapComponent() {
  const [mounted, setMounted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapTimedOut, setMapTimedOut] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || mapLoaded) return;

    const timeout = window.setTimeout(() => {
      setMapTimedOut(true);
    }, 6500);

    return () => window.clearTimeout(timeout);
  }, [mapLoaded, mounted]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 mb-10 md:mt-0 md:mb-0">
      <div className="contact-map-card relative h-[280px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] shadow-2xl shadow-accent/10 md:h-[520px] md:rounded-[28px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,48,36,0.12),transparent_42%)]" />

        {!mapLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#10091b]">
            <div className="mb-5 h-16 w-16 animate-pulse rounded-full border border-accent/40 bg-accent/10 shadow-[0_0_30px_rgba(241,48,36,0.22)]" />
            <p className="text-sm text-white/60">რუკა იტვირთება...</p>
          </div>
        )}

        {mounted && (
          <iframe
            title="Next-Hub Solutions Google Map"
            className={`relative z-10 block h-full w-full border-0 bg-[#10091b] transition-opacity duration-500 ${
              mapLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={mapEmbedUrl}
            loading="eager"
            fetchPriority="low"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => {
              setMapLoaded(true);
              setMapTimedOut(false);
            }}
            onError={() => setMapTimedOut(true)}
          />
        )}

        {mapTimedOut && !mapLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#10091b]/95 px-5 text-center">
            <div className="max-w-sm rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-accent/10">
              <h3 className="mb-3 text-xl font-semibold text-white">
                რუკა დროებით ვერ ჩაიტვირთა
              </h3>
              <p className="mb-5 text-sm leading-7 text-white/60">
                შეგიძლიათ გახსნათ ჩვენი მდებარეობა პირდაპირ Google Maps-ში.
              </p>
              <a
                href={mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
              >
                რუკის გახსნა Google Maps-ში
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
