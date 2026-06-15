<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag" style="background:rgba(27,77,142,0.3);color:var(--color-scout-yellow);margin-bottom:16px;">Scouts de Argentina</span>
        <h1 class="section-title">Promesa <em style="font-style:italic;color:var(--color-scout-yellow)">y Ley</em></h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:4rem;">Los valores que guían nuestra vida scout, desde el primer día hasta siempre.</p>

        <div class="promesa-layout">
          <div class="promesa-card">
            <div class="promesa-card__header">
              <span class="promesa-card__icon">⚜️</span>
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

          <div class="ley-card">
            <div class="ley-card__header">
              <span class="ley-card__icon">📜</span>
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

        <div class="lema-section">
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
  color: var(--color-scout-yellow);
}

.promesa-text {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.8;
  color: var(--color-white);
  border-left: 3px solid var(--color-scout-yellow);
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(251,192,45,0.15);
  color: var(--color-scout-yellow);
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.lema-section { margin-top: 2rem; }

.lema-card {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, rgba(27,77,142,0.3), rgba(27,77,142,0.1));
  border-radius: var(--radius-xl);
  border: 1px solid rgba(27,77,142,0.4);
}

.lema-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-scout-yellow);
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
