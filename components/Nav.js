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
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const servicePaths = [
  "/google-business-profile-optimization",
  "/seo-services",
  "/software-development",
  "/web-design",
  "/webdevelopment",
  "/website-maintenance-services",
];

//next link
import Link from "next/link";

//next navigation
import { usePathname } from "next/navigation";

function isActivePath(pathname, path) {
  if (path === "/") {
    return pathname === path;
  }

  if (path === "/services" && servicePaths.includes(pathname)) {
    return true;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

const Nav = () => {
  const pathname = usePathname() || "/";

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-150 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between z-50 xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                isActivePath(pathname, link.path) ? "text-accent" : ""
              } relative flex item-center group hover:text-accent transition-all duration-300`}
              key={index}
              href={link.path}
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
