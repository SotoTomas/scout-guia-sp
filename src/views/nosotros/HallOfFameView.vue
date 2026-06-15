<template>
  <div class="hall" style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <div class="hall__header">
          <span class="tag hall__tag">Miembros Históricos</span>
          <h1 class="section-title">Quienes construyeron<br><em>esta comunidad</em></h1>
          <p class="section-subtitle">Personas que con su dedicación, liderazgo y amor dejaron una huella imborrable en la Comunidad Scout-Guía San Pablo.</p>
        </div>

        <!-- Filtros -->
        <div class="hall__filters">
          <button
            v-for="f in filters"
            :key="f.value"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeFilter === f.value }"
            @click="activeFilter = f.value"
          >{{ f.label }}</button>
        </div>

        <!-- Grid -->
        <div class="hall__grid">
          <div
            v-for="miembro in filteredMiembros"
            :key="miembro.id"
            class="miembro-card"
          >
            <div class="miembro-card__avatar" :style="{ background: miembro.color }">
              {{ miembro.initials }}
            </div>
            <div class="miembro-card__info">
              <h3 class="miembro-card__name">{{ miembro.nombre }}</h3>
              <p class="miembro-card__role">{{ miembro.rol }}</p>
              <p class="miembro-card__period">{{ miembro.periodo }}</p>
              <p class="miembro-card__bio">{{ miembro.bio }}</p>
              <div class="miembro-card__badges">
                <span class="badge" :class="`badge--${miembro.mov}`">{{ miembro.mov === 'scout' ? 'Scout' : miembro.mov === 'guia' ? 'Guía' : 'Ambos' }}</span>
              </div>
            </div>
          </div>
        </div>

        <p class="hall__cta-text">¿Querés nominar a alguien? <a href="/#contacto">Escribinos</a>.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('todos')

const filters = [
  { value: 'todos',  label: 'Todos' },
  { value: 'scout',  label: 'Scouts' },
  { value: 'guia',   label: 'Guías' },
  { value: 'ambos',  label: 'Ambos movimientos' },
]

const miembros = [
  { id: 1, nombre: 'Carlos Rodríguez', rol: 'Jefe de Grupo Fundador', periodo: '1981 – 1995', bio: 'Fundó la comunidad y sentó las bases de convivencia entre los dos movimientos. Su visión hizo posible este espacio único.', initials: 'CR', color: 'linear-gradient(135deg,#1b4d8e,#2a6cc4)', mov: 'ambos' },
  { id: 2, nombre: 'Marta González', rol: 'Jefa de Grupo', periodo: '1995 – 2008', bio: 'Mantuvo viva la llama del grupo en años difíciles y expandió la participación de las familias en la comunidad.', initials: 'MG', color: 'linear-gradient(135deg,#6a1b9a,#9c27b0)', mov: 'guia' },
  { id: 3, nombre: 'Pablo Sánchez', rol: 'Dirigente de Rovers', periodo: '2000 – 2015', bio: 'Formó a decenas de jóvenes en liderazgo y servicio. Organizó los campamentos más recordados del grupo.', initials: 'PS', color: 'linear-gradient(135deg,#1b4d8e,#2e7d32)', mov: 'scout' },
  { id: 4, nombre: 'Ana Martínez', rol: 'Directora de Guías Mayores', periodo: '2008 – 2020', bio: 'Revitalizó el programa de Guías Mayores y construyó puentes con otras comunidades del país.', initials: 'AM', color: 'linear-gradient(135deg,#c2185b,#f06292)', mov: 'guia' },
  { id: 5, nombre: 'Roberto Pérez', rol: 'Presidente Comité de Padres', periodo: '2005 – 2018', bio: 'Lideró la construcción y renovación de la sede. Su trabajo permitió que el grupo tuviera un hogar propio.', initials: 'RP', color: 'linear-gradient(135deg,#ff6f00,#ffa726)', mov: 'ambos' },
  { id: 6, nombre: 'Sofía López', rol: 'Dirigente de Caravanas', periodo: '2012 – presente', bio: 'Transformó el programa de Caravanas con metodologías innovadoras y una dedicación incomparable.', initials: 'SL', color: 'linear-gradient(135deg,#6a1b9a,#e91e63)', mov: 'guia' },
]

const filteredMiembros = computed(() =>
  activeFilter.value === 'todos'
    ? miembros
    : miembros.filter(m => m.mov === activeFilter.value)
)
</script>

<style scoped>
.hall__header {
  margin-bottom: 3rem;
  max-width: 680px;
}

.hall__tag {
  background: rgba(232,197,71,0.1);
  color: var(--color-accent-gold);
  margin-bottom: 16px;
}

.section-title em { font-style: italic; color: var(--color-accent-gold); }

.hall__header .section-title { margin-bottom: 16px; }

.hall__filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--color-surface);
  color: var(--color-white-dim);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all var(--transition-fast);
}

.filter-btn:hover,
.filter-btn--active {
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-color: transparent;
}

.hall__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  margin-bottom: 3rem;
}

.miembro-card {
  display: flex;
  gap: 20px;
  padding: 28px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.miembro-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.miembro-card__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.miembro-card__name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.miembro-card__role {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent-gold);
  margin-bottom: 2px;
}

.miembro-card__period {
  font-size: 0.75rem;
  color: var(--color-white-dim);
  margin-bottom: 10px;
}

.miembro-card__bio {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  line-height: 1.6;
  margin-bottom: 12px;
}

.badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge--scout { background: rgba(27,77,142,0.3); color: var(--color-scout-yellow); }
.badge--guia  { background: rgba(106,27,154,0.3); color: var(--color-guia-accent); }
.badge--ambos { background: rgba(232,197,71,0.15); color: var(--color-accent-gold); }

.hall__cta-text {
  text-align: center;
  font-size: 0.95rem;
  color: var(--color-white-dim);
}

.hall__cta-text a {
  color: var(--color-accent-gold);
  font-weight: 600;
}

@media (max-width: 600px) {
  .hall__grid { grid-template-columns: 1fr; }
  .miembro-card { flex-direction: column; }
}
</style>
