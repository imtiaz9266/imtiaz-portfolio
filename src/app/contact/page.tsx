"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "imtiaz.ahamed.gov.bd@gmail.com",
      link: "mailto:imtiaz.ahamed.gov.bd@gmail.com",
      desc: "Send me an email anytime",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+880 1724 608629",
      link: "https://wa.me/8801724608629",
      desc: "Message me on WhatsApp",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Khulna, Bangladesh",
      link: "#",
      desc: "Available for remote work worldwide",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "imtiaz-com-bd",
      link: "https://linkedin.com/in/imtiaz-com-bd",
      desc: "Connect with me professionally",
    },
  ];

  const services = [
    "Facebook Marketing",
    "Instagram Marketing",
    "Pinterest Marketing",
    "X (Twitter) Marketing",
    "Content Creation",
    "Social Media Strategy",
    "Analytics & Reporting",
    "Full Package (All Services)",
  ];

  const budgets = [
    "Under $100/month",
    "$100 - $300/month",
    "$300 - $500/month",
    "$500 - $1000/month",
    "Above $1000/month",
    "One-time Project",
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* HERO */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Let's Work Together
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to grow your social media presence? Send me a message and I will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-12 pb-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Contact Information</h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Feel free to reach out through any of these channels.</p>
              </div>

              {contactInfo.map((info) => (
                <a key={info.title} href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white dark:bg-zinc-800 rounded-2xl p-5 shadow-sm border border-zinc-100 dark:border-zinc-700 hover:border-orange-200 dark:hover:border-orange-500/30 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-orange-500 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm">{info.title}</p>
                    <p className="text-orange-500 text-sm font-medium">{info.value}</p>
                    <p className="text-zinc-400 text-xs mt-1">{info.desc}</p>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="bg-orange-500 rounded-2xl p-6 text-white space-y-4">
                <h3 className="font-bold">Follow Me On Social Media</h3>
                <div className="space-y-2">
                  {[
                    { name: "Facebook", handle: "@imtiyaz.com.bd", href: "https://facebook.com/imtiyaz.com.bd", emoji: "📘" },
                    { name: "Instagram", handle: "@imtiaz.com.bd", href: "https://instagram.com/imtiaz.com.bd", emoji: "📸" },
                    { name: "X (Twitter)", handle: "@imtiaz_info_BD", href: "https://x.com/imtiaz_info_BD", emoji: "🐦" },
                    { name: "LinkedIn", handle: "imtiaz-com-bd", href: "https://linkedin.com/in/imtiaz-com-bd", emoji: "💼" },
                    { name: "Pinterest", handle: "@imtiaz_info_BD", href: "https://pinterest.com/imtiaz_info_BD", emoji: "📌" },
                  ].map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors">
                      <span>{social.emoji}</span>
                      <div>
                        <p className="text-xs font-semibold">{social.name}</p>
                        <p className="text-orange-100 text-xs">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-zinc-800 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-700">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="text-6xl">🎉</div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Sent!</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Thank you for reaching out! I will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                      className="btn-primary mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Send Me a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name *</label>
                          <input
                            type="text" name="name" required value={formData.name} onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address *</label>
                          <input
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Phone / WhatsApp</label>
                        <input
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="+880 1XXX XXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Service & Budget */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Service Needed *</label>
                          <select
                            name="service" required value={formData.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select a service</option>
                            {services.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Monthly Budget</label>
                          <select
                            name="budget" value={formData.budget} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select budget range</option>
                            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Your Message *</label>
                        <textarea
                          name="message" required value={formData.message} onChange={handleChange}
                          rows={5} placeholder="Tell me about your business, goals, and what you need help with..."
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit" disabled={loading}
                        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Send Message 🚀"}
                      </button>

                      <p className="text-xs text-zinc-400 text-center">
                        I typically respond within 24 hours. Your information is kept private.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">FAQ</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How quickly do you respond to inquiries?", a: "I respond to all inquiries within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me." },
              { q: "Do you work with international clients?", a: "Yes! I work with clients worldwide. All communication is done online, and I am comfortable working across different time zones." },
              { q: "How do you charge for your services?", a: "Pricing depends on the services needed, scope of work, and duration. I offer monthly retainer packages and one-time project pricing. Contact me for a custom quote." },
              { q: "What platforms do you specialize in?", a: "I specialize in Facebook, Instagram, Pinterest, and X (Twitter). I also offer content creation and analytics services that support all platforms." },
              { q: "Do you provide reports on your work?", a: "Yes, I provide detailed monthly analytics reports showing follower growth, engagement rates, reach, and other key performance indicators." },
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-start gap-3">
                  <span className="text-orange-500 shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}