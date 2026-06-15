<template>
  <div class="guias-layout">
    <div class="guias-subnav">
      <div class="container">
        <div class="guias-subnav__brand">
          <span class="guias-subnav__dot"></span>
          <span class="guias-subnav__label">Asociación Guías Argentinas</span>
        </div>
        <nav class="guias-subnav__links">
          <RouterLink to="/guias" class="subnav-link" :class="{ active: $route.name === 'guias' }">Inicio</RouterLink>
          <RouterLink to="/guias/ramas" class="subnav-link">Ramas</RouterLink>
          <RouterLink to="/guias/uniforme" class="subnav-link">Uniforme</RouterLink>
          <RouterLink to="/guias/promesa-y-ley" class="subnav-link">Promesa y Ley</RouterLink>
          <RouterLink to="/guias/formularios" class="subnav-link">Formularios</RouterLink>
        </nav>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.guias-subnav {
  position: sticky;
  top: 72px;
  z-index: 50;
  background: rgba(106,27,154,0.15);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(106,27,154,0.3);
}

.guias-subnav .container {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-wrap: wrap;
}

.guias-subnav__brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.guias-subnav__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-guia-accent);
}

.guias-subnav__label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-guia-accent);
}

.guias-subnav__links {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.subnav-link {
  padding: 7px 16px;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white-dim);
  transition: all var(--transition-fast);
}

.subnav-link:hover,
.subnav-link.router-link-active,
.subnav-link.active {
  color: var(--color-guia-accent);
  background: rgba(244,143,177,0.1);
}

.subnav-link--cta {
  background: var(--color-guia-primary);
  color: var(--color-white) !important;
}

.subnav-link--cta:hover { background: var(--color-guia-light); }
</style>
