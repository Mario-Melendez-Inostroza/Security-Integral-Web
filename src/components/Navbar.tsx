import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SERVICES } from '../data/site'
import { IconBolt, IconArrow } from './icons'
import logo from '../assets/logo-psystems.png'

const linkBase =
  'font-display text-sm font-600 uppercase tracking-[0.06em] transition-colors'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const openDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border'
          : 'bg-gradient-to-b from-background/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5 lg:h-[80px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="Pro Security Systems"
            className="h-10 w-auto object-contain lg:h-[52px]"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavItem to="/">Inicio</NavItem>

          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`${linkBase} flex items-center gap-1.5 text-white/75 hover:text-white`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Servicios
              <span
                className={`text-primary-bright transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? 'visible opacity-100 translate-y-0'
                  : 'invisible opacity-0 -translate-y-1'
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-surface/95 backdrop-blur-xl shadow-2xl shadow-black/60">
                <span className="block px-5 pt-4 pb-2 kicker">Nuestras soluciones</span>
                {SERVICES.map((s, i) => (
                  <Link
                    key={s.slug}
                    to={`/servicios/${s.slug}`}
                    className="group flex items-center gap-3 px-5 py-3 transition-colors hover:bg-surface-2"
                  >
                    <span className="font-mono text-xs text-primary-bright">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-display font-600 text-foreground">
                      {s.short}
                    </span>
                    <IconArrow className="h-4 w-4 -translate-x-1 text-muted opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary-bright" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem to="/nosotros">Nosotros</NavItem>
          <NavItem to="/contacto">Contacto</NavItem>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-700 uppercase tracking-[0.06em] text-white transition-colors hover:bg-primary-bright"
          >
            <IconBolt className="h-4 w-4" />
            Cotizar Ahora
          </Link>
        </div>

        {/* hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-foreground transition-all duration-300 ${
                mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-foreground transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-foreground transition-all duration-300 ${
                mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl transition-[max-height] duration-400 ease-out ${
          mobileOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6">
          <MobileLink to="/">Inicio</MobileLink>
          <div className="pt-2">
            <span className="kicker px-1">Servicios</span>
            <div className="mt-2 flex flex-col gap-1 border-l border-border pl-3">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="flex items-center gap-3 rounded-md px-2 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  <span className="font-mono text-xs text-primary-bright">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-600">{s.short}</span>
                </Link>
              ))}
            </div>
          </div>
          <MobileLink to="/nosotros">Nosotros</MobileLink>
          <MobileLink to="/contacto">Contacto</MobileLink>
          <Link
            to="/contacto"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 font-display text-sm font-700 uppercase tracking-wider text-primary-foreground"
          >
            <IconBolt className="h-4 w-4" />
            Cotizar Ahora
          </Link>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `${linkBase} relative py-1 ${
          isActive
            ? 'text-primary-bright after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-primary-bright'
            : 'text-white/75 hover:text-white'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-md px-2 py-3 font-display text-lg font-600 uppercase tracking-wide transition-colors ${
          isActive ? 'text-primary-bright' : 'text-foreground'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
