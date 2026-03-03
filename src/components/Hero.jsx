import { Link } from 'react-router-dom'

const MARQUEE_TEXT =
  '🚨 EXCITING NEWS: Plot Bookings Now Open for DIVINE FARMS! \u00A0|\u00A0 100% DTCP Approved Layouts \u00A0|\u00A0 Fixed Prices & Flexible EMI Options Available 🚨'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-primary">

      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* ── Dark Gradient Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

        {/* Tag line */}
        <p className="inline-block text-accent text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-5 px-4 py-1.5 border border-accent/40 rounded-full backdrop-blur-sm bg-black/20">
          Your Satisfaction Is Our Foundation
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
          Modern Living Rooted in{' '}
          <span className="text-accent relative inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent/50">
            Trust
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
          Delivering architect-designed ventures with fixed pricing and flexible
          payment plans for middle-class families and smart investors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/projects/ongoing"
            className="group relative inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-7 py-3.5 rounded-md overflow-hidden transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:shadow-xl"
          >
            {/* hover fill */}
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative transition-colors duration-300 group-hover:text-slate-900">
              Explore Divine Farms
            </span>
            <svg
              className="relative w-4 h-4 transition-all duration-300 group-hover:text-slate-900 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-300 shadow-lg hover:bg-primary hover:text-white border-2 border-transparent hover:border-primary"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Free Site Visit
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex flex-col items-center gap-1.5 opacity-60 animate-bounce">
          <span className="text-white font-light text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Scrolling Marquee ── */}
      <div className="relative z-10 w-full bg-secondary overflow-hidden py-2.5 flex-shrink-0">
        <div className="marquee-track flex whitespace-nowrap">
          {/* Duplicate text for seamless loop */}
          {[0, 1].map((i) => (
            <span
              key={i}
              className="marquee-text inline-block text-white text-xs sm:text-sm font-semibold tracking-wide px-8"
            >
              {MARQUEE_TEXT}
              &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
              {MARQUEE_TEXT}
              &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
