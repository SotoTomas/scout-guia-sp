<template>
  <RouterLink :to="linkTo" class="branch-card" :style="{ '--rama-color': rama.color, '--rama-text': rama.colorText }">
    <div class="branch-card__bg"></div>
    <div class="branch-card__icon">{{ rama.icono }}</div>
    <div class="branch-card__content">
      <h3 class="branch-card__name">{{ rama.nombre }}</h3>
      <p class="branch-card__age">{{ rama.edad }}</p>
      <p class="branch-card__desc">{{ rama.descripcion }}</p>
    </div>
    <div class="branch-card__arrow">→</div>
    <div class="branch-card__corner"></div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  rama: { type: Object, required: true },
  basePath: { type: String, required: true }
})

const linkTo = `${props.basePath}/${props.rama.id}`
</script>

<style scoped>
.branch-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  cursor: pointer;
}

.branch-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--rama-color, #fff) inset;
}

.branch-card__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--rama-color, #333) 0%, transparent 60%);
  opacity: 0.08;
  transition: opacity var(--transition-normal);
}

.branch-card:hover .branch-card__bg { opacity: 0.15; }

.branch-card__icon {
  font-size: 2.5rem;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.branch-card__content {
  position: relative;
  z-index: 1;
  flex: 1;
}

.branch-card__name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 4px;
}

.branch-card__age {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--rama-color);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.branch-card__desc {
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.6;
}

.branch-card__arrow {
  position: relative;
  z-index: 1;
  font-size: 1.2rem;
  color: var(--rama-color);
  transition: transform var(--transition-fast);
  align-self: flex-end;
}

.branch-card:hover .branch-card__arrow { transform: translateX(4px); }

.branch-card__corner {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--rama-color);
  opacity: 0.07;
  transition: transform var(--transition-normal);
}

.branch-card:hover .branch-card__corner { transform: scale(1.4); }
</style>
