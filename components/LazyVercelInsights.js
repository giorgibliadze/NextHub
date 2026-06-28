"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

const scheduleIdle = (callback) => {
  if (typeof window === "undefined") return undefined;

  if ("requestIdleCallback" in window) {
    const idleId = window.requestIdleCallback(callback, { timeout: 3500 });
    return () => window.cancelIdleCallback(idleId);
  }

  const timer = window.setTimeout(callback, 2500);
  return () => window.clearTimeout(timer);
};

export default function LazyVercelInsights() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => scheduleIdle(() => setShouldLoad(true)), []);

  if (!shouldLoad) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
