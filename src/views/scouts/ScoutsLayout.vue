<template>
  <div class="scouts-layout">
    <div class="scouts-subnav">
      <div class="container">
        <div class="scouts-subnav__brand">
          <span class="scouts-subnav__dot"></span>
          <span class="scouts-subnav__label">Scouts de Argentina</span>
        </div>
        <nav class="scouts-subnav__links">
          <RouterLink to="/scouts" class="subnav-link" :class="{ active: $route.name === 'scouts' }">Inicio</RouterLink>
          <RouterLink to="/scouts/ramas" class="subnav-link">Ramas</RouterLink>
          <RouterLink to="/scouts/uniforme" class="subnav-link">Uniforme</RouterLink>
          <RouterLink to="/scouts/promesa-y-ley" class="subnav-link">Promesa y Ley</RouterLink>
          <RouterLink to="/scouts/formularios" class="subnav-link">Formularios</RouterLink>
        </nav>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.scouts-subnav {
  position: sticky;
  top: 72px;
  z-index: 50;
  background: rgba(27,77,142,0.15);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(27,77,142,0.3);
}

.scouts-subnav .container {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-wrap: wrap;
}

.scouts-subnav__brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.scouts-subnav__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-scout-yellow);
}

.scouts-subnav__label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-scout-yellow);
}

.scouts-subnav__links {
  display: flex;
  gap: 4px;
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
  color: var(--color-scout-yellow);
  background: rgba(251,192,45,0.1);
}
</style>
