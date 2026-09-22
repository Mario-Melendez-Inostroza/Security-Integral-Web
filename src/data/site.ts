import cerco1 from '../assets/cerco-1.jpeg'
import cerco2 from '../assets/cerco-2.jpeg'
import portonMotor from '../assets/porton-motor.jpeg'
import camaraPtz from '../assets/camara-ptz.jpeg'
import tecnico from '../assets/tecnico.jpeg'
import cabinet from '../assets/cabinet.jpeg'
import heroAccess from '../assets/hero-access-control.jpeg'
import fondoHero from '../assets/fondo-hero.2.0.png'
import cercoChatgpt from '../assets/cerco-chatgpt.png'
import portonChatgpt from '../assets/porton-chatgpt.png'
import camaraChatgpt from '../assets/camara-chatgpt.png'

export const CONTACT = {
  phone1: '+56 9 7250 3589',
  phone1Href: 'tel:+56972503589',
  phone2: '+56 9 6648 3284',
  phone2Href: 'tel:+56966483284',
  whatsapp: 'https://wa.me/56972503589',
  email: 'contacto@prosecuritysistems.cl',
  web: 'www.prosecuritysistems.cl',
  country: 'Chile',
}

export const IMAGES = {
  cerco1,
  cerco2,
  portonMotor,
  camaraPtz,
  tecnico,
  cabinet,
  heroAccess,
  fondoHero,
  cercoChatgpt,
  portonChatgpt,
  camaraChatgpt,
}

export type Service = {
  slug: string
  short: string
  title: string
  tagline: string
  home: string
  image: string
  gallery: { src: string; caption: string }[]
  items: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'cercos-electricos',
    short: 'Cercos Eléctricos',
    title: 'CERCOS ELÉCTRICOS',
    tagline: 'Protección perimetral activa que disuade, detecta y alerta ante cualquier intento de intrusión.',
    home: 'Instalación de cercos eléctricos y soluciones de protección perimetral para casas, condominios y predios.',
    image: cercoChatgpt,
    gallery: [
      { src: cerco1, caption: 'Cerco eléctrico sobre reja perimetral' },
      { src: cerco2, caption: 'Instalación de doble línea en portón de acceso' },
    ],
    items: [
      'Instalación de cerco eléctrico',
      'Cercos perimetrales para casas',
      'Cercos perimetrales para condominios',
      'Cercos agrícolas',
      'Cercos perimetrales solares',
      'Rayos perimetrales',
    ],
  },
  {
    slug: 'portones-electricos',
    short: 'Portones Eléctricos',
    title: 'PORTONES ELÉCTRICOS',
    tagline: 'Automatización, mantención y reparación de portones para un acceso seguro y sin esfuerzo.',
    home: 'Automatización, instalación, reparación y mantención de portones batientes y correderas.',
    image: portonChatgpt,
    gallery: [
      { src: portonMotor, caption: 'Motor corredera instalado en acceso vehicular' },
      { src: heroAccess, caption: 'Control de acceso vehicular con barrera automática' },
    ],
    items: [
      'Instalación de motores para portones batientes',
      'Instalación de motores para portones correderas',
      'Cambio de ruedas',
      'Cambio de quicios',
      'Cambio de guías',
      'Reparación de portones',
      'Automatización de portones',
    ],
  },
  {
    slug: 'camaras-control-acceso-citofonia',
    short: 'Cámaras, Control de Acceso y Citofonía',
    title: 'CÁMARAS, CONTROL DE ACCESO Y CITOFONÍA',
    tagline: 'Vigilancia, control de accesos y comunicación integrados en un solo sistema confiable.',
    home: 'Instalación de cámaras de seguridad, sistemas de control de acceso y citofonía para una mayor protección y control.',
    image: camaraChatgpt,
    gallery: [
      { src: camaraPtz, caption: 'Cámara PTZ de largo alcance sobre poste' },
      { src: tecnico, caption: 'Instalación de equipos por técnico especializado' },
      { src: cabinet, caption: 'Gabinete de energía y respaldo para sistema de cámaras' },
    ],
    items: [
      'Cámaras de seguridad',
      'Control de acceso',
      'Citofonía',
      'Instalaciones de seguridad',
    ],
  },
]
