# Pro Security Systems

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

> Sitio web corporativo de una empresa de seguridad: cercos eléctricos, portones automáticos, cámaras, control de acceso y citofonía.

**Sitio en vivo:** [pro-security-systems.vercel.app/](https://pro-security-systems.vercel.app/)

## Sobre el proyecto

Sitio de presentación para una empresa de seguridad dirigida a hogares, condominios y empresas. Su objetivo es explicar los servicios y captar solicitudes de cotización. Es un frontend estático, sin backend propio.

## Funcionalidades

- Inicio con presentación de la empresa y llamado final a cotizar
- Páginas de servicios generadas desde una plantilla única y datos en `src/data`
- Página Nosotros y página de Contacto
- Navegación con React Router y animaciones de aparición al hacer scroll
- Diseño responsive

## Stack

| Capa | Tecnología |
| --- | --- |
| Interfaz | React, TypeScript |
| Enrutamiento | React Router |
| Estilos | Tailwind CSS |
| Build | Vite |
| Hosting | Vercel (con rewrite SPA en `vercel.json`) |

## Estructura del proyecto

```text
src/
├── assets/       imágenes del sitio
├── components/   Navbar, Footer, FinalCTA, Reveal, iconos
├── data/         contenido de servicios
└── pages/        Home, Nosotros, Contacto, ServicioPage
docs/ia/          contexto y reglas para trabajar con IA
vercel.json       rewrite para rutas de la SPA
```

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # vista previa del build
npm run format    # formatea el código con Prettier
```

## Despliegue

El sitio se despliega en **Vercel**: cada push a la rama `main` genera un nuevo despliegue de producción.

## Documentación para trabajo con IA

El repositorio incluye el contexto que necesita un asistente de programación (o un nuevo desarrollador) para trabajar con criterio:

- [`AGENTS.md`](AGENTS.md): reglas y comandos para agentes de IA
- [`docs/ia/CONTEXTO.md`](docs/ia/CONTEXTO.md): objetivo, público y alcance del sitio
- [`docs/ia/REGLAS.md`](docs/ia/REGLAS.md): convenciones de código y de contenido
- [`docs/ia/DECISIONES.md`](docs/ia/DECISIONES.md): decisiones técnicas y su motivo
- [`docs/ia/ROADMAP.md`](docs/ia/ROADMAP.md): próximos pasos
- [`docs/ia/FLUJO-DE-TRABAJO.md`](docs/ia/FLUJO-DE-TRABAJO.md) y [`docs/ia/PROMPTS.md`](docs/ia/PROMPTS.md): flujo de trabajo con IA y plantillas de instrucciones

## Autor

**Mario Meléndez** — Estudiante de Ingeniería en Informática (Duoc UC) · Desarrollo web para pymes con **MM Digital Solutions**.
[Perfil de GitHub](https://github.com/Mario-Melendez-Inostroza)
