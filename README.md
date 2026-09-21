# Comunidad Scout-Guía San Pablo

Sitio web oficial de la Comunidad Scout-Guía San Pablo — Ramos Mejía, Buenos Aires.

## Stack

- **Vue 3** (Composition API) + **Vite**
- **Vue Router 4** — navegación SPA
- **Pinia** — estado global
- **GSAP** — animaciones (disponible para usar)

## Estructura de rutas

```
/                        Inicio comunidad
/nosotros/historia       Historia, hitos y galería

/scouts                  Inicio Scouts
/scouts/ramas            Grid de ramas
/scouts/ramas/:id        Detalle de rama
/scouts/uniforme         Uniforme scout
/scouts/promesa-y-ley    Promesa y Ley scout
/scouts/formularios      Formularios PDF scout

/guias                   Inicio Guías
/guias/ramas             Grid de ramas
/guias/ramas/:id         Detalle de rama
/guias/uniforme          Uniforme guía
/guias/promesa-y-ley     Promesa y Ley guía
/guias/formularios       Formularios PDF guía
/adultos           Adultos (Comité + Voluntarios)

/inscripciones     Redirección a preinscripción
```

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notas Windows

El `vite.config.js` incluye `usePolling: true` para hot-reload en Windows/WSL.
Para borrar `node_modules` usar PowerShell: `Remove-Item -Recurse -Force node_modules`

## Agregar PDFs

Colocar los archivos en `public/pdfs/`. Los nombres esperados son:

**Scouts:** `scouts-inscripcion.pdf`, `scouts-autorizacion.pdf`, `scouts-campamento.pdf`, `scouts-medica.pdf`, `scouts-imagen.pdf`

**Guías:** `guias-inscripcion.pdf`, `guias-autorizacion.pdf`, `guias-campamento.pdf`, `guias-medica.pdf`, `guias-imagen.pdf`

---

*Comunidad Scout-Guía San Pablo — Desde 1981*
