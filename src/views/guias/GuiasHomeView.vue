<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <MovementHero
          label="Asociación Guías Argentinas"
          title="Listas" emphasis="para servir"
          :description="description" :logo="movementLogo"
          base-path="/guias" movement-name="Movimiento Guía"
        />

        <div class="movement-section" v-reveal>
          <div class="movement-section__heading">
            <div>
              <span class="eyebrow">Un camino para cada etapa</span>
              <h2 class="section-title">Nuestras ramas</h2>
            </div>
            <RouterLink to="/guias/ramas" class="movement-text-link">Explorar las ramas <span aria-hidden="true">↗</span></RouterLink>
          </div>
          <div class="ramas-grid">
            <BranchCard v-for="rama in GUIA_RAMAS" :key="rama.id" :rama="rama" base-path="/guias/ramas" />
          </div>
        </div>

        <div class="movement-section" v-reveal>
          <div class="movement-section__heading">
            <div>
              <span class="eyebrow">Lo que nos mueve</span>
              <h2 class="section-title">Valores Guía</h2>
            </div>
          </div>
          <div class="valores-grid">
            <div v-for="v in valores" :key="v.titulo" class="valor-card">
              <span class="valor-card__icon" aria-hidden="true">{{ v.emoji }}</span>
              <h3 class="valor-card__title">{{ v.titulo }}</h3>
              <p class="valor-card__text">{{ v.texto }}</p>
            </div>
          </div>
        </div>

        <!-- Ley Guía -->
        <div class="movement-section movement-ley" v-reveal>
          <div class="movement-section__heading">
            <h2 class="section-title">La Ley Guía</h2>
          </div>
          <p class="section-subtitle">Diez puntos que resumen los valores que una guía intenta vivir día a día, no solo los sábados.</p>
          <ol class="ley-list">
            <li v-for="(item, i) in leyGuia" :key="i">
              <span class="ley-list__num">{{ i + 1 }}</span>
              <span>{{ item }}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MovementHero from '@/components/shared/MovementHero.vue'
import movementLogo from '@/assets/brand/guides.webp'
import BranchCard from '@/components/shared/BranchCard.vue'
import { GUIA_RAMAS } from '@/stores/appStore.js'

const valores = [
  { emoji: '💜', titulo: 'Sororidad', texto: 'Se respeta a sí misma y valora la diversidad, construyendo vínculos solidarios entre todas.' },
  { emoji: '🌎', titulo: 'Compromiso', texto: 'Reflexiva, crítica y responsable: así vive su compromiso con la comunidad y el ambiente.' },
  { emoji: '🕊️', titulo: 'Paz', texto: 'Es amable y atenta, promoviendo el diálogo y la no violencia en su entorno.' },
  { emoji: '🌿', titulo: 'Respeto', texto: 'Se reconoce parte de la naturaleza y hace uso consciente y sostenible de los recursos.' },
]

const leyGuia = [
  'Es honesta y confiable.',
  'Es reflexiva, crítica y responsable.',
  'Es solidaria y se involucra en su entorno.',
  'Se respeta a sí misma y valora la diversidad.',
  'Es amable y atenta.',
  'Se reconoce como parte de la naturaleza y protege el ambiente.',
  'Es activa y busca superarse a sí misma.',
  'Es optimista y enfrenta las dificultades con serenidad.',
  'Hace uso consciente y sostenible de todos los recursos.',
  'Es auténtica y actúa de acuerdo a sus valores y creencias.',
]

const description = "El Guidismo nació en 1909, cuando un grupo de chicas exigió ser parte de un encuentro scout en Crystal Palace; Baden-Powell las llamó \"Guías\" y, para 1910, su hermana Agnes adaptó \"Scouting for Boys\" para ellas. En Argentina, la Asociación Guías Argentinas se fundó el 7 de octubre de 1953 por iniciativa de Nair Fernández Blanco de Gowland — por eso el 15 de abril celebramos el Día de la Guiadora. En San Pablo somos parte de la AGA desde nuestros orígenes."
</script>
