<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <MovementHero
          label="Scouts Argentina Asociación Civil"
          title="Siempre" emphasis="listos"
          :description="description" :logo="movementLogo"
          base-path="/scouts" movement-name="Movimiento Scout"
          external-registration="https://www.gruposanpablo.com.ar/preinscripcion"
        />

        <div class="movement-section" v-reveal>
          <div class="movement-section__heading">
            <div>
              <span class="eyebrow">Un camino para cada etapa</span>
              <h2 class="section-title">Nuestras ramas</h2>
            </div>
            <RouterLink to="/scouts/ramas" class="movement-text-link">Explorar las ramas <span aria-hidden="true">↗</span></RouterLink>
          </div>
          <div class="ramas-grid">
            <BranchCard v-for="rama in SCOUT_RAMAS" :key="rama.id" :rama="rama" base-path="/scouts/ramas" />
          </div>
        </div>

        <!-- Valores -->
        <div class="movement-section" v-reveal>
          <div class="movement-section__heading">
            <div>
              <span class="eyebrow">Lo que nos mueve</span>
              <h2 class="section-title">Valores Scout</h2>
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

        <!-- Ley Scout -->
        <div class="movement-section movement-ley" v-reveal>
          <div class="movement-section__heading">
            <h2 class="section-title">La Ley Scout</h2>
          </div>
          <p class="section-subtitle">Diez puntos que resumen los valores que un scout intenta vivir día a día, no solo los sábados.</p>
          <ol class="ley-list">
            <li v-for="(item, i) in leyScout" :key="i">
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
import movementLogo from '@/assets/brand/scouts.webp'
import BranchCard from '@/components/shared/BranchCard.vue'
import { SCOUT_RAMAS } from '@/stores/appStore.js'

const valores = [
  { emoji: '🌿', titulo: 'Naturaleza', texto: 'Amar y defender la vida y la naturaleza es uno de los diez puntos de nuestra Ley.' },
  { emoji: '🤝', titulo: 'Servicio', texto: 'Ser generoso, cortés y solidario: el servicio a los demás guía cada patrulla y campamento.' },
  { emoji: '⚜️', titulo: 'Lealtad', texto: 'Leal y digno de toda confianza — así lo marca el primer compromiso de la Promesa Scout.' },
  { emoji: '🏕️', titulo: 'Aventura', texto: 'Aprender haciendo, en patrulla, poniendo a prueba la responsabilidad de cada scout.' },
]

const leyScout = [
  'Ama a Dios y vive plenamente su Fe.',
  'Es leal y digno de toda confianza.',
  'Es generoso, cortés y solidario.',
  'Es respetuoso y hermano de todos.',
  'Defiende y valora la familia.',
  'Ama y defiende la vida y la naturaleza.',
  'Sabe obedecer, elige y actúa con responsabilidad.',
  'Es optimista aún en las dificultades.',
  'Es económico, trabajador y respetuoso del bien ajeno.',
  'Es puro y lleva una vida sana.',
]

const description = "El escultismo nació en 1907, cuando Robert Baden-Powell reunió a 20 chicos en un campamento experimental en la isla de Brownsea, Inglaterra. Llegó a la Argentina en 1912 de la mano de Francisco P. Moreno, y hoy nuestro grupo forma parte de Scouts de Argentina Asociación Civil (SAAC). Es una educación activa: aprender haciendo, en patrulla, en contacto con la naturaleza y sirviendo a los demás."
</script>
