import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { IMAGES, SERVICES } from '../data/site'
import { IconArrow, IconBolt, IconCamera, IconFence, IconGate } from '../components/icons'

const pillars = [
  {
    Icon: IconFence,
    title: 'Protección perimetral',
    text: 'Cercos eléctricos y soluciones de perímetro que resguardan el límite de tu propiedad.',
  },
  {
    Icon: IconGate,
    title: 'Automatización de accesos',
    text: 'Instalación, reparación y automatización de portones para un ingreso seguro.',
  },
  {
    Icon: IconCamera,
    title: 'Videovigilancia y control',
    text: 'Cámaras, control de acceso y citofonía para monitorear y gestionar tus ingresos.',
  },
]

export default function Nosotros() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-80 w-[40rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(43,140,255,0.14), transparent)' }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 lg:px-8">
          <Reveal>
            <span className="kicker">Nosotros</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-700 leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
              EXPERTOS EN
              <br />
              <span className="text-primary-bright">SEGURIDAD Y AUTOMATIZACIÓN</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Pro Security Systems es una empresa dedicada a la instalación de
              sistemas de seguridad, protección perimetral y automatización de
              accesos. Trabajamos con hogares, condominios y empresas que buscan
              proteger lo que más les importa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* intro + image */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <img
                src={IMAGES.tecnico}
                alt="Técnico de Pro Security Systems instalando un equipo de seguridad en terreno"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-5 hidden rounded-xl border border-primary/30 bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:block">
              <p className="text-xs font-700 uppercase tracking-widest text-primary">Nuestro sello</p>
              <p className="mt-1 font-display text-lg font-700 text-gray-900">Seguridad que te protege</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="text-xs font-700 uppercase tracking-widest text-primary">Nuestro enfoque</span>
            <h2 className="mt-3 text-3xl font-700 text-gray-900 sm:text-4xl">
              COMPROMETIDOS CON TU TRANQUILIDAD
            </h2>
            <div className="mt-5 space-y-4 text-gray-500">
              <p>
                Nos especializamos en soluciones de seguridad que integran tecnología
                moderna con instalaciones físicas ejecutadas de forma profesional. Cada
                proyecto se aborda en terreno, con foco en la calidad y la durabilidad
                del trabajo.
              </p>
              <p>
                Acompañamos a nuestros clientes durante todo el proceso: desde la
                asesoría inicial y la instalación, hasta la mantención y el soporte de
                los equipos. Nuestro objetivo es entregar seguridad real y confiable.
              </p>
            </div>
            <Link
              to="/contacto"
              className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-700 uppercase tracking-wider text-primary"
            >
              Conversemos tu proyecto
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* pillars */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <span className="kicker">Lo que hacemos</span>
            <h2 className="mt-3 text-3xl font-700 text-foreground sm:text-4xl">
              TRES ÁREAS, UN MISMO ESTÁNDAR
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map(({ Icon, title, text }, i) => (
              <Reveal as="article" key={title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-primary/50">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary-bright">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-700 text-foreground">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 flex flex-wrap gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-5 py-2.5 text-sm font-600 text-foreground transition-colors hover:border-primary/60 hover:text-primary-bright"
              >
                <IconBolt className="h-3.5 w-3.5 text-primary-bright" />
                {s.short}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
