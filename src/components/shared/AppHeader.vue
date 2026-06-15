<template>
  <header :class="['header', { 'header--scrolled': scrolled, 'header--open': appStore.menuOpen }]">
    <div class="header__inner container">
      <!-- Logo -->
      <RouterLink to="/" class="header__logo" @click="appStore.closeMenu">
        <div class="logo-mark">
          <span class="logo-mark__scout">S</span>
          <span class="logo-mark__divider">·</span>
          <span class="logo-mark__guia">G</span>
        </div>
        <div class="logo-text">
          <span class="logo-text__name">Comunidad</span>
          <span class="logo-text__sub">Scout-Guía San Pablo</span>
        </div>
      </RouterLink>

      <!-- Nav desktop -->
      <nav class="header__nav">
        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
        <RouterLink to="/nosotros" class="nav-link">Nosotros</RouterLink>
        <RouterLink to="/scouts" class="nav-link nav-link--scout">
          <span class="nav-link__dot nav-link__dot--scout"></span>
          Scouts
        </RouterLink>
        <RouterLink to="/guias" class="nav-link nav-link--guia">
          <span class="nav-link__dot nav-link__dot--guia"></span>
          Guías
        </RouterLink>
        <RouterLink to="/adultos" class="nav-link">Adultos</RouterLink>
        <RouterLink to="/inscripciones" class="nav-cta">
          Inscribirme
        </RouterLink>
      </nav>

      <!-- Hamburger -->
      <button class="header__hamburger" @click="appStore.toggleMenu" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="appStore.menuOpen" class="mobile-menu">
        <nav class="mobile-menu__nav">
          <RouterLink to="/" class="mobile-link" @click="appStore.closeMenu">Inicio</RouterLink>
          <RouterLink to="/nosotros" class="mobile-link" @click="appStore.closeMenu">Nosotros</RouterLink>
          <div class="mobile-link-group">
            <span class="mobile-link-group__label mobile-link-group__label--scout">Scouts de Argentina</span>
            <RouterLink to="/scouts" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Inicio Scout</RouterLink>
            <RouterLink to="/scouts/ramas" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Ramas</RouterLink>
            <RouterLink to="/scouts/uniforme" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Uniforme</RouterLink>
            <RouterLink to="/scouts/promesa-y-ley" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Promesa y Ley</RouterLink>
            <RouterLink to="/scouts/formularios" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Formularios</RouterLink>
          </div>
          <div class="mobile-link-group">
            <span class="mobile-link-group__label mobile-link-group__label--guia">Guías Argentinas</span>
            <RouterLink to="/guias" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Inicio Guías</RouterLink>
            <RouterLink to="/guias/ramas" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Ramas</RouterLink>
            <RouterLink to="/guias/uniforme" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Uniforme</RouterLink>
            <RouterLink to="/guias/promesa-y-ley" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Promesa y Ley</RouterLink>
            <RouterLink to="/guias/formularios" class="mobile-link mobile-link--indent" @click="appStore.closeMenu">Formularios</RouterLink>
          </div>
          <RouterLink to="/guias/adultos" class="mobile-link" @click="appStore.closeMenu">Adultos</RouterLink>
          <RouterLink to="/guias/inscripciones" class="mobile-cta" @click="appStore.closeMenu">Inscribirme →</RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/appStore.js'

const appStore = useAppStore()
const scrolled = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--transition-normal), backdrop-filter var(--transition-normal);
}

.header--scrolled {
  background: rgba(15, 14, 26, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(232, 197, 71, 0.1);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-mark {
  display: flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1;
  border: 2px solid var(--color-accent-gold);
  border-radius: 8px;
  padding: 4px 10px;
}

.logo-mark__scout { color: var(--color-scout-light); }
.logo-mark__divider { color: var(--color-accent-gold); margin: 0 2px; }
.logo-mark__guia { color: var(--color-guia-light); }

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text__name {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-white);
}

.logo-text__sub {
  font-size: 0.7rem;
  color: var(--color-white-dim);
  letter-spacing: 0.03em;
}

/* Nav */
.header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white-dim);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-white);
  background: rgba(255,255,255,0.07);
}

.nav-link--scout:hover,
.nav-link--scout.router-link-active {
  color: var(--color-scout-yellow);
  background: rgba(27, 77, 142, 0.2);
}

.nav-link--guia:hover,
.nav-link--guia.router-link-active {
  color: var(--color-guia-accent);
  background: rgba(106, 27, 154, 0.2);
}

.nav-link__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.nav-link__dot--scout { background: var(--color-scout-light); }
.nav-link__dot--guia  { background: var(--color-guia-light); }

.nav-cta {
  padding: 8px 20px;
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.nav-cta:hover {
  background: #f0d060;
  transform: translateY(-1px);
}

/* Hamburger */
.header__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.header__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform var(--transition-normal);
}

/* Mobile menu */
.mobile-menu {
  background: rgba(15, 14, 26, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 24px 0 32px;
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 24px;
}

.mobile-link {
  display: block;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-white-dim);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), background var(--transition-fast);
}

.mobile-link:hover,
.mobile-link.router-link-active { color: var(--color-white); background: rgba(255,255,255,0.06); }

.mobile-link--indent { padding-left: 32px; font-size: 0.9rem; }

.mobile-link-group { margin: 8px 0; }

.mobile-link-group__label {
  display: block;
  padding: 6px 16px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.mobile-link-group__label--scout { color: var(--color-scout-yellow); }
.mobile-link-group__label--guia  { color: var(--color-guia-accent); }

.mobile-cta {
  display: block;
  margin-top: 16px;
  padding: 14px 20px;
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-radius: var(--radius-md);
  font-weight: 700;
  text-align: center;
}

/* Transitions */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Responsive */
@media (max-width: 900px) {
  .header__nav { display: none; }
  .header__hamburger { display: flex; }
  .logo-text { display: none; }
}
</style>
