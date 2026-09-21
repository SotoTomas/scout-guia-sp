<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Scouts de Argentina</span>
          <h1 class="section-title">Nuestras <em>Ramas</em></h1>
          <p class="section-subtitle">Las ramas son los grupos de edad que organizan las actividades. Cada una con su propuesta, sus símbolos y sus desafíos.</p>
        </header>
        <div class="ramas-grid" v-reveal>
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
