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

    Clarity.init(projectId);
    Clarity.setTag("site", "next-hub");
    Clarity.setTag("environment", process.env.NODE_ENV);
    clarityInitialized = true;
  }, []);

  return null;
}
