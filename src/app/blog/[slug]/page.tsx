import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-20">

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium mb-8 group">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="text-center text-7xl mb-6">{data.emoji || "📝"}</div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full">
              {data.category || "General"}
            </span>
            <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm px-4 py-1.5 rounded-full">
              {data.readTime || "5 min read"}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white text-center leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-zinc-500 dark:text-zinc-400 text-sm">
            <span>By Imtiaz Ahamed</span>
            <span>•</span>
            <span>{data.date}</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg text-center max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert prose-headings:font-bold prose-a:text-orange-500 prose-strong:text-zinc-900 dark:prose-strong:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-200 dark:prose-h2:border-zinc-700 prose-h2:pb-2 max-w-none">
          <MDXRemote source={content} />
        </div>

        {/* Author Box */}
        <div className="mt-16 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              IA
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white">Imtiaz Ahamed</h3>
              <p className="text-orange-500 text-sm font-medium mb-2">Social Media Marketing Specialist</p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Helping businesses grow through Facebook, Instagram, Pinterest, and X (Twitter) marketing strategies.
              </p>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4 mt-4 inline-flex">
                Work With Me
              </Link>
            </div>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="btn-outline">
            ← All Blog Posts
          </Link>
        </div>
      </article>
    </div>
  );
}