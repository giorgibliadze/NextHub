"use client";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", label: "მთავარი გვერდი", path: "/", icon: <HiHome /> },
  { name: "about", label: "ჩვენ შესახებ", path: "/about", icon: <HiUser /> },
  { name: "services", label: "სერვისები", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", label: "პორტფოლიო", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    label: "კონტაქტი",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const servicePaths = [
  "/ai-video-creation",
  "/google-business-profile-optimization",
  "/seo-services",
  "/software-development",
  "/web-design",
  "/webdevelopment",
  "/website-maintenance-services",
  "/real-estate-websites",
  "/clinic-booking-systems",
  "/tourism-websites",
];

//next link
import Link from "next/link";

//next navigation
import { usePathname } from "next/navigation";
import { isEnglishRoute } from "../lib/languageRoutes";

function isActivePath(pathname, path) {
  if (path === "/" || path === "/en") {
    return pathname === path;
  }

  if (path === "/services" && servicePaths.includes(pathname)) {
    return true;
  }

  if (
    path === "/en/services" &&
    servicePaths.some((servicePath) => pathname === `/en${servicePath}`)
  ) {
    return true;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

const Nav = () => {
  const pathname = usePathname() || "/";
  const isEnglish = isEnglishRoute(pathname);
  const links = isEnglish
    ? [
        { name: "home", label: "English home", path: "/en", icon: <HiHome /> },
        {
          name: "about",
          label: "About us",
          path: "/en/about",
          icon: <HiUser />,
        },
        {
          name: "services",
          label: "Services",
          path: "/en/services",
          icon: <HiRectangleGroup />,
        },
        {
          name: "work",
          label: "Portfolio",
          path: "/en/work",
          icon: <HiViewColumns />,
        },
        {
          name: "contact",
          label: "Contact Next-Hub Solutions",
          path: "/en/contact",
          icon: <HiEnvelope />,
        },
      ]
    : navData;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-150 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between z-50 xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {links.map((link) => {
          return (
            <Link
              className={`${
                isActivePath(pathname, link.path) ? "text-accent" : ""
              } relative flex item-center group hover:text-accent transition-all duration-300`}
              key={link.path}
              href={link.path}
              aria-label={link.label}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icons */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
