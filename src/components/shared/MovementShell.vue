<template>
  <div class="movement-shell" :class="`movement-shell--${movement}`">
    <div class="movement-subnav">
      <div class="container movement-subnav__inner">
        <RouterLink :to="basePath" class="movement-subnav__brand">
          <span class="movement-subnav__dot" aria-hidden="true"></span>
          {{ label }}
        </RouterLink>
        <nav class="movement-subnav__links" :aria-label="`Secciones de ${label}`">
          <RouterLink
            v-for="link in links" :key="link.path"
            :to="`${basePath}${link.path}`"
            class="movement-subnav__link"
            :class="{ 'is-current': isCurrent(link.path) }"
            :aria-current="isCurrent(link.path) ? 'page' : undefined"
          >{{ link.label }}</RouterLink>
        </nav>
      </div>
    </div>
    <RouterView v-slot="{ Component, route: childRoute }">
      <Transition name="movement-view" mode="out-in">
        <component :is="Component" :key="childRoute.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({ movement: { type: String, required: true }, label: { type: String, required: true } })
const route = useRoute()
const basePath = computed(() => `/${props.movement}`)
const links = [
  { path: '', label: 'Inicio' }, { path: '/ramas', label: 'Ramas' },
  { path: '/uniforme', label: 'Uniforme' }, { path: '/promesa-y-ley', label: 'Promesa y Ley' },
  { path: '/formularios', label: 'Formularios' },
]

// Exact matching keeps “Inicio” from appearing selected on every child route.
function isCurrent(path) {
  return path ? route.path.startsWith(`${basePath.value}${path}`) : route.path === basePath.value
}
</script>

<style scoped>
.movement-shell { --movement-color: var(--color-scout-primary); --movement-brand: var(--color-scout-brand); --movement-tint: #eaf5fc; padding-top: var(--header-height, 80px); }
.movement-shell--guias { --movement-color: var(--color-guia-primary); --movement-brand: var(--color-guia-rose); --movement-tint: var(--color-guia-tint); }
.movement-subnav { position: sticky; top: var(--header-height, 80px); z-index: 30; border-bottom: 1px solid var(--color-border); background: rgba(247,245,239,.96); }
.movement-subnav__inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 66px; }
.movement-subnav__brand { display: inline-flex; align-items: center; gap: 10px; flex-shrink: 0; color: var(--movement-color); font-size: .75rem; font-weight: 700; letter-spacing: .06em; }
.movement-subnav__dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 4px var(--movement-tint); }
.movement-subnav__links { display: flex; gap: 3px; min-width: 0; padding: 8px 0; overflow-x: auto; scrollbar-width: thin; }
.movement-subnav__link { display: inline-flex; align-items: center; min-height: 44px; flex-shrink: 0; padding: 9px 13px; border-radius: 7px; font-size: .8rem; font-weight: 600; color: var(--color-text-muted); transition: background-color 180ms var(--ease-out), color 180ms var(--ease-out); }
.movement-subnav__link:hover, .movement-subnav__link.is-current { color: var(--movement-color); background: var(--movement-tint); }
.movement-view-enter-active, .movement-view-leave-active { transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out); }
.movement-view-enter-from { opacity: 0; transform: translateY(8px); }
.movement-view-leave-to { opacity: 0; transform: translateY(-4px); }

/* One shared editorial system for both movements; institutional content stays in each view. */
.movement-shell :deep(.movement-page > .section) { padding-block: clamp(44px, 7vw, 88px); }
.movement-shell :deep(.movement-intro) { max-width: 800px; margin-bottom: clamp(32px, 5vw, 56px); }
.movement-shell :deep(.movement-intro .tag) { margin-bottom: 18px; background: var(--movement-tint); color: var(--movement-color); }
.movement-shell :deep(.movement-intro h1) { font-size: clamp(2.5rem, 5.5vw, 4.7rem); letter-spacing: -.045em; }
.movement-shell :deep(.movement-intro em) { font-style: italic; color: var(--movement-color); }
.movement-shell :deep(.movement-intro .section-subtitle) { margin-top: 18px; max-width: 650px; }
.movement-shell :deep(.ramas-grid) { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr)); gap: 20px; }
.movement-shell :deep(.movement-section) { margin-top: clamp(56px, 8vw, 96px); }
.movement-shell :deep(.movement-section__heading) { display: flex; align-items: end; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 28px; }
.movement-shell :deep(.movement-section__heading h2) { font-size: clamp(2rem, 3.8vw, 3rem); letter-spacing: -.035em; }
.movement-shell :deep(.movement-section__heading .eyebrow) { display: block; color: var(--movement-color); margin-bottom: 10px; }
.movement-shell :deep(.movement-text-link) { display: inline-flex; align-items: center; gap: 12px; color: var(--movement-color); font-size: .88rem; font-weight: 700; }
.movement-shell :deep(.movement-text-link:hover) { text-decoration: underline; text-underline-offset: 5px; }
.movement-shell :deep(.valores-grid) { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.movement-shell :deep(.valor-card) { padding: 28px 24px; border-top: 1px solid var(--color-border); }
.movement-shell :deep(.valor-card__icon) { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; margin-bottom: 22px; border-radius: 50%; background: var(--movement-tint); font-size: 1.35rem; }
.movement-shell :deep(.valor-card__title) { margin-bottom: 12px; font-family: var(--font-display); font-size: 1.3rem; }
.movement-shell :deep(.valor-card__text) { font-size: .9rem; color: var(--color-text-muted); line-height: 1.75; }
.movement-shell :deep(.ley-list) { list-style: none; padding: 0; margin: 0; }
.movement-shell :deep(.ley-list li) { display: flex; gap: 16px; align-items: flex-start; padding: 17px 0; border-bottom: 1px solid var(--color-border); color: var(--color-text-muted); font-size: .93rem; line-height: 1.65; }
.movement-shell :deep(.ley-list__num), .movement-shell :deep(.ley-num) { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; min-width: 27px; height: 27px; border-radius: 50%; color: var(--movement-color); background: var(--movement-tint); font-size: .75rem; font-weight: 700; font-variant-numeric: tabular-nums; }
.movement-shell :deep(.movement-ley) { padding: clamp(24px, 4vw, 44px); border: 1px solid var(--color-border); border-radius: 20px; background: var(--color-paper); }
.movement-shell :deep(.movement-ley .ley-list) { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 48px; margin-top: 24px; }
.movement-shell :deep(.movement-ley .section-subtitle) { max-width: 700px; }
.movement-shell :deep(.back-link) { display: inline-flex; align-items: center; min-height: 40px; margin-bottom: 24px; color: var(--movement-color); font-size: .85rem; font-weight: 600; }
.movement-shell :deep(.back-link:hover) { text-decoration: underline; text-underline-offset: 4px; }
.movement-shell :deep(.rama-hero) { position: relative; overflow: hidden; isolation: isolate; margin-bottom: 40px; padding: clamp(28px, 5vw, 64px); border: 1px solid var(--color-border); border-radius: 24px; background: var(--color-paper); }
.movement-shell :deep(.rama-hero__bg) { position: absolute; inset: 0; z-index: -1; background: linear-gradient(115deg, var(--rc), transparent 80%); opacity: .08; }
.movement-shell :deep(.rama-hero__content) { max-width: 740px; }
.movement-shell :deep(.rama-hero__icon) { display: inline-flex; align-items: center; justify-content: center; width: 72px; height: 72px; margin-bottom: 24px; border-radius: 20px; border: 1px solid var(--color-border); background: var(--color-paper); font-size: 2.5rem; }
.movement-shell :deep(.rama-hero__title) { margin-bottom: 14px; font-size: clamp(2.5rem, 6vw, 4.5rem); letter-spacing: -.04em; }
.movement-shell :deep(.rama-hero__age) { display: inline-flex; margin-bottom: 24px; color: var(--rc); font-size: .85rem; font-weight: 700; }
.movement-shell :deep(.rama-hero__desc) { max-width: 650px; font-size: 1.06rem; color: var(--color-text-muted); line-height: 1.8; }
.movement-shell :deep(.rama-body) { display: grid; grid-template-columns: 1.1fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: start; }
.movement-shell :deep(.rama-section) { min-width: 0; }
.movement-shell :deep(.rama-section:last-child) { border-radius: 18px; padding: 32px; background: var(--movement-tint); }
.movement-shell :deep(.rama-section h2) { margin-bottom: 20px; font-family: var(--font-display); font-size: 1.7rem; letter-spacing: -.025em; }
.movement-shell :deep(.rama-section p) { color: var(--color-text-muted); font-size: .95rem; line-height: 1.8; }
.movement-shell :deep(.rama-activities) { list-style: none; padding: 0; }
.movement-shell :deep(.rama-activities li) { display: flex; align-items: center; gap: 14px; padding: 17px 0; border-bottom: 1px solid var(--color-border); color: var(--color-text-muted); }
.movement-shell :deep(.act-dot) { width: 6px; height: 6px; border-radius: 50%; background: var(--movement-color); flex-shrink: 0; }
.movement-shell :deep(.rama-section__actions) { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
.movement-shell :deep(.btn-action), .movement-shell :deep(.form-card__download) { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 46px; padding: 12px 20px; border: 1px solid transparent; border-radius: 8px; background: var(--movement-color); color: #fff; font-size: .84rem; font-weight: 700; text-align: center; transition: transform 180ms var(--ease-out), background-color 180ms var(--ease-out); }
.movement-shell--scouts :deep(.btn-action), .movement-shell--scouts :deep(.form-card__download) { background: var(--movement-brand); color: #132b3d; }
.movement-shell :deep(.btn-action:hover), .movement-shell :deep(.form-card__download:hover) { transform: translateY(-2px); background: var(--color-guia-light); }
.movement-shell--scouts :deep(.btn-action:hover), .movement-shell--scouts :deep(.form-card__download:hover) { background: var(--color-scout-light); color: #fff; }
.movement-shell :deep(.btn-action:active), .movement-shell :deep(.form-card__download:active) { transform: translateY(0) scale(.98); }
.movement-shell :deep(.btn-action--ghost) { border-color: color-mix(in srgb, var(--movement-color) 25%, transparent); background: transparent; color: var(--movement-color); }
.movement-shell :deep(.btn-action--ghost:hover) { background: var(--color-paper); }
.movement-shell :deep(.promesa-layout) { display: grid; grid-template-columns: 1fr 1.15fr; gap: clamp(24px, 4vw, 48px); align-items: start; }
.movement-shell :deep(.promesa-card) { padding: clamp(28px, 4vw, 44px); border: 1px solid var(--color-border); border-radius: 22px; background: var(--movement-tint); }
.movement-shell :deep(.ley-card) { padding: 12px 0; }
.movement-shell :deep(.promesa-card__header), .movement-shell :deep(.ley-card__header) { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.movement-shell :deep(.promesa-card__icon), .movement-shell :deep(.ley-card__icon) { font-size: 1.65rem; }
.movement-shell :deep(.promesa-card__header h2), .movement-shell :deep(.ley-card__header h2) { font-family: var(--font-display); font-size: 1.55rem; color: var(--movement-color); }
.movement-shell :deep(.promesa-text) { margin-bottom: 28px; font-family: var(--font-display); font-size: clamp(1.35rem, 2.3vw, 1.8rem); line-height: 1.55; letter-spacing: -.02em; }
.movement-shell :deep(.promesa-card__context) { padding-top: 24px; border-top: 1px solid color-mix(in srgb, var(--movement-color) 20%, transparent); }
.movement-shell :deep(.promesa-card__context p) { color: var(--color-text-muted); font-size: .9rem; line-height: 1.8; }
.movement-shell :deep(.lema-section) { margin-top: 56px; }
.movement-shell :deep(.lema-card) { padding: clamp(32px, 5vw, 64px); border-radius: 20px; text-align: center; background: var(--movement-color); color: #fff; }
.movement-shell :deep(.lema-label) { display: block; margin-bottom: 16px; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .16em; }
.movement-shell :deep(.lema-text) { margin-bottom: 20px; font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 4rem); font-style: italic; line-height: 1.1; }
.movement-shell :deep(.lema-card p) { max-width: 490px; margin: 0 auto; color: #e2edf4; font-size: .95rem; line-height: 1.75; }
.movement-shell :deep(.uniforme-layout) { display: grid; grid-template-columns: 1.1fr 1fr; gap: 32px; align-items: start; }
.movement-shell :deep(.uniforme-info) { display: grid; gap: 20px; }
.movement-shell :deep(.info-card) { padding: 30px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-paper); }
.movement-shell :deep(.info-card h3) { margin-bottom: 14px; font-family: var(--font-display); font-size: 1.35rem; color: var(--movement-color); }
.movement-shell :deep(.info-card p) { color: var(--color-text-muted); font-size: .93rem; line-height: 1.8; }
.movement-shell :deep(.info-card p + p) { margin-top: 12px; }
.movement-shell :deep(.formularios-grid) { display: grid; gap: 16px; margin-bottom: 28px; }
.movement-shell :deep(.form-card) { display: flex; align-items: center; gap: 24px; padding: 26px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-paper); box-shadow: 0 2px 5px #29253503, 0 10px 28px #29253503; }
.movement-shell :deep(.form-card__icon) { display: flex; align-items: center; justify-content: center; width: 58px; height: 68px; flex-shrink: 0; border-radius: 10px; background: var(--movement-tint); color: var(--movement-color); }
.movement-shell :deep(.form-card__info) { flex: 1; min-width: 0; }
.movement-shell :deep(.form-card__info h3) { margin-bottom: 7px; font-family: var(--font-display); font-size: 1.2rem; }
.movement-shell :deep(.form-card__info p) { margin-bottom: 8px; color: var(--color-text-muted); font-size: .88rem; line-height: 1.65; }
.movement-shell :deep(.form-card__type) { font-size: .65rem; font-weight: 700; letter-spacing: .1em; color: var(--movement-color); }
.movement-shell :deep(.form-card__download) { flex-shrink: 0; }
.movement-shell :deep(.formularios-nota) { display: flex; align-items: flex-start; gap: 12px; padding: 24px; border-radius: 12px; background: var(--movement-tint); color: var(--color-text-muted); font-size: .9rem; line-height: 1.7; }
.movement-shell :deep(.formularios-nota svg) { flex-shrink: 0; margin-top: 3px; color: var(--movement-color); }
.movement-shell :deep(.formularios-nota a) { color: var(--movement-color); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.movement-shell :deep(.movement-empty) { padding: 80px 0; }
.movement-shell :deep(.movement-empty h1) { font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 24px; }
@media (max-width: 1080px) {
  .movement-subnav__inner { flex-direction: column; align-items: flex-start; gap: 3px; padding-top: 12px; }
  .movement-subnav__links { width: 100%; }
  .movement-shell :deep(.valores-grid) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 760px) {
  .movement-shell :deep(.promesa-layout), .movement-shell :deep(.uniforme-layout), .movement-shell :deep(.rama-body), .movement-shell :deep(.movement-ley .ley-list) { grid-template-columns: 1fr; }
  .movement-shell :deep(.form-card) { gap: 16px; padding: 22px; flex-wrap: wrap; }
  .movement-shell :deep(.form-card__info) { flex-basis: calc(100% - 76px); }
  .movement-shell :deep(.form-card__download) { width: 100%; }
  .movement-shell :deep(.rama-section:last-child) { padding: 24px; }
}
@media (max-width: 480px) {
  .movement-shell :deep(.valores-grid) { grid-template-columns: 1fr; }
  .movement-shell :deep(.valor-card) { padding-inline: 0; }
  .movement-shell :deep(.form-card__icon) { width: 42px; height: 54px; }
  .movement-shell :deep(.form-card__info) { flex-basis: calc(100% - 58px); }
}
@media (prefers-reduced-motion: reduce) {
  .movement-view-enter-active, .movement-view-leave-active { transition: none; }
  .movement-view-enter-from, .movement-view-leave-to { transform: none; }
  .movement-shell :deep(.btn-action), .movement-shell :deep(.form-card__download), .movement-subnav__link { transition: none; }
  .movement-shell :deep(.btn-action:hover), .movement-shell :deep(.form-card__download:hover), .movement-shell :deep(.btn-action:active), .movement-shell :deep(.form-card__download:active) { transform: none; }
}
</style>
