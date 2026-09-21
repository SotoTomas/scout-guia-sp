<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path v-for="(path, index) in paths" :key="index" :d="path" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ name: { type: String, default: 'arrow' }, size: { type: [Number, String], default: 20 } })
const icons = {
  arrow: ['M4 12h16m-6-6 6 6-6 6'],
  northeast: ['M6 18 18 6M6 6h12v12'],
  down: ['M12 4v16m-6-6 6 6 6-6'],
  compass: ['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', 'm16 8-3 5-5 3 3-5 5-3Z'],
  mountain: ['m2 20 8-16 5 10 3-5 5 11H2Z', 'm7 10 3 2 3-2'],
  tent: ['m2 20 10-16 10 16H2Z', 'm8 20 4-8 4 8M10 2l4 3'],
  heart: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z'],
  pin: ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'],
  mail: ['M3 5h18v14H3V5Z', 'm3 6 9 7 9-7'],
  home: ['m3 10 9-7 9 7v11H3V10Z', 'M9 21v-8h6v8'],
  book: ['M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Z', 'M12 5v15'],
  hands: ['m2 13 5 1 4 4h6l5-7-3-1-4 5', 'm3 19 4-1 4 3h6l5-4M6 5l3-3 3 3 3-3 3 3-6 6-6-6Z'],
  close: ['m6 6 12 12M6 18 18 6'],
}
const paths = computed(() => icons[props.name] || icons.arrow)
</script>
