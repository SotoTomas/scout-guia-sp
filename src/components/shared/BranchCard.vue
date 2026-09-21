<template>
  <RouterLink :to="linkTo" class="branch-card" :style="{ '--rama-color': rama.color }">
    <div class="branch-card__top">
      <span class="branch-card__icon" aria-hidden="true">{{ rama.icono }}</span>
      <span v-if="stageNumber" class="branch-card__number" aria-hidden="true">{{ stageNumber }}</span>
    </div>
    <div class="branch-card__content">
      <p class="branch-card__age">{{ rama.edad }}</p>
      <h3 class="branch-card__name">{{ rama.nombre }}</h3>
      <p class="branch-card__desc">{{ rama.descripcion }}</p>
    </div>
    <div class="branch-card__bottom">
      <span>Conocé la rama</span>
      <span class="branch-card__arrow" aria-hidden="true">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { GUIA_RAMAS, SCOUT_RAMAS } from '@/stores/appStore.js'

const props = defineProps({
  rama: { type: Object, required: true },
  basePath: { type: String, required: true }
})
const linkTo = computed(() => `${props.basePath}/${props.rama.id}`)
const stageNumber = computed(() => {
  const collection = props.basePath.startsWith('/guias') ? GUIA_RAMAS : SCOUT_RAMAS
  const index = collection.findIndex((rama) => rama.id === props.rama.id)
  return index < 0 ? '' : String(index + 1).padStart(2, '0')
})
</script>

<style scoped>
.branch-card { position: relative; display: flex; flex-direction: column; gap: 22px; padding: 28px; overflow: hidden; border: 1px solid var(--color-border); border-radius: 16px; background: #fffefa; box-shadow: 0 2px 3px rgb(41 37 53 / 2%); transition: transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out), border-color 240ms var(--ease-out); }
.branch-card::before { content: ''; position: absolute; inset: 0 0 auto; height: 3px; background: var(--rama-color); opacity: .75; }
.branch-card:hover { transform: translateY(-5px); border-color: color-mix(in srgb, var(--rama-color) 35%, transparent); box-shadow: 0 4px 8px rgb(41 37 53 / 3%), 0 18px 36px rgb(41 37 53 / 7%); }
.branch-card:active { transform: translateY(-1px) scale(.99); }
.branch-card__top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.branch-card__icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 14px; background: color-mix(in srgb, var(--rama-color) 8%, #fffefa); font-size: 1.7rem; }
.branch-card__number { font-family: var(--font-display); color: var(--color-text-muted); font-size: 1.05rem; font-style: italic; }
.branch-card__content { flex: 1; }
.branch-card__age { margin-bottom: 7px; color: var(--rama-color); font-size: .67rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.branch-card__name { margin-bottom: 12px; color: var(--color-text); font-family: var(--font-display); font-size: 1.55rem; line-height: 1.15; font-weight: 500; letter-spacing: -.025em; }
.branch-card__desc { color: var(--color-text-muted); font-size: .85rem; line-height: 1.75; }
.branch-card__bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 17px; border-top: 1px solid var(--color-border); color: var(--color-text); font-size: .72rem; font-weight: 600; }
.branch-card__arrow { display: grid; place-items: center; width: 32px; height: 32px; color: var(--rama-color); border-radius: 50%; background: color-mix(in srgb, var(--rama-color) 7%, #fffefa); transition: transform 220ms var(--ease-out); }
.branch-card:hover .branch-card__arrow { transform: translateX(3px); }
@media (max-width: 600px) { .branch-card { padding: 24px; gap: 20px; } }
</style>
