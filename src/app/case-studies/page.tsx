import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Imtiaz Ahamed - Social Media Marketing Results",
  description: "Detailed case studies showing real social media marketing results achieved for clients across various industries.",
};

const caseStudies = [
  {
    id: 1,
    emoji: "👗",
    tag: "Facebook Marketing",
    industry: "Fashion & Lifestyle",
    duration: "6 Months",
    title: "How I Grew a Fashion Brand from 500 to 15,000 Facebook Followers",
    overview: "A local fashion brand approached me with a nearly inactive Facebook page and no marketing strategy. Within 6 months, we transformed their entire online presence and turned social media into their biggest sales channel.",
    challenge: "The brand had 500 followers, low engagement (under 1%), no content strategy, and was spending money on random boosted posts with zero ROI. Their competitors were outperforming them significantly.",
    solution: [
      "Conducted full competitor analysis and audience research",
      "Created a 30-day content calendar with 5 posts per week",
      "Developed a consistent brand visual identity for all posts",
      "Launched targeted Facebook Ads with optimized audiences",
      "Implemented community management with same-day responses",
      "Created weekly Facebook Reels showcasing new collections",
    ],
    results: [
      { metric: "Facebook Followers", before: "500", after: "15,000", change: "+2,900%" },
      { metric: "Monthly Reach", before: "2,000", after: "85,000", change: "+4,150%" },
      { metric: "Engagement Rate", before: "1.2%", after: "6.8%", change: "+467%" },
      { metric: "Monthly Revenue", before: "৳50,000", after: "৳2,50,000", change: "+400%" },
    ],
    timeline: [
      { month: "Month 1", action: "Page optimization, content strategy, first content calendar" },
      { month: "Month 2", action: "Consistent posting begins, community building, first ads" },
      { month: "Month 3", action: "Follower growth accelerates, engagement rates improve" },
      { month: "Month 4", action: "Reels strategy launched, viral content pieces" },
      { month: "Month 5", action: "Sales from social media start increasing significantly" },
      { month: "Month 6", action: "15,000 followers reached, 400% revenue increase" },
    ],
    lesson: "Consistent quality content combined with targeted ads and active community management creates exponential growth.",
  },
  {
    id: 2,
    emoji: "💻",
    tag: "Multi-Platform Strategy",
    industry: "Technology Startup",
    duration: "8 Months",
    title: "Building a Tech Startup's Social Media Presence from Zero",
    overview: "A tech startup launching a new SaaS product needed to build brand awareness and generate leads through social media — starting from zero followers across all platforms.",
    challenge: "No existing social media presence, limited budget, highly competitive market, and a complex product that was difficult to explain in simple terms to a general audience.",
    solution: [
      "Developed platform-specific strategies for Facebook, Instagram, and X (Twitter)",
      "Created educational content explaining the product in simple terms",
      "Built a thought leadership strategy positioning the founder as an expert",
      "Launched LinkedIn content for B2B lead generation",
      "Created demo videos and tutorial content for Instagram Reels",
      "Implemented lead magnet campaigns to build email list",
    ],
    results: [
      { metric: "Total Followers (All)", before: "0", after: "12,000", change: "From Zero" },
      { metric: "Monthly Website Clicks", before: "100", after: "6,500", change: "+6,400%" },
      { metric: "Monthly Leads", before: "2", after: "85", change: "+4,150%" },
      { metric: "Brand Mentions/Month", before: "5", after: "450", change: "+8,900%" },
    ],
    timeline: [
      { month: "Month 1-2", action: "Strategy development, profile setup, initial content creation" },
      { month: "Month 3", action: "Content publishing begins across all platforms" },
      { month: "Month 4", action: "First 1,000 followers, initial lead generation" },
      { month: "Month 5-6", action: "Growth accelerates, leads increase significantly" },
      { month: "Month 7-8", action: "12,000 followers, 85 monthly leads, strong brand presence" },
    ],
    lesson: "For tech startups, educational content that simplifies complex topics is the most powerful tool for building audience trust and generating leads.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Deep Dives</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">Case Studies</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Detailed breakdowns of how I solved real marketing challenges and delivered measurable results for my clients.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-12 pb-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-16">
          {caseStudies.map((cs, index) => (
            <div key={cs.id} className="bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-700">

              {/* Header */}
              <div className="bg-orange-500 p-8 text-white">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="text-5xl">{cs.emoji}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{cs.tag}</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{cs.industry}</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">⏱️ {cs.duration}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{cs.title}</h2>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-10">

                {/* Overview */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-100 dark:bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 text-sm">📋</span>
                    Overview
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{cs.overview}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-100 dark:bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 text-sm">⚠️</span>
                    The Challenge
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 text-sm">💡</span>
                    My Solution
                  </h3>
                  <ul className="space-y-2">
                    {cs.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                        <span className="w-5 h-5 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 text-sm">📈</span>
                    Results Achieved
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((result) => (
                      <div key={result.metric} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-100 dark:border-zinc-700">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">{result.metric}</p>
                        <div className="space-y-1 mb-2">
                          <p className="text-xs text-red-400 line-through">{result.before}</p>
                          <p className="text-xl font-bold text-zinc-900 dark:text-white">{result.after}</p>
                        </div>
                        <span className="text-xs bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-semibold">
                          {result.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-500 text-sm">📅</span>
                    Project Timeline
                  </h3>
                  <div className="space-y-3">
                    {cs.timeline.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-24 flex-shrink-0">
                          <span className="text-xs font-semibold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-2 py-1 rounded-lg">{item.month}</span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm pt-1">{item.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Lesson */}
                <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-2xl p-6">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <span>🎯</span> Key Lesson
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 italic">{cs.lesson}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Want a Similar <span className="text-orange-500">Success Story?</span>
          </h2>
          <p className="text-zinc-400 text-lg">Let's discuss your project and create a strategy that delivers real results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
            <Link href="/portfolio" className="btn-outline border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-500">View Portfolio</Link>
          </div>
        </div>
      </section>

    </div>
  );
}