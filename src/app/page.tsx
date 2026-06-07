import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">Available for new projects</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
                  Hi, I am{" "}
                  <span className="text-orange-500">Imtiaz</span>
                  <br />
                  <span className="text-zinc-900 dark:text-white">Ahamed</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                  Social Media Marketing Specialist
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
                  I help businesses grow through Facebook, Instagram, Pinterest, X (Twitter), and content marketing strategies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn-outline">
                  Hire Me
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-orange-500">50+</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Projects Done</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-orange-500">30+</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Happy Clients</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-orange-500">3+</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right — Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Orange circle behind photo */}
                <div className="absolute inset-0 bg-orange-500 rounded-full transform translate-x-4 translate-y-4"></div>
                {/* Photo */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                  <Image
                    src="/imtiaz-profile.jpg"
                    alt="Imtiaz Ahamed - Social Media Marketing Specialist"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-4 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Based in</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">📍 Khulna, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">My Services</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              I offer a complete range of social media marketing services to help your business grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 hover:shadow-md hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Why Choose Me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                Helping Brands Grow, Engage, and Succeed
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I combine creative content, audience engagement, data-driven strategies, and consistent brand communication to help businesses reach the right people and turn followers into loyal customers.
              </p>
              <div className="space-y-4">
                {whyMe.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 dark:bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-orange-500 rounded-3xl p-8 text-white space-y-6">
                <h3 className="text-2xl font-bold">Ready to grow your brand?</h3>
                <p className="text-orange-100">
                  Let us work together to transform your social media presence into a powerful tool for business growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="text-orange-100 text-xs">+880 1724 608629</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-orange-100 text-xs">imtiaz.ahamed.gov.bd@gmail.com</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="block bg-white text-orange-500 font-semibold py-3 px-6 rounded-xl text-center hover:bg-orange-50 transition-colors">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-zinc-950 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Take Your Social Media to the{" "}
            <span className="text-orange-500">Next Level?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Let us build a strategy that works for your business. Contact me today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/portfolio" className="btn-outline border-zinc-600 text-zinc-300 hover:border-orange-500 hover:text-orange-500">
              See My Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

const services = [
  {
    icon: "📘",
    title: "Facebook Marketing",
    description: "Strategic Facebook campaigns that build brand awareness, increase engagement, and drive measurable results for your business.",
  },
  {
    icon: "📸",
    title: "Instagram Marketing",
    description: "Creative Instagram strategies with compelling visuals and stories that grow your audience and boost brand visibility.",
  },
  {
    icon: "📌",
    title: "Pinterest Marketing",
    description: "Pinterest strategies that drive traffic, increase brand discovery, and connect your products with the right audience.",
  },
  {
    icon: "🐦",
    title: "X (Twitter) Marketing",
    description: "Engaging Twitter presence with strategic content that builds followers and strengthens your brand voice.",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    description: "High-quality, engaging content tailored to your brand voice that attracts attention and drives meaningful engagement.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Data-driven insights and detailed reports that help you understand performance and make informed marketing decisions.",
  },
];

const whyMe = [
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    desc: "Every strategy is built around achieving measurable results for your business.",
  },
  {
    icon: "📈",
    title: "Data-Driven Decisions",
    desc: "I analyze trends and performance data to continuously optimize your campaigns.",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    desc: "Regular updates and clear reports so you always know what is happening.",
  },
  {
    icon: "⚡",
    title: "Always Up to Date",
    desc: "I stay current with the latest platform algorithms and marketing trends.",
  },
];