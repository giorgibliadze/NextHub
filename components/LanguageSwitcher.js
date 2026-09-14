"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiCheck, HiGlobeAlt } from "react-icons/hi2";
import { getLanguageTarget, isEnglishRoute } from "../lib/languageRoutes";

const languages = [
  { code: "ka", label: "ქართული" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState(null);
  const [urlSuffix, setUrlSuffix] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const currentLanguage = isEnglishRoute(pathname) ? "en" : "ka";
  const isEnglish = currentLanguage === "en";

  useEffect(() => {
    const pageLanguage = isEnglish ? "en" : "ka-GE";
    document.documentElement.lang = pageLanguage;
    document
      .querySelector('meta[http-equiv="content-language"]')
      ?.setAttribute("content", pageLanguage);
  }, [isEnglish]);

  useEffect(() => {
    const updateUrlSuffix = () => {
      setUrlSuffix(`${window.location.search}${window.location.hash}`);
    };

    updateUrlSuffix();
    window.addEventListener("hashchange", updateUrlSuffix);
    window.addEventListener("popstate", updateUrlSuffix);

    return () => {
      window.removeEventListener("hashchange", updateUrlSuffix);
      window.removeEventListener("popstate", updateUrlSuffix);
    };
  }, [pathname]);

  useEffect(() => {
    const anchor = document.querySelector("[data-language-switcher-anchor]");
    if (!anchor) return undefined;

    const scrollContainer = anchor.closest(".page");
    const header = anchor.closest("header");
    let isActive = true;

    const updatePosition = () => {
      const anchorRect = anchor.getBoundingClientRect();
      const scrollTop = scrollContainer?.scrollTop || window.scrollY;
      const scrollLeft = scrollContainer?.scrollLeft || window.scrollX;
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const nextPosition = {
        left: anchorRect.left + scrollLeft,
        top: anchorRect.top + scrollTop,
        isMobile,
      };

      setAnchorPosition((currentPosition) => {
        if (
          currentPosition?.left === nextPosition.left &&
          currentPosition?.top === nextPosition.top &&
          currentPosition?.isMobile === nextPosition.isMobile
        ) {
          return currentPosition;
        }

        return nextPosition;
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(anchor);
    if (header) resizeObserver.observe(header);

    document.fonts?.ready.then(() => {
      if (isActive) updatePosition();
    });

    return () => {
      isActive = false;
      window.removeEventListener("resize", updatePosition);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleOutsidePointer = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      data-positioned={anchorPosition ? "true" : "false"}
      style={
        anchorPosition
          ? anchorPosition.isMobile
            ? {
                right: "calc(8px + env(safe-area-inset-right))",
                top: `max(calc(8px + env(safe-area-inset-top)), ${anchorPosition.top}px)`,
              }
            : {
                left: `clamp(calc(8px + env(safe-area-inset-left)), ${anchorPosition.left}px, calc(100vw - 80px - env(safe-area-inset-right)))`,
                top: `max(calc(8px + env(safe-area-inset-top)), ${anchorPosition.top}px)`,
              }
          : undefined
      }
      className={`fixed z-40 xl:z-[51] ${
        anchorPosition ? "visible" : "invisible"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="language-switcher-menu"
            role="menu"
            aria-label={isEnglish ? "Language selection" : "ენის არჩევა"}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute top-full right-0 mt-2 min-w-[152px] origin-top-right overflow-hidden rounded-2xl border border-white/15 bg-[#17102f] p-1.5 font-sora text-sm text-white shadow-[0_12px_32px_rgba(0,0,0,0.34)] supports-[backdrop-filter]:bg-[#17102f]/95 supports-[backdrop-filter]:backdrop-blur-md"
          >
            {languages.map((language) => {
              const isActive = language.code === currentLanguage;

              return (
                <Link
                  key={language.code}
                  href={getLanguageTarget(pathname, language.code, urlSuffix)}
                  scroll={false}
                  role="menuitem"
                  lang={language.code === "ka" ? "ka" : "en"}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-11 items-center justify-between gap-4 rounded-xl px-3 py-2.5 font-semibold transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{language.label}</span>
                  {isActive && (
                    <HiCheck aria-hidden="true" className="shrink-0 text-base" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={buttonRef}
        type="button"
        aria-label={
          isEnglish
            ? isOpen
              ? "Close language selector"
              : "Choose language"
            : isOpen
              ? "ენის მენიუს დახურვა"
              : "ენის არჩევა"
        }
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-switcher-menu"
        onClick={() => {
          setUrlSuffix(`${window.location.search}${window.location.hash}`);
          setIsOpen((open) => !open);
        }}
        className="flex h-12 min-w-12 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-[#17102f] px-3 font-sora text-xs font-bold tracking-[0.08em] text-white shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-[border-color,background-color,color,transform] duration-150 supports-[backdrop-filter]:bg-[#17102f]/95 supports-[backdrop-filter]:backdrop-blur-md hover:border-accent/60 hover:bg-[#201641] hover:text-accent active:scale-[0.98] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <HiGlobeAlt aria-hidden="true" className="shrink-0 text-xl" />
        <span>{currentLanguage === "en" ? "EN" : "KA"}</span>
      </button>
    </div>
  );
}
