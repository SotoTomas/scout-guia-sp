<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Guías Argentinas</span>
          <h1 class="section-title">El <em>Uniforme</em></h1>
          <p class="section-subtitle">El uniforme guía expresa identidad y pertenencia. Conocé dónde se coloca cada insignia y qué representa.</p>
        </header>

        <div class="uniforme-layout">
          <UniformDiagram :insignias="insignias" v-reveal />

          <div class="uniforme-info">
            <div class="info-card" v-reveal>
              <h3>¿Dónde se consigue?</h3>
              <p>El uniforme oficial de la Asociación Guías Argentinas se adquiere en la sede del grupo o en tiendas autorizadas por AGA.</p>
            </div>
            <div class="info-card" v-reveal>
              <h3>Historia del Uniforme</h3>
              <p>El uniforme guía tiene su origen en el movimiento fundado por Lord Baden-Powell y su esposa Olave en 1910. En Argentina, AGA ha ido adaptando el uniforme a lo largo de los años, manteniendo los elementos simbólicos que identifican a cada rama.</p>
            </div>
            <div class="info-card" v-reveal>
              <h3>El Pañuelo de Comunidad</h3>
              <p>Las guías de San Pablo usan el pañuelo de la comunidad, que combina los colores de ambos movimientos como símbolo de unión.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import UniformDiagram from '@/components/shared/UniformDiagram.vue'

const insignias = [
  { nombre: 'Trébol de Oro', ubicacion: 'Bolsillo izquierdo del pecho', color: '#f48fb1' },
  { nombre: 'Distintivo de Grupo', ubicacion: 'Manga izquierda, parte superior', color: '#9c27b0' },
  { nombre: 'Distintivo de Rama', ubicacion: 'Manga izquierda, segundo nivel', color: '#e91e63' },
  { nombre: 'Nombre', ubicacion: 'Encima del bolsillo derecho', color: '#e0e0e0' },
  { nombre: 'Insignia de Progresión', ubicacion: 'Bolsillo derecho del pecho', color: '#f9a825' },
  { nombre: 'Bandera Argentina', ubicacion: 'Manga derecha, parte superior', color: '#1565c0' },
]
</script>
