<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Guías Argentinas</span>
          <h1 class="section-title">Promesa <em>y Ley</em></h1>
          <p class="section-subtitle">Los valores que guían nuestra vida como guías, desde el primer día y para siempre.</p>
        </header>

        <div class="promesa-layout">
          <div class="promesa-card" v-reveal>
            <div class="promesa-card__header">
              <span class="promesa-card__icon" aria-hidden="true">🌸</span>
              <h2>La Promesa Guía</h2>
            </div>
            <div class="promesa-card__text">
              <p class="promesa-text">
                "Prometo por mi honor hacer cuanto de mí dependa para cumplir mis deberes para con Dios y mi Patria, ayudar a mi prójimo en todo momento y cumplir la Ley Guía."
              </p>
            </div>
            <div class="promesa-card__context">
              <p>La Promesa Guía es el compromiso más profundo que asume una integrante del movimiento. Se hace ante la comunidad y ante una misma, y acompaña de por vida.</p>
            </div>
          </div>

          <div class="ley-card" v-reveal>
            <div class="ley-card__header">
              <span class="ley-card__icon" aria-hidden="true">📜</span>
              <h2>La Ley Guía</h2>
            </div>
            <ol class="ley-list">
              <li v-for="(articulo, i) in ley" :key="i">
                <span class="ley-num">{{ i + 1 }}</span>
                <span>{{ articulo }}</span>
              </li>
            </ol>
          </div>
        </div>

        <div class="lema-section" v-reveal>
          <div class="lema-card">
            <span class="lema-label">El Lema Guía</span>
            <h2 class="lema-text">"Siempre Lista"</h2>
            <p>Lista para actuar, para servir, para crecer. Preparada en cuerpo, mente y espíritu para todo lo que venga.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const ley = [
  'La Guía es digna de confianza.',
  'La Guía es leal.',
  'La Guía es útil y sirve a los demás.',
  'La Guía es amiga de todas y hermana de toda Guía.',
  'La Guía es cortés y considerada.',
  'La Guía es amiga de los animales y ama la naturaleza.',
  'La Guía obedece sin réplica.',
  'La Guía sonríe y canta en las dificultades.',
  'La Guía es económica.',
  'La Guía es pura en pensamientos, palabras y acciones.',
]
</script>
