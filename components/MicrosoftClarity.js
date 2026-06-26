"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

let clarityInitialized = false;

export default function MicrosoftClarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (
      !projectId ||
      projectId === "yourProjectId" ||
      typeof window === "undefined" ||
      clarityInitialized
    ) {
      return;
    }

    const initializeClarity = () => {
      if (clarityInitialized) return;

      Clarity.init(projectId);
      Clarity.setTag("site", "next-hub");
      Clarity.setTag("environment", process.env.NODE_ENV);
      clarityInitialized = true;
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(initializeClarity, {
        timeout: 3000,
      });

      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(initializeClarity, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
