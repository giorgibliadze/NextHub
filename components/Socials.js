//links
import Link from "next/link";

//icons
import { RiFacebookLine } from "react-icons/ri";

import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-30">
      <Link
        href={"https://www.facebook.com/nexthubsolutions"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={"https://www.instagram.com/next.hub.pro/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href={"https://www.linkedin.com/company/next-hub-solutions/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
