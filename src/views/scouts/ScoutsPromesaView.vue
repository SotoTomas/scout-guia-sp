<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Scouts de Argentina</span>
          <h1 class="section-title">Promesa <em>y Ley</em></h1>
          <p class="section-subtitle">Los valores que guían nuestra vida scout, desde el primer día hasta siempre.</p>
        </header>

        <div class="promesa-layout">
          <div class="promesa-card" v-reveal>
            <div class="promesa-card__header">
              <span class="promesa-card__icon" aria-hidden="true">⚜️</span>
              <h2>La Promesa Scout</h2>
            </div>
            <div class="promesa-card__text">
              <p class="promesa-text">
                "Por mi honor prometo hacer cuanto de mí dependa para cumplir con mis deberes para con Dios y la Patria, ayudar al prójimo en toda circunstancia y cumplir fielmente la Ley Scout."
              </p>
            </div>
            <div class="promesa-card__context">
              <p>La Promesa Scout es el compromiso personal que cada miembro asume ante su grupo y ante sí mismo. Se hace una sola vez y acompaña de por vida.</p>
            </div>
          </div>

          <div class="ley-card" v-reveal>
            <div class="ley-card__header">
              <span class="ley-card__icon" aria-hidden="true">📜</span>
              <h2>La Ley Scout</h2>
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
            <span class="lema-label">El Lema Scout</span>
            <h2 class="lema-text">"Siempre Listos"</h2>
            <p>Estar siempre listos para servir, para actuar, para ayudar. Preparados en cuerpo, mente y espíritu.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const ley = [
  'El Scout tiene una sola palabra y es digno de confianza.',
  'El Scout es leal.',
  'El Scout sirve a los demás y salva vidas.',
  'El Scout es amigo de todos y hermano de todo Scout.',
  'El Scout es cortés.',
  'El Scout protege a los seres vivos.',
  'El Scout obedece sin réplica.',
  'El Scout enfrenta la vida con alegría.',
  'El Scout es económico y cuida lo ajeno.',
  'El Scout es puro en sus pensamientos, palabras y acciones.',
]
</script>
