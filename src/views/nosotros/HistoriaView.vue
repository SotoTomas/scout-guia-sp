<template>
  <div class="historia">
    <section class="section">
      <div class="container">
        <div class="historia__hero" v-reveal>
          <header class="historia__header">
            <span class="eyebrow">Nuestra historia · Ramos Mejía</span>
            <h1 class="section-title">Una historia de<br><em>servicio y comunidad.</em></h1>
            <p class="section-subtitle">La Comunidad Scout-Guía San Pablo nació a principios de 1981 en la capilla de San Pablo, en Ramos Mejía, de la mano de las hermanas scalabrinianas Neli y Albertina, Carlos Vázquez y Miriam "Yiyi" Leo, y Mónica Aledda. Lo que empezó como un grupo de catequesis se convirtió, más de cuatro décadas después, en una comunidad que sigue marcando generaciones.</p>
          </header>
          <div class="historia__year-card" aria-label="Desde 1981, Comunidad Scout-Guía San Pablo">
            <span class="eyebrow">El comienzo de un camino</span>
            <span class="historia__year">1981</span>
            <span class="historia__year-rule" aria-hidden="true"></span>
            <p>Dos movimientos.<br>Una misma comunidad.</p>
            <span class="historia__location">San Pablo · Ramos Mejía</span>
          </div>
        </div>
        <div class="historia__body" v-reveal><p>En mayo de 1981 se realizaron las primeras actividades de Lobatos, Scouts, Alitas, Guías en Caravana y Guías del Sol. Meses después, el 23 de agosto, se hicieron las primeras promesas y, junto con un asado familiar, quedó marcada la fundación de la Pequeña Comunidad Scout-Guía San Pablo. El aniversario, sin embargo, se festeja en septiembre: ese mes la comunidad se afilió a USCA por parte de los Scouts (grupo N°410) y a AGA por parte de las Guías (comunidad N°59).</p>
          <p>En 1983 y 1984 se consiguieron los terrenos de la esquina de Alsina y Fray Cayetano Rodríguez, donde hoy funciona nuestra sede. Con los años se abrieron los Raiders (hoy Caminantes), los Rovers y el Clan, el comité de padres se hizo mixto, y la comunidad empezó a participar de eventos nacionales e internacionales — entre ellos, el Rover Moot Interamericano de Chile en 1988, nuestro primer evento internacional.</p></div>
      </div>
    </section>

    <section class="section hitos">
      <div class="container hitos__layout">
        <header class="hitos__header" v-reveal>
          <span class="eyebrow">Nuestra memoria compartida</span>
          <h2 class="section-title">Pequeños pasos.<br><em>Grandes hitos.</em></h2>
          <p class="section-subtitle">Momentos que marcaron nuestra memoria y una pequeña parte de nuestra identidad.</p>
        </header>
        <ol class="hitos__timeline">
          <li v-for="hito in HITOS" :key="hito.año" class="hito" v-reveal>
            <span class="hito__year">{{ hito.año }}</span>
            <div class="hito__content">
              <h3>{{ hito.titulo }}</h3>
              <p>{{ hito.descripcion }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section galeria">
      <div class="container">
        <div class="galeria__invite" v-reveal>
          <div class="galeria__symbol" aria-hidden="true">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>
          <div>
            <span class="eyebrow">Galería de momentos</span>
            <h2>Hay recuerdos que merecen compartirse.</h2>
            <p>Campamentos, ceremonias, amistades y recuerdos en nuestra comunidad. Todavía no hay fotos publicadas en esta galería. Si tenés un recuerdo para compartir, escribinos.</p>
          </div>
          <RouterLink to="/#contacto" class="btn btn-secondary">Compartir un recuerdo <span aria-hidden="true">↗</span></RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Hitos históricos conservados de la versión de contenido de la comunidad.
const HITOS = [
  {
    año: '1981',
    titulo: 'Nace la comunidad',
    descripcion: 'En la capilla de San Pablo, un grupo de catequesis impulsado por las hermanas scalabrinianas Neli y Albertina, junto a Carlos Vázquez, Miriam "Yiyi" Leo y Mónica Aledda, da origen a nuestra comunidad.',
  },
  {
    año: 'Agosto 1981',
    titulo: 'Primeras promesas',
    descripcion: 'El 23 de agosto se realizan las primeras promesas scouts y guías, celebradas con un asado familiar que hoy recordamos como la fundación.',
  },
  {
    año: 'Septiembre 1981',
    titulo: 'Afiliación oficial',
    descripcion: 'La comunidad se afilia a USCA (grupo N°410) por los Scouts y a AGA (comunidad N°59) por las Guías — por eso festejamos nuestro aniversario en septiembre.',
  },
  {
    año: '1982',
    titulo: 'Primer campamento de verano',
    descripcion: 'Lobatos, Scouts, Alitas, Caravana y Solar viven el primer campamento de verano en Jáuregui.',
  },
  {
    año: '1983–1984',
    titulo: 'Terrenos propios',
    descripcion: 'Se consiguen los terrenos de Alsina y Fray Cayetano Rodríguez, donde funciona nuestra sede hasta el día de hoy.',
  },
  {
    año: '1988',
    titulo: 'Primer evento internacional',
    descripcion: 'Rovers y Guías Mayores de San Pablo representan a la comunidad en el Rover Moot Interamericano de Chile.',
  },
]
</script>

<style scoped>
.historia__hero { display: grid; grid-template-columns: 1.6fr 1fr; gap: 5rem; align-items: center; }
.historia__header .eyebrow, .hitos__header .eyebrow { margin-bottom: 1.25rem; }
.section-title em { color: var(--color-primary); font-weight: 500; }
.historia__header .section-subtitle { margin-top: 1.5rem; font-size: 1rem; line-height: 1.9; }
.historia__year-card { aspect-ratio: 1; border: 1px solid #d7cce0; border-radius: 50% 50% 1rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2.5rem 1.5rem; background: #eee7f1; color: var(--color-primary); }
.historia__year-card .eyebrow { font-size: .62rem; }
.historia__year { font-family: var(--font-display); font-size: clamp(4.5rem, 8vw, 7rem); font-weight: 400; letter-spacing: -.055em; line-height: 1.2; }
.historia__year-rule { width: 2rem; height: 1px; margin: 1rem 0; background: currentColor; }
.historia__year-card p { font-family: var(--font-display); font-size: 1.4rem; line-height: 1.4; }
.historia__location { margin-top: 1.75rem; font-size: .65rem; letter-spacing: .08em; text-transform: uppercase; }
.historia__body { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid var(--color-border); }
.historia__body p { font-size: .94rem; color: var(--color-text-muted); line-height: 1.9; }
.hitos { background: #eeede5; border-block: 1px solid var(--color-border); }
.hitos__layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
.hitos__header { position: sticky; top: calc(var(--header-height, 80px) + 100px); }
.hitos__header .section-title { font-size: clamp(2rem, 4vw, 3rem); }
.hitos__header .section-subtitle { font-size: .95rem; margin-top: 1.5rem; }
.hitos__timeline { list-style: none; }
.hito { display: grid; grid-template-columns: 115px 1fr; gap: 1.75rem; padding-bottom: 2.5rem; position: relative; }
.hito:not(:last-child)::before { content: ''; position: absolute; left: 123px; top: .65rem; height: 100%; width: 1px; background: rgb(90 63 123 / 20%); }
.hito:last-child { padding-bottom: 0; }
.hito__year { color: var(--color-primary); font-family: var(--font-display); font-size: 1.35rem; line-height: 1.3; }
.hito__content { padding-left: 1rem; position: relative; }
.hito__content::before { content: ''; position: absolute; left: -23px; top: .55rem; width: 7px; height: 7px; background: var(--color-primary); border-radius: 50%; }
.hito__content h3 { font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; line-height: 1.3; margin-bottom: .65rem; }
.hito__content p { color: var(--color-text-muted); font-size: .9rem; line-height: 1.8; }
.galeria__invite { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 1.5rem 2rem; padding: 3rem; border: 1px solid var(--color-border); background: var(--color-paper); border-radius: var(--radius-lg); }
.galeria__symbol { color: var(--color-primary); width: 100px; height: 100px; border: 1px solid var(--color-border); display: grid; place-items: center; border-radius: 1rem; transform: rotate(-5deg); }
.galeria__invite h2 { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 500; margin: .75rem 0; }
.galeria__invite p { max-width: 650px; font-size: .9rem; color: var(--color-text-muted); line-height: 1.8; }
.galeria__invite .btn { grid-column: 2; justify-self: start; }
@media (max-width: 950px) {
  .historia__hero { gap: 2.5rem; }
  .hitos__layout { grid-template-columns: 1fr; gap: 3rem; }
  .hitos__header { position: static; max-width: 550px; }
}
@media (max-width: 700px) {
  .historia__hero, .historia__body { grid-template-columns: 1fr; }
  .historia__year-card { max-width: 320px; width: 100%; justify-self: center; }
  .historia__body { margin-top: 2.5rem; gap: 1.5rem; }
  .galeria__invite { padding: 1.5rem; grid-template-columns: 1fr; }
  .galeria__invite .btn { grid-column: 1; }
  .galeria__symbol { width: 70px; height: 70px; }
}
@media (max-width: 420px) {
  .hito { grid-template-columns: 80px 1fr; gap: 1rem; }
  .hito__year { font-size: 1.05rem; }
  .hito:not(:last-child)::before { left: 88px; }
  .hito__content { padding-left: .5rem; }
  .hito__content::before { left: -11px; }
}
</style>
