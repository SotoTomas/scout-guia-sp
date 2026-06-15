# Comunidad Scout-Guía San Pablo — Documentación del Proyecto

## Descripción General

Sitio web oficial de la **Comunidad Scout-Guía San Pablo**, un espacio compartido entre dos movimientos distintos:

- 🔵 **Scouts de Argentina (SAdeA)**
- 🟣 **Asociación Guías Argentinas (AGA)**

El sitio refleja esta dualidad: una identidad compartida como comunidad, con secciones diferenciadas por movimiento, unificadas bajo una navegación y home común.

---

## Stack Tecnológico

| Herramienta | Versión | Uso |
|---|---|---|
| Vue.js | 3.x (Composition API) | Framework principal |
| Vue Router | 4.x | Navegación SPA |
| Pinia | 2.x | Estado global |
| Vite | 5.x | Build tool |
| GSAP | 3.x | Animaciones |

---

## Arquitectura del Proyecto

```
scout-guia-sp/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── logos/
│       ├── videos/
│       └── pdfs/
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── appStore.js
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css
│   │       └── global.css
│   ├── components/
│   │   ├── shared/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── BranchCard.vue
│   │   ├── home/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AssociationsSection.vue
│   │   │   ├── BranchesSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── nosotros/
│   │   │   ├── HistoriaSection.vue
│   │   │   ├── HitosSection.vue
│   │   │   ├── GaleriaSection.vue
│   │   │   └── HallOfFame.vue
│   │   ├── scouts/
│   │   │   └── ScoutBranchGrid.vue
│   │   └── guias/
│   │       └── GuiaBranchGrid.vue
│   └── views/
│       ├── HomeView.vue
│       ├── NosotrosView.vue
│       ├── scouts/
│       │   ├── ScoutsHomeView.vue
│       │   ├── ScoutsUniformeView.vue
│       │   ├── ScoutsRamasView.vue
│       │   ├── ScoutsRamaDetalleView.vue
│       │   ├── ScoutsPromesaView.vue
│       │   └── ScoutsFormulariosView.vue
│       └── guias/
│           ├── GuiasHomeView.vue
│           ├── GuiasUniformeView.vue
│           ├── GuiasRamasView.vue
│           ├── GuiasRamaDetalleView.vue
│           ├── GuiasPromesaView.vue
│           ├── GuiasFormulariosView.vue
│           └── AdultosView.vue
```

---

## Estructura de Rutas

```
/                          → HomeView (Comunidad)
/nosotros                  → NosotrosView
  /nosotros/historia       → Historia + Hitos + Galería
  /nosotros/hall-of-fame   → Miembros Históricos

/scouts                    → ScoutsHomeView
  /scouts/ramas            → ScoutsRamasView (grid)
  /scouts/ramas/:id        → ScoutsRamaDetalleView
  /scouts/uniforme         → ScoutsUniformeView
  /scouts/promesa-y-ley    → ScoutsPromesaView
  /scouts/formularios      → ScoutsFormulariosView

/guias                     → GuiasHomeView
  /guias/ramas             → GuiasRamasView (grid)
  /guias/ramas/:id         → GuiasRamaDetalleView
  /guias/uniforme          → GuiasUniformeView
  /guias/promesa-y-ley     → GuiasPromesaView
  /guias/formularios       → GuiasFormulariosView
  /guias/adultos           → AdultosView
  /guias/inscripciones     → InscripcionesView
```

---

## Ramas por Movimiento

### Scouts de Argentina
| Rama | Edad | Color |
|---|---|---|
| Manada | 7–10 años | Amarillo |
| Unidad Scout | 11–14 años | Verde |
| Caminantes | 15–17 años | Rojo |
| Rovers | 18–21 años | Azul |

### Asociación Guías Argentinas
| Rama | Edad | Color |
|---|---|---|
| Pimpollitos | 6–8 años | Rosado |
| Alitas | 9–11 años | Celeste |
| Caravanas | 12–14 años | Naranja |
| Guías del Sol | 15–17 años | Amarillo |
| Guías Mayores | 18+ años | Violeta |

---

## Paleta de Colores

### Comunidad (compartida)
```css
--color-community-dark:   #1a1a2e;
--color-community-accent: #e8c547;
--color-white:            #f5f0e8;
```

### Scouts de Argentina
```css
--color-scout-primary:   #1b4d8e;  /* Azul SAdeA */
--color-scout-secondary: #2e7d32;  /* Verde */
--color-scout-accent:    #fbc02d;  /* Amarillo */
```

### Guías Argentinas
```css
--color-guia-primary:    #7b1fa2;  /* Violeta AGA */
--color-guia-secondary:  #c2185b;  /* Rosa */
--color-guia-accent:     #f06292;  /* Rosa claro */
```

---

## Desafíos de Diseño

1. **Dualidad visual**: El sitio debe sentirse unificado como "Comunidad" pero diferenciar claramente cuando el usuario navega a Scouts o Guías. Se logra mediante:
   - Header con logo de comunidad + navegación con indicadores de color por sección
   - Cambio de tema (CSS variables) al ingresar a `/scouts` o `/guias`
   - Footer siempre compartido

2. **Pañuelos como símbolo**: Las ilustraciones de pañuelos scout/guía son el elemento visual diferenciador entre secciones.

3. **Responsive first**: El público incluye familias y jóvenes, principalmente mobile.

---

## Setup del Proyecto

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/scout-guia-sp.git
cd scout-guia-sp

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## Contribuciones

Las contribuciones al contenido (fotos, PDFs, textos) deben seguir la estructura de carpetas `/public/assets/`. Para cambios de código, crear un branch por feature y hacer PR al `main`.

---

*Comunidad Scout-Guía San Pablo — Desde 1981*
