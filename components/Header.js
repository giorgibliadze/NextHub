"use client";

//next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";
import { usePathname } from "next/navigation";
import { isEnglishRoute } from "../lib/languageRoutes";

const Header = () => {
  const pathname = usePathname() || "/";
  const isEnglish = isEnglishRoute(pathname);

  return (
    <header className="absolute top-0 left-0 z-30 w-full px-16 lg:flex lg:items-center xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 lg:h-full">
          {/* logo */}
          <Link href={isEnglish ? "/en" : "/"}>
            <div className="hidden lg:block">
              <Image
                src={"/file.png"}
                width={220}
                height={70}
                alt={isEnglish ? "Next-Hub Solutions logo" : "Next-Hub Solutions ლოგო"}
                priority={true}
              />
            </div>
          </Link>
          {/* socials and reserved language-switcher space */}
          <div className="relative flex items-center lg:gap-x-2.5">
            <Socials />
            <span
              data-language-switcher-anchor
              aria-hidden="true"
              className="absolute right-0 top-1/2 h-12 w-[72px] -translate-y-1/2 lg:static lg:shrink-0 lg:translate-y-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
