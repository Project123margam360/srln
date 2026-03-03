import { Compass, Banknote, Calculator, Stamp } from 'lucide-react'

const cards = [
  {
    icon: Compass,
    title: 'Architect Designed',
    text: 'Meticulously planned layouts for maximum space utilization.',
  },
  {
    icon: Banknote,
    title: 'Fixed Pricing',
    text: 'No hidden fees, no sudden rate hikes. 100% transparency.',
  },
  {
    icon: Calculator,
    title: 'Flexible EMIs',
    text: 'Customized EMI payment options tailored to suit middle-class incomes.',
  },
  {
    icon: Stamp,
    title: 'DTCP Approved',
    text: 'Total legal compliance. Invest with absolute peace of mind.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3 px-3 py-1 bg-accent/10 rounded-full">
            Why SRLN Infra
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            What Sets Us Apart
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Every decision we make is rooted in trust, quality, and a genuine
            commitment to your financial well-being.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-7 flex flex-col items-center text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              {/* Icon container */}
              <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300 flex-shrink-0">
                <Icon
                  size={26}
                  className="text-accent group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {text}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 w-8 h-0.5 bg-accent/40 group-hover:w-14 group-hover:bg-accent transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
