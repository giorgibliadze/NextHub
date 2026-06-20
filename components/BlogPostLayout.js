import Link from "next/link";
import AuthorSection from "./AuthorSection";
import CTASection from "./CTASection";
import RelatedPosts from "./RelatedPosts";
import TableOfContents from "./TableOfContents";

function sectionId(title) {
  return title.toLowerCase().trim().replace(/\s+/g, "-");
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BlogPostLayout({ post, relatedPosts, schemas }) {
  const isCaseStudy = post.type === "case-study";
  const resultSection = post.sections.find((section) =>
    section.title.includes("შედეგ")
  );
  const challengeSection = post.sections.find((section) =>
    section.title.includes("გამოწვ")
  );
  const solutionSection = post.sections.find((section) =>
    section.title.includes("გადაწყვეტ")
  );

  return (
    <>
      {schemas.map((schema) => (
        <JsonLd
          key={`${schema["@type"]}-${schema.headline || schema.name || "schema"}`}
          data={schema}
        />
      ))}

      <article className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden px-4 py-28 md:px-8 md:py-40 xl:px-10">
        <header className="relative mx-auto mb-10 w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_28px_95px_rgba(0,0,0,0.30)] backdrop-blur-md md:mb-12 md:p-10 lg:p-12">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <div className="mb-5 flex flex-wrap justify-center gap-2">
            <Link
              href={`/blog/${post.category}`}
              className="inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:px-5 md:text-sm"
            >
              {post.categoryTitle}
            </Link>
            <span className="inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/65 md:px-5 md:text-sm">
              {post.readingTime}
            </span>
            <span className="inline-block rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/50 md:px-5 md:text-sm">
              {post.date}
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            {post.title} <span className="text-accent">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/78 md:text-lg md:leading-8">
            {post.description}
          </p>
        </header>

        {isCaseStudy && post.project && (
          <section className="mx-auto mb-8 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                პროექტი
              </p>
              <h2 className="text-xl font-bold text-white">{post.project.name}</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">
                {post.project.category}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-5 md:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                ტექნოლოგიები
              </p>
              <div className="flex flex-wrap gap-2">
                {post.project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {isCaseStudy && (
          <section className="mx-auto mb-8 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["გამოწვევა", challengeSection],
              ["გადაწყვეტა", solutionSection],
              ["შედეგი", resultSection],
            ].map(([label, section]) => (
              <div
                key={label}
                className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="mb-3 text-sm font-semibold text-accent">{label}</p>
                <p className="blog-card-excerpt text-sm leading-7 text-white/62">
                  {section?.paragraphs?.[0] || post.excerpt}
                </p>
              </div>
            ))}
          </section>
        )}

        <div className="mx-auto grid w-full max-w-[1210px] grid-cols-1 gap-8 lg:grid-cols-[320px_minmax(0,850px)] lg:items-start lg:gap-10">
          <aside className="lg:hidden">
            <TableOfContents sections={post.sections} />
          </aside>

          <aside className="hidden lg:block">
            <div className="sticky top-[120px]">
              <TableOfContents sections={post.sections} />
            </div>
          </aside>

          <div className="w-full max-w-[850px] rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_95px_rgba(0,0,0,0.26)] backdrop-blur-md md:rounded-[34px] md:p-9">
            <div className="blog-article-content space-y-12 md:space-y-14">
              {post.sections.map((section, index) => (
                <section
                  key={section.title}
                  id={sectionId(section.title)}
                  className="scroll-mt-28 border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                    {section.title}
                    </h2>
                  </div>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-3xl text-base leading-8 text-white/70 md:text-[17px] md:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-[24px] border border-white/10 bg-black/20 p-5 md:p-7">
                <div className="mb-6">
                  <span className="mb-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
                    FAQ
                  </span>
                  <h2 className="text-2xl font-bold md:text-4xl">
                    ხშირად დასმული კითხვები
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {post.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-accent/25"
                    >
                      <h3 className="mb-3 text-lg font-bold leading-7 text-accent">
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-7 text-white/68">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-black/15 p-5 md:p-7">
                <h2 className="mb-5 text-2xl font-bold md:text-4xl">
                  დაკავშირებული სერვისები
                </h2>
                <div className="flex flex-wrap gap-3">
                  {post.serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm transition-colors hover:border-accent/30 hover:bg-accent/80"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>

              <AuthorSection author={post.author} />
              <CTASection />
            </div>
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </>
  );
}
