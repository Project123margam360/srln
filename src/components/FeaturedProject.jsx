import { useEffect, useState } from 'react'
import { MapPin, Maximize2, Compass, CheckCircle2, XCircle, Clock, X, ZoomIn, ZoomOut } from 'lucide-react'

const STATUS = {
  AVAILABLE: 'Available',
  SOLD: 'Sold',
  RESERVED: 'Reserved',
}

const plots = [
  { id: '101', size: '150 sq.yd', facing: 'East', status: STATUS.AVAILABLE },
  { id: '102', size: '200 sq.yd', facing: 'North', status: STATUS.SOLD },
  { id: '103', size: '150 sq.yd', facing: 'East', status: STATUS.AVAILABLE },
  { id: '104', size: '175 sq.yd', facing: 'West', status: STATUS.RESERVED },
  { id: '105', size: '200 sq.yd', facing: 'North', status: STATUS.AVAILABLE },
  { id: '106', size: '150 sq.yd', facing: 'East', status: STATUS.SOLD },
  { id: '107', size: '225 sq.yd', facing: 'South', status: STATUS.AVAILABLE },
  { id: '108', size: '175 sq.yd', facing: 'West', status: STATUS.RESERVED },
  { id: '109', size: '150 sq.yd', facing: 'East', status: STATUS.AVAILABLE },
  { id: '110', size: '200 sq.yd', facing: 'North', status: STATUS.SOLD },
]

const statusConfig = {
  [STATUS.AVAILABLE]: {
    bg: 'bg-emerald-500 hover:bg-emerald-400',
    selectedBg: 'bg-emerald-400 ring-4 ring-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    icon: CheckCircle2,
    iconColor: 'text-emerald-500',
  },
  [STATUS.SOLD]: {
    bg: 'bg-red-500 hover:bg-red-400 cursor-not-allowed',
    selectedBg: 'bg-red-400 ring-4 ring-red-200',
    badge: 'bg-red-100 text-red-700 border-red-200',
    icon: XCircle,
    iconColor: 'text-red-500',
  },
  [STATUS.RESERVED]: {
    bg: 'bg-amber-400 hover:bg-amber-300',
    selectedBg: 'bg-amber-300 ring-4 ring-amber-100',
    badge: 'bg-amber-100 text-amber-700 border-amber-200',
    icon: Clock,
    iconColor: 'text-amber-500',
  },
}

// Decorative road divider that sits between plot rows
function RoadDivider() {
  return (
    <div className="col-span-6 flex items-center gap-1 my-1">
      <div className="flex-1 border-t-2 border-dashed border-slate-400/40" />
      <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase px-2">
        Road
      </span>
      <div className="flex-1 border-t-2 border-dashed border-slate-400/40" />
    </div>
  )
}

export default function FeaturedProject() {
  const [selectedPlot, setSelectedPlot] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handlePlotClick = (plot) => {
    setSelectedPlot((prev) => (prev?.id === plot.id ? null : plot))
  }

  const openModal = () => {
    setIsModalOpen(true)
    setZoomLevel(1)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setZoomLevel(1)
  }

  const updateZoom = (nextZoom) => {
    setZoomLevel(Math.min(3, Math.max(1, nextZoom)))
  }

  const handleWheelZoom = (event) => {
    event.preventDefault()
    const delta = event.deltaY > 0 ? -0.15 : 0.15
    setZoomLevel((prev) => Math.min(3, Math.max(1, prev + delta)))
  }

  useEffect(() => {
    if (!isModalOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
        setZoomLevel(1)
      }
    }

    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const cfg = selectedPlot ? statusConfig[selectedPlot.status] : null
  const StatusIcon = cfg?.icon

  // Split plots into two rows of 5 for the map layout
  const firstRow = plots.slice(0, 5)
  const secondRow = plots.slice(5, 10)

  return (
    <>
      <section className="w-full bg-primary py-4 lg:py-2 overflow-hidden lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 lg:mb-3">
          <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            Flagship Venture
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.3rem] font-bold text-white leading-tight">
              Divine Farms <span className="text-accent">- Flagship Venture</span>
            </h2>
            {/*
            <div className="flex items-center gap-5 text-sm">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="inline-block w-3 h-3 rounded-sm bg-emerald-500" />
                Available
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="inline-block w-3 h-3 rounded-sm bg-red-500" />
                Sold
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="inline-block w-3 h-3 rounded-sm bg-amber-400" />
                Reserved
              </span>
            </div>
            */}
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 gap-3 items-start">
          {/* Left: Map (2/3) */}
          <div className="bg-slate-200/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-3 lg:p-4">
            {/* Map header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <MapPin size={15} className="text-accent" />
                Divine Farms - Plot Map
              </div>
              <span className="text-xs text-slate-400">239 plots available</span>
            </div>

            <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[320px] lg:h-[380px] gap-3 lg:gap-4">
              <div className="md:flex-[2.15] min-h-[220px] md:h-full bg-black flex items-center justify-center">
                <video
                  src="/videos/SRLN-bg.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={openModal}
                className="md:flex-[1.08] min-h-[220px] md:h-full bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 cursor-pointer"
                aria-label="Open plot map in modal"
              >
                <img
                  src="/images/plotmap.jpeg"
                  alt="Divine Farms plot map"
                  className="w-full h-full object-contain object-center scale-[1.08]"
                />
              </button>
            </div>

            {/*
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/images/plotmap.jpeg"
                alt="Divine Farms plot map"
                className="w-full h-auto object-cover"
              />
            </div>
            */}

            {/*
            <div className="flex justify-end mb-3 pr-1">
              <div className="flex flex-col items-center gap-0.5">
                <Compass size={18} className="text-accent" />
                <span className="text-[10px] text-slate-400 font-semibold">N</span>
              </div>
            </div>

            <div className="text-center mb-3">
              <span className="inline-block text-xs text-slate-400 font-semibold tracking-widest uppercase border border-slate-500/40 rounded px-3 py-1">
                Main Entrance
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {firstRow.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id
                const config = statusConfig[plot.status]
                return (
                  <button
                    key={plot.id}
                    onClick={() => handlePlotClick(plot)}
                    className={`
                      col-span-1 aspect-square rounded-lg flex flex-col items-center justify-center
                      text-white font-bold text-xs sm:text-sm transition-all duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                      ${isSelected ? config.selectedBg + ' scale-95 shadow-lg' : config.bg + ' shadow-md hover:scale-105 hover:shadow-lg'}
                    `}
                    title={`Plot ${plot.id} - ${plot.status}`}
                    aria-pressed={isSelected}
                  >
                    <span className="leading-none">{plot.id}</span>
                    <span className="text-[9px] font-normal opacity-80 mt-0.5">
                      {plot.size.split(' ')[0]}
                    </span>
                  </button>
                )
              })}

              <RoadDivider />

              {secondRow.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id
                const config = statusConfig[plot.status]
                return (
                  <button
                    key={plot.id}
                    onClick={() => handlePlotClick(plot)}
                    className={`
                      col-span-1 aspect-square rounded-lg flex flex-col items-center justify-center
                      text-white font-bold text-xs sm:text-sm transition-all duration-200
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                      ${isSelected ? config.selectedBg + ' scale-95 shadow-lg' : config.bg + ' shadow-md hover:scale-105 hover:shadow-lg'}
                    `}
                    title={`Plot ${plot.id} - ${plot.status}`}
                    aria-pressed={isSelected}
                  >
                    <span className="leading-none">{plot.id}</span>
                    <span className="text-[9px] font-normal opacity-80 mt-0.5">
                      {plot.size.split(' ')[0]}
                    </span>
                  </button>
                )
              })}
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              Click any plot above to view detailed specifications
            </p>
            */}
          </div>

          {/* Right: Details Panel (1/3) */}
          {/*
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-primary/5 border-b border-slate-100 px-6 py-4">
                <h3 className="font-serif text-base font-bold text-primary">Plot Details</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {selectedPlot ? `Viewing Plot #${selectedPlot.id}` : 'No plot selected'}
                </p>
              </div>

              <div className="px-6 py-6">
                {!selectedPlot ? (
                  <div className="flex flex-col items-center text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                      <MapPin size={26} className="text-slate-300" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Click any plot on the map to view specifications
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${cfg.badge}`}
                    >
                      <StatusIcon size={13} />
                      {selectedPlot.status}
                    </div>

                    <ul className="space-y-4 mb-7">
                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                            Plot ID
                          </p>
                          <p className="text-base font-bold text-slate-800">#{selectedPlot.id}</p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Maximize2 size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                            Size
                          </p>
                          <p className="text-base font-bold text-slate-800">{selectedPlot.size}</p>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Compass size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                            Facing
                          </p>
                          <p className="text-base font-bold text-slate-800">
                            {selectedPlot.facing}-Facing
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="border-t border-slate-100 mb-6" />

                    {selectedPlot.status === STATUS.AVAILABLE && (
                      <button className="w-full bg-accent hover:bg-accent/90 text-slate-900 font-bold text-sm py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-accent/30 hover:shadow-lg active:scale-95">
                        Book This Plot
                      </button>
                    )}

                    {selectedPlot.status === STATUS.SOLD && (
                      <button
                        disabled
                        className="w-full bg-slate-100 text-slate-400 font-semibold text-sm py-3 rounded-xl cursor-not-allowed"
                      >
                        Not Available
                      </button>
                    )}

                    {selectedPlot.status === STATUS.RESERVED && (
                      <button
                        disabled
                        className="w-full bg-amber-50 text-amber-600 border border-amber-200 font-semibold text-sm py-3 rounded-xl cursor-not-allowed"
                      >
                        Under Reservation
                      </button>
                    )}

                    <p className="text-center text-xs text-slate-400 mt-3">
                      For enquiries: call +91 90000 00000
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          */}
        </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Plot map preview"
        >
          <div
            className="relative flex w-full max-w-5xl flex-col rounded-xl bg-white p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-700">Divine Farms Plot Map</div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateZoom(zoomLevel - 0.2)}
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => updateZoom(zoomLevel + 0.2)}
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div
              className="overflow-auto rounded-lg bg-slate-100 touch-pan-x touch-pan-y"
              onWheel={handleWheelZoom}
            >
              <div className="flex min-h-[60vh] items-center justify-center p-2 sm:p-4">
                <img
                  src="/images/plotmap.jpeg"
                  alt="Divine Farms plot map enlarged"
                  className="max-h-[78vh] w-auto max-w-none object-contain transition-transform duration-150"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
