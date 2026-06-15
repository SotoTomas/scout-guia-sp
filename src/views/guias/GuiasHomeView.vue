<template>
  <div class="guias-home" style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <div class="guias-hero">
          <div class="guias-hero__bg">
            <div class="guias-hero__orb"></div>
          </div>
          <div class="guias-hero__content">
            <span class="tag guias-tag">Asociación Guías Argentinas</span>
            <h1 class="section-title guias-title">
              Listas<br><em>para servir</em>
            </h1>
            <p class="section-subtitle">El movimiento guía forma líderes comprometidas con sus valores, su comunidad y el mundo. En San Pablo, somos parte de una comunidad que trasciende generaciones.</p>
            <div class="guias-hero__actions">
              <RouterLink to="/guias/ramas" class="btn-guia">Ver Ramas →</RouterLink>
              <RouterLink to="/guias/inscripciones" class="btn-guia-ghost">Inscribirse</RouterLink>
            </div>
          </div>
        </div>

        <div class="guias-ramas-preview">
          <h2 class="section-title" style="margin-bottom: 2rem;">Nuestras Ramas</h2>
          <div class="ramas-grid">
            <BranchCard v-for="rama in GUIA_RAMAS" :key="rama.id" :rama="rama" base-path="/guias/ramas" />
          </div>
        </div>

        <div class="guias-valores">
          <h2 class="section-title" style="margin-bottom: 2rem;">Valores Guía</h2>
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
import { GUIA_RAMAS } from '@/stores/appStore.js'

const valores = [
  { emoji: '💜', titulo: 'Sororidad', texto: 'Construir vínculos fuertes y solidarios entre todas las integrantes.' },
  { emoji: '🌎', titulo: 'Compromiso', texto: 'Asumir responsabilidad con la comunidad y el medioambiente.' },
  { emoji: '🕊️', titulo: 'Paz', texto: 'Promover el entendimiento, el diálogo y la no violencia.' },
  { emoji: '🌿', titulo: 'Respeto', texto: 'Por la naturaleza, las personas y las diferencias.' },
]
</script>

<style scoped>
.guias-hero {
  position: relative;
  margin-bottom: 6rem;
  padding: 3rem 0;
}

.guias-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.guias-hero__orb {
  position: absolute;
  width: 500px; height: 500px;
  background: var(--color-guia-primary);
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
  right: -100px; top: -100px;
}

.guias-hero__content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.guias-tag {
  background: rgba(106,27,154,0.3);
  color: var(--color-guia-accent);
  margin-bottom: 16px;
}

.guias-title { margin-bottom: 20px; }
.guias-title em { font-style: italic; color: var(--color-guia-accent); }

.guias-hero__actions {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.btn-guia {
  padding: 12px 28px;
  background: var(--color-guia-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: background var(--transition-fast);
}

.btn-guia:hover { background: var(--color-guia-light); }

.btn-guia-ghost {
  padding: 12px 28px;
  border: 1px solid rgba(106,27,154,0.5);
  color: var(--color-guia-accent);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: background var(--transition-fast);
}

.btn-guia-ghost:hover { background: rgba(106,27,154,0.2); }

.guias-ramas-preview { margin-bottom: 6rem; }

.ramas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.guias-valores { margin-bottom: 4rem; }

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
