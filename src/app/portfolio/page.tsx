import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Imtiaz Ahamed - Social Media Marketing",
  description: "View my social media marketing portfolio showcasing successful campaigns and results for clients across various industries.",
};

const projects = [
  {
    id: 1,
    title: "Fashion Brand Facebook Growth",
    client: "Anonymous Client",
    industry: "Fashion & Lifestyle",
    category: "Facebook Marketing",
    categoryColor: "blue",
    description: "Managed complete Facebook marketing for a fashion brand, growing their page from 500 to 15,000 followers in 6 months through strategic content and targeted ads.",
    results: [
      { metric: "Followers Growth", before: "500", after: "15,000" },
      { metric: "Monthly Reach", before: "2,000", after: "85,000" },
      { metric: "Engagement Rate", before: "1.2%", after: "6.8%" },
      { metric: "Monthly Sales", before: "৳50,000", after: "৳2,50,000" },
    ],
    tags: ["Facebook Ads", "Content Creation", "Community Management"],
    duration: "6 months",
    emoji: "👗",
  },
  {
    id: 2,
    title: "Restaurant Instagram Strategy",
    client: "Anonymous Client",
    industry: "Food & Beverage",
    category: "Instagram Marketing",
    categoryColor: "pink",
    description: "Developed and executed a complete Instagram marketing strategy for a local restaurant, transforming their online presence and driving significant customer footfall.",
    results: [
      { metric: "Instagram Followers", before: "200", after: "8,500" },
      { metric: "Profile Visits/Month", before: "500", after: "25,000" },
      { metric: "Story Views", before: "150", after: "5,000" },
      { metric: "Customer Inquiries", before: "10/week", after: "80/week" },
    ],
    tags: ["Instagram Reels", "Stories", "Food Photography"],
    duration: "4 months",
    emoji: "🍽️",
  },
  {
    id: 3,
    title: "E-commerce Pinterest Traffic",
    client: "Anonymous Client",
    industry: "E-commerce",
    category: "Pinterest Marketing",
    categoryColor: "red",
    description: "Built a Pinterest marketing strategy for an e-commerce store that drove consistent organic traffic and significantly increased online sales.",
    results: [
      { metric: "Monthly Impressions", before: "1,000", after: "120,000" },
      { metric: "Website Traffic", before: "200/mo", after: "8,000/mo" },
      { metric: "Pinterest Followers", before: "50", after: "3,200" },
      { metric: "Product Saves", before: "100", after: "15,000" },
    ],
    tags: ["Pinterest SEO", "Pin Design", "Traffic Generation"],
    duration: "5 months",
    emoji: "🛍️",
  },
  {
    id: 4,
    title: "Tech Startup Brand Awareness",
    client: "Anonymous Client",
    industry: "Technology",
    category: "Social Media Strategy",
    categoryColor: "orange",
    description: "Created and implemented a multi-platform social media strategy for a tech startup, establishing their brand presence across Facebook, Instagram, and X (Twitter).",
    results: [
      { metric: "Total Followers", before: "0", after: "12,000" },
      { metric: "Brand Mentions/mo", before: "5", after: "450" },
      { metric: "Website Clicks", before: "100/mo", after: "6,500/mo" },
      { metric: "Lead Generation", before: "2/mo", after: "85/mo" },
    ],
    tags: ["Multi-Platform", "Brand Strategy", "Content Planning"],
    duration: "8 months",
    emoji: "💻",
  },
  {
    id: 5,
    title: "Healthcare X (Twitter) Presence",
    client: "Anonymous Client",
    industry: "Healthcare",
    category: "X (Twitter) Marketing",
    categoryColor: "sky",
    description: "Built a professional X (Twitter) presence for a healthcare provider, growing their authority and patient engagement through educational content.",
    results: [
      { metric: "Twitter Followers", before: "150", after: "5,800" },
      { metric: "Monthly Impressions", before: "3,000", after: "180,000" },
      { metric: "Engagement Rate", before: "0.8%", after: "4.5%" },
      { metric: "Profile Clicks", before: "200", after: "8,200" },
    ],
    tags: ["Twitter Growth", "Content Strategy", "Healthcare"],
    duration: "6 months",
    emoji: "🏥",
  },
  {
    id: 6,
    title: "Real Estate Content Campaign",
    client: "Anonymous Client",
    industry: "Real Estate",
    category: "Content Creation",
    categoryColor: "green",
    description: "Developed a comprehensive content creation strategy for a real estate agency, producing engaging property listings and market insights that drove inquiries.",
    results: [
      { metric: "Content Pieces/mo", before: "5", after: "30" },
      { metric: "Engagement Rate", before: "1.5%", after: "7.2%" },
      { metric: "Property Inquiries", before: "8/mo", after: "65/mo" },
      { metric: "Follower Growth", before: "800", after: "6,400" },
    ],
    tags: ["Content Creation", "Real Estate", "Lead Generation"],
    duration: "7 months",
    emoji: "🏠",
  },
];

const categories = ["All", "Facebook Marketing", "Instagram Marketing", "Pinterest Marketing", "X (Twitter) Marketing", "Social Media Strategy", "Content Creation"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">Portfolio</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Real results from real campaigns. Here are some of the projects I have worked on and the measurable impact delivered.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "5", label: "Platforms Mastered" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl font-bold">{stat.number}</p>
                <p className="text-orange-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-lg transition-all duration-300">

                {/* Project Header */}
                <div className="p-8 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl w-16 h-16 bg-orange-50 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {project.emoji}
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs px-3 py-1 rounded-full">
                            {project.industry}
                          </span>
                          <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs px-3 py-1 rounded-full">
                            ⏱️ {project.duration}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before & After Results */}
                <div className="p-8">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="text-orange-500">📈</span> Results Achieved
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {project.results.map((result) => (
                      <div key={result.metric} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-100 dark:border-zinc-700">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">{result.metric}</p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xs bg-red-100 dark:bg-red-500/20 text-red-500 px-2 py-0.5 rounded">Before</span>
                            <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{result.before}</span>
                          </div>
                          <div className="text-orange-500 text-xs">↓</div>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xs bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded">After</span>
                            <span className="text-sm font-bold text-zinc-900 dark:text-white">{result.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-100 dark:border-orange-500/20">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD YOUR PROJECT NOTE */}
      <section className="py-12 bg-orange-50 dark:bg-orange-500/10 border-y border-orange-100 dark:border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <p className="text-2xl">🚀</p>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Want to Be My Next Success Story?</h3>
          <p className="text-zinc-600 dark:text-zinc-400">Let's work together to achieve outstanding results for your business.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to See <span className="text-orange-500">Real Results?</span>
          </h2>
          <p className="text-zinc-400">Contact me today and let's discuss your project.</p>
          <Link href="/contact" className="btn-primary">
            Hire Me Now
          </Link>
        </div>
      </section>

    </div>
  );
}