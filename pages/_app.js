import "../styles/globals.css";

//components
import { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import BrandedLoader from "../components/BrandedLoader";

//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

const exitDuration = 300;
const minimumLoaderDuration = 400;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [phase, setPhase] = useState("loading");
  const phaseRef = useRef("loading");
  const transitionId = useRef(0);
  const pendingRoute = useRef(null);
  const routeChangeComplete = useRef(false);
  const loaderShownAt = useRef(Date.now());
  const exitTimer = useRef(null);
  const readyTimer = useRef(null);

  const updatePhase = useCallback((nextPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  }, []);

  const clearTransitionTimers = useCallback(() => {
    if (exitTimer.current) {
      window.clearTimeout(exitTimer.current);
      exitTimer.current = null;
    }

    if (readyTimer.current) {
      window.clearTimeout(readyTimer.current);
      readyTimer.current = null;
    }
  }, []);

  const scheduleReady = useCallback((currentTransitionId) => {
    if (readyTimer.current) {
      window.clearTimeout(readyTimer.current);
    }

    const elapsed = Date.now() - loaderShownAt.current;
    const remaining = Math.max(minimumLoaderDuration - elapsed, 0);

    readyTimer.current = window.setTimeout(() => {
      if (transitionId.current !== currentTransitionId) return;

      pendingRoute.current = null;
      routeChangeComplete.current = false;
      updatePhase("ready");
    }, remaining);
  }, [updatePhase]);

  const showLoader = useCallback((currentTransitionId) => {
    if (transitionId.current !== currentTransitionId) return;

    loaderShownAt.current = Date.now();
    updatePhase("loading");

    if (routeChangeComplete.current) {
      scheduleReady(currentTransitionId);
    }
  }, [scheduleReady, updatePhase]);

  useEffect(() => {
    scheduleReady(transitionId.current);

    const handleStart = (url) => {
      const currentTransitionId = transitionId.current + 1;
      transitionId.current = currentTransitionId;
      pendingRoute.current = url;
      routeChangeComplete.current = false;
      clearTransitionTimers();
      updatePhase("exiting");

      exitTimer.current = window.setTimeout(() => {
        showLoader(currentTransitionId);
      }, exitDuration);
    };

    const handleComplete = () => {
      routeChangeComplete.current = true;

      if (phaseRef.current === "loading") {
        scheduleReady(transitionId.current);
      }
    };

    const handleError = () => {
      transitionId.current += 1;
      pendingRoute.current = null;
      routeChangeComplete.current = false;
      clearTransitionTimers();
      updatePhase("idle");
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      clearTransitionTimers();
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [clearTransitionTimers, router.events, scheduleReady, showLoader, updatePhase]);

  useEffect(() => {
    document.body.classList.toggle("loading-active", phase === "loading");

    return () => {
      document.body.classList.remove("loading-active");
    };
  }, [phase]);

  const pageVisible = phase === "idle" || phase === "ready";

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === "loading" && <BrandedLoader key="global-loader" />}
      </AnimatePresence>
      <Layout>
        <motion.div
          key={router.asPath}
          initial={false}
          animate={{
            opacity: pageVisible ? 1 : 0,
            y: pageVisible ? 0 : 10,
          }}
          transition={{
            duration: phase === "exiting" ? exitDuration / 1000 : 0.3,
            ease: "easeOut",
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}

export default MyApp;
