import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
      style={{ willChange: "transform, opacity" }}
    >
      <Analytics />
      <SpeedInsights />
      <TopLeftImg />
      <Nav />
      <Header />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
