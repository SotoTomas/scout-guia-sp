<template>
  <div class="nosotros">
    <nav class="nosotros__subnav" aria-label="Sobre la comunidad">
      <div class="container">
        <span class="nosotros__label">Nuestra comunidad</span>
        <RouterLink to="/nosotros/historia" class="subnav-link">Historia</RouterLink>
      </div>
    </nav>
    <RouterView v-slot="{ Component }">
      <Transition name="community-view" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
.nosotros { padding-top: var(--header-height, 80px); }
.nosotros__subnav { position: sticky; top: var(--header-height, 80px); z-index: 30; background: rgb(247 245 239 / 96%); border-bottom: 1px solid var(--color-border); }
.nosotros__subnav .container { display: flex; gap: .5rem; align-items: center; padding-block: .8rem; }
.nosotros__label { margin-right: auto; color: var(--color-text-muted); text-transform: uppercase; font-size: .65rem; font-weight: 700; letter-spacing: .13em; }
.subnav-link { padding: .55rem 1rem; border-radius: 999px; font-size: .82rem; font-weight: 600; color: var(--color-text-muted); transition: color 180ms var(--ease-out), background-color 180ms var(--ease-out); }
.subnav-link:hover, .subnav-link.router-link-active { color: var(--color-primary); background: var(--color-primary-light); }
.community-view-enter-active, .community-view-leave-active { transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out); }
.community-view-enter-from, .community-view-leave-to { opacity: 0; transform: translateY(6px); }
@media (max-width: 600px) {
  .nosotros__label { display: none; }
  .nosotros__subnav .container { justify-content: center; }
  .subnav-link { padding-inline: .9rem; }
}
@media (prefers-reduced-motion: reduce) {
  .community-view-enter-active, .community-view-leave-active { transition: none; }
  .community-view-enter-from, .community-view-leave-to { transform: none; }
}
</style>
