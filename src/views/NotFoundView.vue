<template>
  <div class="not-found">
    <div class="not-found__content">
      <div class="not-found__code">404</div>
      <h1 class="not-found__title">Página no encontrada</h1>
      <p class="not-found__desc">Parece que esta página se perdió en el monte. Te ayudamos a volver al campamento base.</p>
      <RouterLink to="/" class="not-found__btn">← Volver al inicio</RouterLink>
    </div>
    <div class="not-found__orbs">
      <div class="orb orb--1"></div>
      <div class="orb orb--2"></div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.not-found__content {
  position: relative;
  z-index: 1;
  padding: 40px;
}

.not-found__code {
  font-family: var(--font-display);
  font-size: clamp(6rem, 18vw, 12rem);
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, var(--color-scout-yellow), var(--color-guia-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  margin-bottom: -20px;
}

.not-found__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
  margin-bottom: 16px;
}

.not-found__desc {
  font-size: 1rem;
  color: var(--color-white-dim);
  max-width: 420px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.not-found__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-radius: var(--radius-md);
  font-weight: 700;
  transition: background var(--transition-fast);
}

.not-found__btn:hover { background: #f0d060; }

.not-found__orbs { position: absolute; inset: 0; pointer-events: none; }

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
}

.orb--1 {
  width: 400px; height: 400px;
  background: var(--color-scout-primary);
  top: -100px; left: -100px;
}

.orb--2 {
  width: 300px; height: 300px;
  background: var(--color-guia-primary);
  bottom: -60px; right: -60px;
}
</style>
