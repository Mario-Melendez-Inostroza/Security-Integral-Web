import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { SERVICES, IMAGES, CONTACT } from '../data/site'
import {
  IconArrow,
  IconCamera,
  IconFence,
  IconGate,
  IconGear,
  IconHeadset,
  IconShield,
  IconWhatsapp,
  IconWrench,
} from '../components/icons'

const serviceIcons = [IconFence, IconGate, IconCamera]

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <FinalCTA />
    </>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden lg:min-h-[540px]">
      <img
        src={IMAGES.fondoHero}
        alt="Casa moderna al atardecer protegida con cerco eléctrico y cámara de seguridad Pro Security Systems"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-[56%_center]"
      />
      {/* gradient: opaque left, transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06090e]/95 from-[8%] via-[#06090e]/55 via-[45%] to-transparent to-[72%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06090e]/55 via-transparent to-[#06090e]/40" />

      {/* main content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-10 lg:px-8 lg:pt-[104px] lg:pb-9">
        <div className="max-w-[640px]">
          <Reveal>
            <p className="text-[0.72rem] font-600 uppercase tracking-[0.26em] text-white/70">
              Tranquilidad todos los días
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-[2.05rem] font-700 leading-[1.08] tracking-[-0.018em] text-white sm:text-[2.5rem] lg:text-[3.05rem]">
              PROTECCIÓN PARA
              <br />
              <span className="text-primary-bright">LO QUE MÁS IMPORTA</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 max-w-[510px] text-[0.95rem] leading-relaxed text-white/75">
              Soluciones profesionales en cercos eléctricos, portones automáticos,
              cámaras de seguridad y control de acceso para hogares, condominios y empresas.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-3 flex flex-wrap gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 font-display text-sm font-700 uppercase tracking-[0.06em] text-white transition-colors hover:bg-primary-bright"
              >
                <IconWhatsapp className="h-4 w-4" />
                Cotizar Ahora
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 font-display text-sm font-700 uppercase tracking-[0.06em] text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Ver Servicios
                <IconArrow className="h-4 w-4 text-primary-bright" />
              </a>
            </div>
          </Reveal>

          {/* feature strip */}
          <Reveal delay={320}>
            <div className="mt-8 grid max-w-[640px] grid-cols-1 gap-y-5 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/15">
              {[
                { Icon: IconFence, title: 'Protección Perimetral', desc: 'Cercos eléctricos y soluciones perimetrales' },
                { Icon: IconGate, title: 'Automatización', desc: 'Portones eléctricos y control de acceso' },
                { Icon: IconCamera, title: 'Seguridad y Vigilancia', desc: 'Cámaras, citofonía y monitoreo' },
              ].map(({ Icon, title, desc }, i) => (
                <div key={title} className={`flex gap-3 ${i === 0 ? 'sm:pr-5' : 'sm:px-5'}`}>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-bright">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="font-display text-[0.8rem] font-700 uppercase leading-tight tracking-[0.04em] text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-[0.72rem] leading-snug text-white/55">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* italic signature — visible on large screens where image is clear */}
        <p
          className="absolute right-10 bottom-16 hidden font-sans text-lg italic text-white/60 lg:block"
          style={{ lineHeight: 1.7 }}
        >
          Tu seguridad<br />en manos expertas
        </p>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="bg-[#f3f5fb] pt-7 pb-5 lg:pt-8 lg:pb-5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header row */}
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-600 uppercase tracking-[0.26em] text-primary">
              Nuestros Servicios
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-700 leading-[1.1] tracking-[-0.022em] text-gray-900 sm:text-[2.3rem]">
              SEGURIDAD PARA{' '}
              <span className="text-primary-bright">CADA NECESIDAD</span>
            </h2>
          </div>
          <div className="max-w-sm shrink-0 sm:pt-1">
            <p className="text-sm leading-relaxed text-gray-500">
              Instalamos, automatizamos y mantenemos sistemas de seguridad
              diseñados para proteger lo que más te importa.
            </p>
            <a
              href="#servicios"
              className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.78rem] font-700 uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-bright"
            >
              Ver todos los servicios
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = serviceIcons[i]
            return (
              <Reveal as="article" key={s.slug} delay={i * 90}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group relative block h-[330px] overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl sm:h-[300px]"
                >
                  <img
                    src={s.image}
                    alt={s.short}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* dark overlay grows with the text block so copy always stays legible */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 bg-gradient-to-t from-[#070d18] from-[55%] via-[#070d18]/90 via-[75%] to-transparent p-5 pt-20">
                    <div className="flex-1">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-bright backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-display text-[1.05rem] font-700 uppercase leading-tight tracking-[0.01em] text-white">
                        {s.short.toUpperCase()}
                      </h3>
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-white/65">{s.home}</p>
                    </div>

                    {/* circle arrow */}
                    <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-bright/70 text-primary-bright transition-colors group-hover:bg-primary-bright group-hover:text-white">
                      <IconArrow className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const items = [
    { Icon: IconWrench, title: 'Instalación Profesional', desc: 'Trabajos realizados en terreno.' },
    { Icon: IconShield, title: 'Protección Perimetral', desc: 'Mayor seguridad para tu propiedad.' },
    { Icon: IconGear, title: 'Automatización', desc: 'Comodidad y control en tus accesos.' },
    { Icon: IconHeadset, title: 'Mantención y Soporte', desc: 'Te acompañamos después de la instalación.' },
  ]
  return (
    <section className="bg-[#f3f5fb] pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-y-6 rounded-2xl bg-[#070d18] px-6 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/10 lg:px-8">
          {items.map(({ Icon, title, desc }, i) => (
            <div key={title} className={`flex gap-3.5 ${i === 0 ? 'lg:pr-6' : 'lg:px-6'}`}>
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary-bright">
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="font-display text-[0.82rem] font-700 uppercase leading-tight tracking-[0.04em] text-white">
                  {title}
                </p>
                <p className="mt-1 text-[0.74rem] leading-snug text-white/50">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
