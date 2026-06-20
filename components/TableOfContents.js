"use client";

import { useEffect, useState } from "react";

function sectionId(title) {
  return title.toLowerCase().trim().replace(/\s+/g, "-");
}

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState(sectionId(sections[0]?.title || ""));

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(sectionId(section.title)))
      .filter(Boolean);

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-130px 0px -55% 0px",
        threshold: [0.12, 0.25, 0.5],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="blog-toc rounded-[22px] border border-white/10 bg-black/25 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
        Article map
      </p>
      <h2 className="mb-4 text-lg font-bold text-accent md:text-xl">სარჩევი</h2>
      <ol className="space-y-0.5 text-[13px] text-white/68">
        {sections.map((section, index) => (
          <li key={section.title} className="relative">
            <a
              href={`#${sectionId(section.title)}`}
              aria-current={
                activeId === sectionId(section.title) ? "true" : undefined
              }
              className={`group flex items-start gap-2.5 rounded-xl px-3 py-2 leading-5 transition-colors hover:bg-white/5 hover:text-accent ${
                activeId === sectionId(section.title)
                  ? "bg-accent/10 text-accent"
                  : ""
              }`}
            >
              <span
                className={`mt-0.5 h-5 min-w-5 rounded-full border text-center text-[10px] leading-[18px] transition-colors ${
                  activeId === sectionId(section.title)
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : "border-white/10 text-white/35 group-hover:border-accent/30"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 break-words">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
