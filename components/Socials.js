//links
import Link from "next/link";

//icons
import { RiFacebookLine } from "react-icons/ri";

import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.facebook.com/profile.php?id=61558598683056"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={"https://gitlab.com/bliadze1997"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/giorgi-bliadze-040413145/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
