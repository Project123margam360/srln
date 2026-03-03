import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Ongoing Projects', to: '/projects/ongoing' },
  { label: 'Completed Projects', to: '/projects/completed' },
  { label: 'Upcoming Projects', to: '/projects/upcoming' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const clientPortals = [
  { label: 'Buyer Portal', to: '/portal/buyer' },
  { label: 'Agent Portal', to: '/portal/agent' },
  { label: 'Employee Portal', to: '/portal/employee' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <>
      {/* ── Main Footer ── */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link to="/" className="inline-flex items-center gap-3 mb-5 select-none">
                <div className=" rounded-xl px-3 py-2 inline-block">
                  <img
                    src="/images/srln-logo2.png"
                    alt="SRLN Infra Developers Pvt Ltd"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl font-bold text-white tracking-wide leading-none">
                    SRLN
                  </span>
                  <span className="font-sans text-xs font-semibold text-secondary tracking-[0.18em] leading-none mt-1">
                    INFRA
                  </span>
                  <span className="font-sans text-[10px] font-semibold text-accent tracking-widest uppercase leading-none mt-1">
                    Pvt Ltd
                  </span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Your Satisfaction Is Our Foundation. Building premium residential
                and commercial properties that stand the test of time.
              </p>

              {/* Contact Details */}
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Flat no.102, Madhusha Apartments, Beside NGRI metro station, Habsiguda, Hyderabad, Telangana – 500007</span>
                </li>
                <li>
                  <a
                    href="tel:+919000000000"
                    className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="text-accent flex-shrink-0" />
                    +91 90000 00000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@srlninfra.com"
                    className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="text-accent flex-shrink-0" />
                    info@srlninfra.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif text-lg font-semibold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-accent transition-colors duration-200 hover:pl-1 block"
                    >
                      › {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Portals */}
            <div>
              <h3 className="text-white font-serif text-lg font-semibold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
                Client Portals
              </h3>
              <ul className="space-y-2.5">
                {clientPortals.map((portal) => (
                  <li key={portal.to}>
                    <Link
                      to={portal.to}
                      className="text-sm text-slate-400 hover:text-accent transition-colors duration-200 hover:pl-1 block"
                    >
                      › {portal.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* RERA / Legal */}
              <div className="mt-8 p-3.5 rounded-lg bg-slate-800 border border-slate-700">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  RERA Reg. No.
                </p>
                <p className="text-sm font-semibold text-accent">
                  TS/12/2024/000XX
                </p>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="text-white font-serif text-lg font-semibold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
                Follow Us
              </h3>
              <div className="flex gap-3 mb-8">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-slate-700 hover:bg-primary flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Mini Newsletter */}
              <h4 className="text-sm font-semibold text-white mb-3">
                Get Property Updates
              </h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2.5"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3.5 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-accent hover:bg-accent/90 text-slate-900 text-sm font-semibold rounded-md transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} SRLN Infra Developers Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Use
              </Link>
              <Link to="/sitemap" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/919000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <WhatsAppIcon size={27} className="text-white" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Chat with us
        </span>
      </a>
    </>
  )
}
