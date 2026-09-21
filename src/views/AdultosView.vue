<template>
  <div class="adultos">
    <section class="section">
      <div class="container">
        <header class="adultos__header" v-reveal>
          <div>
            <span class="eyebrow">Adultos en el movimiento</span>
            <h1 class="section-title">La aventura también<br>necesita <em>de vos.</em></h1>
          </div>
          <p class="section-subtitle">Sin los adultos, el movimiento no existe. Hay muchas formas de participar, independientemente de si tu hijo o hija es parte del grupo.</p>
        </header>
        <div class="adultos__intro" v-reveal>
          <span class="adultos__intro-mark" aria-hidden="true">↗</span>
          <p>Los adultos en el movimiento scout-guía cumplen roles fundamentales: desde la conducción directa de ramas hasta el apoyo logístico, administrativo y familiar. <strong>Cada rol tiene su valor y su lugar.</strong></p>
        </div>
        <div class="adultos__roles">
          <article class="role-card" v-reveal>
            <div class="role-card__header">
              <span class="role-card__number" aria-hidden="true">01</span>
              <span class="eyebrow">Acompañar desde la familia</span>
              <h2>Comité de Padres</h2>
              <p>El corazón organizativo del grupo</p>
            </div>
            <div class="role-card__body">
              <p>El Comité de Padres es el órgano que sostiene el funcionamiento del grupo desde el lado logístico, económico y de gestión. Está integrado por familiares de los miembros activos.</p>
              <h3>¿Qué hace el Comité?</h3>
              <ul><li v-for="tarea in comite" :key="tarea">{{ tarea }}</li></ul>
              <RouterLink to="/#contacto" class="btn btn-secondary">Quiero participar <span aria-hidden="true">↗</span></RouterLink>
            </div>
          </article>
          <article class="role-card role-card--educadores" v-reveal="100">
            <div class="role-card__header">
              <span class="role-card__number" aria-hidden="true">02</span>
              <span class="eyebrow">Acompañar el crecimiento</span>
              <h2>Voluntaria o Educador</h2>
              <p>Conducción directa de ramas</p>
            </div>
            <div class="role-card__body">
              <p>Los educadores o dirigentes son adultos que conducen directamente las actividades de una rama. No es necesario haber sido scout o guía de chico/a para serlo de adulto.</p>
              <h3>¿Qué implica?</h3>
              <ul><li v-for="tarea in voluntario" :key="tarea">{{ tarea }}</li></ul>
              <RouterLink to="/#contacto" class="btn btn-primary">Quiero ser dirigente <span aria-hidden="true">↗</span></RouterLink>
            </div>
          </article>
        </div>
        <section class="adultos__faq" aria-labelledby="faq-heading" v-reveal>
          <div class="adultos__faq-heading">
            <span class="eyebrow">Antes de dar el primer paso</span>
            <h2 id="faq-heading" class="section-title">Todas las ganas.<br><em>Menos dudas.</em></h2>
          </div>
          <div class="faq-list">
            <article v-for="(faq, index) in faqs" :key="faq.q" class="faq-item">
              <h3>
                <button :id="'faq-button-' + index" class="faq-btn" :aria-expanded="open === index" :aria-controls="'faq-answer-' + index" @click="toggle(index)">
                  <span>{{ faq.q }}</span>
                  <span class="faq-arrow" :class="{ 'faq-arrow--open': open === index }" aria-hidden="true">+</span>
                </button>
              </h3>
              <Transition name="faq">
                <div v-show="open === index" :id="'faq-answer-' + index" role="region" :aria-labelledby="'faq-button-' + index" class="faq-answer"><p>{{ faq.a }}</p></div>
              </Transition>
            </article>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
function toggle(index) { open.value = open.value === index ? null : index }

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
.adultos { padding-top: var(--header-height, 80px); }
.adultos__header { display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; align-items: end; margin-bottom: 3rem; }
.adultos__header .eyebrow, .adultos__faq-heading .eyebrow { margin-bottom: 1.25rem; }
.section-title em { color: var(--color-primary); font-weight: 500; }
.adultos__intro { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; padding: 1.75rem 2rem; border-block: 1px solid var(--color-border); }
.adultos__intro p { max-width: 850px; color: var(--color-text-muted); line-height: 1.8; }
.adultos__intro strong { color: var(--color-text); font-weight: 600; }
.adultos__intro-mark { font-size: 2.5rem; color: var(--color-primary); }
.adultos__roles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.role-card { border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-paper); }
.role-card__header { position: relative; padding: 2rem; border-bottom: 1px solid var(--color-border); background: #eeeee5; }
.role-card--educadores .role-card__header { background: #eee7f3; }
.role-card__number { position: absolute; right: 1.5rem; top: 1rem; font-family: var(--font-display); font-size: 3rem; color: rgb(41 37 53 / 12%); }
.role-card__header .eyebrow { position: relative; font-size: .67rem; }
.role-card__header h2 { margin-top: 1.5rem; font-family: var(--font-display); font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 500; }
.role-card__header p { color: var(--color-text-muted); margin-top: .4rem; font-size: .88rem; }
.role-card__body { padding: 2rem; }
.role-card__body > p { color: var(--color-text-muted); font-size: .95rem; line-height: 1.8; }
.role-card__body h3 { font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; margin: 1.75rem 0 1rem; }
.role-card__body ul { list-style: none; display: grid; gap: .7rem; margin-bottom: 2rem; }
.role-card__body li { display: flex; align-items: baseline; gap: .65rem; font-size: .9rem; color: var(--color-text-muted); }
.role-card__body li::before { content: '↗'; color: var(--color-primary); }
.adultos__faq { display: grid; grid-template-columns: 1fr 1.3fr; gap: 4rem; margin-top: 6rem; }
.adultos__faq .section-title { font-size: clamp(2rem, 4vw, 3rem); }
.faq-list { border-top: 1px solid var(--color-border); }
.faq-item { border-bottom: 1px solid var(--color-border); }
.faq-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; padding: 1.4rem .25rem; text-align: left; font-size: .95rem; font-weight: 600; color: var(--color-text); }
.faq-btn:hover { color: var(--color-primary); }
.faq-arrow { color: var(--color-primary); font-size: 1.5rem; font-weight: 400; transition: transform 220ms var(--ease-out); }
.faq-arrow--open { transform: rotate(45deg); }
.faq-answer { padding: 0 2.5rem 1.5rem .25rem; font-size: .9rem; color: var(--color-text-muted); line-height: 1.8; }
.faq-enter-active, .faq-leave-active { transition: opacity 200ms var(--ease-out), transform 200ms var(--ease-out); }
.faq-enter-from, .faq-leave-to { opacity: 0; transform: translateY(-6px); }
@media (max-width: 800px) {
  .adultos__header, .adultos__faq { grid-template-columns: 1fr; gap: 1.75rem; }
  .adultos__roles { grid-template-columns: 1fr; }
  .adultos__faq { margin-top: 4rem; }
}
@media (max-width: 480px) {
  .adultos__intro { padding: 1.25rem 0; gap: 1rem; align-items: start; }
  .role-card__header, .role-card__body { padding: 1.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  .faq-enter-active, .faq-leave-active, .faq-arrow { transition: none; }
  .faq-enter-from, .faq-leave-to { transform: none; }
}
</style>
