<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Guías Argentinas</span>
          <h1 class="section-title">Nuestras <em>Ramas</em></h1>
          <p class="section-subtitle">Cada rama tiene su propio programa, sus símbolos y su propuesta educativa. Encontrá el espacio ideal para cada etapa.</p>
        </header>
        <div class="ramas-grid" v-reveal>
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
