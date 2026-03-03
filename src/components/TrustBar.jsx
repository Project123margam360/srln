import { Trophy, Users, Tag, CheckSquare } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    stat: '10+',
    label: 'Years Experience',
  },
  {
    icon: Users,
    stat: '50+',
    label: 'Happy Customers',
  },
  {
    icon: Tag,
    stat: '100%',
    label: 'Fixed Pricing',
  },
  {
    icon: CheckSquare,
    stat: 'DTCP',
    label: 'Approved Layouts',
  },
]

export default function TrustBar() {
  return (
    <section className="w-full bg-white border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ icon: Icon, stat, label }, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 ${
                idx < stats.length - 1
                  ? 'lg:border-r lg:border-slate-200'
                  : ''
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <Icon size={22} className="text-accent" strokeWidth={2} />
              </div>

              {/* Stat */}
              <span className="font-serif text-4xl font-bold text-primary leading-none mb-1">
                {stat}
              </span>

              {/* Label */}
              <span className="text-sm text-slate-500 font-medium tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
