import Link from "next/link";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog | Imtiaz Ahamed - Social Media Marketing Tips",
  description: "Social media marketing tips, strategies, and insights from Imtiaz Ahamed.",
};

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".mdx", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "",
        category: data.category || "General",
        readTime: data.readTime || "5 min read",
        emoji: data.emoji || "📝",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">My Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Marketing Tips & Insights
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Practical social media marketing tips, strategies, and insights to help your business grow online.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-12 pb-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="text-6xl">✍️</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Blog Posts Coming Soon!</h3>
              <p className="text-zinc-500 dark:text-zinc-400">I am working on some great content. Check back soon!</p>
              <Link href="/contact" className="btn-primary inline-flex">
                Contact Me Instead
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 group flex flex-col">
                  {/* Emoji Header */}
                  <div className="bg-orange-50 dark:bg-orange-500/10 p-8 text-center">
                    <span className="text-6xl">{post.emoji}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-zinc-400 text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-700">
                      <span className="text-xs text-zinc-400">{post.date}</span>
                      <span className="text-orange-500 text-sm font-medium group-hover:gap-2 transition-all">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}