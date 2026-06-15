<template>
  <div class="scouts-home" style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <div class="scouts-hero">
          <div class="scouts-hero__bg">
            <div class="scouts-hero__orb"></div>
          </div>
          <div class="scouts-hero__content">
            <span class="tag scouts-tag">Scouts Argentina Asociación Civil</span>
            <h1 class="section-title scouts-title">
              Siempre<br><em>listos</em>
            </h1>
            <p class="section-subtitle">El movimiento scout propone una educación activa para chicos y jóvenes. En contacto con la naturaleza, en patrulla, sirviendo y creciendo.</p>
            <div class="scouts-hero__actions">
              <RouterLink to="/scouts/ramas" class="btn-scout">Ver Ramas →</RouterLink>
              <RouterLink to="/scouts/formularios" class="btn-scout-ghost">Formularios</RouterLink>
            </div>
          </div>
        </div>

        <!-- Ramas rápido -->
        <div class="scouts-ramas-preview">
          <h2 class="section-title" style="margin-bottom: 2rem;">Nuestras Ramas</h2>
          <div class="ramas-grid">
            <BranchCard v-for="rama in SCOUT_RAMAS" :key="rama.id" :rama="rama" base-path="/scouts/ramas" />
          </div>
        </div>

        <!-- Valores -->
        <div class="scouts-valores">
          <h2 class="section-title" style="margin-bottom: 2rem;">Valores Scout</h2>
          <div class="valores-grid">
            <div v-for="v in valores" :key="v.titulo" class="valor-card">
              <span class="valor-card__icon">{{ v.emoji }}</span>
              <h3 class="valor-card__title">{{ v.titulo }}</h3>
              <p class="valor-card__text">{{ v.texto }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BranchCard from '@/components/shared/BranchCard.vue'
import { SCOUT_RAMAS } from '@/stores/appStore.js'

const valores = [
  { emoji: '🌿', titulo: 'Naturaleza', texto: 'El contacto con el entorno natural es central en la vida scout.' },
  { emoji: '🤝', titulo: 'Servicio', texto: 'Servir a la comunidad es uno de los pilares del método.' },
  { emoji: '⚜️', titulo: 'Lealtad', texto: 'Leales a la promesa, al grupo y a los valores que sostenemos.' },
  { emoji: '🏕️', titulo: 'Aventura', texto: 'Aprender haciendo y desafiarse en cada actividad.' },
]
</script>

<style scoped>
.scouts-hero {
  position: relative;
  margin-bottom: 6rem;
  padding: 3rem 0;
}

.scouts-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.scouts-hero__orb {
  position: absolute;
  width: 500px; height: 500px;
  background: var(--color-scout-primary);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
  right: -100px; top: -100px;
}

.scouts-hero__content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.scouts-tag {
  background: rgba(27,77,142,0.3);
  color: var(--color-scout-yellow);
  margin-bottom: 16px;
}

.scouts-title { margin-bottom: 20px; }
.scouts-title em { font-style: italic; color: var(--color-scout-yellow); }

.scouts-hero__actions {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.btn-scout {
  padding: 12px 28px;
  background: var(--color-scout-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: background var(--transition-fast);
}

.btn-scout:hover { background: var(--color-scout-light); }

.btn-scout-ghost {
  padding: 12px 28px;
  border: 1px solid rgba(27,77,142,0.5);
  color: var(--color-scout-yellow);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: background var(--transition-fast);
}

.btn-scout-ghost:hover { background: rgba(27,77,142,0.2); }

.scouts-ramas-preview { margin-bottom: 6rem; }

.ramas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.scouts-valores { margin-bottom: 4rem; }

.valores-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.valor-card {
  padding: 28px 24px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform var(--transition-fast);
}

.valor-card:hover { transform: translateY(-3px); }
.valor-card__icon { font-size: 2rem; display: block; margin-bottom: 12px; }

.valor-card__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.valor-card__text { font-size: 0.875rem; color: var(--color-white-dim); line-height: 1.6; }

@media (max-width: 900px) {
  .valores-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .valores-grid { grid-template-columns: 1fr; }
  .ramas-grid { grid-template-columns: 1fr; }
}
</style>
