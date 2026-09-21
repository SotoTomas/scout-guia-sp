<template>
  <div :class="['app-root', appStore.themeClass]">
    <a href="#main-content" class="skip-link">Saltar al contenido</a>
    <AppHeader />
    <main id="main-content" tabindex="-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/appStore.js'
import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'

const route = useRoute()
const appStore = useAppStore()

watch(
  () => route.meta?.theme,
  (theme) => appStore.setTheme(theme || 'community'),
  { immediate: true }
)
</script>

<style>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
