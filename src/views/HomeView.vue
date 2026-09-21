<template>
  <div class="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__layout">
        <div class="hero__copy">
          <span class="hero__eyebrow"><span></span> Ramos Mejía · Desde 1981</span>
          <h1 id="hero-title">La aventura<br>de crecer <em>en<br class="hero__line"> comunidad.</em></h1>
          <p class="hero__desc">Un espacio donde chicos, chicas y jóvenes crecen jugando, aprendiendo y sirviendo junto a otros. Dos movimientos, una misma aventura.</p>
          <div class="hero__actions">
            <a href="https://www.gruposanpablo.com.ar/preinscripcion" target="_blank" rel="noreferrer" class="btn btn-primary">Quiero ser parte <AppIcon /></a>
            <RouterLink to="/nosotros/historia" class="hero__story"><span><AppIcon name="compass" :size="19" /></span> Nuestra historia</RouterLink>
          </div>
          <div class="hero__footnote"><span class="hero__footnote-mark"><AppIcon name="heart" :size="17" /></span><p>Amistades que acompañan.<br><strong>Experiencias que quedan para siempre.</strong></p></div>
        </div>
        <div class="hero__art">
          <div class="hero__poster">
            <img :src="campIllustration" alt="Ilustración de un campamento entre montañas, árboles y senderos al atardecer" width="640" height="680" fetchpriority="high" loading="eager" decoding="async">
            <div class="hero__poster-label"><AppIcon name="tent" :size="21" /><span>Menos pantallas.<br><strong>Más historias para contar.</strong></span></div>
            <span class="hero__coordinates" aria-hidden="true">34°39′ S · 58°34′ O</span>
          </div>
          <div class="hero__stamp" aria-label="En comunidad desde 1981"><span>Siempre juntos</span><AppIcon name="compass" :size="34" /><strong>desde 1981</strong></div>
          <span class="hero__art-note">El mejor camino es el que hacemos juntos.</span>
        </div>
      </div>
      <div class="container hero__bottom"><a href="#movimientos">Descubrí la comunidad <AppIcon name="down" :size="16" /></a><span>SCOUTS & GUÍAS · SAN PABLO</span></div>
    </section>

    <div class="values-strip">
      <div class="container values-strip__inner">
        <span><AppIcon name="mountain" /> Aprender haciendo</span><i aria-hidden="true"></i>
        <span><AppIcon name="heart" /> Crecer compartiendo</span><i aria-hidden="true"></i>
        <span><AppIcon name="compass" /> Vivir la aventura</span><i aria-hidden="true"></i>
        <span><AppIcon name="hands" /> Servir con alegría</span>
      </div>
    </div>

    <section id="movimientos" class="section associations">
      <div class="container">
        <div v-reveal class="associations__heading">
          <div><span class="eyebrow">Una misma forma de mirar el mundo</span><h2 class="section-title">Dos movimientos.<br><em>Una gran comunidad.</em></h2></div>
          <p class="section-subtitle">Nos encontramos en el barrio, en los valores y en la vida. Dos caminos que marchan juntos desde hace más de cuatro décadas.</p>
        </div>
        <div class="associations__cards">
          <RouterLink v-reveal to="/scouts" class="assoc-card assoc-card--scout">
            <div class="assoc-card__top"><span class="assoc-card__label">Explorar · Aprender · Servir</span><span class="assoc-card__arrow"><AppIcon name="northeast" /></span></div>
            <div class="assoc-card__identity"><img :src="scoutLogo" alt="Emblema de Scouts de Argentina" width="54" height="80" loading="lazy" decoding="async"><h3>Scouts de<br>Argentina</h3></div>
            <p>El método scout propone una educación activa donde los jóvenes aprenden haciendo, en contacto con la naturaleza y en servicio a la comunidad. Nuestro grupo pertenece a <strong>Scouts Argentina Asociación Civil (SAAC)</strong>.</p>
            <div class="assoc-card__ramas"><span v-for="rama in scoutNames" :key="rama">{{ rama }}</span></div>
            <span class="assoc-card__cta">Descubrí el movimiento scout <AppIcon /></span>
          </RouterLink>
          <RouterLink v-reveal="80" to="/guias" class="assoc-card assoc-card--guia">
            <div class="assoc-card__top"><span class="assoc-card__label">Descubrir · Liderar · Transformar</span><span class="assoc-card__arrow"><AppIcon name="northeast" /></span></div>
            <div class="assoc-card__identity"><img :src="guiaLogo" alt="Emblema de la Asociación Guías Argentinas" width="80" height="80" loading="lazy" decoding="async"><h3>Asociación<br>Guías Argentinas</h3></div>
            <p>El movimiento guía forma líderes comprometidas con sus valores, su comunidad y el mundo. Nuestro grupo integra la <strong>Asociación Guías Argentinas (AGA)</strong>, con sus propias tradiciones y programa educativo.</p>
            <div class="assoc-card__ramas"><span v-for="rama in guiaNames" :key="rama">{{ rama }}</span></div>
            <span class="assoc-card__cta">Descubrí el movimiento guía <AppIcon /></span>
          </RouterLink>
        </div>
      </div>
    </section>

    <HomeBranches />

    <section class="belonging">
      <div v-reveal class="container belonging__inner"><span class="belonging__since">1981<span>El comienzo de nuestra historia</span></span><div><span class="eyebrow">Mucho más que un pañuelo</span><h2>Hay lugares a los que vas.<br>Y otros a los que <em>pertenecés.</em></h2><RouterLink to="/nosotros/historia">Conocé nuestra historia <AppIcon /></RouterLink></div></div>
    </section>

    <HomeServices />

    <section id="contacto" class="contact">
      <div class="container">
        <div v-reveal class="contact__panel">
          <div class="contact__copy"><span class="eyebrow">El próximo paso empieza acá</span><h2 class="section-title">Tu próxima aventura<br><em>tiene un lugar.</em></h2><p>¿Querés que tu hijo o hija se sume? ¿Tenés ganas de colaborar? Nos encantaría conocerte.</p><a href="https://www.gruposanpablo.com.ar/preinscripcion" target="_blank" rel="noreferrer" class="btn btn-primary">Sumate a San Pablo <AppIcon /></a></div>
          <div class="contact__details"><span class="contact__label">Estamos cerca</span><div class="contact__item"><AppIcon name="pin" /><p>Fray Cayetano Rodríguez 100<br><strong>Ramos Mejía, Buenos Aires</strong></p></div><div class="contact__item"><AppIcon name="mail" /><a href="mailto:comunidad@scoutguiasp.org.ar">comunidad@scoutguiasp.org.ar</a></div><a class="contact__write" href="mailto:comunidad@scoutguiasp.org.ar">Escribinos <AppIcon name="northeast" :size="18" /></a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppIcon from '@/components/shared/AppIcon.vue'
import HomeBranches from '@/components/home/HomeBranches.vue'
import HomeServices from '@/components/home/HomeServices.vue'
import campIllustration from '@/assets/illustrations/camp.svg'
import scoutLogo from '@/assets/brand/scouts.webp'
import guiaLogo from '@/assets/brand/guides.webp'
const scoutNames = ['Manada', 'Unidad', 'Caminantes', 'Rovers']
const guiaNames = ['Pimpollitos', 'Alitas', 'Caravanas', 'Guías del Sol', 'Guías Mayores']
</script>

<style scoped>
.hero { padding-top: var(--header-height); overflow: clip; background: radial-gradient(ellipse at 0% 25%, #eee7f050, transparent 55%), var(--color-bg); }
.hero__layout { display: grid; grid-template-columns: 1.04fr 1fr; align-items: center; gap: 62px; padding-block: 64px 48px; }
.hero__eyebrow { display: flex; align-items: center; gap: 9px; font-size: .7rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--color-primary); margin-bottom: 26px; }
.hero__eyebrow > span { width: 6px; height: 6px; border-radius: 50%; background: #6b876d; box-shadow: 0 0 0 4px #6b876d15; }
.hero h1 { font-family: var(--font-display); font-size: clamp(3.25rem, 5.8vw, 5rem); font-weight: 700; line-height: 1.04; letter-spacing: -.055em; margin-bottom: 26px; }
.hero h1 em { color: var(--color-primary); font-weight: 400; }
.hero__desc { max-width: 440px; font-size: 1rem; line-height: 1.85; color: var(--color-text-muted); margin-bottom: 30px; }
.hero__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
.hero__story { display: inline-flex; align-items: center; gap: 9px; min-height: 48px; font-size: .85rem; font-weight: 600; }
.hero__story > span { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid #cdc7d2; border-radius: 50%; color: var(--color-primary); transition: transform var(--transition-normal); }
.hero__story:hover > span { transform: rotate(30deg); }
.hero__footnote { display: flex; align-items: center; gap: 12px; margin-top: 38px; }
.hero__footnote-mark { display: grid; place-items: center; width: 34px; height: 34px; color: #607c63; background: #e8ecdf; border-radius: 50%; }
.hero__footnote p { font-size: .7rem; color: var(--color-text-muted); line-height: 1.65; }
.hero__footnote strong { font-weight: 500; color: var(--color-text); }
.hero__art { position: relative; padding-left: 12px; }
.hero__poster { position: relative; overflow: hidden; border-radius: 160px 160px 28px 28px; background: #e7dccf; box-shadow: 0 4px 8px #45365106, 0 28px 60px #45365112; }
.hero__poster > img { width: 100%; aspect-ratio: 640 / 680; object-fit: cover; }
.hero__poster-label { position: absolute; bottom: 30px; left: 28px; right: 28px; display: flex; gap: 14px; align-items: center; padding: 16px 19px; background: #fffdf1ed; color: #3d5145; border: 1px solid #ffffffa0; border-radius: 12px; }
.hero__poster-label span { font-size: .7rem; line-height: 1.6; }
.hero__poster-label strong { font-size: .85rem; font-weight: 600; }
.hero__coordinates { position: absolute; top: 34px; left: 50%; transform: translateX(-50%); color: #585660; font-size: .6rem; letter-spacing: .18em; white-space: nowrap; }
.hero__stamp { position: absolute; right: -23px; top: 55px; width: 114px; height: 114px; border: 1px solid #b09339; outline: 5px solid var(--color-bg); background: #edca72; color: #4a3e23; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; transform: rotate(12deg); box-shadow: var(--shadow-md); }
.hero__stamp span, .hero__stamp strong { font-size: .58rem; text-transform: uppercase; letter-spacing: .12em; font-weight: 600; }
.hero__art-note { display: block; margin-top: 14px; text-align: center; color: var(--color-text-muted); font-size: .68rem; letter-spacing: .025em; }
.hero__bottom { display: flex; align-items: center; justify-content: space-between; padding-bottom: 26px; }
.hero__bottom a { display: flex; align-items: center; gap: 18px; min-height: 44px; color: var(--color-text-muted); font-size: .7rem; }
.hero__bottom a:hover { color: var(--color-primary); }
.hero__bottom > span { color: var(--color-text-muted); font-size: .55rem; letter-spacing: .18em; }
.values-strip { border-block: 1px solid #dedbd4; background: #f0eee7; }
.values-strip__inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding-block: 24px; }
.values-strip span { display: flex; align-items: center; gap: 12px; font-size: .8rem; font-weight: 500; }
.values-strip svg { color: var(--color-primary); }
.values-strip i { width: 3px; height: 3px; border-radius: 50%; background: #b6aebd; }
.associations__heading { display: flex; justify-content: space-between; align-items: end; gap: 40px; margin-bottom: 44px; }
.associations__heading .section-subtitle { max-width: 365px; }
.associations__cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.assoc-card { display: flex; flex-direction: column; padding: 32px; border: 1px solid #d7e0e4; border-radius: 24px; background: #f0f5f7; transition: transform var(--transition-normal), box-shadow var(--transition-normal); }
.assoc-card--guia { background: #f3f1e9; border-color: #e0ddce; }
.assoc-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.assoc-card__top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.assoc-card__label { font-size: .59rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #465d6b; }
.assoc-card--guia .assoc-card__label { color: #64604b; }
.assoc-card__arrow { display: grid; place-items: center; width: 38px; height: 38px; flex-shrink: 0; border: 1px solid #cbd8dd; border-radius: 50%; }
.assoc-card__identity { display: flex; align-items: center; gap: 24px; margin-block: 20px 22px; min-height: 100px; }
.assoc-card__identity img { object-fit: contain; flex-shrink: 0; max-height: 80px; }
.assoc-card h3 { font-family: var(--font-display); font-size: clamp(1.8rem, 2.6vw, 2.25rem); line-height: 1.12; letter-spacing: -.04em; font-weight: 700; }
.assoc-card p { color: var(--color-text-muted); font-size: .875rem; line-height: 1.8; margin-bottom: 24px; }
.assoc-card p strong { font-weight: 600; color: var(--color-text); }
.assoc-card__ramas { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 30px; }
.assoc-card__ramas span { padding: 4px 10px; border: 1px solid #d6dfe2; border-radius: 6px; font-size: .65rem; background: #ffffff60; }
.assoc-card--guia .assoc-card__ramas span { border-color: #dedbce; }
.assoc-card__cta { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 20px; border-top: 1px solid #d6dfe2; font-size: .8rem; font-weight: 600; color: var(--color-scout-primary); }
.assoc-card--guia .assoc-card__cta { border-color: #dedbce; color: var(--color-guia-primary); }
.belonging { padding-block: 76px; background: #30263e; color: #f8f3e8; }
.belonging__inner { display: grid; grid-template-columns: 1fr 1.35fr; align-items: center; gap: 70px; }
.belonging__since { display: block; text-align: center; font-family: var(--font-display); font-size: clamp(5.5rem, 11vw, 9rem); line-height: 1; letter-spacing: -.06em; color: #e8c77e; }
.belonging__since span { display: block; margin-top: 18px; font-family: var(--font-body); color: #d6cddb; font-size: .7rem; letter-spacing: .01em; }
.belonging__inner > div { border-left: 1px solid #ffffff25; padding-left: 64px; }
.belonging .eyebrow { color: #dac2ea; font-size: .65rem; }
.belonging h2 { font-family: var(--font-display); font-size: clamp(1.8rem, 3.1vw, 2.7rem); line-height: 1.2; font-weight: 400; letter-spacing: -.03em; }
.belonging h2 em { color: #e8c77e; }
.belonging a { display: flex; align-items: center; gap: 16px; width: fit-content; min-height: 44px; margin-top: 20px; font-size: .8rem; }
.belonging a:hover { text-decoration: underline; text-underline-offset: 5px; }
.contact { padding-block: 0 var(--space-2xl); }
.contact__panel { display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: center; padding: 54px; border: 1px solid #dcd4e4; border-radius: 28px; background: #ede7f2; }
.contact .section-title { font-size: clamp(2rem, 3.7vw, 3rem); }
.contact__copy p { margin-block: 20px 26px; color: var(--color-text-muted); max-width: 370px; font-size: .9rem; }
.contact__details { border-left: 1px solid #d4c9de; padding-left: 36px; }
.contact__label { display: block; text-transform: uppercase; letter-spacing: .12em; font-size: .65rem; font-weight: 700; margin-bottom: 26px; }
.contact__item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 22px; font-size: .8rem; }
.contact__item svg { flex-shrink: 0; color: var(--color-primary); margin-top: 2px; }
.contact__item p { color: var(--color-text-muted); }
.contact__item strong { font-weight: 500; color: var(--color-text); }
.contact__item a { overflow-wrap: anywhere; }
.contact__item a:hover { text-decoration: underline; }
.contact__write { display: inline-flex; align-items: center; gap: 35px; min-height: 44px; color: var(--color-primary); font-size: .8rem; font-weight: 600; border-bottom: 1px solid #b6a5c9; }
@media (max-width: 1000px) { .hero__layout { gap: 36px; } .hero h1 { font-size: clamp(3rem, 6vw, 4rem); } .hero__stamp { right: -10px; width: 94px; height: 94px; } .hero__stamp svg { width: 28px; } .hero__actions { gap: 14px; } .contact__panel { padding: 36px; gap: 32px; } .contact__details { padding-left: 24px; } }
@media (max-width: 760px) { .hero__layout { grid-template-columns: 1fr; gap: 42px; padding-block: 40px 30px; } .hero h1 { font-size: clamp(3.25rem, 10vw, 4.5rem); } .hero__line { display: none; } .hero__desc { max-width: 510px; } .hero__art { padding-left: 0; max-width: 460px; width: 100%; margin-inline: auto; } .hero__poster { border-radius: 130px 130px 24px 24px; } .hero__poster > img { aspect-ratio: 1.12; object-position: 50% 70%; } .hero__footnote { margin-top: 24px; } .hero__stamp { top: 35px; right: 0; } .hero__bottom > span { display: none; } .values-strip__inner { display: grid; grid-template-columns: 1fr 1fr; gap: 22px 16px; } .values-strip i { display: none; } .values-strip span { font-size: .72rem; gap: 9px; } .associations__heading { display: block; } .associations__heading .section-subtitle { margin-top: 24px; max-width: 100%; } .associations__cards { grid-template-columns: 1fr; } .assoc-card { padding: 26px; } .belonging__inner { gap: 32px; grid-template-columns: 1fr; text-align: center; } .belonging__inner > div { border: 0; padding-left: 0; } .belonging a { margin-inline: auto; } .contact__panel { grid-template-columns: 1fr; gap: 36px; padding: 32px 24px; } .contact__details { border-left: 0; border-top: 1px solid #d4c9de; padding: 26px 0 0; } }
@media (max-width: 380px) { .hero__actions { align-items: flex-start; gap: 12px; flex-direction: column; } .hero h1 { font-size: 3rem; } .assoc-card__identity { gap: 16px; } .assoc-card h3 { font-size: 1.6rem; } }
</style>
