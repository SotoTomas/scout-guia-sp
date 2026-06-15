<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__orb hero__orb--scout"></div>
        <div class="hero__orb hero__orb--guia"></div>
        <div class="hero__grid"></div>
      </div>
      <div class="container hero__content">
        <div class="hero__text">
          <span class="hero__since tag">Desde 1981</span>
          <h1 class="hero__title">
            Al servicio<br>
            <em>y en comunidad</em>
          </h1>
          <p class="hero__desc">
            Un espacio donde chicos, chicas y jóvenes crecen jugando, aprendiendo y sirviendo junto a otros. Dos movimientos, una misma aventura.
          </p>
          <div class="hero__actions">
            <RouterLink to="/guias/inscripciones" class="btn btn--primary">Quiero ser parte</RouterLink>
            <RouterLink to="/nosotros/historia" class="btn btn--ghost">Conocer la historia</RouterLink>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__video-wrapper">
            <div class="hero__video-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
              <span>Video institucional</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- DOS ASOCIACIONES -->
    <section class="section associations">
      <div class="container">
        <div class="associations__header">
          <h2 class="section-title">Dos Asociaciones,<br><em>una Comunidad</em></h2>
          <p class="section-subtitle">Nos encontramos en el barrio, en los valores y en la vida. Dos caminos que marchan juntos desde hace más de cuatro décadas.</p>
        </div>
        <div class="associations__cards">
          <RouterLink to="/scouts" class="assoc-card assoc-card--scout">
            <div class="assoc-card__header">
              <div class="assoc-card__panuelo assoc-card__panuelo--scout"></div>
              <h3 class="assoc-card__title">Scouts de Argentina</h3>
            </div>
            <p class="assoc-card__text">El método scout propone una educación activa donde los jóvenes aprenden haciendo, en contacto con la naturaleza y en servicio a la comunidad. Nuestro grupo pertenece a la <strong>Scouts Argentina Asociación Civíl (SAAC)</strong>.</p>
            <div class="assoc-card__ramas">
              <span v-for="r in ['Manada', 'Unidad', 'Caminantes', 'Rovers']" :key="r" class="assoc-card__rama-tag">{{ r }}</span>
            </div>
            <span class="assoc-card__cta">Ver sección Scouts →</span>
          </RouterLink>

          <RouterLink to="/guias" class="assoc-card assoc-card--guia">
            <div class="assoc-card__header">
              <div class="assoc-card__panuelo assoc-card__panuelo--guia"></div>
              <h3 class="assoc-card__title">Asociación Guías Argentinas</h3>
            </div>
            <p class="assoc-card__text">El movimiento guía forma líderes comprometidas con sus valores, su comunidad y el mundo. Nuestro grupo integra la <strong>Asociación Guías Argentinas (AGA)</strong>, con sus propias tradiciones y programa educativo.</p>
            <div class="assoc-card__ramas">
              <span v-for="r in ['Pimpollitos', 'Alitas', 'Caravanas', 'Guías del Sol', 'Guías Mayores']" :key="r" class="assoc-card__rama-tag">{{ r }}</span>
            </div>
            <span class="assoc-card__cta">Ver sección Guías →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- RAMAS -->
    <section class="section branches">
      <div class="container">
        <div class="branches__header">
          <h2 class="section-title">El trabajo por Ramas</h2>
          <p class="section-subtitle">Las ramas son los grupos de edad que organizan cada asociación. Propuestas pensadas para cada etapa del crecimiento.</p>
        </div>
        <div class="branches__grid">
          <RouterLink
            v-for="rama in allRamas"
            :key="rama.id"
            :to="rama.path"
            class="mini-rama"
            :style="{ '--rc': rama.color }"
          >
            <span class="mini-rama__icon">{{ rama.icono }}</span>
            <span class="mini-rama__name">{{ rama.nombre }}</span>
            <span class="mini-rama__age">{{ rama.edad }}</span>
            <span class="mini-rama__assoc" :class="`mini-rama__assoc--${rama.assoc}`">{{ rama.assoc === 'scout' ? 'Scout' : 'Guía' }}</span>
          </RouterLink>
        </div>
        <div class="branches__ctas">
          <RouterLink to="/scouts/ramas" class="btn btn--scout">Ver Ramas Scout</RouterLink>
          <RouterLink to="/guias/ramas" class="btn btn--guia">Ver Ramas Guía</RouterLink>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section class="section contact" id="contacto">
      <div class="container contact__inner">
        <div class="contact__left">
          <h2 class="section-title">Contactanos</h2>
          <p class="section-subtitle">¿Querés que tu hijo o hija se sume? ¿Tenés alguna consulta? Escribinos.</p>
          <div class="contact__info">
            <div class="contact__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Fray Cayetano Rodríguez 100, Ramos Mejía, Buenos Aires</span>
            </div>
            <div class="contact__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:comunidad@scoutguiasp.org.ar">comunidad@scoutguiasp.org.ar</a>
            </div>
          </div>
        </div>
        <form class="contact__form" @submit.prevent="submitForm">
          <div class="form-group">
            <label>Nombre</label>
            <input v-model="form.nombre" type="text" placeholder="Tu nombre completo" required />
          </div>
          <div class="form-group">
            <label>Correo electrónico</label>
            <input v-model="form.email" type="email" placeholder="tu@email.com" required />
          </div>
          <div class="form-group">
            <label>Consulta</label>
            <textarea v-model="form.mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
          </div>
          <button type="submit" class="btn btn--primary" :disabled="sending">
            {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
          </button>
          <p v-if="sent" class="contact__success">✓ Mensaje enviado. ¡Te contactamos pronto!</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SCOUT_RAMAS, GUIA_RAMAS } from '@/stores/appStore.js'

const allRamas = [
  ...SCOUT_RAMAS.map(r => ({ ...r, assoc: 'scout', path: `/scouts/ramas/${r.id}` })),
  ...GUIA_RAMAS.map(r => ({ ...r, assoc: 'guia', path: `/guias/ramas/${r.id}` }))
]

const form = ref({ nombre: '', email: '', mensaje: '' })
const sending = ref(false)
const sent = ref(false)

async function submitForm() {
  sending.value = true
  await new Promise(r => setTimeout(r, 1000))
  sending.value = false
  sent.value = true
  form.value = { nombre: '', email: '', mensaje: '' }
  setTimeout(() => { sent.value = false }, 5000)
}
</script>

<style scoped>
/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
}

.hero__orb--scout {
  width: 500px; height: 500px;
  background: var(--color-scout-primary);
  top: -100px; left: -100px;
}

.hero__orb--guia {
  width: 400px; height: 400px;
  background: var(--color-guia-primary);
  bottom: -80px; right: -80px;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero__since {
  background: rgba(232, 197, 71, 0.15);
  color: var(--color-accent-gold);
  border: 1px solid rgba(232,197,71,0.3);
  margin-bottom: 24px;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--color-white);
  margin-bottom: 24px;
}

.hero__title em {
  font-style: italic;
  background: linear-gradient(135deg, var(--color-scout-yellow), var(--color-guia-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__desc {
  font-size: 1.125rem;
  color: var(--color-white-dim);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero__video-wrapper {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.08);
  aspect-ratio: 16/10;
}

.hero__video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--color-white-dim);
  font-size: 0.9rem;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white-dim);
  opacity: 0.5;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-white-dim), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.5; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(0.6); }
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.btn--primary {
  background: var(--color-accent-gold);
  color: #1a1a2e;
}

.btn--primary:hover { background: #f0d060; transform: translateY(-2px); }
.btn--primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.btn--ghost {
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--color-white);
}

.btn--ghost:hover { background: rgba(255,255,255,0.07); }

.btn--scout {
  background: var(--color-scout-primary);
  color: var(--color-white);
}

.btn--scout:hover { background: var(--color-scout-light); }

.btn--guia {
  background: var(--color-guia-primary);
  color: var(--color-white);
}

.btn--guia:hover { background: var(--color-guia-light); }

/* ASSOCIATIONS */
.associations__header {
  text-align: center;
  margin-bottom: 4rem;
}

.associations__header .section-subtitle {
  margin: 16px auto 0;
}

.associations__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.assoc-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.assoc-card--scout:hover { box-shadow: 0 0 0 1px var(--color-scout-primary), var(--shadow-lg); transform: translateY(-4px); }
.assoc-card--guia:hover  { box-shadow: 0 0 0 1px var(--color-guia-primary), var(--shadow-lg); transform: translateY(-4px); }

.assoc-card__header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.assoc-card__panuelo {
  width: 56px;
  height: 56px;
  border-radius: 50% 0 50% 0;
  flex-shrink: 0;
}

.assoc-card__panuelo--scout { background: linear-gradient(135deg, var(--color-scout-primary), var(--color-scout-yellow)); }
.assoc-card__panuelo--guia  { background: linear-gradient(135deg, var(--color-guia-primary), var(--color-guia-accent)); }

.assoc-card__title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
}

.assoc-card__text {
  font-size: 0.95rem;
  color: var(--color-white-dim);
  line-height: 1.7;
}

.assoc-card__text strong { color: var(--color-white); }

.assoc-card__ramas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.assoc-card__rama-tag {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(255,255,255,0.07);
  color: var(--color-white-dim);
}

.assoc-card__cta {
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: auto;
}

.assoc-card--scout .assoc-card__cta { color: var(--color-scout-yellow); }
.assoc-card--guia  .assoc-card__cta { color: var(--color-guia-accent); }

/* BRANCHES */
.branches__header {
  text-align: center;
  margin-bottom: 3rem;
}

.branches__header .section-subtitle { margin: 16px auto 0; }

.branches__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 3rem;
}

.mini-rama {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 24px 16px;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.mini-rama:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 0 1px var(--rc);
}

.mini-rama__icon { font-size: 2rem; }
.mini-rama__name { font-weight: 700; font-size: 0.9rem; color: var(--color-white); }
.mini-rama__age  { font-size: 0.72rem; color: var(--rc); font-weight: 600; }

.mini-rama__assoc {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 4px;
}

.mini-rama__assoc--scout { background: rgba(27,77,142,0.3); color: var(--color-scout-yellow); }
.mini-rama__assoc--guia  { background: rgba(106,27,154,0.3); color: var(--color-guia-accent); }

.branches__ctas {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* CONTACT */
.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: start;
}

.contact__info {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact__info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--color-white-dim);
}

.contact__info-item a:hover { color: var(--color-white); }
.contact__info-item svg { flex-shrink: 0; margin-top: 2px; }

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--color-surface);
  padding: 40px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255,255,255,0.06);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-white-dim);
}

.form-group input,
.form-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast);
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent-gold);
}

.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.2); }

.contact__success {
  font-size: 0.9rem;
  color: #4caf50;
  font-weight: 600;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero__content { grid-template-columns: 1fr; gap: 3rem; }
  .hero__visual { display: none; }
  .associations__cards { grid-template-columns: 1fr; }
  .contact__inner { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 600px) {
  .branches__grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
