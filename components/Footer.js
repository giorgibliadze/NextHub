"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return undefined;

    const alignWithContentEnd = () => {
      const page = footer.parentElement;

      if (!page) return;

      footer.style.removeProperty("margin-top");

      const footerBottom = footer.offsetTop + footer.offsetHeight;
      const overflowGap = Math.max(0, page.scrollHeight - footerBottom);

      if (overflowGap > 0) {
        const currentMargin = Number.parseFloat(
          window.getComputedStyle(footer).marginTop,
        );

        footer.style.marginTop = `${
          (Number.isFinite(currentMargin) ? currentMargin : 0) + overflowGap
        }px`;
      }
    };

    const animationFrame = window.requestAnimationFrame(alignWithContentEnd);
    const settledLayoutTimer = window.setTimeout(alignWithContentEnd, 250);

    window.addEventListener("resize", alignWithContentEnd);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(settledLayoutTimer);
      window.removeEventListener("resize", alignWithContentEnd);
    };
  }, [pathname]);

  return (
    <footer
      ref={footerRef}
      className="mobile-bottom-safe-space mt-auto w-full shrink-0 border-t border-white/10 bg-black/20 px-4 py-6 text-center text-xs text-white/60 backdrop-blur-sm md:px-8 md:pt-7 md:pb-28 md:text-sm xl:pb-7"
    >
      <div className="container relative z-[160] mx-auto">
        © {currentYear}{" "}
        <Link
          href="https://next-hub.pro/"
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
