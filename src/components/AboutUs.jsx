import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

const highlights = [
  'Tailored for middle-class affordability',
  'Easily accessible locations',
]

export default function AboutUs() {
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Image ── */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main image */}
            <div className="relative w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="/images/architect.jpg"
                alt="SRLN Infra architect reviewing project plans"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient placeholder when no image is provided
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.classList.add(
                    'bg-gradient-to-br',
                    'from-primary',
                    'to-primary/70'
                  )
                }}
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* ── Floating badge ── */}
            <div className="absolute -bottom-5 -right-4 sm:bottom-6 sm:right-4 lg:-right-6 lg:bottom-8 bg-white rounded-xl shadow-xl px-5 py-4 border border-accent/30 max-w-[180px]">
              <div className="flex items-center gap-3">
                {/* Gold emblem */}
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-lg font-bold font-serif">✦</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-0.5">
                    Established
                  </p>
                  <p className="font-serif text-sm font-bold text-primary leading-tight">
                    Nov 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent block behind image */}
            <div className="absolute -left-4 -top-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10 hidden lg:block" />
            <div className="absolute -right-6 -bottom-6 w-48 h-48 rounded-full bg-primary/5 -z-10 hidden lg:block" />
          </div>

          {/* ── Right: Copy ── */}
          <div className="flex flex-col items-start">

            {/* Label */}
            <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3 px-3 py-1 bg-accent/10 rounded-full">
              Our Legacy
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-primary leading-tight mb-6">
              Building Your Future with{' '}
              <span className="relative">
                Divine Blessings.
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/40 rounded-full" />
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Named in reverence to{' '}
              <strong className="font-semibold text-slate-800">
                Lord Sri Laxmi Narasimha Swamy
              </strong>
              , and founded by industry veterans{' '}
              <strong className="font-semibold text-slate-800">Srikanth Reddy &amp; Laxman</strong>,
              SRLN Infra Developers makes premium, architect-designed real estate
              accessible to everyone.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-base leading-relaxed mb-7">
              We stand firmly by our{' '}
              <span className="font-semibold text-primary">
                zero-fluctuation, fixed-price policy
              </span>{' '}
              — what you see is exactly what you pay, no surprises.
            </p>

            {/* Bullet highlights */}
            <ul className="space-y-3 mb-9">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-primary font-semibold text-sm border-b-2 border-accent pb-0.5 hover:text-accent transition-colors duration-200"
            >
              Read Our Full Story
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
