<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Uniforme Scout</span>
          <h1 class="section-title">El <em>Uniforme</em></h1>
          <p class="section-subtitle">El uniforme es parte de la identidad scout. Conocé dónde va cada insignia, parche y distintivo.</p>
        </header>

        <div class="uniforme-layout">
          <UniformDiagram :insignias="insignias" v-reveal />

          <div class="uniforme-info">
            <div class="info-card" v-reveal>
              <h3>¿Dónde se consigue?</h3>
              <p>El uniforme oficial de Scouts de Argentina puede adquirirse en la sede del grupo o en tiendas oficiales de la Asociación.</p>
            </div>
            <div class="info-card" v-reveal>
              <h3>Historia del Uniforme</h3>
              <p>El uniforme scout tiene sus raíces en 1907 con Robert Baden-Powell. A lo largo de los años fue evolucionando, pero siempre mantuvo su espíritu de igualdad e identidad compartida.</p>
              <p>En Argentina, el uniforme actual fue adoptado en la década del 90, con actualizaciones periódicas para mantenerlo funcional y representativo.</p>
            </div>
            <div class="info-card" v-reveal>
              <h3>Pañuelo</h3>
              <p>El pañuelo identifica al grupo. El de nuestra comunidad tiene los colores azul y blanco en honor a nuestras raíces.</p>
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
  { nombre: 'Flor de Lis', ubicacion: 'Bolsillo izquierdo del pecho', color: '#fbc02d' },
  { nombre: 'Distintivo de Grupo', ubicacion: 'Manga izquierda, parte superior', color: '#2a6cc4' },
  { nombre: 'Distintivo de Rama', ubicacion: 'Manga izquierda, debajo del grupo', color: '#2e7d32' },
  { nombre: 'Nombre del Scout', ubicacion: 'Encima del bolsillo derecho', color: '#e0e0e0' },
  { nombre: 'Parche de Progresión', ubicacion: 'Bolsillo derecho', color: '#c62828' },
  { nombre: 'Distintivo Nacional', ubicacion: 'Manga derecha, parte superior', color: '#1565c0' },
]
</script>
