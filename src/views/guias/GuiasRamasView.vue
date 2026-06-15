<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <div style="margin-bottom: 3rem;">
          <span class="tag" style="background:rgba(106,27,154,0.3);color:var(--color-guia-accent);margin-bottom:14px;">Guías Argentinas</span>
          <h1 class="section-title">Nuestras <em style="font-style:italic;color:var(--color-guia-accent)">Ramas</em></h1>
          <p class="section-subtitle" style="margin-top:16px;">Cada rama tiene su propio programa, sus símbolos y su propuesta educativa. Encontrá el espacio ideal para cada etapa.</p>
        </div>
        <div class="ramas-grid">
          <BranchCard v-for="rama in GUIA_RAMAS" :key="rama.id" :rama="rama" base-path="/guias/ramas" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BranchCard from '@/components/shared/BranchCard.vue'
import { GUIA_RAMAS } from '@/stores/appStore.js'
</script>

<style scoped>
.ramas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
