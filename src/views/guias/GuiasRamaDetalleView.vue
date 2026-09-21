<template>
  <div class="movement-page" v-if="rama">
    <section class="section">
      <div class="container">
        <RouterLink to="/guias/ramas" class="back-link">← Volver a Ramas</RouterLink>

        <div class="rama-hero" v-reveal :style="{ '--rc': rama.color, '--rt': rama.colorText }">
          <div class="rama-hero__bg" aria-hidden="true"></div>
          <div class="rama-hero__content">
            <span class="rama-hero__icon" aria-hidden="true">{{ rama.icono }}</span>
            <h1 class="section-title rama-hero__title">{{ rama.nombre }}</h1>
            <p class="rama-hero__age">{{ rama.edad }}</p>
            <p class="rama-hero__desc">{{ rama.descripcion }}</p>
          </div>
        </div>

        <div class="rama-body">
          <div class="rama-section" v-reveal>
            <h2>Actividades principales</h2>
            <ul class="rama-activities">
              <li v-for="act in rama.actividades" :key="act">
                <span class="act-dot"></span>{{ act }}
              </li>
            </ul>
          </div>

          <div class="rama-section" v-reveal>
            <h2>Inscripción</h2>
            <p>¿Querés que tu hija se una a {{ rama.nombre }}? Completá el formulario de inscripción o escribinos.</p>
            <div class="rama-section__actions">
              <RouterLink to="/guias/formularios" class="btn-action">Ver Formularios</RouterLink>
              <RouterLink to="/#contacto" class="btn-action btn-action--ghost">Contacto</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container movement-empty">
    <h1>Rama no encontrada</h1>
    <RouterLink to="/guias/ramas" class="btn-action">Volver a ramas</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { GUIA_RAMAS } from '@/stores/appStore.js'

const route = useRoute()
const rama = computed(() => GUIA_RAMAS.find(r => r.id === route.params.id))
</script>
