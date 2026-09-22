import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'
import { CONTACT, SERVICES } from '../data/site'
import { IconBolt, IconShield, IconWhatsapp } from '../components/icons'

const inputBase =
  'w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-primary/70 focus:ring-2 focus:ring-primary/20'

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: SERVICES[0].short,
    mensaje: '',
  })

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(43,140,255,0.13), transparent)' }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-36 lg:px-8">
          <Reveal>
            <span className="kicker">Contacto</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-700 leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
              SOLICITA TU
              <br />
              <span className="text-primary-bright">COTIZACIÓN</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Cuéntanos qué necesitas proteger y te asesoramos. Responde el formulario
              o escríbenos directamente por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        {/* contact info */}
        <Reveal className="flex flex-col gap-4">
          <ContactCard
            label="Teléfono / WhatsApp"
            value={CONTACT.phone1}
            href={CONTACT.phone1Href}
          />
          <ContactCard label="Teléfono" value={CONTACT.phone2} href={CONTACT.phone2Href} />
          <ContactCard label="Correo" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactCard label="Sitio web" value={CONTACT.web} />
          <ContactCard label="Cobertura" value={CONTACT.country} />

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 font-display text-sm font-700 uppercase tracking-wider text-[#04140a] transition-transform hover:-translate-y-0.5"
          >
            <IconWhatsapp className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>
        </Reveal>

        {/* form */}
        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary-bright glow-blue">
                  <IconShield className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-700 text-foreground">
                  ¡Solicitud enviada!
                </h2>
                <p className="mt-3 max-w-sm text-muted">
                  Gracias, {form.nombre || 'te contactaremos'}. Hemos recibido tu
                  solicitud sobre <span className="text-primary-bright">{form.servicio}</span> y
                  te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-md border border-border px-6 py-3 font-display text-sm font-700 uppercase tracking-wider text-foreground transition-colors hover:border-primary/60"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre">
                    <input
                      required
                      value={form.nombre}
                      onChange={update('nombre')}
                      placeholder="Tu nombre"
                      className={inputBase}
                    />
                  </Field>
                  <Field label="Teléfono">
                    <input
                      required
                      value={form.telefono}
                      onChange={update('telefono')}
                      placeholder="+56 9 ..."
                      className={inputBase}
                    />
                  </Field>
                </div>
                <Field label="Correo electrónico">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="tucorreo@ejemplo.cl"
                    className={inputBase}
                  />
                </Field>
                <Field label="Servicio de interés">
                  <select value={form.servicio} onChange={update('servicio')} className={inputBase}>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.short} className="bg-surface-2">
                        {s.short}
                      </option>
                    ))}
                    <option value="Otro" className="bg-surface-2">
                      Otro / No estoy seguro
                    </option>
                  </select>
                </Field>
                <Field label="Mensaje">
                  <textarea
                    required
                    value={form.mensaje}
                    onChange={update('mensaje')}
                    rows={5}
                    placeholder="Cuéntanos sobre tu propiedad y lo que necesitas proteger."
                    className={`${inputBase} resize-none`}
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm font-700 uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-bright glow-blue sm:w-auto"
                >
                  <IconBolt className="h-4 w-4" />
                  Solicitar Cotización
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </span>
      {children}
    </label>
  )
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <>
      <span className="font-mono text-xs uppercase tracking-widest text-primary-bright">
        {label}
      </span>
      <span className="mt-1 block font-display text-lg font-600 text-foreground">{value}</span>
    </>
  )
  const cls =
    'block rounded-xl border border-border bg-surface px-5 py-4 transition-colors'
  return href ? (
    <a href={href} className={`${cls} hover:border-primary/50`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}
