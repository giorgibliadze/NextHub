import "../styles/globals.css";

//components
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import BrandedLoader from "../components/BrandedLoader";

//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setIsLoading(false), 650);

    const handleStart = () => setIsLoading(true);
    const handleDone = () => {
      window.setTimeout(() => setIsLoading(false), 250);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleDone);

    return () => {
      window.clearTimeout(initialTimer);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleDone);
    };
  }, [router.events]);

  return (
    <Layout>
      <AnimatePresence>{isLoading && <BrandedLoader />}</AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          {/* <Transition /> */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
