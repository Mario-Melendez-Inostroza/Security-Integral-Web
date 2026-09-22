import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { SERVICES } from '../data/site'
import { IconArrow, IconBolt, IconShield } from '../components/icons'

export default function ServicioPage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  const index = SERVICES.findIndex((s) => s.slug === slug)

  if (!service) return <Navigate to="/" replace />

  const others = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      {/* hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.short}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8">
          <Reveal>
            <nav className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
              <Link to="/" className="transition-colors hover:text-primary-bright">Inicio</Link>
              <span>/</span>
              <span className="text-primary-bright">{service.short}</span>
            </nav>
            <span className="kicker">
              Servicio {String(index + 1).padStart(2, '0')}
            </span>
            <h1 className="mt-3 max-w-3xl text-4xl font-700 leading-[1] text-foreground sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* body: list + intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-28">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-700 uppercase tracking-widest text-primary">Alcance del servicio</span>
            <h2 className="mt-3 text-3xl font-700 text-gray-900 sm:text-4xl">
              LO QUE INCLUYE
            </h2>
            <p className="mt-5 max-w-md text-gray-500">
              Realizamos cada trabajo en terreno con estándar profesional, priorizando
              durabilidad, seguridad y un resultado prolijo.
            </p>
            <Link
              to="/contacto"
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display text-sm font-700 uppercase tracking-wider text-white transition-all hover:bg-primary-bright"
            >
              <IconBolt className="h-4 w-4" />
              Solicitar Cotización
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <ul className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-[#f3f5fb]">
              {service.items.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-white"
                >
                  <span className="text-sm font-700 text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <IconShield className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-lg font-600 text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <span className="kicker">Trabajos realizados</span>
            <h2 className="mt-3 text-3xl font-700 text-foreground sm:text-4xl">EN TERRENO</h2>
          </Reveal>
          <div
            className={`mt-10 grid gap-5 ${
              service.gallery.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            }`}
          >
            {service.gallery.map((g, i) => (
              <Reveal as="article" key={i} delay={i * 100}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-surface-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.caption}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-muted">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* other services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <span className="text-xs font-700 uppercase tracking-widest text-primary">Explora también</span>
            <h2 className="mt-3 text-3xl font-700 text-gray-900 sm:text-4xl">OTRAS SOLUCIONES</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((s, i) => (
              <Reveal as="article" key={s.slug} delay={i * 100}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-gray-200 bg-[#f3f5fb] p-3 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-white">
                    <img
                      src={s.image}
                      alt={s.short}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-700 text-gray-900">
                      {s.short.toUpperCase()}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-600 text-primary">
                      Ver Servicio
                      <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
