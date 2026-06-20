import { notFound } from "next/navigation";
import BlogPostLayout from "../../../components/BlogPostLayout";
import {
  blogPosts,
  buildPostSchemas,
  getPostBySlug,
  getPostUrl,
  getRelatedPosts,
} from "../../../lib/blogData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = getPostUrl(post);
  const title = post.metaTitle || post.title;

  return {
    title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      siteName: "Next-Hub Solutions",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/nexthub.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: ["/nexthub.png"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <BlogPostLayout
      post={post}
      relatedPosts={getRelatedPosts(post)}
      schemas={buildPostSchemas(post)}
    />
  );
}
