import "../styles/globals.css";

//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";
import { GoogleTagManager } from "@next/third-parties/google";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
     
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
        <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
          {/* <Transition /> */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
