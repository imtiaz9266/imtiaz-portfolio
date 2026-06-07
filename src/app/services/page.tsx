import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Imtiaz Ahamed - Social Media Marketing",
  description: "Professional social media marketing services including Facebook, Instagram, Pinterest, X (Twitter) marketing, content creation, and analytics.",
};

const services = [
  {
    icon: "📘",
    title: "Facebook Marketing",
    description: "Strategic Facebook campaigns that build brand awareness, increase engagement, and drive measurable results. I manage everything from page optimization to paid ad campaigns.",
    features: [
      "Facebook Page Setup & Optimization",
      "Content Strategy & Posting",
      "Facebook Ads Campaign Management",
      "Audience Research & Targeting",
      "Community Management",
      "Performance Analytics & Reporting",
    ],
    color: "blue",
  },
  {
    icon: "📸",
    title: "Instagram Marketing",
    description: "Creative Instagram strategies with compelling visuals and stories that grow your audience and boost brand visibility across feeds, reels, and stories.",
    features: [
      "Profile Optimization & Bio",
      "Feed & Reels Content Creation",
      "Instagram Stories Strategy",
      "Hashtag Research & Strategy",
      "Influencer Collaboration",
      "Growth Analytics & Insights",
    ],
    color: "pink",
  },
  {
    icon: "📌",
    title: "Pinterest Marketing",
    description: "Pinterest strategies that drive consistent traffic, increase brand discovery, and connect your products or services with the right audience through visual storytelling.",
    features: [
      "Pinterest Business Account Setup",
      "Board Strategy & Organization",
      "Pin Design & Optimization",
      "SEO for Pinterest",
      "Traffic Generation Strategy",
      "Monthly Analytics Reports",
    ],
    color: "red",
  },
  {
    icon: "🐦",
    title: "X (Twitter) Marketing",
    description: "Build a strong Twitter presence with strategic content that grows your followers, increases brand awareness, and positions you as an industry authority.",
    features: [
      "Profile Optimization",
      "Content Calendar & Scheduling",
      "Engagement & Community Building",
      "Twitter/X Ads Management",
      "Trend Monitoring & Newsjacking",
      "Follower Growth Strategy",
    ],
    color: "sky",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    description: "High-quality, engaging content tailored to your brand voice that attracts attention, drives meaningful engagement, and converts followers into customers.",
    features: [
      "Social Media Graphics Design",
      "Caption & Copywriting",
      "Content Calendar Planning",
      "Brand Voice Development",
      "Visual Content Strategy",
      "Multi-Platform Content Adaptation",
    ],
    color: "purple",
  },
  {
    icon: "🎯",
    title: "Social Media Strategy",
    description: "Comprehensive social media strategies customized for your business goals, target audience, and industry to maximize your online impact and ROI.",
    features: [
      "Competitor Analysis",
      "Target Audience Research",
      "Platform Selection Strategy",
      "Content Pillars Development",
      "Growth Roadmap",
      "KPI Setting & Tracking",
    ],
    color: "orange",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Data-driven insights and detailed monthly reports that help you understand your social media performance and make informed marketing decisions.",
    features: [
      "Monthly Performance Reports",
      "Engagement Rate Analysis",
      "Audience Growth Tracking",
      "Campaign ROI Measurement",
      "Competitor Benchmarking",
      "Actionable Recommendations",
    ],
    color: "green",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We start with a free consultation to understand your business, goals, and target audience.",
  },
  {
    step: "02",
    title: "Strategy Development",
    desc: "I create a customized social media strategy tailored specifically to your business needs.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "I execute the strategy with high-quality content, consistent posting, and active engagement.",
  },
  {
    step: "04",
    title: "Monitor & Optimize",
    desc: "I continuously track performance and optimize the strategy to maximize your results.",
  },
  {
    step: "05",
    title: "Report & Grow",
    desc: "You receive detailed monthly reports showing growth, engagement, and ROI improvements.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">What I Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            My Services
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I offer a complete range of social media marketing services designed to help your business grow, engage your audience, and achieve measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="btn-outline">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <div className="bg-orange-50 dark:bg-orange-500/10 border-y border-orange-100 dark:border-orange-500/20 py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-orange-700 dark:text-orange-400 font-medium">
            💡 All services are priced based on your specific needs. <Link href="/contact" className="underline font-semibold">Contact me</Link> for a custom quote.
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 group">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl w-14 h-14 bg-orange-50 dark:bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-5 h-5 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-orange-500 text-xs font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all">
                  Get This Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">How I Work</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">My Process</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              A simple, transparent process designed to deliver maximum results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4 relative">
                {/* Arrow connector */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 dark:bg-orange-500/30 z-0 -translate-x-1/2"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get <span className="text-orange-500">Started?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Contact me today for a free consultation and let's discuss how I can help your business grow.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}