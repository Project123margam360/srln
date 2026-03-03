import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const projectsMenu = [
  { label: 'Ongoing Projects', to: '/projects/ongoing' },
  { label: 'Completed Projects', to: '/projects/completed' },
  { label: 'Upcoming Projects', to: '/projects/upcoming' },
]

const portalsMenu = [
  { label: 'Buyer Portal', to: '/portal/buyer' },
  { label: 'Agent Portal', to: '/portal/agent' },
  { label: 'Employee Portal', to: '/portal/employee' },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 transition-all duration-200 origin-top ${
        isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary/5 hover:text-primary font-medium transition-colors duration-150"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [portalsOpen, setPortalsOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const [mobilePortalsOpen, setMobilePortalsOpen] = useState(false)

  const navRef = useRef(null)
  const projectsTimer = useRef(null)
  const portalsTimer = useRef(null)

  const openProjects  = () => { clearTimeout(projectsTimer.current); setProjectsOpen(true)  }
  const closeProjects = () => { projectsTimer.current = setTimeout(() => setProjectsOpen(false), 150) }
  const openPortals   = () => { clearTimeout(portalsTimer.current);  setPortalsOpen(true)   }
  const closePortals  = () => { portalsTimer.current  = setTimeout(() => setPortalsOpen(false),  150) }

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setProjectsOpen(false)
        setPortalsOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(projectsTimer.current)
      clearTimeout(portalsTimer.current)
    }
  }, [])

  const activeLinkClass = ({ isActive }) =>
    isActive ? 'nav-link text-primary after:w-full' : 'nav-link'

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 select-none flex-shrink-0 -ml-[50px]">
            <img
              src="/images/srln-logo.png"
              alt="SRLN Infra Developers Pvt Ltd"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold text-primary tracking-wide leading-none">
                SRLN
              </span>
              <span className="font-sans text-[11px] font-semibold text-secondary tracking-[0.18em] leading-none mt-0.5">
                INFRA DEVELOPERS PVT LTD
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7">

            <NavLink to="/" end className={activeLinkClass}>
              Home
            </NavLink>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                className="nav-link flex items-center gap-1 bg-transparent border-none cursor-pointer"
                onMouseEnter={openProjects}
                onMouseLeave={closeProjects}
                onClick={() => setProjectsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={projectsOpen}
              >
                Projects
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    projectsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                onMouseEnter={openProjects}
                onMouseLeave={closeProjects}
              >
                <DropdownMenu items={projectsMenu} isOpen={projectsOpen} />
              </div>
            </div>

            <NavLink to="/about" className={activeLinkClass}>
              About
            </NavLink>

            <NavLink to="/blog" className={activeLinkClass}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={activeLinkClass}>
              Contact
            </NavLink>

            {/* Portals Dropdown */}
            <div className="relative">
              <button
                className="nav-link flex items-center gap-1 bg-transparent border-none cursor-pointer"
                onMouseEnter={openPortals}
                onMouseLeave={closePortals}
                onClick={() => setPortalsOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={portalsOpen}
              >
                Portals
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    portalsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                onMouseEnter={openPortals}
                onMouseLeave={closePortals}
              >
                <DropdownMenu items={portalsMenu} isOpen={portalsOpen} />
              </div>
            </div>
          </nav>

          {/* ── WhatsApp CTA (desktop) ── */}
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 shadow-sm flex-shrink-0"
          >
            <WhatsAppIcon size={17} />
            Chat on WhatsApp
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-5 pt-2 space-y-1 bg-white border-t border-slate-100">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'text-primary bg-primary/5' : 'text-slate-700 hover:bg-slate-50'
              }`
            }
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          {/* Mobile Projects */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileProjectsOpen((v) => !v)}
            >
              Projects
              <ChevronDown size={15} className={`transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {projectsMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {['About', 'Blog', 'Contact'].map((page) => (
            <NavLink
              key={page}
              to={`/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary/5' : 'text-slate-700 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {page}
            </NavLink>
          ))}

          {/* Mobile Portals */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setMobilePortalsOpen((v) => !v)}
            >
              Portals
              <ChevronDown size={15} className={`transition-transform ${mobilePortalsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobilePortalsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {portalsMenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp mobile */}
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors mt-2 shadow-sm"
          >
            <WhatsAppIcon size={17} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
