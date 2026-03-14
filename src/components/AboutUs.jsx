import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Volume2, VolumeX } from 'lucide-react'

const highlights = [
  'Tailored for middle-class affordability',
  'Easily accessible locations',
]

export default function AboutUs() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      if (newVolume > 0 && isMuted) {
        videoRef.current.muted = false
        setIsMuted(false)
      } else if (newVolume === 0 && !isMuted) {
        videoRef.current.muted = true
        setIsMuted(true)
      }
    }
  }
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Video ── */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main video */}
            <div className="relative w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4] bg-black">
              <video
                ref={videoRef}
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/VN20260314_230720.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Custom Audio Controls */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 z-10">
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX size={18} strokeWidth={2} />
                  ) : (
                    <Volume2 size={18} strokeWidth={2} />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent"
                  title="Volume control"
                />
              </div>
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
                    Dec 2025
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
