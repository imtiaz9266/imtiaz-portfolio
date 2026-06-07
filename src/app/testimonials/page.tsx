import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Imtiaz Ahamed - Social Media Marketing",
  description: "Read what clients say about Imtiaz Ahamed's social media marketing services.",
};

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    company: "Fashion House BD",
    role: "Business Owner",
    industry: "Fashion & Lifestyle",
    emoji: "👗",
    rating: 5,
    text: "Imtiaz transformed our Facebook presence completely. Within 6 months, our followers grew from 500 to over 15,000, and our monthly sales increased by 400%. His strategic approach and consistent content quality made a huge difference for our business.",
    result: "15,000 Facebook followers in 6 months",
  },
  {
    id: 2,
    name: "Fatema Khanam",
    company: "Spice Garden Restaurant",
    role: "Restaurant Manager",
    industry: "Food & Beverage",
    emoji: "🍽️",
    rating: 5,
    text: "Before working with Imtiaz, our Instagram had 200 followers and almost no engagement. Now we have 8,500 followers and receive 80+ customer inquiries per week. His creative content and Instagram Reels strategy brought us so many new customers.",
    result: "8,500 Instagram followers & 80+ weekly inquiries",
  },
  {
    id: 3,
    name: "Karim Hassan",
    company: "TechStart BD",
    role: "Startup Founder",
    industry: "Technology",
    emoji: "💻",
    rating: 5,
    text: "As a startup, we had zero social media presence. Imtiaz built our entire strategy from scratch across multiple platforms. Within 8 months, we had 12,000 followers and were generating 85 leads per month. Outstanding professional work!",
    result: "12,000 followers & 85 leads/month from zero",
  },
  {
    id: 4,
    name: "Nasrin Sultana",
    company: "Green Life E-commerce",
    role: "E-commerce Owner",
    industry: "E-commerce",
    emoji: "🛍️",
    rating: 5,
    text: "Imtiaz's Pinterest marketing strategy was a game changer for our online store. Our website traffic increased from 200 to 8,000 visitors per month, and our monthly sales doubled. His knowledge of Pinterest SEO is exceptional.",
    result: "8,000 monthly website visitors from Pinterest",
  },
  {
    id: 5,
    name: "Dr. Mahmud Ali",
    company: "Health First Clinic",
    role: "Medical Director",
    industry: "Healthcare",
    emoji: "🏥",
    rating: 5,
    text: "Imtiaz helped us build a credible and professional presence on X (Twitter). Our monthly impressions went from 3,000 to 180,000 and we now have a strong community of engaged followers. He understands how to create educational content that resonates.",
    result: "180,000 monthly Twitter impressions",
  },
  {
    id: 6,
    name: "Shahidul Islam",
    company: "Prime Properties",
    role: "Real Estate Agent",
    industry: "Real Estate",
    emoji: "🏠",
    rating: 5,
    text: "Working with Imtiaz was one of the best business decisions I made. His content creation strategy for our real estate agency increased our property inquiries from 8 to 65 per month. The quality and consistency of content was remarkable.",
    result: "65 monthly property inquiries vs 8 before",
  },
];

const stats = [
  { number: "30+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "50+", label: "Projects Delivered" },
  { number: "5★", label: "Average Rating" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Client Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            What My Clients Say
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what real clients say about working with me and the results they achieved.
          </p>
          {/* Stars */}
          <div className="flex justify-center gap-1 text-3xl">
            {"⭐".repeat(5)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl font-bold">{stat.number}</p>
                <p className="text-orange-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-zinc-800 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 flex flex-col">

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <div className="text-4xl text-orange-200 dark:text-orange-500/30 font-serif leading-none mb-2">"</div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                  {testimonial.text}
                </p>

                {/* Result badge */}
                <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-xl p-3 mb-6">
                  <p className="text-orange-600 dark:text-orange-400 text-xs font-semibold">
                    📈 Result: {testimonial.result}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {testimonial.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs">{testimonial.role}</p>
                    <p className="text-orange-500 text-xs font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED QUOTE */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <div className="text-6xl text-orange-500 font-serif">"</div>
          <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed italic">
            Imtiaz does not just manage social media — he builds brands. His strategic mindset and creative approach delivered results beyond our expectations.
          </p>
          <div>
            <p className="text-orange-400 font-semibold">— Multiple Satisfied Clients</p>
            <p className="text-zinc-500 text-sm mt-1">Bangladesh</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Become My Next Success Story?
          </h2>
          <p className="text-orange-100 text-lg">
            Join 30+ happy clients who have transformed their social media presence with my help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors inline-flex items-center gap-2">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}