import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'Flat no. 102, Madhusha Apartments,\nBeside NGRI metro staion, Habsiguda,\nTelangana – 500007',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 90000 00000',
    href: 'tel:+919000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@srlninfra.com',
    href: 'mailto:info@srlninfra.com',
  },
]

const INITIAL = { name: '', phone: '', interest: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual API integration
    setSubmitted(true)
    setForm(INITIAL)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3 px-3 py-1 bg-accent/10 rounded-full">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Let's Build Your Future Together
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Have a question about a plot or want to schedule a site visit? Our
            team is ready to help.
          </p>
        </div>

        {/* ── 2-Column Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden shadow-2xl">

          {/* ── Left: Contact Info (2/5) ── */}
          <div className="lg:col-span-2 bg-primary px-8 py-12 flex flex-col justify-between gap-10">

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-accent mb-2 leading-snug">
                Get in Touch
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are available Monday – Saturday,&nbsp;9 AM to 6 PM IST.
                Reach out through any channel below.
              </p>
            </div>

            {/* Contact details */}
            <ul className="space-y-8 flex-1">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  {/* Icon circle */}
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white text-sm font-medium hover:text-accent transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium whitespace-pre-line">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative circles */}
            <div className="relative h-24 overflow-hidden opacity-20 pointer-events-none select-none">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-2 border-accent" />
              <div className="absolute -bottom-16 -left-4  w-56 h-56 rounded-full border   border-accent" />
            </div>
          </div>

          {/* ── Right: Form (3/5) ── */}
          <div className="lg:col-span-3 bg-white px-8 py-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Send size={26} className="text-emerald-600" />
                </div>
                <h4 className="font-serif text-xl font-bold text-primary">
                  Request Submitted!
                </h4>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thank you for your interest. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5"
                  >
                    Full Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5"
                  >
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5"
                  >
                    I Am Interested In <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 cursor-pointer"
                    >
                      <option value="" disabled>
                        — Select an option —
                      </option>
                      <option value="divine-farms">Divine Farms</option>
                      <option value="managed-farmlands">Managed Farmlands</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {/* Custom chevron */}
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements, preferred plot size, budget, etc."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-slate-900 font-bold text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-accent/30 hover:shadow-lg active:scale-[0.98] mt-1"
                >
                  Submit Request
                  <Send
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-slate-400 pt-1">
                  We respect your privacy. Your details will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
