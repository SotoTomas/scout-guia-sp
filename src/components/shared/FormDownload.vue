<template>
  <a v-if="documentAvailable" :href="documentUrl" class="form-card__download" :aria-label="`Descargar ${name} en PDF`" download>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
    {{ label }}
  </a>
  <RouterLink v-else to="/#contacto" class="form-card__download" :aria-label="`Solicitar ${name}`">
    Solicitar formulario <span aria-hidden="true">↗</span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ url: { type: String, required: true }, name: { type: String, required: true }, label: { type: String, default: 'Descargar PDF' } })
// Publish official PDFs under public/pdfs; absent files keep a useful contact action.
const documents = import.meta.glob('/public/pdfs/*.pdf', { eager: true, query: '?url', import: 'default' })
const documentAvailable = computed(() => Object.hasOwn(documents, `/public${props.url}`))
const documentUrl = computed(() => `${import.meta.env.BASE_URL}${props.url.replace(/^\//, '')}`)
</script>
