<template>
  <div style="padding-top: 80px;" v-if="rama">
    <section class="section">
      <div class="container">
        <RouterLink to="/guias/ramas" class="back-link">← Volver a Ramas</RouterLink>

        <div class="rama-hero" :style="{ '--rc': rama.color, '--rt': rama.colorText }">
          <div class="rama-hero__bg"></div>
          <div class="rama-hero__content">
            <span class="rama-hero__icon">{{ rama.icono }}</span>
            <h1 class="section-title rama-hero__title">{{ rama.nombre }}</h1>
            <p class="rama-hero__age">{{ rama.edad }}</p>
            <p class="rama-hero__desc">{{ rama.descripcion }}</p>
          </div>
        </div>

        <div class="rama-body">
          <div class="rama-section">
            <h2>Actividades principales</h2>
            <ul class="rama-activities">
              <li v-for="act in rama.actividades" :key="act">
                <span class="act-dot"></span>{{ act }}
              </li>
            </ul>
          </div>

          <div class="rama-section">
            <h2>Inscripción</h2>
            <p>¿Querés que tu hija se una a {{ rama.nombre }}? Completá el formulario de inscripción o escribinos.</p>
            <div class="rama-section__actions">
              <RouterLink to="/guias/formularios" class="btn-action">Ver Formularios</RouterLink>
              <a href="/#contacto" class="btn-action btn-action--ghost">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else style="padding-top:100px;" class="container">
    <p>Rama no encontrada. <RouterLink to="/guias/ramas" style="color:var(--color-guia-accent)">Volver</RouterLink></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { GUIA_RAMAS } from '@/stores/appStore.js'

const route = useRoute()
const rama = computed(() => GUIA_RAMAS.find(r => r.id === route.params.id))
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: var(--color-white-dim);
  margin-bottom: 2rem;
  transition: color var(--transition-fast);
}
.back-link:hover { color: var(--color-guia-accent); }

.rama-hero {
  position: relative;
  padding: 48px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 3rem;
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.06);
}

.rama-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--rc) 0%, transparent 60%);
  opacity: 0.1;
}

.rama-hero__content { position: relative; z-index: 1; }
.rama-hero__icon { font-size: 4rem; display: block; margin-bottom: 16px; }

.rama-hero__title { margin-bottom: 8px; color: var(--rc); }

.rama-hero__age {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--rc);
  opacity: 0.8;
  margin-bottom: 20px;
}

.rama-hero__desc {
  font-size: 1.05rem;
  color: var(--color-white-dim);
  max-width: 600px;
  line-height: 1.7;
}

.rama-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.rama-section h2 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.rama-section p {
  font-size: 0.95rem;
  color: var(--color-white-dim);
  line-height: 1.7;
  margin-bottom: 20px;
}

.rama-activities {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rama-activities li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--color-white-dim);
}

.act-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-guia-accent);
  flex-shrink: 0;
}

.rama-section__actions { display: flex; gap: 12px; }

.btn-action {
  padding: 10px 24px;
  background: var(--color-guia-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: background var(--transition-fast);
}

.btn-action:hover { background: var(--color-guia-light); }

.btn-action--ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--color-white-dim);
}

.btn-action--ghost:hover { background: rgba(255,255,255,0.06); color: var(--color-white); }

@media (max-width: 768px) {
  .rama-body { grid-template-columns: 1fr; }
  .rama-hero { padding: 28px; }
}
</style>
