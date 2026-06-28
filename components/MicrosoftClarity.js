"use client";

import { useEffect } from "react";

let clarityInitialized = false;

export default function MicrosoftClarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    let isCancelled = false;

    if (
      !projectId ||
      projectId === "yourProjectId" ||
      typeof window === "undefined" ||
      clarityInitialized
    ) {
      return;
    }

    const initializeClarity = async () => {
      if (clarityInitialized) return;

      const { default: Clarity } = await import("@microsoft/clarity");
      if (isCancelled || clarityInitialized) return;

      Clarity.init(projectId);
      Clarity.setTag("site", "next-hub");
      Clarity.setTag("environment", process.env.NODE_ENV);
      clarityInitialized = true;
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(initializeClarity, {
        timeout: 3000,
      });

      return () => {
        isCancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timer = window.setTimeout(initializeClarity, 2500);

    return () => {
      isCancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
