<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag" style="background:rgba(232,197,71,0.1);color:var(--color-accent-gold);margin-bottom:16px;">Adultos en el Movimiento</span>
        <h1 class="section-title">Adultos que <em style="font-style:italic;color:var(--color-accent-gold)">hacen posible</em> todo</h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:4rem;">Sin los adultos, el movimiento no existe. Hay muchas formas de participar, independientemente de si tu hijo o hija es parte del grupo.</p>

        <div class="adultos-intro">
          <div class="intro-card">
            <p>Los adultos en el movimiento scout-guía cumplen roles fundamentales: desde la conducción directa de ramas hasta el apoyo logístico, administrativo y familiar. Cada rol tiene su valor y su lugar.</p>
          </div>
        </div>

        <div class="adultos-roles">
          <div class="role-card role-card--padres">
            <div class="role-card__header">
              <span class="role-card__icon">👨‍👩‍👧</span>
              <div>
                <h2 class="role-card__title">Comité de Padres</h2>
                <p class="role-card__subtitle">El corazón organizativo del grupo</p>
              </div>
            </div>
            <div class="role-card__body">
              <p>El Comité de Padres es el órgano que sostiene el funcionamiento del grupo desde el lado logístico, económico y de gestión. Está integrado por familiares de los miembros activos.</p>
              <h4>¿Qué hace el Comité?</h4>
              <ul>
                <li v-for="t in comite" :key="t">{{ t }}</li>
              </ul>
              <div class="role-card__cta">
                <a href="/#contacto" class="btn-role">Quiero participar →</a>
              </div>
            </div>
          </div>

          <div class="role-card role-card--voluntarios">
            <div class="role-card__header">
              <span class="role-card__icon">🌿</span>
              <div>
                <h2 class="role-card__title">Voluntaria o Educador</h2>
                <p class="role-card__subtitle">Conducción directa de ramas</p>
              </div>
            </div>
            <div class="role-card__body">
              <p>Los educadores o dirigentes son adultos que conducen directamente las actividades de una rama. No es necesario haber sido scout o guía de chico/a para serlo de adulto.</p>
              <h4>¿Qué implica?</h4>
              <ul>
                <li v-for="t in voluntario" :key="t">{{ t }}</li>
              </ul>
              <div class="role-card__cta">
                <a href="/#contacto" class="btn-role btn-role--guia">Quiero ser dirigente →</a>
              </div>
            </div>
          </div>
        </div>

        <div class="adultos-faq">
          <h2 class="section-title" style="margin-bottom: 2rem;">Preguntas frecuentes</h2>
          <div class="faq-list">
            <div v-for="faq in faqs" :key="faq.q" class="faq-item">
              <button class="faq-btn" @click="toggle(faq.q)">
                <span>{{ faq.q }}</span>
                <span class="faq-arrow" :class="{ 'faq-arrow--open': open === faq.q }">↓</span>
              </button>
              <Transition name="faq">
                <p v-if="open === faq.q" class="faq-answer">{{ faq.a }}</p>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
function toggle(q) { open.value = open.value === q ? null : q }

const comite = [
  'Administración de fondos y cuotas',
  'Organización de eventos y colectas',
  'Mantenimiento de la sede',
  'Comunicación con las familias',
  'Apoyo en campamentos y salidas',
]

const voluntario = [
  'Conducción semanal de actividades de rama',
  'Planificación del programa anual',
  'Formación continua en el método',
  'Participación en eventos nacionales',
  'Acompañamiento en el crecimiento de los jóvenes',
]

const faqs = [
  { q: '¿Necesito haber sido scout/guía de chico/a?', a: 'No. Muchos de nuestros mejores dirigentes llegaron al movimiento de adultos. Lo importante es el compromiso y las ganas de acompañar a los jóvenes.' },
  { q: '¿Cuánto tiempo implica ser parte del Comité?', a: 'Depende del rol. Algunos roles demandan una reunión mensual y participación esporádica en eventos. Otros tienen mayor dedicación. Siempre se adapta a las posibilidades de cada persona.' },
  { q: '¿Hay formación para adultos?', a: 'Sí. Tanto Scouts de Argentina como la Asociación Guías Argentinas ofrecen cursos de formación para adultos, que combinan teoría, práctica y vivencias en la naturaleza.' },
  { q: '¿Puedo participar si no tengo hijos en el grupo?', a: 'Absolutamente. La comunidad da la bienvenida a adultos comprometidos independientemente de si tienen o no hijos en el grupo.' },
]
</script>

<style scoped>
.adultos-intro {
  margin-bottom: 3rem;
}

.intro-card {
  padding: 32px 40px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-accent-gold);
}

.intro-card p {
  font-size: 1.05rem;
  color: var(--color-white-dim);
  line-height: 1.8;
}

.adultos-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 5rem;
}

.role-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.role-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 28px 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.role-card__icon { font-size: 2.5rem; }

.role-card__title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
}

.role-card--padres .role-card__title { color: var(--color-scout-yellow); }
.role-card--voluntarios .role-card__title { color: var(--color-guia-accent); }

.role-card__subtitle {
  font-size: 0.82rem;
  color: var(--color-white-dim);
  margin-top: 2px;
}

.role-card__body {
  padding: 28px 32px;
}

.role-card__body > p {
  font-size: 0.95rem;
  color: var(--color-white-dim);
  line-height: 1.7;
  margin-bottom: 24px;
}

.role-card__body h4 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-white-dim);
  margin-bottom: 12px;
}

.role-card__body ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.role-card__body li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--color-white-dim);
}

.role-card__body li::before {
  content: '✓';
  color: var(--color-accent-gold);
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.btn-role {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  background: var(--color-scout-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: background var(--transition-fast);
}

.btn-role:hover { background: var(--color-scout-light); }

.btn-role--guia { background: var(--color-guia-primary); }
.btn-role--guia:hover { background: var(--color-guia-light); }

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.faq-item {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.faq-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-white);
  font-family: var(--font-body);
  gap: 16px;
  transition: background var(--transition-fast);
}

.faq-btn:hover { background: rgba(255,255,255,0.04); }

.faq-arrow {
  font-size: 1rem;
  transition: transform var(--transition-normal);
  color: var(--color-accent-gold);
  flex-shrink: 0;
}

.faq-arrow--open { transform: rotate(180deg); }

.faq-answer {
  padding: 0 24px 20px;
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.7;
}

.faq-enter-active, .faq-leave-active { transition: all 0.25s ease; }
.faq-enter-from, .faq-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 768px) {
  .adultos-roles { grid-template-columns: 1fr; }
}
</style>
