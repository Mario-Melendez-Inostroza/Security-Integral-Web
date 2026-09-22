import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IconBolt } from './icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(43,140,255,0.16), transparent)' }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:py-28">
        <span className="kicker">Contáctanos</span>
        <h2 className="mt-4 text-4xl font-700 leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          PROTEGE
          <br />
          <span className="text-primary-bright">TU PROPIEDAD</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
          Cuéntanos qué necesitas y te orientaremos con una solución adecuada
          para tu casa, condominio o empresa.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/contacto"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display text-sm font-700 uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-bright glow-blue"
          >
            <IconBolt className="h-4 w-4" />
            Solicitar Cotización
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
