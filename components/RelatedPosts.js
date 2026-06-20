import BlogGrid from "./BlogGrid";

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;

  return (
    <section className="mt-14 md:mt-20">
      <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mb-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
            შემდეგი ნაბიჯი
          </span>
          <h2 className="text-2xl font-bold md:text-4xl">
            დაკავშირებული სტატიები
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-white/55">
          დამატებითი საკითხები, რომლებიც ამ თემას ბუნებრივად აგრძელებს და
          დაგეხმარებათ ვებსაიტის, SEO-სა და კონვერსიის უკეთ დაგეგმვაში.
        </p>
      </div>
      <BlogGrid posts={posts} />
    </section>
  );
}
