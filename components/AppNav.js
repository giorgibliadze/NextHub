"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

const navData = [
  { name: "მთავარი", path: "/", icon: <HiHome /> },
  { name: "ჩვენ შესახებ", path: "/about", icon: <HiUser /> },
  { name: "სერვისები", path: "/services", icon: <HiRectangleGroup /> },
  { name: "ნამუშევრები", path: "/work", icon: <HiViewColumns /> },
  { name: "კონტაქტი", path: "/contact", icon: <HiEnvelope /> },
];

const AppNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-150 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between z-50 xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => (
          <Link
            className={`${
              link.path === pathname ? "text-accent" : ""
            } relative flex item-center group hover:text-accent transition-all duration-300`}
            key={link.path}
            href={link.path}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AppNav;
