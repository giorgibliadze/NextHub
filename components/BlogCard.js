"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function BlogCard({ post, index = 0, featured = false }) {
  const isFeatured = featured || post.featured;

  return (
    <motion.article
      variants={fadeIn("up", 0.08 + index * 0.03)}
      initial="hidden"
      animate="show"
      exit="hidden"
      whileHover={{ y: -8 }}
      className={`group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.045] p-5 md:p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-accent/35 hover:bg-white/[0.075] hover:shadow-[0_24px_75px_rgba(241,48,36,0.12)] ${
        isFeatured ? "md:p-7" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {post.categoryTitle}
        </span>
        {isFeatured && (
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
            პრიორიტეტული
          </span>
        )}
        <span className="ml-0 text-xs text-white/45 md:ml-auto">
          {post.readingTime}
        </span>
      </div>

      <h2
        className={`mb-3 font-bold leading-tight tracking-normal ${
          isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        }`}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-accent"
        >
          {post.title}
        </Link>
      </h2>

      <p className="blog-card-excerpt mb-6 text-sm leading-7 text-white/65">
        {post.excerpt}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {post.keywords.slice(0, 4).map((keyword) => (
          <span
            key={keyword}
            className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-white/50"
          >
            {keyword}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-white"
      >
        წაიკითხეთ სრულად <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.article>
  );
}
