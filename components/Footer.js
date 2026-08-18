import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mobile-bottom-safe-space mt-auto w-full shrink-0 border-t border-white/10 bg-black/20 px-4 py-6 text-center text-xs text-white/60 backdrop-blur-sm md:px-8 md:pt-7 md:pb-28 md:text-sm xl:pb-7">
      <div className="container relative z-[160] mx-auto">
        © {currentYear}{" "}
        <Link
          href="/"
          className="text-white/75 transition-colors hover:text-accent"
        >
          Next-Hub Solutions
        </Link>
        . ყველა უფლება დაცულია.
      </div>
    </footer>
  );
};

export default Footer;
