<template>
  <section id="ramas" class="section branches">
    <div class="container">
      <div v-reveal class="branches__heading">
        <div><span class="eyebrow">Cada etapa, una aventura</span><h2 class="section-title">Un lugar para<br><em>crecer a tu manera.</em></h2></div>
        <p class="section-subtitle">Las ramas son nuestros grupos por edad. Juegos, desafíos y experiencias pensadas para acompañar cada momento del crecimiento.</p>
      </div>
      <div v-reveal class="branches__toolbar">
        <div class="branch-filters" role="group" aria-label="Elegir movimiento">
          <button v-for="option in options" :key="option.id" :aria-pressed="movement === option.id" :class="{ 'is-active': movement === option.id }" @click="movement = option.id">{{ option.label }} <span>{{ option.count }}</span></button>
        </div>
        <span class="branches__hint">Encontrá tu próxima aventura <AppIcon name="down" :size="16" /></span>
      </div>
      <p class="sr-only" role="status">{{ movement === 'scout' ? '4 ramas Scout' : '5 ramas Guía' }}</p>
      <Transition name="branch-switch" mode="out-in">
        <div :key="movement" class="branches__grid">
          <RouterLink v-for="(rama, index) in ramas" :key="rama.id" :to="`/${movement === 'scout' ? 'scouts' : 'guias'}/ramas/${rama.id}`" class="branch-tile" :style="{ '--branch-color': rama.color }">
            <div class="branch-tile__top"><span class="branch-tile__number">0{{ index + 1 }}</span><AppIcon name="northeast" :size="19" /></div>
            <span class="branch-tile__icon" aria-hidden="true">{{ rama.icono }}</span>
            <h3>{{ rama.nombre }}</h3><span class="branch-tile__age">{{ rama.edad }}</span>
          </RouterLink>
        </div>
      </Transition>
      <RouterLink :to="movement === 'scout' ? '/scouts/ramas' : '/guias/ramas'" class="branches__more">Conocer todas las ramas {{ movement === 'scout' ? 'scout' : 'guía' }} <AppIcon /></RouterLink>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue'
import { SCOUT_RAMAS, GUIA_RAMAS } from '@/stores/appStore.js'
import AppIcon from '@/components/shared/AppIcon.vue'
const movement = ref('scout')
const options = [{ id: 'scout', label: 'Scouts', count: 4 }, { id: 'guia', label: 'Guías', count: 5 }]
const ramas = computed(() => movement.value === 'scout' ? SCOUT_RAMAS : GUIA_RAMAS)
</script>
<style scoped>
.branches { background: #eeece5; }
.branches__heading { display: flex; justify-content: space-between; align-items: end; gap: 40px; margin-bottom: 36px; }
.branches__heading .section-subtitle { max-width: 380px; }
.branches__toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 28px; }
.branch-filters { display: inline-flex; gap: 4px; padding: 5px; border: 1px solid #dad7d0; border-radius: 999px; }
.branch-filters button { display: flex; align-items: center; gap: 16px; min-height: 44px; padding: 10px 22px; border-radius: 999px; font-size: .875rem; font-weight: 600; transition: background var(--transition-fast), color var(--transition-fast); }
.branch-filters button.is-active { background: var(--color-primary); color: #fff; box-shadow: var(--shadow-sm); }
.branch-filters button:not(.is-active):hover { background: #e1dce6; }
.branch-filters span { opacity: .7; font-size: .75rem; }
.branches__hint { display: flex; align-items: center; gap: 12px; font-size: .75rem; color: var(--color-text-muted); }
.branches__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
.branch-tile { position: relative; padding: 24px; border-radius: 18px; background: var(--color-paper); border: 1px solid #dfdcd5; transition: transform var(--transition-normal), box-shadow var(--transition-normal); }
.branch-tile:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.branch-tile__top { display: flex; align-items: center; justify-content: space-between; color: var(--color-text-muted); }
.branch-tile__number { font-size: .7rem; font-variant-numeric: tabular-nums; letter-spacing: .06em; }
.branch-tile__icon { display: grid; place-items: center; width: 54px; height: 54px; margin-block: 26px 18px; border-radius: 50%; background: color-mix(in srgb, var(--branch-color) 10%, transparent); font-size: 1.5rem; }
.branch-tile h3 { font-family: var(--font-display); font-size: 1.35rem; letter-spacing: -.035em; margin-bottom: 5px; }
.branch-tile__age { font-size: .8rem; font-weight: 500; color: var(--branch-color); }
.branches__more { display: flex; align-items: center; justify-content: center; gap: 12px; width: fit-content; margin: 30px auto 0; padding: 10px 0; color: var(--color-primary); font-size: .875rem; font-weight: 600; }
.branches__more:hover { text-decoration: underline; text-underline-offset: 5px; }
.branch-switch-enter-active, .branch-switch-leave-active { transition: opacity 150ms var(--ease-out), transform 150ms var(--ease-out); }
.branch-switch-enter-from { opacity: 0; transform: translateY(6px); }
.branch-switch-leave-to { opacity: 0; transform: translateY(-4px); }
@media (max-width: 760px) { .branches__heading { display: block; } .branches__heading .section-subtitle { margin-top: 24px; max-width: 100%; } .branches__hint { display: none; } .branches__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .branch-tile { padding: 20px; } }
@media (max-width: 360px) { .branch-tile { padding: 16px; } .branch-tile h3 { font-size: 1.15rem; } }
</style>
