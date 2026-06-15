<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <div style="margin-bottom: 3rem;">
          <span class="tag" style="background:rgba(27,77,142,0.3);color:var(--color-scout-yellow);margin-bottom:14px;">Scouts de Argentina</span>
          <h1 class="section-title">Nuestras <em style="font-style:italic;color:var(--color-scout-yellow)">Ramas</em></h1>
          <p class="section-subtitle" style="margin-top:16px;">Las ramas son los grupos de edad que organizan las actividades. Cada una con su propuesta, sus símbolos y sus desafíos.</p>
        </div>
        <div class="ramas-grid">
          <BranchCard v-for="rama in SCOUT_RAMAS" :key="rama.id" :rama="rama" base-path="/scouts/ramas" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BranchCard from '@/components/shared/BranchCard.vue'
import { SCOUT_RAMAS } from '@/stores/appStore.js'
</script>

<style scoped>
.ramas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
