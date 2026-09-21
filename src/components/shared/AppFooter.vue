<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <RouterLink to="/" class="footer__logo" aria-label="Comunidad Scout-Guía San Pablo, inicio">
          <img src="@/assets/brand/community-white.webp" alt="" width="57" height="64" loading="lazy" decoding="async" />
          <span>San Pablo<span class="footer__brand-dot">.</span></span>
        </RouterLink>
        <p class="footer__tagline">Comunidad Scout-Guía.<br />Un lugar para crecer juntos.</p>
        <p class="footer__since">Ramos Mejía · Desde 1981</p>
        <div class="footer__socials">
          <a href="https://www.instagram.com/comunidad.sanpablo/" aria-label="Instagram de la comunidad" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" />
            </svg>
          </a>
          <a href="https://www.facebook.com/scoutguiasanpablo" aria-label="Facebook de la comunidad" class="social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <RouterLink :to="{ path: '/', hash: '#contacto' }" class="footer__contact-link">Hablemos <span aria-hidden="true">↗</span></RouterLink>
        </div>
      </div>

      <div class="footer__links">
        <nav class="footer__col" aria-label="Comunidad">
          <h2 class="footer__col-title">Comunidad</h2>
          <RouterLink to="/" class="footer__link">Inicio</RouterLink>
          <RouterLink to="/nosotros/historia" class="footer__link">Nuestra historia</RouterLink>
          <RouterLink to="/adultos" class="footer__link">Adultos</RouterLink>
          <a href="https://www.gruposanpablo.com.ar/preinscripcion" target="_blank" rel="noreferrer" class="footer__link">Inscripciones</a>
        </nav>

        <nav class="footer__col" aria-label="Scouts de Argentina">
          <h2 class="footer__col-title">Scouts</h2>
          <RouterLink to="/scouts/ramas" class="footer__link">Ramas</RouterLink>
          <RouterLink to="/scouts/uniforme" class="footer__link">Uniforme</RouterLink>
          <RouterLink to="/scouts/promesa-y-ley" class="footer__link">Promesa y Ley</RouterLink>
          <RouterLink to="/scouts/formularios" class="footer__link">Formularios</RouterLink>
        </nav>

        <nav class="footer__col" aria-label="Guías Argentinas">
          <h2 class="footer__col-title">Guías</h2>
          <RouterLink to="/guias/ramas" class="footer__link">Ramas</RouterLink>
          <RouterLink to="/guias/uniforme" class="footer__link">Uniforme</RouterLink>
          <RouterLink to="/guias/promesa-y-ley" class="footer__link">Promesa y Ley</RouterLink>
          <RouterLink to="/guias/formularios" class="footer__link">Formularios</RouterLink>
        </nav>

        <div class="footer__col footer__col--contact">
          <h2 class="footer__col-title">Encontranos</h2>
          <p class="footer__info">Fray Cayetano Rodríguez 100,<br />Ramos Mejía</p>
          <p class="footer__info">Buenos Aires, Argentina</p>
          <a href="mailto:comunidad@scoutguiasp.org.ar" class="footer__link footer__email">comunidad@scoutguiasp.org.ar</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>© {{ new Date().getFullYear() }} Comunidad Scout-Guía San Pablo.</p>
      <p>Con <span aria-label="amor">♥</span> por y para la comunidad.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { margin-top: auto; color: #f7f5ef; background: #292535; border-top: 1px solid rgb(255 255 255 / 8%); }
.footer__inner { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 64px; padding-top: 64px; padding-bottom: 56px; }
.footer__logo { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 18px; border-radius: 8px; }
.footer__logo img { width: 57px; height: 64px; object-fit: contain; }
.footer__logo > span { font-family: var(--font-display); font-size: 1.9rem; font-weight: 500; letter-spacing: -.04em; color: #f7f5ef; }
.footer__brand-dot { color: #b7a1c9; }
.footer__tagline { max-width: 260px; color: #ddd8e4; font-size: .85rem; line-height: 1.75; }
.footer__since { margin-top: 12px; color: #b9b1c4; font-size: .67rem; letter-spacing: .05em; }
.footer__socials { display: flex; align-items: center; gap: 8px; margin-top: 24px; }
.social-link { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; border: 1px solid rgb(255 255 255 / 15%); border-radius: 50%; color: #f7f5ef; transition: transform 200ms var(--ease-out), background-color 200ms var(--ease-out); }
.social-link:hover { background: rgb(255 255 255 / 10%); transform: translateY(-3px); }
.social-link:active { transform: scale(.96); }
.footer__contact-link { display: inline-flex; align-items: center; gap: 15px; min-height: 44px; margin-left: 12px; color: #e4d7ed; font-size: .75rem; }
.footer__contact-link:hover { color: #fff; }
.footer__links { display: grid; grid-template-columns: 1fr .8fr .8fr 1.5fr; gap: 28px; padding-top: 8px; }
.footer__col { display: flex; flex-direction: column; align-items: flex-start; gap: 11px; min-width: 0; }
.footer__col-title { margin-bottom: 10px; font-family: var(--font-body); font-size: .68rem; font-weight: 600; line-height: 1.5; letter-spacing: .1em; text-transform: uppercase; color: #f4eef9; }
.footer__link { color: #c6bfce; font-size: .77rem; line-height: 1.65; transition: color 160ms var(--ease-out); }
.footer__link:hover { color: #fff; text-decoration: underline; text-underline-offset: 5px; }
.footer__info { color: #c6bfce; font-size: .77rem; line-height: 1.8; }
.footer__email { margin-top: 3px; overflow-wrap: anywhere; }
.footer__bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px 32px; padding-top: 22px; padding-bottom: 22px; border-top: 1px solid rgb(255 255 255 / 10%); color: #b9b1c4; font-size: .66rem; line-height: 1.7; }
.footer__bottom span { color: #c9b5d9; }
@media (max-width: 1180px) {
  .footer__inner { grid-template-columns: 210px minmax(0, 1fr); gap: 40px; }
  .footer__links { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .footer__col--contact { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 24px; }
  .footer__col--contact .footer__col-title { grid-column: 1 / -1; margin-bottom: 0; }
  .footer__email { grid-column: 1 / -1; }
}
@media (max-width: 760px) {
  .footer__inner { grid-template-columns: 1fr; gap: 40px; padding-top: 44px; padding-bottom: 36px; }
  .footer__links { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px 24px; }
  .footer__col--contact { grid-column: auto; display: flex; gap: 11px; }
  .footer__col--contact .footer__col-title { margin-bottom: 10px; }
  .footer__bottom { align-items: flex-start; flex-direction: column; gap: 4px; }
}
@media (max-width: 360px) { .footer__links { gap: 28px 18px; } .footer__link, .footer__info { font-size: .74rem; } }
</style>
