<template>
  <div class="historia">
    <!-- Nuestra Historia -->
    <section class="section">
      <div class="container">
        <div class="historia__header">
          <span class="tag historia__tag">Nuestra Historia</span>
          <h1 class="section-title">Una historia de<br><em>servicio y comunidad</em></h1>
          <p class="section-subtitle">
            La Comunidad Scout-Guía San Pablo nació en 1981 en el corazón de Ramos Mejía, uniendo dos movimientos de educación no formal bajo un mismo techo. Lo que comenzó como un pequeño grupo de chicos con ganas de jugar y aprender se convirtió en una institución que marcó generaciones.
          </p>
        </div>
        <div class="historia__body">
          <p>Desde sus inicios, la comunidad apostó por la convivencia entre el movimiento scout y el guía, entendiéndola no como una contradicción sino como una riqueza. Padres, educadores y jóvenes construyeron juntos un espacio de formación, amistad y compromiso con los valores que hoy seguimos sosteniendo.</p>
          <p>A lo largo de más de cuatro décadas, miles de chicos y chicas pasaron por nuestras actividades, campamentos, jamborees y celebraciones. Cada uno dejó su huella y se llevó algo de este lugar.</p>
        </div>
      </div>
    </section>

    <!-- Grandes Hitos -->
    <section class="section hitos">
      <div class="container">
        <div class="hitos__header">
          <h2 class="section-title">Grandes Hitos</h2>
          <p class="section-subtitle">Momentos que marcaron nuestra memoria y alguna pequeña parte de nuestra identidad.</p>
        </div>
        <div class="hitos__timeline">
          <div
            v-for="(hito, i) in HITOS"
            :key="hito.año"
            class="hito"
            :class="{ 'hito--right': i % 2 !== 0 }"
          >
            <div class="hito__content">
              <div class="hito__year">{{ hito.año }}</div>
              <h3 class="hito__title">{{ hito.titulo }}</h3>
              <p class="hito__desc">{{ hito.descripcion }}</p>
            </div>
            <div class="hito__line">
              <div class="hito__dot"></div>
            </div>
            <div class="hito__spacer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galería -->
    <section class="section galeria">
      <div class="container">
        <div class="galeria__header">
          <h2 class="section-title">Galería de Momentos</h2>
          <p class="section-subtitle">Campamentos, ceremonias, amistades y recuerdos en nuestra comunidad.</p>
        </div>
        <div class="galeria__grid">
          <div
            v-for="n in 9"
            :key="n"
            class="galeria__item"
            :class="{ 'galeria__item--wide': n === 1 || n === 5, 'galeria__item--tall': n === 3 }"
          >
            <div class="galeria__placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/>
              </svg>
              <span>Foto {{ n }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { HITOS } from '@/stores/appStore.js'
</script>

<style scoped>
.historia {
  padding-top: 80px;
}

.historia__header {
  max-width: 680px;
  margin-bottom: 3rem;
}

.historia__tag {
  background: rgba(232,197,71,0.1);
  color: var(--color-accent-gold);
  margin-bottom: 16px;
}

.section-title em {
  font-style: italic;
  color: var(--color-accent-gold);
}

.historia__header .section-title { margin-bottom: 16px; }

.historia__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.historia__body p {
  font-size: 1rem;
  color: var(--color-white-dim);
  line-height: 1.8;
}

/* Hitos */
.hitos__header {
  text-align: center;
  margin-bottom: 4rem;
}

.hitos__header .section-subtitle { margin: 16px auto 0; }

.hitos__timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hitos__timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--color-accent-gold), transparent);
  transform: translateX(-50%);
}

.hito {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: center;
  padding: 24px 0;
}

.hito--right .hito__content { order: 3; text-align: left; }
.hito--right .hito__spacer { order: 1; }
.hito--right .hito__line { order: 2; }

.hito__content {
  padding: 24px 32px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  text-align: right;
}

.hito--right .hito__content { text-align: left; }

.hito__year {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-accent-gold);
  opacity: 0.4;
  line-height: 1;
  margin-bottom: 4px;
}

.hito__title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.hito__desc {
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.6;
}

.hito__line {
  display: flex;
  justify-content: center;
}

.hito__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent-gold);
  border: 3px solid var(--color-bg);
  box-shadow: 0 0 12px rgba(232,197,71,0.5);
}

/* Galería */
.galeria__header {
  text-align: center;
  margin-bottom: 3rem;
}

.galeria__header .section-subtitle { margin: 16px auto 0; }

.galeria__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 16px;
}

.galeria__item { border-radius: var(--radius-lg); overflow: hidden; }
.galeria__item--wide { grid-column: span 2; }
.galeria__item--tall { grid-row: span 2; }

.galeria__placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--color-white-dim);
  font-size: 0.8rem;
  transition: background var(--transition-fast);
}

.galeria__placeholder:hover { background: var(--color-surface-alt); }

@media (max-width: 768px) {
  .historia__body { grid-template-columns: 1fr; }

  .hitos__timeline::before { left: 24px; }
  .hito { grid-template-columns: 48px 1fr; }
  .hito .hito__spacer { display: none; }
  .hito .hito__line { order: 1; justify-content: center; }
  .hito .hito__content,
  .hito--right .hito__content { order: 2; text-align: left; }

  .galeria__grid { grid-template-columns: 1fr 1fr; }
  .galeria__item--wide { grid-column: span 1; }
}
</style>
