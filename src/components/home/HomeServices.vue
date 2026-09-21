<template>
  <section class="section services">
    <div class="container">
      <div v-reveal class="services__heading"><span class="eyebrow">De los valores a la acción</span><h2 class="section-title">Dejar el mundo<br><em>un poquito mejor.</em></h2><p class="section-subtitle">El servicio se construye en los pequeños gestos. Conocé las actividades que nos acercan a nuestra comunidad.</p></div>
      <div class="services__grid">
        <button v-for="(service, index) in servicios" :key="service.titulo" v-reveal="(index % 3) * 60" type="button" class="service-card" aria-haspopup="dialog" @click="active = service">
          <span class="service-card__icon"><AppIcon :name="service.icon" :size="25" /></span><span class="service-card__number">0{{ index + 1 }}</span>
          <h3>{{ service.titulo }}</h3><span class="service-card__more">Conocer la actividad <AppIcon name="northeast" :size="17" /></span>
        </button>
      </div>
    </div>
    <Teleport to="body"><ServiceDialog v-if="active" :service="active" @close="active = null" /></Teleport>
  </section>
</template>
<script setup>
import { defineAsyncComponent, ref } from 'vue'
import AppIcon from '@/components/shared/AppIcon.vue'
// Details load on first interaction, after the landing page is usable.
const ServiceDialog = defineAsyncComponent(() => import('./ServiceDialog.vue'))
const active = ref(null)
const servicios = [
  { titulo: 'Colecta solidaria de invierno', icon: 'heart', descripcion: 'Cada año organizamos una colecta de ropa de abrigo y alimentos no perecederos que se dona a instituciones de Ramos Mejía. Participan todas las ramas, desde Lobatos hasta el Clan.' },
  { titulo: 'Jornada de arreglo de sede', icon: 'home', descripcion: 'Familias, educadores y jóvenes se juntan un fin de semana al año para pintar, reparar y poner a punto la sede antes del inicio de actividades.' },
  { titulo: 'Servicio a la parroquia', icon: 'hands', descripcion: 'Como comunidad nacida en la capilla de San Pablo, colaboramos en distintas actividades parroquiales a lo largo del año.' },
  { titulo: 'Participación en Jamboree', icon: 'compass', descripcion: 'Rovers, Caminantes y Guías Mayores representan a San Pablo en jamborees y eventos nacionales, llevando el servicio más allá de la sede.' },
  { titulo: 'Apoyo escolar comunitario', icon: 'book', descripcion: 'Un espacio de acompañamiento escolar para chicos y chicas del barrio, sostenido por educadores y familias del grupo.' },
  { titulo: 'Campamento a beneficio', icon: 'tent', descripcion: 'Actividades y ferias organizadas para recaudar fondos destinados a mejoras de la sede y becas para quienes lo necesiten.' },
]
</script>
<style scoped>
.services__heading { max-width: 650px; margin-bottom: 40px; }
.services__heading p { margin-top: 24px; }
.services__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.service-card { position: relative; text-align: left; padding: 30px; background: var(--color-paper); border: 1px solid var(--color-border); border-radius: 20px; transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal); }
.service-card:hover { transform: translateY(-4px); border-color: #bcaacb; box-shadow: var(--shadow-md); }
.service-card__icon { display: grid; place-items: center; width: 54px; height: 54px; border-radius: 16px; color: var(--color-primary); background: #eee8f4; margin-bottom: 30px; }
.service-card:nth-child(3n+2) .service-card__icon { background: #e9eee5; color: #47634d; }
.service-card:nth-child(3n+3) .service-card__icon { background: #f7edda; color: #8a621d; }
.service-card__number { position: absolute; top: 32px; right: 28px; color: var(--color-text-muted); font-size: .7rem; }
.service-card h3 { font: 700 1.4rem/1.25 var(--font-display); letter-spacing: -.025em; min-height: 3.5rem; margin-bottom: 30px; }
.service-card__more { display: flex; align-items: center; justify-content: space-between; padding-top: 18px; border-top: 1px solid var(--color-border); color: var(--color-text-muted); font-size: .75rem; }
@media (max-width: 850px) { .services__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 500px) { .services__grid { grid-template-columns: 1fr; } .service-card { padding: 24px; } .service-card__icon { margin-bottom: 20px; } .service-card h3 { min-height: 0; margin-bottom: 20px; } }
</style>
