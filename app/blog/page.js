import Link from "next/link";
import BlogGrid from "../../components/BlogGrid";
import BlogCard from "../../components/BlogCard";
import { blogCategories, blogPosts } from "../../lib/blogData";

const url = "https://next-hub.pro/blog";
const title = "ბლოგი ვებსაიტის დამზადებაზე, SEO-ზე და ვებ დეველოპმენტზე";
const description =
  "Next-Hub Solutions-ის ბლოგი: ვებსაიტის დამზადება, ვებ დიზაინი, SEO ოპტიმიზაცია, Google Business Profile, Next.js, WordPress და რეალური ქეისები.";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/nexthub.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/nexthub.png"],
  },
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 5);
  const latestPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden px-4 py-28 md:px-8 md:py-40 xl:px-10">
      <section className="mx-auto w-full max-w-6xl">
        <div className="relative mb-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_28px_95px_rgba(0,0,0,0.30)] backdrop-blur-md md:mb-12 md:p-10 lg:p-12">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <span className="mb-5 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:px-5 md:text-sm">
            Next-Hub ბლოგი
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            ბლოგი, ქეისები და SEO გზამკვლევები{" "}
            <span className="text-accent">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/78 md:text-lg md:leading-8">
            პრაქტიკული ქართული SEO კონტენტი ვებსაიტის დამზადებაზე, ვებ
            დეველოპმენტზე, ვებ დიზაინზე, SEO მომსახურებაზე და რეალურ
            პროექტებზე, რომლებიც ბიზნესს უკეთესი გადაწყვეტილებების მიღებაში
            ეხმარება.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 hover:bg-white hover:text-accent"
            >
              კონსულტაცია
            </Link>
            <Link
              href="/seo-services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-accent/30 hover:text-accent"
            >
              SEO მომსახურება
            </Link>
          </div>
        </div>

        <section className="mb-12 md:mb-16">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
                Featured
              </span>
              <h2 className="text-2xl font-bold md:text-4xl">
                პრიორიტეტული სტატიები
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55">
              ყველაზე მაღალი საძიებო პოტენციალის მქონე თემები: ფასი,
              პლატფორმის არჩევანი, SEO, Google Business Profile და რეალური
              Printerman-ის ქეისი.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {featuredPosts[0] && (
              <BlogCard post={featuredPosts[0]} index={0} featured />
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {featuredPosts.slice(1, 3).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>
          </div>
          <BlogGrid posts={featuredPosts.slice(3)} className="mt-5" />
        </section>

        <section className="mb-12 md:mb-16">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/65">
                კატეგორიები
              </span>
              <h2 className="text-2xl font-bold md:text-4xl">
                აირჩიეთ მიმართულება
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/${category.slug}`}
              className="group rounded-[22px] border border-white/10 bg-black/20 p-5 transition-all hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-sm font-bold text-accent">
                {category.title.slice(0, 1)}
              </div>
              <h3 className="mb-2 text-lg font-bold group-hover:text-accent">
                {category.title}
              </h3>
              <p className="text-sm leading-7 text-white/58">
                {category.description}
              </p>
            </Link>
          ))}
          </div>
        </section>

        <section className="mobile-bottom-safe-space">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
                ყველა მასალა
              </span>
              <h2 className="text-2xl font-bold md:text-4xl">
                ბოლო სტატიები და ქეისები
              </h2>
            </div>
          </div>
          <BlogGrid posts={latestPosts} />
        </section>
      </section>
    </main>
  );
}
