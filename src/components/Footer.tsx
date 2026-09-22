import { Link } from 'react-router-dom'
import { CONTACT, SERVICES } from '../data/site'
import { IconWhatsapp } from './icons'
import logo from '../assets/logo-psystems.png'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo}
            alt="Pro Security Systems"
            className="h-12 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Soluciones profesionales de seguridad, protección perimetral y automatización.
            Instalación, mantención y soporte técnico en {CONTACT.country}.
          </p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-500 text-primary-bright transition-colors hover:bg-primary/20"
          >
            <IconWhatsapp className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </div>

        <div>
          <h4 className="kicker">Soluciones</h4>
          <ul className="mt-4 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="kicker">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={CONTACT.phone1Href} className="text-muted transition-colors hover:text-foreground">
                {CONTACT.phone1}
              </a>
            </li>
            <li>
              <a href={CONTACT.phone2Href} className="text-muted transition-colors hover:text-foreground">
                {CONTACT.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-muted transition-colors hover:text-foreground">
                {CONTACT.email}
              </a>
            </li>
            <li className="text-muted">{CONTACT.web}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Pro Security Systems. Todos los derechos reservados.</span>
          <span className="font-mono tracking-wider">SEGURIDAD QUE TE PROTEGE</span>
        </div>
      </div>
    </footer>
  )
}
