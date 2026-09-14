import BlogGrid from "../../../../components/en/BlogGrid";
import { blogCategories, getPostsByCategory } from "../../../../lib/englishBlogData";
import { getLanguageAlternates } from "../../../../lib/languageRoutes";

const category = blogCategories.find((item) => item.slug === "case-studies");
const url = "https://next-hub.pro/en/blog/case-studies";

export const metadata = {
  title: "Web pages.",
  description: category.description,
  keywords: [
    "Website case studies",
    "Website development",
    "SEO Optimization",
    "Web design.",
    "web development case studies Georgia",
    "website portfolio Georgia",
    "SEO tips Georgia",
    "NextHub portfolio",
  ],
  alternates: getLanguageAlternates("/en/blog/case-studies"),
  openGraph: {
    title: "Web pages.",
    description: category.description,
    url,
    siteName: "Next-Hub Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web pages.",
    description: category.description,
  },
};

export default function CaseStudiesBlogCategoryPage() {
  return (
    <CategoryPage category={category} posts={getPostsByCategory("case-studies")} />
  );
}

function CategoryPage({ category, posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 overflow-x-clip">
      <section className="mobile-bottom-safe-space max-w-6xl w-full mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">Blog category.</span>
          <h1 className="text-4xl md:text-6xl font-bold xl:mt-8 text-center">{category.title} <span className="text-accent">.</span></h1>
          <p className="mt-5 max-w-3xl mx-auto text-sm md:text-lg leading-7 md:leading-8 text-white/80">{category.description}</p>
        </div>
        <BlogGrid posts={posts} />
      </section>
    </main>
  );
}
