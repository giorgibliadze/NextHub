import BlogGrid from "../../../components/BlogGrid";
import { blogCategories, getPostsByCategory } from "../../../lib/blogData";

const category = blogCategories.find((item) => item.slug === "web-design");
const url = "https://next-hub.pro/blog/web-design";

export const metadata = {
  title: `${category.title} | Next-Hub ბლოგი`,
  description: category.description,
  alternates: { canonical: url },
  openGraph: {
    title: `${category.title} | Next-Hub ბლოგი`,
    description: category.description,
    url,
    siteName: "Next-Hub Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${category.title} | Next-Hub ბლოგი`,
    description: category.description,
  },
};

export default function WebDesignBlogCategoryPage() {
  return <CategoryPage category={category} posts={getPostsByCategory("web-design")} />;
}

function CategoryPage({ category, posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 overflow-x-hidden">
      <section className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">ბლოგის კატეგორია</span>
          <h1 className="text-4xl md:text-6xl font-bold xl:mt-8 text-center">{category.title} <span className="text-accent">.</span></h1>
          <p className="mt-5 max-w-3xl mx-auto text-sm md:text-lg leading-7 md:leading-8 text-white/80">{category.description}</p>
        </div>
        <BlogGrid posts={posts} />
      </section>
    </main>
  );
}
