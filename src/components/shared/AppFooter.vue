<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="logo-mark__scout">S</span>
          <span class="logo-mark__divider"> · </span>
          <span class="logo-mark__guia">G</span>
        </div>
        <p class="footer__tagline">Comunidad Scout-Guía San Pablo</p>
        <p class="footer__since">Desde 1981</p>
        <div class="footer__socials">
          <a href="#" aria-label="Instagram" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="WhatsApp" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__links">
        <div class="footer__col">
          <h4 class="footer__col-title">Comunidad</h4>
          <RouterLink to="/" class="footer__link">Inicio</RouterLink>
          <RouterLink to="/nosotros/historia" class="footer__link">Nuestra Historia</RouterLink>
          <RouterLink to="/nosotros/hall-of-fame" class="footer__link">Miembros Históricos</RouterLink>
          <RouterLink to="/guias/adultos" class="footer__link">Adultos</RouterLink>
          <RouterLink to="/guias/inscripciones" class="footer__link">Inscripciones</RouterLink>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title footer__col-title--scout">Scouts de Argentina</h4>
          <RouterLink to="/scouts/ramas" class="footer__link">Ramas</RouterLink>
          <RouterLink to="/scouts/uniforme" class="footer__link">Uniforme</RouterLink>
          <RouterLink to="/scouts/promesa-y-ley" class="footer__link">Promesa y Ley</RouterLink>
          <RouterLink to="/scouts/formularios" class="footer__link">Formularios</RouterLink>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title footer__col-title--guia">Guías Argentinas</h4>
          <RouterLink to="/guias/ramas" class="footer__link">Ramas</RouterLink>
          <RouterLink to="/guias/uniforme" class="footer__link">Uniforme</RouterLink>
          <RouterLink to="/guias/promesa-y-ley" class="footer__link">Promesa y Ley</RouterLink>
          <RouterLink to="/guias/formularios" class="footer__link">Formularios</RouterLink>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Contacto</h4>
          <p class="footer__info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Fray Cayetano Rodríguez 100, Ramos Mejía
          </p>
          <a href="mailto:comunidad@scoutguiasp.org.ar" class="footer__link">comunidad@scoutguiasp.org.ar</a>
          <p class="footer__info">Buenos Aires, Argentina</p>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} Comunidad Scout-Guía San Pablo. Con ♥ por y para la comunidad.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #080710;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: auto;
}

.footer__inner {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.footer__logo {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  border: 2px solid var(--color-accent-gold);
  border-radius: 8px;
  padding: 4px 14px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
}

.logo-mark__scout { color: var(--color-scout-light); }
.logo-mark__divider { color: var(--color-accent-gold); }
.logo-mark__guia { color: var(--color-guia-light); }

.footer__tagline {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-white);
  margin-bottom: 4px;
}

.footer__since {
  font-size: 0.8rem;
  color: var(--color-accent-gold);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
}

.footer__socials {
  display: flex;
  gap: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255,255,255,0.07);
  color: var(--color-white-dim);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.social-link:hover {
  background: rgba(255,255,255,0.14);
  color: var(--color-white);
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-white-dim);
  margin-bottom: 4px;
}

.footer__col-title--scout { color: var(--color-scout-yellow); }
.footer__col-title--guia  { color: var(--color-guia-accent); }

.footer__link {
  font-size: 0.875rem;
  color: rgba(240,235,224,0.5);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-white);
}

.footer__info {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.875rem;
  color: rgba(240,235,224,0.5);
  line-height: 1.5;
}

.footer__info svg {
  flex-shrink: 0;
  margin-top: 3px;
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 16px 0;
  font-size: 0.8rem;
  color: rgba(240,235,224,0.3);
  text-align: center;
}

@media (max-width: 1024px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer__links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer__links {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
