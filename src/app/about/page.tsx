import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Imtiaz Ahamed - Social Media Marketing Specialist",
  description: "Learn about Imtiaz Ahamed, a passionate Social Media Marketing Specialist from Khulna, Bangladesh.",
};

const skills = [
  { name: "Facebook Marketing", level: 95 },
  { name: "Instagram Marketing", level: 92 },
  { name: "Content Creation", level: 90 },
  { name: "Social Media Strategy", level: 88 },
  { name: "Pinterest Marketing", level: 85 },
  { name: "Analytics & Reporting", level: 87 },
  { name: "X (Twitter) Marketing", level: 83 },
  { name: "Lead Generation", level: 85 },
];

const milestones = [
  {
    year: "2021",
    title: "Started Digital Marketing Journey",
    desc: "Began exploring social media marketing and helping local businesses build their online presence.",
  },
  {
    year: "2022",
    title: "First Major Clients",
    desc: "Successfully managed social media campaigns for multiple businesses across different industries.",
  },
  {
    year: "2023",
    title: "Expanded Services",
    desc: "Added Pinterest, X (Twitter) marketing and advanced analytics reporting to service offerings.",
  },
  {
    year: "2024",
    title: "Growing Portfolio",
    desc: "Helped 30+ businesses achieve significant growth through strategic social media marketing.",
  },
  {
    year: "2025",
    title: "Full-Service Specialist",
    desc: "Now offering complete social media marketing solutions including strategy, content, and analytics.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/imtiaz-casual.jpg"
                    alt="Imtiaz Ahamed"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Decorative orange block */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500 rounded-3xl -z-10"></div>
                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl p-4 shadow-lg">
                  <p className="text-3xl font-bold">3+</p>
                  <p className="text-xs text-orange-100">Years Exp.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-2">About Me</p>
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Passionate About Helping Brands Grow
                </h1>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Hello, I am Imtiaz Ahamed, a passionate Social Media Marketing Specialist dedicated to helping businesses build a strong online presence and achieve measurable growth through strategic digital marketing.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I specialize in managing and growing brands across major social media platforms, including Facebook, Instagram, Pinterest, and X (Twitter). My approach combines creative content, audience engagement, data-driven strategies, and consistent brand communication to help businesses reach the right people and turn followers into loyal customers.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Name</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">Imtiaz Ahamed</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">Khulna, Bangladesh</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Email</p>
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm">imtiaz.ahamed.gov.bd@gmail.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">+880 1724 608629</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Hire Me
                </Link>
                <Link href="/portfolio" className="btn-outline">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL BIO */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">My Story</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">My Mission & Vision</h2>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In today's competitive digital landscape, simply having social media accounts is not enough. Businesses need a well-planned strategy that attracts attention, builds trust, and drives results. That's where I come in. I work closely with businesses, entrepreneurs, startups, and personal brands to create customized social media strategies tailored to their goals and target audience.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My services include social media management, content planning, content creation, audience growth strategies, profile optimization, hashtag research, analytics reporting, brand awareness campaigns, and performance monitoring. Whether the goal is increasing engagement, generating leads, growing a community, or strengthening brand recognition, I focus on delivering solutions that produce real value.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I believe successful marketing is built on understanding people, analyzing trends, and creating content that connects with audiences. By staying updated with the latest platform algorithms, industry trends, and marketing techniques, I help brands maintain a competitive edge in the ever-changing world of social media.
            </p>
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <p className="text-zinc-900 dark:text-white font-semibold text-lg italic">
                "My mission is simple: to help businesses grow, connect with their audience, and achieve long-term success through effective social media and content marketing strategies."
              </p>
              <p className="text-orange-500 font-medium mt-2">— Imtiaz Ahamed</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">My Expertise</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Skills & Proficiency</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                  <span className="text-orange-500 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">My Journey</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Experience Timeline</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-500/30"></div>
            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs">{item.year}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm flex-1 border border-zinc-100 dark:border-zinc-700">
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
          <p className="text-orange-100 text-lg">
            Ready to transform your social media presence into a powerful business tool?
          </p>
          <Link href="/contact" className="inline-flex bg-white text-orange-500 font-semibold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}