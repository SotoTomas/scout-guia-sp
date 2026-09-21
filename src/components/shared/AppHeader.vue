<template>
  <header :class="['header', { 'header--scrolled': scrolled, 'header--open': appStore.menuOpen }]">
    <div class="header__inner container">
      <RouterLink to="/" class="header__logo" aria-label="Comunidad Scout-Guía San Pablo, inicio" @click="appStore.closeMenu">
        <img src="@/assets/brand/community.webp" alt="" width="43" height="48" class="header__mark" />
        <span class="header__wordmark">
          <span class="header__name">San Pablo<span class="header__brand-dot">.</span></span>
          <span class="header__descriptor">Comunidad Scout-Guía</span>
        </span>
      </RouterLink>

      <nav class="header__nav" aria-label="Navegación principal">
        <RouterLink v-for="item in primaryLinks" :key="item.to" :to="item.to" class="nav-link">
          <span v-if="item.movement" :class="['nav-link__dot', `nav-link__dot--${item.movement}`]" aria-hidden="true"></span>
          {{ item.label }}
        </RouterLink>
        <a href="https://www.gruposanpablo.com.ar/preinscripcion" target="_blank" rel="noreferrer" class="nav-cta">
          Inscribirme
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>
      </nav>

      <button
        ref="menuTrigger"
        class="header__hamburger"
        type="button"
        :aria-expanded="appStore.menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="appStore.menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        @click="appStore.toggleMenu"
      >
        <span></span><span></span>
      </button>
    </div>

    <Transition name="mobile-menu" @after-leave="restoreFocus">
      <div v-if="appStore.menuOpen" class="mobile-menu" @click.self="appStore.closeMenu">
        <section id="mobile-navigation" ref="menuPanel" class="mobile-menu__panel" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" tabindex="-1">
          <div class="mobile-menu__heading">
            <span id="mobile-menu-title" class="eyebrow">Exploremos juntos</span>
            <button type="button" class="mobile-menu__close" aria-label="Cerrar menú de navegación" @click="appStore.closeMenu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <nav class="mobile-menu__nav" aria-label="Navegación móvil">
            <RouterLink to="/" class="mobile-link" @click="appStore.closeMenu">Inicio <span aria-hidden="true">↗</span></RouterLink>
            <RouterLink to="/nosotros" class="mobile-link" @click="appStore.closeMenu">Nosotros <span aria-hidden="true">↗</span></RouterLink>
            <div v-for="group in movementLinks" :key="group.path" class="mobile-link-group">
              <RouterLink :to="group.path" class="mobile-link mobile-link--movement" @click="appStore.closeMenu">
                {{ group.label }} <span aria-hidden="true">↗</span>
              </RouterLink>
              <div class="mobile-link-group__links">
                <RouterLink v-for="item in secondaryLinks" :key="item.path" :to="`${group.path}/${item.path}`" class="mobile-sublink" @click="appStore.closeMenu">{{ item.label }}</RouterLink>
              </div>
            </div>
            <RouterLink to="/adultos" class="mobile-link" @click="appStore.closeMenu">Adultos <span aria-hidden="true">↗</span></RouterLink>
            <a href="https://www.gruposanpablo.com.ar/preinscripcion" target="_blank" rel="noreferrer" class="btn btn-primary mobile-cta" @click="appStore.closeMenu">Quiero ser parte <span aria-hidden="true">→</span></a>
          </nav>
          <p class="mobile-menu__note">Desde 1981, creciendo en comunidad.</p>
        </section>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore.js'

const appStore = useAppStore()
const route = useRoute()
const scrolled = ref(false)
const menuTrigger = ref(null)
const menuPanel = ref(null)
const primaryLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/scouts', label: 'Scouts', movement: 'scout' },
  { to: '/guias', label: 'Guías', movement: 'guia' },
  { to: '/adultos', label: 'Adultos' }
]
const movementLinks = [
  { path: '/scouts', label: 'Scouts de Argentina' },
  { path: '/guias', label: 'Guías Argentinas' }
]
const secondaryLinks = [
  { path: 'ramas', label: 'Ramas' },
  { path: 'uniforme', label: 'Uniforme' },
  { path: 'promesa-y-ley', label: 'Promesa y Ley' },
  { path: 'formularios', label: 'Formularios' }
]

let desktopQuery
let bodyOverflow = ''
let bodyPadding = ''
let scrollLocked = false

function onScroll() { scrolled.value = window.scrollY > 24 }
function closeAtDesktop(event) { if (event.matches) appStore.closeMenu() }
function restoreFocus() {
  if (!desktopQuery?.matches) menuTrigger.value?.focus({ preventScroll: true })
}

function lockScroll() {
  if (scrollLocked) return
  bodyOverflow = document.body.style.overflow
  bodyPadding = document.body.style.paddingRight
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  if (scrollbarWidth > 0) {
    const currentPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0
    document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`
  }
  document.body.style.overflow = 'hidden'
  scrollLocked = true
}

function unlockScroll() {
  if (!scrollLocked) return
  document.body.style.overflow = bodyOverflow
  document.body.style.paddingRight = bodyPadding
  scrollLocked = false
}

// Keep keyboard navigation inside the open dialog and always provide an escape.
function onMenuKeydown(event) {
  if (!appStore.menuOpen) return
  if (event.key === 'Escape') {
    event.preventDefault()
    appStore.closeMenu()
    return
  }
  if (event.key !== 'Tab' || !menuPanel.value) return
  const focusable = [...menuPanel.value.querySelectorAll('a[href], button:not([disabled])')]
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement
  if (event.shiftKey && (active === first || !menuPanel.value.contains(active))) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && (active === last || !menuPanel.value.contains(active))) {
    event.preventDefault()
    first?.focus()
  }
}

watch(() => appStore.menuOpen, async (open) => {
  if (open) {
    lockScroll()
    await nextTick()
    if (appStore.menuOpen) menuPanel.value?.querySelector('button')?.focus({ preventScroll: true })
  } else {
    unlockScroll()
  }
})
watch(() => route.fullPath, () => appStore.closeMenu())

onMounted(() => {
  onScroll()
  desktopQuery = window.matchMedia('(min-width: 901px)')
  desktopQuery.addEventListener('change', closeAtDesktop)
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onMenuKeydown)
})
onUnmounted(() => {
  unlockScroll()
  desktopQuery?.removeEventListener('change', closeAtDesktop)
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onMenuKeydown)
})
</script>

<style scoped>
.header { position: fixed; inset: 0 0 auto; z-index: 100; background: rgba(247, 245, 239, .94); border-bottom: 1px solid var(--color-border); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); transition: box-shadow 220ms var(--ease-out); }
.header--scrolled { box-shadow: 0 1px 4px rgb(41 37 53 / 3%), 0 8px 28px rgb(41 37 53 / 5%); }
.header__inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; height: var(--header-height); }
.header__logo { display: inline-flex; align-items: center; gap: 11px; flex-shrink: 0; border-radius: 6px; }
.header__mark { width: 43px; height: 48px; object-fit: contain; }
.header__wordmark { display: flex; flex-direction: column; gap: 2px; }
.header__name { font-family: var(--font-display); font-size: 1.6rem; font-weight: 600; line-height: 1.05; letter-spacing: -.045em; color: #292535; }
.header__brand-dot { color: #8d70a3; }
.header__descriptor { color: var(--color-text-muted); font-size: .6rem; font-weight: 600; letter-spacing: .11em; text-transform: uppercase; }
.header__nav { display: flex; align-items: center; gap: 3px; }
.nav-link { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 42px; padding: 9px 13px; border-radius: 8px; color: var(--color-text-muted); font-size: .8rem; font-weight: 500; transition: color 180ms var(--ease-out), background-color 180ms var(--ease-out); }
.nav-link:hover, .nav-link.router-link-active { color: #5a3f7b; background: rgb(90 63 123 / 6%); }
.nav-link__dot { width: 5px; height: 5px; border-radius: 50%; }
.nav-link__dot--scout { background: #246c4b; }
.nav-link__dot--guia { background: #765495; }
.nav-cta { display: inline-flex; align-items: center; justify-content: center; gap: 15px; min-height: 42px; padding: 11px 19px; margin-left: 14px; border-radius: 8px; background: #5a3f7b; color: #fff; font-size: .8rem; font-weight: 600; box-shadow: 0 2px 3px rgb(55 32 80 / 8%), 0 4px 12px rgb(55 32 80 / 8%); transition: background-color 180ms var(--ease-out), transform 180ms var(--ease-out); }
.nav-cta:hover { background: #493266; transform: translateY(-2px); }
.nav-cta:active { transform: translateY(0) scale(.98); }
.header__hamburger { display: none; width: 44px; height: 44px; align-items: center; justify-content: center; flex-direction: column; gap: 6px; color: #292535; border: 1px solid var(--color-border); border-radius: 10px; background: transparent; }
.header__hamburger span { display: block; width: 19px; height: 1.5px; background: currentColor; transition: transform 220ms var(--ease-out); }
.header--open .header__hamburger span:first-child { transform: translateY(3.75px) rotate(45deg); }
.header--open .header__hamburger span:last-child { transform: translateY(-3.75px) rotate(-45deg); }
.mobile-menu { position: fixed; inset: var(--header-height) 0 0; height: calc(100dvh - var(--header-height)); background: rgb(41 37 53 / 32%); }
.mobile-menu__panel { width: min(100%, 440px); height: 100%; margin-left: auto; padding: 20px 26px 28px; overflow-y: auto; overscroll-behavior: contain; background: var(--color-paper, #f7f5ef); box-shadow: -12px 12px 40px rgb(41 37 53 / 8%); }
.mobile-menu__heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
.mobile-menu__heading .eyebrow { color: #5a3f7b; font-size: .65rem; }
.mobile-menu__close { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; color: #5a3f7b; }
.mobile-menu__close:hover { background: rgb(90 63 123 / 6%); }
.mobile-menu__nav { display: flex; flex-direction: column; }
.mobile-link { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 50px; padding: 12px 0; font-family: var(--font-display); font-size: 1.45rem; color: var(--color-text); border-bottom: 1px solid var(--color-border); }
.mobile-link span { color: #80698f; font-family: var(--font-body); font-size: 1rem; }
.mobile-link:hover, .mobile-link.router-link-active { color: #5a3f7b; }
.mobile-link--movement { padding-bottom: 4px; border-bottom: 0; font-size: 1.3rem; }
.mobile-link-group { padding-bottom: 12px; border-bottom: 1px solid var(--color-border); }
.mobile-link-group__links { display: grid; grid-template-columns: 1fr 1fr; gap: 0 12px; }
.mobile-sublink { display: flex; align-items: center; min-height: 44px; color: var(--color-text-muted); font-size: .8rem; }
.mobile-sublink:hover, .mobile-sublink.router-link-active { color: #5a3f7b; text-decoration: underline; text-underline-offset: 4px; }
.mobile-cta { justify-content: space-between; margin-top: 24px; }
.mobile-menu__note { margin-top: 22px; color: var(--color-text-muted); font-size: .72rem; }
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 260ms var(--ease-out); }
.mobile-menu-enter-active .mobile-menu__panel, .mobile-menu-leave-active .mobile-menu__panel { transition: transform 260ms var(--ease-out); }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; }
.mobile-menu-enter-from .mobile-menu__panel, .mobile-menu-leave-to .mobile-menu__panel { transform: translateX(28px); }
@media (max-width: 900px) {
  .header__nav { display: none; }
  .header__hamburger { display: flex; }
  .header__mark { width: 38px; height: 43px; }
  .header__name { font-size: 1.45rem; }
  .header__descriptor { font-size: .54rem; }
}
@media (min-width: 901px) { .mobile-menu { display: none; } }
</style>
