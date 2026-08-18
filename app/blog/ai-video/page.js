import BlogGrid from "../../../components/BlogGrid";
import { blogCategories, getPostsByCategory } from "../../../lib/blogData";

const category = blogCategories.find((item) => item.slug === "ai-video");
const url = "https://next-hub.pro/blog/ai-video";

export const metadata = {
  title: "AI ვიდეო — რჩევები ბიზნესისთვის | Next-Hub Solutions",
  description: category.description,
  keywords: [
    "AI ვიდეო",
    "AI ვიდეოს შექმნა",
    "სარეკლამო ვიდეო",
    "Reels ბიზნესისთვის",
    "AI avatar video Georgia",
    "ვიდეო კონტენტი საქართველო",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "AI ვიდეო — რჩევები ბიზნესისთვის | Next-Hub Solutions",
    description: category.description,
    url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/marketing.webp", width: 1200, height: 630, alt: category.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ვიდეო — რჩევები ბიზნესისთვის | Next-Hub Solutions",
    description: category.description,
    images: ["/marketing.webp"],
  },
};

export default function AiVideoBlogCategoryPage() {
  return <CategoryPage category={category} posts={getPostsByCategory("ai-video")} />;
}

function CategoryPage({ category, posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 overflow-x-clip">
      <section className="mobile-bottom-safe-space max-w-6xl w-full mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
            ბლოგის კატეგორია
          </span>
          <h1 className="text-4xl md:text-6xl font-bold xl:mt-8 text-center">
            {category.title} <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-sm md:text-lg leading-7 md:leading-8 text-white/80">
            {category.description}
          </p>
        </div>
        <BlogGrid posts={posts} />
      </section>
    </main>
  );
}
