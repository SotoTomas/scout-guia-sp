<template>
  <section class="not-found">
    <div class="not-found__content" v-reveal>
      <span class="eyebrow">Un pequeño desvío en el camino</span>
      <div class="not-found__code" aria-hidden="true">404<span>↗</span></div>
      <h1 class="not-found__title">Volvamos al<br><em>campamento base.</em></h1>
      <p class="not-found__desc">No encontramos esta página. Puede que el enlace haya cambiado, pero la aventura sigue por acá.</p>
      <RouterLink to="/" class="btn btn-primary">Volver al inicio <span aria-hidden="true">↗</span></RouterLink>
      <RouterLink to="/nosotros/historia" class="not-found__link">Conocer nuestra comunidad</RouterLink>
    </div>
    <div class="not-found__contour" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.not-found { min-height: 90svh; display: grid; place-items: center; position: relative; overflow: hidden; text-align: center; padding: 9rem 1.5rem 5rem; }
.not-found__content { position: relative; z-index: 1; max-width: 640px; }
.not-found__code { display: flex; justify-content: center; align-items: center; gap: .3em; margin: 1.5rem 0; font-family: var(--font-display); font-size: clamp(4rem, 12vw, 7rem); line-height: 1; font-weight: 400; color: var(--color-primary); }
.not-found__code span { font-family: var(--font-body); font-size: .5em; border: 1px solid var(--color-border); border-radius: 50%; width: 1.7em; height: 1.7em; display: grid; place-items: center; }
.not-found__title { font-family: var(--font-display); font-size: clamp(2.4rem, 6vw, 4.5rem); line-height: 1.08; font-weight: 500; letter-spacing: -.035em; }
.not-found__title em { color: var(--color-primary); font-weight: 400; }
.not-found__desc { color: var(--color-text-muted); max-width: 400px; margin: 1.5rem auto 2rem; line-height: 1.8; }
.not-found__link { display: block; width: fit-content; margin: 1.5rem auto 0; font-size: .87rem; text-decoration: underline; text-underline-offset: .3em; color: var(--color-primary); }
.not-found__contour { position: absolute; width: 65vw; height: 65vw; min-width: 400px; min-height: 400px; right: -35vw; bottom: -35vw; border: 1px solid var(--color-border); border-radius: 46% 54% 42% 58%; box-shadow: 0 0 0 35px rgb(90 63 123 / 3%), 0 0 0 70px rgb(90 63 123 / 3%), 0 0 0 105px rgb(90 63 123 / 3%); pointer-events: none; }
</style>
