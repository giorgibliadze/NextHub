//next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full lg:flex items-center px-16  xl:px-0 xl:h-[90px] hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 lg:h-full">
          {/* logo */}
          <Link href={"/"}>
            <div className="hidden lg:block">
              <Image
                src={"/file.png"}
                width={220}
                height={70}
                alt=""
                priority={true}
              />
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
