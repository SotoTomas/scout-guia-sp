<template>
  <div class="nosotros">
    <div class="nosotros__subnav">
      <div class="container">
        <RouterLink to="/nosotros/historia" class="subnav-link">Historia</RouterLink>
        <RouterLink to="/nosotros/hall-of-fame" class="subnav-link">Miembros Históricos</RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.nosotros__subnav {
  position: sticky;
  top: 72px;
  z-index: 50;
  background: rgba(15,14,26,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.nosotros__subnav .container {
  display: flex;
  gap: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.subnav-link {
  padding: 8px 18px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white-dim);
  transition: all var(--transition-fast);
}

.subnav-link:hover { color: var(--color-white); background: rgba(255,255,255,0.06); }
.subnav-link.router-link-active { color: var(--color-accent-gold); background: rgba(232,197,71,0.1); }
</style>
