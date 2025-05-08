import Link from "next/link";
import { blogPosts } from "../blogData";
import BlogPostContent from "../components/BlogPostContent";
import type { BlogPost } from "../types";

// ✅ generateStaticParams must stay in a server component
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            পোস্ট পাওয়া যায়নি
          </h1>
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            ব্লগ পেজে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />;
}
