import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    // ── COMUNIDAD ──────────────────────────────────────────
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { theme: 'community', title: 'Inicio' }
    },
    {
      path: '/nosotros',
      component: () => import('@/views/NosotrosView.vue'),
      meta: { theme: 'community', title: 'Nosotros' },
      children: [
        { path: '', name: 'nosotros', redirect: '/nosotros/historia' },
        { path: 'historia',     name: 'historia',     component: () => import('@/views/nosotros/HistoriaView.vue') },
        { path: 'hall-of-fame', name: 'hall-of-fame', component: () => import('@/views/nosotros/HallOfFameView.vue') }
      ]
    },

    // ── SCOUTS ─────────────────────────────────────────────
    {
      path: '/scouts',
      component: () => import('@/views/scouts/ScoutsLayout.vue'),
      meta: { theme: 'scout' },
      children: [
        { path: '',               name: 'scouts',            component: () => import('@/views/scouts/ScoutsHomeView.vue'),       meta: { title: 'Scouts' } },
        { path: 'ramas',          name: 'scouts-ramas',      component: () => import('@/views/scouts/ScoutsRamasView.vue'),      meta: { title: 'Ramas Scout' } },
        { path: 'ramas/:id',      name: 'scouts-rama',       component: () => import('@/views/scouts/ScoutsRamaDetalleView.vue'),meta: { title: 'Rama' } },
        { path: 'uniforme',       name: 'scouts-uniforme',   component: () => import('@/views/scouts/ScoutsUniformeView.vue'),   meta: { title: 'Uniforme Scout' } },
        { path: 'promesa-y-ley',  name: 'scouts-promesa',    component: () => import('@/views/scouts/ScoutsPromesaView.vue'),    meta: { title: 'Promesa y Ley Scout' } },
        { path: 'formularios',    name: 'scouts-formularios',component: () => import('@/views/scouts/ScoutsFormulariosView.vue'),meta: { title: 'Formularios Scout' } }
      ]
    },

    // ── GUÍAS ──────────────────────────────────────────────
    {
      path: '/guias',
      component: () => import('@/views/guias/GuiasLayout.vue'),
      meta: { theme: 'guia' },
      children: [
        { path: '',               name: 'guias',            component: () => import('@/views/guias/GuiasHomeView.vue'),        meta: { title: 'Guías' } },
        { path: 'ramas',          name: 'guias-ramas',      component: () => import('@/views/guias/GuiasRamasView.vue'),       meta: { title: 'Ramas Guía' } },
        { path: 'ramas/:id',      name: 'guias-rama',       component: () => import('@/views/guias/GuiasRamaDetalleView.vue'), meta: { title: 'Rama' } },
        { path: 'uniforme',       name: 'guias-uniforme',   component: () => import('@/views/guias/GuiasUniformeView.vue'),    meta: { title: 'Uniforme Guía' } },
        { path: 'promesa-y-ley',  name: 'guias-promesa',    component: () => import('@/views/guias/GuiasPromesaView.vue'),     meta: { title: 'Promesa y Ley Guía' } },
        { path: 'formularios',    name: 'guias-formularios',component: () => import('@/views/guias/GuiasFormulariosView.vue'), meta: { title: 'Formularios Guía' } },
        
      ]
    },
    // ── INSCRIPCIONES ─────────────────────────────────────
        { path: '/adultos',        name: 'adultos',          component: () => import('@/views/AdultosView.vue'),          meta: { title: 'Adultos' } },
        { path: '/inscripciones',  name: 'inscripciones',    component: () => import('@/views/InscripcionesView.vue'),    meta: { title: 'Inscripciones' } },
  
    // ── 404 ────────────────────────────────────────────────
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

// Actualizar título de pestaña
router.afterEach((to) => {
  const title = to.meta?.title
  document.title = title
    ? `${title} — Comunidad Scout-Guía San Pablo`
    : 'Comunidad Scout-Guía San Pablo'
})

export default router
