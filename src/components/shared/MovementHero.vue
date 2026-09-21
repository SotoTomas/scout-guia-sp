<template>
  <header class="movement-hero">
    <div class="movement-hero__copy">
      <span class="eyebrow">{{ label }}</span>
      <h1>{{ title }}<br><em>{{ emphasis }}</em><span class="movement-hero__dot">.</span></h1>
      <p class="movement-hero__description">{{ description }}</p>
      <div class="movement-hero__actions">
        <RouterLink :to="`${basePath}/ramas`" class="btn-action">Ver ramas <span aria-hidden="true">↗</span></RouterLink>
        <a :href="externalRegistration || registrationUrl" target="_blank" rel="noreferrer" class="btn-action btn-action--ghost">Inscribirse</a>
      </div>
    </div>
    <div class="movement-hero__identity" v-reveal>
      <div class="movement-hero__identity-top"><span>San Pablo</span><span aria-hidden="true">↗</span></div>
      <div class="movement-hero__emblem">
        <img :src="logo" :alt="label" width="220" height="220" decoding="async" fetchpriority="high">
      </div>
      <div class="movement-hero__identity-bottom"><span>Una misma comunidad</span><strong>{{ movementName }}</strong></div>
      <svg class="movement-hero__contours" viewBox="0 0 420 480" fill="none" aria-hidden="true"><path d="M-50 360C100 160 280 570 450 210M-50 390C100 190 280 600 450 240M-50 420C100 220 280 630 450 270M-50 450C100 250 280 660 450 300" stroke="currentColor" /></svg>
    </div>
  </header>
</template>

<script setup>
defineProps({
  label: String, title: String, emphasis: String, description: String,
  basePath: String, logo: String, movementName: String, externalRegistration: String,
})
const registrationUrl = 'https://www.gruposanpablo.com.ar/preinscripcion'
</script>

<style scoped>
.movement-hero { display: grid; grid-template-columns: 1.25fr .8fr; align-items: center; gap: clamp(36px, 6vw, 88px); }
.movement-hero__copy { min-width: 0; }
.movement-hero__copy > .eyebrow { display: block; margin-bottom: 24px; color: var(--movement-color); }
.movement-hero h1 { margin: 0 0 26px; font-family: var(--font-display); font-size: clamp(3.4rem, 6.6vw, 6.4rem); font-weight: 500; letter-spacing: -.065em; line-height: 1.04; }
.movement-hero h1 em { font-weight: inherit; color: var(--movement-color); }
.movement-hero__dot { color: #b67e38; }
.movement-hero__description { color: var(--color-text-muted); font-size: .97rem; line-height: 1.85; max-width: 650px; }
.movement-hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.movement-hero__identity { position: relative; isolation: isolate; display: flex; flex-direction: column; justify-content: space-between; min-height: 440px; padding: 28px; border: 1px solid color-mix(in srgb, var(--movement-color) 15%, transparent); border-radius: 140px 140px 20px 20px; background: var(--movement-tint); color: var(--movement-color); overflow: hidden; }
.movement-hero__identity-top { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .13em; }
.movement-hero__emblem { display: grid; place-items: center; align-self: center; width: min(100%, 250px); aspect-ratio: 1; border: 1px solid color-mix(in srgb, var(--movement-color) 14%, transparent); border-radius: 50%; background: #fff; box-shadow: 0 3px 5px #29253503, 0 20px 40px #29253506; }
.movement-hero__emblem img { width: 75%; height: 75%; object-fit: contain; }
.movement-hero__identity-bottom { display: grid; gap: 6px; padding-top: 22px; }
.movement-hero__identity-bottom span { font-size: .7rem; text-transform: uppercase; letter-spacing: .1em; }
.movement-hero__identity-bottom strong { font-family: var(--font-display); font-size: 1.75rem; font-weight: 500; }
.movement-hero__contours { position: absolute; inset: 0; width: 100%; height: 100%; z-index: -1; opacity: .16; pointer-events: none; }
@media (max-width: 900px) { .movement-hero { grid-template-columns: 1fr; } .movement-hero__identity { min-height: 320px; max-width: 600px; width: 100%; border-radius: 20px; } .movement-hero__emblem { width: 180px; } .movement-hero__identity-top { padding: 0; } }
@media (max-width: 480px) { .movement-hero h1 { font-size: clamp(3rem, 13vw, 4.5rem); } .movement-hero__identity { min-height: 320px; } }
</style>
