import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/imtiyaz.com.bd", emoji: "📘" },
  { name: "Instagram", href: "https://instagram.com/imtiaz.com.bd", emoji: "📸" },
  { name: "X (Twitter)", href: "https://x.com/imtiaz_info_BD", emoji: "🐦" },
  { name: "LinkedIn", href: "https://linkedin.com/in/imtiaz-com-bd", emoji: "💼" },
  { name: "Pinterest", href: "https://pinterest.com/imtiaz_info_BD", emoji: "📌" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <span className="font-bold text-lg text-white">
                Imtiaz<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Helping Brands Grow, Engage, and Succeed through strategic social media marketing.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200 text-sm">
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-orange-500 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p>📧 <a href="mailto:imtiaz.ahamed.gov.bd@gmail.com" className="hover:text-orange-500 transition-colors">imtiaz.ahamed.gov.bd@gmail.com</a></p>
              <p>📱 <a href="https://wa.me/8801724608629" className="hover:text-orange-500 transition-colors">+880 1724 608629</a></p>
              <p>📍 Khulna, Bangladesh</p>
            </div>
            <div className="pt-4">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm inline-block transition-all">
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {currentYear} Imtiaz Ahamed. All rights reserved.</p>
          <p className="text-xs">Social Media Marketing Specialist — Khulna, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}