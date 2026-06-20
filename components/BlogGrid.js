import BlogCard from "./BlogCard";

export default function BlogGrid({ posts, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7 ${className}`}
    >
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
