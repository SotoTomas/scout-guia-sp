<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag" style="background:rgba(106,27,154,0.3);color:var(--color-guia-accent);margin-bottom:16px;">Guías Argentinas</span>
        <h1 class="section-title">Promesa <em style="font-style:italic;color:var(--color-guia-accent)">y Ley</em></h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:4rem;">Los valores que guían nuestra vida como guías, desde el primer día y para siempre.</p>

        <div class="promesa-layout">
          <div class="promesa-card">
            <div class="promesa-card__header">
              <span class="promesa-card__icon">🌸</span>
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

          <div class="ley-card">
            <div class="ley-card__header">
              <span class="ley-card__icon">📜</span>
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

        <div class="lema-section">
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

<style scoped>
.promesa-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.promesa-card, .ley-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 1px solid rgba(255,255,255,0.06);
}

.promesa-card__header, .ley-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.promesa-card__icon, .ley-card__icon { font-size: 2rem; }

.promesa-card__header h2, .ley-card__header h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-guia-accent);
}

.promesa-text {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.8;
  color: var(--color-white);
  border-left: 3px solid var(--color-guia-accent);
  padding-left: 20px;
  margin-bottom: 24px;
}

.promesa-card__context p {
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.7;
}

.ley-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ley-list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.5;
}

.ley-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: rgba(244,143,177,0.15);
  color: var(--color-guia-accent);
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.lema-section { margin-top: 2rem; }

.lema-card {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, rgba(106,27,154,0.3), rgba(106,27,154,0.1));
  border-radius: var(--radius-xl);
  border: 1px solid rgba(106,27,154,0.4);
}

.lema-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-guia-accent);
  margin-bottom: 12px;
}

.lema-text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--color-white);
  margin-bottom: 16px;
}

.lema-card p {
  font-size: 1rem;
  color: var(--color-white-dim);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .promesa-layout { grid-template-columns: 1fr; }
}
</style>
