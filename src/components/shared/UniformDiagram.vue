<template>
  <div class="uniform-diagram">
    <figure class="uniform-diagram__figure">
      <svg viewBox="0 0 320 290" width="320" height="290" role="img" aria-label="Ilustración de una camisa de uniforme con pañuelo">
        <path d="M113 34 80 46 31 102 76 140 101 112V263H219V112L244 140 289 102 240 46 207 34" fill="#e4eced" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="m113 34 47 41 47-41-17-12h-60Z" fill="#fff" stroke="currentColor" stroke-width="2" />
        <path d="m115 31 45 44-20 56-30-66M205 31l-45 44 20 56 30-66" fill="var(--movement-color)" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="m160 75 7 32-7 56-7-56Z" fill="#c49755" />
        <path d="M117 146h30v28h-30zM175 146h30v28h-30z" fill="none" stroke="currentColor" stroke-width="1.5" />
        <path d="M160 170v78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 12" />
        <circle cx="190" cy="136" r="8" fill="var(--movement-color)" />
        <path d="M116 131h30" stroke="currentColor" stroke-width="5" />
      </svg>
      <figcaption>El uniforme, nuestra identidad compartida.</figcaption>
    </figure>
    <div class="uniform-diagram__legend">
      <span class="eyebrow">Ubicación de insignias</span>
      <dl>
        <div v-for="(insignia, index) in insignias" :key="insignia.nombre" class="uniform-diagram__item">
          <span class="uniform-diagram__number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <div><dt>{{ insignia.nombre }}</dt><dd>{{ insignia.ubicacion }}</dd></div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
defineProps({ insignias: { type: Array, required: true } })
</script>

<style scoped>
.uniform-diagram { border: 1px solid var(--color-border); border-radius: 20px; overflow: hidden; background: var(--color-paper); }
.uniform-diagram__figure { display: grid; justify-items: center; padding: 24px; margin: 0; background: var(--movement-tint); color: var(--movement-color); }
.uniform-diagram__figure svg { max-width: 100%; height: auto; }
.uniform-diagram__figure figcaption { margin-top: 4px; font-size: .8rem; text-align: center; }
.uniform-diagram__legend { padding: 28px; }
.uniform-diagram__legend > .eyebrow { display: block; margin-bottom: 22px; color: var(--movement-color); }
.uniform-diagram__legend dl { display: grid; gap: 20px; margin: 0; }
.uniform-diagram__item { display: flex; align-items: flex-start; gap: 16px; }
.uniform-diagram__number { color: var(--movement-color); font-size: .72rem; font-weight: 700; line-height: 1.8; font-variant-numeric: tabular-nums; }
.uniform-diagram__item dt { margin-bottom: 4px; font-size: .9rem; font-weight: 700; }
.uniform-diagram__item dd { margin: 0; color: var(--color-text-muted); font-size: .82rem; line-height: 1.6; }
</style>
